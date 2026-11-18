// Haftanın hikâyesi: özel gün ve mevsim hikâyeleri. index.html bu dosyayı ana betikten önce yükler.
// Biçim kitaplarla (BOOKS) aynı: {id, t, e, pages:[[resim, en, tr]], g:{kelime: Türkçesi}, qs:[{q, tr, options, answer}]} + when.
// when: {d:["AA-GG","AA-GG"]} her yıl aynı tarih aralığı (hafta bu aralığa değiyorsa) · {y:{yıl:["YYYY-AA-GG","YYYY-AA-GG"]}} yıla göre değişen
// tarih (dinî bayramlar; HER YIL EKLENMELİ, eksik yılda o hikâye çıkmaz) · {nth:[ay, kaçıncı pazar]} Anneler/Babalar Günü (o pazarın haftası) ·
// {season:"autumn|winter|spring|summer"} özel gün yoksa o mevsimin hikâyeleri haftalara sırayla dağıtılır. Sıra önceliktir: üstteki önce seçilir.
// Seviye: hepsi Starters 2 düzeyinde (6 sayfa, sayfada 1–2 kısa cümle, 3 soru), böylece her çocuk okuyabilir.
const STORIES = [
{id:"w1", t:"Sweet Bayram", e:"🍬", when:{y:{2027:["2027-03-09","2027-03-11"]}}, pages:[
 ["👧👗","It is Bayram today! Ece wears her new dress.","Bugün bayram! Ece yeni elbisesini giyer."],
 ["👧👵🤲","Ece visits her grandma. She kisses Grandma’s hand.","Ece büyükannesini ziyaret eder. Büyükannesinin elini öper."],
 ["👵🍬","Grandma gives her sweets and a big smile.","Büyükanne ona şeker ve kocaman bir gülümseme verir."],
 ["🚪👦👧","Children knock on the door. “Happy Bayram!” they say.","Çocuklar kapıyı çalar. “İyi bayramlar!” derler."],
 ["👧🍬👦","Ece shares her sweets with the children.","Ece şekerlerini çocuklarla paylaşır."],
 ["👨‍👩‍👧😊","Everyone is happy. Bayram is about family and sharing.","Herkes mutlu. Bayram aile ve paylaşmak demektir."]],
 g:{bayram:"bayram", today:"bugün", wears:"giyer", new:"yeni", dress:"elbise", visits:"ziyaret eder", kisses:"öper", hand:"el", gives:"verir", sweets:"şekerler", big:"büyük", smile:"gülümseme", children:"çocuklar", knock:"çalarlar", door:"kapı", happy:"mutlu", say:"derler", shares:"paylaşır", everyone:"herkes", about:"hakkında", family:"aile", sharing:"paylaşmak"},
 qs:[{q:"Who does Ece visit?", tr:"Ece kimi ziyaret eder?", options:["Her teacher","Her grandma","Her friend"], answer:"Her grandma"},
  {q:"What does Grandma give her?", tr:"Büyükanne ona ne verir?", options:["Sweets","A book","A ball"], answer:"Sweets"},
  {q:"What does Ece do with her sweets?", tr:"Ece şekerlerini ne yapar?", options:["She hides them","She shares them","She eats them all"], answer:"She shares them"}]},

{id:"w2", t:"Bayram at Grandpa’s", e:"🏡", when:{y:{2027:["2027-05-15","2027-05-16"]}}, pages:[
 ["🚗👨‍👩‍👦","It is Kurban Bayramı. Mert and his family go to the village.","Kurban Bayramı. Mert ve ailesi köye gider."],
 ["👴🏡","Grandpa waits at the door. “Welcome!” he says.","Büyükbaba kapıda bekler. “Hoş geldiniz!” der."],
 ["👦🤲👴","Mert kisses Grandpa’s hand. Grandpa gives him some money.","Mert büyükbabasının elini öper. Büyükbaba ona biraz harçlık verir."],
 ["🍲🍽️","Grandma cooks a big lunch for everyone.","Büyükanne herkes için büyük bir öğle yemeği pişirir."],
 ["👦🍲🏠","Mert takes a plate of food to the old neighbour.","Mert yaşlı komşuya bir tabak yemek götürür."],
 ["👵😊","“Thank you, Mert!” she says. Sharing makes everyone happy.","“Teşekkürler Mert!” der. Paylaşmak herkesi mutlu eder."]],
 g:{bayram:"bayram", kurban:"kurban", "bayramı":"bayramı", family:"aile", village:"köy", waits:"bekler", door:"kapı", welcome:"hoş geldiniz", says:"der", kisses:"öper", hand:"el", gives:"verir", some:"biraz", money:"para, harçlık", cooks:"pişirir", big:"büyük", lunch:"öğle yemeği", everyone:"herkes", takes:"götürür", plate:"tabak", food:"yemek", old:"yaşlı", neighbour:"komşu", thank:"teşekkür etmek", sharing:"paylaşmak", makes:"yapar, eder", happy:"mutlu"},
 qs:[{q:"Where does Mert’s family go?", tr:"Mert’in ailesi nereye gider?", options:["To the beach","To the village","To the zoo"], answer:"To the village"},
  {q:"Who cooks lunch?", tr:"Öğle yemeğini kim pişirir?", options:["Grandma","Mert","Grandpa"], answer:"Grandma"},
  {q:"Who does Mert take food to?", tr:"Mert yemeği kime götürür?", options:["His teacher","The old neighbour","His cat"], answer:"The old neighbour"}]},

{id:"w3", t:"Back to School", e:"🎒", when:{d:["09-14","09-18"]}, pages:[
 ["🎒👦","School starts today! Leo has a new bag.","Okul bugün başlıyor! Leo’nun yeni bir çantası var."],
 ["👦😟","He is a little scared. He doesn’t know the children.","Biraz korkuyor. Çocukları tanımıyor."],
 ["👩‍🏫😊","The teacher smiles. “Hello, Leo! Come in.”","Öğretmen gülümser. “Merhaba Leo! İçeri gel.”"],
 ["👧🖍️","A girl sits next to him. “I’m Ayşe. Do you want a crayon?”","Bir kız yanına oturur. “Ben Ayşe. Boya kalemi ister misin?”"],
 ["👦👧🎨","Leo and Ayşe draw a big sun together.","Leo ve Ayşe birlikte büyük bir güneş çizer."],
 ["👦😄","After school, Leo says, “I love school!”","Okuldan sonra Leo, “Okulu çok seviyorum!” der."]],
 g:{school:"okul", starts:"başlar", today:"bugün", new:"yeni", bag:"çanta", little:"biraz, küçük", scared:"korkmuş", "doesn’t":"-mez (he/she/it)", know:"bilmek, tanımak", children:"çocuklar", smiles:"gülümser", hello:"merhaba", come:"gel", girl:"kız", sits:"oturur", next:"yanında", "i’m":"ben …-im", want:"istemek", crayon:"boya kalemi", draw:"çizmek", big:"büyük", sun:"güneş", together:"birlikte", after:"sonra", says:"der", love:"çok sevmek"},
 qs:[{q:"What does Leo have?", tr:"Leo’nun neyi var?", options:["A new bag","A new bike","A new dog"], answer:"A new bag"},
  {q:"Who sits next to Leo?", tr:"Leo’nun yanına kim oturur?", options:["Mert","Ayşe","The teacher"], answer:"Ayşe"},
  {q:"What do they draw?", tr:"Ne çizerler?", options:["A cat","A house","A sun"], answer:"A sun"}]},

{id:"w4", t:"Kind to Animals", e:"🐾", when:{d:["10-04","10-04"]}, pages:[
 ["🐾🌍","October 4th is World Animal Day.","4 Ekim Dünya Hayvanları Koruma Günü’dür."],
 ["🐱🌧️","Deniz sees a little cat. It is wet and hungry.","Deniz küçük bir kedi görür. Kedi ıslak ve aç."],
 ["👧🥛","Deniz gives the cat some water and food.","Deniz kediye biraz su ve mama verir."],
 ["🐦💧","Then she puts water out for the birds, too.","Sonra kuşlar için de dışarıya su koyar."],
 ["🐱😺","The cat says, “Meow!” Now it is happy.","Kedi “Miyav!” der. Artık mutlu."],
 ["👧❤️🐾","“Animals are our friends,” says Deniz.","“Hayvanlar bizim arkadaşımız,” der Deniz."]],
 g:{october:"ekim", "4th":"dördü", world:"dünya", animal:"hayvan", day:"gün", sees:"görür", little:"küçük", cat:"kedi", wet:"ıslak", gives:"verir", some:"biraz", water:"su", food:"yemek, mama", then:"sonra", puts:"koyar", out:"dışarı", birds:"kuşlar", says:"der", meow:"miyav", happy:"mutlu", animals:"hayvanlar", friends:"arkadaşlar"},
 qs:[{q:"What does Deniz see?", tr:"Deniz ne görür?", options:["A dog","A little cat","A fish"], answer:"A little cat"},
  {q:"What does she give the cat?", tr:"Kediye ne verir?", options:["Water and food","A ball","A hat"], answer:"Water and food"},
  {q:"“Animals are our …”", tr:"“Hayvanlar bizim …”", options:["teachers","friends","toys"], answer:"friends"}]},

{id:"w5", t:"Happy Birthday, Republic!", e:"🇹🇷", when:{d:["10-29","10-29"]}, pages:[
 ["🇹🇷📅","October 29th is Republic Day in Türkiye.","29 Ekim Türkiye’de Cumhuriyet Bayramı’dır."],
 ["🏫🚩","The school is red and white. There are flags everywhere.","Okul kırmızı beyaz. Her yerde bayraklar var."],
 ["👧🎤","Ayşe reads a poem in front of the class.","Ayşe sınıfın önünde bir şiir okur."],
 ["👦🥁","Mert plays the drum. Boom, boom, boom!","Mert davul çalar. Bum, bum, bum!"],
 ["👨‍👩‍👧‍👦👏","All the families clap and sing together.","Bütün aileler alkışlar ve birlikte şarkı söyler."],
 ["🎆😊","At night, there are fireworks. Happy birthday, Republic!","Gece havai fişekler var. İyi ki doğdun Cumhuriyet!"]],
 g:{october:"ekim", "29th":"yirmi dokuzu", republic:"cumhuriyet", day:"gün, bayram", "türkiye":"Türkiye", school:"okul", red:"kırmızı", flags:"bayraklar", everywhere:"her yerde", reads:"okur", poem:"şiir", front:"ön", class:"sınıf", plays:"çalar", drum:"davul", boom:"bum", all:"bütün", families:"aileler", clap:"alkışlamak", sing:"şarkı söylemek", together:"birlikte", fireworks:"havai fişekler", happy:"mutlu", birthday:"doğum günü"},
 qs:[{q:"What colours is the school?", tr:"Okul hangi renklerde?", options:["Blue and green","Red and white","Yellow and black"], answer:"Red and white"},
  {q:"What does Ayşe read?", tr:"Ayşe ne okur?", options:["A poem","A letter","A comic"], answer:"A poem"},
  {q:"What does Mert play?", tr:"Mert ne çalar?", options:["The guitar","The piano","The drum"], answer:"The drum"}]},

{id:"w6", t:"A Card for My Teacher", e:"💐", when:{d:["11-24","11-24"]}, pages:[
 ["📅👩‍🏫","November 24th is Teachers’ Day.","24 Kasım Öğretmenler Günü’dür."],
 ["👦✂️📄","Sam makes a card. He cuts a big red heart.","Sam bir kart yapar. Büyük kırmızı bir kalp keser."],
 ["👦✏️","He writes, “Thank you for everything!”","“Her şey için teşekkürler!” yazar."],
 ["👧🌼","Lily brings a yellow flower from her garden.","Lily bahçesinden sarı bir çiçek getirir."],
 ["👩‍🏫😊","The teacher opens the card. She smiles.","Öğretmen kartı açar. Gülümser."],
 ["👩‍🏫❤️","“You are wonderful children!” she says.","“Siz harika çocuklarsınız!” der."]],
 g:{november:"kasım", "24th":"yirmi dördü", "teachers’":"öğretmenlerin", day:"gün", makes:"yapar", card:"kart", cuts:"keser", big:"büyük", red:"kırmızı", heart:"kalp", writes:"yazar", thank:"teşekkür etmek", everything:"her şey", brings:"getirir", yellow:"sarı", flower:"çiçek", from:"-den", garden:"bahçe", opens:"açar", smiles:"gülümser", wonderful:"harika", children:"çocuklar", says:"der"},
 qs:[{q:"What does Sam make?", tr:"Sam ne yapar?", options:["A cake","A card","A kite"], answer:"A card"},
  {q:"What does Lily bring?", tr:"Lily ne getirir?", options:["A yellow flower","A red apple","A blue pen"], answer:"A yellow flower"},
  {q:"How does the teacher feel?", tr:"Öğretmen nasıl hisseder?", options:["Angry","Sad","Happy"], answer:"Happy"}]},

{id:"w7", t:"Hello, New Year!", e:"🎆", when:{d:["12-29","01-01"]}, pages:[
 ["📅🎉","It is the last night of the year.","Yılın son gecesi."],
 ["👨‍👩‍👧🍰","Ece’s family has dinner and a big cake.","Ece’nin ailesi akşam yemeği yer ve büyük bir pasta keser."],
 ["👧🎲","They play games. Ece wins two times!","Oyun oynarlar. Ece iki kez kazanır!"],
 ["🕛🔟","Ten, nine, eight … three, two, one!","On, dokuz, sekiz … üç, iki, bir!"],
 ["🎆✨","“Happy New Year!” Fireworks light up the sky.","“Mutlu yıllar!” Havai fişekler gökyüzünü aydınlatır."],
 ["👧⭐","Ece makes a wish: “I want to read ten books this year.”","Ece bir dilek tutar: “Bu yıl on kitap okumak istiyorum.”"]],
 g:{last:"son", night:"gece", year:"yıl", family:"aile", dinner:"akşam yemeği", big:"büyük", cake:"pasta", games:"oyunlar", wins:"kazanır", times:"kez", ten:"on", nine:"dokuz", eight:"sekiz", happy:"mutlu", new:"yeni", fireworks:"havai fişekler", light:"aydınlatmak", sky:"gökyüzü", makes:"yapar", wish:"dilek", want:"istemek", read:"okumak", books:"kitaplar"},
 qs:[{q:"What does the family eat?", tr:"Aile ne yer?", options:["Dinner and a big cake","Only ice cream","Pizza"], answer:"Dinner and a big cake"},
  {q:"How many times does Ece win?", tr:"Ece kaç kez kazanır?", options:["One","Two","Ten"], answer:"Two"},
  {q:"What is Ece’s wish?", tr:"Ece’nin dileği ne?", options:["A new bike","To read ten books","A puppy"], answer:"To read ten books"}]},

{id:"w8", t:"My Report Card", e:"📜", when:{d:["01-22","01-22"]}, pages:[
 ["🏫📜","It is the last day of the term. The children get their report cards.","Dönemin son günü. Çocuklar karnelerini alır."],
 ["👦😬","Mert is nervous. He opens his report card.","Mert heyecanlı. Karnesini açar."],
 ["👦😃","“Very good in English!” he reads.","“İngilizcede çok iyi!” diye okur."],
 ["👦🔢","But maths is not very good. Mert is a little sad.","Ama matematik çok iyi değil. Mert biraz üzgün."],
 ["👨🤗","Dad says, “I am proud of you. We can study maths together.”","Babası, “Seninle gurur duyuyorum. Matematiğe birlikte çalışabiliriz.” der."],
 ["👦🛷","Now it is holiday time! Mert runs out to play in the snow.","Şimdi tatil zamanı! Mert karda oynamak için dışarı koşar."]],
 g:{last:"son", day:"gün", term:"dönem", children:"çocuklar", get:"almak", report:"karne", cards:"kartlar", card:"kart", nervous:"heyecanlı, gergin", opens:"açar", good:"iyi", english:"İngilizce", reads:"okur", maths:"matematik", little:"biraz", sad:"üzgün", dad:"baba", says:"der", proud:"gururlu", study:"ders çalışmak", together:"birlikte", holiday:"tatil", time:"zaman", runs:"koşar", out:"dışarı", snow:"kar"},
 qs:[{q:"What do the children get?", tr:"Çocuklar ne alır?", options:["Report cards","Presents","New bags"], answer:"Report cards"},
  {q:"Which lesson is very good?", tr:"Hangi ders çok iyi?", options:["Maths","English","Music"], answer:"English"},
  {q:"What does Dad say?", tr:"Baba ne der?", options:["“Go to bed.”","“I am proud of you.”","“No holiday.”"], answer:"“I am proud of you.”"}]},

{id:"w9", t:"Hello, Spring!", e:"🌷", when:{d:["03-21","03-21"]}, pages:[
 ["🌷☀️","It is spring! The sun is warm again.","Bahar geldi! Güneş yine ılık."],
 ["👧🌳","Lily looks at the tree. It has little green leaves.","Lily ağaca bakar. Ağacın küçük yeşil yaprakları var."],
 ["🌸🐝","There are pink flowers. A bee flies from flower to flower.","Pembe çiçekler var. Bir arı çiçekten çiçeğe uçar."],
 ["🐦🎶","The birds sing in the morning.","Kuşlar sabah şarkı söyler."],
 ["👧🧥❌","Lily doesn’t need her big coat now.","Lily’nin artık kalın montuna ihtiyacı yok."],
 ["👧🌷😊","She picks a tulip for her mum. “Happy spring!”","Annesi için bir lale toplar. “Mutlu baharlar!”"]],
 g:{spring:"bahar, ilkbahar", sun:"güneş", warm:"ılık, sıcak", again:"yine", looks:"bakar", tree:"ağaç", little:"küçük", green:"yeşil", leaves:"yapraklar", pink:"pembe", flowers:"çiçekler", flower:"çiçek", bee:"arı", flies:"uçar", from:"-den", birds:"kuşlar", sing:"şarkı söylemek", morning:"sabah", "doesn’t":"-mez (he/she/it)", need:"ihtiyaç duymak", big:"büyük, kalın", coat:"mont", picks:"toplar, koparır", tulip:"lale", mum:"anne", happy:"mutlu"},
 qs:[{q:"What does the tree have?", tr:"Ağacın neyi var?", options:["Snow","Little green leaves","Apples"], answer:"Little green leaves"},
  {q:"What flies from flower to flower?", tr:"Çiçekten çiçeğe ne uçar?", options:["A bee","A plane","A kite"], answer:"A bee"},
  {q:"What does Lily pick for her mum?", tr:"Lily annesi için ne toplar?", options:["An apple","A tulip","A leaf"], answer:"A tulip"}]},

{id:"w10", t:"Library Week", e:"📚", when:{d:["03-31","03-31"]}, pages:[
 ["📚🏫","It is Library Week. Sam’s class goes to the library.","Kütüphane Haftası. Sam’in sınıfı kütüphaneye gider."],
 ["👦🤫","“Be quiet, please,” says the librarian with a smile.","Kütüphaneci gülümseyerek, “Lütfen sessiz olun,” der."],
 ["👦🦕📕","Sam finds a book about dinosaurs. He loves it!","Sam dinozorlar hakkında bir kitap bulur. Bayılır!"],
 ["👧🚀📗","His friend Ece finds a book about space.","Arkadaşı Ece uzay hakkında bir kitap bulur."],
 ["🦉📖","Ollie says, “A book is a door to a new world.”","Ollie, “Kitap yeni bir dünyaya açılan kapıdır,” der."],
 ["👦🏠📕","Sam takes the book home. He reads it in bed.","Sam kitabı eve götürür. Onu yatakta okur."]],
 g:{library:"kütüphane", week:"hafta", class:"sınıf", goes:"gider", quiet:"sessiz", please:"lütfen", says:"der", librarian:"kütüphaneci", smile:"gülümseme", finds:"bulur", book:"kitap", about:"hakkında", dinosaurs:"dinozorlar", loves:"çok sever", space:"uzay", ollie:"Ollie", door:"kapı", new:"yeni", world:"dünya", takes:"götürür", home:"ev", reads:"okur", bed:"yatak"},
 qs:[{q:"Where does Sam’s class go?", tr:"Sam’in sınıfı nereye gider?", options:["To the park","To the library","To the zoo"], answer:"To the library"},
  {q:"What is Sam’s book about?", tr:"Sam’in kitabı ne hakkında?", options:["Dinosaurs","Space","Cats"], answer:"Dinosaurs"},
  {q:"Where does Sam read the book?", tr:"Sam kitabı nerede okur?", options:["In the garden","In the car","In bed"], answer:"In bed"}]},

{id:"w11", t:"Our Day: April 23rd", e:"🎈", when:{d:["04-23","04-23"]}, pages:[
 ["📅🎈","April 23rd is National Sovereignty and Children’s Day.","23 Nisan Ulusal Egemenlik ve Çocuk Bayramı’dır."],
 ["🌍👧👦","Children from many countries come to Türkiye.","Birçok ülkeden çocuklar Türkiye’ye gelir."],
 ["👧👗🇯🇵","Deniz meets Yuki from Japan. Yuki wears a kimono.","Deniz Japonya’dan Yuki ile tanışır. Yuki kimono giyer."],
 ["💃🕺","They dance together in the big square.","Büyük meydanda birlikte dans ederler."],
 ["👧🗣️👧","Deniz and Yuki speak English. “Let’s be friends!”","Deniz ve Yuki İngilizce konuşur. “Arkadaş olalım!”"],
 ["🎈🌈","Many balloons go up into the sky. Happy Children’s Day!","Birçok balon gökyüzüne yükselir. Çocuk Bayramı kutlu olsun!"]],
 g:{april:"nisan", "23rd":"yirmi üçü", national:"ulusal", sovereignty:"egemenlik", "children’s":"çocukların", day:"gün, bayram", children:"çocuklar", from:"-den", many:"birçok", countries:"ülkeler", come:"gelmek", "türkiye":"Türkiye", meets:"tanışır", japan:"Japonya", wears:"giyer", kimono:"kimono", dance:"dans etmek", together:"birlikte", big:"büyük", square:"meydan", speak:"konuşmak", english:"İngilizce", "let’s":"hadi …-elim", friends:"arkadaşlar", balloons:"balonlar", go:"gitmek", into:"içine", sky:"gökyüzü", happy:"mutlu"},
 qs:[{q:"Where is Yuki from?", tr:"Yuki nereli?", options:["Japan","Italy","Brazil"], answer:"Japan"},
  {q:"What do the children do in the square?", tr:"Çocuklar meydanda ne yapar?", options:["They sleep","They dance","They swim"], answer:"They dance"},
  {q:"Which language do Deniz and Yuki speak?", tr:"Deniz ve Yuki hangi dili konuşur?", options:["English","Japanese","Turkish"], answer:"English"}]},

{id:"w12", t:"A Gift for Mum", e:"💝", when:{nth:[5,2]}, pages:[
 ["📅💝","Sunday is Mother’s Day. Leo wants a gift for Mum.","Pazar Anneler Günü. Leo annesi için bir hediye istiyor."],
 ["👦🐷🪙","He looks in his money box. There is only a little money.","Kumbarasına bakar. İçinde sadece biraz para var."],
 ["👦💭","“What can I do?” Leo thinks and thinks.","“Ne yapabilirim?” Leo düşünür de düşünür."],
 ["👦🍳🥞","On Sunday morning, he makes breakfast with Dad.","Pazar sabahı babasıyla kahvaltı hazırlar."],
 ["👦🎶👩","Then he sings Mum her favourite song.","Sonra annesine en sevdiği şarkıyı söyler."],
 ["👩🤗👦","Mum hugs him. “This is the best gift!”","Annesi ona sarılır. “Bu en güzel hediye!”"]],
 g:{sunday:"pazar", "mother’s":"annelerin", day:"gün", wants:"ister", gift:"hediye", mum:"anne", looks:"bakar", money:"para", box:"kutu", only:"sadece", little:"biraz", thinks:"düşünür", morning:"sabah", makes:"yapar", breakfast:"kahvaltı", dad:"baba", then:"sonra", sings:"şarkı söyler", favourite:"en sevdiği", song:"şarkı", hugs:"sarılır", best:"en iyi"},
 qs:[{q:"What does Leo want?", tr:"Leo ne istiyor?", options:["A gift for Mum","A new toy","A cake for Dad"], answer:"A gift for Mum"},
  {q:"Who does Leo make breakfast with?", tr:"Leo kahvaltıyı kiminle hazırlar?", options:["Grandma","Dad","His friend"], answer:"Dad"},
  {q:"What does Leo sing?", tr:"Leo ne söyler?", options:["Mum’s favourite song","A sad song","A school song"], answer:"Mum’s favourite song"}]},

{id:"w13", t:"Run, Deniz, Run!", e:"🏃", when:{d:["05-19","05-19"]}, pages:[
 ["📅🏃","May 19th is Youth and Sports Day. There is a race at school.","19 Mayıs Gençlik ve Spor Bayramı. Okulda bir koşu yarışı var."],
 ["👧👟","Deniz puts on her running shoes.","Deniz koşu ayakkabılarını giyer."],
 ["🏁💨","Ready, steady, go! The children run fast.","Hazır, ol, koş! Çocuklar hızlı koşar."],
 ["👧🤕","Deniz falls down. Her knee hurts.","Deniz düşer. Dizi acır."],
 ["👧💪","But she stands up and runs again.","Ama ayağa kalkar ve yine koşar."],
 ["👧🏅","She is not first, but everyone claps. “Well done, Deniz!”","Birinci değil ama herkes alkışlar. “Aferin Deniz!”"]],
 g:{may:"mayıs", "19th":"on dokuzu", youth:"gençlik", sports:"spor", day:"gün, bayram", race:"yarış", school:"okul", puts:"koyar, giyer", running:"koşu", shoes:"ayakkabılar", ready:"hazır", steady:"sabit, ol", go:"git, koş", children:"çocuklar", run:"koşmak", fast:"hızlı", falls:"düşer", down:"aşağı", knee:"diz", hurts:"acır", stands:"kalkar, durur", runs:"koşar", again:"yine", first:"birinci", everyone:"herkes", claps:"alkışlar", well:"iyi", done:"yapılmış"},
 qs:[{q:"What is there at school?", tr:"Okulda ne var?", options:["A race","A party","A test"], answer:"A race"},
  {q:"What happens to Deniz?", tr:"Deniz’e ne olur?", options:["She wins","She falls down","She goes home"], answer:"She falls down"},
  {q:"What does everyone do?", tr:"Herkes ne yapar?", options:["They laugh","They clap","They sleep"], answer:"They clap"}]},

{id:"w14", t:"Dad’s Day", e:"👔", when:{nth:[6,3]}, pages:[
 ["📅👨","Sunday is Father’s Day. Ayşe and Mert have a plan.","Pazar Babalar Günü. Ayşe ve Mert’in bir planı var."],
 ["👧👦🤫","“Shh! Don’t tell Dad,” says Ayşe.","“Şşş! Babama söyleme,” der Ayşe."],
 ["👧🎨🖼️","Ayşe paints a picture of Dad and his bike.","Ayşe babasının ve bisikletinin resmini yapar."],
 ["👦🧹🚗","Mert washes Dad’s car. It is very clean now.","Mert babasının arabasını yıkar. Araba artık çok temiz."],
 ["👨😮","Dad sees the picture and the clean car. “Wow!”","Baba resmi ve temiz arabayı görür. “Vay!”"],
 ["👨👧👦🚲","Then they all go on a bike ride together.","Sonra hep birlikte bisiklet gezisine çıkarlar."]],
 g:{sunday:"pazar", "father’s":"babaların", day:"gün", plan:"plan", shh:"şşş", "don’t":"yapma", tell:"söylemek", dad:"baba", says:"der", paints:"boyar, resim yapar", picture:"resim", bike:"bisiklet", washes:"yıkar", car:"araba", clean:"temiz", sees:"görür", wow:"vay", then:"sonra", all:"hepsi", ride:"gezinti", together:"birlikte"},
 qs:[{q:"What does Ayşe paint?", tr:"Ayşe neyin resmini yapar?", options:["Dad and his bike","A big tree","Her cat"], answer:"Dad and his bike"},
  {q:"What does Mert wash?", tr:"Mert neyi yıkar?", options:["The dog","Dad’s car","The window"], answer:"Dad’s car"},
  {q:"What do they do at the end?", tr:"Sonunda ne yaparlar?", options:["They watch TV","They go on a bike ride","They sleep"], answer:"They go on a bike ride"}]},

{id:"w15", t:"Hello, Summer!", e:"☀️", when:{d:["06-25","06-25"]}, pages:[
 ["🏫📜☀️","It is the last day of school. Summer is here!","Okulun son günü. Yaz geldi!"],
 ["👧👦👋","Lily says goodbye to her friends. “See you in September!”","Lily arkadaşlarına veda eder. “Eylülde görüşürüz!”"],
 ["👧📝","At home, she makes a summer list.","Evde bir yaz listesi yapar."],
 ["🏊📚","Number one: swim in the sea. Number two: read five books.","Bir numara: denizde yüzmek. İki numara: beş kitap okumak."],
 ["🦉💬","Number three: talk to Ollie every day!","Üç numara: her gün Ollie ile konuşmak!"],
 ["👧😎","Lily puts on her sunglasses. “Hello, summer!”","Lily güneş gözlüğünü takar. “Merhaba yaz!”"]],
 g:{last:"son", day:"gün", school:"okul", summer:"yaz", says:"der", goodbye:"hoşça kal", friends:"arkadaşlar", see:"görmek", september:"eylül", home:"ev", makes:"yapar", list:"liste", number:"numara", swim:"yüzmek", sea:"deniz", read:"okumak", five:"beş", books:"kitaplar", talk:"konuşmak", ollie:"Ollie", every:"her", puts:"takar, koyar", sunglasses:"güneş gözlüğü", hello:"merhaba"},
 qs:[{q:"What does Lily make?", tr:"Lily ne yapar?", options:["A summer list","A sandcastle","A cake"], answer:"A summer list"},
  {q:"How many books does she want to read?", tr:"Kaç kitap okumak istiyor?", options:["Two","Five","Ten"], answer:"Five"},
  {q:"When will she see her friends again?", tr:"Arkadaşlarını yine ne zaman görecek?", options:["In September","Tomorrow","In July"], answer:"In September"}]},

// ---- Mevsim hikâyeleri (özel gün olmayan haftalar) ----
{id:"w16", t:"The Leaf Hunt", e:"🍂", when:{season:"autumn"}, pages:[
 ["🍂🌳","It is autumn. The leaves fall from the trees.","Sonbahar. Yapraklar ağaçlardan düşer."],
 ["👦👧🧺","Sam and Ece go on a leaf hunt with a basket.","Sam ve Ece bir sepetle yaprak avına çıkar."],
 ["🍁🟥","Sam finds a big red leaf.","Sam büyük kırmızı bir yaprak bulur."],
 ["🍂🟨🟫","Ece finds yellow and brown leaves.","Ece sarı ve kahverengi yapraklar bulur."],
 ["👦👧🤸","They jump into a big pile of leaves. Crunch, crunch!","Büyük bir yaprak yığınına atlarlar. Hışır, hışır!"],
 ["🖼️🍂","At home, they make a leaf picture for the wall.","Evde duvar için yapraklardan bir resim yaparlar."]],
 g:{autumn:"sonbahar", leaves:"yapraklar", leaf:"yaprak", fall:"düşmek", from:"-den", trees:"ağaçlar", go:"gitmek", hunt:"av", basket:"sepet", finds:"bulur", big:"büyük", red:"kırmızı", yellow:"sarı", brown:"kahverengi", jump:"zıplamak, atlamak", into:"içine", pile:"yığın", crunch:"hışır", home:"ev", make:"yapmak", picture:"resim", wall:"duvar"},
 qs:[{q:"What season is it?", tr:"Hangi mevsim?", options:["Summer","Autumn","Spring"], answer:"Autumn"},
  {q:"What colour is Sam’s leaf?", tr:"Sam’in yaprağı ne renk?", options:["Red","Green","Blue"], answer:"Red"},
  {q:"What do they make at home?", tr:"Evde ne yaparlar?", options:["A cake","A leaf picture","A kite"], answer:"A leaf picture"}]},

{id:"w17", t:"The Apple Tree", e:"🍎", when:{season:"autumn"}, pages:[
 ["👴🌳🍎","Grandpa has an apple tree in his garden.","Büyükbabanın bahçesinde bir elma ağacı var."],
 ["🍎🍏","The apples are red and green. They are ready!","Elmalar kırmızı ve yeşil. Toplanmaya hazırlar!"],
 ["👧🪜","Ayşe climbs the ladder. Grandpa holds it.","Ayşe merdivene tırmanır. Büyükbaba onu tutar."],
 ["👧🍎🧺","She picks ten apples and puts them in the basket.","On elma toplar ve sepete koyar."],
 ["👵🥧","Grandma makes an apple pie. It smells so good!","Büyükanne elmalı turta yapar. Kokusu çok güzel!"],
 ["👧🍎🏠","Ayşe takes some apples to her friends, too.","Ayşe arkadaşlarına da biraz elma götürür."]],
 g:{grandpa:"büyükbaba", apple:"elma", tree:"ağaç", garden:"bahçe", apples:"elmalar", red:"kırmızı", green:"yeşil", ready:"hazır", climbs:"tırmanır", ladder:"merdiven", holds:"tutar", picks:"toplar", ten:"on", puts:"koyar", basket:"sepet", grandma:"büyükanne", makes:"yapar", pie:"turta", smells:"kokar", good:"güzel, iyi", takes:"götürür", some:"biraz", friends:"arkadaşlar"},
 qs:[{q:"Who has an apple tree?", tr:"Kimin elma ağacı var?", options:["Grandpa","The teacher","Ayşe’s friend"], answer:"Grandpa"},
  {q:"How many apples does Ayşe pick?", tr:"Ayşe kaç elma toplar?", options:["Two","Five","Ten"], answer:"Ten"},
  {q:"What does Grandma make?", tr:"Büyükanne ne yapar?", options:["Soup","An apple pie","Bread"], answer:"An apple pie"}]},

{id:"w18", t:"Hedgehog Gets Ready", e:"🦔", when:{season:"autumn"}, pages:[
 ["🦔🍂","Hugo the hedgehog lives in the park.","Kirpi Hugo parkta yaşar."],
 ["🌬️🥶","The days are cold now. Winter is coming.","Günler artık soğuk. Kış geliyor."],
 ["🦔🍂🏠","Hugo collects leaves for his bed.","Hugo yatağı için yaprak toplar."],
 ["🦔🐛","He eats a lot. He wants to be big and strong.","Çok yer. Büyük ve güçlü olmak istiyor."],
 ["👧📦🍂","Lily makes a little house for him from a box.","Lily ona bir kutudan küçük bir ev yapar."],
 ["🦔😴","Hugo goes in and sleeps. Good night, Hugo! See you in spring!","Hugo içeri girer ve uyur. İyi geceler Hugo! Baharda görüşürüz!"]],
 g:{hugo:"Hugo", hedgehog:"kirpi", lives:"yaşar", park:"park", days:"günler", cold:"soğuk", winter:"kış", coming:"geliyor", collects:"toplar", leaves:"yapraklar", bed:"yatak", eats:"yer", lot:"çok", wants:"ister", big:"büyük", strong:"güçlü", makes:"yapar", little:"küçük", house:"ev", from:"-den", box:"kutu", goes:"gider", sleeps:"uyur", good:"iyi", night:"gece", see:"görmek", spring:"bahar"},
 qs:[{q:"Where does Hugo live?", tr:"Hugo nerede yaşar?", options:["In the park","In the sea","In a tree"], answer:"In the park"},
  {q:"What does Hugo collect?", tr:"Hugo ne toplar?", options:["Apples","Leaves","Stones"], answer:"Leaves"},
  {q:"What does Lily make for him?", tr:"Lily onun için ne yapar?", options:["A little house","A hat","A cake"], answer:"A little house"}]},

{id:"w19", t:"Puddle Day", e:"☔", when:{season:"autumn"}, pages:[
 ["🌧️🪟","It rains all morning. Mert looks out of the window.","Bütün sabah yağmur yağar. Mert pencereden dışarı bakar."],
 ["👦😞","“I can’t play football today,” he says.","“Bugün futbol oynayamam,” der."],
 ["👩🥾☂️","Mum smiles. “Put on your boots and take your umbrella!”","Annesi gülümser. “Botlarını giy, şemsiyeni al!”"],
 ["👦💦","Mert jumps in a big puddle. Splash!","Mert büyük bir su birikintisine atlar. Şlap!"],
 ["🐸👦","A little frog jumps, too. Mert laughs.","Küçük bir kurbağa da zıplar. Mert güler."],
 ["🌈👦😊","Then the sun comes out. There is a rainbow!","Sonra güneş çıkar. Bir gökkuşağı var!"]],
 g:{rains:"yağmur yağar", all:"bütün", morning:"sabah", looks:"bakar", out:"dışarı", window:"pencere", play:"oynamak", today:"bugün", says:"der", mum:"anne", smiles:"gülümser", put:"koymak, giymek", boots:"botlar", take:"almak", jumps:"zıplar", big:"büyük", puddle:"su birikintisi", splash:"şlap", little:"küçük", frog:"kurbağa", laughs:"güler", then:"sonra", sun:"güneş", comes:"gelir, çıkar", rainbow:"gökkuşağı"},
 qs:[{q:"What is the weather in the morning?", tr:"Sabah hava nasıl?", options:["Sunny","Rainy","Snowy"], answer:"Rainy"},
  {q:"What does Mert jump in?", tr:"Mert nereye atlar?", options:["A puddle","A pool","A box"], answer:"A puddle"},
  {q:"What jumps with Mert?", tr:"Mert’le birlikte ne zıplar?", options:["A dog","A frog","A bird"], answer:"A frog"}]},

{id:"w20", t:"Snow Day", e:"❄️", when:{season:"winter"}, pages:[
 ["❄️🏠","Leo wakes up. Everything is white!","Leo uyanır. Her yer bembeyaz!"],
 ["📻🏫❌","The radio says, “No school today. It’s a snow day!”","Radyo, “Bugün okul yok. Kar tatili!” der."],
 ["👦🧤🧣","Leo puts on his gloves, his scarf and his hat.","Leo eldivenlerini, atkısını ve beresini takar."],
 ["👦⛄👧","He makes a snowman with Lily.","Lily ile bir kardan adam yapar."],
 ["👦❄️👧","They throw snowballs. Lily is very fast!","Kartopu atarlar. Lily çok hızlı!"],
 ["☕👦","At home, Leo drinks hot milk. His nose is red and cold.","Evde Leo sıcak süt içer. Burnu kırmızı ve soğuk."]],
 g:{wakes:"uyanır", everything:"her şey", white:"beyaz", radio:"radyo", says:"der", school:"okul", today:"bugün", "it’s":"o …-dir", snow:"kar", day:"gün", puts:"takar, giyer", gloves:"eldivenler", scarf:"atkı", hat:"bere, şapka", makes:"yapar", snowman:"kardan adam", throw:"atmak", snowballs:"kartopları", fast:"hızlı", home:"ev", drinks:"içer", hot:"sıcak", milk:"süt", nose:"burun", red:"kırmızı", cold:"soğuk"},
 qs:[{q:"Why is there no school?", tr:"Neden okul yok?", options:["It is a snow day","It is Sunday","The teacher is ill"], answer:"It is a snow day"},
  {q:"What does Leo make with Lily?", tr:"Leo, Lily ile ne yapar?", options:["A cake","A snowman","A kite"], answer:"A snowman"},
  {q:"What does Leo drink?", tr:"Leo ne içer?", options:["Hot milk","Cold water","Orange juice"], answer:"Hot milk"}]},

{id:"w21", t:"The Bird Café", e:"🐦", when:{season:"winter"}, pages:[
 ["❄️🐦","It is winter. The little birds are hungry.","Kış. Küçük kuşlar aç."],
 ["👧💭","“The birds can’t find food in the snow,” says Ece.","“Kuşlar karda yiyecek bulamaz,” der Ece."],
 ["👧👴🔨","Ece and Grandpa make a bird house from wood.","Ece ve büyükbabası tahtadan bir kuş evi yapar."],
 ["👧🌻","Ece puts seeds and bread in it.","Ece içine tohum ve ekmek koyar."],
 ["🐦🐦🐦","One bird comes, then two, then five!","Önce bir kuş gelir, sonra iki, sonra beş!"],
 ["👧😊","“Welcome to the Bird Cafe!” Ece laughs.","“Kuş Kafe’ye hoş geldiniz!” Ece güler."]],
 g:{winter:"kış", little:"küçük", birds:"kuşlar", bird:"kuş", hungry:"aç", find:"bulmak", food:"yiyecek", snow:"kar", says:"der", grandpa:"büyükbaba", make:"yapmak", house:"ev", from:"-den", wood:"tahta", puts:"koyar", seeds:"tohumlar", bread:"ekmek", comes:"gelir", then:"sonra", five:"beş", welcome:"hoş geldiniz", cafe:"kafe", laughs:"güler"},
 qs:[{q:"Why are the birds hungry?", tr:"Kuşlar neden aç?", options:["They can’t find food in the snow","They are ill","They don’t like bread"], answer:"They can’t find food in the snow"},
  {q:"What do Ece and Grandpa make?", tr:"Ece ve büyükbaba ne yapar?", options:["A snowman","A bird house","A boat"], answer:"A bird house"},
  {q:"How many birds come at the end?", tr:"Sonunda kaç kuş gelir?", options:["One","Two","Five"], answer:"Five"}]},

{id:"w22", t:"Soup for Sam", e:"🍲", when:{season:"winter"}, pages:[
 ["👦🤒","Sam is ill. He has a cold and a sore throat.","Sam hasta. Nezle olmuş ve boğazı ağrıyor."],
 ["👦🛏️","He stays in bed. He is bored.","Yatakta kalır. Canı sıkılır."],
 ["👵🍲","Grandma comes with a big pot of soup.","Büyükanne büyük bir tencere çorbayla gelir."],
 ["🥕🧅🍲","“This is my magic soup,” she says. It has carrots and onions in it.","“Bu benim sihirli çorbam,” der. İçinde havuç ve soğan var."],
 ["👵📖👦","Grandma reads Sam a story. Sam eats all his soup.","Büyükanne Sam’e bir hikâye okur. Sam bütün çorbasını içer."],
 ["👦💪","The next day, Sam feels better. “Thank you, Grandma!”","Ertesi gün Sam daha iyi hisseder. “Teşekkürler büyükanne!”"]],
 g:{ill:"hasta", cold:"nezle, soğuk", sore:"ağrıyan", throat:"boğaz", stays:"kalır", bed:"yatak", bored:"sıkılmış", grandma:"büyükanne", comes:"gelir", big:"büyük", pot:"tencere", soup:"çorba", magic:"sihirli", says:"der", carrots:"havuçlar", onions:"soğanlar", reads:"okur", story:"hikâye", eats:"yer, içer", all:"bütün", next:"sonraki", day:"gün", feels:"hisseder", better:"daha iyi", thank:"teşekkür etmek"},
 qs:[{q:"What is wrong with Sam?", tr:"Sam’in nesi var?", options:["He is ill","He is lost","He is hungry"], answer:"He is ill"},
  {q:"What does Grandma bring?", tr:"Büyükanne ne getirir?", options:["A cake","Soup","A ball"], answer:"Soup"},
  {q:"How does Sam feel the next day?", tr:"Sam ertesi gün nasıl hisseder?", options:["Better","Worse","Angry"], answer:"Better"}]},

{id:"w23", t:"The Lost Glove", e:"🧤", when:{season:"winter"}, pages:[
 ["👧🧤","Deniz has new blue gloves. She loves them.","Deniz’in yeni mavi eldivenleri var. Onları çok sever."],
 ["👧❄️🛷","She plays in the snow with her sledge.","Kızağıyla karda oynar."],
 ["👧😟🧤","At home, she has only one glove! Where is the other one?","Evde sadece bir eldiveni var! Diğeri nerede?"],
 ["👧🔦❄️","Deniz looks in the garden. Then she looks on the hill.","Deniz bahçeye bakar. Sonra tepeye bakar."],
 ["🐶🧤","Her dog Pamuk runs to her. He has the glove in his mouth!","Köpeği Pamuk ona koşar. Eldiven ağzında!"],
 ["👧🐶😂","“Thank you, Pamuk! You are a good dog!”","“Teşekkürler Pamuk! Sen iyi bir köpeksin!”"]],
 g:{new:"yeni", blue:"mavi", gloves:"eldivenler", glove:"eldiven", loves:"çok sever", plays:"oynar", snow:"kar", sledge:"kızak", home:"ev", only:"sadece", other:"diğer", looks:"bakar", garden:"bahçe", then:"sonra", hill:"tepe", dog:"köpek", pamuk:"Pamuk", runs:"koşar", mouth:"ağız", thank:"teşekkür etmek", good:"iyi"},
 qs:[{q:"What colour are Deniz’s gloves?", tr:"Deniz’in eldivenleri ne renk?", options:["Red","Blue","Green"], answer:"Blue"},
  {q:"What does Deniz play with?", tr:"Deniz neyle oynar?", options:["Her sledge","Her bike","Her kite"], answer:"Her sledge"},
  {q:"Who finds the glove?", tr:"Eldiveni kim bulur?", options:["Mum","Pamuk the dog","A bird"], answer:"Pamuk the dog"}]},

{id:"w24", t:"The Little Seed", e:"🌱", when:{season:"spring"}, pages:[
 ["👦🌱","Mert has a little seed. He puts it in a pot.","Mert’in küçük bir tohumu var. Onu saksıya koyar."],
 ["👦💧","Every day, he gives it water.","Her gün ona su verir."],
 ["👦☀️🪴","He puts the pot next to the window. Plants love the sun.","Saksıyı pencerenin yanına koyar. Bitkiler güneşi sever."],
 ["👦😕","One week … nothing. Mert is sad.","Bir hafta … hiçbir şey yok. Mert üzgün."],
 ["🌱😮","Then, one morning, he sees a little green leaf!","Sonra bir sabah küçük yeşil bir yaprak görür!"],
 ["🌻👦😃","A month later, it is a big yellow sunflower!","Bir ay sonra kocaman sarı bir ayçiçeği olur!"]],
 g:{little:"küçük", seed:"tohum", puts:"koyar", pot:"saksı", every:"her", day:"gün", gives:"verir", water:"su", next:"yanında", window:"pencere", plants:"bitkiler", love:"sevmek", sun:"güneş", week:"hafta", nothing:"hiçbir şey", sad:"üzgün", then:"sonra", morning:"sabah", sees:"görür", green:"yeşil", leaf:"yaprak", month:"ay", later:"sonra", big:"büyük", yellow:"sarı", sunflower:"ayçiçeği"},
 qs:[{q:"Where does Mert put the seed?", tr:"Mert tohumu nereye koyar?", options:["In a pot","In his bag","In the fridge"], answer:"In a pot"},
  {q:"What does he give it every day?", tr:"Ona her gün ne verir?", options:["Milk","Water","Bread"], answer:"Water"},
  {q:"What does the seed become?", tr:"Tohum neye dönüşür?", options:["A tree","A sunflower","A tomato"], answer:"A sunflower"}]},

{id:"w25", t:"Picnic Day", e:"🧺", when:{season:"spring"}, pages:[
 ["☀️🧺","It is a sunny Saturday. Lily’s family goes on a picnic.","Güneşli bir cumartesi. Lily’nin ailesi pikniğe gider."],
 ["🧺🥪🍓","They take sandwiches, strawberries and lemonade.","Sandviç, çilek ve limonata götürürler."],
 ["🌳🟥","They sit on a red blanket under a big tree.","Büyük bir ağacın altında kırmızı bir örtüye otururlar."],
 ["🐜🥪","Oh no! Ants are on the sandwiches!","Eyvah! Sandviçlerin üstünde karıncalar var!"],
 ["👨😂","Dad laughs. “The ants are hungry, too!”","Babası güler. “Karıncalar da aç!”"],
 ["👧⚽👨","They play football and eat strawberries. What a great day!","Futbol oynarlar ve çilek yerler. Ne harika bir gün!"]],
 g:{sunny:"güneşli", saturday:"cumartesi", family:"aile", goes:"gider", picnic:"piknik", take:"götürmek", sandwiches:"sandviçler", strawberries:"çilekler", lemonade:"limonata", sit:"oturmak", red:"kırmızı", blanket:"battaniye, örtü", under:"altında", big:"büyük", tree:"ağaç", ants:"karıncalar", dad:"baba", laughs:"güler", hungry:"aç", eat:"yemek", great:"harika", day:"gün"},
 qs:[{q:"What day is it?", tr:"Hangi gün?", options:["Monday","Saturday","Friday"], answer:"Saturday"},
  {q:"What is on the sandwiches?", tr:"Sandviçlerin üstünde ne var?", options:["Ants","Bees","Birds"], answer:"Ants"},
  {q:"What do they play?", tr:"Ne oynarlar?", options:["Tennis","Football","Chess"], answer:"Football"}]},

{id:"w26", t:"After the Rain", e:"🌈", when:{season:"spring"}, pages:[
 ["🌧️☀️","It rains, but the sun is out, too.","Yağmur yağıyor ama güneş de açık."],
 ["👧🌈","Ayşe looks at the sky. “A rainbow!” she shouts.","Ayşe gökyüzüne bakar. “Gökkuşağı!” diye bağırır."],
 ["🔴🟠🟡","Red, orange, yellow …","Kırmızı, turuncu, sarı …"],
 ["🟢🔵🟣","… green, blue and purple! It has seven colours.","… yeşil, mavi ve mor! Yedi rengi var."],
 ["👧🖍️","Ayşe takes her crayons and draws the rainbow.","Ayşe boya kalemlerini alır ve gökkuşağını çizer."],
 ["🦉🌈","Ollie says, “Sun and rain make a rainbow!”","Ollie, “Güneş ve yağmur gökkuşağı yapar!” der."]],
 g:{rains:"yağmur yağar", sun:"güneş", out:"dışarıda, açık", looks:"bakar", sky:"gökyüzü", rainbow:"gökkuşağı", shouts:"bağırır", red:"kırmızı", yellow:"sarı", green:"yeşil", blue:"mavi", purple:"mor", seven:"yedi", colours:"renkler", takes:"alır", crayons:"boya kalemleri", draws:"çizer", ollie:"Ollie", says:"der", rain:"yağmur", make:"yapmak"},
 qs:[{q:"What does Ayşe see in the sky?", tr:"Ayşe gökyüzünde ne görür?", options:["A plane","A rainbow","The moon"], answer:"A rainbow"},
  {q:"How many colours has the rainbow got?", tr:"Gökkuşağının kaç rengi var?", options:["Three","Five","Seven"], answer:"Seven"},
  {q:"What makes a rainbow?", tr:"Gökkuşağını ne yapar?", options:["Sun and rain","Snow and wind","Clouds and night"], answer:"Sun and rain"}]},

{id:"w27", t:"The Baby Birds", e:"🐣", when:{season:"spring"}, pages:[
 ["🪺🌳","There is a nest in the tree in Leo’s garden.","Leo’nun bahçesindeki ağaçta bir yuva var."],
 ["🥚🥚🥚","In the nest, there are three small eggs.","Yuvada üç küçük yumurta var."],
 ["👦👀","Leo watches them every day. He is very quiet.","Leo onları her gün izler. Çok sessizdir."],
 ["🐣🐣🐣","One morning, he hears “Cheep, cheep!” The baby birds are here!","Bir sabah “Cik, cik!” sesini duyar. Yavru kuşlar çıkmış!"],
 ["🐦🐛","The mother bird brings them worms.","Anne kuş onlara solucan getirir."],
 ["🐦🐦🐦✨","After some weeks, the little birds fly away. “Goodbye, birds!”","Birkaç hafta sonra küçük kuşlar uçup gider. “Hoşça kalın kuşlar!”"]],
 g:{nest:"yuva", tree:"ağaç", garden:"bahçe", small:"küçük", eggs:"yumurtalar", watches:"izler", every:"her", day:"gün", quiet:"sessiz", morning:"sabah", hears:"duyar", cheep:"cik", baby:"yavru, bebek", birds:"kuşlar", bird:"kuş", mother:"anne", brings:"getirir", worms:"solucanlar", after:"sonra", some:"birkaç", weeks:"haftalar", little:"küçük", away:"uzağa", goodbye:"hoşça kal"},
 qs:[{q:"Where is the nest?", tr:"Yuva nerede?", options:["In the tree","On the roof","In the house"], answer:"In the tree"},
  {q:"How many eggs are there?", tr:"Kaç yumurta var?", options:["Two","Three","Four"], answer:"Three"},
  {q:"What does the mother bird bring?", tr:"Anne kuş ne getirir?", options:["Worms","Bread","Seeds"], answer:"Worms"}]},

{id:"w28", t:"The Sandcastle", e:"🏖️", when:{season:"summer"}, pages:[
 ["🏖️☀️","Ece and Mert are at the beach. It is very hot.","Ece ve Mert plajda. Hava çok sıcak."],
 ["👧👦🏰","They make a big sandcastle with a bucket.","Bir kovayla büyük bir kumdan kale yaparlar."],
 ["🐚🏰","Ece puts shells on the castle. It is beautiful!","Ece kalenin üstüne deniz kabukları koyar. Çok güzel!"],
 ["🌊😱","Then a big wave comes. Whoosh!","Sonra büyük bir dalga gelir. Vuuş!"],
 ["🏰💧","The sandcastle is gone! Mert is sad.","Kumdan kale yok oldu! Mert üzgün."],
 ["👧👦😄","Ece says, “Let’s make a new one, far from the sea!”","Ece, “Denizden uzakta yenisini yapalım!” der."]],
 g:{beach:"plaj", hot:"sıcak", make:"yapmak", big:"büyük", sandcastle:"kumdan kale", bucket:"kova", puts:"koyar", shells:"deniz kabukları", castle:"kale", beautiful:"güzel", then:"sonra", wave:"dalga", comes:"gelir", whoosh:"vuuş", gone:"gitmiş, yok", sad:"üzgün", says:"der", "let’s":"hadi …-elim", new:"yeni", far:"uzak", from:"-den", sea:"deniz"},
 qs:[{q:"Where are Ece and Mert?", tr:"Ece ve Mert nerede?", options:["At the beach","At school","In the park"], answer:"At the beach"},
  {q:"What does Ece put on the castle?", tr:"Ece kalenin üstüne ne koyar?", options:["Flowers","Shells","Leaves"], answer:"Shells"},
  {q:"What breaks the sandcastle?", tr:"Kumdan kaleyi ne yıkar?", options:["A dog","A big wave","The wind"], answer:"A big wave"}]},

{id:"w29", t:"Ice Cream Day", e:"🍦", when:{season:"summer"}, pages:[
 ["☀️🥵","It is a hot summer day. Sam and Lily want ice cream.","Sıcak bir yaz günü. Sam ve Lily dondurma istiyor."],
 ["🍦🏪","They go to the ice cream shop.","Dondurmacıya giderler."],
 ["👦🍫","Sam wants chocolate. “Two scoops, please!”","Sam çikolatalı ister. “İki top, lütfen!”"],
 ["👧🍓","Lily wants strawberry. It is pink.","Lily çilekli ister. Pembe renkli."],
 ["🍦💧👦","The sun is very hot. Sam’s ice cream melts on his hand!","Güneş çok sıcak. Sam’in dondurması elinde erir!"],
 ["👦👅😂","Sam licks his hand. Lily laughs and laughs.","Sam elini yalar. Lily güldükçe güler."]],
 g:{hot:"sıcak", summer:"yaz", day:"gün", want:"istemek", wants:"ister", ice:"buz", cream:"krem", go:"gitmek", shop:"dükkân", chocolate:"çikolata", scoops:"toplar (dondurma)", please:"lütfen", strawberry:"çilek", pink:"pembe", sun:"güneş", melts:"erir", hand:"el", licks:"yalar", laughs:"güler"},
 qs:[{q:"What does Sam want?", tr:"Sam ne ister?", options:["Chocolate ice cream","Lemonade","A cake"], answer:"Chocolate ice cream"},
  {q:"What colour is Lily’s ice cream?", tr:"Lily’nin dondurması ne renk?", options:["Brown","Pink","White"], answer:"Pink"},
  {q:"Why does the ice cream melt?", tr:"Dondurma neden erir?", options:["The sun is very hot","It is old","Sam drops it"], answer:"The sun is very hot"}]},

{id:"w30", t:"Stars at the Camp", e:"⛺", when:{season:"summer"}, pages:[
 ["⛺🌲","Deniz and her dad go camping in the forest.","Deniz ve babası ormanda kamp yapar."],
 ["👨⛺👧","They put up a green tent together.","Birlikte yeşil bir çadır kurarlar."],
 ["🔥🌽","In the evening, they cook corn on the fire.","Akşam ateşte mısır pişirirler."],
 ["🌌✨","At night, the sky is full of stars!","Gece gökyüzü yıldızlarla dolu!"],
 ["👨☝️⭐","Dad shows her the brightest star. “Make a wish!”","Babası ona en parlak yıldızı gösterir. “Bir dilek tut!”"],
 ["👧😴⛺","Deniz falls asleep in the tent. She dreams of stars.","Deniz çadırda uykuya dalar. Rüyasında yıldızlar görür."]],
 g:{dad:"baba", go:"gitmek", camping:"kamp yapmak", forest:"orman", put:"koymak, kurmak", green:"yeşil", tent:"çadır", together:"birlikte", evening:"akşam", cook:"pişirmek", corn:"mısır", fire:"ateş", night:"gece", sky:"gökyüzü", full:"dolu", stars:"yıldızlar", star:"yıldız", shows:"gösterir", brightest:"en parlak", make:"yapmak, tutmak", wish:"dilek", falls:"düşer, dalar", asleep:"uykuda", dreams:"rüya görür"},
 qs:[{q:"Where do Deniz and her dad go?", tr:"Deniz ve babası nereye gider?", options:["To the forest","To the sea","To the city"], answer:"To the forest"},
  {q:"What do they cook on the fire?", tr:"Ateşte ne pişirirler?", options:["Fish","Corn","Eggs"], answer:"Corn"},
  {q:"What is the sky full of?", tr:"Gökyüzü neyle dolu?", options:["Clouds","Birds","Stars"], answer:"Stars"}]},

{id:"w31", t:"Summer in the Village", e:"🐄", when:{season:"summer"}, pages:[
 ["🚌🏡","Leo goes to Grandma’s village for the summer.","Leo yaz için büyükannesinin köyüne gider."],
 ["🐄🥛","Every morning, he helps Grandma with the cow.","Her sabah büyükannesine inekle ilgili yardım eder."],
 ["🐔🥚","He finds eggs in the chicken house. One, two, three!","Kümeste yumurta bulur. Bir, iki, üç!"],
 ["🍅🥒","In the garden, there are tomatoes and cucumbers.","Bahçede domates ve salatalık var."],
 ["👦🏞️🐟","In the afternoon, he swims in the river with his cousin.","Öğleden sonra kuzeniyle derede yüzer."],
 ["👦🌙😊","At night, he is tired but happy. “I love the village!”","Gece yorgun ama mutlu. “Köyü çok seviyorum!”"]],
 g:{goes:"gider", grandma:"büyükanne", village:"köy", summer:"yaz", every:"her", morning:"sabah", helps:"yardım eder", cow:"inek", finds:"bulur", eggs:"yumurtalar", chicken:"tavuk", house:"ev", garden:"bahçe", tomatoes:"domatesler", cucumbers:"salatalıklar", afternoon:"öğleden sonra", swims:"yüzer", river:"dere, nehir", cousin:"kuzen", night:"gece", tired:"yorgun", happy:"mutlu", love:"çok sevmek"},
 qs:[{q:"Where does Leo go for the summer?", tr:"Leo yazın nereye gider?", options:["To Grandma’s village","To a big city","To school"], answer:"To Grandma’s village"},
  {q:"How many eggs does he find?", tr:"Kaç yumurta bulur?", options:["One","Three","Ten"], answer:"Three"},
  {q:"Who does Leo swim with?", tr:"Leo kiminle yüzer?", options:["His cousin","His teacher","His dog"], answer:"His cousin"}]}
];

// Bütün hikâyelerde ortak kelimeler (sayı ekleri 4th/23rd dokununca "th"/"rd" olarak gelir).
const STORY_GLOSS = {for:"için", be:"olmak", th:"(sıra sayısı eki: 4th = dördü)", rd:"(sıra sayısı eki: 23rd = yirmi üçü)"};
STORIES.forEach(s => { s.g = Object.assign({}, STORY_GLOSS, s.g); });
const SEASON_OF = m => m >= 3 && m <= 5 ? "spring" : m >= 6 && m <= 8 ? "summer" : m >= 9 && m <= 11 ? "autumn" : "winter";
// Bu haftanın hikâyesi. today: "YYYY-AA-GG". Hafta pazartesi başlar. Özel gün yoksa mevsim hikâyeleri, mevsimin özel günsüz
// haftalarına sırayla dağıtılır (her biri bir kez çıkmadan tekrar başlamaz).
const DAY_MS = 864e5;
function specialStory(monT){
  const mon = new Date(monT).toISOString().slice(0, 10), sun = new Date(monT + 6 * DAY_MS).toISOString().slice(0, 10);
  const hit = (a, b) => a <= sun && b >= mon;
  const years = [...new Set([mon.slice(0, 4), sun.slice(0, 4)])].map(Number);
  const nthSunday = (y, m, n) => { const f = new Date(Date.UTC(y, m - 1, 1)), first = 1 + (7 - f.getUTCDay()) % 7; return new Date(Date.UTC(y, m - 1, first + 7 * (n - 1))).toISOString().slice(0, 10); };
  return STORIES.find(s => { const w = s.when;
    if(w.d) return years.some(y => w.d[1] < w.d[0] ? hit(`${y}-${w.d[0]}`, `${y + 1}-${w.d[1]}`) || hit(`${y - 1}-${w.d[0]}`, `${y}-${w.d[1]}`) : hit(`${y}-${w.d[0]}`, `${y}-${w.d[1]}`));
    if(w.y) return years.some(y => w.y[y] && hit(w.y[y][0], w.y[y][1]));
    if(w.nth) return years.some(y => { const d = nthSunday(y, w.nth[0], w.nth[1]); return hit(d, d); });
    return false; }) || null;
}
function weekStory(today){
  const t = Date.parse(today + "T00:00:00Z"), monT = t - ((new Date(t).getUTCDay() + 6) % 7) * DAY_MS;
  const sp = specialStory(monT); if(sp) return sp;
  const season = d => SEASON_OF(new Date(d).getUTCMonth() + 1), pool = STORIES.filter(s => s.when.season === season(monT));
  let n = 0; for(let x = monT - 7 * DAY_MS; season(x) === season(monT); x -= 7 * DAY_MS) if(!specialStory(x)) n++;
  return pool[n % pool.length];
}
