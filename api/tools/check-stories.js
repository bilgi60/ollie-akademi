// Kullanım: node api/tools/check-stories.js [yıl] — haftanın hikâyelerini (stories.js) denetler ve o yılın hafta takvimini (pazartesiler) yazar.
const fs = require("fs");
const {STORIES, weekStory} = new Function(fs.readFileSync(__dirname + "/../../stories.js", "utf8") + ";return {STORIES, weekStory}")();
let errs = 0; const ids = new Set(), bad = (s, m) => { errs++; console.log(`✗ ${s.id} ${s.t}: ${m}`); };
for (const s of STORIES) {
  if (!/^w\d+$/.test(s.id) || ids.has(s.id)) bad(s, "id w<sayı> ve tekil olmalı"); ids.add(s.id);
  if (!s.t || !s.e || !s.when) bad(s, "t/e/when eksik");
  if (s.pages.length !== 6) bad(s, "6 sayfa olmalı");
  s.pages.forEach((p, n) => { if (p.length !== 3 || p.some(x => typeof x !== "string" || !x.trim())) bad(s, `sayfa ${n + 1}: [resim, en, tr]`);
    else if (/['"]/.test(p[1])) bad(s, `sayfa ${n + 1}: düz tırnak/kesme (’ “ ” kullan)`); });
  if (s.qs.length !== 3) bad(s, "3 soru olmalı");
  s.qs.forEach((q, n) => { if (!q.q || !q.tr || q.options.length !== 3 || !q.options.includes(q.answer)) bad(s, `soru ${n + 1}`); });
}
const y = +(process.argv[2] || new Date().getUTCFullYear()), seen = new Set(), out = [];
for (let t = Date.UTC(y, 0, 1) - ((new Date(Date.UTC(y, 0, 1)).getUTCDay() + 6) % 7) * 864e5; t < Date.UTC(y + 1, 0, 1); t += 7 * 864e5) { const d = new Date(t).toISOString().slice(0, 10), s = weekStory(d); seen.add(s.id); out.push(`${d.slice(5)} ${s.id}`); }
console.log(out.join("  "));
const never = STORIES.filter(s => !seen.has(s.id)).map(s => s.id);
if (never.length) console.log(`! ${y} yılında hiç çıkmayan: ${never.join(", ")} (dinî bayram tarihi eksik olabilir: when.y)`);
console.log(errs ? `${errs} hata` : `✓ ${STORIES.length} hikâye`);
process.exit(errs ? 1 : 0);
