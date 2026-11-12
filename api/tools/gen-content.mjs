// index.html'deki içerikten haftalık rapor için gereken küçük özeti üretir.
// Çalıştır: node api/tools/gen-content.mjs   (çıktı: api/src/content.js)
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const lines = readFileSync(join(here, "../../index.html"), "utf8").split("\n");
function grab(name) {
  const s = lines.findIndex(l => l.startsWith(`const ${name} = [`));
  if (s < 0) throw new Error(name + " bulunamadı");
  const e = lines.findIndex((l, i) => i > s && /^\];/.test(l));
  const src = lines.slice(s, e + 1).join("\n").replace(`const ${name} = `, "return ");
  return new Function(src)();
}
const LEVELS = grab("LEVELS"), BADGES = grab("BADGES");
const READING = grab("READING"), LISTENING = grab("LISTENING"), SPEAKING = grab("SPEAKING");
// Movers (A1) üniteleri units-a1.js'te, Flyers (A2) units-a2.js'te, A2 Key units-key.js'te, B1 Preliminary units-pet.js'te: aynı sırayla ekle (index.html'deki birleştirme gibi).
const UNITS_A1 = new Function(readFileSync(join(here, "../../units-a1.js"), "utf8") + "\nreturn UNITS_A1;")();
const UNITS_A2 = new Function(readFileSync(join(here, "../../units-a2.js"), "utf8") + "\nreturn UNITS_A2;")();
const UNITS_KEY = new Function(readFileSync(join(here, "../../units-key.js"), "utf8") + "\nreturn UNITS_KEY;")();
const UNITS_PET = new Function(readFileSync(join(here, "../../units-pet.js"), "utf8") + "\nreturn UNITS_PET;")();
UNITS_A1.concat(UNITS_A2, UNITS_KEY, UNITS_PET).forEach(u => { LEVELS.push(u.L); READING.push(u.reading); LISTENING.push(u.listening); SPEAKING.push(u.speaking); });

const units = LEVELS.map((L, i) => ({
  theme: L.theme, tr: L.tr, icon: L.icon,
  r: READING[i].qs.length, l: LISTENING[i].length, s: SPEAKING[i].length,
  w: L.cards.map(c => c.w),   // Ollie sohbeti için ünite kelimeleri
}));
const words = {};
LEVELS.forEach(L => L.cards.forEach(c => { words[c.w] = [c.e, c.tr]; }));
const badges = Object.fromEntries(BADGES.map(b => [b.id, [b.e, b.n]]));

writeFileSync(join(here, "../src/content.js"),
  "// OTOMATİK ÜRETİLDİ — elle değiştirme. Kaynak: index.html, üretici: api/tools/gen-content.mjs\n" +
  `export const UNITS = ${JSON.stringify(units)};\n` +
  `export const WORDS = ${JSON.stringify(words)};\n` +
  `export const BADGES = ${JSON.stringify(badges)};\n`);
console.log(`content.js yazıldı: ${units.length} ünite, ${Object.keys(words).length} kelime, ${Object.keys(badges).length} rozet`);
