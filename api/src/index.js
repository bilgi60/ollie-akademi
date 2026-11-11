// Ollie Akademi API — Cloudflare Worker + D1
// Veli hesapları, çocuk profilleri, ilerleme ve yönetici paneli.

const SESSION_DAYS = 60;
const MAX_CHILDREN = 6;
const MAX_DATA = 300_000;          // bir çocuğun ilerleme verisi için üst sınır (bayt)
const PBKDF2_ITER = 100_000;       // Workers'ın izin verdiği en yüksek değer
const FAIL_LIMIT = 8, FAIL_LOCK_MIN = 15;

const now = () => Date.now();
const enc = new TextEncoder();
const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
const randHex = n => { const a = new Uint8Array(n); crypto.getRandomValues(a); return hex(a); };
const sha256 = async s => hex(await crypto.subtle.digest("SHA-256", enc.encode(s)));

async function hashPw(salt, pw) {
  const key = await crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: enc.encode(salt), iterations: PBKDF2_ITER }, key, 256);
  return hex(bits);
}
function safeEq(a, b) {
  if (a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
const trDay = (t = now()) => new Date(t + 3 * 3600_000).toISOString().slice(0, 10); // Türkiye saatiyle gün

class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
const bad = (msg, status = 400) => { throw new HttpError(status, msg); };

function cors(req, env) {
  const origin = req.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim());
  const h = { "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS", "Access-Control-Allow-Headers": "Content-Type,Authorization", "Access-Control-Max-Age": "86400", "Vary": "Origin" };
  if (allowed.includes(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}
const json = (data, status = 200, extra = {}) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...extra } });

async function body(req) {
  try { return await req.json(); } catch { bad("Geçersiz istek."); }
}
const cleanEmail = e => String(e || "").trim().toLowerCase();
const validEmail = e => /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/.test(e);
function checkPw(pw) {
  pw = String(pw || "");
  if (pw.length < 8) bad("Şifre en az 8 karakter olmalı.");
  if (pw.length > 200) bad("Şifre çok uzun.");
  return pw;
}
function cleanName(n) {
  n = String(n || "").trim().replace(/\s+/g, " ");
  if (!n) bad("Çocuğun adını yaz.");
  if (n.length > 30) bad("Ad en fazla 30 karakter olabilir.");
  return n;
}
const cleanAvatar = a => { a = String(a || "🦊"); return a.length <= 8 ? a : "🦊"; };

async function newSession(env, parentId) {
  const token = randHex(32);
  await env.DB.prepare("INSERT INTO sessions (token_hash, parent_id, expires_at) VALUES (?, ?, ?)")
    .bind(await sha256(token), parentId, now() + SESSION_DAYS * 86400_000).run();
  return token;
}
async function auth(req, env) {
  const m = (req.headers.get("Authorization") || "").match(/^Bearer ([0-9a-f]{64})$/);
  if (!m) bad("Oturum açman gerekiyor.", 401);
  const th = await sha256(m[1]);
  const p = await env.DB.prepare("SELECT p.* , s.token_hash FROM sessions s JOIN parents p ON p.id = s.parent_id WHERE s.token_hash = ? AND s.expires_at > ?")
    .bind(th, now()).first();
  if (!p) bad("Oturumun sona erdi, yeniden giriş yap.", 401);
  if (p.status !== "active") bad("Bu hesap askıya alındı.", 403);
  if (!p.last_seen || now() - p.last_seen > 3600_000)
    await env.DB.prepare("UPDATE parents SET last_seen = ? WHERE id = ?").bind(now(), p.id).run();
  return p;
}
const publicParent = p => ({ id: p.id, email: p.email, role: p.role, status: p.status, email_verified: !!p.email_verified, weekly_report: p.weekly_report !== 0, created_at: p.created_at });
const childSummary = c => ({ id: c.id, name: c.name, avatar: c.avatar, score: c.score, created_at: c.created_at, updated_at: c.updated_at });

async function getChild(env, parent, id) {
  const c = await env.DB.prepare("SELECT * FROM children WHERE id = ? AND parent_id = ?").bind(id, parent.id).first();
  if (!c) bad("Profil bulunamadı.", 404);
  return c;
}
function parseData(d) {
  if (d == null) return {};
  if (typeof d !== "object" || Array.isArray(d)) bad("Geçersiz ilerleme verisi.");
  const s = JSON.stringify(d);
  if (s.length > MAX_DATA) bad("İlerleme verisi çok büyük.");
  return d;
}

/* ---------------- Veli uç noktaları ---------------- */

async function register(req, env, ctx) {
  const b = await body(req);
  const email = cleanEmail(b.email);
  if (!validEmail(email)) bad("Geçerli bir e-posta adresi yaz.");
  const pw = checkPw(b.password);
  if (!b.consent) bad("Devam etmek için veli onayını işaretle.");
  const exists = await env.DB.prepare("SELECT id FROM parents WHERE email = ?").bind(email).first();
  if (exists) bad("Bu e-posta ile zaten bir hesap var. Giriş yapmayı dene.", 409);
  const salt = randHex(16);
  const r = await env.DB.prepare("INSERT INTO parents (email, pw_salt, pw_hash, created_at, last_seen) VALUES (?, ?, ?, ?, ?)")
    .bind(email, salt, await hashPw(salt, pw), now(), now()).run();
  const id = r.meta.last_row_id;
  const p = await env.DB.prepare("SELECT * FROM parents WHERE id = ?").bind(id).first();
  if (mailReady(env)) ctx.waitUntil(sendVerify(env, p).catch(e => console.error(e)));
  return json({ token: await newSession(env, id), parent: publicParent(p), children: [], mail: mailReady(env) }, 201);
}

async function login(req, env) {
  const b = await body(req);
  const email = cleanEmail(b.email);
  const f = await env.DB.prepare("SELECT * FROM login_fails WHERE email = ?").bind(email).first();
  if (f && f.count >= FAIL_LIMIT && f.until > now()) bad(`Çok fazla hatalı deneme. ${FAIL_LOCK_MIN} dakika sonra tekrar dene.`, 429);
  const p = await env.DB.prepare("SELECT * FROM parents WHERE email = ?").bind(email).first();
  const ok = p && safeEq(await hashPw(p.pw_salt, String(b.password || "")), p.pw_hash);
  if (!ok) {
    const count = f && f.until > now() ? f.count + 1 : 1;
    await env.DB.prepare("INSERT INTO login_fails (email, count, until) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET count = excluded.count, until = excluded.until")
      .bind(email, count, now() + FAIL_LOCK_MIN * 60_000).run();
    bad("E-posta ya da şifre yanlış.", 401);
  }
  if (p.status !== "active") bad("Bu hesap askıya alındı. Bilgi için site yöneticisine yaz.", 403);
  await env.DB.prepare("DELETE FROM login_fails WHERE email = ?").bind(email).run();
  await env.DB.prepare("DELETE FROM sessions WHERE parent_id = ? AND expires_at < ?").bind(p.id, now()).run();
  await env.DB.prepare("UPDATE parents SET last_seen = ? WHERE id = ?").bind(now(), p.id).run();
  const { results } = await env.DB.prepare("SELECT id, name, avatar, score, created_at, updated_at FROM children WHERE parent_id = ? ORDER BY id").bind(p.id).all();
  return json({ token: await newSession(env, p.id), parent: publicParent(p), children: results.map(childSummary), mail: mailReady(env) });
}

async function logout(req, env, p) {
  await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(p.token_hash).run();
  return json({ ok: true });
}

async function me(req, env, p) {
  const { results } = await env.DB.prepare("SELECT id, name, avatar, score, created_at, updated_at FROM children WHERE parent_id = ? ORDER BY id").bind(p.id).all();
  return json({ parent: publicParent(p), children: results.map(childSummary), mail: mailReady(env) });
}

async function changePassword(req, env, p) {
  const b = await body(req);
  if (!safeEq(await hashPw(p.pw_salt, String(b.old || "")), p.pw_hash)) bad("Şu anki şifren yanlış.", 401);
  const pw = checkPw(b.password);
  const salt = randHex(16);
  await env.DB.batch([
    env.DB.prepare("UPDATE parents SET pw_salt = ?, pw_hash = ? WHERE id = ?").bind(salt, await hashPw(salt, pw), p.id),
    env.DB.prepare("DELETE FROM sessions WHERE parent_id = ? AND token_hash != ?").bind(p.id, p.token_hash),
  ]);
  return json({ ok: true });
}

async function deleteAccount(req, env, p) {
  const b = await body(req);
  if (!safeEq(await hashPw(p.pw_salt, String(b.password || "")), p.pw_hash)) bad("Şifre yanlış.", 401);
  await removeParent(env, p.id);
  return json({ ok: true });
}

async function createChild(req, env, p) {
  const b = await body(req);
  const name = cleanName(b.name);
  const data = parseData(b.data);
  const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM children WHERE parent_id = ?").bind(p.id).first();
  if (n >= MAX_CHILDREN) bad(`Bir veli hesabına en fazla ${MAX_CHILDREN} çocuk eklenebilir.`);
  const dup = await env.DB.prepare("SELECT id FROM children WHERE parent_id = ? AND lower(name) = lower(?)").bind(p.id, name).first();
  if (dup) bad(`“${name}” adında bir profil zaten var.`, 409);
  const avatar = cleanAvatar(b.avatar);
  const score = Math.max(0, Math.floor(+data.score || 0));
  const r = await env.DB.prepare("INSERT INTO children (parent_id, name, avatar, score, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)")
    .bind(p.id, name, avatar, score, JSON.stringify(data), now(), now()).run();
  const c = await env.DB.prepare("SELECT * FROM children WHERE id = ?").bind(r.meta.last_row_id).first();
  return json({ child: { ...childSummary(c), data: JSON.parse(c.data) } }, 201);
}

async function readChild(req, env, p, id) {
  const c = await getChild(env, p, id);
  return json({ child: { ...childSummary(c), data: JSON.parse(c.data) } });
}

async function updateChild(req, env, p, id) {
  const c = await getChild(env, p, id);
  const b = await body(req);
  const name = b.name != null ? cleanName(b.name) : c.name;
  const avatar = b.avatar != null ? cleanAvatar(b.avatar) : c.avatar;
  const data = b.data != null ? parseData(b.data) : JSON.parse(c.data);
  const score = Math.max(0, Math.floor(+data.score || 0));
  const stmts = [env.DB.prepare("UPDATE children SET name = ?, avatar = ?, score = ?, data = ?, updated_at = ? WHERE id = ?")
    .bind(name, avatar, score, JSON.stringify(data), now(), c.id)];
  if (b.data != null && score !== c.score)
    stmts.push(env.DB.prepare("INSERT OR IGNORE INTO activity (child_id, day) VALUES (?, ?)").bind(c.id, trDay()));
  await env.DB.batch(stmts);
  return json({ ok: true, updated_at: now() });
}

async function deleteChild(req, env, p, id) {
  const c = await getChild(env, p, id);
  await env.DB.batch([
    env.DB.prepare("DELETE FROM activity WHERE child_id = ?").bind(c.id),
    env.DB.prepare("DELETE FROM children WHERE id = ?").bind(c.id),
  ]);
  return json({ ok: true });
}

async function removeParent(env, id) {
  await env.DB.batch([
    env.DB.prepare("DELETE FROM activity WHERE child_id IN (SELECT id FROM children WHERE parent_id = ?)").bind(id),
    env.DB.prepare("DELETE FROM children WHERE parent_id = ?").bind(id),
    env.DB.prepare("DELETE FROM sessions WHERE parent_id = ?").bind(id),
    env.DB.prepare("DELETE FROM email_tokens WHERE parent_id = ?").bind(id),
    env.DB.prepare("DELETE FROM parents WHERE id = ?").bind(id),
  ]);
}

/* ---------------- Yönetici uç noktaları ---------------- */

function needAdmin(p) { if (p.role !== "admin") bad("Bu sayfa sadece site yöneticisi içindir.", 403); }

async function adminStats(req, env) {
  const day = trDay(), week = now() - 7 * 86400_000;
  const days = [...Array(14)].map((_, i) => trDay(now() - (13 - i) * 86400_000));
  const q = (sql, ...a) => env.DB.prepare(sql).bind(...a);
  const [parents, children, today, weekActive, newParents, suspended, daily] = await env.DB.batch([
    q("SELECT COUNT(*) AS n FROM parents"),
    q("SELECT COUNT(*) AS n FROM children"),
    q("SELECT COUNT(*) AS n FROM activity WHERE day = ?", day),
    q("SELECT COUNT(DISTINCT child_id) AS n FROM activity WHERE day >= ?", trDay(week)),
    q("SELECT COUNT(*) AS n FROM parents WHERE created_at >= ?", week),
    q("SELECT COUNT(*) AS n FROM parents WHERE status = 'suspended'"),
    q("SELECT day, COUNT(*) AS n FROM activity WHERE day >= ? GROUP BY day", days[0]),
  ]);
  const map = Object.fromEntries(daily.results.map(r => [r.day, r.n]));
  return json({
    parents: parents.results[0].n, children: children.results[0].n,
    active_today: today.results[0].n, active_week: weekActive.results[0].n,
    new_parents_week: newParents.results[0].n, suspended: suspended.results[0].n,
    daily: days.map(d => ({ day: d, n: map[d] || 0 })),
  });
}

async function adminParents(req, env) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") || "").trim().toLowerCase();
  const like = `%${q.replace(/[%_\\]/g, m => "\\" + m)}%`;
  const { results } = await env.DB.prepare(
    `SELECT p.id, p.email, p.role, p.status, p.email_verified, p.created_at, p.last_seen,
            COUNT(c.id) AS child_count, COALESCE(SUM(c.score), 0) AS total_score, MAX(c.updated_at) AS last_progress,
            GROUP_CONCAT(c.name, ', ') AS child_names
     FROM parents p LEFT JOIN children c ON c.parent_id = p.id
     WHERE ? = '' OR lower(p.email) LIKE ? ESCAPE '\\' OR p.id IN (SELECT parent_id FROM children WHERE lower(name) LIKE ? ESCAPE '\\')
     GROUP BY p.id ORDER BY p.created_at DESC LIMIT 200`).bind(q, like, like).all();
  return json({ parents: results });
}

async function adminParent(req, env, id) {
  const p = await env.DB.prepare("SELECT * FROM parents WHERE id = ?").bind(id).first();
  if (!p) bad("Veli bulunamadı.", 404);
  const { results } = await env.DB.prepare("SELECT * FROM children WHERE parent_id = ? ORDER BY id").bind(id).all();
  return json({
    parent: { ...publicParent(p), last_seen: p.last_seen },
    children: results.map(c => ({ ...childSummary(c), data: JSON.parse(c.data) })),
  });
}

async function adminSetStatus(req, env, admin, id) {
  const b = await body(req);
  if (!["active", "suspended"].includes(b.status)) bad("Geçersiz durum.");
  if (+id === admin.id) bad("Kendi hesabını askıya alamazsın.");
  const r = await env.DB.prepare("UPDATE parents SET status = ? WHERE id = ?").bind(b.status, id).run();
  if (!r.meta.changes) bad("Veli bulunamadı.", 404);
  if (b.status === "suspended") await env.DB.prepare("DELETE FROM sessions WHERE parent_id = ?").bind(id).run();
  return json({ ok: true });
}

async function adminDelete(req, env, admin, id) {
  if (+id === admin.id) bad("Kendi hesabını buradan silemezsin.");
  const p = await env.DB.prepare("SELECT id FROM parents WHERE id = ?").bind(id).first();
  if (!p) bad("Veli bulunamadı.", 404);
  await removeParent(env, id);
  return json({ ok: true });
}

async function adminResetPassword(req, env, admin, id) {
  const p = await env.DB.prepare("SELECT id FROM parents WHERE id = ?").bind(id).first();
  if (!p) bad("Veli bulunamadı.", 404);
  const words = "elma kedi deniz bulut kalem orman nehir kartal limon portakal".split(" ");
  const pick = () => words[crypto.getRandomValues(new Uint32Array(1))[0] % words.length];
  const temp = `${pick()}-${pick()}-${100 + (crypto.getRandomValues(new Uint32Array(1))[0] % 900)}`;
  const salt = randHex(16);
  await env.DB.batch([
    env.DB.prepare("UPDATE parents SET pw_salt = ?, pw_hash = ? WHERE id = ?").bind(salt, await hashPw(salt, temp), id),
    env.DB.prepare("DELETE FROM sessions WHERE parent_id = ?").bind(id),
    env.DB.prepare("DELETE FROM login_fails WHERE email = (SELECT email FROM parents WHERE id = ?)").bind(id),
  ]);
  return json({ ok: true, temp_password: temp });
}


/* ---------------- E-posta (Resend) ---------------- */
const RESET_MIN = 60, VERIFY_DAYS = 7, MAIL_PER_HOUR = 3;
const site = env => (env.SITE_URL || "https://ollieakademi.com").replace(/\/+$/, "");
const mailReady = env => !!env.RESEND_API_KEY;
const escH = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function mailHTML(env, title, intro, button, link, foot) {
  return `<!doctype html><html lang="tr"><body style="margin:0;background:#EEF4EA;font-family:Arial,Helvetica,sans-serif;color:#22304A">
<div style="max-width:520px;margin:0 auto;padding:24px 16px">
<div style="background:#fff;border-radius:20px;padding:28px 24px;border:2px solid #DCE6D5">
<div style="text-align:center"><img src="${site(env)}/img/ollie-256.png" width="96" height="96" alt="Ollie" style="display:inline-block"></div>
<h1 style="font-size:22px;margin:12px 0 8px;text-align:center">${escH(title)}</h1>
<p style="font-size:16px;line-height:1.5">${intro}</p>
<p style="text-align:center;margin:24px 0"><a href="${link}" style="background:#E8742A;color:#fff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:14px;display:inline-block">${escH(button)}</a></p>
<p style="font-size:13px;color:#5B6779;line-height:1.5">Düğme çalışmazsa bu bağlantıyı tarayıcına yapıştır:<br><a href="${link}" style="color:#C2571A;word-break:break-all">${link}</a></p>
<p style="font-size:13px;color:#5B6779;line-height:1.5">${foot}</p>
</div><p style="font-size:12px;color:#5B6779;text-align:center">Ollie Akademi · 7–11 yaş için İngilizce · ollieakademi.com</p></div></body></html>`;
}
async function sendMail(env, to, subject, html, text, headers) {
  if (!mailReady(env)) { console.log("E-posta gönderilmedi (RESEND_API_KEY yok):", subject, to); return false; }
  if (env.MAIL_LOG === "1") { console.log("[MAIL_LOG] Gönderilmiş sayıldı:", to, subject); return true; } // sadece yerel deneme için
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.MAIL_FROM || "Ollie Akademi <bilgi@ollieakademi.com>", to: [to], subject, html, text, ...(headers ? { headers } : {}) }),
    });
    if (!r.ok) { console.error("Resend hatası", r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error("E-posta gönderilemedi", e); return false; }
}
async function newEmailToken(env, parentId, kind, ttlMs) {
  const since = now() - 3600_000;
  const c = await env.DB.prepare("SELECT COUNT(*) AS n FROM email_tokens WHERE parent_id = ? AND kind = ? AND created_at > ?").bind(parentId, kind, since).first();
  if (c.n >= MAIL_PER_HOUR) return null;
  const token = randHex(32);
  await env.DB.batch([
    env.DB.prepare("DELETE FROM email_tokens WHERE expires_at < ?").bind(now()),
    env.DB.prepare("INSERT INTO email_tokens (token_hash, parent_id, kind, expires_at, created_at) VALUES (?, ?, ?, ?, ?)")
      .bind(await sha256(token), parentId, kind, now() + ttlMs, now()),
  ]);
  return token;
}
async function useEmailToken(env, token, kind) {
  if (!/^[0-9a-f]{64}$/.test(String(token || ""))) bad("Bağlantı geçersiz. E-postadaki bağlantıyı tam olarak açtığından emin ol.");
  const th = await sha256(token);
  const t = await env.DB.prepare("SELECT * FROM email_tokens WHERE token_hash = ? AND kind = ?").bind(th, kind).first();
  if (!t || t.expires_at < now()) bad(kind === "reset" ? "Bu şifre sıfırlama bağlantısının süresi dolmuş ya da daha önce kullanılmış. Yeni bir bağlantı iste." : "Bu doğrulama bağlantısının süresi dolmuş ya da daha önce kullanılmış. Veli panelinden yeni bir bağlantı isteyebilirsin.", 410);
  await env.DB.prepare("DELETE FROM email_tokens WHERE parent_id = ? AND kind = ?").bind(t.parent_id, kind).run();
  return t.parent_id;
}
async function sendVerify(env, p) {
  const token = await newEmailToken(env, p.id, "verify", VERIFY_DAYS * 86400_000);
  if (!token) return "limit";
  const link = `${site(env)}/#verify-${token}`;
  const ok = await sendMail(env, p.email, "Ollie Akademi: e-posta adresini doğrula",
    mailHTML(env, "E-posta adresini doğrula", "Merhaba! Ollie Akademi'ye hoş geldin. Veli hesabını güvenceye almak için aşağıdaki düğmeye bas.", "E-postamı doğrula", link,
      `Bu bağlantı ${VERIFY_DAYS} gün geçerli. Bu hesabı sen açmadıysan bu e-postayı yok sayabilirsin.`),
    `Ollie Akademi e-posta doğrulama bağlantın (${VERIFY_DAYS} gün geçerli):\n${link}\n\nBu hesabı sen açmadıysan bu e-postayı yok sayabilirsin.`);
  return ok ? "sent" : "fail";
}

async function forgot(req, env) {
  const b = await body(req);
  const email = cleanEmail(b.email);
  if (!validEmail(email)) bad("Geçerli bir e-posta adresi yaz.");
  if (!mailReady(env)) bad("E-postayla şifre sıfırlama henüz açık değil. Site yöneticisine yaz, sana geçici bir şifre versin.", 503);
  const p = await env.DB.prepare("SELECT * FROM parents WHERE email = ?").bind(email).first();
  // Hesap var mı yok mu belli etmemek için her durumda aynı cevabı veriyoruz.
  if (p && p.status === "active") {
    const token = await newEmailToken(env, p.id, "reset", RESET_MIN * 60_000);
    if (token) {
      const link = `${site(env)}/#reset-${token}`;
      await sendMail(env, p.email, "Ollie Akademi: şifre sıfırlama",
        mailHTML(env, "Şifreni sıfırla", "Veli hesabın için şifre sıfırlama isteği aldık. Yeni şifreni belirlemek için aşağıdaki düğmeye bas. Çocuklarının yıldızları ve ilerlemesi silinmez.", "Yeni şifre belirle", link,
          `Bu bağlantı ${RESET_MIN} dakika geçerli ve yalnızca bir kez kullanılabilir. Bu isteği sen yapmadıysan bu e-postayı yok say; şifren değişmez.`),
        `Ollie Akademi şifre sıfırlama bağlantın (${RESET_MIN} dakika geçerli):\n${link}\n\nBu isteği sen yapmadıysan bu e-postayı yok say; şifren değişmez.`);
    }
  }
  return json({ ok: true });
}

async function resetPassword(req, env) {
  const b = await body(req);
  const pw = checkPw(b.password);
  const id = await useEmailToken(env, b.token, "reset");
  const p = await env.DB.prepare("SELECT * FROM parents WHERE id = ?").bind(id).first();
  if (!p) bad("Hesap bulunamadı.", 404);
  if (p.status !== "active") bad("Bu hesap askıya alındı. Bilgi için site yöneticisine yaz.", 403);
  const salt = randHex(16);
  await env.DB.batch([
    env.DB.prepare("UPDATE parents SET pw_salt = ?, pw_hash = ?, email_verified = 1, last_seen = ? WHERE id = ?").bind(salt, await hashPw(salt, pw), now(), id),
    env.DB.prepare("DELETE FROM sessions WHERE parent_id = ?").bind(id),
    env.DB.prepare("DELETE FROM login_fails WHERE email = ?").bind(p.email),
  ]);
  const fresh = await env.DB.prepare("SELECT * FROM parents WHERE id = ?").bind(id).first();
  const { results } = await env.DB.prepare("SELECT id, name, avatar, score, created_at, updated_at FROM children WHERE parent_id = ? ORDER BY id").bind(id).all();
  return json({ token: await newSession(env, id), parent: publicParent(fresh), children: results.map(childSummary), mail: mailReady(env) });
}

async function verifyEmail(req, env) {
  const b = await body(req);
  const id = await useEmailToken(env, b.token, "verify");
  await env.DB.prepare("UPDATE parents SET email_verified = 1 WHERE id = ?").bind(id).run();
  const p = await env.DB.prepare("SELECT email FROM parents WHERE id = ?").bind(id).first();
  return json({ ok: true, email: p && p.email });
}

async function resendVerify(req, env, p) {
  if (p.email_verified) return json({ ok: true, already: true });
  if (!mailReady(env)) bad("E-posta gönderimi henüz açık değil. Biraz sonra tekrar dene.", 503);
  const r = await sendVerify(env, p);
  if (r === "limit") bad("Son bir saatte çok fazla doğrulama e-postası istendi. Biraz sonra tekrar dene.", 429);
  if (r === "fail") bad("E-posta gönderilemedi. Biraz sonra tekrar dene.", 502);
  return json({ ok: true });
}


/* ---------------- Haftalık veli raporu ---------------- */
const REPORT_GAP = 6.5 * 86400_000;   // iki rapor arasında en az bu kadar süre
const REPORT_IDLE_DAYS = 21;          // bu kadar gündür hiç çalışmayan aileye rapor gönderilmez
const UNITS = [["Animals","Hayvanlar","🐾"],["Colors","Renkler","🎨"],["School Things","Okul Eşyaları","🎒"],["Family","Aile","🏡"],["Daily Routines","Günlük Rutinler","⏰"],["Food","Yiyecekler","🍎"],["Weather","Hava Durumu","🌦️"],["My Body","Vücudumuz","🖐️"],["Clothes","Kıyafetler","👕"],["Hobbies","Hobiler","⚽"]];
const BADGE_NAMES = { first:"🌱 İlk Adım", singer:"🎵 Küçük Şarkıcı", cards:"🃏 Kelime Avcısı", unit1:"🏅 İlk Ünite", hard1:"🦅 Cesur Kartal", streak3:"🔥 3 Gün Seri", streak7:"📅 Bir Hafta", s100:"⭐ 100 Yıldız", s500:"💎 500 Yıldız", half:"🚀 Yarı Yol", champ:"🏆 Şampiyon", writer1:"✍️ Küçük Yazar", writer5:"📝 Usta Yazar", songs25:"🎤 Şarkı Yıldızı", reader3:"📕 Kitap Kurdu", listen3:"🎧 Dikkatli Kulak", speak3:"🗣️ Konuşkan Baykuş", review5:"🔁 Unutmayan Baykuş", tower1:"🧱 Kule Ustası", legend:"👑 Efsane" };
const apiBase = env => (env.API_URL || "https://ollie-akademi-api.ollieakademi.workers.dev").replace(/\/+$/, "");
const len = a => Array.isArray(a) ? a.length : 0;
const sumLens = o => Object.values(o && typeof o === "object" ? o : {}).reduce((n, a) => n + len(a), 0);

// Bir çocuğun ilerleme verisinden rapor için gereken sayılar
export function childStats(d, score) {
  d = d && typeof d === "object" ? d : {};
  const p = d.p || {}, easy = p.easy || {}, hard = p.hard || {};
  const lessons = Object.keys(d.lessons || {}).filter(k => d.lessons[k]).length;
  const writes = Object.values(d.writings || {}).filter(w => w && w.best).length;
  const sk = d.skills || {};
  const steps = lessons + writes + sumLens({ a: (easy.done || []).flat(), b: (hard.done || []).flat() })
    + sumLens(sk.r) + sumLens(sk.l) + sumLens(sk.s) + sumLens(d.towers);
  const rev = d.rev && typeof d.rev === "object" ? d.rev : {};
  const words = Object.keys(rev);
  const unit = Math.min(Math.max(0, +easy.unlocked || 0), UNITS.length - 1);
  return {
    score: Math.max(0, +score || 0), steps, words: words.length,
    mastered: words.filter(w => (rev[w] && +rev[w].b) >= 4).length,
    badges: Array.isArray(d.badges) ? d.badges.filter(b => typeof b === "string") : [],
    unit, finished: !!easy.finished,
    tough: words.filter(w => rev[w] && +rev[w].x >= 1 && +rev[w].b <= 2).sort((a, b) => rev[b].x - rev[a].x).slice(0, 5),
    reviews: +d.revN || 0,
  };
}

// Bir çocuk için rapor satırları (şimdiki durum + geçen raporun durumu + bu haftaki çalışma günleri)
export function childReport(name, now_, snap, days) {
  const first = !snap || typeof snap.score !== "number";
  const diff = k => first ? now_[k] : Math.max(0, now_[k] - (snap[k] || 0));
  const newBadges = first ? [] : now_.badges.filter(b => !(snap.badges || []).includes(b));
  const u = UNITS[now_.unit];
  let note;
  if (days === 0) note = `${name} bu hafta Ollie Akademi'ye uğramadı. Günde 10 dakikalık kısa bir çalışma bile kelimelerin unutulmamasına çok yardımcı olur. Bugünün tekrarı ile başlamak iyi bir fikir!`;
  else if (days <= 2) note = `Güzel bir başlangıç! Haftada 3–4 gün kısa kısa çalışmak, uzun ama seyrek çalışmaktan daha kalıcı öğrenmeyi sağlar.`;
  else if (days <= 4) note = `Harika bir hafta! Bu düzenle devam ederse kelimeler kalıcı olarak yerleşecek.`;
  else note = `Muhteşem! Neredeyse her gün çalıştı. Bu istikrarı kutlamayı unutmayın. 🎉`;
  return { name, first, days, stars: diff("score"), steps: diff("steps"), words: diff("words"), mastered: now_.mastered,
    totalWords: now_.words, totalStars: now_.score, newBadges: newBadges.map(b => BADGE_NAMES[b] || b),
    unit: now_.finished ? "Tüm üniteler bitti 🏆" : `Ünite ${now_.unit + 1}: ${u[2]} ${u[0]} (${u[1]})`, tough: now_.tough, note };
}

export function reportMail(env, rows, offLink, test) {
  const total = rows.reduce((n, r) => n + r.stars, 0);
  const subject = (test ? "[Örnek] " : "") + (rows.length === 1
    ? (rows[0].days ? `Ollie Akademi haftalık rapor: ${rows[0].name} bu hafta ${rows[0].stars} ⭐ kazandı` : `Ollie Akademi haftalık rapor: ${rows[0].name} seni bekliyor`)
    : `Ollie Akademi haftalık rapor: bu hafta toplam ${total} ⭐`);
  const cell = (big, small) => `<td style="width:25%;text-align:center;padding:8px 4px;background:#F6F9F3;border-radius:12px"><div style="font-size:20px;font-weight:bold">${big}</div><div style="font-size:12px;color:#5B6779">${small}</div></td>`;
  const kid = r => { const pl = n => (r.first ? "" : "+") + n; return `<div style="border:2px solid #DCE6D5;border-radius:16px;padding:16px;margin:16px 0">
<h2 style="font-size:19px;margin:0 0 4px">${escH(r.name)}</h2>
<p style="font-size:14px;color:#5B6779;margin:0 0 12px">${escH(r.unit)}</p>
<table role="presentation" style="width:100%;border-collapse:separate;border-spacing:6px 0"><tr>
${cell(`${r.days}/7`, "çalıştığı gün")}${cell(pl(r.stars), r.first ? "toplam yıldız" : "yıldız ⭐")}${cell(pl(r.steps), "biten adım")}${cell(pl(r.words), r.first ? "kelime" : "yeni kelime")}
</tr></table>
${r.totalWords ? `<p style="font-size:14px;line-height:1.5;margin:12px 0 0">📚 Tekrar listesinde <b>${r.totalWords}</b> kelime var, <b>${r.mastered}</b> tanesi iyice öğrenildi.</p>` : ""}
${r.first ? `<p style="font-size:13px;color:#5B6779;margin:8px 0 0">Bu ilk rapor olduğu için sayılar şimdiye kadarki toplamı gösteriyor.</p>` : ""}
${r.newBadges.length ? `<p style="font-size:14px;line-height:1.5;margin:8px 0 0">🏅 Yeni rozet: <b>${r.newBadges.map(escH).join(", ")}</b></p>` : ""}
${r.tough.length ? `<p style="font-size:14px;line-height:1.5;margin:8px 0 0">🦉 Zorlandığı kelimeler: <b>${r.tough.map(escH).join(", ")}</b> — birlikte sesli söyleyerek tekrar edebilirsiniz.</p>` : ""}
<p style="font-size:14px;line-height:1.5;margin:8px 0 0;background:#FFF6EC;border-radius:10px;padding:10px">${escH(r.note)}</p>
</div>`; };
  const link = site(env);
  const html = `<!doctype html><html lang="tr"><body style="margin:0;background:#EEF4EA;font-family:Arial,Helvetica,sans-serif;color:#22304A">
<div style="max-width:560px;margin:0 auto;padding:24px 16px">
<div style="background:#fff;border-radius:20px;padding:24px 20px;border:2px solid #DCE6D5">
<div style="text-align:center"><img src="${link}/img/ollie-256.png" width="80" height="80" alt="Ollie" style="display:inline-block"></div>
<h1 style="font-size:22px;margin:8px 0 4px;text-align:center">Haftalık İlerleme Raporu</h1>
<p style="font-size:14px;color:#5B6779;text-align:center;margin:0">Son 7 gün · ${trDay(now() - 6 * 86400_000).split("-").reverse().join(".")} – ${trDay().split("-").reverse().join(".")}</p>
${test ? `<p style="font-size:13px;background:#FFF6EC;border-radius:10px;padding:8px;text-align:center">Bu bir örnek rapordur. Gerçek rapor haftada bir kez gelir.</p>` : ""}
${rows.map(kid).join("")}
<p style="text-align:center;margin:20px 0 8px"><a href="${link}" style="background:#E8742A;color:#fff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:14px;display:inline-block">Ollie Akademi'yi aç</a></p>
</div><p style="font-size:12px;color:#5B6779;text-align:center;line-height:1.5">Bu raporu Ollie Akademi veli hesabın için gönderiyoruz.<br>
Raporları veli panelinden kapatabilir ya da <a href="${offLink}" style="color:#C2571A">tek tıkla aboneliği bırakabilirsin</a>.<br>Ollie Akademi · 7–11 yaş için İngilizce · ollieakademi.com</p></div></body></html>`;
  const text = `Ollie Akademi haftalık ilerleme raporu\n\n` + rows.map(r =>
    `${r.name} — ${r.unit}\nÇalıştığı gün: ${r.days}/7 · Yıldız: +${r.stars} · Biten adım: +${r.steps} · Yeni kelime: +${r.words}\nÖğrenilen kelime: ${r.mastered}/${r.totalWords}` +
    (r.newBadges.length ? `\nYeni rozet: ${r.newBadges.join(", ")}` : "") + (r.tough.length ? `\nZorlandığı kelimeler: ${r.tough.join(", ")}` : "") + `\n${r.note}\n`).join("\n") +
    `\nOllie Akademi: ${link}\nAboneliği bırak: ${offLink}`;
  return { subject, html, text };
}

async function buildParentReport(env, p) {
  const { results: kids } = await env.DB.prepare("SELECT id, name, score, data, report_snap FROM children WHERE parent_id = ? ORDER BY id").bind(p.id).all();
  if (!kids.length) return null;
  const since = trDay(now() - 6 * 86400_000), idle = trDay(now() - REPORT_IDLE_DAYS * 86400_000);
  const { results: act } = await env.DB.prepare(`SELECT child_id, SUM(day >= ?) AS week, MAX(day) AS last FROM activity WHERE child_id IN (SELECT id FROM children WHERE parent_id = ?) GROUP BY child_id`).bind(since, p.id).all();
  const A = Object.fromEntries(act.map(a => [a.child_id, a]));
  const items = kids.map(c => {
    let data = {}, snap = null;
    try { data = JSON.parse(c.data); } catch {}
    try { snap = c.report_snap ? JSON.parse(c.report_snap) : null; } catch {}
    const st = childStats(data, c.score);
    return { id: c.id, stats: st, active: !!(A[c.id] && A[c.id].last >= idle), row: childReport(c.name, st, snap, A[c.id] ? +A[c.id].week || 0 : 0) };
  });
  return items;
}

async function reportOffLink(env, p) {
  let key = p.report_key;
  if (!key) { key = randHex(16); await env.DB.prepare("UPDATE parents SET report_key = ? WHERE id = ?").bind(key, p.id).run(); }
  return `${apiBase(env)}/api/report/off?p=${p.id}&k=${key}`;
}

async function sendParentReport(env, p, test) {
  const items = await buildParentReport(env, p);
  if (!items) return "nokids";
  if (!test && !items.some(i => i.active)) return "idle";
  const off = await reportOffLink(env, p);
  const m = reportMail(env, items.map(i => i.row), off, test);
  const ok = await sendMail(env, p.email, m.subject, m.html, m.text, { "List-Unsubscribe": `<${off}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" });
  if (!ok) return "fail";
  if (!test) {
    const snap = st => JSON.stringify({ t: now(), score: st.score, steps: st.steps, words: st.words, badges: st.badges });
    await env.DB.batch(items.map(i => env.DB.prepare("UPDATE children SET report_snap = ? WHERE id = ?").bind(snap(i.stats), i.id)));
  }
  return "sent";
}

// Zamanlayıcı: sırası gelen velilere rapor gönderir. İlk rapor pazar günü gider, sonra ~haftada bir.
export async function runReports(env) {
  if (!mailReady(env)) { console.log("Haftalık rapor atlandı: RESEND_API_KEY yok"); return { sent: 0 }; }
  const batch = Math.max(1, Math.min(200, +env.REPORT_BATCH || 80));
  const sunday = new Date(now() + 3 * 3600_000).getUTCDay() === 0;
  const { results } = await env.DB.prepare(
    `SELECT * FROM parents WHERE status = 'active' AND email_verified = 1 AND weekly_report = 1
       AND ((report_sent_at IS NULL AND ? = 1 AND created_at < ?) OR report_sent_at < ?)
     ORDER BY COALESCE(report_sent_at, 0) LIMIT ?`).bind(sunday ? 1 : 0, now() - 2 * 86400_000, now() - REPORT_GAP, batch).all();
  const out = { sent: 0, idle: 0, nokids: 0, fail: 0 };
  for (const p of results) {
    const r = await sendParentReport(env, p, false);
    out[r] = (out[r] || 0) + 1;
    if (r !== "fail") await env.DB.prepare("UPDATE parents SET report_sent_at = ? WHERE id = ?").bind(now(), p.id).run();
  }
  console.log("Haftalık rapor:", JSON.stringify(out));
  return out;
}

async function setReport(req, env, p) {
  const b = await body(req);
  const on = b.on ? 1 : 0;
  await env.DB.prepare("UPDATE parents SET weekly_report = ? WHERE id = ?").bind(on, p.id).run();
  return json({ ok: true, weekly_report: !!on });
}

async function testReport(req, env, p) {
  if (!mailReady(env)) bad("E-posta gönderimi henüz açık değil. Biraz sonra tekrar dene.", 503);
  if (!p.email_verified) bad("Rapor gönderebilmemiz için önce e-posta adresini doğrula.");
  if (p.report_test_at && now() - p.report_test_at < 10 * 60_000) bad("Örnek raporu az önce gönderdik. 10 dakika sonra tekrar deneyebilirsin.", 429);
  await env.DB.prepare("UPDATE parents SET report_test_at = ? WHERE id = ?").bind(now(), p.id).run();
  const r = await sendParentReport(env, p, true);
  if (r === "nokids") bad("Rapor için önce bir çocuk profili ekle.");
  if (r === "fail") bad("E-posta gönderilemedi. Biraz sonra tekrar dene.", 502);
  return json({ ok: true });
}

function pageHTML(title, msg, extra = "") {
  return new Response(`<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escH(title)}</title></head>
<body style="margin:0;background:#EEF4EA;font-family:Arial,Helvetica,sans-serif;color:#22304A"><div style="max-width:480px;margin:40px auto;padding:0 16px">
<div style="background:#fff;border-radius:20px;padding:28px 24px;border:2px solid #DCE6D5;text-align:center"><div style="font-size:48px">🦉</div><h1 style="font-size:22px">${escH(title)}</h1><p style="font-size:16px;line-height:1.5">${msg}</p>${extra}
<p><a href="https://ollieakademi.com" style="color:#C2571A">ollieakademi.com</a></p></div></div></body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

async function reportOff(req, env) {
  const url = new URL(req.url);
  const id = +url.searchParams.get("p"), k = String(url.searchParams.get("k") || "");
  const p = /^[0-9a-f]{32}$/.test(k) && id ? await env.DB.prepare("SELECT id, report_key FROM parents WHERE id = ?").bind(id).first() : null;
  if (!p || !p.report_key || !safeEq(p.report_key, k)) return pageHTML("Bağlantı geçersiz", "Bu bağlantı geçerli değil. Raporları veli panelinden de kapatabilirsin.");
  // GET sadece onay sorar (e-posta programları bağlantıları önceden açabildiği için); kapatma POST ile olur.
  if (req.method === "GET") return pageHTML("Haftalık raporu kapat", "Haftalık ilerleme raporu e-postalarını artık almak istemiyor musun?",
    `<form method="post"><button type="submit" style="background:#E8742A;color:#fff;border:0;font-weight:bold;font-size:16px;padding:14px 24px;border-radius:14px;cursor:pointer">Evet, raporları kapat</button></form>`);
  await env.DB.prepare("UPDATE parents SET weekly_report = 0 WHERE id = ?").bind(id).run();
  return pageHTML("Haftalık rapor kapatıldı", "Artık haftalık ilerleme raporu göndermeyeceğiz. İstersen veli panelinden yeniden açabilirsin.");
}

/* ---------------- Yönlendirme ---------------- */

async function handle(req, env, ctx) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const M = req.method;
  let m;
  if (path === "/" || path === "/api") return json({ ok: true, service: "ollie-akademi-api" });
  if (path === "/api/register" && M === "POST") return register(req, env, ctx);
  if (path === "/api/forgot" && M === "POST") return forgot(req, env);
  if (path === "/api/reset" && M === "POST") return resetPassword(req, env);
  if (path === "/api/verify" && M === "POST") return verifyEmail(req, env);
  if (path === "/api/login" && M === "POST") return login(req, env);
  if (path === "/api/report/off" && (M === "GET" || M === "POST")) return reportOff(req, env);

  const p = await auth(req, env);
  if (path === "/api/logout" && M === "POST") return logout(req, env, p);
  if (path === "/api/me" && M === "GET") return me(req, env, p);
  if (path === "/api/me/password" && M === "POST") return changePassword(req, env, p);
  if (path === "/api/me/delete" && M === "POST") return deleteAccount(req, env, p);
  if (path === "/api/me/verify-email" && M === "POST") return resendVerify(req, env, p);
  if (path === "/api/me/report" && M === "POST") return setReport(req, env, p);
  if (path === "/api/me/report/test" && M === "POST") return testReport(req, env, p);
  if (path === "/api/children" && M === "POST") return createChild(req, env, p);
  if ((m = path.match(/^\/api\/children\/(\d+)$/))) {
    if (M === "GET") return readChild(req, env, p, +m[1]);
    if (M === "PUT") return updateChild(req, env, p, +m[1]);
    if (M === "DELETE") return deleteChild(req, env, p, +m[1]);
  }
  if (path.startsWith("/api/admin/")) {
    needAdmin(p);
    if (path === "/api/admin/stats" && M === "GET") return adminStats(req, env);
    if (path === "/api/admin/parents" && M === "GET") return adminParents(req, env);
    if ((m = path.match(/^\/api\/admin\/parents\/(\d+)$/))) {
      if (M === "GET") return adminParent(req, env, +m[1]);
      if (M === "DELETE") return adminDelete(req, env, p, +m[1]);
    }
    if ((m = path.match(/^\/api\/admin\/parents\/(\d+)\/status$/)) && M === "POST") return adminSetStatus(req, env, p, +m[1]);
    if ((m = path.match(/^\/api\/admin\/parents\/(\d+)\/reset-password$/)) && M === "POST") return adminResetPassword(req, env, p, +m[1]);
  }
  bad("Bulunamadı.", 404);
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runReports(env).catch(e => console.error("Haftalık rapor hatası", e)));
  },
  async fetch(req, env, ctx) {
    const ch = cors(req, env);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: ch });
    try {
      const res = await handle(req, env, ctx);
      for (const [k, v] of Object.entries(ch)) res.headers.set(k, v);
      return res;
    } catch (e) {
      if (e instanceof HttpError) return json({ error: e.message }, e.status, ch);
      console.error(e);
      return json({ error: "Sunucuda bir sorun oldu. Biraz sonra tekrar dene." }, 500, ch);
    }
  },
};
