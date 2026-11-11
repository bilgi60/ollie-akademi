// MEB İngilizce dersi ↔ Ollie üniteleri eşleştirmesi. index.html bu dosyayı ana betikten önce yükler.
// Biçim: {g: sınıf, prog: "maarif" | "2018", lv: dil düzeyi, note, themes:[{n: İngilizce ad, tr: Türkçe ad, top: alt konular, u: [Ollie ünite numaraları (1'den), en uygun önce]}]}
// Kaynak (2026-11-11 araştırması): 2., 3., 5., 6. sınıf Türkiye Yüzyılı Maarif Modeli İngilizce programı (tymm.meb.gov.tr tema adları,
// alt konular yıllık planlardan); 4., 7., 8. sınıf 2026-2027'de hâlâ 2018 programı. Eşleştirme Ollie'nin önerisidir, MEB'in resmî eşleştirmesi değildir.
const MEB = [
 {g:2, prog:"maarif", lv:"Pre-A1", themes:[
  {n:"School Life", tr:"Okul hayatı", top:"Selamlaşma ve tanışma, okuldaki kişiler ve yerler, haftanın günleri, millî bayramlar", u:[3,30]},
  {n:"Classroom Life", tr:"Sınıf hayatı", top:"Sınıf yönergeleri, sınıf eşyaları, renkler", u:[3,2]},
  {n:"Personal Life", tr:"Kişisel hayat", top:"Vücudumuz, kıyafetler, yaş ve doğum günü, hava durumu", u:[8,9,7]},
  {n:"Family Life", tr:"Aile hayatı", top:"Aile üyeleri, görünüşleri, aileni anlatma", u:[4,8]}
 ]},
 {g:3, prog:"maarif", lv:"Pre-A1 / A1", themes:[
  {n:"School Life", tr:"Okul hayatı", top:"Okulda tanışma, okuldaki kişiler ve yerler, aylar, yaş ve doğum günü, millî bayramlar", u:[3,24,30]},
  {n:"Classroom Life", tr:"Sınıf hayatı", top:"Sınıf dili, sınıf eşyaları, okul dersleri, mevsimler", u:[3,2,24]},
  {n:"Personal Life", tr:"Kişisel hayat", top:"Vücut ve fiziksel özellikler, kişilik, hava durumu, mevsime göre giyim", u:[8,7,9,13]},
  {n:"Family Life", tr:"Aile hayatı", top:"Aile üyeleri ve yaşları, günlük rutinler ve ev işleri, hobiler ve yetenekler", u:[4,5,10]},
  {n:"Homes, Houses & Neighbourhoods", tr:"Evler ve mahalleler", top:"Kırsal yaşam, çiftlik evi, çiftlik hayvanları, çiftlikteki işler", u:[1,17,12]},
  {n:"Life in the City & the World", tr:"Şehirde ve dünyada yaşam", top:"Yiyecekler ve öğünler, dışarıda yemek, yemek siparişi", u:[6,18,12]}
 ]},
 {g:4, prog:"2018", lv:"A1", note:"4. sınıfta 2026-2027'de hâlâ eski (2018) program okutuluyor; Maarif Modeli'ne bir sonraki yıl geçilmesi bekleniyor.", themes:[
  {n:"Classroom Rules", tr:"Sınıf kuralları", top:"Sınıf eşyaları, izin isteme, rica ve yönergeler", u:[3,31]},
  {n:"Nationality", tr:"Milliyetler", top:"Ülkeler, milliyetler, nerelisin?", u:[21,47]},
  {n:"Cartoon Characters", tr:"Çizgi film karakterleri", top:"Can / can't ile yetenekler, karakterleri anlatma", u:[1,10]},
  {n:"Free Time", tr:"Boş zaman", top:"Hobiler, sevdiğin ve sevmediğin etkinlikler", u:[10,19,29]},
  {n:"My Day", tr:"Günüm", top:"Günlük rutinler, saatler, günün bölümleri", u:[5]},
  {n:"Fun with Science", tr:"Bilimle eğlence", top:"Renkler, basit deneyler, yönergeleri izleme", u:[2,23]},
  {n:"Jobs", tr:"Meslekler", top:"Meslekler ve iş yerleri", u:[11,12]},
  {n:"My Clothes", tr:"Kıyafetlerim", top:"Kıyafetler, hava durumu ve mevsime göre giyim", u:[9,7]},
  {n:"My Friends", tr:"Arkadaşlarım", top:"Arkadaşını tarif etme, fiziksel görünüş, have got", u:[8,33]},
  {n:"Food and Drinks", tr:"Yiyecek ve içecekler", top:"Yiyecekler, öneri yapma, aç / susuz olma", u:[6,18]}
 ]},
 {g:5, prog:"maarif", lv:"A1", themes:[
  {n:"School Life", tr:"Okul hayatı", top:"Okuldaki kişiler, yerler ve kurallar, okul kulüpleri, millî bayramlar", u:[3,31,30]},
  {n:"Classroom Life", tr:"Sınıf hayatı", top:"Sınıf eşyaları, haftanın günleri ve saatler, sınıf kuralları", u:[3,24,5]},
  {n:"Personal Life", tr:"Kişisel hayat", top:"Vücut ve fiziksel özellikler, kıyafetler", u:[8,9,33]},
  {n:"Family Life", tr:"Aile hayatı", top:"Günlük rutinler, aile üyelerinin rutinleri", u:[4,5,34]},
  {n:"Life in the Neighbourhood & City", tr:"Mahallede ve şehirde yaşam", top:"Mahalledeki ve şehirdeki yerler, ev türleri", u:[12,17,35]},
  {n:"Life in the World", tr:"Dünyada yaşam", top:"Ülkeler, kültürler, yolculuklar", u:[21,20,47]},
  {n:"Life in Nature", tr:"Doğada yaşam", top:"Doğadaki hayvanlar, vahşi hayvanlar ve yaşam alanları", u:[15,16,1]},
  {n:"Life in the Universe & Future", tr:"Evrende yaşam ve gelecek", top:"Uzay, gezegenler, gelecek", u:[22,39,26]}
 ]},
 {g:6, prog:"maarif", lv:"A2", themes:[
  {n:"School Life", tr:"Okul hayatı", top:"Okulda roller ve sorumluluklar, okul rutinleri, millî bayramlar", u:[31,30]},
  {n:"Classroom Life", tr:"Sınıf hayatı", top:"Ders çalışma rutinleri, sınıf etkinlikleri, 100–500 arası sayılar, sıra sayıları", u:[31,24,25]},
  {n:"Personal Life", tr:"Kişisel hayat", top:"Kişilik, duygular, yetenekler ve ilgi alanları", u:[33,13,29]},
  {n:"Family Life", tr:"Aile hayatı", top:"Ev işleri, aile içi sorumluluklar, aile anıları", u:[34,4,43]},
  {n:"Life in the Neighbourhood & City", tr:"Mahallede ve şehirde yaşam", top:"Şehir hayatı, yol tarifi, alışveriş", u:[35,12,25]},
  {n:"Life in the World & Culture", tr:"Dünya ve kültür", top:"Farklı kültürler, kutlamalar, gezilecek yerler", u:[30,47,21]},
  {n:"Life in Nature & Global Problems", tr:"Doğa ve küresel sorunlar", top:"Doğadaki etkinlikler, çevre sorunları ve çözümleri", u:[27,38,16]},
  {n:"Life in the Universe & Future", tr:"Evren ve gelecek", top:"Uzay, icatlar, gelecek planları", u:[22,39,42]}
 ]},
 {g:7, prog:"2018", lv:"A2", note:"7. sınıf İngilizcede 2026-2027'de eski (2018) programın okutulduğu bildiriliyor; kaynaklar arasında çelişki var, okulunuzun kitabıyla karşılaştırın.", themes:[
  {n:"Appearance and Personality", tr:"Görünüş ve kişilik", top:"İnsanları tarif etme, karşılaştırma", u:[33,8,15]},
  {n:"Sports", tr:"Sporlar", top:"Sporlar, sıklık zarfları, geçmiş zaman", u:[19,29]},
  {n:"Biographies", tr:"Biyografiler", top:"Geçmiş zaman, hayat hikâyeleri", u:[20,43,42]},
  {n:"Wild Animals", tr:"Vahşi hayvanlar", top:"Nesli tükenen hayvanlar, should, karşılaştırma", u:[15,27]},
  {n:"Television", tr:"Televizyon", top:"TV programları, tercih belirtme", u:[37]},
  {n:"Celebrations", tr:"Kutlamalar", top:"Parti hazırlığı, davet, öneri", u:[30]},
  {n:"Dreams", tr:"Hayaller", top:"Gelecek hayalleri, will, rüyalar", u:[44,39]},
  {n:"Public Buildings", tr:"Kamu binaları", top:"Şehirdeki binalar, yol tarifi", u:[12,35]},
  {n:"Environment", tr:"Çevre", top:"Geri dönüşüm, çevre sorunları, öneriler", u:[27]},
  {n:"Planets", tr:"Gezegenler", top:"Güneş sistemi, karşılaştırma, eski inanışlar", u:[22]}
 ]},
 {g:8, prog:"2018", lv:"A2 / B1", note:"8. sınıfta 2026-2027'de eski (2018) program okutuluyor; LGS İngilizce soruları bu ünitelerden gelir.", themes:[
  {n:"Friendship", tr:"Arkadaşlık", top:"Davet etme, kabul ve ret, özür dileme", u:[46]},
  {n:"Teen Life", tr:"Gençlik hayatı", top:"Gençlerin ilgi alanları, sevme ve sevmeme", u:[41,29]},
  {n:"In the Kitchen", tr:"Mutfakta", top:"Tarif, süreç anlatma, first / then / finally", u:[36,18]},
  {n:"On the Phone", tr:"Telefonda", top:"Telefon görüşmesi, mesaj bırakma", u:[40]},
  {n:"The Internet", tr:"İnternet", top:"İnternet kullanımı, güvenlik, görüş bildirme", u:[26,41]},
  {n:"Adventures", tr:"Maceralar", top:"Macera sporları, tercih ve karşılaştırma", u:[50,19]},
  {n:"Tourism", tr:"Turizm", top:"Gezilecek yerler, deneyimler (present perfect)", u:[47,32,21]},
  {n:"Chores", tr:"Ev işleri", top:"Ev işleri, sorumluluklar, have to / must", u:[34]},
  {n:"Science", tr:"Bilim", top:"İcatlar ve bilim insanları, edilgen yapı", u:[42,22]},
  {n:"Natural Forces", tr:"Doğal afetler", top:"Doğal afetler, tahmin ve uyarı, if cümleleri", u:[38,27]}
 ]}
];
