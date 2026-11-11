// Kullanım: node api/tools/check-books.js books-mf.js — Movers/Flyers kütüphane kitaplarını (BOOKS_MF) denetler.
const fs = require("fs");
const file = process.argv[2] || "books-mf.js", src = fs.readFileSync(file, "utf8");
const B = new Function(src + ";return BOOKS_MF")();
const BASIC = "a an the i you he she it we they is are am and but in on at to my his her its our their this that can yes no not with of has have do does what where who very too so now here there me him them us your one two three up".split(" ");
const SPEC = {4: {pages: 8, qs: 4, units: [10, 19]}, 5: {pages: 10, qs: 5, units: [20, 29]}};
let errs = 0, ids = new Set(), titles = new Set(), per = {};
const bad = (b, m) => { errs++; console.log(`✗ ${b.id || "?"} ${b.t || ""}: ${m}`); };
B.forEach((b, k) => {
  const S = SPEC[b.lv];
  if (b.id !== "b" + (21 + k)) bad(b, `id b${21 + k} olmalı`);
  if (ids.has(b.id)) bad(b, "id tekrar"); ids.add(b.id);
  if (titles.has(b.t)) bad(b, "başlık tekrar"); titles.add(b.t);
  if (!S) { bad(b, "lv 4 ya da 5 olmalı"); return; }
  if (b.u < S.units[0] || b.u > S.units[1]) bad(b, `lv ${b.lv} için ünite ${S.units[0]}–${S.units[1]} olmalı`);
  per[b.u] = (per[b.u] || 0) + 1;
  if (!b.t || !b.e) bad(b, "t/e eksik");
  if (!Array.isArray(b.pages) || b.pages.length !== S.pages) bad(b, `${S.pages} sayfa olmalı`);
  (b.pages || []).forEach((p, n) => {
    if (!Array.isArray(p) || p.length !== 3 || !p.every(x => typeof x === "string" && x.trim())) bad(b, `sayfa ${n + 1}: [resim, en, tr]`);
    else if (/['"]/.test(p[1])) bad(b, `sayfa ${n + 1}: düz tırnak/kesme (’ “ ” kullan)`);
  });
  if (!b.qs || b.qs.length !== S.qs) bad(b, `${S.qs} soru olmalı`);
  (b.qs || []).forEach((q, n) => {
    if (!q.q || !q.tr || !Array.isArray(q.options) || q.options.length !== 3) bad(b, `soru ${n + 1}: q, tr, 3 seçenek`);
    else if (!q.options.includes(q.answer)) bad(b, `soru ${n + 1}: answer seçeneklerde yok`);
  });
  // Sözlükte olmayan kelimeler (uyarı): kart kelimeleri ve temel kelimeler index.html'de çözülür.
  const g = b.g || {}, miss = new Set();
  (b.pages || []).forEach(p => (p[1] || "").split(/\s+/).forEach(tok => {
    const m = tok.match(/[A-Za-z’'-]*[A-Za-z]/); if (!m) return;
    const w = m[0].toLowerCase().replace(/'/g, "’");
    if (!g[w] && !BASIC.includes(w) && !g[w.replace(/’s$/, "")] && !g[w.replace(/s$/, "")] && !g[w.replace(/es$/, "")]) miss.add(w);
  }));
  if (miss.size > 6) console.log(`  ! ${b.id} ${b.t}: sözlükte yok (kart kelimesi olabilir): ${[...miss].join(", ")}`);
});
for (let u = 10; u < 30; u++) if (per[u] !== 2) { errs++; console.log(`✗ Ünite ${u + 1}: 2 kitap olmalı (${per[u] || 0})`); }
console.log(errs ? `${errs} hata` : `✓ ${B.length} kitap`);
process.exit(errs ? 1 : 0);
