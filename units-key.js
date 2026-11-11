// A2 Key for Schools üniteleri: Ünite 31–40. index.html bu dosyayı ana betikten önce yükler ve üniteleri LEVELS/READING/... dizilerine ekler.
// Biçim units-a2.js ile aynı. Denetim: node api/tools/check-units.js units-a1.js units-a2.js units-key.js
const UNITS_KEY = [];
// ---------- Ünite 31 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Key Holder",
  "theme": "School Life",
  "tr": "Okul hayatı",
  "icon": "🏫",
  "song": {
   "title": "A School Day",
   "lines": [
    "Every day I wear my <b>uniform</b>,",
    "I usually sit in the <b>classroom</b>,",
    "But today I am playing in the <b>playground</b>,",
    "Because the bell is ringing, ring, ring!"
   ]
  },
  "cards": [
   {
    "e": "📅",
    "w": "timetable",
    "ipa": "/ˈtaɪmˌteɪbəl/",
    "tr": "Ders programı",
    "ex": "My timetable says we usually have English on Monday."
   },
   {
    "e": "📝",
    "w": "homework",
    "ipa": "/ˈhoʊmˌwɜrk/",
    "tr": "Ödev",
    "ex": "I always do my homework after dinner, but today I am doing it before dinner."
   },
   {
    "e": "💯",
    "w": "exam",
    "ipa": "/ɪɡˈzæm/",
    "tr": "Sınav",
    "ex": "We are writing an exam at the moment, so please be quiet."
   },
   {
    "e": "👩‍🏫",
    "w": "classroom",
    "ipa": "/ˈklæsˌrum/",
    "tr": "Sınıf",
    "ex": "The students are usually quiet in the classroom, but today they are laughing."
   },
   {
    "e": "📖",
    "w": "subject",
    "ipa": "/ˈsʌbdʒɪkt/",
    "tr": "Ders (konu)",
    "ex": "Maths is my favourite subject, and we study it every day."
   },
   {
    "e": "🔔",
    "w": "lesson",
    "ipa": "/ˈlɛsən/",
    "tr": "Ders (saat)",
    "ex": "The English lesson usually starts at nine, but today it is starting at ten."
   },
   {
    "e": "👔",
    "w": "uniform",
    "ipa": "/ˈjunəˌfɔrm/",
    "tr": "Okul üniforması",
    "ex": "Ece always wears a uniform to school, but today she is wearing a T-shirt."
   },
   {
    "e": "⚽",
    "w": "playground",
    "ipa": "/ˈpleɪˌɡraʊnd/",
    "tr": "Oyun alanı",
    "ex": "We usually play in the playground, and today we are playing basketball."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "classroom",
    "options": [
     "classroom",
     "playground",
     "uniform"
    ],
    "hint": [
     "You usually sit and learn in this room at school.",
     "Okulda genelde bu odada oturup ders çalışırsın."
    ]
   },
   {
    "type": "pick",
    "q": "It is a list of your lessons for the week. What is it?",
    "tr": "Haftalık derslerinin listesidir. Nedir?",
    "options": [
     {
      "e": "📅",
      "v": "timetable"
     },
     {
      "e": "📝",
      "v": "homework"
     },
     {
      "e": "💯",
      "v": "exam"
     },
     {
      "e": "👔",
      "v": "uniform"
     }
    ],
    "answer": "timetable",
    "hint": [
     "You usually look at it to see which lesson comes next.",
     "Sıradaki dersin ne olduğunu görmek için ona bakarsın."
    ]
   },
   {
    "type": "listen",
    "say": "I usually walk to school, but today I am taking the bus because it is raining.",
    "q": "How is the girl going to school today?",
    "tr": "Kız bugün okula nasıl gidiyor?",
    "options": [
     {
      "e": "🚌",
      "v": "bus"
     },
     {
      "e": "🚗",
      "v": "car"
     },
     {
      "e": "🚲",
      "v": "bike"
     }
    ],
    "answer": "bus",
    "hint": [
     "Listen again: “…am taking the b…”.",
     "Tekrar dinle: “…am taking the b…”."
    ]
   },
   {
    "type": "write",
    "e": "🚌",
    "sentence": "Mert usually walks to school, but today he is ___ the bus.",
    "answer": "taking",
    "mask": "T _ _ _ _ _",
    "tr": "Mert genelde okula yürür ama bugün otobüse biniyor.",
    "hint": [
     "Right now we say “is + verb-ing”. t - a - k - i - n - g",
     "Şu anda olan şey için “is + fiil-ing” deriz. t - a - k - i - n - g"
    ]
   },
   {
    "type": "speak",
    "sentence": "I usually walk to school, but today I am taking the bus.",
    "tr": "Genelde okula yürürüm ama bugün otobüse biniyorum."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 0,
    "blank": "uniform",
    "hint": [
     "You wear it to school every day. u - n - i - f - o - r - m",
     "Her gün okula giyersin. u - n - i - f - o - r - m"
    ]
   },
   {
    "type": "dictation",
    "word": "homework",
    "e": "📝",
    "hint": [
     "It starts with “h”. You do it at home after school.",
     "“h” ile başlıyor. Okuldan sonra evde yaparsın."
    ]
   },
   {
    "type": "order",
    "tr": "Ece her gün ödevini yapar.",
    "answer": "Ece does her homework every day",
    "extra": "doing",
    "hint": [
     "Start with: “Ece does …”",
     "Şöyle başla: “Ece does …”"
    ]
   },
   {
    "type": "story",
    "say": "Can usually goes to school by bike. Today it is raining, so he is taking the bus. At the moment he is sitting next to his friend Elif. They are talking about the exam.",
    "q": "What are they talking about?",
    "tr": "Ne hakkında konuşuyorlar?",
    "options": [
     "the exam",
     "the timetable",
     "the uniform"
    ],
    "answer": "the exam",
    "hint": [
     "Listen for the last sentence: “…talking about the e…”.",
     "Son cümleyi dinle: “…talking about the e…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Şu anda sınıfta ders yapıyoruz.",
    "answer": "We are having a lesson in the classroom at the moment."
   }
  ]
 },
 "songs": [
  {
   "title": "My Timetable",
   "lines": [
    "Look at my <b>timetable</b> on the wall,",
    "We usually have maths, and then a break for all,",
    "Today we are having a <b>lesson</b> outside,",
    "Science in the garden, what a ride!"
   ]
  },
  {
   "title": "Exam Day",
   "lines": [
    "Every day I study for the <b>exam</b>,",
    "I always do my <b>homework</b> on time,",
    "Now I am writing, one, two, three,",
    "I always do my best, you will see!"
   ]
  },
  {
   "title": "Playground Fun",
   "lines": [
    "At break time we run in the <b>playground</b>,",
    "We usually play and jump around,",
    "Today I am playing with my best friend,",
    "And the fun, the fun will never end!"
   ]
  },
  {
   "title": "My Favourite Subject",
   "lines": [
    "My favourite <b>subject</b> is art, you see,",
    "We paint every Friday, just you and me,",
    "Right now I am drawing a bird in the tree,",
    "It is the best picture, as you can see!"
   ]
  }
 ],
 "reading": {
  "title": "Mert's School Day",
  "e": "🏫",
  "lines": [
   [
    "Mert usually walks to school with his friend Kerem.",
    "Mert genelde arkadaşı Kerem'le okula yürüyerek gider."
   ],
   [
    "But today he is taking the bus because it is raining.",
    "Ama bugün yağmur yağdığı için otobüse biniyor."
   ],
   [
    "Mert always wears his uniform, and he always has his timetable in his bag.",
    "Mert her zaman üniformasını giyer ve çantasında her zaman ders programı bulunur."
   ],
   [
    "Every day they have six lessons, and Mert's favourite subject is science.",
    "Her gün altı dersleri var ve Mert'in en sevdiği ders fen bilgisi."
   ],
   [
    "At the moment the class is writing an exam in the classroom.",
    "Şu anda sınıf, sınıfta sınav yazıyor."
   ],
   [
    "Mert is not talking, because he is thinking about the questions.",
    "Mert konuşmuyor çünkü sorular hakkında düşünüyor."
   ],
   [
    "At break time he usually plays football in the playground.",
    "Teneffüste genelde oyun alanında futbol oynar."
   ],
   [
    "After school he always does his homework, and then he reads a book.",
    "Okuldan sonra her zaman ödevini yapar, sonra kitap okur."
   ]
  ],
  "qs": [
   {
    "q": "Why is Mert taking the bus today?",
    "tr": "Mert bugün neden otobüse biniyor?",
    "options": [
     "because it is raining",
     "because he is late",
     "because he is ill"
    ],
    "answer": "because it is raining"
   },
   {
    "q": "What is Mert's favourite subject?",
    "tr": "Mert'in en sevdiği ders hangisi?",
    "options": [
     "science",
     "maths",
     "English"
    ],
    "answer": "science"
   },
   {
    "q": "What does Mert usually do at break time?",
    "tr": "Mert teneffüste genelde ne yapar?",
    "options": [
     "He plays football",
     "He does homework",
     "He reads a book"
    ],
    "answer": "He plays football"
   }
  ]
 },
 "listening": [
  {
   "say": "We usually read a book in the English lesson, but today we are watching a film.",
   "q": "What are they doing today?",
   "tr": "Bugün ne yapıyorlar?",
   "options": [
    {
     "e": "🎬",
     "v": "a film"
    },
    {
     "e": "📖",
     "v": "a book"
    },
    {
     "e": "⚽",
     "v": "football"
    }
   ],
   "answer": "a film"
  },
  {
   "say": "Zeynep is in the playground at the moment. She is playing with a ball.",
   "q": "Where is Zeynep?",
   "tr": "Zeynep nerede?",
   "options": [
    {
     "e": "⚽",
     "v": "playground"
    },
    {
     "e": "🏫",
     "v": "classroom"
    },
    {
     "e": "🏠",
     "v": "home"
    }
   ],
   "answer": "playground"
  },
  {
   "say": "I always wear my uniform at school, but today it is Friday and I am wearing jeans.",
   "q": "What is she wearing today?",
   "tr": "Bugün ne giyiyor?",
   "options": [
    {
     "e": "👖",
     "v": "jeans"
    },
    {
     "e": "👔",
     "v": "uniform"
    },
    {
     "e": "🧥",
     "v": "coat"
    }
   ],
   "answer": "jeans"
  },
  {
   "say": "We usually have an exam in June. Today we are doing a short test.",
   "q": "When do they usually have an exam?",
   "tr": "Genelde sınavı ne zaman yapıyorlar?",
   "options": [
    {
     "e": "☀️",
     "v": "June"
    },
    {
     "e": "🌸",
     "v": "May"
    },
    {
     "e": "🌷",
     "v": "March"
    }
   ],
   "answer": "June"
  },
  {
   "say": "Look at the timetable. We have maths first, and then we have art.",
   "q": "What do they have first?",
   "tr": "İlk olarak ne dersleri var?",
   "options": [
    {
     "e": "➗",
     "v": "maths"
    },
    {
     "e": "🎨",
     "v": "art"
    },
    {
     "e": "🔤",
     "v": "English"
    }
   ],
   "answer": "maths"
  }
 ],
 "speaking": [
  {
   "e": "📅",
   "en": "I usually have English on Monday.",
   "tr": "Genelde pazartesi günleri İngilizce dersim var."
  },
  {
   "e": "📝",
   "en": "I always do my homework after school.",
   "tr": "Okuldan sonra her zaman ödevimi yaparım."
  },
  {
   "e": "💯",
   "en": "We are writing an exam at the moment.",
   "tr": "Şu anda sınav yazıyoruz."
  },
  {
   "e": "👔",
   "en": "She always wears a uniform, but today she is wearing a T-shirt.",
   "tr": "O her zaman üniforma giyer ama bugün tişört giyiyor."
  },
  {
   "e": "⚽",
   "en": "Are you playing in the playground now?",
   "tr": "Şimdi oyun alanında mı oynuyorsun?"
  }
 ],
 "write": {
  "title": "My School Day",
  "en": "Write about your school day. What do you usually do? What are you doing today?",
  "tr": "Okul gününü anlat. Genelde neler yaparsın? Bugün neler yapıyorsun?",
  "starters": [
   "I usually",
   "Every day we have",
   "My favourite subject is",
   "Today I am",
   "At the moment we are",
   "After school I always"
  ],
  "checks": [
   {
    "re": /\b(usually|always|every day|often|sometimes)\b/,
    "t": "“usually / always / every day” gibi bir sıklık zarfı kullan (I usually…)"
   },
   {
    "re": /\b(am|is|are) \w+ing\b/,
    "t": "Şu anki durumu “am / is / are + fiil-ing” ile anlat (I am taking…)"
   }
  ],
  "model": "I am Mert and I go to a school in Ankara. I usually walk to school, but today I am taking the bus because it is raining. We always wear a uniform, and we have six lessons every day. My favourite subject is science. At the moment we are in the classroom and we are writing an exam. After school, I always do my homework, and then I play in the playground with my friends."
 },
 "towers": [
  {
   "e": "🚶",
   "title": "Walking to School",
   "steps": [
    {
     "tr": [
      [
       "Yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "walks",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "Yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "walks",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "okula",
       "where"
      ],
      [
       "Yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "walks",
       "does"
      ],
      [
       "to school",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "her gün",
       "when"
      ],
      [
       "okula",
       "where"
      ],
      [
       "Yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "walks",
       "does"
      ],
      [
       "to school",
       "where"
      ],
      [
       "every day",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "⚽",
   "title": "Break Time",
   "steps": [
    {
     "tr": [
      [
       "Futbol oynuyor.",
       "does"
      ]
     ],
     "en": [
      [
       "is playing football",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "Futbol oynuyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is playing football",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "oyun alanında",
       "where"
      ],
      [
       "Futbol oynuyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is playing football",
       "does"
      ],
      [
       "in the playground",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "şu anda",
       "when"
      ],
      [
       "oyun alanında",
       "where"
      ],
      [
       "Futbol oynuyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is playing football",
       "does"
      ],
      [
       "in the playground",
       "where"
      ],
      [
       "at the moment",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📝",
   "title": "Homework Time",
   "steps": [
    {
     "tr": [
      [
       "Ödevini yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "does her homework",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "Ödevini yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "does her homework",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "evde",
       "where"
      ],
      [
       "Ödevini yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "does her homework",
       "does"
      ],
      [
       "at home",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "her akşam",
       "when"
      ],
      [
       "evde",
       "where"
      ],
      [
       "Ödevini yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "does her homework",
       "does"
      ],
      [
       "at home",
       "where"
      ],
      [
       "every evening",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 32 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Globe Trotter",
  "theme": "Journeys",
  "tr": "Yolculuklar",
  "icon": "🧳",
  "song": {
   "title": "Our Long Journey",
   "lines": [
    "A year ago we went on a long <b>journey</b>,",
    "We took a <b>ferry</b> across the sea,",
    "We saw big ships and bought a <b>souvenir</b>,",
    "Then we caught a tram, my family and me!"
   ]
  },
  "cards": [
   {
    "e": "🧭",
    "w": "journey",
    "ipa": "/ˈdʒɜrni/",
    "tr": "Yolculuk",
    "ex": "We went on a long journey to Izmir two years ago."
   },
   {
    "e": "✈️",
    "w": "airport",
    "ipa": "/ˈɛrˌpɔrt/",
    "tr": "Havalimanı",
    "ex": "We left the airport at six o'clock yesterday."
   },
   {
    "e": "🧳",
    "w": "luggage",
    "ipa": "/ˈlʌɡɪdʒ/",
    "tr": "Bagaj",
    "ex": "Dad took our luggage to the car a minute ago."
   },
   {
    "e": "🚉",
    "w": "platform",
    "ipa": "/ˈplætˌfɔrm/",
    "tr": "Peron",
    "ex": "We waited on the platform and caught the train at nine."
   },
   {
    "e": "⛴️",
    "w": "ferry",
    "ipa": "/ˈfɛri/",
    "tr": "Vapur",
    "ex": "Ece took the ferry from Kadikoy to Eminonu last week."
   },
   {
    "e": "🚋",
    "w": "tram",
    "ipa": "/træm/",
    "tr": "Tramvay",
    "ex": "I caught the tram to school two days ago."
   },
   {
    "e": "🎒",
    "w": "backpack",
    "ipa": "/ˈbækˌpæk/",
    "tr": "Sırt çantası",
    "ex": "Mert bought a new backpack before the trip."
   },
   {
    "e": "🎁",
    "w": "souvenir",
    "ipa": "/ˌsuvəˈnɪr/",
    "tr": "Hediyelik eşya",
    "ex": "Zeynep bought a souvenir for her grandmother in Cappadocia."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "ferry",
    "options": [
     "ferry",
     "tram",
     "airport"
    ],
    "hint": [
     "It is a big boat that carries people across the sea.",
     "Denizin karşısına insanları taşıyan büyük bir teknedir."
    ]
   },
   {
    "type": "pick",
    "q": "You wait for a train on it at the station. What is it?",
    "tr": "İstasyonda tren beklerken üzerinde durursun. Nedir?",
    "options": [
     {
      "e": "🚉",
      "v": "platform"
     },
     {
      "e": "🧳",
      "v": "luggage"
     },
     {
      "e": "⛴️",
      "v": "ferry"
     },
     {
      "e": "✈️",
      "v": "airport"
     }
    ],
    "answer": "platform",
    "hint": [
     "It is the long place next to the train tracks.",
     "Tren raylarının yanındaki uzun yerdir."
    ]
   },
   {
    "type": "listen",
    "say": "Two weeks ago we went to Izmir. We took the ferry and we saw many dolphins.",
    "q": "What did they take?",
    "tr": "Neye bindiler?",
    "options": [
     {
      "e": "⛴️",
      "v": "ferry"
     },
     {
      "e": "🚋",
      "v": "tram"
     },
     {
      "e": "🚌",
      "v": "bus"
     }
    ],
    "answer": "ferry",
    "hint": [
     "Listen again: “…we took the f…”.",
     "Tekrar dinle: “…we took the f…”."
    ]
   },
   {
    "type": "write",
    "e": "✈️",
    "sentence": "Last year we ___ to Antalya by plane.",
    "answer": "flew",
    "mask": "F _ _ _",
    "tr": "Geçen yıl Antalya'ya uçakla gittik.",
    "hint": [
     "This is the past of “fly”. f - l - e - w",
     "Bu “fly” fiilinin geçmiş hâli. f - l - e - w"
    ]
   },
   {
    "type": "speak",
    "sentence": "We went on a journey two years ago.",
    "tr": "İki yıl önce bir yolculuğa çıktık."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "souvenir",
    "hint": [
     "You buy it on a trip to remember the place. s - o - u - v - e - n - i - r",
     "Gezide o yeri hatırlamak için alırsın. s - o - u - v - e - n - i - r"
    ]
   },
   {
    "type": "dictation",
    "word": "luggage",
    "e": "🧳",
    "hint": [
     "It starts with “l”. You carry it when you travel.",
     "“l” ile başlıyor. Seyahat ederken taşırsın."
    ]
   },
   {
    "type": "order",
    "tr": "Ece dün tramvaya bindi.",
    "answer": "Ece caught the tram yesterday",
    "extra": "catch",
    "hint": [
     "Start with: “Ece caught …”",
     "Şöyle başla: “Ece caught …”"
    ]
   },
   {
    "type": "story",
    "say": "Last summer Kerem went to Istanbul with his family. They flew from the airport in Izmir. Kerem left his ticket on the plane, but a nice man found it. Then they took a ferry and bought a souvenir.",
    "q": "What did Kerem leave on the plane?",
    "tr": "Kerem uçakta neyi bıraktı?",
    "options": [
     "his ticket",
     "his backpack",
     "his camera"
    ],
    "answer": "his ticket",
    "hint": [
     "Listen for the third sentence: “…left his t…”.",
     "Üçüncü cümleyi dinle: “…left his t…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Üç gün önce havalimanına gittik.",
    "answer": "We went to the airport three days ago."
   }
  ]
 },
 "songs": [
  {
   "title": "At the Airport",
   "lines": [
    "We went to the <b>airport</b> a week ago,",
    "We left our <b>luggage</b> and said hello,",
    "Then we flew above the clouds so high,",
    "And saw the sea from the big blue sky!"
   ]
  },
  {
   "title": "Wait on the Platform",
   "lines": [
    "We stood on the <b>platform</b> and waited for the train,",
    "We took our seats and watched the rain,",
    "We saw green fields and a farm all day,",
    "Then we left the city far away!"
   ]
  },
  {
   "title": "My Backpack",
   "lines": [
    "I bought a new <b>backpack</b> yesterday,",
    "I put in my map, and then I went away,",
    "I took my camera and my sunglasses too,",
    "And I saw the mountains, white and blue!"
   ]
  },
  {
   "title": "Little Tram",
   "lines": [
    "I caught a <b>tram</b> two hours ago,",
    "Ding, ding, ding, it went so slow,",
    "I saw the shops, I saw the sea,",
    "Then I got home just in time for tea!"
   ]
  }
 ],
 "reading": {
  "title": "Defne's Journey",
  "e": "🧳",
  "lines": [
   [
    "Two weeks ago, Defne went on a journey to Izmir with her family.",
    "İki hafta önce Defne ailesiyle İzmir'e bir yolculuğa çıktı."
   ],
   [
    "They took a taxi to the airport and flew to Izmir.",
    "Havalimanına taksiyle gittiler ve İzmir'e uçtular."
   ],
   [
    "Defne left her backpack in the taxi, but Dad found it.",
    "Defne sırt çantasını taksiye bıraktı ama babası onu buldu."
   ],
   [
    "In Izmir they caught a tram to the city centre.",
    "İzmir'de şehir merkezine tramvaya bindiler."
   ],
   [
    "Then they took a ferry across the bay and saw many seagulls.",
    "Sonra körfezin karşısına vapura bindiler ve çok sayıda martı gördüler."
   ],
   [
    "Defne bought a souvenir for her grandmother in a small shop.",
    "Defne küçük bir dükkândan büyükannesi için hediyelik bir eşya aldı."
   ],
   [
    "On Sunday they waited on the platform and caught the train home.",
    "Pazar günü peronda beklediler ve eve trenle döndüler."
   ],
   [
    "Defne was tired, but she loved her journey!",
    "Defne yorgundu ama yolculuğunu çok sevdi!"
   ]
  ],
  "qs": [
   {
    "q": "How did they travel to Izmir?",
    "tr": "İzmir'e nasıl gittiler?",
    "options": [
     "by plane",
     "by train",
     "by ferry"
    ],
    "answer": "by plane"
   },
   {
    "q": "What did Defne buy for her grandmother?",
    "tr": "Defne büyükannesi için ne aldı?",
    "options": [
     "a souvenir",
     "a backpack",
     "a ticket"
    ],
    "answer": "a souvenir"
   },
   {
    "q": "What did they see on the ferry?",
    "tr": "Vapurda ne gördüler?",
    "options": [
     "seagulls",
     "dolphins",
     "ships"
    ],
    "answer": "seagulls"
   }
  ]
 },
 "listening": [
  {
   "say": "Yesterday we flew to Antalya. We left our luggage at the hotel and went to the beach.",
   "q": "Where did they leave their luggage?",
   "tr": "Bagajlarını nerede bıraktılar?",
   "options": [
    {
     "e": "🏨",
     "v": "hotel"
    },
    {
     "e": "✈️",
     "v": "airport"
    },
    {
     "e": "🚗",
     "v": "car"
    }
   ],
   "answer": "hotel"
  },
  {
   "say": "Three days ago Mert took the tram to school. It was very full.",
   "q": "What did Mert take?",
   "tr": "Mert neye bindi?",
   "options": [
    {
     "e": "🚋",
     "v": "tram"
    },
    {
     "e": "🚌",
     "v": "bus"
    },
    {
     "e": "⛴️",
     "v": "ferry"
    }
   ],
   "answer": "tram"
  },
  {
   "say": "In Istanbul I bought a souvenir for Mum and a backpack for me.",
   "q": "What did the girl buy for herself?",
   "tr": "Kız kendisi için ne aldı?",
   "options": [
    {
     "e": "🎒",
     "v": "backpack"
    },
    {
     "e": "🎁",
     "v": "souvenir"
    },
    {
     "e": "🗺️",
     "v": "map"
    }
   ],
   "answer": "backpack"
  },
  {
   "say": "We waited on platform two and caught the train at ten past nine.",
   "q": "Which platform did they wait on?",
   "tr": "Hangi perondan beklediler?",
   "options": [
    {
     "e": "1️⃣",
     "v": "platform one"
    },
    {
     "e": "2️⃣",
     "v": "platform two"
    },
    {
     "e": "3️⃣",
     "v": "platform three"
    }
   ],
   "answer": "platform two"
  },
  {
   "say": "A week ago my family went on a long journey. We took a ferry and saw a big whale.",
   "q": "What did they see?",
   "tr": "Ne gördüler?",
   "options": [
    {
     "e": "🐋",
     "v": "whale"
    },
    {
     "e": "🐬",
     "v": "dolphin"
    },
    {
     "e": "🦈",
     "v": "shark"
    }
   ],
   "answer": "whale"
  }
 ],
 "speaking": [
  {
   "e": "🧭",
   "en": "We went on a journey two years ago.",
   "tr": "İki yıl önce bir yolculuğa çıktık."
  },
  {
   "e": "✈️",
   "en": "Where did you go last summer?",
   "tr": "Geçen yaz nereye gittin?"
  },
  {
   "e": "⛴️",
   "en": "I took the ferry and saw the sea.",
   "tr": "Vapura bindim ve denizi gördüm."
  },
  {
   "e": "🎒",
   "en": "Did you take your backpack yesterday?",
   "tr": "Dün sırt çantanı aldın mı?"
  },
  {
   "e": "🎁",
   "en": "She bought a souvenir for her grandmother.",
   "tr": "Büyükannesi için hediyelik bir eşya aldı."
  }
 ],
 "write": {
  "title": "My Last Journey",
  "en": "Write about a journey you took. Where did you go? What did you see and buy?",
  "tr": "Yaptığın bir yolculuğu anlat. Nereye gittin? Neler gördün, neler aldın?",
  "starters": [
   "Two years ago, I went to",
   "We took",
   "First, we",
   "I saw",
   "I bought",
   "Then we"
  ],
  "checks": [
   {
    "re": /\b(went|took|saw|bought|flew|caught|left)\b/,
    "t": "Düzensiz bir geçmiş zaman fiili kullan (went, took, saw…)"
   },
   {
    "re": /\bago\b/,
    "t": "“ago” ile ne zaman olduğunu söyle (two years ago)"
   }
  ],
  "model": "Two years ago, my family and I went on a long journey to Izmir. First, we took a taxi to the airport, and we flew to Izmir. I left my backpack in the taxi, but Dad found it. After that, we caught a tram and then we took a ferry across the bay. I saw many seagulls, and I bought a souvenir for my grandmother because she loves small gifts. It was a wonderful journey!"
 },
 "towers": [
  {
   "e": "🚋",
   "title": "Tram Ride",
   "steps": [
    {
     "tr": [
      [
       "Tramvaya bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "caught the tram",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "Tramvaya bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "caught the tram",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "İzmir'de",
       "where"
      ],
      [
       "Tramvaya bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "caught the tram",
       "does"
      ],
      [
       "in Izmir",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "dün",
       "when"
      ],
      [
       "İzmir'de",
       "where"
      ],
      [
       "Tramvaya bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "caught the tram",
       "does"
      ],
      [
       "in Izmir",
       "where"
      ],
      [
       "yesterday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "✈️",
   "title": "Flying Away",
   "steps": [
    {
     "tr": [
      [
       "Antalya'ya uçtu.",
       "does"
      ]
     ],
     "en": [
      [
       "flew to Antalya",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "Antalya'ya uçtu.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "flew to Antalya",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "İstanbul'dan",
       "where"
      ],
      [
       "Antalya'ya uçtu.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "flew to Antalya",
       "does"
      ],
      [
       "from Istanbul",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "bir hafta önce",
       "when"
      ],
      [
       "İstanbul'dan",
       "where"
      ],
      [
       "Antalya'ya uçtu.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "flew to Antalya",
       "does"
      ],
      [
       "from Istanbul",
       "where"
      ],
      [
       "a week ago",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🎁",
   "title": "Souvenir Shop",
   "steps": [
    {
     "tr": [
      [
       "Hediyelik eşya aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "bought a souvenir",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "Hediyelik eşya aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a souvenir",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "pazarda",
       "where"
      ],
      [
       "Hediyelik eşya aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a souvenir",
       "does"
      ],
      [
       "in the market",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "iki gün önce",
       "when"
      ],
      [
       "pazarda",
       "where"
      ],
      [
       "Hediyelik eşya aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a souvenir",
       "does"
      ],
      [
       "in the market",
       "where"
      ],
      [
       "two days ago",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 33 ----------
UNITS_KEY.push({
 "L": {
  "rank": "People Reader",
  "theme": "People and Personality",
  "tr": "İnsanlar ve kişilik",
  "icon": "👫",
  "song": {
   "title": "My Best Friend",
   "lines": [
    "My best friend is a girl who is very <b>kind</b>,",
    "She is a friend who is always <b>friendly</b>,",
    "She is a person who makes me laugh all day,",
    "She is the <b>funny</b> one that I love, hooray!"
   ]
  },
  "cards": [
   {
    "e": "😊",
    "w": "friendly",
    "ipa": "/ˈfrɛndli/",
    "tr": "Arkadaş canlısı",
    "ex": "Elif is a girl who is very friendly."
   },
   {
    "e": "🙈",
    "w": "shy",
    "ipa": "/ʃaɪ/",
    "tr": "Utangaç",
    "ex": "My cousin is a boy who is shy with new people."
   },
   {
    "e": "🤡",
    "w": "funny",
    "ipa": "/ˈfʌni/",
    "tr": "Komik",
    "ex": "Can is a boy who tells funny jokes."
   },
   {
    "e": "🤗",
    "w": "kind",
    "ipa": "/kaɪnd/",
    "tr": "Nazik, iyi kalpli",
    "ex": "My best friend is a girl who is very kind."
   },
   {
    "e": "🧠",
    "w": "clever",
    "ipa": "/ˈklɛvɚ/",
    "tr": "Zeki",
    "ex": "Emre is a student that is clever in maths."
   },
   {
    "e": "🦁",
    "w": "brave",
    "ipa": "/breɪv/",
    "tr": "Cesur",
    "ex": "A firefighter is a person who is brave."
   },
   {
    "e": "😴",
    "w": "lazy",
    "ipa": "/ˈleɪzi/",
    "tr": "Tembel",
    "ex": "My cat is an animal that is lazy all day."
   },
   {
    "e": "🙏",
    "w": "polite",
    "ipa": "/pəˈlaɪt/",
    "tr": "Kibar, nazik",
    "ex": "A polite person is someone who says please and thank you."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "kind",
    "options": [
     "kind",
     "shy",
     "lazy"
    ],
    "hint": [
     "A kind person is good to other people. She helps you when you are sad.",
     "Kibar ve iyi kalpli biri başkalarına iyi davranır. Üzgünken sana yardım eder."
    ]
   },
   {
    "type": "pick",
    "q": "It is a person who is not afraid of dangerous things. What is the word?",
    "tr": "Tehlikeli şeylerden korkmayan biri. Kelime nedir?",
    "options": [
     {
      "e": "🦁",
      "v": "brave"
     },
     {
      "e": "🙈",
      "v": "shy"
     },
     {
      "e": "😴",
      "v": "lazy"
     },
     {
      "e": "🙏",
      "v": "polite"
     }
    ],
    "answer": "brave",
    "hint": [
     "A firefighter is this kind of person.",
     "İtfaiyeci bu tür bir insandır."
    ]
   },
   {
    "type": "listen",
    "say": "Zeynep is a girl who is very shy. She is a student that never speaks in class.",
    "q": "What is Zeynep like?",
    "tr": "Zeynep nasıl biri?",
    "options": [
     {
      "e": "🙈",
      "v": "shy"
     },
     {
      "e": "🤡",
      "v": "funny"
     },
     {
      "e": "🦁",
      "v": "brave"
     }
    ],
    "answer": "shy",
    "hint": [
     "Listen again: “…a girl who is very s…”.",
     "Tekrar dinle: “…a girl who is very s…”."
    ]
   },
   {
    "type": "write",
    "e": "👩‍🏫",
    "sentence": "A teacher is a person ___ helps students.",
    "answer": "who",
    "mask": "W _ _",
    "tr": "Öğretmen, öğrencilere yardım eden bir kişidir.",
    "hint": [
     "For people we use “who”. w - h - o",
     "İnsanlar için “who” kullanırız. w - h - o"
    ]
   },
   {
    "type": "speak",
    "sentence": "My best friend is a girl who is very kind.",
    "tr": "En iyi arkadaşım çok nazik bir kız."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "friendly",
    "hint": [
     "A person who smiles and talks to everybody is this! f - r - i - e - n - d - l - y",
     "Herkese gülümseyen ve konuşan biri böyledir! f - r - i - e - n - d - l - y"
    ]
   },
   {
    "type": "dictation",
    "word": "clever",
    "e": "🧠",
    "hint": [
     "It starts with “c”. A person with a good brain is this.",
     "“c” ile başlıyor. Beyni çok iyi çalışan biri böyledir."
    ]
   },
   {
    "type": "order",
    "tr": "Ece nazik olan bir kız.",
    "answer": "Ece is a girl who is kind",
    "extra": "which",
    "hint": [
     "Start with: “Ece is a girl …”",
     "Şöyle başla: “Ece is a girl …”"
    ]
   },
   {
    "type": "story",
    "say": "Kerem is a boy who is very shy. He is a student that never speaks in class. But Kerem is also clever and kind. He helps his friends who have problems with maths.",
    "q": "Who does Kerem help?",
    "tr": "Kerem kime yardım ediyor?",
    "options": [
     "his friends",
     "his teacher",
     "his cousin"
    ],
    "answer": "his friends",
    "hint": [
     "Listen for the last sentence: “…helps his f…”.",
     "Son cümleyi dinle: “…helps his f…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Mert komik olan bir çocuk.",
    "answer": "Mert is a boy who is funny."
   }
  ]
 },
 "songs": [
  {
   "title": "The Shy Cousin",
   "lines": [
    "I have a cousin who is <b>shy</b>,",
    "He is a boy who waves and says hi,",
    "He is not a boy that talks too loud,",
    "But he is <b>kind</b> and he makes me proud!"
   ]
  },
  {
   "title": "Brave Heart",
   "lines": [
    "A firefighter is a person who is <b>brave</b>,",
    "She is a hero who can save,",
    "I want to be a girl who is bold,",
    "And <b>brave</b> and strong like a lion of gold!"
   ]
  },
  {
   "title": "Lazy Cat",
   "lines": [
    "My cat is an animal that is <b>lazy</b>,",
    "It sleeps all day, it is quite crazy,",
    "It is a cat which never plays,",
    "It just lies in the sun on lazy days!"
   ]
  },
  {
   "title": "Be Polite",
   "lines": [
    "Be <b>polite</b>, say please and thank you,",
    "Be a friend who is <b>friendly</b> too,",
    "Be a student that is <b>clever</b> and kind,",
    "And a <b>funny</b> girl with a happy mind!"
   ]
  }
 ],
 "reading": {
  "title": "Defne's Best Friend",
  "e": "👭",
  "lines": [
   [
    "Defne's best friend is a girl who is called Elif.",
    "Defne'nin en iyi arkadaşı Elif adında bir kız."
   ],
   [
    "Elif is a girl who is very friendly and kind.",
    "Elif çok arkadaş canlısı ve nazik bir kız."
   ],
   [
    "She is also funny, so she tells jokes that make everyone laugh.",
    "Aynı zamanda komik, bu yüzden herkesi güldüren fıkralar anlatıyor."
   ],
   [
    "Defne is shy, but Elif is a friend who is brave.",
    "Defne utangaç ama Elif cesur bir arkadaş."
   ],
   [
    "When a new student comes, Elif is the girl who says hello first.",
    "Yeni bir öğrenci geldiğinde ilk merhaba diyen kız Elif."
   ],
   [
    "Their classmate Kerem is clever, but he is a boy who is lazy at home.",
    "Sınıf arkadaşları Kerem zeki ama evde tembel bir çocuk."
   ],
   [
    "Elif is polite, so she always says please and thank you.",
    "Elif kibar, bu yüzden her zaman lütfen ve teşekkür ederim der."
   ],
   [
    "Defne loves the book which Elif gave her for her birthday.",
    "Defne, Elif'in doğum gününde ona verdiği kitabı çok seviyor."
   ]
  ],
  "qs": [
   {
    "q": "Who is brave?",
    "tr": "Kim cesur?",
    "options": [
     "Elif",
     "Defne",
     "Kerem"
    ],
    "answer": "Elif"
   },
   {
    "q": "Who is lazy at home?",
    "tr": "Evde kim tembel?",
    "options": [
     "Kerem",
     "Elif",
     "Defne"
    ],
    "answer": "Kerem"
   },
   {
    "q": "What does Defne love?",
    "tr": "Defne neyi seviyor?",
    "options": [
     "the book",
     "the pen",
     "the bag"
    ],
    "answer": "the book"
   }
  ]
 },
 "listening": [
  {
   "say": "My brother is a boy who is very lazy. He sleeps all afternoon.",
   "q": "What is the brother like?",
   "tr": "Kardeş nasıl biri?",
   "options": [
    {
     "e": "😴",
     "v": "lazy"
    },
    {
     "e": "🦁",
     "v": "brave"
    },
    {
     "e": "🙈",
     "v": "shy"
    }
   ],
   "answer": "lazy"
  },
  {
   "say": "Emre is the student that is clever. He always gets full marks in maths.",
   "q": "What is Emre like?",
   "tr": "Emre nasıl biri?",
   "options": [
    {
     "e": "🧠",
     "v": "clever"
    },
    {
     "e": "🙏",
     "v": "polite"
    },
    {
     "e": "🤡",
     "v": "funny"
    }
   ],
   "answer": "clever"
  },
  {
   "say": "Our new neighbour is a woman who is very kind. She gives us sweets.",
   "q": "What is the neighbour like?",
   "tr": "Komşu nasıl biri?",
   "options": [
    {
     "e": "🤗",
     "v": "kind"
    },
    {
     "e": "🙈",
     "v": "shy"
    },
    {
     "e": "😴",
     "v": "lazy"
    }
   ],
   "answer": "kind"
  },
  {
   "say": "Can is a boy who is funny. He tells jokes that make us laugh.",
   "q": "What is Can like?",
   "tr": "Can nasıl biri?",
   "options": [
    {
     "e": "🤡",
     "v": "funny"
    },
    {
     "e": "🦁",
     "v": "brave"
    },
    {
     "e": "🙈",
     "v": "shy"
    }
   ],
   "answer": "funny"
  },
  {
   "say": "A girl who is friendly smiles at everybody. She is the girl that I like.",
   "q": "What is the girl like?",
   "tr": "Kız nasıl biri?",
   "options": [
    {
     "e": "😊",
     "v": "friendly"
    },
    {
     "e": "🙈",
     "v": "shy"
    },
    {
     "e": "😴",
     "v": "lazy"
    }
   ],
   "answer": "friendly"
  }
 ],
 "speaking": [
  {
   "e": "😊",
   "en": "Elif is a girl who is very friendly.",
   "tr": "Elif çok arkadaş canlısı bir kız."
  },
  {
   "e": "🙈",
   "en": "My cousin is a boy who is shy.",
   "tr": "Kuzenim utangaç bir çocuk."
  },
  {
   "e": "📖",
   "en": "This is the book which I love.",
   "tr": "Bu, sevdiğim kitap."
  },
  {
   "e": "🦁",
   "en": "Ece is a girl that is very brave.",
   "tr": "Ece çok cesur bir kız."
  },
  {
   "e": "🙏",
   "en": "Mert is a boy who is polite.",
   "tr": "Mert kibar bir çocuk."
  }
 ],
 "write": {
  "title": "My Best Friend",
  "en": "Write about your best friend. What is he or she like?",
  "tr": "En iyi arkadaşını anlat. Nasıl biri?",
  "starters": [
   "My best friend is a girl who",
   "She is very",
   "I like people who",
   "He is a boy that",
   "Sometimes she is",
   "That is why"
  ],
  "checks": [
   {
    "re": /\b(who|which|that)\b/,
    "t": "“who / which / that” kullan (She is a girl who…)"
   },
   {
    "re": /\b(friendly|shy|funny|kind|clever|brave|lazy|polite)\b/,
    "t": "Bir kişilik sıfatı yaz (kind, funny, brave…)"
   }
  ],
  "model": "My best friend is a girl who is called Elif. She is very friendly and kind, so everybody likes her. She is also funny because she tells jokes that make me laugh. Elif is a student who is clever, but she is a little lazy when she has to clean her room. When we meet a new person, I am shy, but Elif is brave and says hello first. That is why she is the friend that I love most."
 },
 "towers": [
  {
   "e": "🤗",
   "title": "Kind Friend",
   "steps": [
    {
     "tr": [
      [
       "Arkadaşlarına yardım eder.",
       "does"
      ]
     ],
     "en": [
      [
       "helps her friends",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Nazik olan kız",
       "who"
      ],
      [
       "Arkadaşlarına yardım eder.",
       "does"
      ]
     ],
     "en": [
      [
       "The girl who is kind",
       "who"
      ],
      [
       "helps her friends",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Nazik olan kız",
       "who"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "Arkadaşlarına yardım eder.",
       "does"
      ]
     ],
     "en": [
      [
       "The girl who is kind",
       "who"
      ],
      [
       "helps her friends",
       "does"
      ],
      [
       "at school",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Nazik olan kız",
       "who"
      ],
      [
       "her gün",
       "when"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "Arkadaşlarına yardım eder.",
       "does"
      ]
     ],
     "en": [
      [
       "The girl who is kind",
       "who"
      ],
      [
       "helps her friends",
       "does"
      ],
      [
       "at school",
       "where"
      ],
      [
       "every day",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "😴",
   "title": "Lazy Cat",
   "steps": [
    {
     "tr": [
      [
       "Uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "sleeps",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tembel olan kedi",
       "who"
      ],
      [
       "Uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat that is lazy",
       "who"
      ],
      [
       "sleeps",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tembel olan kedi",
       "who"
      ],
      [
       "kanepede",
       "where"
      ],
      [
       "Uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat that is lazy",
       "who"
      ],
      [
       "sleeps",
       "does"
      ],
      [
       "on the sofa",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tembel olan kedi",
       "who"
      ],
      [
       "bütün öğleden sonra",
       "when"
      ],
      [
       "kanepede",
       "where"
      ],
      [
       "Uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat that is lazy",
       "who"
      ],
      [
       "sleeps",
       "does"
      ],
      [
       "on the sofa",
       "where"
      ],
      [
       "all afternoon",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🦁",
   "title": "Brave Boy",
   "steps": [
    {
     "tr": [
      [
       "Yeni öğrencilere merhaba der.",
       "does"
      ]
     ],
     "en": [
      [
       "says hello to new students",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Cesur olan çocuk",
       "who"
      ],
      [
       "Yeni öğrencilere merhaba der.",
       "does"
      ]
     ],
     "en": [
      [
       "The boy who is brave",
       "who"
      ],
      [
       "says hello to new students",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Cesur olan çocuk",
       "who"
      ],
      [
       "sınıfta",
       "where"
      ],
      [
       "Yeni öğrencilere merhaba der.",
       "does"
      ]
     ],
     "en": [
      [
       "The boy who is brave",
       "who"
      ],
      [
       "says hello to new students",
       "does"
      ],
      [
       "in class",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Cesur olan çocuk",
       "who"
      ],
      [
       "pazartesi günü",
       "when"
      ],
      [
       "sınıfta",
       "where"
      ],
      [
       "Yeni öğrencilere merhaba der.",
       "does"
      ]
     ],
     "en": [
      [
       "The boy who is brave",
       "who"
      ],
      [
       "says hello to new students",
       "does"
      ],
      [
       "in class",
       "where"
      ],
      [
       "on Monday",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 34 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Home Helper",
  "theme": "Housework",
  "tr": "Ev işleri",
  "icon": "🧹",
  "song": {
   "title": "Helping at Home",
   "lines": [
    "I have to do my <b>chores</b> today,",
    "I have to <b>make the bed</b> and put my toys away,",
    "My mum has to do the <b>laundry</b>, you see,",
    "And I must help her, one, two, three!"
   ]
  },
  "cards": [
   {
    "e": "📋",
    "w": "chores",
    "ipa": "/tʃɔrz/",
    "tr": "Ev işleri",
    "ex": "I have to do my chores before I play games."
   },
   {
    "e": "🧸",
    "w": "tidy up",
    "ipa": "/ˈtaɪdi ʌp/",
    "tr": "Toplamak, düzenlemek",
    "ex": "You must tidy up your room before dinner."
   },
   {
    "e": "🍽️",
    "w": "wash up",
    "ipa": "/ˈwɑʃ ˌʌp/",
    "tr": "Bulaşık yıkamak",
    "ex": "We have to wash up after dinner."
   },
   {
    "e": "🧺",
    "w": "laundry",
    "ipa": "/ˈlɔndri/",
    "tr": "Çamaşır",
    "ex": "Mum has to do the laundry on Saturdays."
   },
   {
    "e": "🔌",
    "w": "vacuum cleaner",
    "ipa": "/ˈvækjum ˌklinɚ/",
    "tr": "Elektrikli süpürge",
    "ex": "Kerem has to use the vacuum cleaner in the living room."
   },
   {
    "e": "🧹",
    "w": "broom",
    "ipa": "/brum/",
    "tr": "Süpürge",
    "ex": "You mustn't play with the broom because it is dirty."
   },
   {
    "e": "🛏️",
    "w": "make the bed",
    "ipa": "/ˌmeɪk ðə ˈbɛd/",
    "tr": "Yatağı yapmak",
    "ex": "I have to make the bed every morning."
   },
   {
    "e": "🐶",
    "w": "feed the pet",
    "ipa": "/ˌfid ðə ˈpɛt/",
    "tr": "Evcil hayvanı beslemek",
    "ex": "Elif has to feed the pet before school."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "chores",
    "options": [
     "chores",
     "laundry",
     "broom"
    ],
    "hint": [
     "They are the jobs you do at home, like washing up and tidying up.",
     "Evde yaptığın işlerdir; bulaşık yıkamak, ortalığı toplamak gibi."
    ]
   },
   {
    "type": "pick",
    "q": "You use it to sweep the floor. It has a long handle. What is it?",
    "tr": "Yeri süpürmek için kullanırsın. Uzun bir sapı var. Nedir?",
    "options": [
     {
      "e": "🧹",
      "v": "broom"
     },
     {
      "e": "🔌",
      "v": "vacuum cleaner"
     },
     {
      "e": "🧺",
      "v": "laundry"
     },
     {
      "e": "🛏️",
      "v": "make the bed"
     }
    ],
    "answer": "broom",
    "hint": [
     "It is not electric. You move it with your hands.",
     "Elektrikli değil. Onu elinle hareket ettirirsin."
    ]
   },
   {
    "type": "listen",
    "say": "I have to feed the pet every morning. Then I have to make my bed before school.",
    "q": "What does the girl have to do first?",
    "tr": "Kız önce ne yapmak zorunda?",
    "options": [
     {
      "e": "🐶",
      "v": "feed the pet"
     },
     {
      "e": "🛏️",
      "v": "make the bed"
     },
     {
      "e": "🍽️",
      "v": "wash up"
     }
    ],
    "answer": "feed the pet",
    "hint": [
     "Listen again: “I have to f… the pet”.",
     "Tekrar dinle: “I have to f… the pet”."
    ]
   },
   {
    "type": "write",
    "e": "🍽️",
    "sentence": "You don't ___ to wash the dishes today.",
    "answer": "have",
    "mask": "H _ _ _",
    "tr": "Bugün bulaşıkları yıkamak zorunda değilsin.",
    "hint": [
     "We say “don't have to” when it is not necessary. h - a - v - e",
     "Gerekli olmayan şeyler için “don't have to” deriz. h - a - v - e"
    ]
   },
   {
    "type": "speak",
    "sentence": "I have to make my bed every morning.",
    "tr": "Her sabah yatağımı yapmak zorundayım."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "laundry",
    "hint": [
     "It is the dirty clothes that you wash in the washing machine. l - a - u - n - d - r - y",
     "Çamaşır makinesinde yıkadığın kirli kıyafetlerdir. l - a - u - n - d - r - y"
    ]
   },
   {
    "type": "dictation",
    "word": "broom",
    "e": "🧹",
    "hint": [
     "It starts with “b”. You sweep the floor with it.",
     "“b” ile başlıyor. Onunla yeri süpürürsün."
    ]
   },
   {
    "type": "order",
    "tr": "Annem bugün çamaşırları yıkamak zorunda.",
    "answer": "Mum has to do the laundry today",
    "extra": "have",
    "hint": [
     "Start with: “Mum has …”",
     "Şöyle başla: “Mum has …”"
    ]
   },
   {
    "type": "story",
    "say": "Mert has to do his chores on Saturday. First he has to tidy up his room. Then he has to feed the pet. He doesn't have to wash up because his sister does it.",
    "q": "What doesn't Mert have to do?",
    "tr": "Mert neyi yapmak zorunda değil?",
    "options": [
     "wash up",
     "feed the pet",
     "tidy up"
    ],
    "answer": "wash up",
    "hint": [
     "Listen for the last sentence: “…doesn't have to w…”.",
     "Son cümleyi dinle: “…doesn't have to w…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Odanı toplamak zorundasın.",
    "answer": "You have to tidy up your room."
   }
  ]
 },
 "songs": [
  {
   "title": "Wash Up Time",
   "lines": [
    "After dinner we <b>wash up</b>,",
    "Plates and glasses, fork and cup,",
    "We have to <b>tidy up</b> the kitchen too,",
    "Then we can rest, me and you!"
   ]
  },
  {
   "title": "Busy Broom",
   "lines": [
    "Swish, swish, swish goes the <b>broom</b>,",
    "I have to sweep the whole room,",
    "You mustn't leave your socks on the floor,",
    "Or we will have to sweep some more!"
   ]
  },
  {
   "title": "Pet Time",
   "lines": [
    "Every morning I <b>feed the pet</b>,",
    "I have to give it food, you bet,",
    "It doesn't have to wait for long,",
    "Then we sing our morning song!"
   ]
  },
  {
   "title": "Clean Machine",
   "lines": [
    "The <b>vacuum cleaner</b> goes vroom, vroom, vroom,",
    "I have to clean the living room,",
    "I don't have to do the <b>laundry</b> today,",
    "But I must <b>make the bed</b> before I play!"
   ]
  }
 ],
 "reading": {
  "title": "Kerem's Saturday",
  "e": "🏠",
  "lines": [
   [
    "On Saturday mornings, Kerem has to do his chores.",
    "Cumartesi sabahları Kerem ev işlerini yapmak zorunda."
   ],
   [
    "First, he has to make his bed and tidy up his room.",
    "Önce yatağını yapmak ve odasını toplamak zorunda."
   ],
   [
    "Then he has to feed the pet, a small cat called Pamuk.",
    "Sonra Pamuk adında küçük bir kediyi beslemek zorunda."
   ],
   [
    "His sister Ece has to wash up after breakfast.",
    "Kız kardeşi Ece kahvaltıdan sonra bulaşık yıkamak zorunda."
   ],
   [
    "Mum has to do the laundry, but Kerem doesn't have to help her.",
    "Annesi çamaşırları yıkamak zorunda ama Kerem ona yardım etmek zorunda değil."
   ],
   [
    "Dad uses the vacuum cleaner, and Kerem mustn't touch it because it is too heavy for him.",
    "Babası elektrikli süpürgeyi kullanıyor ve Kerem ona dokunmamalı çünkü onun için çok ağır."
   ],
   [
    "Kerem has to use the broom in the kitchen.",
    "Kerem mutfakta süpürgeyi kullanmak zorunda."
   ],
   [
    "When he finishes his chores, he can play football with his friends!",
    "İşlerini bitirince arkadaşlarıyla futbol oynayabilir!"
   ]
  ],
  "qs": [
   {
    "q": "What does Kerem have to feed?",
    "tr": "Kerem neyi beslemek zorunda?",
    "options": [
     "the cat",
     "the dog",
     "the fish"
    ],
    "answer": "the cat"
   },
   {
    "q": "Who has to wash up after breakfast?",
    "tr": "Kahvaltıdan sonra kim bulaşık yıkamak zorunda?",
    "options": [
     "Ece",
     "Mum",
     "Dad"
    ],
    "answer": "Ece"
   },
   {
    "q": "What mustn't Kerem touch?",
    "tr": "Kerem neye dokunmamalı?",
    "options": [
     "the vacuum cleaner",
     "the broom",
     "the cat"
    ],
    "answer": "the vacuum cleaner"
   }
  ]
 },
 "listening": [
  {
   "say": "I have to wash up after dinner. My brother has to dry the plates.",
   "q": "What does the girl have to do after dinner?",
   "tr": "Kız akşam yemeğinden sonra ne yapmak zorunda?",
   "options": [
    {
     "e": "🍽️",
     "v": "wash up"
    },
    {
     "e": "🛏️",
     "v": "make the bed"
    },
    {
     "e": "🐶",
     "v": "feed the pet"
    }
   ],
   "answer": "wash up"
  },
  {
   "say": "Mum has to do the laundry today. She has to wash all the clothes.",
   "q": "What does Mum have to do?",
   "tr": "Annesi ne yapmak zorunda?",
   "options": [
    {
     "e": "🧺",
     "v": "laundry"
    },
    {
     "e": "🧹",
     "v": "broom"
    },
    {
     "e": "🔌",
     "v": "vacuum cleaner"
    }
   ],
   "answer": "laundry"
  },
  {
   "say": "Dad has to clean the carpet. He uses the vacuum cleaner.",
   "q": "What does Dad use?",
   "tr": "Babası neyi kullanıyor?",
   "options": [
    {
     "e": "🔌",
     "v": "vacuum cleaner"
    },
    {
     "e": "🧹",
     "v": "broom"
    },
    {
     "e": "🧺",
     "v": "laundry"
    }
   ],
   "answer": "vacuum cleaner"
  },
  {
   "say": "You mustn't forget the dog. You have to feed the pet every morning.",
   "q": "What do you have to do every morning?",
   "tr": "Her sabah ne yapmak zorundasın?",
   "options": [
    {
     "e": "🐶",
     "v": "feed the pet"
    },
    {
     "e": "🛏️",
     "v": "make the bed"
    },
    {
     "e": "🍽️",
     "v": "wash up"
    }
   ],
   "answer": "feed the pet"
  },
  {
   "say": "I don't have to tidy up today because my room is clean. But I have to make my bed.",
   "q": "What does he have to do?",
   "tr": "O ne yapmak zorunda?",
   "options": [
    {
     "e": "🛏️",
     "v": "make the bed"
    },
    {
     "e": "🧸",
     "v": "tidy up"
    },
    {
     "e": "🍽️",
     "v": "wash up"
    }
   ],
   "answer": "make the bed"
  }
 ],
 "speaking": [
  {
   "e": "📋",
   "en": "I have to do my chores.",
   "tr": "Ev işlerimi yapmak zorundayım."
  },
  {
   "e": "🛏️",
   "en": "I have to make my bed every morning.",
   "tr": "Her sabah yatağımı yapmak zorundayım."
  },
  {
   "e": "🍽️",
   "en": "You don't have to wash up today.",
   "tr": "Bugün bulaşık yıkamak zorunda değilsin."
  },
  {
   "e": "🐶",
   "en": "She has to feed the pet.",
   "tr": "O, evcil hayvanı beslemek zorunda."
  },
  {
   "e": "🧹",
   "en": "You mustn't play with the broom.",
   "tr": "Süpürgeyle oynamamalısın."
  }
 ],
 "write": {
  "title": "My Chores",
  "en": "Write about the chores you have to do at home. Who has to do what?",
  "tr": "Evde yapmak zorunda olduğun işleri anlat. Kim ne yapmak zorunda?",
  "starters": [
   "Every morning, I have to",
   "My mum has to",
   "My brother doesn't have to",
   "I must",
   "I mustn't",
   "After that, I can"
  ],
  "checks": [
   {
    "re": /\b(have|has) to\b/,
    "t": "“have to / has to” kullan (I have to…)"
   },
   {
    "re": /\b(chores|tidy|wash|laundry|vacuum|broom|bed|pet)\b/,
    "t": "Ev işleriyle ilgili bir kelime yaz (chores, laundry…)"
   }
  ],
  "model": "I have to do my chores every day. First, I have to make my bed and tidy up my room. Then I have to feed the pet because my cat is hungry in the morning. My mum has to do the laundry, and my dad has to use the vacuum cleaner. My little brother doesn't have to help, but he must not make a mess. After that, we wash up together, so the house is clean and we can play."
 },
 "towers": [
  {
   "e": "🛏️",
   "title": "Morning Chores",
   "steps": [
    {
     "tr": [
      [
       "Yatağını yapmak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "has to make the bed",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "Yatağını yapmak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has to make the bed",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "Yatağını yapmak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has to make the bed",
       "does"
      ],
      [
       "in her room",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "her sabah",
       "when"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "Yatağını yapmak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has to make the bed",
       "does"
      ],
      [
       "in her room",
       "where"
      ],
      [
       "every morning",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🍽️",
   "title": "After Dinner",
   "steps": [
    {
     "tr": [
      [
       "Bulaşıkları yıkamak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "has to wash up",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Babam",
       "who"
      ],
      [
       "Bulaşıkları yıkamak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has to wash up",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Babam",
       "who"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "Bulaşıkları yıkamak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has to wash up",
       "does"
      ],
      [
       "in the kitchen",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Babam",
       "who"
      ],
      [
       "akşam yemeğinden sonra",
       "when"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "Bulaşıkları yıkamak zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has to wash up",
       "does"
      ],
      [
       "in the kitchen",
       "where"
      ],
      [
       "after dinner",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🐶",
   "title": "Pet Care",
   "steps": [
    {
     "tr": [
      [
       "Evcil hayvanını beslemek zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "has to feed the pet",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "Evcil hayvanını beslemek zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has to feed the pet",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "Evcil hayvanını beslemek zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has to feed the pet",
       "does"
      ],
      [
       "in the garden",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "okuldan önce",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "Evcil hayvanını beslemek zorunda.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has to feed the pet",
       "does"
      ],
      [
       "in the garden",
       "where"
      ],
      [
       "before school",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 35 ----------
UNITS_KEY.push({
 "L": {
  "rank": "City Explorer",
  "theme": "City Life",
  "tr": "Şehir hayatı",
  "icon": "🏙️",
  "song": {
   "title": "Big City",
   "lines": [
    "The <b>building</b> is taller than the tree,",
    "The <b>bridge</b> is longer than you can see,",
    "The <b>traffic</b> is too loud for me,",
    "But the <b>square</b> is as nice as can be!"
   ]
  },
  "cards": [
   {
    "e": "🏢",
    "w": "building",
    "ipa": "/ˈbɪldɪŋ/",
    "tr": "Bina",
    "ex": "This building is taller than that one."
   },
   {
    "e": "🚦",
    "w": "traffic",
    "ipa": "/ˈtræfɪk/",
    "tr": "Trafik",
    "ex": "The traffic is too heavy for a small bus."
   },
   {
    "e": "🌉",
    "w": "bridge",
    "ipa": "/brɪdʒ/",
    "tr": "Köprü",
    "ex": "The bridge is longer than the street."
   },
   {
    "e": "⛲",
    "w": "square",
    "ipa": "/skwɛr/",
    "tr": "Meydan",
    "ex": "The square is not as quiet as the park."
   },
   {
    "e": "🏛️",
    "w": "museum",
    "ipa": "/mjuˈziəm/",
    "tr": "Müze",
    "ex": "The museum is not as old as the tower."
   },
   {
    "e": "🗼",
    "w": "tower",
    "ipa": "/ˈtaʊər/",
    "tr": "Kule",
    "ex": "The tower is tall enough to see the whole city."
   },
   {
    "e": "👥",
    "w": "crowd",
    "ipa": "/kraʊd/",
    "tr": "Kalabalık",
    "ex": "The crowd is too big for this small street."
   },
   {
    "e": "🏘️",
    "w": "neighbourhood",
    "ipa": "/ˈneɪbərˌhʊd/",
    "tr": "Mahalle",
    "ex": "My neighbourhood is quieter than the city centre."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "traffic",
    "options": [
     "traffic",
     "bridge",
     "tower"
    ],
    "hint": [
     "Cars, buses and motorbikes make it on the road. It can be very loud!",
     "Yolda arabalar, otobüsler ve motosikletler yapar. Çok gürültülü olabilir!"
    ]
   },
   {
    "type": "pick",
    "q": "It is a place with many old things to see. People go there to learn about history. What is it?",
    "tr": "Birçok eski şeyin görülebildiği bir yerdir. İnsanlar tarihi öğrenmek için oraya gider. Nedir?",
    "options": [
     {
      "e": "🏛️",
      "v": "museum"
     },
     {
      "e": "🗼",
      "v": "tower"
     },
     {
      "e": "🌉",
      "v": "bridge"
     },
     {
      "e": "🏢",
      "v": "building"
     }
    ],
    "answer": "museum",
    "hint": [
     "You can see old paintings and old objects inside it.",
     "İçinde eski resimler ve eski eşyalar görebilirsin."
    ]
   },
   {
    "type": "listen",
    "say": "The tower is taller than every building in the neighbourhood. We can see the whole city from the top.",
    "q": "What is taller than every building?",
    "tr": "Hangisi bütün binalardan daha yüksek?",
    "options": [
     {
      "e": "🗼",
      "v": "tower"
     },
     {
      "e": "🌉",
      "v": "bridge"
     },
     {
      "e": "🏛️",
      "v": "museum"
     }
    ],
    "answer": "tower",
    "hint": [
     "Listen again: “The t… is taller than…”.",
     "Tekrar dinle: “The t… is taller than…”."
    ]
   },
   {
    "type": "write",
    "e": "🏛️",
    "sentence": "The museum is not as ___ as the tower.",
    "answer": "old",
    "mask": "O _ _",
    "tr": "Müze kule kadar eski değil.",
    "hint": [
     "We say “not as ___ as” to compare two things. o - l - d",
     "İki şeyi karşılaştırmak için “not as ___ as” deriz. o - l - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "Istanbul is bigger than Bursa.",
    "tr": "İstanbul Bursa'dan daha büyük."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "square",
    "hint": [
     "It is a big open place in the middle of a town, often with a fountain. s - q - u - a - r - e",
     "Şehrin ortasındaki büyük, açık bir yerdir; çoğu zaman bir çeşmesi olur. s - q - u - a - r - e"
    ]
   },
   {
    "type": "dictation",
    "word": "bridge",
    "e": "🌉",
    "hint": [
     "It goes over a river or the sea. It starts with “b”.",
     "Nehrin ya da denizin üzerinden geçer. “b” ile başlıyor."
    ]
   },
   {
    "type": "order",
    "tr": "Müze kule kadar eski değil.",
    "answer": "The museum is not as old as the tower",
    "extra": "than",
    "hint": [
     "Start with: “The museum is not …”",
     "Şöyle başla: “The museum is not …”"
    ]
   },
   {
    "type": "story",
    "say": "Can lives in a quiet neighbourhood. His school is in the city centre. The traffic there is too heavy for his bike, so he takes the bus. The bus is not as fast as a bike, but it is safer.",
    "q": "Why does Can take the bus?",
    "tr": "Can neden otobüse biniyor?",
    "options": [
     "The traffic is too heavy for his bike",
     "His bike is broken",
     "The school is too close"
    ],
    "answer": "The traffic is too heavy for his bike",
    "hint": [
     "Listen for: “…too heavy for his b…”.",
     "Şunu dinle: “…too heavy for his b…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "İstanbul Bursa'dan daha büyük.",
    "answer": "Istanbul is bigger than Bursa."
   }
  ]
 },
 "songs": [
  {
   "title": "Museum Day",
   "lines": [
    "Let's visit the <b>museum</b> today,",
    "It is older than my grandma, they say,",
    "The <b>tower</b> is not as old, it's true,",
    "But it is taller than the museum, too!"
   ]
  },
  {
   "title": "Crowd in the Square",
   "lines": [
    "There is a big <b>crowd</b> in the <b>square</b>,",
    "It is too noisy to stay there,",
    "Let's walk to a street that is quiet and calm,",
    "Where the cars are slow and there is no alarm!"
   ]
  },
  {
   "title": "My Neighbourhood",
   "lines": [
    "My <b>neighbourhood</b> is small and sweet,",
    "It is quieter than the big street,",
    "Every <b>building</b> is old and neat,",
    "Every friend is nice to meet!"
   ]
  },
  {
   "title": "Over the Bridge",
   "lines": [
    "Walk over the <b>bridge</b>, it is not too long,",
    "Listen to the <b>traffic</b> sing its song,",
    "Look at the <b>tower</b> shining bright,",
    "Istanbul is beautiful at night!"
   ]
  }
 ],
 "reading": {
  "title": "Mert in Istanbul",
  "e": "🏙️",
  "lines": [
   [
    "Mert lives in Ankara, but today he is visiting his cousin Elif in Istanbul.",
    "Mert Ankara'da yaşıyor ama bugün İstanbul'da kuzeni Elif'i ziyaret ediyor."
   ],
   [
    "Istanbul is much bigger than Ankara, and the traffic is worse.",
    "İstanbul Ankara'dan çok daha büyük ve trafik daha kötü."
   ],
   [
    "The traffic on the bridge is too heavy, so they take a ferry.",
    "Köprüdeki trafik çok yoğun, bu yüzden vapura biniyorlar."
   ],
   [
    "First, they visit the museum. It is not as big as Elif's school, but it is very interesting.",
    "Önce müzeyi geziyorlar. Elif'in okulu kadar büyük değil ama çok ilginç."
   ],
   [
    "Then they go to the tower. It is taller than every building in Elif's neighbourhood.",
    "Sonra kuleye gidiyorlar. Elif'in mahallesindeki bütün binalardan daha yüksek."
   ],
   [
    "After that, they walk to the square, but there is a big crowd.",
    "Ondan sonra meydana yürüyorlar ama orada büyük bir kalabalık var."
   ],
   [
    "The square is too noisy for a picnic, so they go home.",
    "Meydan piknik için fazla gürültülü, bu yüzden eve gidiyorlar."
   ],
   [
    "Mert thinks Istanbul is not as quiet as Ankara, but he loves it!",
    "Mert'e göre İstanbul Ankara kadar sakin değil ama onu çok seviyor!"
   ]
  ],
  "qs": [
   {
    "q": "Why do they take a ferry?",
    "tr": "Neden vapura biniyorlar?",
    "options": [
     "The traffic is too heavy",
     "The bridge is closed",
     "It is cheaper"
    ],
    "answer": "The traffic is too heavy"
   },
   {
    "q": "What is taller than every building in Elif's neighbourhood?",
    "tr": "Elif'in mahallesindeki bütün binalardan daha yüksek olan nedir?",
    "options": [
     "the tower",
     "the museum",
     "the bridge"
    ],
    "answer": "the tower"
   },
   {
    "q": "Why do they go home?",
    "tr": "Neden eve gidiyorlar?",
    "options": [
     "The square is too noisy for a picnic",
     "It is raining",
     "They are hungry"
    ],
    "answer": "The square is too noisy for a picnic"
   }
  ]
 },
 "listening": [
  {
   "say": "The bridge is longer than the street, but the street is busier. Many cars cross it every day.",
   "q": "What is longer than the street?",
   "tr": "Sokaktan daha uzun olan nedir?",
   "options": [
    {
     "e": "🌉",
     "v": "bridge"
    },
    {
     "e": "🗼",
     "v": "tower"
    },
    {
     "e": "🏢",
     "v": "building"
    }
   ],
   "answer": "bridge"
  },
  {
   "say": "The museum is not as new as the school. My grandfather visited it when he was a boy.",
   "q": "What is not as new as the school?",
   "tr": "Okul kadar yeni olmayan nedir?",
   "options": [
    {
     "e": "🏛️",
     "v": "museum"
    },
    {
     "e": "🗼",
     "v": "tower"
    },
    {
     "e": "🌉",
     "v": "bridge"
    }
   ],
   "answer": "museum"
  },
  {
   "say": "The street is too noisy for me to sleep. There is a lot of traffic at night.",
   "q": "Why can't he sleep?",
   "tr": "Neden uyuyamıyor?",
   "options": [
    {
     "e": "🚦",
     "v": "traffic"
    },
    {
     "e": "👥",
     "v": "crowd"
    },
    {
     "e": "🎵",
     "v": "music"
    }
   ],
   "answer": "traffic"
  },
  {
   "say": "There was a big crowd in the square. It was too crowded to see the show.",
   "q": "What was in the square?",
   "tr": "Meydanda ne vardı?",
   "options": [
    {
     "e": "👥",
     "v": "crowd"
    },
    {
     "e": "🚦",
     "v": "traffic"
    },
    {
     "e": "🌧️",
     "v": "rain"
    }
   ],
   "answer": "crowd"
  },
  {
   "say": "This building is taller than that one. It is the tallest in our neighbourhood.",
   "q": "What is taller than that one?",
   "tr": "Ondan daha yüksek olan nedir?",
   "options": [
    {
     "e": "🏢",
     "v": "building"
    },
    {
     "e": "🗼",
     "v": "tower"
    },
    {
     "e": "🌳",
     "v": "tree"
    }
   ],
   "answer": "building"
  }
 ],
 "speaking": [
  {
   "e": "🏙️",
   "en": "Istanbul is bigger than Bursa.",
   "tr": "İstanbul Bursa'dan daha büyük."
  },
  {
   "e": "🏛️",
   "en": "The museum is not as old as the tower.",
   "tr": "Müze kule kadar eski değil."
  },
  {
   "e": "🚦",
   "en": "The street is too noisy.",
   "tr": "Sokak fazla gürültülü."
  },
  {
   "e": "🗼",
   "en": "The tower is tall enough to see the whole city.",
   "tr": "Kule bütün şehri görecek kadar yüksek."
  },
  {
   "e": "🌉",
   "en": "Is this bridge as long as that bridge?",
   "tr": "Bu köprü şu köprü kadar uzun mu?"
  }
 ],
 "write": {
  "title": "My City",
  "en": "Write about your city or town. Is it big or small? Is it noisy? What is your favourite place?",
  "tr": "Şehrini ya da kasabanı anlat. Büyük mü küçük mü? Gürültülü mü? En sevdiğin yer neresi?",
  "starters": [
   "I live in",
   "My neighbourhood is",
   "It is bigger than",
   "It is not as … as",
   "My favourite place is",
   "It is too … for me, but"
  ],
  "checks": [
   {
    "re": /\b(bigger|smaller|older|newer|taller|noisier|quieter|busier|better|longer) than\b|\bas \w+ as\b/,
    "t": "Karşılaştırma kullan (bigger than / not as old as)"
   },
   {
    "re": /\b(too|enough)\b/,
    "t": "“too …” ya da “… enough” kullan (too noisy)"
   },
   {
    "re": /\b(building|traffic|bridge|square|museum|tower|crowd|neighbourhood)\b/,
    "t": "Şehirle ilgili bir kelime yaz (museum, bridge, crowd…)"
   }
  ],
  "model": "I live in Izmir, and my neighbourhood is quieter than the city centre. There is a big square near my house, but the crowd there is too noisy at the weekend, so I do not go there then. My favourite place is the old museum because it is not as crowded as the shopping centre. First I look at the old things, then I eat an ice cream. The bridge over the river is long enough for a nice walk after school."
 },
 "towers": [
  {
   "e": "🏙️",
   "title": "Big City",
   "steps": [
    {
     "tr": [
      [
       "Bursa'dan daha gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "is noisier than Bursa",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "İstanbul",
       "who"
      ],
      [
       "Bursa'dan daha gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "Istanbul",
       "who"
      ],
      [
       "is noisier than Bursa",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "İstanbul",
       "who"
      ],
      [
       "merkezde",
       "where"
      ],
      [
       "Bursa'dan daha gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "Istanbul",
       "who"
      ],
      [
       "is noisier than Bursa",
       "does"
      ],
      [
       "in the centre",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "İstanbul",
       "who"
      ],
      [
       "geceleri",
       "when"
      ],
      [
       "merkezde",
       "where"
      ],
      [
       "Bursa'dan daha gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "Istanbul",
       "who"
      ],
      [
       "is noisier than Bursa",
       "does"
      ],
      [
       "in the centre",
       "where"
      ],
      [
       "at night",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🏛️",
   "title": "Old Museum",
   "steps": [
    {
     "tr": [
      [
       "Meydan kadar kalabalık değil.",
       "does"
      ]
     ],
     "en": [
      [
       "is not as crowded as the square",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Müze",
       "who"
      ],
      [
       "meydan kadar kalabalık değil.",
       "does"
      ]
     ],
     "en": [
      [
       "The museum",
       "who"
      ],
      [
       "is not as crowded as the square",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Müze",
       "who"
      ],
      [
       "eski şehirde",
       "where"
      ],
      [
       "meydan kadar kalabalık değil.",
       "does"
      ]
     ],
     "en": [
      [
       "The museum",
       "who"
      ],
      [
       "is not as crowded as the square",
       "does"
      ],
      [
       "in the old town",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Müze",
       "who"
      ],
      [
       "pazartesi günü",
       "when"
      ],
      [
       "eski şehirde",
       "where"
      ],
      [
       "meydan kadar kalabalık değil.",
       "does"
      ]
     ],
     "en": [
      [
       "The museum",
       "who"
      ],
      [
       "is not as crowded as the square",
       "does"
      ],
      [
       "in the old town",
       "where"
      ],
      [
       "on Monday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🚦",
   "title": "Noisy Street",
   "steps": [
    {
     "tr": [
      [
       "Fazla gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "is too noisy",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Sokak",
       "who"
      ],
      [
       "fazla gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "The street",
       "who"
      ],
      [
       "is too noisy",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Sokak",
       "who"
      ],
      [
       "köprünün yanında",
       "where"
      ],
      [
       "fazla gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "The street",
       "who"
      ],
      [
       "is too noisy",
       "does"
      ],
      [
       "near the bridge",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Sokak",
       "who"
      ],
      [
       "her gece",
       "when"
      ],
      [
       "köprünün yanında",
       "where"
      ],
      [
       "fazla gürültülü.",
       "does"
      ]
     ],
     "en": [
      [
       "The street",
       "who"
      ],
      [
       "is too noisy",
       "does"
      ],
      [
       "near the bridge",
       "where"
      ],
      [
       "every night",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 36 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Kitchen Star",
  "theme": "Cooking",
  "tr": "Yemek yapma",
  "icon": "🍳",
  "song": {
   "title": "Let's Cook",
   "lines": [
    "First, read the <b>recipe</b>, one, two, three,",
    "Then add a little <b>sugar</b> for me,",
    "Stir it in the <b>bowl</b> with a <b>spoon</b>,",
    "Finally, we eat it all very soon!"
   ]
  },
  "cards": [
   {
    "e": "📝",
    "w": "recipe",
    "ipa": "/ˈrɛsəpi/",
    "tr": "Yemek tarifi",
    "ex": "Read the recipe first, and then get a few eggs."
   },
   {
    "e": "🌾",
    "w": "flour",
    "ipa": "/ˈflaʊər/",
    "tr": "Un",
    "ex": "How much flour do we need? Just a little."
   },
   {
    "e": "🍬",
    "w": "sugar",
    "ipa": "/ˈʃʊɡər/",
    "tr": "Şeker",
    "ex": "Add a little sugar to the milk."
   },
   {
    "e": "🧈",
    "w": "butter",
    "ipa": "/ˈbʌtər/",
    "tr": "Tereyağı",
    "ex": "How much butter do you need for the cake?"
   },
   {
    "e": "🔥",
    "w": "oven",
    "ipa": "/ˈʌvən/",
    "tr": "Fırın",
    "ex": "Turn on the oven and wait a few minutes."
   },
   {
    "e": "🥣",
    "w": "bowl",
    "ipa": "/boʊl/",
    "tr": "Kase",
    "ex": "Put a few apples in the bowl."
   },
   {
    "e": "🥘",
    "w": "pan",
    "ipa": "/pæn/",
    "tr": "Tava",
    "ex": "Put a little oil in the pan and heat it."
   },
   {
    "e": "🥄",
    "w": "spoon",
    "ipa": "/spun/",
    "tr": "Kaşık",
    "ex": "Use a spoon to add a little milk."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "recipe",
    "options": [
     "recipe",
     "oven",
     "spoon"
    ],
    "hint": [
     "It tells you what to use and what to do to make a cake.",
     "Kek yapmak için neyi kullanacağını ve ne yapacağını anlatır."
    ]
   },
   {
    "type": "pick",
    "q": "It tells you how to make a cake step by step. What is it?",
    "tr": "Kek yapmayı adım adım anlatır. Nedir?",
    "options": [
     {
      "e": "📝",
      "v": "recipe"
     },
     {
      "e": "🔥",
      "v": "oven"
     },
     {
      "e": "🥣",
      "v": "bowl"
     },
     {
      "e": "🥄",
      "v": "spoon"
     }
    ],
    "answer": "recipe",
    "hint": [
     "You read it before you start cooking.",
     "Yemek yapmaya başlamadan önce onu okursun."
    ]
   },
   {
    "type": "listen",
    "say": "How much flour do we need for the cake? We need two cups, so put a little more in the bowl.",
    "q": "Where do they put the flour?",
    "tr": "Unu nereye koyuyorlar?",
    "options": [
     {
      "e": "🥣",
      "v": "bowl"
     },
     {
      "e": "🥘",
      "v": "pan"
     },
     {
      "e": "🔥",
      "v": "oven"
     }
    ],
    "answer": "bowl",
    "hint": [
     "Listen again: “…in the b…”.",
     "Tekrar dinle: “…in the b…”."
    ]
   },
   {
    "type": "write",
    "e": "🍬",
    "sentence": "Add a ___ sugar to the bowl.",
    "answer": "little",
    "mask": "L _ _ _ _ _",
    "tr": "Kaseye biraz şeker ekle.",
    "hint": [
     "We say “a little” for things we cannot count, like sugar. l - i - t - t - l - e",
     "Sayamadığımız şeyler için “a little” deriz, mesela şeker. l - i - t - t - l - e"
    ]
   },
   {
    "type": "speak",
    "sentence": "How much flour do we need?",
    "tr": "Ne kadar una ihtiyacımız var?"
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "sugar",
    "hint": [
     "It is white and sweet. You put it in tea and cakes. s - u - g - a - r",
     "Beyaz ve tatlıdır. Çaya ve keke koyarsın. s - u - g - a - r"
    ]
   },
   {
    "type": "dictation",
    "word": "spoon",
    "e": "🥄",
    "hint": [
     "You use it to stir and to eat soup. It starts with “s”.",
     "Karıştırmak ve çorba içmek için kullanırsın. “s” ile başlıyor."
    ]
   },
   {
    "type": "order",
    "tr": "Önce tarifi dikkatlice oku.",
    "answer": "First read the recipe carefully",
    "extra": "then",
    "hint": [
     "Start with: “First read …”",
     "Şöyle başla: “First read …”"
    ]
   },
   {
    "type": "story",
    "say": "Emre is helping his dad in the kitchen. First, Emre puts a few eggs in a bowl. Then he adds a little flour and stirs it with a spoon. Finally, his dad puts the pan on the stove.",
    "q": "What does Emre put in the bowl first?",
    "tr": "Emre kaseye önce ne koyuyor?",
    "options": [
     "a few eggs",
     "a little flour",
     "some milk"
    ],
    "answer": "a few eggs",
    "hint": [
     "Listen for the second sentence: “…puts a few e…”.",
     "İkinci cümleyi dinle: “…puts a few e…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Önce fırını aç.",
    "answer": "First, turn on the oven."
   }
  ]
 },
 "songs": [
  {
   "title": "How Much Flour?",
   "lines": [
    "How much <b>flour</b> do we need today?",
    "Just a little, don't spill it away,",
    "How many eggs? A few, not ten,",
    "Now mix it again, and again, and again!"
   ]
  },
  {
   "title": "Hot Oven",
   "lines": [
    "Turn on the <b>oven</b>, hot, hot, hot,",
    "Put the cake in the <b>pan</b>, not a lot,",
    "Wait a few minutes, don't open the door,",
    "Then we eat, and we want more!"
   ]
  },
  {
   "title": "Butter and Sugar",
   "lines": [
    "Melt a little <b>butter</b>, soft and sweet,",
    "Add a little <b>sugar</b>, what a treat,",
    "Mix it up and don't be late,",
    "Mum is waiting with a plate!"
   ]
  },
  {
   "title": "Recipe Rap",
   "lines": [
    "Open the <b>recipe</b> and read it out,",
    "Take a <b>spoon</b>, but don't shout,",
    "First, then, after that, and last,",
    "Finally the cake is done, so fast!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep's Cake",
  "e": "🎂",
  "lines": [
   [
    "Zeynep wants to make a cake for her mum's birthday.",
    "Zeynep annesinin doğum günü için bir kek yapmak istiyor."
   ],
   [
    "First, she reads the recipe. It says: “Use two cups of flour and a little sugar.”",
    "Önce tarife bakıyor. Şöyle yazıyor: “İki fincan un ve biraz şeker kullan.”"
   ],
   [
    "Then she asks her brother Kerem, “How much butter do we need?”",
    "Sonra ağabeyi Kerem'e soruyor: “Ne kadar tereyağı lazım?”"
   ],
   [
    "Kerem says, “Just a little. And add a few eggs, but not too many!”",
    "Kerem diyor ki: “Sadece biraz. Bir de birkaç yumurta ekle ama çok değil!”"
   ],
   [
    "After that, they mix everything in a big bowl with a spoon.",
    "Ondan sonra her şeyi büyük bir kasede kaşıkla karıştırıyorlar."
   ],
   [
    "Next, Kerem turns on the oven and waits for a few minutes.",
    "Sonra Kerem fırını açıyor ve birkaç dakika bekliyor."
   ],
   [
    "Finally, they put the cake in the oven for thirty minutes.",
    "Son olarak keki otuz dakika fırına koyuyorlar."
   ],
   [
    "Mum loves the cake, and everybody says, “Happy birthday!”",
    "Annesi keki çok seviyor ve herkes “İyi ki doğdun!” diyor."
   ]
  ],
  "qs": [
   {
    "q": "What does Zeynep read first?",
    "tr": "Zeynep önce neyi okuyor?",
    "options": [
     "the recipe",
     "a book",
     "a letter"
    ],
    "answer": "the recipe"
   },
   {
    "q": "How much butter do they need?",
    "tr": "Ne kadar tereyağına ihtiyaçları var?",
    "options": [
     "a little",
     "a lot",
     "a few"
    ],
    "answer": "a little"
   },
   {
    "q": "What do they use to mix everything?",
    "tr": "Her şeyi karıştırmak için ne kullanıyorlar?",
    "options": [
     "a spoon",
     "a pan",
     "an oven"
    ],
    "answer": "a spoon"
   }
  ]
 },
 "listening": [
  {
   "say": "How much sugar do we need? Just a little. We need two cups of flour, but only a little sugar.",
   "q": "What do we need only a little of?",
   "tr": "Sadece biraz neye ihtiyacımız var?",
   "options": [
    {
     "e": "🍬",
     "v": "sugar"
    },
    {
     "e": "🌾",
     "v": "flour"
    },
    {
     "e": "🥛",
     "v": "milk"
    }
   ],
   "answer": "sugar"
  },
  {
   "say": "Put a little butter in the pan. Then wait a few minutes.",
   "q": "Where do you put the butter?",
   "tr": "Tereyağını nereye koyuyorsun?",
   "options": [
    {
     "e": "🥘",
     "v": "pan"
    },
    {
     "e": "🥣",
     "v": "bowl"
    },
    {
     "e": "🔥",
     "v": "oven"
    }
   ],
   "answer": "pan"
  },
  {
   "say": "Mix the eggs and the milk in the bowl. Use a big spoon.",
   "q": "What do you use to mix?",
   "tr": "Karıştırmak için ne kullanıyorsun?",
   "options": [
    {
     "e": "🥄",
     "v": "spoon"
    },
    {
     "e": "🥣",
     "v": "bowl"
    },
    {
     "e": "🥘",
     "v": "pan"
    }
   ],
   "answer": "spoon"
  },
  {
   "say": "How many eggs do you need? Just a few. Then turn on the oven.",
   "q": "What do you turn on?",
   "tr": "Neyi açıyorsun?",
   "options": [
    {
     "e": "🔥",
     "v": "oven"
    },
    {
     "e": "💡",
     "v": "light"
    },
    {
     "e": "📺",
     "v": "TV"
    }
   ],
   "answer": "oven"
  },
  {
   "say": "My grandma has an old recipe for cookies. First, we need some flour and sugar.",
   "q": "What does grandma have?",
   "tr": "Büyükannenin elinde ne var?",
   "options": [
    {
     "e": "📝",
     "v": "recipe"
    },
    {
     "e": "🥄",
     "v": "spoon"
    },
    {
     "e": "🥘",
     "v": "pan"
    }
   ],
   "answer": "recipe"
  }
 ],
 "speaking": [
  {
   "e": "📝",
   "en": "First, read the recipe.",
   "tr": "Önce tarifi oku."
  },
  {
   "e": "🥣",
   "en": "Add a few eggs to the bowl.",
   "tr": "Kaseye birkaç yumurta ekle."
  },
  {
   "e": "🌾",
   "en": "How much flour do we need?",
   "tr": "Ne kadar una ihtiyacımız var?"
  },
  {
   "e": "🍬",
   "en": "Put a little sugar in the bowl.",
   "tr": "Kaseye biraz şeker koy."
  },
  {
   "e": "🔥",
   "en": "Finally, turn on the oven.",
   "tr": "Son olarak fırını aç."
  }
 ],
 "write": {
  "title": "My Recipe",
  "en": "Write a recipe for your favourite food. What do you need? What do you do first?",
  "tr": "En sevdiğin yemeğin tarifini yaz. Neye ihtiyacın var? Önce ne yapıyorsun?",
  "starters": [
   "To make this, you need",
   "First,",
   "Then,",
   "After that,",
   "Finally,",
   "How much … do you need?"
  ],
  "checks": [
   {
    "re": /\b(first|then|after that|finally)\b/,
    "t": "Sıra bildiren kelimeler kullan (First, Then, After that, Finally)"
   },
   {
    "re": /\b(a few|a little|how much|how many)\b/,
    "t": "“a few / a little” ya da “how much / how many” kullan"
   },
   {
    "re": /\b(recipe|flour|sugar|butter|oven|bowl|pan|spoon)\b/,
    "t": "Mutfakla ilgili bir kelime yaz (bowl, pan, spoon…)"
   }
  ],
  "model": "Here is my recipe for pancakes. You need a little flour, a few eggs and some milk. First, put the flour in a big bowl. Then add the eggs and stir with a spoon. After that, put a little butter in the pan and heat it. Finally, pour some of the mixture into the pan and cook it for two minutes. How many pancakes can you eat? I can eat five, because they are delicious!"
 },
 "towers": [
  {
   "e": "🥣",
   "title": "Sweet Bowl",
   "steps": [
    {
     "tr": [
      [
       "Biraz şeker ekliyor.",
       "does"
      ]
     ],
     "en": [
      [
       "adds a little sugar",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "biraz şeker ekliyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "adds a little sugar",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "kaseye",
       "where"
      ],
      [
       "biraz şeker ekliyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "adds a little sugar",
       "does"
      ],
      [
       "to the bowl",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "önce",
       "when"
      ],
      [
       "kaseye",
       "where"
      ],
      [
       "biraz şeker ekliyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "adds a little sugar",
       "does"
      ],
      [
       "to the bowl",
       "where"
      ],
      [
       "first",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🔥",
   "title": "Hot Oven",
   "steps": [
    {
     "tr": [
      [
       "Fırını açıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "turns on the oven",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "fırını açıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "turns on the oven",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "fırını açıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "turns on the oven",
       "does"
      ],
      [
       "in the kitchen",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "ondan sonra",
       "when"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "fırını açıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "turns on the oven",
       "does"
      ],
      [
       "in the kitchen",
       "where"
      ],
      [
       "after that",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🥘",
   "title": "Pan Time",
   "steps": [
    {
     "tr": [
      [
       "Biraz tereyağı eritiyor.",
       "does"
      ]
     ],
     "en": [
      [
       "melts a little butter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "biraz tereyağı eritiyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "melts a little butter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "tavada",
       "where"
      ],
      [
       "biraz tereyağı eritiyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "melts a little butter",
       "does"
      ],
      [
       "in the pan",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "pazar günü",
       "when"
      ],
      [
       "tavada",
       "where"
      ],
      [
       "biraz tereyağı eritiyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "melts a little butter",
       "does"
      ],
      [
       "in the pan",
       "where"
      ],
      [
       "on Sunday",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 37 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Film Critic",
  "theme": "Films and Media",
  "tr": "Filmler ve medya",
  "icon": "🎬",
  "song": {
   "title": "Movie Night",
   "lines": [
    "We have just seen a funny <b>film</b>,",
    "Mum has already made the popcorn,",
    "Have you watched the <b>cartoon</b> yet?",
    "Let's watch it on the big <b>screen</b>!"
   ]
  },
  "cards": [
   {
    "e": "🎭",
    "w": "actor",
    "ipa": "/ˈæktər/",
    "tr": "Oyuncu",
    "ex": "Has the actor already arrived at the cinema?"
   },
   {
    "e": "🎞️",
    "w": "film",
    "ipa": "/fɪlm/",
    "tr": "Film",
    "ex": "We have just watched a funny film."
   },
   {
    "e": "🐭",
    "w": "cartoon",
    "ipa": "/kɑrˈtun/",
    "tr": "Çizgi film",
    "ex": "I have just watched a cartoon."
   },
   {
    "e": "📰",
    "w": "news",
    "ipa": "/nuz/",
    "tr": "Haberler",
    "ex": "Have you seen the news yet?"
   },
   {
    "e": "📺",
    "w": "channel",
    "ipa": "/ˈtʃænəl/",
    "tr": "Kanal",
    "ex": "Mum has already changed the channel."
   },
   {
    "e": "🖥️",
    "w": "screen",
    "ipa": "/skrin/",
    "tr": "Ekran",
    "ex": "Dad has just cleaned the TV screen."
   },
   {
    "e": "📢",
    "w": "advert",
    "ipa": "/ˈædˌvɜrt/",
    "tr": "Reklam",
    "ex": "Have you seen the new advert yet?"
   },
   {
    "e": "🎙️",
    "w": "podcast",
    "ipa": "/ˈpɑdˌkæst/",
    "tr": "Podcast",
    "ex": "Kerem has already listened to this podcast."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "film",
    "options": [
     "film",
     "actor",
     "news"
    ],
    "hint": [
     "You can watch it at the cinema. It tells a story!",
     "Sinemada izleyebilirsin. Bir hikâye anlatır!"
    ]
   },
   {
    "type": "pick",
    "q": "You can change it with the remote control to watch something else on TV. What is it?",
    "tr": "Televizyonda başka bir şey izlemek için onu kumandayla değiştirirsin. Nedir?",
    "options": [
     {
      "e": "📺",
      "v": "channel"
     },
     {
      "e": "🖥️",
      "v": "screen"
     },
     {
      "e": "📰",
      "v": "news"
     },
     {
      "e": "📢",
      "v": "advert"
     }
    ],
    "answer": "channel",
    "hint": [
     "Mum has already changed it. It starts with “ch”.",
     "Annem onu çoktan değiştirdi. “ch” ile başlıyor."
    ]
   },
   {
    "type": "listen",
    "say": "My brother has already watched the new cartoon twice, but I haven't seen it yet.",
    "q": "What has the brother already watched?",
    "tr": "Kardeşi neyi çoktan izledi?",
    "options": [
     {
      "e": "🐭",
      "v": "cartoon"
     },
     {
      "e": "🎞️",
      "v": "film"
     },
     {
      "e": "📰",
      "v": "news"
     }
    ],
    "answer": "cartoon",
    "hint": [
     "Listen again: “…the new c…”.",
     "Tekrar dinle: “…the new c…”."
    ]
   },
   {
    "type": "write",
    "e": "🎞️",
    "sentence": "My sister has ___ watched this film.",
    "answer": "already",
    "mask": "A _ _ _ _ _ _",
    "tr": "Kız kardeşim bu filmi çoktan izledi.",
    "hint": [
     "“Already” means “çoktan”. a - l - r - e - a - d - y",
     "“Already” “çoktan” demektir. a - l - r - e - a - d - y"
    ]
   },
   {
    "type": "speak",
    "sentence": "I have just watched a cartoon.",
    "tr": "Az önce bir çizgi film izledim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "screen",
    "hint": [
     "You watch films on a big one at the cinema! s - c - r - e - e - n",
     "Sinemada filmleri büyük birinde izlersin! s - c - r - e - e - n"
    ]
   },
   {
    "type": "dictation",
    "word": "actor",
    "e": "🎭",
    "hint": [
     "He or she plays a person in a film. It starts with “a”.",
     "Filmde bir kişiyi canlandırır. “a” ile başlıyor."
    ]
   },
   {
    "type": "order",
    "tr": "Ece az önce haberleri izledi.",
    "answer": "Ece has just watched the news",
    "extra": "watching",
    "hint": [
     "Start with: “Ece has just …”",
     "Şöyle başla: “Ece has just …”"
    ]
   },
   {
    "type": "story",
    "say": "Defne has just come home from the cinema. She has already told her mum about the film. The actor was very funny. Defne has not seen the second film yet.",
    "q": "What has Defne already told her mum about?",
    "tr": "Defne annesine neyi çoktan anlattı?",
    "options": [
     "the film",
     "the news",
     "the advert"
    ],
    "answer": "the film",
    "hint": [
     "Listen for the second sentence: “…told her mum about the f…”.",
     "İkinci cümleyi dinle: “…told her mum about the f…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Haberleri izledin mi?",
    "answer": "Have you seen the news yet?"
   }
  ]
 },
 "songs": [
  {
   "title": "Channel Surfing",
   "lines": [
    "I have just changed the <b>channel</b>,",
    "Have you seen the <b>news</b> yet?",
    "No, I haven't, not yet,",
    "Let's turn it on and not forget!"
   ]
  },
  {
   "title": "Star Actor",
   "lines": [
    "The <b>actor</b> has just walked in,",
    "He has already learned his part,",
    "Have you seen his new <b>film</b> yet?",
    "It is a work of art!"
   ]
  },
  {
   "title": "Funny Advert",
   "lines": [
    "I have just seen a funny <b>advert</b>,",
    "It has already made me smile,",
    "Have you seen it yet, my friend?",
    "Watch it and you will laugh a while!"
   ]
  },
  {
   "title": "My Podcast",
   "lines": [
    "I have just found a new <b>podcast</b>,",
    "I have already heard two songs,",
    "Have you listened to it yet?",
    "It is fun and it isn't long!"
   ]
  }
 ],
 "reading": {
  "title": "Kerem's Movie Day",
  "e": "🎬",
  "lines": [
   [
    "It is Saturday, and Kerem is at home with his sister Elif.",
    "Cumartesi ve Kerem evde, kız kardeşi Elif'le birlikte."
   ],
   [
    "They have just watched a funny cartoon on the big screen.",
    "Büyük ekranda komik bir çizgi film izlediler."
   ],
   [
    "Elif has already eaten all the popcorn, but Kerem has not finished his yet.",
    "Elif patlamış mısırın hepsini çoktan yedi ama Kerem henüz bitirmedi."
   ],
   [
    "Now Kerem wants to change the channel because he has not seen the news yet.",
    "Şimdi Kerem kanalı değiştirmek istiyor çünkü haberleri henüz izlemedi."
   ],
   [
    "Elif says, “Have you seen the new advert for the film yet?”",
    "Elif, “Filmin yeni reklamını gördün mü?” diyor."
   ],
   [
    "Kerem says, “No, I haven't, but I have already heard a podcast about the actor.”",
    "Kerem, “Hayır, görmedim ama oyuncuyla ilgili bir podcast'i çoktan dinledim.” diyor."
   ],
   [
    "The actor is famous in Turkey, and he has just made a new film.",
    "Oyuncu Türkiye'de ünlü ve yeni bir film çekti."
   ],
   [
    "Kerem and Elif have already planned a trip to the cinema for next weekend.",
    "Kerem ve Elif gelecek hafta sonu için sinemaya gitmeyi çoktan planladılar."
   ],
   [
    "They cannot wait!",
    "Sabırsızlanıyorlar!"
   ]
  ],
  "qs": [
   {
    "q": "What have they just watched?",
    "tr": "Az önce ne izlediler?",
    "options": [
     "a funny cartoon",
     "the news",
     "a podcast"
    ],
    "answer": "a funny cartoon"
   },
   {
    "q": "Who has already eaten all the popcorn?",
    "tr": "Patlamış mısırın hepsini kim çoktan yedi?",
    "options": [
     "Elif",
     "Kerem",
     "Mum"
    ],
    "answer": "Elif"
   },
   {
    "q": "What has Kerem already heard?",
    "tr": "Kerem neyi çoktan dinledi?",
    "options": [
     "a podcast about the actor",
     "the news",
     "an advert"
    ],
    "answer": "a podcast about the actor"
   }
  ]
 },
 "listening": [
  {
   "say": "I have just seen the news on the other channel. It was about a football match.",
   "q": "What has the boy just seen?",
   "tr": "Erkek çocuk az önce ne izledi?",
   "options": [
    {
     "e": "📰",
     "v": "news"
    },
    {
     "e": "🎞️",
     "v": "film"
    },
    {
     "e": "🐭",
     "v": "cartoon"
    }
   ],
   "answer": "news"
  },
  {
   "say": "Dad has already turned off the TV, so we cannot watch the film.",
   "q": "What has Dad turned off?",
   "tr": "Babası neyi kapattı?",
   "options": [
    {
     "e": "📺",
     "v": "TV"
    },
    {
     "e": "📻",
     "v": "radio"
    },
    {
     "e": "💡",
     "v": "light"
    }
   ],
   "answer": "TV"
  },
  {
   "say": "Have you heard the new podcast yet? Zeynep has already listened to it on her phone.",
   "q": "What has Zeynep already listened to?",
   "tr": "Zeynep neyi çoktan dinledi?",
   "options": [
    {
     "e": "🎙️",
     "v": "podcast"
    },
    {
     "e": "🎵",
     "v": "song"
    },
    {
     "e": "📰",
     "v": "news"
    }
   ],
   "answer": "podcast"
  },
  {
   "say": "I have just watched an advert about a new toy. It made me laugh.",
   "q": "What was the advert about?",
   "tr": "Reklam neyle ilgiliydi?",
   "options": [
    {
     "e": "🧸",
     "v": "toy"
    },
    {
     "e": "🍔",
     "v": "food"
    },
    {
     "e": "🚗",
     "v": "car"
    }
   ],
   "answer": "toy"
  },
  {
   "say": "The actor has already arrived at the cinema, but the film has not started yet.",
   "q": "What has not started yet?",
   "tr": "Ne henüz başlamadı?",
   "options": [
    {
     "e": "🎞️",
     "v": "film"
    },
    {
     "e": "📰",
     "v": "news"
    },
    {
     "e": "🥳",
     "v": "party"
    }
   ],
   "answer": "film"
  }
 ],
 "speaking": [
  {
   "e": "🐭",
   "en": "I have just watched a cartoon.",
   "tr": "Az önce bir çizgi film izledim."
  },
  {
   "e": "📰",
   "en": "Have you seen the news yet?",
   "tr": "Haberleri izledin mi?"
  },
  {
   "e": "🎫",
   "en": "She has already bought the tickets.",
   "tr": "Biletleri çoktan aldı."
  },
  {
   "e": "🎙️",
   "en": "Mert has already listened to this podcast.",
   "tr": "Mert bu podcast'i çoktan dinledi."
  },
  {
   "e": "📺",
   "en": "We haven't changed the channel yet.",
   "tr": "Kanalı henüz değiştirmedik."
  }
 ],
 "write": {
  "title": "My Film and Media Day",
  "en": "Write about what you have watched or listened to. What have you just seen? What haven't you seen yet?",
  "tr": "Neler izlediğini ya da dinlediğini anlat. Az önce ne gördün? Henüz neyi görmedin?",
  "starters": [
   "I have just watched",
   "I have already seen",
   "I haven't seen",
   "My favourite actor is",
   "First, I",
   "Have you seen"
  ],
  "checks": [
   {
    "re": /\b(have|has|haven't|hasn't)\b/,
    "t": "“have / has” kullan (I have just watched…)"
   },
   {
    "re": /\b(just|already|yet)\b/,
    "t": "“just”, “already” ya da “yet” kullan (I have already seen…)"
   },
   {
    "re": /\b(film|actor|cartoon|news|channel|screen|advert|podcast)s?\b/,
    "t": "Medyayla ilgili bir kelime yaz (film, news, podcast…)"
   }
  ],
  "model": "I have just watched a great film with my cousin Can, and we loved it. The actor was funny, so we laughed a lot. First, we sat in front of the big screen, and then we ate popcorn. After that, I changed the channel because I wanted to see the news. My sister has already seen the film, but I haven't listened to her new podcast yet. Have you seen it yet?"
 },
 "towers": [
  {
   "e": "🎬",
   "title": "Film Time",
   "steps": [
    {
     "tr": [
      [
       "Çoktan bir film izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "has already watched a film",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "Çoktan bir film izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has already watched a film",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "sinemada",
       "where"
      ],
      [
       "Çoktan bir film izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has already watched a film",
       "does"
      ],
      [
       "at the cinema",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "bu öğleden sonra",
       "when"
      ],
      [
       "sinemada",
       "where"
      ],
      [
       "Çoktan bir film izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has already watched a film",
       "does"
      ],
      [
       "at the cinema",
       "where"
      ],
      [
       "this afternoon",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📺",
   "title": "TV Time",
   "steps": [
    {
     "tr": [
      [
       "Kanalı az önce değiştirdi.",
       "does"
      ]
     ],
     "en": [
      [
       "has just changed the channel",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "Kanalı az önce değiştirdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has just changed the channel",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "oturma odasında",
       "where"
      ],
      [
       "Kanalı az önce değiştirdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has just changed the channel",
       "does"
      ],
      [
       "in the living room",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "bugün",
       "when"
      ],
      [
       "oturma odasında",
       "where"
      ],
      [
       "Kanalı az önce değiştirdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has just changed the channel",
       "does"
      ],
      [
       "in the living room",
       "where"
      ],
      [
       "today",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🎙️",
   "title": "Podcast Day",
   "steps": [
    {
     "tr": [
      [
       "Bir podcast'i çoktan dinledi.",
       "does"
      ]
     ],
     "en": [
      [
       "has already listened to a podcast",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "Bir podcast'i çoktan dinledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "has already listened to a podcast",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "otobüste",
       "where"
      ],
      [
       "Bir podcast'i çoktan dinledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "has already listened to a podcast",
       "does"
      ],
      [
       "on the bus",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Can",
       "who"
      ],
      [
       "bu sabah",
       "when"
      ],
      [
       "otobüste",
       "where"
      ],
      [
       "Bir podcast'i çoktan dinledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "has already listened to a podcast",
       "does"
      ],
      [
       "on the bus",
       "where"
      ],
      [
       "this morning",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 38 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Weather Watcher",
  "theme": "Wild Weather",
  "tr": "Sert hava olayları",
  "icon": "⛈️",
  "song": {
   "title": "If It Rains",
   "lines": [
    "If it rains, I will take my <b>umbrella</b>,",
    "If it's sunny, we will play,",
    "If we see a <b>rainbow</b> in the sky,",
    "We will smile all day!"
   ]
  },
  "cards": [
   {
    "e": "⛈️",
    "w": "storm",
    "ipa": "/stɔrm/",
    "tr": "Fırtına",
    "ex": "If there is a storm, we will stay at home."
   },
   {
    "e": "🌩️",
    "w": "thunder",
    "ipa": "/ˈθʌndər/",
    "tr": "Gök gürültüsü",
    "ex": "If there is thunder, my dog will hide under the bed."
   },
   {
    "e": "⚡",
    "w": "lightning",
    "ipa": "/ˈlaɪtnɪŋ/",
    "tr": "Şimşek",
    "ex": "We won't go outside if we see lightning."
   },
   {
    "e": "🌈",
    "w": "rainbow",
    "ipa": "/ˈreɪnˌboʊ/",
    "tr": "Gökkuşağı",
    "ex": "If the sun comes out after the rain, we will see a rainbow."
   },
   {
    "e": "🌫️",
    "w": "fog",
    "ipa": "/fɔɡ/",
    "tr": "Sis",
    "ex": "If there is fog, the ferry won't leave."
   },
   {
    "e": "🌊",
    "w": "flood",
    "ipa": "/flʌd/",
    "tr": "Sel",
    "ex": "If it rains all night, there will be a flood."
   },
   {
    "e": "☂️",
    "w": "umbrella",
    "ipa": "/ʌmˈbrɛlə/",
    "tr": "Şemsiye",
    "ex": "If it rains, I will take my umbrella."
   },
   {
    "e": "🌡️",
    "w": "temperature",
    "ipa": "/ˈtɛmprətʃər/",
    "tr": "Sıcaklık",
    "ex": "If the temperature drops, we will wear our coats."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "umbrella",
    "options": [
     "umbrella",
     "storm",
     "fog"
    ],
    "hint": [
     "You open it over your head when it rains.",
     "Yağmur yağınca onu başının üstünde açarsın."
    ]
   },
   {
    "type": "pick",
    "q": "It is very high water that covers streets and houses after heavy rain. What is it?",
    "tr": "Şiddetli yağmurdan sonra sokakları ve evleri kaplayan çok yüksek sudur. Nedir?",
    "options": [
     {
      "e": "🌊",
      "v": "flood"
     },
     {
      "e": "🌫️",
      "v": "fog"
     },
     {
      "e": "⛈️",
      "v": "storm"
     },
     {
      "e": "🌈",
      "v": "rainbow"
     }
    ],
    "answer": "flood",
    "hint": [
     "If it rains for days, there will be one. It starts with “f”.",
     "Günlerce yağmur yağarsa olur. “f” ile başlıyor."
    ]
   },
   {
    "type": "listen",
    "say": "If it rains tomorrow, we will not go to the park. We will stay at home and play chess.",
    "q": "What will they do if it rains?",
    "tr": "Yağmur yağarsa ne yapacaklar?",
    "options": [
     {
      "e": "🏠",
      "v": "stay at home"
     },
     {
      "e": "🌳",
      "v": "go to the park"
     },
     {
      "e": "🏊",
      "v": "go swimming"
     }
    ],
    "answer": "stay at home",
    "hint": [
     "Listen again: “…we will stay at h…”.",
     "Tekrar dinle: “…we will stay at h…”."
    ]
   },
   {
    "type": "write",
    "e": "⛈️",
    "sentence": "We won't go out if there ___ a storm.",
    "answer": "is",
    "mask": "I _",
    "tr": "Fırtına olursa dışarı çıkmayacağız.",
    "hint": [
     "After “there” and one storm, we say ___. i - s",
     "“there” ve tek bir fırtınadan sonra ___ deriz. i - s"
    ]
   },
   {
    "type": "speak",
    "sentence": "If it rains, we will stay at home.",
    "tr": "Yağmur yağarsa evde kalacağız."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "rainbow",
    "hint": [
     "It has many colours and it appears after the rain! r - a - i - n - b - o - w",
     "Birçok rengi var ve yağmurdan sonra çıkar! r - a - i - n - b - o - w"
    ]
   },
   {
    "type": "dictation",
    "word": "thunder",
    "e": "🌩️",
    "hint": [
     "It is a loud sound in the sky. It starts with “th”.",
     "Gökyüzündeki gürültülü bir ses. “th” ile başlıyor."
    ]
   },
   {
    "type": "order",
    "tr": "Hava sisliyse feribot kalkmayacak.",
    "answer": "If it is foggy the ferry will not leave",
    "extra": "can",
    "hint": [
     "Start with: “If it is …”",
     "Şöyle başla: “If it is …”"
    ]
   },
   {
    "type": "story",
    "say": "Zeynep and Can want to go to the beach tomorrow. But the news says that there will be a storm. If there is a storm, they will not go to the beach. They will go to the cinema instead.",
    "q": "What will they do if there is a storm?",
    "tr": "Fırtına olursa ne yapacaklar?",
    "options": [
     "go to the cinema",
     "go to the beach",
     "stay in the car"
    ],
    "answer": "go to the cinema",
    "hint": [
     "Listen for the last sentence: “…go to the c…”.",
     "Son cümleyi dinle: “…go to the c…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Yağmur yağarsa şemsiyemi alacağım.",
    "answer": "If it rains, I will take my umbrella."
   }
  ]
 },
 "songs": [
  {
   "title": "Storm Night",
   "lines": [
    "If there is a <b>storm</b>, we will stay inside,",
    "If we hear <b>thunder</b>, we will hide,",
    "If we see <b>lightning</b>, we will count to ten,",
    "And then we will be safe again!"
   ]
  },
  {
   "title": "Foggy Morning",
   "lines": [
    "If there is <b>fog</b>, we will walk slowly,",
    "If it is thick, we will hold hands,",
    "If the sun comes out, the <b>fog</b> will go,",
    "And we will run and say hello!"
   ]
  },
  {
   "title": "Flood Warning",
   "lines": [
    "If it rains all week, there will be a <b>flood</b>,",
    "The streets will be full of mud,",
    "If you hear the warning, you won't go out,",
    "You will stay at home, no doubt!"
   ]
  },
  {
   "title": "Hot or Cold",
   "lines": [
    "If the <b>temperature</b> is low, we will wear a coat,",
    "If it is high, we will take a boat,",
    "We will check the <b>temperature</b> each day,",
    "And be ready, come what may!"
   ]
  }
 ],
 "reading": {
  "title": "Defne's Rainy Weekend",
  "e": "⛈️",
  "lines": [
   [
    "It is Friday evening, and Defne is watching the news on TV.",
    "Cuma akşamı ve Defne televizyonda haberleri izliyor."
   ],
   [
    "The weather will be bad this weekend, so she is worried.",
    "Bu hafta sonu hava kötü olacak, bu yüzden endişeli."
   ],
   [
    "If there is a storm on Saturday, the family will not go to the lake.",
    "Cumartesi fırtına olursa aile göle gitmeyecek."
   ],
   [
    "Her brother Emre says, “If we hear thunder, we will stay inside.”",
    "Kardeşi Emre, “Gök gürültüsü duyarsak içeride kalacağız.” diyor."
   ],
   [
    "Dad says, “If it rains all night, there will be a flood near the river.”",
    "Babası, “Bütün gece yağmur yağarsa nehrin yakınında sel olacak.” diyor."
   ],
   [
    "Mum looks at the temperature. “If it gets colder, we will wear our coats,” she says.",
    "Annesi sıcaklığa bakıyor. “Hava soğursa montlarımızı giyeceğiz.” diyor."
   ],
   [
    "If there is fog on Sunday, they will drive slowly.",
    "Pazar günü sis olursa yavaş gidecekler."
   ],
   [
    "If the rain stops, they will see a rainbow.",
    "Yağmur dinerse bir gökkuşağı görecekler."
   ],
   [
    "Defne takes her umbrella, just in case.",
    "Defne her ihtimale karşı şemsiyesini alıyor."
   ]
  ],
  "qs": [
   {
    "q": "Where will the family not go if there is a storm?",
    "tr": "Fırtına olursa aile nereye gitmeyecek?",
    "options": [
     "to the lake",
     "to the beach",
     "to the park"
    ],
    "answer": "to the lake"
   },
   {
    "q": "What will happen if it rains all night?",
    "tr": "Bütün gece yağmur yağarsa ne olacak?",
    "options": [
     "There will be a flood near the river.",
     "There will be a rainbow.",
     "There will be fog."
    ],
    "answer": "There will be a flood near the river."
   },
   {
    "q": "What will they do if there is fog on Sunday?",
    "tr": "Pazar günü sis olursa ne yapacaklar?",
    "options": [
     "drive slowly",
     "run fast",
     "go swimming"
    ],
    "answer": "drive slowly"
   }
  ]
 },
 "listening": [
  {
   "say": "If there is a storm tonight, I will stay in my room and read a book.",
   "q": "Where will the girl stay?",
   "tr": "Kız nerede kalacak?",
   "options": [
    {
     "e": "🛏️",
     "v": "in her room"
    },
    {
     "e": "🌳",
     "v": "in the garden"
    },
    {
     "e": "🏫",
     "v": "at school"
    }
   ],
   "answer": "in her room"
  },
  {
   "say": "If it is foggy tomorrow, we will not go to school by bike. Dad will take us by car.",
   "q": "How will they go to school?",
   "tr": "Okula nasıl gidecekler?",
   "options": [
    {
     "e": "🚗",
     "v": "car"
    },
    {
     "e": "🚲",
     "v": "bike"
    },
    {
     "e": "🚌",
     "v": "bus"
    }
   ],
   "answer": "car"
  },
  {
   "say": "If you see lightning, you will hear thunder after a few seconds.",
   "q": "What will you hear?",
   "tr": "Ne duyacaksın?",
   "options": [
    {
     "e": "🌩️",
     "v": "thunder"
    },
    {
     "e": "🎵",
     "v": "music"
    },
    {
     "e": "🌧️",
     "v": "rain"
    }
   ],
   "answer": "thunder"
  },
  {
   "say": "If it rains, Emre will take his umbrella. If it is sunny, he will wear his hat.",
   "q": "What will Emre take if it rains?",
   "tr": "Yağmur yağarsa Emre ne alacak?",
   "options": [
    {
     "e": "☂️",
     "v": "umbrella"
    },
    {
     "e": "👒",
     "v": "hat"
    },
    {
     "e": "🧥",
     "v": "coat"
    }
   ],
   "answer": "umbrella"
  },
  {
   "say": "If the temperature goes up to thirty degrees, we will swim in the sea.",
   "q": "What will they do if it is hot?",
   "tr": "Hava sıcaksa ne yapacaklar?",
   "options": [
    {
     "e": "🏊",
     "v": "swim"
    },
    {
     "e": "♟️",
     "v": "play chess"
    },
    {
     "e": "🛏️",
     "v": "sleep"
    }
   ],
   "answer": "swim"
  }
 ],
 "speaking": [
  {
   "e": "☔",
   "en": "If it rains, we will stay at home.",
   "tr": "Yağmur yağarsa evde kalacağız."
  },
  {
   "e": "⛈️",
   "en": "We won't go out if there is a storm.",
   "tr": "Fırtına olursa dışarı çıkmayacağız."
  },
  {
   "e": "🌈",
   "en": "If the sun comes out, we will see a rainbow.",
   "tr": "Güneş açarsa bir gökkuşağı göreceğiz."
  },
  {
   "e": "🌊",
   "en": "If it rains all night, there will be a flood.",
   "tr": "Bütün gece yağmur yağarsa sel olacak."
  },
  {
   "e": "🌡️",
   "en": "If the temperature is low, I will wear my coat.",
   "tr": "Sıcaklık düşükse montumu giyeceğim."
  }
 ],
 "write": {
  "title": "If the Weather Is Bad",
  "en": "Write about your plans for a rainy or stormy weekend. What will you do if the weather is bad? What won't you do?",
  "tr": "Yağmurlu ya da fırtınalı bir hafta sonu planlarını anlat. Hava kötü olursa ne yapacaksın? Ne yapmayacaksın?",
  "starters": [
   "If it rains, I will",
   "If there is a storm, we will",
   "I won't go out if",
   "If the sun comes out, I will",
   "If it is cold, I will wear",
   "If there is fog,"
  ],
  "checks": [
   {
    "re": /\bif\b/,
    "t": "“if” ile koşul cümlesi kur (If it rains, …)"
   },
   {
    "re": /\b(will|won't)\b/,
    "t": "“will / won't” kullan (we will stay at home)"
   },
   {
    "re": /\b(storm|thunder|lightning|rainbow|fog|flood|umbrella|temperature)s?\b/,
    "t": "Hava durumuyla ilgili bir kelime yaz (storm, fog, umbrella…)"
   }
  ],
  "model": "If the weather is good this weekend, my cousin Kerem and I will play football in the park. But if it rains, we will stay at home and play chess. If there is a storm, I won't go out because I am afraid of thunder. First, I will watch the news to check the temperature. Then, if there is fog, my dad will drive slowly. If the rain stops, we will take my umbrella and look for a rainbow!"
 },
 "towers": [
  {
   "e": "☔",
   "title": "Rainy Day",
   "steps": [
    {
     "tr": [
      [
       "Satranç oynayacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will play chess",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "Satranç oynayacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "will play chess",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "evde",
       "where"
      ],
      [
       "Satranç oynayacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "will play chess",
       "does"
      ],
      [
       "at home",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "yağmur yağarsa",
       "when"
      ],
      [
       "evde",
       "where"
      ],
      [
       "Satranç oynayacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "will play chess",
       "does"
      ],
      [
       "at home",
       "where"
      ],
      [
       "if it rains",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "⛈️",
   "title": "Storm Plan",
   "steps": [
    {
     "tr": [
      [
       "Kitap okuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will read a book",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "Kitap okuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will read a book",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "Kitap okuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will read a book",
       "does"
      ],
      [
       "in his room",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "fırtına olursa",
       "when"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "Kitap okuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will read a book",
       "does"
      ],
      [
       "in his room",
       "where"
      ],
      [
       "if there is a storm",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🌈",
   "title": "Sunny Break",
   "steps": [
    {
     "tr": [
      [
       "Fotoğraf çekecek.",
       "does"
      ]
     ],
     "en": [
      [
       "will take photos",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "Fotoğraf çekecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "will take photos",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "Fotoğraf çekecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "will take photos",
       "does"
      ],
      [
       "in the garden",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "gökkuşağı görürse",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "Fotoğraf çekecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "will take photos",
       "does"
      ],
      [
       "in the garden",
       "where"
      ],
      [
       "if she sees a rainbow",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 39 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Future Maker",
  "theme": "Future Me",
  "tr": "Gelecekteki ben",
  "icon": "🎯",
  "song": {
   "title": "My Future Dream",
   "lines": [
    "When I grow up, I will follow my <b>dream</b>,",
    "I might be an <b>artist</b>, I might be a vet,",
    "I would like to go to <b>university</b>,",
    "And I will be the best that I can be!"
   ]
  },
  "cards": [
   {
    "e": "🎓",
    "w": "university",
    "ipa": "/ˌjunəˈvɜrsəti/",
    "tr": "Üniversite",
    "ex": "I might study at university in Ankara."
   },
   {
    "e": "👷",
    "w": "engineer",
    "ipa": "/ˌɛndʒəˈnɪr/",
    "tr": "Mühendis",
    "ex": "My brother wants to be an engineer, and he will build bridges."
   },
   {
    "e": "🔬",
    "w": "scientist",
    "ipa": "/ˈsaɪəntɪst/",
    "tr": "Bilim insanı",
    "ex": "Zeynep would like to be a scientist because she loves experiments."
   },
   {
    "e": "🎨",
    "w": "artist",
    "ipa": "/ˈɑrtɪst/",
    "tr": "Sanatçı",
    "ex": "Elif might be an artist when she grows up."
   },
   {
    "e": "💉",
    "w": "vet",
    "ipa": "/vɛt/",
    "tr": "Veteriner",
    "ex": "When I grow up, I want to be a vet."
   },
   {
    "e": "🎤",
    "w": "journalist",
    "ipa": "/ˈdʒɜrnələst/",
    "tr": "Gazeteci",
    "ex": "Mert will be a journalist and write for a newspaper."
   },
   {
    "e": "💼",
    "w": "career",
    "ipa": "/kəˈrɪr/",
    "tr": "Meslek, kariyer",
    "ex": "I will choose a career that helps people."
   },
   {
    "e": "💭",
    "w": "dream",
    "ipa": "/drim/",
    "tr": "Hayal",
    "ex": "I would like to travel the world, and that is my dream."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "dream",
    "options": [
     "dream",
     "career",
     "university"
    ],
    "hint": [
     "It is something you hope to do in the future.",
     "Gelecekte yapmayı umduğun şey."
    ]
   },
   {
    "type": "pick",
    "q": "This person works in a laboratory and does experiments. Who is it?",
    "tr": "Bu kişi laboratuvarda çalışır ve deney yapar. Kim?",
    "options": [
     {
      "e": "🔬",
      "v": "scientist"
     },
     {
      "e": "👷",
      "v": "engineer"
     },
     {
      "e": "🎨",
      "v": "artist"
     },
     {
      "e": "💉",
      "v": "vet"
     }
    ],
    "answer": "scientist",
    "hint": [
     "The word starts with “s”. This person loves science.",
     "Kelime “s” ile başlıyor. Bu kişi bilimi çok sever."
    ]
   },
   {
    "type": "listen",
    "say": "I want to be an engineer when I grow up. I would like to build big bridges in Turkey.",
    "q": "What does he want to be?",
    "tr": "O ne olmak istiyor?",
    "options": [
     {
      "e": "👷",
      "v": "engineer"
     },
     {
      "e": "💉",
      "v": "vet"
     },
     {
      "e": "🎨",
      "v": "artist"
     }
    ],
    "answer": "engineer",
    "hint": [
     "Listen again: “…want to be an e…”.",
     "Tekrar dinle: “…want to be an e…”."
    ]
   },
   {
    "type": "write",
    "e": "🌍",
    "sentence": "I ___ like to travel the world.",
    "answer": "would",
    "mask": "W _ _ _ _",
    "tr": "Dünyayı gezmek isterim.",
    "hint": [
     "We say “I ___ like to” for a wish. w - o - u - l - d",
     "Bir dilek için “I ___ like to” deriz. w - o - u - l - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "I might study at university in Ankara.",
    "tr": "Ankara'da üniversitede okuyabilirim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "university",
    "hint": [
     "You go there after high school to study. u - n - i - v - e - r - s - i - t - y",
     "Liseden sonra okumak için oraya gidersin. u - n - i - v - e - r - s - i - t - y"
    ]
   },
   {
    "type": "dictation",
    "word": "scientist",
    "e": "🔬",
    "hint": [
     "It starts with “s”. This person does experiments.",
     "“s” ile başlıyor. Bu kişi deney yapar."
    ]
   },
   {
    "type": "order",
    "tr": "Ece sanatçı olmak istiyor.",
    "answer": "Ece would like to be an artist",
    "extra": "might",
    "hint": [
     "Start with: “Ece would …”",
     "Şöyle başla: “Ece would …”"
    ]
   },
   {
    "type": "story",
    "say": "Kerem loves building things. He wants to be an engineer. He might study at university in Istanbul. He would like to build a big bridge one day.",
    "q": "Where might Kerem study?",
    "tr": "Kerem nerede okuyabilir?",
    "options": [
     "in Istanbul",
     "in Izmir",
     "in Ankara"
    ],
    "answer": "in Istanbul",
    "hint": [
     "Listen for the third sentence: “…university in I…”.",
     "Üçüncü cümleyi dinle: “…university in I…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Büyüyünce gazeteci olmak istiyorum.",
    "answer": "When I grow up, I want to be a journalist."
   }
  ]
 },
 "songs": [
  {
   "title": "Little Scientist",
   "lines": [
    "I want to be a <b>scientist</b>,",
    "I will look at the stars at night,",
    "I might find a new planet one day,",
    "And I will tell the world, hooray!"
   ]
  },
  {
   "title": "Animal Doctor",
   "lines": [
    "When I grow up, I want to be a <b>vet</b>,",
    "I will help every dog and cat,",
    "I might look after a sick little bird,",
    "And I will be happy, that is that!"
   ]
  },
  {
   "title": "Build and Paint",
   "lines": [
    "I would like to be an <b>engineer</b>,",
    "I will build a bridge so high,",
    "Or I might be an <b>artist</b> instead,",
    "And paint a rainbow in the sky!"
   ]
  },
  {
   "title": "Write the News",
   "lines": [
    "I would like to be a <b>journalist</b>,",
    "I will ask and I will write,",
    "I might study at <b>university</b>,",
    "To follow my <b>career</b> bright!"
   ]
  }
 ],
 "reading": {
  "title": "Defne's Dream",
  "e": "💭",
  "lines": [
   [
    "Defne is twelve years old and she has a big dream.",
    "Defne on iki yaşında ve büyük bir hayali var."
   ],
   [
    "When she grows up, she wants to be a vet because she loves animals.",
    "Büyüyünce veteriner olmak istiyor çünkü hayvanları çok seviyor."
   ],
   [
    "She might study at university in Ankara, but she is not sure yet.",
    "Ankara'da üniversitede okuyabilir ama henüz emin değil."
   ],
   [
    "Her brother Kerem is different.",
    "Ağabeyi Kerem farklı."
   ],
   [
    "He would like to be an engineer, so he will study maths and science.",
    "Mühendis olmak istiyor, bu yüzden matematik ve fen çalışacak."
   ],
   [
    "Her best friend Elif wants to be an artist.",
    "En iyi arkadaşı Elif sanatçı olmak istiyor."
   ],
   [
    "Elif will paint pictures of the animals that Defne helps.",
    "Elif, Defne'nin yardım ettiği hayvanların resimlerini yapacak."
   ],
   [
    "They will follow their dreams, and they will always be friends!",
    "Hayallerinin peşinden gidecekler ve her zaman arkadaş olacaklar!"
   ]
  ],
  "qs": [
   {
    "q": "What does Defne want to be?",
    "tr": "Defne ne olmak istiyor?",
    "options": [
     "a vet",
     "an artist",
     "a journalist"
    ],
    "answer": "a vet"
   },
   {
    "q": "Where might Defne study?",
    "tr": "Defne nerede okuyabilir?",
    "options": [
     "in Izmir",
     "in Ankara",
     "in Bursa"
    ],
    "answer": "in Ankara"
   },
   {
    "q": "Who would like to be an engineer?",
    "tr": "Kim mühendis olmak istiyor?",
    "options": [
     "Kerem",
     "Elif",
     "Defne"
    ],
    "answer": "Kerem"
   }
  ]
 },
 "listening": [
  {
   "say": "My sister loves science. She wants to be a scientist and work in a laboratory.",
   "q": "What does she want to be?",
   "tr": "O ne olmak istiyor?",
   "options": [
    {
     "e": "🔬",
     "v": "scientist"
    },
    {
     "e": "💉",
     "v": "vet"
    },
    {
     "e": "🎨",
     "v": "artist"
    }
   ],
   "answer": "scientist"
  },
  {
   "say": "Emre might study at university in Izmir. He is not sure yet.",
   "q": "Where might Emre study?",
   "tr": "Emre nerede okuyabilir?",
   "options": [
    {
     "e": "🌊",
     "v": "Izmir"
    },
    {
     "e": "🏔️",
     "v": "Ankara"
    },
    {
     "e": "🌉",
     "v": "Istanbul"
    }
   ],
   "answer": "Izmir"
  },
  {
   "say": "Zeynep would like to be a journalist. She will write about school sports for a newspaper.",
   "q": "What would Zeynep like to be?",
   "tr": "Zeynep ne olmak istiyor?",
   "options": [
    {
     "e": "🎤",
     "v": "journalist"
    },
    {
     "e": "👷",
     "v": "engineer"
    },
    {
     "e": "💉",
     "v": "vet"
    }
   ],
   "answer": "journalist"
  },
  {
   "say": "Can loves drawing and painting. When he grows up, he might be an artist.",
   "q": "What might Can be?",
   "tr": "Can ne olabilir?",
   "options": [
    {
     "e": "🎨",
     "v": "artist"
    },
    {
     "e": "👷",
     "v": "engineer"
    },
    {
     "e": "🔬",
     "v": "scientist"
    }
   ],
   "answer": "artist"
  },
  {
   "say": "My dream is to travel the world. I would like to visit Japan and Brazil.",
   "q": "What would the girl like to do?",
   "tr": "Kız ne yapmak istiyor?",
   "options": [
    {
     "e": "✈️",
     "v": "travel"
    },
    {
     "e": "🏊",
     "v": "swim"
    },
    {
     "e": "🍳",
     "v": "cook"
    }
   ],
   "answer": "travel"
  }
 ],
 "speaking": [
  {
   "e": "💉",
   "en": "When I grow up, I want to be a vet.",
   "tr": "Büyüyünce veteriner olmak istiyorum."
  },
  {
   "e": "🎓",
   "en": "I might study at university in Ankara.",
   "tr": "Ankara'da üniversitede okuyabilirim."
  },
  {
   "e": "🌍",
   "en": "I would like to travel the world.",
   "tr": "Dünyayı gezmek isterim."
  },
  {
   "e": "🎨",
   "en": "My friend might be an artist.",
   "tr": "Arkadaşım sanatçı olabilir."
  },
  {
   "e": "🔬",
   "en": "My brother wants to be a scientist because he likes experiments.",
   "tr": "Ağabeyim bilim insanı olmak istiyor çünkü deneyleri seviyor."
  }
 ],
 "write": {
  "title": "My Future",
  "en": "Write about your future. What do you want to be? What might you study? What would you like to do?",
  "tr": "Geleceğini anlat. Ne olmak istiyorsun? Ne okuyabilirsin? Ne yapmak istersin?",
  "starters": [
   "When I grow up, I want to be",
   "I might study",
   "I would like to",
   "I will",
   "My dream is",
   "I want this because"
  ],
  "checks": [
   {
    "re": /\b(want to be|would like to|might)\b/,
    "t": "“want to be”, “would like to” ya da “might” kullan (I want to be…)"
   },
   {
    "re": /\b(university|engineer|scientist|artist|vet|journalist|career|dream)\b/,
    "t": "Bir meslek ya da ünite kelimesi yaz (vet, artist, dream…)"
   },
   {
    "re": /\b(because|but|so|when|then)\b/,
    "t": "Bir bağlaç kullan (because, but, so, when)"
   }
  ],
  "model": "When I grow up, I want to be a vet because I love animals. First, I will study hard at school, and then I might study at university in Ankara. My brother would like to be an engineer, but my friend Elif wants to be an artist. I would like to travel the world after I finish university. This is my dream, and I will work hard for my career."
 },
 "towers": [
  {
   "e": "🎓",
   "title": "Future Student",
   "steps": [
    {
     "tr": [
      [
       "okuyabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "might study",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "okuyabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "might study",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "Ankara'da üniversitede",
       "where"
      ],
      [
       "okuyabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "might study",
       "does"
      ],
      [
       "at university in Ankara",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Defne",
       "who"
      ],
      [
       "liseden sonra",
       "when"
      ],
      [
       "Ankara'da üniversitede",
       "where"
      ],
      [
       "okuyabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Defne",
       "who"
      ],
      [
       "might study",
       "does"
      ],
      [
       "at university in Ankara",
       "where"
      ],
      [
       "after school",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🌍",
   "title": "Travel Dream",
   "steps": [
    {
     "tr": [
      [
       "ziyaret etmek ister.",
       "does"
      ]
     ],
     "en": [
      [
       "would like to visit",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "ziyaret etmek ister.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "would like to visit",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "Japonya'yı",
       "where"
      ],
      [
       "ziyaret etmek ister.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "would like to visit",
       "does"
      ],
      [
       "Japan",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "bir gün",
       "when"
      ],
      [
       "Japonya'yı",
       "where"
      ],
      [
       "ziyaret etmek ister.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "would like to visit",
       "does"
      ],
      [
       "Japan",
       "where"
      ],
      [
       "one day",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🎨",
   "title": "Young Artist",
   "steps": [
    {
     "tr": [
      [
       "resim yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will paint",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "resim yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will paint",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "resim yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will paint",
       "does"
      ],
      [
       "in the garden",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Elif",
       "who"
      ],
      [
       "yarın",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "resim yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will paint",
       "does"
      ],
      [
       "in the garden",
       "where"
      ],
      [
       "tomorrow",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 40 ----------
UNITS_KEY.push({
 "L": {
  "rank": "Key Champion",
  "theme": "Keeping in Touch",
  "tr": "İletişimde kalmak",
  "icon": "✉️",
  "song": {
   "title": "Dear Friend",
   "lines": [
    "Dear friend, I wrote you a <b>letter</b>,",
    "With a <b>stamp</b> to make it better,",
    "Please <b>reply</b> to me soon, soon, soon,",
    "Or have a <b>video call</b> at noon!"
   ]
  },
  "cards": [
   {
    "e": "💌",
    "w": "letter",
    "ipa": "/ˈlɛtər/",
    "tr": "Mektup",
    "ex": "I wrote a letter to my grandma because I miss her."
   },
   {
    "e": "📮",
    "w": "stamp",
    "ipa": "/stæmp/",
    "tr": "Pul",
    "ex": "Put a stamp on the envelope, and then post it."
   },
   {
    "e": "📩",
    "w": "envelope",
    "ipa": "/ˈɛnvəˌloʊp/",
    "tr": "Zarf",
    "ex": "Mert put the letter in the envelope, but he forgot the stamp."
   },
   {
    "e": "📍",
    "w": "address",
    "ipa": "/ˈæˌdrɛs/",
    "tr": "Adres",
    "ex": "Could you write your address here, please?"
   },
   {
    "e": "↩️",
    "w": "reply",
    "ipa": "/rɪˈplaɪ/",
    "tr": "Cevap vermek",
    "ex": "Thanks for your message! I will reply soon."
   },
   {
    "e": "🤝",
    "w": "pen friend",
    "ipa": "/ˈpɛn ˌfrɛnd/",
    "tr": "Mektup arkadaşı",
    "ex": "My pen friend lives in London, so we write in English."
   },
   {
    "e": "📱",
    "w": "mobile phone",
    "ipa": "/ˈmoʊbəl ˌfoʊn/",
    "tr": "Cep telefonu",
    "ex": "I will call Ece on my mobile phone because I want to ask her something."
   },
   {
    "e": "📹",
    "w": "video call",
    "ipa": "/ˈvɪdioʊ ˌkɔl/",
    "tr": "Görüntülü görüşme",
    "ex": "Would you like to have a video call with me on Sunday?"
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "letter",
    "options": [
     "letter",
     "stamp",
     "address"
    ],
    "hint": [
     "You write it on paper and send it to a friend.",
     "Kâğıda yazıp arkadaşına gönderirsin."
    ]
   },
   {
    "type": "pick",
    "q": "You put a letter inside it before you post it. What is it?",
    "tr": "Mektubu postalamadan önce onun içine koyarsın. Nedir?",
    "options": [
     {
      "e": "📩",
      "v": "envelope"
     },
     {
      "e": "📮",
      "v": "stamp"
     },
     {
      "e": "💌",
      "v": "letter"
     },
     {
      "e": "📍",
      "v": "address"
     }
    ],
    "answer": "envelope",
    "hint": [
     "It is a paper cover. It starts with “e”.",
     "Kâğıttan bir kılıf. “e” ile başlıyor."
    ]
   },
   {
    "type": "listen",
    "say": "Hi Mert! Thanks for your letter. Could you tell me your address, please? I would like to write to you again.",
    "q": "What does she ask for?",
    "tr": "O ne istiyor?",
    "options": [
     {
      "e": "📍",
      "v": "address"
     },
     {
      "e": "📮",
      "v": "stamp"
     },
     {
      "e": "📱",
      "v": "phone"
     }
    ],
    "answer": "address",
    "hint": [
     "Listen again: “…tell me your a…”.",
     "Tekrar dinle: “…tell me your a…”."
    ]
   },
   {
    "type": "write",
    "e": "💌",
    "sentence": "Thanks ___ your letter!",
    "answer": "for",
    "mask": "F _ _",
    "tr": "Mektubun için teşekkürler!",
    "hint": [
     "We say “Thanks ___ something”. f - o - r",
     "“Thanks ___ bir şey” deriz. f - o - r"
    ]
   },
   {
    "type": "speak",
    "sentence": "Would you like to have a video call on Saturday?",
    "tr": "Cumartesi görüntülü görüşmek ister misin?"
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "stamp",
    "hint": [
     "You stick it on the envelope so the post office can send it. s - t - a - m - p",
     "Postane göndersin diye zarfa yapıştırırsın. s - t - a - m - p"
    ]
   },
   {
    "type": "dictation",
    "word": "envelope",
    "e": "📩",
    "hint": [
     "It starts with “e”. The letter goes inside it.",
     "“e” ile başlıyor. Mektup onun içine girer."
    ]
   },
   {
    "type": "order",
    "tr": "Mesajıma yakında cevap verebilir misin?",
    "answer": "Could you reply to my message soon",
    "extra": "would",
    "hint": [
     "Start with: “Could you …”",
     "Şöyle başla: “Could you …”"
    ]
   },
   {
    "type": "story",
    "say": "Can has a pen friend called Oliver. Oliver lives in London, so they write emails in English. Last week Can wrote a long email, but Oliver did not reply. Can was sad, so he sent a message on his mobile phone.",
    "q": "How did Can send a message?",
    "tr": "Can mesajı nasıl gönderdi?",
    "options": [
     "on his mobile phone",
     "by letter",
     "in a video call"
    ],
    "answer": "on his mobile phone",
    "hint": [
     "Listen to the last sentence: “…on his m…”.",
     "Son cümleyi dinle: “…on his m…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Mesajın için teşekkürler. Yakında cevap vereceğim.",
    "answer": "Thanks for your message. I will reply soon."
   }
  ]
 },
 "songs": [
  {
   "title": "My Pen Friend",
   "lines": [
    "I have a <b>pen friend</b> far away,",
    "We write to each other every day,",
    "I say, “Thanks for your letter, my friend,”",
    "And I hope our writing never ends!"
   ]
  },
  {
   "title": "At the Post Office",
   "lines": [
    "Write your <b>address</b> on the <b>envelope</b>,",
    "Stick on a <b>stamp</b>, that is the hope,",
    "Drop it in the red post box,",
    "And wait for a <b>reply</b>, tick-tock!"
   ]
  },
  {
   "title": "Ring, Ring",
   "lines": [
    "Ring, ring, ring on my <b>mobile phone</b>,",
    "Hi Ece! Could you call me when you can?",
    "Would you like to hear my plan?",
    "Because I have a super plan!"
   ]
  },
  {
   "title": "Sunday Screen",
   "lines": [
    "We have a <b>video call</b> on Sunday night,",
    "I can see you and the screen is bright,",
    "I miss you, so I wrote a <b>letter</b> too,",
    "See you soon, I love you!"
   ]
  }
 ],
 "reading": {
  "title": "Mert and Oliver",
  "e": "📩",
  "lines": [
   [
    "Mert has a pen friend called Oliver, who lives in London.",
    "Mert'in Londra'da yaşayan Oliver adında bir mektup arkadaşı var."
   ],
   [
    "They write to each other because they want to practise English.",
    "Birbirlerine yazıyorlar çünkü İngilizce pratik yapmak istiyorlar."
   ],
   [
    "Last week, Oliver wrote a letter and put a stamp on the envelope.",
    "Geçen hafta Oliver bir mektup yazdı ve zarfın üstüne pul yapıştırdı."
   ],
   [
    "He asked, “Could you send me your address?”",
    "“Bana adresini gönderebilir misin?” diye sordu."
   ],
   [
    "Mert was happy, so he wrote a reply the same day.",
    "Mert mutlu oldu, bu yüzden aynı gün cevap yazdı."
   ],
   [
    "He wrote, “Thanks for your letter! Would you like to have a video call on Saturday?”",
    "“Mektubun için teşekkürler! Cumartesi görüntülü görüşmek ister misin?” yazdı."
   ],
   [
    "Oliver said yes, but he must ask his mum first.",
    "Oliver evet dedi ama önce annesine sormalı."
   ],
   [
    "On Saturday, they had a great video call. See you soon, Oliver!",
    "Cumartesi harika bir görüntülü görüşme yaptılar. Görüşürüz, Oliver!"
   ]
  ],
  "qs": [
   {
    "q": "Where does Oliver live?",
    "tr": "Oliver nerede yaşıyor?",
    "options": [
     "in London",
     "in Ankara",
     "in Izmir"
    ],
    "answer": "in London"
   },
   {
    "q": "What did Oliver ask for?",
    "tr": "Oliver ne istedi?",
    "options": [
     "Mert's address",
     "Mert's mobile phone",
     "a stamp"
    ],
    "answer": "Mert's address"
   },
   {
    "q": "What did Mert ask Oliver in his reply?",
    "tr": "Mert cevabında Oliver'a ne sordu?",
    "options": [
     "to have a video call",
     "to visit Turkey",
     "to send a stamp"
    ],
    "answer": "to have a video call"
   }
  ]
 },
 "listening": [
  {
   "say": "Hi Zeynep! Thanks for your message. I will reply tomorrow because I am busy today.",
   "q": "When will he reply?",
   "tr": "Ne zaman cevap verecek?",
   "options": [
    {
     "e": "📅",
     "v": "tomorrow"
    },
    {
     "e": "🌙",
     "v": "tonight"
    },
    {
     "e": "☀️",
     "v": "today"
    }
   ],
   "answer": "tomorrow"
  },
  {
   "say": "Could you put a stamp on the envelope, please? Then we can post the letter.",
   "q": "What must she put on the envelope?",
   "tr": "Zarfın üstüne ne koymalı?",
   "options": [
    {
     "e": "📮",
     "v": "stamp"
    },
    {
     "e": "📷",
     "v": "photo"
    },
    {
     "e": "🎫",
     "v": "ticket"
    }
   ],
   "answer": "stamp"
  },
  {
   "say": "My pen friend lives in Spain. We write letters in English, so I can practise.",
   "q": "What does the boy have in Spain?",
   "tr": "Çocuğun İspanya'da ne var?",
   "options": [
    {
     "e": "🤝",
     "v": "pen friend"
    },
    {
     "e": "🏨",
     "v": "hotel"
    },
    {
     "e": "⛺",
     "v": "tent"
    }
   ],
   "answer": "pen friend"
  },
  {
   "say": "Would you like to have a video call with me on Sunday? I will use my mobile phone.",
   "q": "What will she use?",
   "tr": "O ne kullanacak?",
   "options": [
    {
     "e": "📱",
     "v": "mobile phone"
    },
    {
     "e": "💻",
     "v": "computer"
    },
    {
     "e": "📷",
     "v": "camera"
    }
   ],
   "answer": "mobile phone"
  },
  {
   "say": "I got your letter! I am so happy, so I want to reply today.",
   "q": "What does she want to do today?",
   "tr": "Bugün ne yapmak istiyor?",
   "options": [
    {
     "e": "↩️",
     "v": "reply"
    },
    {
     "e": "📞",
     "v": "call"
    },
    {
     "e": "🚌",
     "v": "travel"
    }
   ],
   "answer": "reply"
  }
 ],
 "speaking": [
  {
   "e": "📩",
   "en": "Thanks for your message!",
   "tr": "Mesajın için teşekkürler!"
  },
  {
   "e": "📍",
   "en": "Could you tell me your address, please?",
   "tr": "Bana adresini söyler misin, lütfen?"
  },
  {
   "e": "📹",
   "en": "Would you like to have a video call on Sunday?",
   "tr": "Pazar günü görüntülü görüşmek ister misin?"
  },
  {
   "e": "🤝",
   "en": "I write letters to my pen friend because I want to practise English.",
   "tr": "Mektup arkadaşıma mektup yazıyorum çünkü İngilizce pratik yapmak istiyorum."
  },
  {
   "e": "📱",
   "en": "I will call you on my mobile phone, so please reply soon.",
   "tr": "Seni cep telefonumdan arayacağım, bu yüzden lütfen yakında cevap ver."
  }
 ],
 "write": {
  "title": "An Email to a Friend",
  "en": "Your friend Ece sent you an email. Write a short email to Ece and answer her 3 questions: How are you? What did you do at the weekend? Would you like to have a video call on Sunday?",
  "tr": "Arkadaşın Ece sana e-posta gönderdi. Ona kısa bir e-posta yaz ve 3 sorusunu cevapla: Nasılsın? Hafta sonu ne yaptın? Pazar günü görüntülü görüşmek ister misin?",
  "starters": [
   "Hi Ece,",
   "Thanks for your email.",
   "I am fine, but",
   "At the weekend I",
   "Yes, I would like to",
   "Could you",
   "See you soon,"
  ],
  "checks": [
   {
    "re": /\b(hi|dear)\b/,
    "t": "E-postaya selamlamayla başla (Hi Ece, / Dear Ece,)"
   },
   {
    "re": /\bthanks for\b/,
    "t": "“Thanks for …” ile teşekkür et (Thanks for your email!)"
   },
   {
    "re": /\b(because|so|but|when)\b/,
    "t": "Bir bağlaç kullan (because, so, but, when)"
   }
  ],
  "model": "Hi Ece, Thanks for your email! I am fine, but a bit tired because I played football at the weekend. On Saturday I wrote a letter to my pen friend, and on Sunday I stayed at home. Yes, I would like to have a video call! Could you call me on my mobile phone at five o'clock? Please reply soon, so I know the time. See you soon, Mert"
 },
 "towers": [
  {
   "e": "💌",
   "title": "Write a Letter",
   "steps": [
    {
     "tr": [
      [
       "mektup yazar.",
       "does"
      ]
     ],
     "en": [
      [
       "writes a letter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "mektup yazar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "writes a letter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "evde",
       "where"
      ],
      [
       "mektup yazar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "writes a letter",
       "does"
      ],
      [
       "at home",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece",
       "who"
      ],
      [
       "pazar günleri",
       "when"
      ],
      [
       "evde",
       "where"
      ],
      [
       "mektup yazar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "writes a letter",
       "does"
      ],
      [
       "at home",
       "where"
      ],
      [
       "on Sundays",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📹",
   "title": "Video Call",
   "steps": [
    {
     "tr": [
      [
       "görüntülü görüşme yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will have a video call",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "görüntülü görüşme yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will have a video call",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "görüntülü görüşme yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will have a video call",
       "does"
      ],
      [
       "in his room",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert",
       "who"
      ],
      [
       "cumartesi",
       "when"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "görüntülü görüşme yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "will have a video call",
       "does"
      ],
      [
       "in his room",
       "where"
      ],
      [
       "on Saturday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📮",
   "title": "Post Office",
   "steps": [
    {
     "tr": [
      [
       "mektubu postalar.",
       "does"
      ]
     ],
     "en": [
      [
       "posts the letter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "mektubu postalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "posts the letter",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "postanede",
       "where"
      ],
      [
       "mektubu postalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "posts the letter",
       "does"
      ],
      [
       "at the post office",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Zeynep",
       "who"
      ],
      [
       "okuldan sonra",
       "when"
      ],
      [
       "postanede",
       "where"
      ],
      [
       "mektubu postalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "posts the letter",
       "does"
      ],
      [
       "at the post office",
       "where"
      ],
      [
       "after school",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

