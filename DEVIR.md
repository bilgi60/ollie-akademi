# DEVİR NOTU — Ollie Akademi

> **Son durum (2026-11-09, 4. oturum): Sunucu + veli hesapları + yönetici paneli yazıldı.**
> **Bitenler:**
> - Cloudflare hesabı açıldı. API anahtarı "ollie-akademi" bulut ortamında güvenli olarak saklanıyor (sohbete yazılmadı). Bu ortamla açılan oturumlar Cloudflare'e doğrudan erişir.
> - Sunucu: Cloudflare Worker `ollie-akademi-api` → https://ollie-akademi-api.ollieakademi.workers.dev (kod: `api/src/index.js`, ayarlar: `api/wrangler.toml`).
> - Veritabanı: Cloudflare D1 `ollie-akademi-db` (şema: `api/schema.sql`). Tablolar: parents (role: parent/admin, status: active/suspended), children (ilerleme `data` sütununda JSON), sessions, activity (günlük aktif sayımı), login_fails.
> - Site (`index.html`): veli e-posta ile kayıt/giriş → "Profilini seç" ekranı → çocuk profili. İlerleme sunucuya kaydediliyor (1,5 sn gecikmeli, internet yoksa cihazda bekletip sonra gönderiyor). Veli paneli (#parent): çocuk sil, şifre değiştir, hesap sil. Cihazdaki eski hesaplar "Hesabıma aktar" ile yıldızlarıyla taşınıyor.
> - Yönetici paneli: `admin.html` (sadece role=admin). İstatistikler, son 14 gün günlük aktif grafiği, veli/çocuk arama, çocuk ilerleme detayı, askıya alma, geçici şifre verme, hesap silme.
> - Hepsi yerelde tarayıcıyla uçtan uca test edildi. Kod `sunucu-yonetici` dalında.
> **Kalanlar / sıradaki adım:**
> 1. Kullanıcı onay verince `sunucu-yonetici` dalı main'e alınacak (site o an yeni sisteme geçer).
> 2. Kullanıcı ollieakademi.com'da kendi veli hesabını açacak. Sonra yönetici yapılacak:
>    `cd api && CLOUDFLARE_API_TOKEN=proxy-injected CLOUDFLARE_ACCOUNT_ID=9a69de8230786ced37e7236b8221b494 npx wrangler d1 execute ollie-akademi-db --remote --command "UPDATE parents SET role='admin' WHERE email='<e-posta>'"`
> 3. İleride: e-postayla şifre sıfırlama (şimdilik yönetici panelinden geçici şifre veriliyor), e-posta doğrulama, KVKK aydınlatma metni sayfası, sunucuyu api.ollieakademi.com gibi kendi alan adına taşımak.
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
