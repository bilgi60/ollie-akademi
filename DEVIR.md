# DEVİR NOTU — Ollie Akademi

> **YENİ İŞ (2026-11-11): `ARASTIRMA.md`'deki 12 öneri SIRAYLA yapılacak (kullanıcı onayladı).**
> - Sıra: 1) Akıllı tekrar ("Bugünün tekrarı") → 2) Yanlış cevabı Türkçe açıklama → 3) Veliye haftalık e-posta raporu (Resend kurulu) → 4) Yazdırılabilir çalışma kâğıdı → 5) Seviye tespit testi → 6) Uyarlanabilir zorluk → 7) Seviyeli okuma kütüphanesi → 8) Movers (A1) + Flyers (A2) üniteleri, sonra KET/PET hazırlık → 9) MEB müfredatı eşleştirme → 10) Ollie ile yapay zekâ sohbeti → 11) Hece düzeyinde telaffuz puanı → 12) Öğretmen/sınıf hesabı.
> - Her madde (ya da birkaç küçük madde) ayrı sohbette. Her biri bitince: tarayıcıda dene, main'e almadan önce kullanıcıya sor, bu nota "biten/sıradaki" yaz.
> - **Madde 1 BİTTİ (dal `claude/bold-planck-a54j4l`, main'e alındı 2026-11-11, YAYINDA).** 
> - **Madde 2 BİTTİ (dal `claude/cool-thompson-cddezq`, 2026-11-11). main'e alındı 2026-11-11, YAYINDA.**
> - **Madde 3 BİTTİ (dal `claude/eloquent-davinci-bm11d7`), 2026-11-11 YAYINDA:** canlı veritabanına göç yapıldı, Worker güncellendi (zamanlayıcı: `0,20,40 15-17 * * SUN`), main'e alındı. Kullanıcı Veli paneli → "✉️ Bana şimdi gönder" ile gerçek e-postayı deneyebilir. Sıradaki: **Madde 4 — Yazdırılabilir çalışma kâğıdı.**
> - **Madde 4 BİTTİ (dal `claude/quirky-cori-yc21ft`, 2026-11-11), main'e alındı 2026-11-11, YAYINDA.** Sıradaki: **Madde 5 — Seviye tespit testi.**
> - **Madde 6 BİTTİ (dal `claude/blissful-curie-oeo7li`, 2026-11-11) — main'e ALINMADI, kullanıcı onayı bekleniyor.** Kullanıcı 5'i atlayıp 6'ya geçmek istedi. **Madde 5 (Seviye tespit testi) hâlâ yapılmadı.** Sıradaki: Madde 5, sonra Madde 7.

> **Son durum (2026-11-11, 13. oturum): Uyarlanabilir zorluk.**
> - Veri: `S.ad = {s: üst üste ilk denemede doğru sayısı, r: son 10 sonuç (1/0), m: en uzun seri}`. Kolay/Zor test ve Bugünün tekrarı sonuçları yazar (`adRec`). "I said it!" soruları (speak, speakTr) sayılmaz.
> - **Üst üste 3 doğru → ⚡ Challenge:** seçmeli soru (şarkı, Look & Pick, Listen, Story) seçeneksiz gelir, cevap yazılır; ilk denemede ⭐ +5 ek. "Which one is a BOOK?" gibi sorularda resim gösterilip kelime sorulur. Uygun olmayan sorular (cevabı çok kelimeli, "Which one is GREEN?" gibi) atlanır (`chAns`). "Seçeneklerle çöz" düğmesi var; iki yanlışta seçenekler kendiliğinden geri gelir. Soru üstünde "⚡ N üst üste" etiketi. Bugünün tekrarı'nda seri yapana yazma sorusu kutu 1'de de gelir.
> - **Zorlanan çocuk (son 6 sorunun ≥3'ü ilk denemede yanlış):** soruda baştan "💡 Ollie'den ipucu" düğmesi (basınca ilk deneme hakkı gider), zor testte ipucu ilk yanlışta gelir.
> - **Adım adım yardım (`helpHTML`), aynı soruda yanlış arttıkça:** seçmelide yanlış seçenekler kaldırılır (2 seçenek kalır), yazmalıda harfler sırayla açılır (g _ _ _), cümle kurmada ilk kelimeler kilitli olarak yerleştirilir. Kolayda 2. yanlıştan, zorda 3. yanlıştan itibaren.
> - Test sonu: hepsi ilk denemede doğruysa "🌟 Zor teste hazırsın" ve Zor test düğmesi öne çıkar; 3+ soruda zorlandıysa "🃏 Kelimelere bir daha bak" önerilir.
> - Yeni rozet: ⚡ Durdurulamaz (10 üst üste doğru). Profilde "En uzun doğru serisi". `api/src/content.js` yeniden üretildi (rozet adı için) — Worker'ı yeniden yayınlamak gerekmez ama istenirse `npx wrangler deploy`.
> - Tarayıcıda (sahte API ile) denendi: challenge, bonus, seçeneklere dönüş, eleme, harf açma, kilitli kelimeler, ipucu düğmesi, test sonu, tekrar, profil; hata yok, telefonda yatay kayma yok.

> **Son durum (2026-11-11, 12. oturum): Yazdırılabilir çalışma kâğıdı.**
> - Adres: `#sheet-1` … `#sheet-10`. Hesap gerekmez (öğretmenler için). Giriş: giriş sayfasında "Öğretmen misin? Ücretsiz çalışma kâğıtları", ünite sayfasında "🖨️ Çalışma kâğıdı" düğmesi, Veli panelinde "🖨️ Çalışma kâğıtları" bölümü.
> - Kâğıt (A4, 2 sayfa): ad/tarih/yıldız satırı, 1) resim-kelime eşleştirme, 2) Türkçeden kutulara yazma (ilk harf hazır), 3) kelime kutulu boşluk doldurma (kelime kartı örnek cümleleri), 4) kelime avı (soldan sağa / yukarıdan aşağı), 5) cümle sıralama (Cümle Kulesi son katları + zor testteki sıralama sorusu, Türkçesiyle), 6) Reading hikâyesi + 3 soru. İsteğe bağlı ayrı sayfada cevap anahtarı (kelime avı işaretli).
> - Üstteki araç çubuğu yazdırılmaz: ünite seç, cevap anahtarı aç/kapat, "🔀 Farklı sorular" (karıştırma tohumu değişir), "🖨️ Yazdır / PDF kaydet" (tarayıcının yazdır penceresi). Kod: `index.html` → `buildSheet`, `sheetHTML`, `showSheet`; CSS "Çalışma kâğıdı" bölümü.
> - Tarayıcıda denendi: 10 ünitenin hepsi hatasız, her biri tam 2 sayfa + cevap anahtarı; telefonda yatay kayma yok.

> **Son durum (2026-11-11, 11. oturum): Veliye haftalık e-posta raporu.**
> - Her pazar 18:00–20:40 (Türkiye) arası Worker zamanlayıcısı (`wrangler.toml` → `[triggers] crons`) her 20 dakikada bir en fazla 40 veliye rapor gönderir (Workers'ın 50 alt istek sınırı yüzünden parti parti). Koşullar: hesap aktif, e-posta doğrulanmış, rapor açık, son 28 günde çalışan en az bir çocuk var, o haftaya daha önce gönderilmemiş (`parents.report_week`). Gönderilemezse sonraki çalıştırmada yeniden denenir.
> - Rapor (çocuk başına): bu hafta yıldız, çalıştığı gün (Pt–Pz yuvarlakları), seri, toplam yıldız, şu anki ünite ve yüzdesi, bu hafta bitirdiği dersler, Bugünün tekrarı tur sayısı, yeni rozetler, zorlandığı kelimeler (Türkçesiyle), tekrarı bekleyen kelime sayısı, veliye haftalık ipucu.
> - "Bu hafta" farkı için her gönderimde çocuğun özeti `report_snap` tablosuna yazılır; ilk raporda fark yerine "Şimdiye kadar" toplamları gösterilir. `activity` tablosuna günlük kazanılan yıldız (`pts`) eklendi.
> - Kelime/ünite/rozet adları `api/src/content.js`'te; bu dosya `index.html`'den üretilir: içerik değişince `node api/tools/gen-content.mjs` çalıştır.
> - Veli paneli: "📬 Haftalık rapor" bölümü (aç/kapat, "Bu haftanın raporunu gör" önizlemesi; yöneticiye "Bana şimdi gönder"). E-postada abonelikten çıkma bağlantısı (`#unsub-<id>-<anahtar>`) ve tek tıkla çıkma başlığı (List-Unsubscribe) var.
> - Yeni uç noktalar: `POST /api/me/settings`, `GET /api/me/report`, `POST /api/unsubscribe`, `POST /api/admin/report-send-me`.
> - Yerelde (wrangler dev + sahte Resend + tarayıcı) uçtan uca denendi: gönderim, ikinci hafta farkı, aynı haftaya tekrar göndermeme, abonelikten çıkma, panel. Hata yok.
> - Not: Resend ücretsiz planı günde 100 / ayda 3.000 e-posta. Veli sayısı 100'ü geçince ücretli plana geçmek gerekir.

> **Son durum (2026-11-11, 10. oturum): Yanlış cevaba Türkçe açıklama ("🦉 Neden olmadı?").**
> - Kolay/Zor testte yanlış cevapta geri bildirim kutusunun altına kısa Türkçe not çıkar; doğru cevabı ele vermez. Zor testte ilk yanlışta da gösterilir.
> - Seçmeli sorular (resim/dinleme/şarkı/hikâye): "Seçtiğin 🦅 eagle = kartal" + soru türüne göre kısa cümle. Türkçe karşılık kelime kartlarından (`WORDS`) ya da `EXTRA_TR` listesinden gelir.
> - Yazmalı sorular (`whyTyped`): bir harf eksik/fazla/yanlış (kaçıncı harf), iki harf yer değiştirmiş, çift harf unutulmuş, -s eksik/fazla, has/have-is/are-a/an gibi dilbilgisi (`GRAM`; ipucu aynı kuralı zaten söylüyorsa tekrarlanmaz), başka bir kelime yazılmış ("monkey = maymun demek"), Türkçesi yazılmış, Türkçe harf kullanılmış.
> - Cümle kurma: fazla kelime kullanılmış, kaç kelime eksik, ilk kaç kelime doğru.
> - Bugünün tekrarı'nda da ilk yanlışta aynı not gösteriliyor.
> - Tarayıcıda (sahte API ile) denendi: hata yok.

> **Son durum (2026-11-11, 9. oturum): Akıllı tekrar ("Bugünün tekrarı") yapıldı.**
> - Ana sayfada "Kaldığın yerden devam et"in altında 🔁 kart: "N kelime seni bekliyor" → `#review` sayfası. Tekrar yoksa "Bugünlük tekrar bitti, yarın X kelime" + "Serbest tekrar".
> - Veri: `S.rev[kelime] = {b: kutu 0–5, d: tekrar günü, x: yanlış sayısı}`, `S.revN` = biten tur sayısı. Kelime Kartları dersi bitince ünitenin kelimeleri eklenir (yarın gelir). Eski kullanıcılarda kartı biten ünitelerin kelimeleri ilk açılışta bugüne eklenir (`normalize`). Kolay/Zor testte ilk yanlışta ilgili kelime kutu 0'a düşer, bugün sorulur (`revMiss`).
> - Tur: en fazla 8 kelime, öncelik: çok yanlış yapılan → düşük kutu → en eski. Soru türleri: resme bak-kelimeyi seç, dinle-resmi seç, kutu ≥2 ise Türkçeden yaz. İlk denemede doğru: kutu +1, tekrar aralığı 1/1/3/7/14/30 gün, ⭐+2. Yanlış: ipucu (ilk harf, harf sayısı), kelime turun sonunda "ikinci şans" olarak yazdırılır, yarın yine gelir. Tur sonu ⭐+3 (hepsi doğruysa +5). Serbest turda kutular değişmez. Yeni rozet: 🔁 Unutmayan Baykuş (5 tur).
> - Tarayıcıda (sahte API ile) uçtan uca denendi: hata yok, sunucuya `rev` kaydediliyor.

> **Son durum (2026-11-11, 8. oturum): Cümle Kulesi 10 ünitenin hepsinde (her ünitede 3 kule, toplam 30). Dal: `claude/optimistic-pasteur-hkgycq` — main'e alındı (2026-11-11, YAYINDA).**
> - Yeni kuleler (Ünite 2–10): Colors 🌞🐸🎈 · School Things 📖✏️🎒 · Family 👩👨👶 · Daily Routines 🪥🚶🍳 · Food 🍎🐱🐭 · Weather 🌧️⛄🪁 · My Body ✋🦉🐶 · Clothes 🧥👒🧦 · Hobbies 🏊🎨🎤. Hepsi aynı kalıp: 1. kat fiil, 2. kat + Kim, 3. kat + Nerede, 4. kat + Ne zaman; bazılarında 5. kat (Kim büyür: "The big red balloon").
> - Tarayıcıda 27 yeni kule baştan sona otomatik oynandı: hata yok, ilerleme ve "k" dersleri doğru işaretleniyor.
> - Yurt dışı rakip araştırması ve öneri listesi: `ARASTIRMA.md`.
> - **Sıradaki adım:** Kulenin sonunda mikrofonla söyleme, kulelerden kısa hikâye (Reading). Bekleyen: KVKK sayfası.

> **Son durum (2026-11-11, 7. oturum): Cümle Kulesi Animals ünitesine eklendi (2026-11-11 main'e alındı, YAYINDA).**
> - Yeni ders: 🧱 Cümle Kulesi (ünite sayfasında Kelime Kartları ile Kolay Test arasında, yalnızca `TOWERS[i]` dolu ünitelerde görünür). Animals'ta 3 kule var: 🐒 monkey, 🐬 dolphin, 🐰 rabbit. Her katta cümleye bir parça eklenir, çocuk renkli kartları sıraya dizer. Renkler: 🔵 Kim? 🟠 Ne yapıyor? 🟢 Nerede? 🟣 Ne zaman?
> - Puan: her kat ilk denemede ⭐+3, hatalıysa +2, tekrar oynarken +1. Her kule ilk bitişte +5 bonus. İlerleme `S.towers[ünite] = [biten kule no'ları]`, hepsi bitince `S.lessons["k"+ünite]`. "Kule Ustası" rozeti ve profilde istatistik eklendi. Ünite yüzdesine ve kilit açmaya etkisi yok.
> - Fikir kaynağı: Grammatica Project kanalının "adım adım cümle kurma" yöntemi (bkz. 6. oturumun araştırması).
> - **Sıradaki adım:** Kullanıcı beğenirse diğer 9 üniteye 3'er kule yaz (`TOWERS` dizisine eleman ekle). Sonra: kulenin sonunda mikrofonla söyleme, kulelerden kısa hikâye (Reading). Bekleyen: KVKK sayfası.

> **Son durum (2026-11-09, 5. oturum): Reading/Listening/Speaking + e-postayla şifre sıfırlama/doğrulama YAYINDA (göç yapıldı, sunucu güncellendi, main'e alındı). Resend kuruldu (2026-11-10): ollieakademi.com Resend'de Verified, RESEND_API_KEY Worker'a gizli değişken olarak eklendi, /api/forgot artık çalışıyor. Kullanıcı gerçek e-postayla şifre sıfırlamayı uçtan uca denedi: e-posta geldi, yeni şifre kaydedildi. BU İŞ BİTTİ. Sıradaki fikirler: KVKK aydınlatma metni sayfası, API'yi api.ollieakademi.com'a taşımak.**
> **Bitenler (dal: `claude/blissful-cori-ulhk0b`):**
> - Menüye 3 yeni bölüm: 📕 Reading (her ünite için kısa hikâye + 3 soru, sesli okuma, Türkçe çeviri), 🎧 Listening (ünite başına 5 resimli dinleme), 🗣️ Speaking (ünite başına 5 cümle; Chrome/Edge/Safari'de mikrofonla kelime kelime kontrol, diğerlerinde "I said it!"). İçerikler `READING`, `LISTENING`, `SPEAKING` dizilerinde. İlerleme `S.skills.{r,l,s}[ünite]` içinde. 3 yeni rozet, profilde istatistik. Telefonda menü kısa etiketlerle (Read/Listen/Speak) sığıyor.
> - Sunucu: `/api/forgot`, `/api/reset`, `/api/verify`, `/api/me/verify-email`. Bağlantılar `ollieakademi.com/#reset-<token>` ve `#verify-<token>`; sıfırlama 60 dk, doğrulama 7 gün, saatte en fazla 3 e-posta. E-posta Resend ile gider; `RESEND_API_KEY` yoksa şifremi unuttum "yöneticiye yaz" der ve doğrulama uyarısı gösterilmez (site bozulmaz).
> - Yönetici panelinde "doğrulanmadı" etiketi. Hepsi yerelde (wrangler dev + tarayıcı) uçtan uca test edildi.
> **Sıradaki adımlar:**
> 1. Kullanıcı onayıyla canlı veritabanına göç: `cd api && CLOUDFLARE_API_TOKEN=proxy-injected CLOUDFLARE_ACCOUNT_ID=9a69de8230786ced37e7236b8221b494 npx wrangler d1 execute ollie-akademi-db --remote --yes --file=migrations-0002-email.sql` (bir kez!), sonra `npx wrangler deploy` (aynı değişkenlerle).
> 2. Dalı main'e al (site GitHub Pages'te main'den yayınlanıyor).
> 3. E-posta için kullanıcı: resend.com hesabı → Domains → ollieakademi.com ekle → verilen DNS kayıtlarını GoDaddy'ye gir → doğrulanınca API Keys'ten "Sending access" anahtarı oluştur → Cloudflare panelinde Workers → ollie-akademi-api → Settings → Variables and Secrets → Secret `RESEND_API_KEY` olarak ekle. Gönderen adres varsayılanı `bilgi@ollieakademi.com` (`MAIL_FROM` değişkeniyle değişir).

> **Son durum (2026-11-09, 4. oturum): Sunucu + veli hesapları + yönetici paneli yazıldı.**
> **Bitenler:**
> - Cloudflare hesabı açıldı. API anahtarı "ollie-akademi" bulut ortamında güvenli olarak saklanıyor (sohbete yazılmadı). Bu ortamla açılan oturumlar Cloudflare'e doğrudan erişir.
> - Sunucu: Cloudflare Worker `ollie-akademi-api` → https://ollie-akademi-api.ollieakademi.workers.dev (kod: `api/src/index.js`, ayarlar: `api/wrangler.toml`).
> - Veritabanı: Cloudflare D1 `ollie-akademi-db` (şema: `api/schema.sql`). Tablolar: parents (role: parent/admin, status: active/suspended), children (ilerleme `data` sütununda JSON), sessions, activity (günlük aktif sayımı), login_fails.
> - Site (`index.html`): veli e-posta ile kayıt/giriş → "Profilini seç" ekranı → çocuk profili. İlerleme sunucuya kaydediliyor (1,5 sn gecikmeli, internet yoksa cihazda bekletip sonra gönderiyor). Veli paneli (#parent): çocuk sil, şifre değiştir, hesap sil. Cihazdaki eski hesaplar "Hesabıma aktar" ile yıldızlarıyla taşınıyor.
> - Yönetici paneli: `admin.html` (sadece role=admin). İstatistikler, son 14 gün günlük aktif grafiği, veli/çocuk arama, çocuk ilerleme detayı, askıya alma, geçici şifre verme, hesap silme.
> - Hepsi yerelde tarayıcıyla uçtan uca test edildi. Kod `sunucu-yonetici` dalında.
> **Yayında (2026-11-09):** `sunucu-yonetici` main'e alındı. Site sahibi kendi veli hesabını açtı ve yönetici yapıldı (parents.id=1, role=admin). Panel: ollieakademi.com/admin.html
> **Sıradaki adım / kalanlar:**
> - Başka bir yöneticiyi atamak için: `cd api && CLOUDFLARE_API_TOKEN=proxy-injected CLOUDFLARE_ACCOUNT_ID=9a69de8230786ced37e7236b8221b494 npx wrangler d1 execute ollie-akademi-db --remote --command "UPDATE parents SET role='admin' WHERE email='<e-posta>'"`
> - İleride: e-postayla şifre sıfırlama (şimdilik yönetici panelinden geçici şifre veriliyor), e-posta doğrulama, KVKK aydınlatma metni sayfası, sunucuyu api.ollieakademi.com gibi kendi alan adına taşımak.
> **Yeniden yayınlama:** `cd api && npm install && CLOUDFLARE_API_TOKEN=proxy-injected CLOUDFLARE_ACCOUNT_ID=9a69de8230786ced37e7236b8221b494 npx wrangler deploy`

> **Son durum (2026-11-09, 3. oturum):** ollieakademi.com'da GitHub Pages "DNS Check in Progress" diyor. Yeşile dönünce Enforce HTTPS açılacak. 1-2 saat geçtiği halde değişmezse GoDaddy'de fazladan A, AAAA ya da Forwarding kaydı var mı bakılacak. Yeni maskot: fessiz, gözlüklü, hardal atkılı, **mezuniyet kepli** baykuş (ollie-kep.zip). Higgsfield kullanılmayacak. **Yapıldı:** kepli Ollie siteye kondu (img/ klasörü; sol menü logosu, konuşma balonu, favicon, apple-touch-icon). main'e alındı ve yayında. **Sıradaki adım:** veli/çocuk hesapları için sunucu ve veritabanı. Kullanıcı (site sahibi) **yönetici hesabı** istiyor: tüm velileri/çocukları ve ilerlemeyi görebileceği bir yönetici paneli. Kullanıcı (b) seçeneğini onayladı: site büyüyüp çok kullanıcı olunca kontrol kaybedilmesin diye kullanıcı yönetimi isteniyor. Plan: sunucu + veritabanı (Cloudflare Workers + D1) kurulurken baştan yönetici rolü eklenecek. Yönetici paneli: veli/çocuk listesi ve arama, ilerleme görme, hesap askıya alma/silme, temel istatistikler (toplam kullanıcı, günlük aktif). Mevcut cihazdaki hesapların sunucuya taşınması düşünülecek. Yeni oturumda kullanıcıdan Cloudflare hesabı istenecek. Diğer 7 şapka ileride Rozetler'de ödül olarak kullanılabilir. Ardından büyük iş: veli/çocuk hesapları için sunucu ve veritabanı.

> **Son durum (2026-11-09):** Eski devir notu kayboldu, çünkü önceki oturumun makinesinde kalmıştı. Bu not yayındaki siteden yeniden çıkarıldı.
> **Bitenler:** Site yayında. 10 ünite var, kayıt/giriş, sözlük, rozetler, profil ve ders oynatıcısı çalışıyor.
> **Kalanlar:** Siteyi Claude dışında, kendi alan adıyla gerçek bir web sitesine çevirmek.
> **Güncelleme:** Site GitHub'a yüklendi (bilgi60/ollie-akademi). GitHub Pages'i kullanıcı Settings → Pages bölümünden açacak. Adres: https://bilgi60.github.io/ollie-akademi/ . Bu ilk sürümde hesaplar ve ilerleme cihazda tutuluyor.
> **Sıradaki adım:** Her cihazdan erişilen veli/çocuk hesapları için sunucu ve veritabanı kurmak (Cloudflare). Alan adı daha sonra bağlanacak.

## Kullanıcının kararları (2026-11-09)
- Site kendi alan adında yayınlanacak, örneğin ollieakademi.com. Higgsfield kullanılmayacak.
- Görünüm animasyonsuz olacak, şu anki tasarım korunacak.
- Üyelik: veli e-postayla kayıt olacak ve altına çocuk profilleri ekleyecek. Çocuktan e-posta istenmeyecek (KVKK).
- İlerleme her cihazdan görülebilecek, yani sunucuda saklanacak.
- Higgsfield vitrininde yayınlanmayacak.

## Önerilen teknik plan
- Barındırma: Cloudflare Pages (ücretsiz). Sunucu tarafı: Cloudflare Workers / Pages Functions. Veritabanı: Cloudflare D1 (SQLite).
- Alan adı: .com ise Cloudflare Registrar'dan maliyet fiyatına alınabilir. .com.tr ise Türk bir firmadan alınıp DNS'i Cloudflare'e yönlendirilir.
- Kod GitHub deposunda tutulacak, oturum kapanınca kaybolmasın diye.
- Veritabanı tabloları: parents (veli hesabı, e-posta, şifre özeti), children (veliye bağlı çocuk profili), progress (çocuk, ünite, görev, yıldız, seri), sessions.
- Mevcut tek HTML dosyası temel alınacak. Şu an tarayıcıda tutulan kayıt/ilerleme bilgileri API çağrılarına bağlanacak.
- Yeni ekranlar: veli paneli (çocuk ekle, çocuğun ilerlemesini gör) ve "profil seç" ekranı.
- Kullanıcıdan istenecekler: alan adı, Cloudflare hesabı, GitHub deposu adı. Cloudflare API anahtarı sohbete yazdırılmayacak, güvenli formla (request_credential) istenecek.

## Bağlantılar
- Site (Artifact): https://claude.ai/artifact/5C3qwvRBSnYpTL7ZGDoSm8
- Eski / ayrı sürüm: "Ollie's English Adventure" https://claude.ai/artifact/6F1yKkwNpo9owFbjmHKLcn

## Sitenin yapısı
- 7–11 yaş için İngilizce eğitim sitesi. Tek HTML dosyası (~127 KB), maskotu Ollie adında bir baykuş.
- Menü: Ana Sayfa, Derslerim, Sözlük, Rozetler, Profil. Telefonda menü alt sekme çubuğuna dönüşüyor.
- Yıldız puanı ve gün serisi (🔥) tutuluyor. Açık ve koyu tema destekleniyor.
- İlk açılışta Kayıt Ol ekranı geliyor. Şarkılar ve görevler sesli.
- `LEVELS` dizisinde 10 ünite var: Animals, Colors, School Things, Family, Daily Routines, Food, Weather, My Body, Clothes, Hobbies.
- Her ünitede şunlar var: bir şarkı, kelime kartları (emoji, kelime, IPA okunuşu, Türkçe anlamı, örnek cümle) ve 5 görev.
- Görev türleri: song, pick, listen, write, speak.
- Zor görevler (`hard` / `HARD` dizileri): songtype, dictation, order, story, speakTr.
- Çocuklar kullanacaksa site, sayfadaki Share menüsünden paylaşılmalı.

## Güncelleme yöntemi
Önce siteyi `Artifact read` ile oku. Sonra değişikliği yap ve aynı URL'ye yeniden yayınla.
