// Kullanım: node api/tools/check-units.js units-a1.js units-a2.js  — ek ünite dosyalarını (UNITS_A1, UNITS_A2…) denetler.
// Dosyaları seviye sırasıyla ver: kelime tekrarı önceki dosyalara karşı da denetlenir.
const fs = require("fs"), path = require("path");
const STARTERS = "elephant,turtle,monkey,eagle,giraffe,dolphin,parrot,rabbit,horse,snake,red,blue,yellow,green,pink,pen,book,bag,ruler,pencil,mother,father,sister,brother,baby,wake up,brush teeth,eat breakfast,go to school,sleep,apple,bread,cheese,milk,egg,sunny,rainy,windy,snowy,cloudy,eye,nose,ear,hand,leg,shirt,hat,shoes,coat,socks,swim,run,dance,sing,draw".split(",");
const plain = s => s.replace(/<[^>]+>/g, "");
const norm = s => s.toLowerCase().replace(/[’]/g, "'").replace(/[^a-z' -]/g, " ").replace(/\s+/g, " ").trim();
let errs = 0, seen = {};
const bad = (f, m) => { errs++; console.log(`✗ ${f}: ${m}`); };
const pair = (f, h, w) => { if (!Array.isArray(h) || h.length !== 2 || !h.every(x => typeof x === "string" && x.length)) bad(f, `${w}: hint [en, tr] olmalı`); };
for (const file of process.argv.slice(2)) {
  const src = fs.readFileSync(file, "utf8"), name = (src.match(/^const (UNITS_A\d) = \[\];$/m) || [])[1];
  if (!name) { bad(file, "\"const UNITS_Ax = [];\" satırı yok"); continue; }
  const UNITS = [], minWords = name === "UNITS_A1" ? 35 : 45;
  try { new Function(name, src.replace(/^const UNITS_A\d = \[\];$/m, ""))(UNITS); } catch (e) { bad(file, "JS hatası: " + e.message); continue; }
  for (const u of UNITS) {
    const f = path.basename(file) + (u.L ? " " + u.L.theme : "");
    const L = u.L || {};
    for (const k of ["rank", "theme", "tr", "icon", "song", "cards", "tasks", "hard"]) if (!L[k]) bad(f, "L." + k + " eksik");
    if (!L.cards) continue;
    if (L.cards.length !== 8) bad(f, `8 kart olmalı (${L.cards.length})`);
    const words = L.cards.map(c => c.w);
    L.cards.forEach(c => {
      for (const k of ["e", "w", "ipa", "tr", "ex"]) if (!c[k]) bad(f, `kart ${c.w}: ${k} eksik`);
      if (c.w !== c.w.toLowerCase() || /[^a-z ]/.test(c.w)) bad(f, `kart kelimesi küçük harf, sadece a-z ve boşluk: "${c.w}"`);
      if (STARTERS.includes(c.w)) bad(f, `"${c.w}" Starters'ta zaten var`);
      if (seen[c.w]) bad(f, `"${c.w}" başka ünitede de var (${seen[c.w]})`); seen[c.w] = f;
      const first = c.w.split(" ")[0];
      if (!norm(c.ex).includes(first.slice(0, Math.max(3, first.length - 2)))) bad(f, `kart ${c.w}: örnek cümlede kelime yok`);
    });
    const songs = [L.song].concat(u.songs || []);
    if (songs.length !== 5) bad(f, `toplam 5 şarkı olmalı (L.song + songs 4), şu an ${songs.length}`);
    songs.forEach((s, n) => { if (!s || !s.title || !Array.isArray(s.lines) || s.lines.length !== 4) bad(f, `şarkı ${n + 1}: title + 4 satır olmalı`); else if (!s.lines.some(l => /<b>/.test(l))) bad(f, `şarkı ${n + 1}: <b>kelime</b> yok`); });
    const lines = L.song.lines || [];
    const inLine = (i, w) => typeof i === "number" && lines[i] != null && new RegExp(`\\b${w}\\b`, "i").test(plain(lines[i]));
    const T = ["song", "pick", "listen", "write", "speak"];
    (L.tasks || []).forEach((t, n) => {
      if (t.type !== T[n]) bad(f, `tasks[${n}] türü ${T[n]} olmalı`);
      if (t.type !== "speak") pair(f, t.hint, `tasks[${n}]`);
      if (t.type === "song") { if (!inLine(t.line, t.blank)) bad(f, `song görevi: "${t.blank}" ${t.line}. satırda yok (satırlar 0'dan sayılır)`); if (!t.options || !t.options.includes(t.blank) || t.options.length !== 3) bad(f, "song görevi: 3 seçenek, biri blank"); }
      if (t.type === "pick" || t.type === "listen") {
        if (!t.q || !t.tr) bad(f, `${t.type}: q/tr eksik`);
        if (t.type === "listen" && !t.say) bad(f, "listen: say eksik");
        if (!t.options || t.options.length < 3 || !t.options.every(o => (o.e || o.c) && o.v)) bad(f, `${t.type}: 3-4 seçenek {e,v}`);
        else if (!t.options.some(o => o.v === t.answer)) bad(f, `${t.type}: answer seçeneklerde yok`);
      }
      if (t.type === "write") {
        if (!t.e || !t.tr || !/___/.test(t.sentence || "")) bad(f, "write: e, tr, sentence (___ ile) olmalı");
        if (!/^[a-z']+$/.test(t.answer || "")) bad(f, "write: answer tek küçük harfli kelime");
        if (!t.mask || t.mask.replace(/ /g, "").length !== t.answer.length) bad(f, `write: mask harf sayısı answer ile aynı olmalı ("${t.mask}")`);
      }
      if (t.type === "speak" && (!t.sentence || !t.tr)) bad(f, "speak: sentence/tr");
    });
    if ((L.tasks || []).length !== 5) bad(f, "5 task olmalı");
    const H = ["songtype", "dictation", "order", "story", "speakTr"];
    (L.hard || []).forEach((t, n) => {
      if (t.type !== H[n]) bad(f, `hard[${n}] türü ${H[n]} olmalı`);
      if (t.type !== "speakTr") pair(f, t.hint, `hard[${n}]`);
      if (t.type === "songtype") { if (!inLine(t.line, t.blank)) bad(f, `songtype: "${t.blank}" ${t.line}. satırda yok`); if (!/^[a-z]+$/.test(t.blank)) bad(f, "songtype blank tek küçük kelime"); }
      if (t.type === "dictation") { if (!/^[a-z]+$/.test(t.word || "") || !t.e) bad(f, "dictation: word tek küçük kelime + e"); }
      if (t.type === "order") {
        if (!t.tr || !t.answer || /[.!?,]/.test(t.answer)) bad(f, "order: tr + answer (noktalama yok)");
        const ws = t.answer.split(" "); if (ws.length < 4 || ws.length > 10) bad(f, "order: 4-10 kelime");
        if (!t.extra || ws.map(w => w.toLowerCase()).includes(t.extra.toLowerCase())) bad(f, "order: extra cümlede olmayan tek kelime");
      }
      if (t.type === "story") { if (!t.say || !t.q || !t.tr || !t.options || !t.options.includes(t.answer)) bad(f, "story: say/q/tr/options/answer"); }
      if (t.type === "speakTr") { if (!t.tr || !t.answer) bad(f, "speakTr: tr/answer"); }
    });
    if ((L.hard || []).length !== 5) bad(f, "5 hard olmalı");
    const R = u.reading;
    if (!R || !R.title || !R.e || !Array.isArray(R.lines) || R.lines.length < 6 || R.lines.length > 9 || !R.lines.every(x => x.length === 2)) bad(f, "reading: title, e, 6-9 satır [en,tr]");
    if (!R || !R.qs || R.qs.length !== 3 || !R.qs.every(q => q.q && q.tr && q.options && q.options.length === 3 && q.options.includes(q.answer))) bad(f, "reading: 3 soru, cevap seçeneklerde");
    if (!u.listening || u.listening.length !== 5 || !u.listening.every(t => t.say && t.q && t.tr && t.options && t.options.length === 3 && t.options.every(o => (o.e || o.c) && o.v) && t.options.some(o => o.v === t.answer))) bad(f, "listening: 5 madde, 3 seçenek {e,v}, cevap seçeneklerde");
    if (!u.speaking || u.speaking.length !== 5 || !u.speaking.every(t => t.e && t.en && t.tr)) bad(f, "speaking: 5 madde {e,en,tr}");
    const W = u.write;
    if (!W || !W.title || !W.en || !W.tr || !W.starters || !W.checks || !W.model) bad(f, "write: title/en/tr/starters/checks/model");
    else {
      const low = " " + W.model.toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ") + " ";
      W.checks.forEach(c => { if (!(c.re instanceof RegExp)) bad(f, "write.checks re RegExp olmalı"); else if (!c.re.test(low)) bad(f, `write: örnek metin ${c.re} kontrolünü geçmiyor`); });
      const used = words.filter(w => new RegExp(`\\b${w}(s|es)?\\b`).test(low));
      if (used.length < 3) bad(f, `write.model ünite kelimelerinden en az 3 tane kullanmalı (${used})`);
      if ((W.model.match(/[A-Za-z][A-Za-z'’]*/g) || []).length < minWords) bad(f, `write.model en az ${minWords} kelime`);
    }
    const TW = u.towers;
    if (!TW || TW.length !== 3) bad(f, "3 kule olmalı");
    else TW.forEach((t, k) => {
      if (!t.e || !t.title || !t.steps || t.steps.length < 4 || t.steps.length > 5) bad(f, `kule ${k + 1}: e, title, 4-5 kat`);
      else t.steps.forEach((s, j) => { for (const side of ["tr", "en"]) if (!s[side] || !s[side].every(p => p.length === 2 && ["who", "does", "where", "when"].includes(p[1]))) bad(f, `kule ${k + 1} kat ${j + 1}: ${side} [metin, rol]`);
        if (s.en && s.en.length !== j + 1 && !(j === 4)) bad(f, `kule ${k + 1} kat ${j + 1}: ${j + 1} parça olmalı`); });
    });
  }
}
console.log(errs ? `\n${errs} hata` : "✓ Hepsi tamam");
process.exit(errs ? 1 : 0);
