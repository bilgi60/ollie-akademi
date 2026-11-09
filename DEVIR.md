# DEVİR NOTU — Ollie Akademi

> **Son durum (2026-11-09, 3. oturum):** ollieakademi.com'da GitHub Pages "DNS Check in Progress" diyor. Yeşile dönünce Enforce HTTPS açılacak. 1-2 saat geçtiği halde değişmezse GoDaddy'de fazladan A, AAAA ya da Forwarding kaydı var mı bakılacak. Yeni maskot: fessiz, gözlüklü, hardal atkılı, **mezuniyet kepli** baykuş (ollie-kep.zip). Higgsfield kullanılmayacak. **Yapıldı:** kepli Ollie siteye kondu (img/ klasörü; sol menü logosu, konuşma balonu, favicon, apple-touch-icon). main'e alındı ve yayında. **Sıradaki adım:** veli/çocuk hesapları için sunucu ve veritabanı. Diğer 7 şapka ileride Rozetler'de ödül olarak kullanılabilir. Ardından büyük iş: veli/çocuk hesapları için sunucu ve veritabanı.

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
