// Veliye haftalık ilerleme raporu: hesaplama + e-posta HTML'i
import { UNITS, WORDS, BADGES } from "./content.js";

const DAY = 86400_000;
const TR_OFF = 3 * 3600_000;
const ymd = t => new Date(t + TR_OFF).toISOString().slice(0, 10);       // Türkiye saatiyle gün
const escH = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const DAY_NAMES = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

/** Raporun kapsadığı hafta (Pazartesi–Pazar, Türkiye saati). key = pazartesi günü. */
export function reportWeek(t = Date.now()) {
  const d = new Date(t + TR_OFF);
  const dow = (d.getUTCDay() + 6) % 7;                         // 0 = Pazartesi
  const mon = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - dow * DAY;
  const days = [...Array(7)].map((_, i) => new Date(mon + i * DAY).toISOString().slice(0, 10));
  const label = (s) => { const [, m, dd] = s.split("-"); return `${+dd} ${MONTHS[+m - 1]}`; };
  return { key: days[0], days, today: ymd(t), title: `${label(days[0])} – ${label(days[6])}` };
}

const len = a => (Array.isArray(a) ? a.length : 0);

/** Çocuğun ilerleme verisinden karşılaştırılabilir kısa özet çıkarır (haftalık fark için saklanır). */
export function snapshot(score, data) {
  const d = data || {}, L = d.lessons || {}, p = d.p || {}, sk = d.skills || {}, done = [];
  UNITS.forEach((U, i) => {
    if (L["s" + i]) done.push("s" + i);
    if (L["c" + i]) done.push("c" + i);
    if (L["k" + i]) done.push("k" + i);
    if (p.easy && len(p.easy.done && p.easy.done[i]) >= 5) done.push("e" + i);
    if (p.hard && len(p.hard.done && p.hard.done[i]) >= 5) done.push("h" + i);
    if (d.writings && d.writings[i] && d.writings[i].best) done.push("w" + i);
    for (const k of ["r", "l", "s"]) if (len(sk[k] && sk[k][i]) >= U[k]) done.push(k + "k" + i);
  });
  const x = {};
  for (const [w, r] of Object.entries(d.rev || {})) if (r && r.x) x[w] = r.x;
  return { score: score || 0, done, badges: Array.isArray(d.badges) ? d.badges : [], revN: d.revN || 0, x, words: Object.keys(d.rev || {}).length };
}

const DONE_TEXT = {
  s: "🎵 Şarkı dersi", c: "🃏 Kelime Kartları", k: "🧱 Cümle Kulesi", e: "✅ Kolay test", h: "🦅 Zor test",
  w: "✍️ Yazma görevi", rk: "📕 Reading (okuma)", lk: "🎧 Listening (dinleme)", sk: "🗣️ Speaking (konuşma)",
};
const doneLabel = id => {
  const m = id.match(/^([a-z]+?)(\d+)$/), U = UNITS[+m[2]];
  return `${DONE_TEXT[m[1]] || m[1]} · Ünite ${+m[2] + 1} ${U ? U.icon + " " + U.theme : ""}`;
};

function streak(days, today) {
  const set = new Set(days || []);
  let t = Date.parse(today + "T00:00:00Z"), n = 0;
  if (!set.has(today)) t -= DAY;
  while (set.has(new Date(t).toISOString().slice(0, 10))) { n++; t -= DAY; }
  return n;
}

/** Bir çocuğun bu haftaki raporu. act: {day: pts} (activity tablosu), prev: geçen haftanın özeti ya da null */
export function childReport(child, data, act, prev, wk) {
  const d = data || {}, now = snapshot(child.score, d);
  const studied = wk.days.filter(x => act[x] != null || (d.days || []).includes(x));
  const weekPts = Object.values(act).reduce((a, n) => a + (n || 0), 0);
  const stars = prev ? Math.max(0, now.score - prev.score) : weekPts;
  const newDone = prev ? now.done.filter(x => !prev.done.includes(x)) : [];
  const newBadges = prev ? now.badges.filter(x => !prev.badges.includes(x)) : [];
  const reviews = prev ? Math.max(0, now.revN - prev.revN) : 0;
  const newWords = prev ? Math.max(0, now.words - prev.words) : 0;
  // Zorlandığı kelimeler: bu hafta yanlış sayısı artanlar (ilk raporda en çok yanlış yapılanlar)
  const hard = Object.entries(now.x)
    .map(([w, x]) => [w, prev ? x - ((prev.x || {})[w] || 0) : x])
    .filter(([w, n]) => n > 0 && WORDS[w]).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([w]) => w);
  const due = Object.entries(d.rev || {}).filter(([w, r]) => WORDS[w] && r && r.d <= wk.today).length;
  // Şu an çalıştığı ünite: seviye testindeki başlangıç ünitesinden sonra kolay testi bitmemiş ilk ünite
  const easy = (d.p && d.p.easy && d.p.easy.done) || [];
  const from = Math.min(Math.max(0, (d.place && d.place.u) || 0), UNITS.length - 1);
  let cur = UNITS.findIndex((_, i) => i >= from && len(easy[i]) < 5);
  if (cur < 0) cur = UNITS.length - 1;
  const L = d.lessons || {};
  const steps = (L["s" + cur] ? 1 : 0) + (L["c" + cur] ? 1 : 0) + len(easy[cur]) + len(d.p && d.p.hard && d.p.hard.done && d.p.hard.done[cur]);
  return {
    name: child.name, avatar: child.avatar, total: now.score, stars, studied, streak: streak(d.days, wk.today),
    first: !prev, newDone, newBadges, reviews, newWords, hard, due,
    unit: { no: cur + 1, ...UNITS[cur], pct: Math.min(100, Math.round(steps / 12 * 100)) },
    totals: { lessons: now.done.length, badges: now.badges.length, words: now.words },
  };
}

const TIPS = [
  "Akşam yemeğinde çocuğunuzdan bu hafta öğrendiği 3 İngilizce kelimeyi söylemesini isteyin. Siz de Türkçesini tahmin edin!",
  "Kısa ama sık çalışmak en iyisidir: haftada 4–5 gün, 10 dakika, uzun tek bir oturumdan daha kalıcıdır.",
  "Çocuğunuz bir şarkıyı söylerken siz de eşlik edin. Birlikte söylemek kelimeleri hafızada tutar.",
  "Zorlandığı kelimeleri küçük kâğıtlara yazıp evdeki eşyaların üzerine yapıştırın.",
  "Yanlış yapmak öğrenmenin parçası. Doğru cevaptan çok denemeyi övün: “Ne güzel denedin!”",
  "“Bugünün tekrarı” kartı her gün birkaç kelime getirir. 2–3 dakikalık tekrar unutmayı büyük ölçüde önler.",
];

const C = { ink: "#22304A", muted: "#5B6779", line: "#DCE6D5", bg: "#EEF4EA", orange: "#E8742A", green: "#3E8E5A", soft: "#F7FAF4" };

function tile(big, small) {
  return `<td style="width:25%;padding:4px"><div style="background:${C.soft};border:1px solid ${C.line};border-radius:14px;padding:10px 4px;text-align:center">
<div style="font-size:20px;font-weight:bold;color:${C.ink}">${big}</div><div style="font-size:12px;color:${C.muted}">${small}</div></div></td>`;
}
function dayDots(r, wk) {
  return `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;margin:6px 0 2px"><tr>${wk.days.map((x, i) => {
    const on = r.studied.includes(x), future = x > wk.today;
    return `<td style="text-align:center;padding:2px"><div style="width:26px;height:26px;line-height:26px;margin:0 auto;border-radius:13px;font-size:14px;${on ? `background:${C.green};color:#fff` : `background:#fff;border:1px solid ${C.line};color:${future ? "#B8C2CC" : C.muted}`}">${on ? "✓" : "·"}</div>
<div style="font-size:11px;color:${C.muted};margin-top:2px">${DAY_NAMES[i]}</div></td>`;
  }).join("")}</tr></table>`;
}

function childHTML(r, wk) {
  const n = r.studied.length;
  const verdict = n === 0 ? `Bu hafta hiç çalışmadı. Haftada 3 gün, 10 dakika bile büyük fark yaratır. 💛`
    : n >= 5 ? `Harika bir hafta! ${n} gün çalıştı. 🌟` : n >= 3 ? `Güzel bir hafta, ${n} gün çalıştı. 👏` : `Bu hafta ${n} gün çalıştı. Biraz daha sık çalışırsa daha hızlı ilerler.`;
  const list = (title, items) => items.length ? `<p style="margin:14px 0 4px;font-weight:bold">${title}</p><ul style="margin:0;padding-left:20px;line-height:1.6">${items.map(t => `<li>${t}</li>`).join("")}</ul>` : "";
  const done = r.first
    ? `<p style="margin:14px 0 4px;font-weight:bold">📚 Şimdiye kadar</p><p style="margin:0;line-height:1.6">${r.totals.lessons} ders bitirdi, ${r.totals.words} kelime öğrendi, ${r.totals.badges} rozet kazandı.<br><span style="color:${C.muted};font-size:13px">Gelecek haftadan itibaren sadece o hafta bitirdiklerini göreceksiniz.</span></p>`
    : list("📚 Bu hafta bitirdikleri", [
      ...r.newDone.map(doneLabel),
      ...(r.reviews ? [`🔁 Bugünün tekrarı · ${r.reviews} tur`] : []),
      ...(r.newWords ? [`🆕 ${r.newWords} yeni kelime tekrar listesine eklendi`] : []),
    ]);
  const badges = list("🏅 Yeni rozetler", r.newBadges.filter(b => BADGES[b]).map(b => `${BADGES[b][0]} ${escH(BADGES[b][1])}`));
  const hard = r.hard.length ? `<p style="margin:14px 0 4px;font-weight:bold">🦉 ${r.first ? "Zorlandığı kelimeler" : "Bu hafta zorlandığı kelimeler"}</p>
<p style="margin:0;line-height:1.7">${r.hard.map(w => `<span style="display:inline-block;background:#FFF4EA;border:1px solid #F3C9A6;border-radius:10px;padding:2px 8px;margin:2px">${WORDS[w][0]} <b>${escH(w)}</b> = ${escH(WORDS[w][1])}</span>`).join(" ")}</p>
<p style="margin:4px 0 0;font-size:13px;color:${C.muted}">Evde bu kelimeleri birlikte söyleyebilirsiniz.</p>` : "";
  return `<div style="border:2px solid ${C.line};border-radius:18px;padding:16px;margin:16px 0">
<div style="font-size:20px;font-weight:bold">${escH(r.avatar)} ${escH(r.name)}</div>
<p style="margin:6px 0 10px;line-height:1.5">${verdict}</p>
<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse"><tr>
${tile("⭐ " + r.stars, "bu hafta yıldız")}${tile(n + "/7", "çalıştığı gün")}${tile("🔥 " + r.streak, "gün seri")}${tile(r.total, "toplam yıldız")}
</tr></table>
${dayDots(r, wk)}
<p style="margin:14px 0 4px;font-weight:bold">📍 Şu an</p>
<p style="margin:0">Ünite ${r.unit.no}: ${r.unit.icon} ${escH(r.unit.theme)} <span style="color:${C.muted}">(${escH(r.unit.tr)})</span> · %${r.unit.pct}</p>
<div style="background:${C.bg};border-radius:8px;height:10px;margin-top:6px"><div style="background:${C.orange};border-radius:8px;height:10px;width:${Math.max(3, r.unit.pct)}%"></div></div>
${done}${badges}${hard}
${r.due ? `<p style="margin:14px 0 0;font-size:14px">🔁 Tekrarı bekleyen <b>${r.due}</b> kelime var.</p>` : ""}
</div>`;
}

/** Tüm e-posta: {subject, html, text} */
export function reportMail(reports, wk, site, unsubLink) {
  const names = reports.map(r => r.name).join(", ");
  const tip = TIPS[Math.floor(Date.parse(wk.key) / (7 * DAY)) % TIPS.length];
  const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Haftalık rapor</title></head>
<body style="margin:0;background:${C.bg};font-family:Arial,Helvetica,sans-serif;color:${C.ink}">
<div style="max-width:560px;margin:0 auto;padding:24px 12px">
<div style="background:#fff;border-radius:20px;padding:24px 18px;border:2px solid ${C.line}">
<div style="text-align:center"><img src="${site}/img/ollie-256.png" width="80" height="80" alt="Ollie" style="display:inline-block"></div>
<h1 style="font-size:22px;margin:10px 0 2px;text-align:center">Haftalık İngilizce raporu</h1>
<p style="margin:0 0 4px;text-align:center;color:${C.muted}">${wk.title}</p>
${reports.map(r => childHTML(r, wk)).join("")}
<div style="background:${C.soft};border-radius:14px;padding:12px 14px;margin:8px 0 0;line-height:1.5"><b>💡 Veliye ipucu:</b> ${escH(tip)}</div>
<p style="text-align:center;margin:22px 0 4px"><a href="${site}/" style="background:${C.orange};color:#fff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:14px;display:inline-block">Ollie Akademi'ye git</a></p>
</div>
<p style="font-size:12px;color:${C.muted};text-align:center;line-height:1.6">Bu e-postayı Ollie Akademi veli hesabınız olduğu için aldınız. Her pazar akşamı gönderilir.<br>
<a href="${unsubLink}" style="color:${C.muted}">Haftalık raporu artık almak istemiyorum</a> · Ayarı veli panelinden de değiştirebilirsiniz.</p>
</div></body></html>`;
  const text = [`Ollie Akademi — Haftalık İngilizce raporu (${wk.title})`, "",
    ...reports.map(r => [
      `${r.name}: bu hafta ${r.studied.length}/7 gün çalıştı, ${r.stars} yıldız kazandı (toplam ${r.total}). Seri: ${r.streak} gün.`,
      `Şu an: Ünite ${r.unit.no} ${r.unit.theme} (%${r.unit.pct})`,
      ...(r.first ? [`Şimdiye kadar: ${r.totals.lessons} ders, ${r.totals.words} kelime, ${r.totals.badges} rozet.`] : r.newDone.map(x => "- " + doneLabel(x))),
      ...(r.newBadges.length ? ["Yeni rozetler: " + r.newBadges.filter(b => BADGES[b]).map(b => BADGES[b][1]).join(", ")] : []),
      ...(r.hard.length ? ["Zorlandığı kelimeler: " + r.hard.map(w => `${w} = ${WORDS[w][1]}`).join(", ")] : []),
      "",
    ].join("\n")),
    "İpucu: " + tip, "", site + "/", "", "Haftalık raporu artık almak istemiyorsanız: " + unsubLink].join("\n");
  return { subject: `Ollie Akademi haftalık rapor: ${names}`, html, text };
}
