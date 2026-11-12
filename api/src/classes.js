// Öğretmen / sınıf hesabı (Madde 12)
// Öğretmen: sınıf açar, 6 harfli kod paylaşır, sınıfın ilerleme tablosunu görür (sohbetleri, yazıları GÖRMEZ).
// Veli: çocuğunun profiline kodu girerek sınıfa katılır, istediği an çıkarır.
import { snapshot } from "./report.js";

export const MAX_CLASSES = 10, MAX_MEMBERS = 60, MAX_CHILD_CLASSES = 3;
const CODE_ABC = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // I, O, 0, 1 yok (karışmasın)
const JOIN_FAILS = 10, JOIN_LOCK_MIN = 15;
const DAY = 86400_000;

const newCode = () => [...crypto.getRandomValues(new Uint8Array(6))].map(b => CODE_ABC[b % 32]).join("");
export const cleanCode = c => String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);

function cleanClassName(n, bad) {
  n = String(n || "").trim().replace(/\s+/g, " ");
  if (!n) bad("Sınıfın adını yaz (örn. 3-B İngilizce).");
  if (n.length > 40) bad("Sınıf adı en fazla 40 karakter olabilir.");
  return n;
}

async function uniqueCode(env) {
  for (let i = 0; i < 8; i++) {
    const c = newCode();
    if (!(await env.DB.prepare("SELECT 1 FROM classes WHERE code = ?").bind(c).first())) return c;
  }
  throw new Error("Sınıf kodu üretilemedi");
}

async function ownClass(env, p, id, bad) {
  const c = await env.DB.prepare("SELECT * FROM classes WHERE id = ? AND teacher_id = ?").bind(id, p.id).first();
  if (!c) bad("Sınıf bulunamadı.", 404);
  return c;
}

/* ---------- Öğretmen ---------- */

export async function listClasses(env, p) {
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.name, c.code, c.created_at, COUNT(m.child_id) AS members
     FROM classes c LEFT JOIN class_members m ON m.class_id = c.id
     WHERE c.teacher_id = ? GROUP BY c.id ORDER BY c.id`).bind(p.id).all();
  return { classes: results, max: MAX_CLASSES };
}

export async function createClass(env, p, b, bad) {
  const name = cleanClassName(b.name, bad);
  const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM classes WHERE teacher_id = ?").bind(p.id).first();
  if (n >= MAX_CLASSES) bad(`En fazla ${MAX_CLASSES} sınıf açabilirsin.`);
  const dup = await env.DB.prepare("SELECT id FROM classes WHERE teacher_id = ? AND lower(name) = lower(?)").bind(p.id, name).first();
  if (dup) bad(`“${name}” adında bir sınıfın zaten var.`, 409);
  const code = await uniqueCode(env);
  const r = await env.DB.prepare("INSERT INTO classes (teacher_id, name, code, created_at) VALUES (?, ?, ?, ?)")
    .bind(p.id, name, code, Date.now()).run();
  return { class: { id: r.meta.last_row_id, name, code, members: 0 } };
}

export async function renameClass(env, p, id, b, bad) {
  const c = await ownClass(env, p, id, bad);
  const name = cleanClassName(b.name, bad);
  const dup = await env.DB.prepare("SELECT id FROM classes WHERE teacher_id = ? AND lower(name) = lower(?) AND id != ?").bind(p.id, name, c.id).first();
  if (dup) bad(`“${name}” adında bir sınıfın zaten var.`, 409);
  await env.DB.prepare("UPDATE classes SET name = ? WHERE id = ?").bind(name, c.id).run();
  return { ok: true, name };
}

export async function newClassCode(env, p, id, bad) {
  const c = await ownClass(env, p, id, bad);
  const code = await uniqueCode(env);
  await env.DB.prepare("UPDATE classes SET code = ? WHERE id = ?").bind(code, c.id).run();
  return { ok: true, code };
}

export async function deleteClass(env, p, id, bad) {
  const c = await ownClass(env, p, id, bad);
  await env.DB.batch([
    env.DB.prepare("DELETE FROM class_members WHERE class_id = ?").bind(c.id),
    env.DB.prepare("DELETE FROM classes WHERE id = ?").bind(c.id),
  ]);
  return { ok: true };
}

export async function removeMember(env, p, id, childId, bad) {
  const c = await ownClass(env, p, id, bad);
  await env.DB.prepare("DELETE FROM class_members WHERE class_id = ? AND child_id = ?").bind(c.id, childId).run();
  return { ok: true };
}

/** Bir öğrencinin öğretmene gösterilen özeti. Sadece sayılar; yazılar, sohbetler, kelime listeleri yok. */
export function studentRow(ch, data, act, today) {
  const s = snapshot(ch.score, data), done = new Set(s.done);
  let easy = 0, hard = 0, last = -1;
  for (const id of s.done) { const m = id.match(/(\d+)$/); if (m) last = Math.max(last, +m[1]); }
  for (let i = 0; i <= last; i++) { if (done.has("e" + i)) easy++; if (done.has("h" + i)) hard++; }
  const week = [...Array(7)].map((_, i) => new Date(Date.parse(today + "T00:00:00Z") - i * DAY).toISOString().slice(0, 10));
  const days = Object.keys(act).sort();
  const exams = {};
  for (const [k, e] of Object.entries((data && data.exams) || {})) if (e && e.b != null) exams[k] = { b: e.b, p: !!e.p };
  return {
    id: ch.id, name: ch.name, avatar: ch.avatar, score: ch.score, joined_at: ch.joined_at,
    week_pts: week.reduce((t, d) => t + (act[d] || 0), 0),
    week_days: week.filter(d => act[d] != null).length,
    last_day: days.length ? days[days.length - 1] : null,
    unit: last + 1, easy, hard, words: s.words, badges: s.badges.length, exams,
  };
}

export async function classDetail(env, p, id, today, bad) {
  const c = await ownClass(env, p, id, bad);
  const { results } = await env.DB.prepare(
    `SELECT ch.id, ch.name, ch.avatar, ch.score, ch.data, m.joined_at
     FROM class_members m JOIN children ch ON ch.id = m.child_id WHERE m.class_id = ? ORDER BY lower(ch.name)`).bind(c.id).all();
  const from = new Date(Date.parse(today + "T00:00:00Z") - 59 * DAY).toISOString().slice(0, 10);
  const acts = {};
  if (results.length) {
    const rows = (await env.DB.prepare(
      `SELECT a.child_id, a.day, a.pts FROM activity a JOIN class_members m ON m.child_id = a.child_id
       WHERE m.class_id = ? AND a.day >= ?`).bind(c.id, from).all()).results;
    for (const r of rows) (acts[r.child_id] = acts[r.child_id] || {})[r.day] = r.pts;
  }
  const students = results.map(ch => {
    let data = {}; try { data = JSON.parse(ch.data); } catch {}
    return studentRow(ch, data, acts[ch.id] || {}, today);
  });
  return { class: { id: c.id, name: c.name, code: c.code, created_at: c.created_at }, students, today };
}

/* ---------- Veli (çocuğun sınıfları) ---------- */

export async function childClasses(env, child) {
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.name, p.email AS teacher, m.joined_at FROM class_members m
     JOIN classes c ON c.id = m.class_id JOIN parents p ON p.id = c.teacher_id
     WHERE m.child_id = ? ORDER BY m.joined_at`).bind(child.id).all();
  return { classes: results };
}

export async function joinClass(env, parent, child, b, bad) {
  const key = "class:" + parent.id, now = Date.now();
  const f = await env.DB.prepare("SELECT * FROM login_fails WHERE email = ?").bind(key).first();
  if (f && f.count >= JOIN_FAILS && f.until > now) bad(`Çok fazla yanlış kod denendi. ${JOIN_LOCK_MIN} dakika sonra tekrar dene.`, 429);
  const code = cleanCode(b.code);
  const c = code.length === 6 ? await env.DB.prepare(
    "SELECT c.*, p.email AS teacher, p.status AS tstatus FROM classes c JOIN parents p ON p.id = c.teacher_id WHERE c.code = ?").bind(code).first() : null;
  if (!c || c.tstatus !== "active") {
    const count = f && f.until > now ? f.count + 1 : 1;
    await env.DB.prepare("INSERT INTO login_fails (email, count, until) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET count = excluded.count, until = excluded.until")
      .bind(key, count, now + JOIN_LOCK_MIN * 60_000).run();
    bad("Bu kodla bir sınıf bulunamadı. Kodu öğretmenden kontrol et.", 404);
  }
  if (await env.DB.prepare("SELECT 1 FROM class_members WHERE class_id = ? AND child_id = ?").bind(c.id, child.id).first())
    bad(`${child.name} zaten “${c.name}” sınıfında.`, 409);
  const mine = await env.DB.prepare("SELECT COUNT(*) AS n FROM class_members WHERE child_id = ?").bind(child.id).first();
  if (mine.n >= MAX_CHILD_CLASSES) bad(`Bir çocuk en fazla ${MAX_CHILD_CLASSES} sınıfta olabilir.`);
  const all = await env.DB.prepare("SELECT COUNT(*) AS n FROM class_members WHERE class_id = ?").bind(c.id).first();
  if (all.n >= MAX_MEMBERS) bad(`Bu sınıf dolu (en fazla ${MAX_MEMBERS} öğrenci).`);
  await env.DB.batch([
    env.DB.prepare("INSERT INTO class_members (class_id, child_id, joined_at) VALUES (?, ?, ?)").bind(c.id, child.id, now),
    env.DB.prepare("DELETE FROM login_fails WHERE email = ?").bind(key),
  ]);
  return { class: { id: c.id, name: c.name, teacher: c.teacher, joined_at: now } };
}

export async function leaveClass(env, child, classId) {
  await env.DB.prepare("DELETE FROM class_members WHERE class_id = ? AND child_id = ?").bind(classId, child.id).run();
  return { ok: true };
}
