// Hece düzeyinde telaffuz puanı (Madde 11): çocuk Speaking cümlesini söyler, tarayıcı 16 kHz WAV kaydı gönderir,
// biz Azure Speech "Pronunciation Assessment" servisine iletip kelime + hece puanlarını döndürürüz.
// Ses kaydı hiçbir yerde saklanmaz. Çocuk başına günde PRON_LIMIT kontrol; sınır dolunca, anahtar yoksa ya da
// Azure'un hakkı bitince {off} döner ve site tarayıcının ücretsiz kelime kontrolüne geçer.
import { UNITS } from "./content.js";

export const PRON_LIMIT = 100;         // çocuk başına günlük kontrol
const KEEP_DAYS = 30;                  // sayaç satırları bu kadar gün saklanır
const MAX_BYTES = 16000 * 2 * 12 + 44; // en fazla ~12 saniyelik 16 kHz 16 bit mono WAV

const used = async (env, c, day) =>
  (await env.DB.prepare("SELECT n FROM pron_usage WHERE child_id = ? AND day = ?").bind(c.id, day).first())?.n || 0;

export async function pronStatus(env, c, day) {
  const n = await used(env, c, day);
  return { on: !!env.AZURE_SPEECH_KEY, limit: PRON_LIMIT, left: Math.max(0, PRON_LIMIT - n) };
}

function b64(s) {
  const b = new TextEncoder().encode(s);
  let t = ""; for (const x of b) t += String.fromCharCode(x);
  return btoa(t);
}
const pa = o => (o && o.PronunciationAssessment) || o || {};
const num = v => (typeof v === "number" && isFinite(v) ? Math.round(v) : null);

// Azure cevabını sitenin ihtiyaç duyduğu küçük biçime çevirir.
export function shapeResult(r) {
  if (!r || r.RecognitionStatus !== "Success" || !r.NBest || !r.NBest.length) return { nomatch: true };
  const b = r.NBest[0], s = pa(b);
  const words = (b.Words || []).map(w => {
    const ws = pa(w);
    return {
      w: w.Word,
      s: num(ws.AccuracyScore),
      e: ws.ErrorType || "None",                                   // None | Mispronunciation | Omission | Insertion
      syl: (w.Syllables || []).map(y => [y.Grapheme || y.Syllable || "", num(pa(y).AccuracyScore)]),
    };
  });
  return {
    score: num(s.PronScore), acc: num(s.AccuracyScore), flu: num(s.FluencyScore), comp: num(s.CompletenessScore),
    heard: b.Display || b.Lexical || "", words,
  };
}

export async function pronCheck(env, c, req, url, day, bad) {
  const unit = +url.searchParams.get("unit"), idx = +url.searchParams.get("idx");
  const u = UNITS[unit];
  if (!Number.isInteger(unit) || !Number.isInteger(idx) || !u || !u.sp || !u.sp[idx]) bad("Geçersiz cümle.");
  const ref = u.sp[idx].replace(/[’‘]/g, "'").replace(/[“”]/g, '"');
  if (!env.AZURE_SPEECH_KEY) return { off: "nokey", left: 0 };
  if ((await used(env, c, day)) >= PRON_LIMIT) return { off: "limit", left: 0 };

  const audio = await req.arrayBuffer();
  if (audio.byteLength < 44 + 16000 * 2 * 0.3 || audio.byteLength > MAX_BYTES) bad("Ses kaydı çok kısa ya da çok uzun.");
  const h = new Uint8Array(audio, 0, 12);
  if (String.fromCharCode(...h.slice(0, 4)) !== "RIFF" || String.fromCharCode(...h.slice(8, 12)) !== "WAVE") bad("Geçersiz ses kaydı.");

  const row = await env.DB.prepare("INSERT INTO pron_usage (child_id, day, n) VALUES (?, ?, 1) ON CONFLICT(child_id, day) DO UPDATE SET n = n + 1 RETURNING n")
    .bind(c.id, day).first();
  const left = Math.max(0, PRON_LIMIT - row.n);

  const base = env.AZURE_SPEECH_ENDPOINT || `https://${env.AZURE_SPEECH_REGION || "westeurope"}.stt.speech.microsoft.com`;
  const params = { ReferenceText: ref, GradingSystem: "HundredMark", Granularity: "Phoneme", Dimension: "Comprehensive", EnableMiscue: true, PhonemeAlphabet: "IPA" };
  let res;
  try {
    res = await fetch(`${base}/speech/recognition/conversation/cognitiveservices/v1?language=en-US&format=detailed`, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": env.AZURE_SPEECH_KEY,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Accept": "application/json",
        "Pronunciation-Assessment": b64(JSON.stringify(params)),
      },
      body: audio,
      signal: AbortSignal.timeout(20_000),
    });
  } catch (e) {
    console.error("Azure telaffuz bağlantı hatası", e);
    return { off: "error", left };
  }
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    console.error("Azure telaffuz hatası", res.status, t.slice(0, 300));
    // 401: anahtar yanlış · 403: ücretsiz kota bitti · 429: çok sık istek
    return { off: res.status === 403 ? "quota" : res.status === 429 ? "busy" : "error", code: res.status, left };
  }
  let data;
  try { data = await res.json(); } catch { return { off: "error", left }; }
  return { ...shapeResult(data), left };
}

export async function pronPrune(env) {
  const d = new Date(Date.now() + 3 * 3600_000 - KEEP_DAYS * 86400_000).toISOString().slice(0, 10);
  await env.DB.prepare("DELETE FROM pron_usage WHERE day < ?").bind(d).run();
}
