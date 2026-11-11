// Flyers (A2) üniteleri: Ünite 21–30. index.html bu dosyayı ana betikten önce yükler ve üniteleri LEVELS/READING/... dizilerine ekler.
// Biçim: {L:{rank,theme,tr,icon,song,cards,tasks,hard}, songs, reading, listening, speaking, write, towers}. Denetim: node api/tools/check-units.js units-a1.js units-a2.js
const UNITS_A2 = [];
// ---------- Ünite 21 ----------
UNITS_A2.push({
 "L": {
  "rank": "Weather Watcher",
  "theme": "Seasons",
  "tr": "Mevsimler",
  "icon": "🍂",
  "song": {
   "title": "Four Seasons",
   "lines": [
    "In <b>spring</b> we plant, and in <b>summer</b> we swim,",
    "In <b>autumn</b> the leaves fall down from the trees,",
    "In <b>winter</b> we are going to build a snowman,",
    "Four seasons, four seasons, we love them all, please!"
   ]
  },
  "cards": [
   {
    "e": "🌱",
    "w": "spring",
    "ipa": "/sprɪŋ/",
    "tr": "İlkbahar",
    "ex": "We are going to plant flowers in spring."
   },
   {
    "e": "☀️",
    "w": "summer",
    "ipa": "/ˈsʌmər/",
    "tr": "Yaz",
    "ex": "I am going to swim in the sea this summer."
   },
   {
    "e": "🍂",
    "w": "autumn",
    "ipa": "/ˈɔtəm/",
    "tr": "Sonbahar",
    "ex": "The leaves fall down in autumn."
   },
   {
    "e": "⛄",
    "w": "winter",
    "ipa": "/ˈwɪntər/",
    "tr": "Kış",
    "ex": "It is going to snow this winter."
   },
   {
    "e": "⛈️",
    "w": "storm",
    "ipa": "/stɔrm/",
    "tr": "Fırtına",
    "ex": "There is going to be a storm tonight."
   },
   {
    "e": "🌈",
    "w": "rainbow",
    "ipa": "/ˈreɪnˌboʊ/",
    "tr": "Gökkuşağı",
    "ex": "Look at the beautiful rainbow!"
   },
   {
    "e": "☂️",
    "w": "umbrella",
    "ipa": "/ʌmˈbrɛlə/",
    "tr": "Şemsiye",
    "ex": "I am going to take my umbrella."
   },
   {
    "e": "🌩️",
    "w": "thunder",
    "ipa": "/ˈθʌndər/",
    "tr": "Gök gürültüsü",
    "ex": "The thunder is very loud."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "spring",
    "options": [
     "spring",
     "winter",
     "autumn"
    ],
    "hint": [
     "Flowers start to grow in this season.",
     "Çiçekler bu mevsimde büyümeye başlar."
    ]
   },
   {
    "type": "pick",
    "q": "It is going to rain. What are you going to take?",
    "tr": "Yağmur yağacak. Yanına ne alacaksın?",
    "options": [
     {
      "e": "☂️",
      "v": "umbrella"
     },
     {
      "e": "🌈",
      "v": "rainbow"
     },
     {
      "e": "⛄",
      "v": "snowman"
     },
     {
      "e": "☀️",
      "v": "sun"
     }
    ],
    "answer": "umbrella",
    "hint": [
     "It keeps you dry in the rain.",
     "Seni yağmurda kuru tutar."
    ]
   },
   {
    "type": "listen",
    "say": "Look at those black clouds! There is going to be a storm. We are going to stay at home.",
    "q": "What is the weather going to be like?",
    "tr": "Hava nasıl olacak?",
    "options": [
     {
      "e": "⛈️",
      "v": "stormy"
     },
     {
      "e": "☀️",
      "v": "sunny"
     },
     {
      "e": "⛄",
      "v": "snowy"
     }
    ],
    "answer": "stormy",
    "hint": [
     "Listen again: “…black clouds…”.",
     "Tekrar dinle: “…black clouds…”."
    ]
   },
   {
    "type": "write",
    "e": "⛄",
    "sentence": "It is ___ to snow this winter.",
    "answer": "going",
    "mask": "G _ _ _ G",
    "tr": "Bu kış kar yağacak.",
    "hint": [
     "We say “is ... to” for plans and predictions. g - o - i - n - g",
     "Plan ve tahminler için “is ... to” deriz. g - o - i - n - g"
    ]
   },
   {
    "type": "speak",
    "sentence": "I am going to swim in the sea this summer.",
    "tr": "Bu yaz denizde yüzeceğim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "winter",
    "hint": [
     "It is cold and we make a snowman! w - i - n - t - e - r",
     "Hava soğuk ve kardan adam yapıyoruz! w - i - n - t - e - r"
    ]
   },
   {
    "type": "dictation",
    "word": "rainbow",
    "e": "🌈",
    "hint": [
     "It starts with “r”. You see it after the rain.",
     "“r” ile başlıyor. Yağmurdan sonra görürsün."
    ]
   },
   {
    "type": "order",
    "tr": "Piknik yapacağız.",
    "answer": "We are going to have a picnic",
    "extra": "will",
    "hint": [
     "Start with: “We are …”",
     "Şöyle başla: “We are …”"
    ]
   },
   {
    "type": "story",
    "say": "Ece is going to visit her grandma in Kapadokya this summer. She is going to take a long bus ride. First, she is going to help in the garden. Then she is going to ride a horse.",
    "q": "What is Ece going to do first?",
    "tr": "Ece önce ne yapacak?",
    "options": [
     "ride a horse",
     "help in the garden",
     "swim in the sea"
    ],
    "answer": "help in the garden",
    "hint": [
     "Listen for the word “first”!",
     "“First” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bu akşam fırtına olacak.",
    "answer": "There is going to be a storm tonight."
   }
  ]
 },
 "songs": [
  {
   "title": "Rain, Rain",
   "lines": [
    "I am going to take my <b>umbrella</b>,",
    "The sky is grey and the wind is strong,",
    "Drip, drop, drip, drop, rain on the street,",
    "I will jump in puddles all day long!"
   ]
  },
  {
   "title": "Big Noise",
   "lines": [
    "Boom, boom, <b>thunder</b> in the sky,",
    "A big <b>storm</b> is going to come,",
    "I hide with Mum and cuddle my bear,",
    "Soon it will stop and then we'll have fun!"
   ]
  },
  {
   "title": "After the Rain",
   "lines": [
    "The sun comes out, the clouds go away,",
    "Look up high, what do you see?",
    "A pretty <b>rainbow</b> in the sky,",
    "Red and yellow, green and blue for me!"
   ]
  },
  {
   "title": "Leaves Are Falling",
   "lines": [
    "It is <b>autumn</b>, leaves are red,",
    "They are going to fall on my head,",
    "Then comes <b>spring</b> and flowers grow,",
    "In <b>summer</b> the sun will shine and glow!"
   ]
  }
 ],
 "reading": {
  "title": "Deniz's Holiday Plans",
  "e": "🌞",
  "lines": [
   [
    "It is spring, but Deniz is already thinking about summer.",
    "Mevsim ilkbahar ama Deniz şimdiden yazı düşünüyor."
   ],
   [
    "His family is going to visit his grandparents in Izmir.",
    "Ailesi İzmir'deki büyükanne ve büyükbabasını ziyaret edecek."
   ],
   [
    "They are going to stay there for two weeks.",
    "Orada iki hafta kalacaklar."
   ],
   [
    "Deniz is going to swim in the sea every morning.",
    "Deniz her sabah denizde yüzecek."
   ],
   [
    "His sister Elif is going to read books on the beach because she doesn't like the water.",
    "Kız kardeşi Elif suyu sevmediği için kumsalda kitap okuyacak."
   ],
   [
    "In the evenings, they are going to eat ice cream.",
    "Akşamları dondurma yiyecekler."
   ],
   [
    "Deniz hopes it won't rain, so he is not going to take his umbrella.",
    "Deniz yağmur yağmayacağını umuyor, bu yüzden şemsiyesini almayacak."
   ],
   [
    "Mum is going to take hers, just in case!",
    "Annesi, her ihtimale karşı, kendi şemsiyesini alacak!"
   ]
  ],
  "qs": [
   {
    "q": "Where is Deniz's family going to go?",
    "tr": "Deniz'in ailesi nereye gidecek?",
    "options": [
     "to Izmir",
     "to Bursa",
     "to Ankara"
    ],
    "answer": "to Izmir"
   },
   {
    "q": "Why is Elif going to read on the beach?",
    "tr": "Elif neden kumsalda kitap okuyacak?",
    "options": [
     "She doesn't like the water.",
     "She is tired.",
     "She has no swimsuit."
    ],
    "answer": "She doesn't like the water."
   },
   {
    "q": "Who is going to take an umbrella?",
    "tr": "Kim şemsiye alacak?",
    "options": [
     "Deniz",
     "Mum",
     "Elif"
    ],
    "answer": "Mum"
   }
  ]
 },
 "listening": [
  {
   "say": "Look at the sky! It is going to rain.",
   "q": "What is going to happen?",
   "tr": "Ne olacak?",
   "options": [
    {
     "e": "🌧️",
     "v": "rain"
    },
    {
     "e": "❄️",
     "v": "snow"
    },
    {
     "e": "☀️",
     "v": "sun"
    }
   ],
   "answer": "rain"
  },
  {
   "say": "In winter, we are going to make a snowman in the garden.",
   "q": "What are they going to make?",
   "tr": "Ne yapacaklar?",
   "options": [
    {
     "e": "⛄",
     "v": "snowman"
    },
    {
     "e": "🏰",
     "v": "castle"
    },
    {
     "e": "🌈",
     "v": "rainbow"
    }
   ],
   "answer": "snowman"
  },
  {
   "say": "Can is going to take his umbrella because it is windy and wet.",
   "q": "What is Can going to take?",
   "tr": "Can ne alacak?",
   "options": [
    {
     "e": "☂️",
     "v": "umbrella"
    },
    {
     "e": "🧢",
     "v": "cap"
    },
    {
     "e": "🎒",
     "v": "bag"
    }
   ],
   "answer": "umbrella"
  },
  {
   "say": "I can hear the thunder. A big storm is coming tonight.",
   "q": "What can he hear?",
   "tr": "Ne duyuyor?",
   "options": [
    {
     "e": "🌩️",
     "v": "thunder"
    },
    {
     "e": "🐦",
     "v": "birds"
    },
    {
     "e": "🚗",
     "v": "cars"
    }
   ],
   "answer": "thunder"
  },
  {
   "say": "My favourite season is autumn. The leaves are red and yellow.",
   "q": "What is his favourite season?",
   "tr": "En sevdiği mevsim hangisi?",
   "options": [
    {
     "e": "🍂",
     "v": "autumn"
    },
    {
     "e": "☀️",
     "v": "summer"
    },
    {
     "e": "🌱",
     "v": "spring"
    }
   ],
   "answer": "autumn"
  }
 ],
 "speaking": [
  {
   "e": "🌱",
   "en": "We are going to plant flowers in spring.",
   "tr": "İlkbaharda çiçek dikeceğiz."
  },
  {
   "e": "☀️",
   "en": "I am going to swim in the sea this summer.",
   "tr": "Bu yaz denizde yüzeceğim."
  },
  {
   "e": "☂️",
   "en": "I am going to take my umbrella.",
   "tr": "Şemsiyemi alacağım."
  },
  {
   "e": "⛈️",
   "en": "There is going to be a storm tonight.",
   "tr": "Bu akşam fırtına olacak."
  },
  {
   "e": "🌈",
   "en": "Look! I can see a rainbow!",
   "tr": "Bak! Bir gökkuşağı görüyorum!"
  }
 ],
 "write": {
  "title": "My Summer Plans",
  "en": "Write about your plans for the summer. What are you going to do? Where are you going to go?",
  "tr": "Yaz planlarını anlat. Neler yapacaksın? Nereye gideceksin?",
  "starters": [
   "This summer, I",
   "I am going to",
   "We are going to visit",
   "I am not going to",
   "My family",
   "It will be"
  ],
  "checks": [
   {
    "re": /\b(am|is|are) (not )?going to\b/,
    "t": "“going to” kalıbını kullan (I am going to…)"
   },
   {
    "re": /\b(summer|spring|autumn|winter|storm|rainbow|umbrella|thunder)\b/,
    "t": "Bir mevsim ya da hava kelimesi yaz (summer, rainbow…)"
   }
  ],
  "model": "This summer, I am going to visit my grandparents in Izmir. We are going to stay there for two weeks. I am going to swim in the sea every morning, and my sister is going to read on the beach. If there is a storm, we are going to stay at home and play games. If it rains, I am going to take my umbrella and look for a rainbow. In the evenings, we are going to eat ice cream. I think it is going to be a great summer!"
 },
 "towers": [
  {
   "e": "⛄",
   "title": "Winter Plans",
   "steps": [
    {
     "tr": [
      [
       "Kardan adam yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "is going to build a snowman",
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
       "kardan adam yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is going to build a snowman",
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
       "bahçede",
       "where"
      ],
      [
       "kardan adam yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is going to build a snowman",
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
       "Can",
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
       "kardan adam yapacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "is going to build a snowman",
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
  },
  {
   "e": "☀️",
   "title": "Summer Plans",
   "steps": [
    {
     "tr": [
      [
       "Yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "is going to swim",
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
       "yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is going to swim",
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
       "denizde",
       "where"
      ],
      [
       "yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is going to swim",
       "does"
      ],
      [
       "in the sea",
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
       "bu yaz",
       "when"
      ],
      [
       "denizde",
       "where"
      ],
      [
       "yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is going to swim",
       "does"
      ],
      [
       "in the sea",
       "where"
      ],
      [
       "this summer",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "☂️",
   "title": "Rainy Day",
   "steps": [
    {
     "tr": [
      [
       "Şemsiye alacak.",
       "does"
      ]
     ],
     "en": [
      [
       "is going to take an umbrella",
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
       "şemsiye alacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to take an umbrella",
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
       "okula",
       "where"
      ],
      [
       "şemsiye alacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to take an umbrella",
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
       "Mert",
       "who"
      ],
      [
       "bu sabah",
       "when"
      ],
      [
       "okula",
       "where"
      ],
      [
       "şemsiye alacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to take an umbrella",
       "does"
      ],
      [
       "to school",
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
// ---------- Ünite 22 ----------
UNITS_A2.push({
 "L": {
  "rank": "Space Cadet",
  "theme": "Space",
  "tr": "Uzay",
  "icon": "🚀",
  "song": {
   "title": "Up in Space",
   "lines": [
    "I will fly in a <b>rocket</b> to the <b>moon</b>,",
    "I will see a million <b>stars</b> up there,",
    "An <b>astronaut</b> will wave to <b>Earth</b>,",
    "Floating, floating, in the air!"
   ]
  },
  "cards": [
   {
    "e": "🪐",
    "w": "planet",
    "ipa": "/ˈplænɪt/",
    "tr": "Gezegen",
    "ex": "Saturn is a big planet with rings."
   },
   {
    "e": "🌙",
    "w": "moon",
    "ipa": "/mun/",
    "tr": "Ay",
    "ex": "People will visit the moon again."
   },
   {
    "e": "⭐",
    "w": "star",
    "ipa": "/stɑr/",
    "tr": "Yıldız",
    "ex": "I can see a bright star in the sky."
   },
   {
    "e": "🚀",
    "w": "rocket",
    "ipa": "/ˈrɑkɪt/",
    "tr": "Roket",
    "ex": "The rocket will fly into space."
   },
   {
    "e": "👨‍🚀",
    "w": "astronaut",
    "ipa": "/ˈæstrəˌnɔt/",
    "tr": "Astronot",
    "ex": "An astronaut will live on the space station."
   },
   {
    "e": "👽",
    "w": "alien",
    "ipa": "/ˈeɪliən/",
    "tr": "Uzaylı",
    "ex": "I don't think we will meet an alien."
   },
   {
    "e": "🌍",
    "w": "earth",
    "ipa": "/ɜrθ/",
    "tr": "Dünya",
    "ex": "Earth is our home."
   },
   {
    "e": "🔭",
    "w": "telescope",
    "ipa": "/ˈtɛləˌskoʊp/",
    "tr": "Teleskop",
    "ex": "We will look at the stars with a telescope."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "rocket",
    "options": [
     "rocket",
     "planet",
     "telescope"
    ],
    "hint": [
     "It flies very fast into space!",
     "Uzaya çok hızlı uçar!"
    ]
   },
   {
    "type": "pick",
    "q": "You look through it to see the stars. What is it?",
    "tr": "Yıldızları görmek için ona bakarsın. Nedir?",
    "options": [
     {
      "e": "🔭",
      "v": "telescope"
     },
     {
      "e": "🚀",
      "v": "rocket"
     },
     {
      "e": "👽",
      "v": "alien"
     },
     {
      "e": "🌍",
      "v": "earth"
     }
    ],
    "answer": "telescope",
    "hint": [
     "It makes faraway things look close.",
     "Uzaktaki şeyleri yakın gösterir."
    ]
   },
   {
    "type": "listen",
    "say": "In the future, an astronaut will travel to Mars in a rocket. It will take many months.",
    "q": "Where will the astronaut travel?",
    "tr": "Astronot nereye gidecek?",
    "options": [
     {
      "e": "🔴",
      "v": "Mars"
     },
     {
      "e": "🌙",
      "v": "the moon"
     },
     {
      "e": "☀️",
      "v": "the sun"
     }
    ],
    "answer": "Mars",
    "hint": [
     "Listen again: “…travel to M…”.",
     "Tekrar dinle: “…travel to M…”."
    ]
   },
   {
    "type": "write",
    "e": "👽",
    "sentence": "I think we ___ meet an alien one day.",
    "answer": "will",
    "mask": "W _ _ L",
    "tr": "Bence bir gün bir uzaylıyla karşılaşacağız.",
    "hint": [
     "We use it to talk about the future. w - i - l - l",
     "Gelecekten bahsederken kullanırız. w - i - l - l"
    ]
   },
   {
    "type": "speak",
    "sentence": "I think astronauts will live on the moon.",
    "tr": "Bence astronotlar Ay'da yaşayacak."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "astronaut",
    "hint": [
     "A person who travels in space! a - s - t - r - o - n - a - u - t",
     "Uzayda yolculuk eden kişi! a - s - t - r - o - n - a - u - t"
    ]
   },
   {
    "type": "dictation",
    "word": "planet",
    "e": "🪐",
    "hint": [
     "It starts with “p”. Earth and Mars are two of them.",
     "“p” ile başlıyor. Dünya ve Mars bunlardan ikisi."
    ]
   },
   {
    "type": "order",
    "tr": "Yarın hava güneşli olmayacak.",
    "answer": "It won't be sunny tomorrow",
    "extra": "going",
    "hint": [
     "Start with: “It won't …”",
     "Şöyle başla: “It won't …”"
    ]
   },
   {
    "type": "story",
    "say": "Kerem loves space. He thinks that one day people will live on Mars. He says that cars will fly and robots will help us. But he doesn't think we will meet aliens. He wants to be an astronaut.",
    "q": "What does Kerem think about aliens?",
    "tr": "Kerem uzaylılar hakkında ne düşünüyor?",
    "options": [
     "We will meet them.",
     "We won't meet them.",
     "They will visit his house."
    ],
    "answer": "We won't meet them.",
    "hint": [
     "Listen for “doesn't think”!",
     "“Doesn't think” ifadesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bir gün Mars'a gideceğiz.",
    "answer": "We will go to Mars one day."
   }
  ]
 },
 "songs": [
  {
   "title": "Twinkle in the Night",
   "lines": [
    "Little <b>star</b>, so far away,",
    "You will shine when it is dark,",
    "I will wave and say hello,",
    "Twinkle, twinkle in the park!"
   ]
  },
  {
   "title": "Our Home Planet",
   "lines": [
    "Round and blue, our home is <b>Earth</b>,",
    "A beautiful <b>planet</b> since our birth,",
    "I will keep it clean and green,",
    "The best place that I have seen!"
   ]
  },
  {
   "title": "Hello, Alien!",
   "lines": [
    "Will an <b>alien</b> say hello?",
    "Green and funny, head to toe,",
    "He will come in a silver ship,",
    "And we will dance and take a trip!"
   ]
  },
  {
   "title": "Look Up High",
   "lines": [
    "Take the <b>telescope</b> outside,",
    "Look up high, the sky is wide,",
    "I will find the <b>moon</b> tonight,",
    "Big and round and silver-bright!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep and the Stars",
  "e": "🔭",
  "lines": [
   [
    "Zeynep loves space and wants to be an astronaut.",
    "Zeynep uzayı çok seviyor ve astronot olmak istiyor."
   ],
   [
    "Last birthday, her uncle gave her a telescope.",
    "Geçen doğum gününde amcası ona bir teleskop hediye etti."
   ],
   [
    "Every clear night, she looks at the moon and the stars.",
    "Her açık gecede Ay'a ve yıldızlara bakıyor."
   ],
   [
    "She thinks that people will live on the moon one day.",
    "Bir gün insanların Ay'da yaşayacağını düşünüyor."
   ],
   [
    "Her brother Kerem doesn't agree because it is too cold and dry there.",
    "Kardeşi Kerem, orası çok soğuk ve kuru olduğu için aynı fikirde değil."
   ],
   [
    "He says, “We won't live there, but robots will.”",
    "“Biz orada yaşamayacağız ama robotlar yaşayacak,” diyor."
   ],
   [
    "They both think that aliens are fun, but they don't believe in them.",
    "İkisi de uzaylıların eğlenceli olduğunu düşünüyor ama onlara inanmıyor."
   ],
   [
    "Tonight, they will look at Saturn together.",
    "Bu akşam birlikte Satürn'e bakacaklar."
   ]
  ],
  "qs": [
   {
    "q": "What did Zeynep's uncle give her?",
    "tr": "Zeynep'in amcası ona ne verdi?",
    "options": [
     "a rocket",
     "a telescope",
     "a book"
    ],
    "answer": "a telescope"
   },
   {
    "q": "Why doesn't Kerem think people will live on the moon?",
    "tr": "Kerem neden insanların Ay'da yaşayacağını düşünmüyor?",
    "options": [
     "It is too far.",
     "It is too cold and dry.",
     "It is too small."
    ],
    "answer": "It is too cold and dry."
   },
   {
    "q": "What will they look at tonight?",
    "tr": "Bu akşam neye bakacaklar?",
    "options": [
     "Saturn",
     "Mars",
     "the sun"
    ],
    "answer": "Saturn"
   }
  ]
 },
 "listening": [
  {
   "say": "The rocket will take off in five minutes.",
   "q": "What will take off?",
   "tr": "Ne havalanacak?",
   "options": [
    {
     "e": "🚀",
     "v": "rocket"
    },
    {
     "e": "✈️",
     "v": "plane"
    },
    {
     "e": "🚁",
     "v": "helicopter"
    }
   ],
   "answer": "rocket"
  },
  {
   "say": "Tonight we will look at the stars with my new telescope.",
   "q": "What will they use?",
   "tr": "Neyi kullanacaklar?",
   "options": [
    {
     "e": "🔭",
     "v": "telescope"
    },
    {
     "e": "📷",
     "v": "camera"
    },
    {
     "e": "👓",
     "v": "glasses"
    }
   ],
   "answer": "telescope"
  },
  {
   "say": "I don't think there will be any aliens on the moon.",
   "q": "What does she think?",
   "tr": "O ne düşünüyor?",
   "options": [
    {
     "e": "👽",
     "v": "no aliens"
    },
    {
     "e": "🐶",
     "v": "dogs"
    },
    {
     "e": "🤖",
     "v": "robots"
    }
   ],
   "answer": "no aliens"
  },
  {
   "say": "The astronaut will send a message to Earth.",
   "q": "Where will the message go?",
   "tr": "Mesaj nereye gidecek?",
   "options": [
    {
     "e": "🌍",
     "v": "Earth"
    },
    {
     "e": "🌙",
     "v": "the moon"
    },
    {
     "e": "🪐",
     "v": "Mars"
    }
   ],
   "answer": "Earth"
  },
  {
   "say": "Venus is a hot planet. It won't be a good place for people.",
   "q": "What is Venus like?",
   "tr": "Venüs nasıl bir yer?",
   "options": [
    {
     "e": "🔥",
     "v": "hot"
    },
    {
     "e": "❄️",
     "v": "cold"
    },
    {
     "e": "🌧️",
     "v": "rainy"
    }
   ],
   "answer": "hot"
  }
 ],
 "speaking": [
  {
   "e": "🚀",
   "en": "The rocket will fly to the moon.",
   "tr": "Roket Ay'a uçacak."
  },
  {
   "e": "👨‍🚀",
   "en": "I think I will be an astronaut.",
   "tr": "Bence astronot olacağım."
  },
  {
   "e": "🔭",
   "en": "We will look at the stars tonight.",
   "tr": "Bu gece yıldızlara bakacağız."
  },
  {
   "e": "👽",
   "en": "I don't think we will meet an alien.",
   "tr": "Bence bir uzaylıyla karşılaşmayacağız."
  },
  {
   "e": "🌍",
   "en": "Earth is our home planet.",
   "tr": "Dünya bizim gezegenimiz."
  }
 ],
 "write": {
  "title": "Life in the Future",
  "en": "What will life be like in 100 years? Write your ideas. Use “will” and “won't”.",
  "tr": "100 yıl sonra hayat nasıl olacak? Fikirlerini yaz. “will” ve “won't” kullan.",
  "starters": [
   "In the future, people will",
   "I think we will",
   "We won't",
   "There will be",
   "Astronauts will",
   "I hope that"
  ],
  "checks": [
   {
    "re": /\b(will|won't)\b/,
    "t": "“will” ya da “won't” kullan (People will live…)"
   },
   {
    "re": /\b(planet|moon|star|stars|rocket|rockets|astronaut|astronauts|alien|aliens|earth|telescope)\b/,
    "t": "Bir uzay kelimesi yaz (rocket, moon, alien…)"
   }
  ],
  "model": "I think life will be very different in 100 years. People will travel in rockets to the moon and to other planets. Some astronauts will live on Mars. I don't think we will meet aliens, but we will find new stars with big telescopes. We won't use plastic bags, and Earth will be clean and green. I hope that everyone will be happy!"
 },
 "towers": [
  {
   "e": "🚀",
   "title": "Rocket Launch",
   "steps": [
    {
     "tr": [
      [
       "Havalanacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will take off",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Roket",
       "who"
      ],
      [
       "havalanacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
       "who"
      ],
      [
       "will take off",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Roket",
       "who"
      ],
      [
       "Florida'dan",
       "where"
      ],
      [
       "havalanacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
       "who"
      ],
      [
       "will take off",
       "does"
      ],
      [
       "from Florida",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Roket",
       "who"
      ],
      [
       "yarın",
       "when"
      ],
      [
       "Florida'dan",
       "where"
      ],
      [
       "havalanacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
       "who"
      ],
      [
       "will take off",
       "does"
      ],
      [
       "from Florida",
       "where"
      ],
      [
       "tomorrow",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🔭",
   "title": "Star Night",
   "steps": [
    {
     "tr": [
      [
       "Yıldızlara bakacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will look at the stars",
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
       "yıldızlara bakacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will look at the stars",
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
       "bahçeden",
       "where"
      ],
      [
       "yıldızlara bakacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will look at the stars",
       "does"
      ],
      [
       "from the garden",
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
       "bu gece",
       "when"
      ],
      [
       "bahçeden",
       "where"
      ],
      [
       "yıldızlara bakacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "will look at the stars",
       "does"
      ],
      [
       "from the garden",
       "where"
      ],
      [
       "tonight",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "👨‍🚀",
   "title": "Astronaut Life",
   "steps": [
    {
     "tr": [
      [
       "Uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "will fly",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tom",
       "who"
      ],
      [
       "uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Tom",
       "who"
      ],
      [
       "will fly",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tom",
       "who"
      ],
      [
       "Ay'a",
       "where"
      ],
      [
       "uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Tom",
       "who"
      ],
      [
       "will fly",
       "does"
      ],
      [
       "to the moon",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tom",
       "who"
      ],
      [
       "gelecek yıl",
       "when"
      ],
      [
       "Ay'a",
       "where"
      ],
      [
       "uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Tom",
       "who"
      ],
      [
       "will fly",
       "does"
      ],
      [
       "to the moon",
       "where"
      ],
      [
       "next year",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 23 ----------
UNITS_A2.push({
 "L": {
  "rank": "Super Shopper",
  "theme": "Shopping",
  "tr": "Alışveriş",
  "icon": "🛍️",
  "song": {
   "title": "Let's Go Shopping",
   "lines": [
    "I grab my <b>wallet</b>, off I go,",
    "To the <b>shop</b> on the street below,",
    "How much is it? Please tell me the <b>price</b>,",
    "Cheaper, cheaper, that is nice!"
   ]
  },
  "cards": [
   {
    "e": "💵",
    "w": "money",
    "ipa": "/ˈmʌni/",
    "tr": "Para",
    "ex": "I have some money in my wallet."
   },
   {
    "e": "🏷️",
    "w": "price",
    "ipa": "/praɪs/",
    "tr": "Fiyat",
    "ex": "What is the price of this bag?"
   },
   {
    "e": "👛",
    "w": "wallet",
    "ipa": "/ˈwɑlɪt/",
    "tr": "Cüzdan",
    "ex": "My wallet is brown."
   },
   {
    "e": "🏪",
    "w": "shop",
    "ipa": "/ʃɑp/",
    "tr": "Dükkân",
    "ex": "The shop opens at nine o'clock."
   },
   {
    "e": "💰",
    "w": "coin",
    "ipa": "/kɔɪn/",
    "tr": "Madeni para",
    "ex": "I have a gold coin."
   },
   {
    "e": "📄",
    "w": "receipt",
    "ipa": "/rɪˈsit/",
    "tr": "Fiş",
    "ex": "Keep the receipt, please."
   },
   {
    "e": "🛍️",
    "w": "basket",
    "ipa": "/ˈbæskɪt/",
    "tr": "Sepet",
    "ex": "I put the apples in the basket."
   },
   {
    "e": "🛒",
    "w": "trolley",
    "ipa": "/ˈtrɑli/",
    "tr": "Alışveriş arabası",
    "ex": "Mum pushes the trolley."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "wallet",
    "options": [
     "wallet",
     "trolley",
     "coin"
    ],
    "hint": [
     "You keep your money in it!",
     "Paranı içinde saklarsın!"
    ]
   },
   {
    "type": "pick",
    "q": "You get it after you pay. It shows what you bought. What is it?",
    "tr": "Parayı ödedikten sonra onu alırsın. Ne aldığını gösterir. Nedir?",
    "options": [
     {
      "e": "📄",
      "v": "receipt"
     },
     {
      "e": "👛",
      "v": "wallet"
     },
     {
      "e": "🛍️",
      "v": "basket"
     },
     {
      "e": "🛒",
      "v": "trolley"
     }
    ],
    "answer": "receipt",
    "hint": [
     "It is a long, thin piece of paper.",
     "Uzun, ince bir kâğıt parçası."
    ]
   },
   {
    "type": "listen",
    "say": "The red wallet is ten pounds. The blue wallet is fifteen pounds.",
    "q": "Which wallet is cheaper?",
    "tr": "Hangi cüzdan daha ucuz?",
    "options": [
     {
      "e": "🔴",
      "v": "red"
     },
     {
      "e": "🔵",
      "v": "blue"
     },
     {
      "e": "🟢",
      "v": "green"
     }
    ],
    "answer": "red",
    "hint": [
     "Ten is less than fifteen.",
     "On, on beşten daha azdır."
    ]
   },
   {
    "type": "write",
    "e": "🛒",
    "sentence": "Mum pushes the ___ in the supermarket.",
    "answer": "trolley",
    "mask": "T _ _ _ _ _ Y",
    "tr": "Annem süpermarkette alışveriş arabasını itiyor.",
    "hint": [
     "You push it and put things in it. t - r - o - l - l - e - y",
     "Onu itersin, içine alışveriş koyarsın. t - r - o - l - l - e - y"
    ]
   },
   {
    "type": "speak",
    "sentence": "How much is this wallet?",
    "tr": "Bu cüzdan ne kadar?"
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "shop",
    "hint": [
     "You go there to buy things! s - h - o - p",
     "Oraya bir şeyler satın almaya gidersin! s - h - o - p"
    ]
   },
   {
    "type": "dictation",
    "word": "basket",
    "e": "🛍️",
    "hint": [
     "It starts with “b”. You carry it in the shop.",
     "“b” ile başlıyor. Dükkânda onu elinde taşırsın."
    ]
   },
   {
    "type": "order",
    "tr": "Bu çanta çok pahalı.",
    "answer": "This bag is too expensive",
    "extra": "cheap",
    "hint": [
     "Start with: “This bag …”",
     "Şöyle başla: “This bag …”"
    ]
   },
   {
    "type": "story",
    "say": "Ece went to the shop with her mum. She wanted a new wallet. The blue wallet was fifty lira. It was too expensive. The red wallet was thirty lira, so Ece bought the red one.",
    "q": "Why did Ece buy the red wallet?",
    "tr": "Ece kırmızı cüzdanı neden aldı?",
    "options": [
     "It was cheaper",
     "It was bigger",
     "It was blue"
    ],
    "answer": "It was cheaper",
    "hint": [
     "The blue wallet was too expensive.",
     "Mavi cüzdan çok pahalıydı."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bu çanta ondan daha ucuz.",
    "answer": "This bag is cheaper than that one."
   }
  ]
 },
 "songs": [
  {
   "title": "Coin, Coin",
   "lines": [
    "I found a shiny <b>coin</b> today,",
    "I put it in my pocket, hooray,",
    "One more coin and then I'll see,",
    "A sweet for me, for you, for me!"
   ]
  },
  {
   "title": "Basket and Trolley",
   "lines": [
    "Mum pushes the <b>trolley</b>, round and round,",
    "I fill my <b>basket</b> with things I found,",
    "Apples, bread and milk, and then,",
    "We count them all again and again!"
   ]
  },
  {
   "title": "The Receipt",
   "lines": [
    "The lady gave me a <b>receipt</b>,",
    "Long and white and very neat,",
    "I checked the <b>price</b> and counted twice,",
    "Everything was cheap and nice!"
   ]
  },
  {
   "title": "Too Expensive",
   "lines": [
    "My <b>money</b> is small, the toy is tall,",
    "It's too expensive, that is all,",
    "A cheaper one is on the shelf,",
    "I'll buy it for myself!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Shopping Day",
  "e": "🛍️",
  "lines": [
   [
    "On Saturday, Ece went to a shop with her mum.",
    "Cumartesi günü Ece annesiyle bir dükkâna gitti."
   ],
   [
    "She wanted a new wallet, but she only had twenty lira.",
    "Yeni bir cüzdan istiyordu ama yalnızca yirmi lirası vardı."
   ],
   [
    "The blue wallet was thirty lira, so it was too expensive.",
    "Mavi cüzdan otuz liraydı, bu yüzden çok pahalıydı."
   ],
   [
    "The green wallet was cheaper, and it was only eighteen lira.",
    "Yeşil cüzdan daha ucuzdu ve yalnızca on sekiz liraydı."
   ],
   [
    "Ece took the green wallet and put it in her basket.",
    "Ece yeşil cüzdanı alıp sepetine koydu."
   ],
   [
    "Then she gave the money to the shop assistant.",
    "Sonra parayı tezgâhtara verdi."
   ],
   [
    "The assistant gave her two coins and a receipt.",
    "Tezgâhtar ona iki bozuk para ve bir fiş verdi."
   ],
   [
    "Ece was very happy with her new wallet.",
    "Ece yeni cüzdanından çok memnundu."
   ]
  ],
  "qs": [
   {
    "q": "How much was the green wallet?",
    "tr": "Yeşil cüzdan ne kadardı?",
    "options": [
     "eighteen lira",
     "twenty lira",
     "thirty lira"
    ],
    "answer": "eighteen lira"
   },
   {
    "q": "Why didn't Ece buy the blue wallet?",
    "tr": "Ece mavi cüzdanı neden almadı?",
    "options": [
     "It was too small",
     "It was too expensive",
     "It was broken"
    ],
    "answer": "It was too expensive"
   },
   {
    "q": "What did the assistant give Ece?",
    "tr": "Tezgâhtar Ece'ye ne verdi?",
    "options": [
     "a bag and a ticket",
     "two coins and a receipt",
     "a basket and a trolley"
    ],
    "answer": "two coins and a receipt"
   }
  ]
 },
 "listening": [
  {
   "say": "How much is this basket? It is ten lira.",
   "q": "How much is the basket?",
   "tr": "Sepet ne kadar?",
   "options": [
    {
     "e": "🔟",
     "v": "ten lira"
    },
    {
     "e": "5️⃣",
     "v": "five lira"
    },
    {
     "e": "💵",
     "v": "twenty lira"
    }
   ],
   "answer": "ten lira"
  },
  {
   "say": "I put the coins in my wallet.",
   "q": "Where did he put the coins?",
   "tr": "Bozuk paraları nereye koydu?",
   "options": [
    {
     "e": "👛",
     "v": "wallet"
    },
    {
     "e": "🛍️",
     "v": "basket"
    },
    {
     "e": "🎒",
     "v": "bag"
    }
   ],
   "answer": "wallet"
  },
  {
   "say": "The red bag is more expensive than the blue bag.",
   "q": "Which bag is more expensive?",
   "tr": "Hangi çanta daha pahalı?",
   "options": [
    {
     "e": "🔴",
     "v": "red bag"
    },
    {
     "e": "🔵",
     "v": "blue bag"
    },
    {
     "e": "🟢",
     "v": "green bag"
    }
   ],
   "answer": "red bag"
  },
  {
   "say": "Dad is pushing the trolley.",
   "q": "What is Dad pushing?",
   "tr": "Babası neyi itiyor?",
   "options": [
    {
     "e": "🛒",
     "v": "trolley"
    },
    {
     "e": "🛍️",
     "v": "basket"
    },
    {
     "e": "🚲",
     "v": "bike"
    }
   ],
   "answer": "trolley"
  },
  {
   "say": "The shop opens at nine o'clock.",
   "q": "When does the shop open?",
   "tr": "Dükkân saat kaçta açılıyor?",
   "options": [
    {
     "e": "🕘",
     "v": "nine"
    },
    {
     "e": "🕐",
     "v": "one"
    },
    {
     "e": "🕖",
     "v": "seven"
    }
   ],
   "answer": "nine"
  }
 ],
 "speaking": [
  {
   "e": "💰",
   "en": "How much is this wallet?",
   "tr": "Bu cüzdan ne kadar?"
  },
  {
   "e": "🏷️",
   "en": "It is cheaper than that one.",
   "tr": "Bu ondan daha ucuz."
  },
  {
   "e": "💵",
   "en": "It is too expensive for me.",
   "tr": "Bu benim için çok pahalı."
  },
  {
   "e": "📄",
   "en": "Can I have a receipt, please?",
   "tr": "Fiş alabilir miyim lütfen?"
  },
  {
   "e": "🛒",
   "en": "Where is the trolley?",
   "tr": "Alışveriş arabası nerede?"
  }
 ],
 "write": {
  "title": "My Shopping Trip",
  "en": "Write about something you want to buy. How much is it? Is it cheap or expensive?",
  "tr": "Almak istediğin bir şeyi anlat. Ne kadar? Ucuz mu, pahalı mı?",
  "starters": [
   "I want to buy a",
   "How much is",
   "It is too expensive",
   "This one is cheaper than",
   "I have some money",
   "I will buy"
  ],
  "checks": [
   {
    "re": /\b(cheaper|more expensive|too expensive|cheap|expensive)\b/,
    "t": "Fiyatı anlat (cheaper, more expensive, too expensive…)"
   },
   {
    "re": /\bhow much (is|are)\b/,
    "t": "Fiyat sor (How much is…? How much are…?)"
   }
  ],
  "model": "I want to buy a new football. How much is it? It is eighty lira, but I only have fifty lira in my wallet. The blue football is cheaper than the red one. The red one is too expensive for me, so I will buy the blue one. I put it in my basket and ask for a receipt."
 },
 "towers": [
  {
   "e": "🏪",
   "title": "Wallet Shop",
   "steps": [
    {
     "tr": [
      [
       "Cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "bought a wallet",
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
       "cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a wallet",
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
       "bir dükkânda",
       "where"
      ],
      [
       "cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a wallet",
       "does"
      ],
      [
       "in a shop",
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
       "geçen cumartesi",
       "when"
      ],
      [
       "bir dükkânda",
       "where"
      ],
      [
       "cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "bought a wallet",
       "does"
      ],
      [
       "in a shop",
       "where"
      ],
      [
       "last Saturday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "💰",
   "title": "Coin Day",
   "steps": [
    {
     "tr": [
      [
       "Bozuk parayla ödedi.",
       "does"
      ]
     ],
     "en": [
      [
       "paid with coins",
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
       "bozuk parayla ödedi.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "paid with coins",
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
       "markette",
       "where"
      ],
      [
       "bozuk parayla ödedi.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "paid with coins",
       "does"
      ],
      [
       "at the market",
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
       "bu sabah",
       "when"
      ],
      [
       "markette",
       "where"
      ],
      [
       "bozuk parayla ödedi.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "paid with coins",
       "does"
      ],
      [
       "at the market",
       "where"
      ],
      [
       "this morning",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🛒",
   "title": "Trolley Fun",
   "steps": [
    {
     "tr": [
      [
       "Alışveriş arabasını itti.",
       "does"
      ]
     ],
     "en": [
      [
       "pushed the trolley",
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
       "alışveriş arabasını itti.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "pushed the trolley",
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
       "süpermarkette",
       "where"
      ],
      [
       "alışveriş arabasını itti.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "pushed the trolley",
       "does"
      ],
      [
       "in the supermarket",
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
       "cumartesi günü",
       "when"
      ],
      [
       "süpermarkette",
       "where"
      ],
      [
       "alışveriş arabasını itti.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "pushed the trolley",
       "does"
      ],
      [
       "in the supermarket",
       "where"
      ],
      [
       "on Saturday",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 24 ----------
UNITS_A2.push({
 "L": {
  "rank": "Rock Star",
  "theme": "Music",
  "tr": "Müzik",
  "icon": "🎸",
  "song": {
   "title": "Music Time",
   "lines": [
    "I have played the <b>guitar</b>, strum, strum, strum,",
    "I have played the <b>drum</b>, bum, bum, bum,",
    "Have you ever played the <b>piano</b> too?",
    "Come and make some music with me and you!"
   ]
  },
  "cards": [
   {
    "e": "🎸",
    "w": "guitar",
    "ipa": "/gɪˈtɑr/",
    "tr": "Gitar",
    "ex": "I have played the guitar for a year."
   },
   {
    "e": "🎹",
    "w": "piano",
    "ipa": "/piˈænoʊ/",
    "tr": "Piyano",
    "ex": "Have you ever played the piano?"
   },
   {
    "e": "🥁",
    "w": "drum",
    "ipa": "/drʌm/",
    "tr": "Davul",
    "ex": "I have never played the drum."
   },
   {
    "e": "🎻",
    "w": "violin",
    "ipa": "/ˌvaɪəˈlɪn/",
    "tr": "Keman",
    "ex": "She has played the violin since she was six."
   },
   {
    "e": "🎺",
    "w": "trumpet",
    "ipa": "/ˈtrʌmpɪt/",
    "tr": "Trompet",
    "ex": "He has never played the trumpet."
   },
   {
    "e": "🎧",
    "w": "headphones",
    "ipa": "/ˈhɛdˌfoʊnz/",
    "tr": "Kulaklık",
    "ex": "I listen to music with my headphones."
   },
   {
    "e": "🎤",
    "w": "singer",
    "ipa": "/ˈsɪŋər/",
    "tr": "Şarkıcı",
    "ex": "My favourite singer is from Izmir."
   },
   {
    "e": "🎶",
    "w": "concert",
    "ipa": "/ˈkɑnsərt/",
    "tr": "Konser",
    "ex": "We have been to a big concert."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "guitar",
    "options": [
     "guitar",
     "piano",
     "violin"
    ],
    "hint": [
     "You strum its strings!",
     "Tellerine vurarak çalarsın!"
    ]
   },
   {
    "type": "pick",
    "q": "You wear them on your ears to listen to music. What are they?",
    "tr": "Müzik dinlemek için onları kulaklarına takarsın. Nedir?",
    "options": [
     {
      "e": "🎧",
      "v": "headphones"
     },
     {
      "e": "🥁",
      "v": "drum"
     },
     {
      "e": "🎺",
      "v": "trumpet"
     },
     {
      "e": "🎹",
      "v": "piano"
     }
    ],
    "answer": "headphones",
    "hint": [
     "They have two round parts for your ears.",
     "Kulakların için iki yuvarlak parçası var."
    ]
   },
   {
    "type": "listen",
    "say": "I have never played the violin, but I have played the piano many times.",
    "q": "Which instrument has he played?",
    "tr": "Hangi enstrümanı çaldı?",
    "options": [
     {
      "e": "🎹",
      "v": "piano"
     },
     {
      "e": "🎻",
      "v": "violin"
     },
     {
      "e": "🥁",
      "v": "drum"
     }
    ],
    "answer": "piano",
    "hint": [
     "Listen for “but I have played the…”.",
     "“but I have played the…” kısmını dinle."
    ]
   },
   {
    "type": "write",
    "e": "🎸",
    "sentence": "Have you ___ played the guitar?",
    "answer": "ever",
    "mask": "E _ _ R",
    "tr": "Hiç gitar çaldın mı?",
    "hint": [
     "It means “at any time”. e - v - e - r",
     "“Herhangi bir zamanda” demek. e - v - e - r"
    ]
   },
   {
    "type": "speak",
    "sentence": "I have never played the violin.",
    "tr": "Hiç keman çalmadım."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "drum",
    "hint": [
     "You hit it with sticks! d - r - u - m",
     "Ona sopalarla vurursun! d - r - u - m"
    ]
   },
   {
    "type": "dictation",
    "word": "trumpet",
    "e": "🎺",
    "hint": [
     "It starts with “t”. You blow into it.",
     "“t” ile başlıyor. İçine üflersin."
    ]
   },
   {
    "type": "order",
    "tr": "Hiç gitar çalmadım.",
    "answer": "I have never played the guitar",
    "extra": "play",
    "hint": [
     "Start with: “I have …”",
     "Şöyle başla: “I have …”"
    ]
   },
   {
    "type": "story",
    "say": "Zeynep loves music. She has played the violin for two years. She has never played the drum. Last night, she went to a concert and saw her favourite singer.",
    "q": "What has Zeynep never played?",
    "tr": "Zeynep hiç ne çalmadı?",
    "options": [
     "the violin",
     "the drum",
     "the piano"
    ],
    "answer": "the drum",
    "hint": [
     "She has played the violin. Listen for “never”!",
     "Keman çalıyor. “Never” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Hiç konsere gittin mi?",
    "answer": "Have you ever been to a concert?"
   }
  ]
 },
 "songs": [
  {
   "title": "Piano Keys",
   "lines": [
    "Black and white keys in a row,",
    "I play the <b>piano</b> soft and slow,",
    "Do, re, mi, fa, so, la, ti, do,",
    "Have you ever played it too?"
   ]
  },
  {
   "title": "Sweet Violin",
   "lines": [
    "The <b>violin</b> sings a sweet, sweet song,",
    "I have practised all day long,",
    "Have you ever heard it play?",
    "It makes me happy every day!"
   ]
  },
  {
   "title": "Loud Trumpet",
   "lines": [
    "Blow, blow, blow the <b>trumpet</b> loud,",
    "I have played it for the crowd,",
    "In my <b>headphones</b> I hear the beat,",
    "Tap, tap, tap with my feet!"
   ]
  },
  {
   "title": "The Big Concert",
   "lines": [
    "A <b>singer</b> on the stage tonight,",
    "Colourful lights, so big and bright,",
    "I have never been to a <b>concert</b> before,",
    "Clap your hands and shout for more!"
   ]
  }
 ],
 "reading": {
  "title": "Deniz and the Guitar",
  "e": "🎸",
  "lines": [
   [
    "Deniz loves music, and he has played the guitar for two years.",
    "Deniz müziği çok sever ve iki yıldır gitar çalıyor."
   ],
   [
    "He has never played the piano, but he wants to learn.",
    "Hiç piyano çalmadı ama öğrenmek istiyor."
   ],
   [
    "Last week, his school had a big concert.",
    "Geçen hafta okullarında büyük bir konser vardı."
   ],
   [
    "Deniz had never played in a concert before, so he was nervous.",
    "Deniz daha önce hiç konserde çalmamıştı, bu yüzden heyecanlıydı."
   ],
   [
    "His friend Elif is a singer, and she has sung in many places.",
    "Arkadaşı Elif bir şarkıcı ve birçok yerde şarkı söyledi."
   ],
   [
    "Deniz put on his headphones and listened to his song one more time.",
    "Deniz kulaklığını taktı ve şarkısını bir kez daha dinledi."
   ],
   [
    "Then he played the guitar while Elif sang.",
    "Sonra Elif şarkı söylerken gitar çaldı."
   ],
   [
    "Everybody clapped, and Deniz was very happy.",
    "Herkes alkışladı ve Deniz çok mutlu oldu."
   ]
  ],
  "qs": [
   {
    "q": "How long has Deniz played the guitar?",
    "tr": "Deniz ne kadar zamandır gitar çalıyor?",
    "options": [
     "for two months",
     "for two years",
     "for ten years"
    ],
    "answer": "for two years"
   },
   {
    "q": "What has Deniz never played?",
    "tr": "Deniz hiç ne çalmadı?",
    "options": [
     "the guitar",
     "the drum",
     "the piano"
    ],
    "answer": "the piano"
   },
   {
    "q": "What did Elif do at the concert?",
    "tr": "Elif konserde ne yaptı?",
    "options": [
     "She sang",
     "She played the drum",
     "She played the violin"
    ],
    "answer": "She sang"
   }
  ]
 },
 "listening": [
  {
   "say": "I have played the drum, but I have never played the trumpet.",
   "q": "What has he never played?",
   "tr": "Hiç ne çalmadı?",
   "options": [
    {
     "e": "🥁",
     "v": "drum"
    },
    {
     "e": "🎺",
     "v": "trumpet"
    },
    {
     "e": "🎻",
     "v": "violin"
    }
   ],
   "answer": "trumpet"
  },
  {
   "say": "I have a new pair of headphones.",
   "q": "What does she have?",
   "tr": "Onun neyi var?",
   "options": [
    {
     "e": "🎧",
     "v": "headphones"
    },
    {
     "e": "🎹",
     "v": "piano"
    },
    {
     "e": "🎤",
     "v": "microphone"
    }
   ],
   "answer": "headphones"
  },
  {
   "say": "We have been to a concert twice.",
   "q": "How many times have they been to a concert?",
   "tr": "Kaç kez konsere gittiler?",
   "options": [
    {
     "e": "1️⃣",
     "v": "once"
    },
    {
     "e": "2️⃣",
     "v": "twice"
    },
    {
     "e": "3️⃣",
     "v": "three times"
    }
   ],
   "answer": "twice"
  },
  {
   "say": "My uncle has played the violin since he was ten.",
   "q": "What does the uncle play?",
   "tr": "Amcası ne çalıyor?",
   "options": [
    {
     "e": "🎻",
     "v": "violin"
    },
    {
     "e": "🎸",
     "v": "guitar"
    },
    {
     "e": "🎹",
     "v": "piano"
    }
   ],
   "answer": "violin"
  },
  {
   "say": "My favourite singer is coming to Izmir next month.",
   "q": "Who is coming to Izmir?",
   "tr": "İzmir'e kim geliyor?",
   "options": [
    {
     "e": "🎤",
     "v": "a singer"
    },
    {
     "e": "⚽",
     "v": "a footballer"
    },
    {
     "e": "🎺",
     "v": "a trumpet player"
    }
   ],
   "answer": "a singer"
  }
 ],
 "speaking": [
  {
   "e": "🎸",
   "en": "I have played the guitar for a year.",
   "tr": "Bir yıldır gitar çalıyorum."
  },
  {
   "e": "🎹",
   "en": "Have you ever played the piano?",
   "tr": "Hiç piyano çaldın mı?"
  },
  {
   "e": "🎻",
   "en": "I have never played the violin.",
   "tr": "Hiç keman çalmadım."
  },
  {
   "e": "🎧",
   "en": "I have a new pair of headphones.",
   "tr": "Yeni bir kulaklığım var."
  },
  {
   "e": "🎤",
   "en": "She has never been to a concert.",
   "tr": "O hiç konsere gitmedi."
  }
 ],
 "write": {
  "title": "My Music",
  "en": "Write about music. What instruments have you played? What have you never played?",
  "tr": "Müzik hakkında yaz. Hangi enstrümanları çaldın? Hangilerini hiç çalmadın?",
  "starters": [
   "I have played",
   "I have never",
   "Have you ever",
   "My favourite singer is",
   "I have been to",
   "I like"
  ],
  "checks": [
   {
    "re": /\b(i|we|they|you) have (never |ever )?(played|been|heard|seen|sung|listened)\b|\b(he|she) has (never |ever )?(played|been|heard|seen|sung|listened)\b/,
    "t": "Present perfect kullan (I have played, I have never been…)"
   },
   {
    "re": /\b(never|ever)\b/,
    "t": "“never” ya da “ever” kullan"
   }
  ],
  "model": "I love music. I have played the piano for three years, and I have played the guitar too. I have never played the drum, but I want to try it. My favourite singer is very funny. I have never been to her concert, but I have listened to her songs with my headphones many times. Have you ever been to a concert?"
 },
 "towers": [
  {
   "e": "🎸",
   "title": "Guitar Lesson",
   "steps": [
    {
     "tr": [
      [
       "Gitar çaldı.",
       "does"
      ]
     ],
     "en": [
      [
       "played the guitar",
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
       "gitar çaldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "played the guitar",
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
       "okulda",
       "where"
      ],
      [
       "gitar çaldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "played the guitar",
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
       "Can",
       "who"
      ],
      [
       "pazartesi günü",
       "when"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "gitar çaldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "played the guitar",
       "does"
      ],
      [
       "at school",
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
   "e": "🎤",
   "title": "Big Concert",
   "steps": [
    {
     "tr": [
      [
       "Şarkı söyledi.",
       "does"
      ]
     ],
     "en": [
      [
       "sang a song",
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
       "şarkı söyledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "sang a song",
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
       "sahnede",
       "where"
      ],
      [
       "şarkı söyledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "sang a song",
       "does"
      ],
      [
       "on the stage",
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
       "dün gece",
       "when"
      ],
      [
       "sahnede",
       "where"
      ],
      [
       "şarkı söyledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "sang a song",
       "does"
      ],
      [
       "on the stage",
       "where"
      ],
      [
       "last night",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🥁",
   "title": "Drum Practice",
   "steps": [
    {
     "tr": [
      [
       "Davul çalıştı.",
       "does"
      ]
     ],
     "en": [
      [
       "practised the drums",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kerem",
       "who"
      ],
      [
       "davul çalıştı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "practised the drums",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kerem",
       "who"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "davul çalıştı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "practised the drums",
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
       "Kerem",
       "who"
      ],
      [
       "bu sabah",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "davul çalıştı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "practised the drums",
       "does"
      ],
      [
       "in the garden",
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
// ---------- Ünite 25 ----------
UNITS_A2.push({
 "L": {
  "rank": "Planet Hero",
  "theme": "Our Planet",
  "tr": "Gezegenimiz",
  "icon": "♻️",
  "song": {
   "title": "Keep It Clean",
   "lines": [
    "We <b>recycle</b> paper, glass and tin,",
    "Put it in the right <b>bin</b>,",
    "We should keep our planet clean,",
    "The greenest planet ever seen!"
   ]
  },
  "cards": [
   {
    "e": "♻️",
    "w": "recycle",
    "ipa": "/ˌriˈsaɪkəl/",
    "tr": "Geri dönüştürmek",
    "ex": "We should recycle old paper."
   },
   {
    "e": "🧴",
    "w": "plastic",
    "ipa": "/ˈplæstɪk/",
    "tr": "Plastik",
    "ex": "Plastic bottles go in the yellow bin."
   },
   {
    "e": "🚮",
    "w": "rubbish",
    "ipa": "/ˈrʌbɪʃ/",
    "tr": "Çöp",
    "ex": "You must not drop rubbish on the floor."
   },
   {
    "e": "🗑️",
    "w": "bin",
    "ipa": "/bɪn/",
    "tr": "Çöp kutusu",
    "ex": "Put the rubbish in the bin."
   },
   {
    "e": "📄",
    "w": "paper",
    "ipa": "/ˈpeɪpər/",
    "tr": "Kâğıt",
    "ex": "We recycle paper at school."
   },
   {
    "e": "⚡",
    "w": "energy",
    "ipa": "/ˈɛnərdʒi/",
    "tr": "Enerji",
    "ex": "We must save energy."
   },
   {
    "e": "🏭",
    "w": "pollution",
    "ipa": "/pəˈluʃən/",
    "tr": "Kirlilik",
    "ex": "Cars and factories make air pollution."
   },
   {
    "e": "💡",
    "w": "light",
    "ipa": "/laɪt/",
    "tr": "Işık, lamba",
    "ex": "Turn off the light when you leave."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "recycle",
    "options": [
     "recycle",
     "plastic",
     "energy"
    ],
    "hint": [
     "We make old paper new again!",
     "Eski kâğıdı yeniden yeni yapıyoruz!"
    ]
   },
   {
    "type": "pick",
    "q": "You put your rubbish in it. What is it?",
    "tr": "Çöpünü içine atarsın. Nedir?",
    "options": [
     {
      "e": "🗑️",
      "v": "bin"
     },
     {
      "e": "📄",
      "v": "paper"
     },
     {
      "e": "💡",
      "v": "light"
     },
     {
      "e": "🧴",
      "v": "plastic"
     }
    ],
    "answer": "bin",
    "hint": [
     "It is a box for rubbish.",
     "Çöp için bir kutu."
    ]
   },
   {
    "type": "listen",
    "say": "You should turn off the light when you leave the room.",
    "q": "What should you turn off?",
    "tr": "Neyi kapatmalısın?",
    "options": [
     {
      "e": "💡",
      "v": "light"
     },
     {
      "e": "🚰",
      "v": "tap"
     },
     {
      "e": "📺",
      "v": "TV"
     }
    ],
    "answer": "light",
    "hint": [
     "Listen again: “…turn off the l…”.",
     "Tekrar dinle: “…turn off the l…”."
    ]
   },
   {
    "type": "write",
    "e": "♻️",
    "sentence": "We ___ put plastic in the yellow bin.",
    "answer": "should",
    "mask": "S _ _ _ _ _",
    "tr": "Plastiği sarı kutuya atmalıyız.",
    "hint": [
     "It means “it is a good idea”. s - h - o - u - l - d",
     "“Yapmak iyi olur” demek. s - h - o - u - l - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "We should recycle paper and plastic.",
    "tr": "Kâğıdı ve plastiği geri dönüştürmeliyiz."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "bin",
    "hint": [
     "Rubbish goes in it! b - i - n",
     "Çöpler onun içine gider! b - i - n"
    ]
   },
   {
    "type": "dictation",
    "word": "recycle",
    "e": "♻️",
    "hint": [
     "It starts with “r”. We do it with old paper and bottles.",
     "“r” ile başlıyor. Eski kâğıt ve şişelerle yaparız."
    ]
   },
   {
    "type": "order",
    "tr": "Çöpü kutuya atmalısın.",
    "answer": "You should put the rubbish in the bin",
    "extra": "must",
    "hint": [
     "Start with: “You should …”",
     "Şöyle başla: “You should …”"
    ]
   },
   {
    "type": "story",
    "say": "Zeynep's school has a problem. There is too much rubbish in the playground. Zeynep says, We must clean it up! We should put paper in the blue bin and plastic in the yellow bin. Then the playground will be clean again.",
    "q": "Where should the plastic go?",
    "tr": "Plastik nereye atılmalı?",
    "options": [
     "in the yellow bin",
     "in the blue bin",
     "on the floor"
    ],
    "answer": "in the yellow bin",
    "hint": [
     "The paper goes in the blue bin. Listen for “plastic”!",
     "Kâğıt mavi kutuya gidiyor. “Plastic” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Enerji tasarrufu yapmalıyız.",
    "answer": "We must save energy."
   }
  ]
 },
 "songs": [
  {
   "title": "Paper and Plastic",
   "lines": [
    "<b>Paper</b> in the blue bin, plastic in the red,",
    "Clean and tidy, that's what I said,",
    "Old and dirty, new and bright,",
    "Recycling makes the whole world light!"
   ]
  },
  {
   "title": "No More Rubbish",
   "lines": [
    "Pick up the <b>rubbish</b>, one, two, three,",
    "Make our street as clean as can be,",
    "Don't drop it here, don't drop it there,",
    "Put it in the <b>bin</b> with care!"
   ]
  },
  {
   "title": "Save Energy",
   "lines": [
    "Turn off the <b>light</b> and save <b>energy</b>,",
    "Every little bit helps, you see,",
    "Switch it off and give a cheer,",
    "A happy planet, bright and clear!"
   ]
  },
  {
   "title": "Clean Air Song",
   "lines": [
    "Smoke goes up and <b>pollution</b> grows,",
    "Dirty air makes sneezy noses,",
    "Walk or cycle, don't use the car,",
    "Clean air helps us go far!"
   ]
  }
 ],
 "reading": {
  "title": "Mert's Green Class",
  "e": "🌍",
  "lines": [
   [
    "Mert's class wants to help the planet, so they made a plan.",
    "Mert'in sınıfı gezegene yardım etmek istiyor, bu yüzden bir plan yaptılar."
   ],
   [
    "They must not drop rubbish on the floor.",
    "Yere çöp atmamalılar."
   ],
   [
    "They should put paper in the blue bin and plastic in the yellow bin.",
    "Kâğıdı mavi kutuya, plastiği sarı kutuya atmalılar."
   ],
   [
    "Mert looks after the lights.",
    "Mert ışıklara göz kulak oluyor."
   ],
   [
    "He turns them off when nobody is in the room, because it saves energy.",
    "Odada kimse yokken onları kapatıyor, çünkü bu enerji tasarrufu sağlıyor."
   ],
   [
    "Last week the class collected ten bags of old paper.",
    "Geçen hafta sınıf on torba eski kâğıt topladı."
   ],
   [
    "Mert says that pollution is a big problem, but everyone can help.",
    "Mert, kirliliğin büyük bir sorun olduğunu ama herkesin yardım edebileceğini söylüyor."
   ],
   [
    "Now the school is cleaner and everybody is proud.",
    "Artık okul daha temiz ve herkes gurur duyuyor."
   ]
  ],
  "qs": [
   {
    "q": "Where should the plastic go?",
    "tr": "Plastik nereye atılmalı?",
    "options": [
     "in the yellow bin",
     "in the blue bin",
     "on the floor"
    ],
    "answer": "in the yellow bin"
   },
   {
    "q": "Why does Mert turn off the lights?",
    "tr": "Mert ışıkları neden kapatıyor?",
    "options": [
     "to save energy",
     "to find paper",
     "to make a noise"
    ],
    "answer": "to save energy"
   },
   {
    "q": "What did the class collect last week?",
    "tr": "Sınıf geçen hafta ne topladı?",
    "options": [
     "ten bags of old paper",
     "ten plastic bottles",
     "ten blue bins"
    ],
    "answer": "ten bags of old paper"
   }
  ]
 },
 "listening": [
  {
   "say": "We must not drop rubbish on the beach.",
   "q": "What must we not drop?",
   "tr": "Neyi atmamalıyız?",
   "options": [
    {
     "e": "🚮",
     "v": "rubbish"
    },
    {
     "e": "📄",
     "v": "paper"
    },
    {
     "e": "🧴",
     "v": "plastic"
    }
   ],
   "answer": "rubbish"
  },
  {
   "say": "You should put the paper in the blue bin.",
   "q": "Where should the paper go?",
   "tr": "Kâğıt nereye atılmalı?",
   "options": [
    {
     "e": "🔵",
     "v": "blue bin"
    },
    {
     "e": "🔴",
     "v": "red bin"
    },
    {
     "e": "🟢",
     "v": "green bin"
    }
   ],
   "answer": "blue bin"
  },
  {
   "say": "Cars and factories make pollution.",
   "q": "What do cars and factories make?",
   "tr": "Arabalar ve fabrikalar ne yapar?",
   "options": [
    {
     "e": "🏭",
     "v": "pollution"
    },
    {
     "e": "🎵",
     "v": "music"
    },
    {
     "e": "📄",
     "v": "paper"
    }
   ],
   "answer": "pollution"
  },
  {
   "say": "Deniz turns off the light when he leaves his room.",
   "q": "What does Deniz turn off?",
   "tr": "Deniz neyi kapatıyor?",
   "options": [
    {
     "e": "💡",
     "v": "light"
    },
    {
     "e": "🚰",
     "v": "tap"
    },
    {
     "e": "📺",
     "v": "TV"
    }
   ],
   "answer": "light"
  },
  {
   "say": "My family recycles plastic bottles every week.",
   "q": "What does the family recycle?",
   "tr": "Aile neyi geri dönüştürüyor?",
   "options": [
    {
     "e": "🧴",
     "v": "plastic"
    },
    {
     "e": "📄",
     "v": "paper"
    },
    {
     "e": "🥛",
     "v": "glass"
    }
   ],
   "answer": "plastic"
  }
 ],
 "speaking": [
  {
   "e": "♻️",
   "en": "We should recycle paper.",
   "tr": "Kâğıdı geri dönüştürmeliyiz."
  },
  {
   "e": "🗑️",
   "en": "You must put rubbish in the bin.",
   "tr": "Çöpü çöp kutusuna atmalısın."
  },
  {
   "e": "💡",
   "en": "You should turn off the light.",
   "tr": "Işığı kapatmalısın."
  },
  {
   "e": "🏭",
   "en": "We must stop air pollution.",
   "tr": "Hava kirliliğini durdurmalıyız."
  },
  {
   "e": "🧴",
   "en": "We shouldn't use too much plastic.",
   "tr": "Çok fazla plastik kullanmamalıyız."
  }
 ],
 "write": {
  "title": "Help Our Planet",
  "en": "What should we do to help our planet? Write some ideas.",
  "tr": "Gezegenimize yardım etmek için ne yapmalıyız? Birkaç fikir yaz.",
  "starters": [
   "We should",
   "We must",
   "We shouldn't",
   "I can",
   "At home, I",
   "It is important to"
  ],
  "checks": [
   {
    "re": /\bshould(n't)?\b/,
    "t": "should ya da shouldn't kullan"
   },
   {
    "re": /\b(must|mustn't)\b/,
    "t": "must ya da mustn't kullan"
   }
  ],
  "model": "We should help our planet. We should recycle paper and put plastic in the right bin. We must not drop rubbish on the floor. We must save energy, so we should turn off the light when we leave a room. We shouldn't make too much pollution. If everyone helps, our planet will be clean and happy!"
 },
 "towers": [
  {
   "e": "♻️",
   "title": "Recycling",
   "steps": [
    {
     "tr": [
      [
       "Kâğıdı geri dönüştürmeli.",
       "does"
      ]
     ],
     "en": [
      [
       "should recycle paper",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kerem",
       "who"
      ],
      [
       "kâğıdı geri dönüştürmeli.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "should recycle paper",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kerem",
       "who"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "kâğıdı geri dönüştürmeli.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "should recycle paper",
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
       "Kerem",
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
       "kâğıdı geri dönüştürmeli.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "should recycle paper",
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
   "e": "💡",
   "title": "Lights Out",
   "steps": [
    {
     "tr": [
      [
       "Işığı kapatmalı.",
       "does"
      ]
     ],
     "en": [
      [
       "must turn off the light",
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
       "ışığı kapatmalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "must turn off the light",
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
       "mutfakta",
       "where"
      ],
      [
       "ışığı kapatmalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "must turn off the light",
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
       "Ece",
       "who"
      ],
      [
       "geceleri",
       "when"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "ışığı kapatmalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "must turn off the light",
       "does"
      ],
      [
       "in the kitchen",
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
   "e": "🏖️",
   "title": "Clean Beach",
   "steps": [
    {
     "tr": [
      [
       "Çöp atmamalı.",
       "does"
      ]
     ],
     "en": [
      [
       "shouldn't drop rubbish",
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
       "çöp atmamalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "shouldn't drop rubbish",
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
       "plajda",
       "where"
      ],
      [
       "çöp atmamalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "shouldn't drop rubbish",
       "does"
      ],
      [
       "on the beach",
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
       "yazın",
       "when"
      ],
      [
       "plajda",
       "where"
      ],
      [
       "çöp atmamalı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "shouldn't drop rubbish",
       "does"
      ],
      [
       "on the beach",
       "where"
      ],
      [
       "in summer",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 26 ----------
UNITS_A2.push({
 "L": {
  "rank": "Tech Wizard",
  "theme": "Technology",
  "tr": "Teknoloji",
  "icon": "💻",
  "song": {
   "title": "Click, Click, Click",
   "lines": [
    "My <b>computer</b> can add and play,",
    "Draw a picture, sing all day,",
    "Grandpa couldn't, long ago,",
    "Now we tap the <b>screen</b>, hello!"
   ]
  },
  "cards": [
   {
    "e": "💻",
    "w": "computer",
    "ipa": "/kəmˈpjutər/",
    "tr": "Bilgisayar",
    "ex": "I can play games on the computer."
   },
   {
    "e": "📱",
    "w": "tablet",
    "ipa": "/ˈtæblət/",
    "tr": "Tablet",
    "ex": "My sister reads books on her tablet."
   },
   {
    "e": "📷",
    "w": "camera",
    "ipa": "/ˈkæmrə/",
    "tr": "Fotoğraf makinesi, kamera",
    "ex": "I took a photo with my camera."
   },
   {
    "e": "📧",
    "w": "email",
    "ipa": "/ˈiˌmeɪl/",
    "tr": "E-posta",
    "ex": "I can send an email to my teacher."
   },
   {
    "e": "🌐",
    "w": "internet",
    "ipa": "/ˈɪntərˌnɛt/",
    "tr": "İnternet",
    "ex": "We couldn't use the internet last night."
   },
   {
    "e": "🖥️",
    "w": "screen",
    "ipa": "/skrin/",
    "tr": "Ekran",
    "ex": "Don't look at the screen for too long."
   },
   {
    "e": "⌨️",
    "w": "keyboard",
    "ipa": "/ˈkiˌbɔrd/",
    "tr": "Klavye",
    "ex": "I can type fast on the keyboard."
   },
   {
    "e": "🤖",
    "w": "robot",
    "ipa": "/ˈroʊˌbɑt/",
    "tr": "Robot",
    "ex": "The robot can carry a box."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "computer",
    "options": [
     "computer",
     "tablet",
     "camera"
    ],
    "hint": [
     "You can type and play games on it!",
     "Üzerinde yazı yazabilir ve oyun oynayabilirsin!"
    ]
   },
   {
    "type": "pick",
    "q": "You type on it with your fingers. What is it?",
    "tr": "Onunla parmaklarınla yazı yazarsın. Nedir?",
    "options": [
     {
      "e": "⌨️",
      "v": "keyboard"
     },
     {
      "e": "🖥️",
      "v": "screen"
     },
     {
      "e": "📷",
      "v": "camera"
     },
     {
      "e": "🤖",
      "v": "robot"
     }
    ],
    "answer": "keyboard",
    "hint": [
     "It has lots of letters on it.",
     "Üzerinde bir sürü harf var."
    ]
   },
   {
    "type": "listen",
    "say": "Last night I couldn't use the internet, so I read a book.",
    "q": "What could he not use?",
    "tr": "Neyi kullanamadı?",
    "options": [
     {
      "e": "🌐",
      "v": "internet"
     },
     {
      "e": "📱",
      "v": "tablet"
     },
     {
      "e": "📷",
      "v": "camera"
     }
    ],
    "answer": "internet",
    "hint": [
     "Listen again: “…couldn't use the i…”.",
     "Tekrar dinle: “…couldn't use the i…”."
    ]
   },
   {
    "type": "write",
    "e": "📷",
    "sentence": "Yesterday I ___ take a photo with my new camera.",
    "answer": "could",
    "mask": "C _ _ _ D",
    "tr": "Dün yeni kameramla fotoğraf çekebildim.",
    "hint": [
     "It is the past of “can”. c - o - u - l - d",
     "“Can” fiilinin geçmişi. c - o - u - l - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "Now I can send an email to my friends.",
    "tr": "Artık arkadaşlarıma e-posta gönderebiliyorum."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "screen",
    "hint": [
     "You tap it with your finger! s - c - r - e - e - n",
     "Ona parmağınla dokunursun! s - c - r - e - e - n"
    ]
   },
   {
    "type": "dictation",
    "word": "keyboard",
    "e": "⌨️",
    "hint": [
     "It starts with “k”. You use it to type.",
     "“k” ile başlıyor. Yazı yazmak için kullanırsın."
    ]
   },
   {
    "type": "order",
    "tr": "Dedem bilgisayar kullanamıyordu.",
    "answer": "My grandpa couldn't use a computer",
    "extra": "can",
    "hint": [
     "Start with: “My grandpa …”",
     "Şöyle başla: “My grandpa …”"
    ]
   },
   {
    "type": "story",
    "say": "Long ago, Elif's grandma couldn't send emails. She wrote letters and used an old camera. Now she can use a tablet. She sends emails to Elif every day.",
    "q": "What can Elif's grandma do now?",
    "tr": "Elif'in babaannesi artık ne yapabiliyor?",
    "options": [
     "use a tablet",
     "fly a plane",
     "drive a taxi"
    ],
    "answer": "use a tablet",
    "hint": [
     "Listen for “Now she can…”!",
     "“Now she can…” kısmını dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Dün internete giremedim.",
    "answer": "I couldn't use the internet yesterday."
   }
  ]
 },
 "songs": [
  {
   "title": "Little Robot",
   "lines": [
    "My little <b>robot</b> can walk and talk,",
    "It can dance and it can rock,",
    "It couldn't jump but it can now,",
    "Beep, beep, boop, take a bow!"
   ]
  },
  {
   "title": "Say Cheese",
   "lines": [
    "Smile for my <b>camera</b>, one, two, three,",
    "A photo of you and a photo of me,",
    "I couldn't do it when I was small,",
    "Now I can take them all!"
   ]
  },
  {
   "title": "Type, Type, Type",
   "lines": [
    "Tap on the <b>keyboard</b>, quick, quick, quick,",
    "Write an <b>email</b>, click, click, click,",
    "Send it off across the sea,",
    "To my friend in Italy!"
   ]
  },
  {
   "title": "Tablet Time",
   "lines": [
    "I read a story on my <b>tablet</b> today,",
    "I found the <b>internet</b>, hip hooray,",
    "Yesterday I couldn't, now I can,",
    "Learning is fun with a clever plan!"
   ]
  }
 ],
 "reading": {
  "title": "Grandpa's Tablet",
  "e": "📱",
  "lines": [
   [
    "Can's grandpa is seventy years old.",
    "Can'ın dedesi yetmiş yaşında."
   ],
   [
    "When he was a boy, he couldn't use a computer, because there weren't any in his village.",
    "Çocukken köyünde hiç bilgisayar olmadığı için bilgisayar kullanamıyordu."
   ],
   [
    "He couldn't send an email either, so he wrote letters.",
    "E-posta da gönderemiyordu, bu yüzden mektup yazıyordu."
   ],
   [
    "Last month, Can gave him a tablet.",
    "Geçen ay Can ona bir tablet hediye etti."
   ],
   [
    "Now Grandpa can take photos with the camera, and he can find the news on the internet.",
    "Artık Dede kamerayla fotoğraf çekebiliyor ve haberleri internetten bulabiliyor."
   ],
   [
    "At first he couldn't type on the screen, but Can helped him.",
    "İlk başta ekrana yazamıyordu ama Can ona yardım etti."
   ],
   [
    "Yesterday Grandpa sent his first email to Can.",
    "Dün Dede, Can'a ilk e-postasını gönderdi."
   ],
   [
    "Can was very proud of him!",
    "Can onunla çok gurur duydu!"
   ]
  ],
  "qs": [
   {
    "q": "Why couldn't Grandpa use a computer as a boy?",
    "tr": "Dede çocukken neden bilgisayar kullanamıyordu?",
    "options": [
     "There weren't any in his village.",
     "He didn't like them.",
     "He was too tired."
    ],
    "answer": "There weren't any in his village."
   },
   {
    "q": "What did Can give his grandpa?",
    "tr": "Can dedesine ne hediye etti?",
    "options": [
     "a tablet",
     "a camera",
     "a robot"
    ],
    "answer": "a tablet"
   },
   {
    "q": "Who did Grandpa send his first email to?",
    "tr": "Dede ilk e-postasını kime gönderdi?",
    "options": [
     "Can",
     "Ece",
     "his teacher"
    ],
    "answer": "Can"
   }
  ]
 },
 "listening": [
  {
   "say": "I can send an email to my friend in London.",
   "q": "What can I send?",
   "tr": "Ne gönderebilirim?",
   "options": [
    {
     "e": "📧",
     "v": "email"
    },
    {
     "e": "✉️",
     "v": "letter"
    },
    {
     "e": "📷",
     "v": "photo"
    }
   ],
   "answer": "email"
  },
  {
   "say": "My brother couldn't type fast, but now he can.",
   "q": "What could he not do fast?",
   "tr": "Neyi hızlı yapamıyordu?",
   "options": [
    {
     "e": "⌨️",
     "v": "type"
    },
    {
     "e": "📖",
     "v": "read"
    },
    {
     "e": "🏃",
     "v": "run"
    }
   ],
   "answer": "type"
  },
  {
   "say": "The robot can carry boxes and open doors.",
   "q": "What can the robot do?",
   "tr": "Robot ne yapabilir?",
   "options": [
    {
     "e": "📦",
     "v": "carry boxes"
    },
    {
     "e": "🎵",
     "v": "sing songs"
    },
    {
     "e": "🚲",
     "v": "ride a bike"
    }
   ],
   "answer": "carry boxes"
  },
  {
   "say": "Last night I couldn't watch the film because the screen was broken.",
   "q": "Why couldn't he watch the film?",
   "tr": "Filmi neden izleyemedi?",
   "options": [
    {
     "e": "🖥️",
     "v": "broken screen"
    },
    {
     "e": "🎫",
     "v": "no ticket"
    },
    {
     "e": "⏰",
     "v": "no time"
    }
   ],
   "answer": "broken screen"
  },
  {
   "say": "Mum took a photo of us with her new camera.",
   "q": "What did Mum use?",
   "tr": "Annesi ne kullandı?",
   "options": [
    {
     "e": "📷",
     "v": "camera"
    },
    {
     "e": "📱",
     "v": "tablet"
    },
    {
     "e": "💻",
     "v": "computer"
    }
   ],
   "answer": "camera"
  }
 ],
 "speaking": [
  {
   "e": "💻",
   "en": "I can play games on the computer.",
   "tr": "Bilgisayarda oyun oynayabilirim."
  },
  {
   "e": "📧",
   "en": "I couldn't send an email yesterday.",
   "tr": "Dün e-posta gönderemedim."
  },
  {
   "e": "📷",
   "en": "I can take photos with my camera.",
   "tr": "Kameramla fotoğraf çekebilirim."
  },
  {
   "e": "🤖",
   "en": "The robot could walk, but it couldn't talk.",
   "tr": "Robot yürüyebiliyordu ama konuşamıyordu."
  },
  {
   "e": "🌐",
   "en": "We can find news on the internet.",
   "tr": "Haberleri internetten bulabiliriz."
  }
 ],
 "write": {
  "title": "Then and Now",
  "en": "What could you do when you were small? What can you do now?",
  "tr": "Küçükken neler yapabiliyordun? Şimdi neler yapabiliyorsun?",
  "starters": [
   "When I was small, I",
   "I couldn't",
   "I could",
   "Now I can",
   "I can use",
   "My grandpa couldn't"
  ],
  "checks": [
   {
    "re": /\b(could|couldn't)\b/,
    "t": "could ya da couldn't kullan (geçmişte yapabilme)"
   },
   {
    "re": /\bcan\b/,
    "t": "can kullan (şimdi yapabilme)"
   }
  ],
  "model": "When I was small, I couldn't read or write, but I could draw pictures and sing songs. Now I can read books on my tablet and write emails to my friends. I can also use the internet and type on the keyboard. My grandpa couldn't use a computer when he was young, but now he can take photos with his camera!"
 },
 "towers": [
  {
   "e": "💻",
   "title": "No Internet",
   "steps": [
    {
     "tr": [
      [
       "İnternet kullanamadı.",
       "does"
      ]
     ],
     "en": [
      [
       "couldn't use the internet",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Deniz",
       "who"
      ],
      [
       "internet kullanamadı.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "couldn't use the internet",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Deniz",
       "who"
      ],
      [
       "evde",
       "where"
      ],
      [
       "internet kullanamadı.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "couldn't use the internet",
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
       "Deniz",
       "who"
      ],
      [
       "dün gece",
       "when"
      ],
      [
       "evde",
       "where"
      ],
      [
       "internet kullanamadı.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "couldn't use the internet",
       "does"
      ],
      [
       "at home",
       "where"
      ],
      [
       "last night",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📷",
   "title": "Photo Day",
   "steps": [
    {
     "tr": [
      [
       "Fotoğraf çekebilir.",
       "does"
      ]
     ],
     "en": [
      [
       "can take photos",
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
       "fotoğraf çekebilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "can take photos",
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
       "fotoğraf çekebilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "can take photos",
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
       "hafta sonları",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "fotoğraf çekebilir.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "can take photos",
       "does"
      ],
      [
       "in the garden",
       "where"
      ],
      [
       "at weekends",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🤖",
   "title": "Dancing Robot",
   "steps": [
    {
     "tr": [
      [
       "Dans edebiliyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "could dance",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Eski robot",
       "who"
      ],
      [
       "dans edebiliyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The old robot",
       "who"
      ],
      [
       "could dance",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Eski robot",
       "who"
      ],
      [
       "müzede",
       "where"
      ],
      [
       "dans edebiliyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The old robot",
       "who"
      ],
      [
       "could dance",
       "does"
      ],
      [
       "in the museum",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Eski robot",
       "who"
      ],
      [
       "geçen yıl",
       "when"
      ],
      [
       "müzede",
       "where"
      ],
      [
       "dans edebiliyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The old robot",
       "who"
      ],
      [
       "could dance",
       "does"
      ],
      [
       "in the museum",
       "where"
      ],
      [
       "last year",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 27 ----------
UNITS_A2.push({
 "L": {
  "rank": "Fossil Hunter",
  "theme": "Long Ago",
  "tr": "Çok Eskiden",
  "icon": "🦕",
  "song": {
   "title": "Long Ago",
   "lines": [
    "A big green <b>dinosaur</b> used to roam,",
    "Long, long ago, the world was his home,",
    "Now we find a <b>fossil</b> in the ground,",
    "And we see his bones when we look around!"
   ]
  },
  "cards": [
   {
    "e": "🦕",
    "w": "dinosaur",
    "ipa": "/ˈdaɪnəˌsɔr/",
    "tr": "Dinozor",
    "ex": "Dinosaurs lived a very long time ago."
   },
   {
    "e": "🔺",
    "w": "pyramid",
    "ipa": "/ˈpɪrəmɪd/",
    "tr": "Piramit",
    "ex": "People built big pyramids in Egypt."
   },
   {
    "e": "🏛️",
    "w": "museum",
    "ipa": "/mjuˈziəm/",
    "tr": "Müze",
    "ex": "We saw many old things in the museum."
   },
   {
    "e": "🦴",
    "w": "fossil",
    "ipa": "/ˈfɑsəl/",
    "tr": "Fosil",
    "ex": "I found a fossil on the beach."
   },
   {
    "e": "🕯️",
    "w": "candle",
    "ipa": "/ˈkændəl/",
    "tr": "Mum",
    "ex": "People used to light a candle at night."
   },
   {
    "e": "🗽",
    "w": "statue",
    "ipa": "/ˈstætʃu/",
    "tr": "Heykel",
    "ex": "There is a big statue in the park."
   },
   {
    "e": "🏘️",
    "w": "village",
    "ipa": "/ˈvɪlɪdʒ/",
    "tr": "Köy",
    "ex": "My grandad used to live in a small village."
   },
   {
    "e": "✉️",
    "w": "letter",
    "ipa": "/ˈlɛtər/",
    "tr": "Mektup",
    "ex": "Long ago, people wrote a lot of letters."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "dinosaur",
    "options": [
     "dinosaur",
     "statue",
     "candle"
    ],
    "hint": [
     "It is a giant animal from long, long ago!",
     "Çok çok eskiden yaşamış dev bir hayvan!"
    ]
   },
   {
    "type": "pick",
    "q": "You can see old and interesting things here. What is it?",
    "tr": "Burada eski ve ilginç şeyler görebilirsin. Neresi?",
    "options": [
     {
      "e": "🏛️",
      "v": "museum"
     },
     {
      "e": "🏘️",
      "v": "village"
     },
     {
      "e": "🔺",
      "v": "pyramid"
     },
     {
      "e": "🕯️",
      "v": "candle"
     }
    ],
    "answer": "museum",
    "hint": [
     "People go there to learn about history.",
     "İnsanlar tarihi öğrenmek için oraya gider."
    ]
   },
   {
    "type": "listen",
    "say": "Long ago, people didn't use to have lights. They used to use a candle at night.",
    "q": "What did people use at night?",
    "tr": "İnsanlar geceleri ne kullanırdı?",
    "options": [
     {
      "e": "🕯️",
      "v": "candle"
     },
     {
      "e": "💡",
      "v": "lamp"
     },
     {
      "e": "🔦",
      "v": "torch"
     }
    ],
    "answer": "candle",
    "hint": [
     "Listen again: “They used to use a c…”.",
     "Tekrar dinle: “They used to use a c…”."
    ]
   },
   {
    "type": "write",
    "e": "✉️",
    "sentence": "Long ago, people ___ to write letters.",
    "answer": "used",
    "mask": "U _ _ D",
    "tr": "Çok eskiden insanlar mektup yazardı.",
    "hint": [
     "We say “… to write” for old habits. u - s - e - d",
     "Eski alışkanlıklar için “… to write” deriz. u - s - e - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "My grandad used to live in a small village.",
    "tr": "Dedem küçük bir köyde yaşardı."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "fossil",
    "hint": [
     "It is an old bone in the ground. f - o - s - s - i - l",
     "Yerin altındaki eski bir kemik. f - o - s - s - i - l"
    ]
   },
   {
    "type": "dictation",
    "word": "pyramid",
    "e": "🔺",
    "hint": [
     "It starts with “p”. It is a big old building in Egypt.",
     "“p” ile başlıyor. Mısır'daki büyük, eski bir yapı."
    ]
   },
   {
    "type": "order",
    "tr": "Dinozorlar burada yaşardı.",
    "answer": "Dinosaurs used to live here",
    "extra": "use",
    "hint": [
     "Start with: “Dinosaurs used …”",
     "Şöyle başla: “Dinosaurs used …”"
    ]
   },
   {
    "type": "story",
    "say": "Long ago, Mert's grandma lived in a small village. There was no electricity, so she used to read by candle at night. She didn't use to have a phone. She used to write letters to her friends.",
    "q": "What did Mert's grandma use to write?",
    "tr": "Mert'in babaannesi ne yazardı?",
    "options": [
     "letters",
     "stories",
     "songs"
    ],
    "answer": "letters",
    "hint": [
     "She didn't have a phone. Listen for “friends”!",
     "Telefonu yoktu. “Friends” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Eskiden bu köyde yaşardım.",
    "answer": "I used to live in this village."
   }
  ]
 },
 "songs": [
  {
   "title": "The Old Pyramid",
   "lines": [
    "The <b>pyramid</b> is big and old,",
    "Built of stone, so I am told,",
    "People used to work all day,",
    "In the sun, so far away!"
   ]
  },
  {
   "title": "Museum Day",
   "lines": [
    "We go to the <b>museum</b> today,",
    "Old pots and bones are on display,",
    "A tall <b>statue</b> stands by the door,",
    "We look and learn and want some more!"
   ]
  },
  {
   "title": "Candle Light",
   "lines": [
    "Long ago, a <b>candle</b> light",
    "Used to shine through every night,",
    "We wrote a <b>letter</b> by its glow,",
    "Then went to bed, all warm and slow!"
   ]
  },
  {
   "title": "My Little Village",
   "lines": [
    "In my old <b>village</b> I used to play,",
    "With a ball in the fields all day,",
    "Now I live in the town, you see,",
    "But the village is dear to me!"
   ]
  }
 ],
 "reading": {
  "title": "Grandad's Village",
  "e": "🏘️",
  "lines": [
   [
    "Ece's grandad lives in the city now, but he used to live in a small village.",
    "Ece'nin dedesi şimdi şehirde yaşıyor ama eskiden küçük bir köyde yaşardı."
   ],
   [
    "There was no electricity in his house, so his family used to use candles at night.",
    "Evinde elektrik yoktu, bu yüzden ailesi geceleri mum kullanırdı."
   ],
   [
    "He didn't use to watch TV.",
    "Televizyon izlemezdi."
   ],
   [
    "Instead, he used to play football with his friends after school.",
    "Onun yerine okuldan sonra arkadaşlarıyla futbol oynardı."
   ],
   [
    "He didn't use to send messages, but he used to write long letters to his cousin.",
    "Mesaj göndermezdi ama kuzenine uzun mektuplar yazardı."
   ],
   [
    "Last week, Ece and her grandad went to a museum.",
    "Geçen hafta Ece ve dedesi bir müzeye gitti."
   ],
   [
    "They saw a fossil and an old statue there.",
    "Orada bir fosil ve eski bir heykel gördüler."
   ],
   [
    "Grandad said, “I love old things because they tell stories!”",
    "Dede, “Eski şeyleri seviyorum çünkü hikâye anlatırlar!” dedi."
   ]
  ],
  "qs": [
   {
    "q": "Where did Ece's grandad use to live?",
    "tr": "Ece'nin dedesi eskiden nerede yaşardı?",
    "options": [
     "in a small village",
     "in a big city",
     "in a museum"
    ],
    "answer": "in a small village"
   },
   {
    "q": "What did his family use at night?",
    "tr": "Ailesi geceleri ne kullanırdı?",
    "options": [
     "candles",
     "computers",
     "torches"
    ],
    "answer": "candles"
   },
   {
    "q": "What did he use to write to his cousin?",
    "tr": "Kuzenine ne yazardı?",
    "options": [
     "emails",
     "letters",
     "books"
    ],
    "answer": "letters"
   }
  ]
 },
 "listening": [
  {
   "say": "Dinosaurs used to live on Earth a very long time ago.",
   "q": "Who used to live on Earth long ago?",
   "tr": "Çok eskiden Dünya'da kimler yaşardı?",
   "options": [
    {
     "e": "🦕",
     "v": "dinosaurs"
    },
    {
     "e": "🐇",
     "v": "rabbits"
    },
    {
     "e": "🐬",
     "v": "dolphins"
    }
   ],
   "answer": "dinosaurs"
  },
  {
   "say": "In Egypt, people built big pyramids from stone.",
   "q": "What did people build?",
   "tr": "İnsanlar ne inşa etti?",
   "options": [
    {
     "e": "🔺",
     "v": "pyramids"
    },
    {
     "e": "🗽",
     "v": "statues"
    },
    {
     "e": "🏠",
     "v": "houses"
    }
   ],
   "answer": "pyramids"
  },
  {
   "say": "My grandma used to write me letters, but now she sends me photos.",
   "q": "What did Grandma use to write?",
   "tr": "Babaannem eskiden ne yazardı?",
   "options": [
    {
     "e": "✉️",
     "v": "letters"
    },
    {
     "e": "📖",
     "v": "books"
    },
    {
     "e": "📝",
     "v": "lists"
    }
   ],
   "answer": "letters"
  },
  {
   "say": "We went to the museum on Saturday and saw a fossil.",
   "q": "What did they see?",
   "tr": "Ne gördüler?",
   "options": [
    {
     "e": "🦴",
     "v": "fossil"
    },
    {
     "e": "🗽",
     "v": "statue"
    },
    {
     "e": "🕯️",
     "v": "candle"
    }
   ],
   "answer": "fossil"
  },
  {
   "say": "I didn't use to like museums, but now I love them.",
   "q": "Does he like museums now?",
   "tr": "Şimdi müzeleri seviyor mu?",
   "options": [
    {
     "e": "👍",
     "v": "yes"
    },
    {
     "e": "👎",
     "v": "no"
    },
    {
     "e": "🤷",
     "v": "not sure"
    }
   ],
   "answer": "yes"
  }
 ],
 "speaking": [
  {
   "e": "🦕",
   "en": "Dinosaurs used to live long ago.",
   "tr": "Dinozorlar çok eskiden yaşardı."
  },
  {
   "e": "🏘️",
   "en": "I used to live in a small village.",
   "tr": "Eskiden küçük bir köyde yaşardım."
  },
  {
   "e": "🕯️",
   "en": "People used to use candles at night.",
   "tr": "İnsanlar geceleri mum kullanırdı."
  },
  {
   "e": "✉️",
   "en": "I didn't use to write letters.",
   "tr": "Eskiden mektup yazmazdım."
  },
  {
   "e": "🏛️",
   "en": "We went to the museum yesterday.",
   "tr": "Dün müzeye gittik."
  }
 ],
 "write": {
  "title": "When I Was Little",
  "en": "Write about your life when you were little. What did you use to do? What didn't you use to do?",
  "tr": "Küçükken hayatını anlat. Neler yapardın? Neler yapmazdın?",
  "starters": [
   "When I was little, I",
   "I used to",
   "I didn't use to",
   "My grandad used to",
   "Long ago,",
   "Now I"
  ],
  "checks": [
   {
    "re": /\bused to\b/,
    "t": "“used to” kullan (I used to play…)"
   },
   {
    "re": /\bdidn't use to\b|\bdid not use to\b/,
    "t": "“didn't use to” ile bir cümle yaz (I didn't use to…)"
   }
  ],
  "model": "When I was little, I used to live in a small village near Bursa. I used to play outside with my friends every day. We didn't use to have a TV, so I used to read story books. My grandad used to write me letters, and I loved them. Now I live in the city, but I still visit the village and see the old statue in the square."
 },
 "towers": [
  {
   "e": "🦕",
   "title": "Dinosaur Days",
   "steps": [
    {
     "tr": [
      [
       "Yaşardı.",
       "does"
      ]
     ],
     "en": [
      [
       "used to live",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dinozorlar",
       "who"
      ],
      [
       "yaşardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Dinosaurs",
       "who"
      ],
      [
       "used to live",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dinozorlar",
       "who"
      ],
      [
       "ormanlarda",
       "where"
      ],
      [
       "yaşardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Dinosaurs",
       "who"
      ],
      [
       "used to live",
       "does"
      ],
      [
       "in big forests",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dinozorlar",
       "who"
      ],
      [
       "milyonlarca yıl önce",
       "when"
      ],
      [
       "ormanlarda",
       "where"
      ],
      [
       "yaşardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Dinosaurs",
       "who"
      ],
      [
       "used to live",
       "does"
      ],
      [
       "in big forests",
       "where"
      ],
      [
       "millions of years ago",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "✉️",
   "title": "Old Letters",
   "steps": [
    {
     "tr": [
      [
       "Mektup yazardı.",
       "does"
      ]
     ],
     "en": [
      [
       "used to write letters",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedem",
       "who"
      ],
      [
       "mektup yazardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Grandad",
       "who"
      ],
      [
       "used to write letters",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedem",
       "who"
      ],
      [
       "köyde",
       "where"
      ],
      [
       "mektup yazardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Grandad",
       "who"
      ],
      [
       "used to write letters",
       "does"
      ],
      [
       "in the village",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedem",
       "who"
      ],
      [
       "her pazar",
       "when"
      ],
      [
       "köyde",
       "where"
      ],
      [
       "mektup yazardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Grandad",
       "who"
      ],
      [
       "used to write letters",
       "does"
      ],
      [
       "in the village",
       "where"
      ],
      [
       "every Sunday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🕯️",
   "title": "Candle Nights",
   "steps": [
    {
     "tr": [
      [
       "Mum yakardı.",
       "does"
      ]
     ],
     "en": [
      [
       "used to light a candle",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Annem",
       "who"
      ],
      [
       "mum yakardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mum",
       "who"
      ],
      [
       "used to light a candle",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Annem",
       "who"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "mum yakardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mum",
       "who"
      ],
      [
       "used to light a candle",
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
       "Annem",
       "who"
      ],
      [
       "her gece",
       "when"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "mum yakardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mum",
       "who"
      ],
      [
       "used to light a candle",
       "does"
      ],
      [
       "in the kitchen",
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
// ---------- Ünite 28 ----------
UNITS_A2.push({
 "L": {
  "rank": "World Explorer",
  "theme": "Holidays",
  "tr": "Tatil",
  "icon": "🗺️",
  "song": {
   "title": "Holiday Time",
   "lines": [
    "I've already packed my <b>passport</b> and my hat,",
    "I've just found my sunglasses, and that is that,",
    "Have you got your <b>swimsuit</b>? Not yet!",
    "The sea is waiting, we'll have fun, you bet!"
   ]
  },
  "cards": [
   {
    "e": "🛂",
    "w": "passport",
    "ipa": "/ˈpæsˌpɔrt/",
    "tr": "Pasaport",
    "ex": "I have already packed my passport."
   },
   {
    "e": "🗺️",
    "w": "map",
    "ipa": "/mæp/",
    "tr": "Harita",
    "ex": "Dad has just opened the map."
   },
   {
    "e": "🏨",
    "w": "hotel",
    "ipa": "/hoʊˈtɛl/",
    "tr": "Otel",
    "ex": "We have just arrived at the hotel."
   },
   {
    "e": "⛺",
    "w": "tent",
    "ipa": "/tɛnt/",
    "tr": "Çadır",
    "ex": "We haven't put up the tent yet."
   },
   {
    "e": "🧭",
    "w": "compass",
    "ipa": "/ˈkʌmpəs/",
    "tr": "Pusula",
    "ex": "The compass shows us the way."
   },
   {
    "e": "📬",
    "w": "postcard",
    "ipa": "/ˈpoʊstˌkɑrd/",
    "tr": "Kartpostal",
    "ex": "Mum has already sent a postcard."
   },
   {
    "e": "🕶️",
    "w": "sunglasses",
    "ipa": "/ˈsʌnˌɡlæsɪz/",
    "tr": "Güneş gözlüğü",
    "ex": "I have just put on my sunglasses."
   },
   {
    "e": "🏊",
    "w": "swimsuit",
    "ipa": "/ˈswɪmˌsut/",
    "tr": "Mayo",
    "ex": "Have you packed your swimsuit yet?"
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "passport",
    "options": [
     "passport",
     "compass",
     "postcard"
    ],
    "hint": [
     "You show it at the airport!",
     "Havalimanında onu gösterirsin!"
    ]
   },
   {
    "type": "pick",
    "q": "You open it to see roads, towns and rivers. What is it?",
    "tr": "Yolları, kasabaları ve nehirleri görmek için onu açarsın. Nedir?",
    "options": [
     {
      "e": "🗺️",
      "v": "map"
     },
     {
      "e": "⛺",
      "v": "tent"
     },
     {
      "e": "🏊",
      "v": "swimsuit"
     },
     {
      "e": "🏨",
      "v": "hotel"
     }
    ],
    "answer": "map",
    "hint": [
     "It is a big piece of paper with pictures of places.",
     "Yerlerin resmi olan büyük bir kâğıt."
    ]
   },
   {
    "type": "listen",
    "say": "We have just arrived at the hotel. We haven't unpacked our suitcases yet.",
    "q": "Where have they just arrived?",
    "tr": "Az önce nereye vardılar?",
    "options": [
     {
      "e": "🏨",
      "v": "hotel"
     },
     {
      "e": "⛺",
      "v": "tent"
     },
     {
      "e": "🏘️",
      "v": "village"
     }
    ],
    "answer": "hotel",
    "hint": [
     "Listen again: “…arrived at the h…”.",
     "Tekrar dinle: “…arrived at the h…”."
    ]
   },
   {
    "type": "write",
    "e": "🛂",
    "sentence": "I have ___ packed my passport.",
    "answer": "already",
    "mask": "A _ _ _ _ _ Y",
    "tr": "Pasaportumu zaten hazırladım.",
    "hint": [
     "It means “before now”. a - l - r - e - a - d - y",
     "“Şu andan önce” demek. a - l - r - e - a - d - y"
    ]
   },
   {
    "type": "speak",
    "sentence": "I have just bought a postcard.",
    "tr": "Az önce bir kartpostal aldım."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "swimsuit",
    "hint": [
     "You wear it to swim in the sea! s - w - i - m - s - u - i - t",
     "Denizde yüzmek için giyersin! s - w - i - m - s - u - i - t"
    ]
   },
   {
    "type": "dictation",
    "word": "sunglasses",
    "e": "🕶️",
    "hint": [
     "It starts with “s”. You wear them when it is sunny.",
     "“s” ile başlıyor. Güneşli havada takarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Pasaportumu henüz bulamadım.",
    "answer": "I haven't found my passport yet",
    "extra": "hasn't",
    "hint": [
     "Start with: “I haven't …”",
     "Şöyle başla: “I haven't …”"
    ]
   },
   {
    "type": "story",
    "say": "Zeynep and her family are on holiday. They have already visited the museum, and they have just arrived at the beach. They haven't eaten lunch yet.",
    "q": "What haven't they done yet?",
    "tr": "Henüz ne yapmadılar?",
    "options": [
     "eaten lunch",
     "visited the museum",
     "arrived at the beach"
    ],
    "answer": "eaten lunch",
    "hint": [
     "Listen for “yet”!",
     "“Yet” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Otele daha yeni vardık.",
    "answer": "We have just arrived at the hotel."
   }
  ]
 },
 "songs": [
  {
   "title": "Camping Song",
   "lines": [
    "I have just packed my <b>tent</b>, hooray,",
    "We're going camping far away,",
    "Have you got the <b>compass</b>? Yes, I do!",
    "Let's go, the mountain is waiting for you!"
   ]
  },
  {
   "title": "Hotel Song",
   "lines": [
    "We have just arrived at the <b>hotel</b>,",
    "Everything here is going well,",
    "Our room is on the top floor,",
    "Come and see! I'll open the door!"
   ]
  },
  {
   "title": "Postcard Time",
   "lines": [
    "I have just written a <b>postcard</b> to you,",
    "With a picture of the sea so blue,",
    "Have you read it yet? Say yes, say yes,",
    "I miss you lots, I must confess!"
   ]
  },
  {
   "title": "Where Are We?",
   "lines": [
    "I have opened the <b>map</b>, hooray,",
    "Where are we now? Let me say,",
    "Not at the park and not at the zoo,",
    "We're on holiday, me and you!"
   ]
  }
 ],
 "reading": {
  "title": "Kerem's Holiday",
  "e": "🗺️",
  "lines": [
   [
    "Kerem and his family are on holiday in Cappadocia.",
    "Kerem ve ailesi Kapadokya'da tatilde."
   ],
   [
    "They have just arrived at their hotel, and the room is lovely.",
    "Otellerine daha yeni vardılar ve oda çok güzel."
   ],
   [
    "Kerem has already unpacked his suitcase, but he hasn't found his sunglasses yet.",
    "Kerem bavulunu çoktan açtı ama güneş gözlüğünü henüz bulamadı."
   ],
   [
    "Dad has already looked at the map because he wants to visit the old caves.",
    "Babası haritaya çoktan baktı çünkü eski mağaraları gezmek istiyor."
   ],
   [
    "Mum has just bought a postcard for Grandma.",
    "Annesi az önce babaannesi için bir kartpostal aldı."
   ],
   [
    "She hasn't written it yet, so she is looking for a pen.",
    "Henüz yazmadı, bu yüzden bir kalem arıyor."
   ],
   [
    "Tomorrow they are going to sleep in a tent.",
    "Yarın bir çadırda uyuyacaklar."
   ],
   [
    "Kerem can't wait. He has never slept in a tent before!",
    "Kerem sabırsızlanıyor. Daha önce hiç çadırda uyumadı!"
   ]
  ],
  "qs": [
   {
    "q": "What has Kerem already done?",
    "tr": "Kerem çoktan ne yaptı?",
    "options": [
     "unpacked his suitcase",
     "found his sunglasses",
     "written a postcard"
    ],
    "answer": "unpacked his suitcase"
   },
   {
    "q": "What hasn't Mum written yet?",
    "tr": "Annesi henüz neyi yazmadı?",
    "options": [
     "a postcard",
     "a map",
     "a letter"
    ],
    "answer": "a postcard"
   },
   {
    "q": "Where are they going to sleep tomorrow?",
    "tr": "Yarın nerede uyuyacaklar?",
    "options": [
     "in a tent",
     "in a hotel",
     "on a boat"
    ],
    "answer": "in a tent"
   }
  ]
 },
 "listening": [
  {
   "say": "I have just put on my sunglasses.",
   "q": "What has he just put on?",
   "tr": "Az önce neyi taktı?",
   "options": [
    {
     "e": "🕶️",
     "v": "sunglasses"
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
   "answer": "sunglasses"
  },
  {
   "say": "We haven't found our hotel yet. Let's look at the map.",
   "q": "What are they going to look at?",
   "tr": "Neye bakacaklar?",
   "options": [
    {
     "e": "🗺️",
     "v": "map"
    },
    {
     "e": "📬",
     "v": "postcard"
    },
    {
     "e": "🧭",
     "v": "compass"
    }
   ],
   "answer": "map"
  },
  {
   "say": "I have already packed my swimsuit, but I haven't packed my sunglasses yet.",
   "q": "What hasn't he packed yet?",
   "tr": "Henüz neyi çantasına koymadı?",
   "options": [
    {
     "e": "🏊",
     "v": "swimsuit"
    },
    {
     "e": "🕶️",
     "v": "sunglasses"
    },
    {
     "e": "🛂",
     "v": "passport"
    }
   ],
   "answer": "sunglasses"
  },
  {
   "say": "Mum has just sent a postcard to Grandad.",
   "q": "What has Mum just sent?",
   "tr": "Annesi az önce ne gönderdi?",
   "options": [
    {
     "e": "📬",
     "v": "postcard"
    },
    {
     "e": "✉️",
     "v": "letter"
    },
    {
     "e": "🎫",
     "v": "ticket"
    }
   ],
   "answer": "postcard"
  },
  {
   "say": "Dad has already put up the tent.",
   "q": "What has Dad put up?",
   "tr": "Babası neyi kurdu?",
   "options": [
    {
     "e": "⛺",
     "v": "tent"
    },
    {
     "e": "🏨",
     "v": "hotel"
    },
    {
     "e": "🏠",
     "v": "house"
    }
   ],
   "answer": "tent"
  }
 ],
 "speaking": [
  {
   "e": "🛂",
   "en": "I have already packed my passport.",
   "tr": "Pasaportumu zaten hazırladım."
  },
  {
   "e": "🏨",
   "en": "We have just arrived at the hotel.",
   "tr": "Otele daha yeni vardık."
  },
  {
   "e": "🗺️",
   "en": "Have you looked at the map yet?",
   "tr": "Haritaya henüz baktın mı?"
  },
  {
   "e": "⛺",
   "en": "We haven't put up the tent yet.",
   "tr": "Çadırı henüz kurmadık."
  },
  {
   "e": "🕶️",
   "en": "I have just found my sunglasses.",
   "tr": "Güneş gözlüğümü az önce buldum."
  }
 ],
 "write": {
  "title": "My Holiday",
  "en": "Write about a holiday. What have you already done? What haven't you done yet?",
  "tr": "Bir tatili anlat. Neleri yaptın bile? Neleri henüz yapmadın?",
  "starters": [
   "We are on holiday in",
   "We have just",
   "I have already",
   "We haven't",
   "Mum has",
   "Tomorrow we"
  ],
  "checks": [
   {
    "re": /\b(already|just)\b/,
    "t": "“already” ya da “just” kullan (I have already…)"
   },
   {
    "re": /\byet\b/,
    "t": "“yet” ile bir cümle yaz (I haven't … yet)"
   }
  ],
  "model": "We are on holiday in Antalya. We have just arrived at our hotel, and I have already put on my swimsuit! Dad has looked at the map, but he hasn't found the beach yet. Mum has bought a postcard for Grandma. I haven't written to my friends yet, but I will send them a postcard tomorrow."
 },
 "towers": [
  {
   "e": "🏨",
   "title": "Hotel Check-in",
   "steps": [
    {
     "tr": [
      [
       "Geldi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "has already arrived",
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
       "geldi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has already arrived",
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
       "otele",
       "where"
      ],
      [
       "geldi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has already arrived",
       "does"
      ],
      [
       "at the hotel",
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
       "bu sabah",
       "when"
      ],
      [
       "otele",
       "where"
      ],
      [
       "geldi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has already arrived",
       "does"
      ],
      [
       "at the hotel",
       "where"
      ],
      [
       "this morning",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "⛺",
   "title": "Tent Time",
   "steps": [
    {
     "tr": [
      [
       "Çadırı kurdu bile.",
       "does"
      ]
     ],
     "en": [
      [
       "has already put up the tent",
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
       "çadırı kurdu bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has already put up the tent",
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
       "gölün kenarında",
       "where"
      ],
      [
       "çadırı kurdu bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has already put up the tent",
       "does"
      ],
      [
       "by the lake",
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
       "bugün",
       "when"
      ],
      [
       "gölün kenarında",
       "where"
      ],
      [
       "çadırı kurdu bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Dad",
       "who"
      ],
      [
       "has already put up the tent",
       "does"
      ],
      [
       "by the lake",
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
   "e": "📬",
   "title": "Postcard Post",
   "steps": [
    {
     "tr": [
      [
       "Kartpostal gönderdi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "has already sent a postcard",
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
       "kartpostal gönderdi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has already sent a postcard",
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
       "plajdan",
       "where"
      ],
      [
       "kartpostal gönderdi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has already sent a postcard",
       "does"
      ],
      [
       "from the beach",
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
       "bu öğleden sonra",
       "when"
      ],
      [
       "plajdan",
       "where"
      ],
      [
       "kartpostal gönderdi bile.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has already sent a postcard",
       "does"
      ],
      [
       "from the beach",
       "where"
      ],
      [
       "this afternoon",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 29 ----------
UNITS_A2.push({
 "L": {
  "rank": "Bug Hunter",
  "theme": "Minibeasts",
  "tr": "Küçük Canlılar",
  "icon": "🐞",
  "song": {
   "title": "Garden Friends",
   "lines": [
    "A <b>bee</b> is an insect which makes honey,",
    "A <b>butterfly</b> is bright and sunny,",
    "An <b>ant</b> is small but strong and neat,",
    "They all live in my garden, what a treat!"
   ]
  },
  "cards": [
   {
    "e": "🦋",
    "w": "butterfly",
    "ipa": "/ˈbʌtərˌflaɪ/",
    "tr": "Kelebek",
    "ex": "A butterfly is an insect which has colourful wings."
   },
   {
    "e": "🐝",
    "w": "bee",
    "ipa": "/bi/",
    "tr": "Arı",
    "ex": "A bee is an insect which makes honey."
   },
   {
    "e": "🐜",
    "w": "ant",
    "ipa": "/ænt/",
    "tr": "Karınca",
    "ex": "An ant is a small insect that lives in a nest."
   },
   {
    "e": "🕷️",
    "w": "spider",
    "ipa": "/ˈspaɪdər/",
    "tr": "Örümcek",
    "ex": "A spider is an animal which makes a web."
   },
   {
    "e": "🐞",
    "w": "ladybird",
    "ipa": "/ˈleɪdiˌbɜrd/",
    "tr": "Uğur böceği",
    "ex": "A ladybird is a small red insect that has black spots."
   },
   {
    "e": "🐌",
    "w": "snail",
    "ipa": "/sneɪl/",
    "tr": "Salyangoz",
    "ex": "A snail is an animal which carries its house on its back."
   },
   {
    "e": "🪱",
    "w": "worm",
    "ipa": "/wɜrm/",
    "tr": "Solucan",
    "ex": "A worm is a long animal that lives in the soil."
   },
   {
    "e": "🐛",
    "w": "caterpillar",
    "ipa": "/ˈkætərˌpɪlər/",
    "tr": "Tırtıl",
    "ex": "A caterpillar is a small animal which eats leaves."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "bee",
    "options": [
     "bee",
     "ant",
     "snail"
    ],
    "hint": [
     "It is an insect which makes honey and goes buzz!",
     "Bal yapan ve vızıldayan bir böcek!"
    ]
   },
   {
    "type": "pick",
    "q": "It is an insect which has colourful wings. What is it?",
    "tr": "Renkli kanatları olan bir böcektir. Nedir?",
    "options": [
     {
      "e": "🦋",
      "v": "butterfly"
     },
     {
      "e": "🐝",
      "v": "bee"
     },
     {
      "e": "🐌",
      "v": "snail"
     },
     {
      "e": "🐜",
      "v": "ant"
     }
    ],
    "answer": "butterfly",
    "hint": [
     "It starts as a caterpillar and flies from flower to flower.",
     "Önce tırtıldır, sonra çiçekten çiçeğe uçar."
    ]
   },
   {
    "type": "listen",
    "say": "A spider is an animal which makes a web. It lives in my garden.",
    "q": "What does a spider make?",
    "tr": "Örümcek ne yapar?",
    "options": [
     {
      "e": "🕸️",
      "v": "web"
     },
     {
      "e": "🍯",
      "v": "honey"
     },
     {
      "e": "🏠",
      "v": "house"
     }
    ],
    "answer": "web",
    "hint": [
     "Listen again: “…makes a w…”.",
     "Tekrar dinle: “…makes a w…”."
    ]
   },
   {
    "type": "write",
    "e": "🐝",
    "sentence": "A bee is an insect ___ makes honey.",
    "answer": "which",
    "mask": "W _ _ _ _",
    "tr": "Arı, bal yapan bir böcektir.",
    "hint": [
     "Use it after “insect”. w - h - i - c - h",
     "“Insect” kelimesinden sonra kullan. w - h - i - c - h"
    ]
   },
   {
    "type": "speak",
    "sentence": "A ladybird is a small insect which has black spots.",
    "tr": "Uğur böceği, siyah benekleri olan küçük bir böcektir."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "butterfly",
    "hint": [
     "It has colourful wings. b - u - t - t - e - r - f - l - y",
     "Renkli kanatları var. b - u - t - t - e - r - f - l - y"
    ]
   },
   {
    "type": "dictation",
    "word": "snail",
    "e": "🐌",
    "hint": [
     "It starts with “s”. It is slow and carries its house.",
     "“s” ile başlıyor. Yavaştır ve evini taşır."
    ]
   },
   {
    "type": "order",
    "tr": "Arı, bal yapan bir böcektir.",
    "answer": "A bee is an insect which makes honey",
    "extra": "who",
    "hint": [
     "Start with: “A bee is …”",
     "Şöyle başla: “A bee is …”"
    ]
   },
   {
    "type": "story",
    "say": "Zeynep found a small animal in the garden. It was an animal which carries its house on its back. It was very slow. Zeynep gave it a green leaf.",
    "q": "What did Zeynep find?",
    "tr": "Zeynep ne buldu?",
    "options": [
     "a spider",
     "a snail",
     "a worm"
    ],
    "answer": "a snail",
    "hint": [
     "Which animal carries its house? Listen!",
     "Hangi hayvan evini taşır? Dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Örümcek, ağ yapan bir hayvandır.",
    "answer": "A spider is an animal which makes a web."
   }
  ]
 },
 "songs": [
  {
   "title": "Slow Little Snail",
   "lines": [
    "Slow little <b>snail</b> on the garden wall,",
    "You carry your house, you're not scared at all,",
    "Slowly, slowly, up you go,",
    "Rain or sun, you take it slow!"
   ]
  },
  {
   "title": "Spider's Web",
   "lines": [
    "A <b>spider</b> is an animal which spins a web,",
    "From the roof to the wall, from the wall to the shed,",
    "Silver and shiny with drops of dew,",
    "A <b>spider</b> is clever, and so are you!"
   ]
  },
  {
   "title": "Caterpillar to Butterfly",
   "lines": [
    "A <b>caterpillar</b> eats a leaf, munch, munch,",
    "It eats and eats its leafy lunch,",
    "Then it sleeps, and when it wakes, hooray,",
    "A <b>butterfly</b> flies away!"
   ]
  },
  {
   "title": "Worm and Ladybird",
   "lines": [
    "A <b>worm</b> lives under the ground,",
    "It wriggles and it digs around,",
    "A <b>ladybird</b> sits on a flower,",
    "She counts her spots for half an hour!"
   ]
  }
 ],
 "reading": {
  "title": "Can's Garden Project",
  "e": "🐞",
  "lines": [
   [
    "Can has a school project about minibeasts.",
    "Can'ın küçük canlılar hakkında bir okul projesi var."
   ],
   [
    "He is looking in the garden with his friend Ece.",
    "Arkadaşı Ece ile birlikte bahçeye bakıyor."
   ],
   [
    "First, they see a bee which is flying to a flower.",
    "Önce çiçeğe doğru uçan bir arı görüyorlar."
   ],
   [
    "A bee is an insect which makes honey, so Can writes it down.",
    "Arı bal yapan bir böcektir, bu yüzden Can bunu yazıyor."
   ],
   [
    "Then Ece finds a snail that is sitting under a leaf.",
    "Sonra Ece, bir yaprağın altında oturan bir salyangoz buluyor."
   ],
   [
    "The snail is very slow because it carries its house on its back.",
    "Salyangoz çok yavaş, çünkü evini sırtında taşıyor."
   ],
   [
    "They also see a ladybird which has seven black spots.",
    "Ayrıca yedi siyah beneği olan bir uğur böceği görüyorlar."
   ],
   [
    "Can draws all the minibeasts and gets a star from his teacher.",
    "Can bütün küçük canlıları çiziyor ve öğretmeninden yıldız alıyor."
   ]
  ],
  "qs": [
   {
    "q": "What does the bee make?",
    "tr": "Arı ne yapar?",
    "options": [
     "honey",
     "milk",
     "silk"
    ],
    "answer": "honey"
   },
   {
    "q": "Where is the snail?",
    "tr": "Salyangoz nerede?",
    "options": [
     "under a leaf",
     "on a flower",
     "in the water"
    ],
    "answer": "under a leaf"
   },
   {
    "q": "How many black spots does the ladybird have?",
    "tr": "Uğur böceğinin kaç siyah beneği var?",
    "options": [
     "five",
     "seven",
     "ten"
    ],
    "answer": "seven"
   }
  ]
 },
 "listening": [
  {
   "say": "A butterfly is an insect which has colourful wings.",
   "q": "What has colourful wings?",
   "tr": "Renkli kanatları olan hangisidir?",
   "options": [
    {
     "e": "🦋",
     "v": "butterfly"
    },
    {
     "e": "🐜",
     "v": "ant"
    },
    {
     "e": "🐌",
     "v": "snail"
    }
   ],
   "answer": "butterfly"
  },
  {
   "say": "An ant is a very small insect which is very strong.",
   "q": "What is the ant like?",
   "tr": "Karınca nasıldır?",
   "options": [
    {
     "e": "💪",
     "v": "strong"
    },
    {
     "e": "🐢",
     "v": "slow"
    },
    {
     "e": "😴",
     "v": "sleepy"
    }
   ],
   "answer": "strong"
  },
  {
   "say": "Look at that worm! It is under the wet grass.",
   "q": "Where is the worm?",
   "tr": "Solucan nerede?",
   "options": [
    {
     "e": "🌱",
     "v": "grass"
    },
    {
     "e": "💧",
     "v": "water"
    },
    {
     "e": "🌳",
     "v": "tree"
    }
   ],
   "answer": "grass"
  },
  {
   "say": "The caterpillar is eating a big green leaf.",
   "q": "What is the caterpillar eating?",
   "tr": "Tırtıl ne yiyor?",
   "options": [
    {
     "e": "🍃",
     "v": "leaf"
    },
    {
     "e": "🍎",
     "v": "apple"
    },
    {
     "e": "🥕",
     "v": "carrot"
    }
   ],
   "answer": "leaf"
  },
  {
   "say": "My brother has a ladybird which has five spots.",
   "q": "How many spots does it have?",
   "tr": "Kaç beneği var?",
   "options": [
    {
     "e": "5️⃣",
     "v": "five"
    },
    {
     "e": "2️⃣",
     "v": "two"
    },
    {
     "e": "7️⃣",
     "v": "seven"
    }
   ],
   "answer": "five"
  }
 ],
 "speaking": [
  {
   "e": "🐝",
   "en": "A bee is an insect which makes honey.",
   "tr": "Arı, bal yapan bir böcektir."
  },
  {
   "e": "🕷️",
   "en": "I saw a spider which was very big.",
   "tr": "Çok büyük bir örümcek gördüm."
  },
  {
   "e": "🐌",
   "en": "A snail is an animal that carries its house.",
   "tr": "Salyangoz, evini taşıyan bir hayvandır."
  },
  {
   "e": "🦋",
   "en": "This is the butterfly which I saw in the garden.",
   "tr": "Bu, bahçede gördüğüm kelebek."
  },
  {
   "e": "🐛",
   "en": "A caterpillar is a small animal which eats leaves.",
   "tr": "Tırtıl, yaprak yiyen küçük bir hayvandır."
  }
 ],
 "write": {
  "title": "My Favourite Minibeast",
  "en": "Write about your favourite minibeast. What is it? What does it do?",
  "tr": "En sevdiğin küçük canlıyı anlat. Nedir? Ne yapar?",
  "starters": [
   "My favourite minibeast is",
   "A … is an insect which",
   "It lives",
   "It eats",
   "I like it because",
   "It can"
  ],
  "checks": [
   {
    "re": /\b(which|that|who)\b/,
    "t": "İlgi zamiri kullan (which, that…)"
   },
   {
    "re": /\b(makes|make|eats|eat|lives|live|carries|carry|has|have|spins|builds) /,
    "t": "Ne yaptığını yaz (makes, eats, lives…)"
   }
  ],
  "model": "My favourite minibeast is the bee. A bee is an insect which makes honey. It has two small wings and a yellow and black body. A bee lives in a hive with many other bees. It flies from flower to flower, and it drinks sweet juice from the flowers. I like bees because they help the garden. I also like the butterfly and the ladybird, but I don't like spiders. My Mum says I must never touch one, so I watch from far away!"
 },
 "towers": [
  {
   "e": "🐛",
   "title": "Hungry Caterpillar",
   "steps": [
    {
     "tr": [
      [
       "Yaprak yer.",
       "does"
      ]
     ],
     "en": [
      [
       "eats a leaf",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tırtıl",
       "who"
      ],
      [
       "yaprak yer.",
       "does"
      ]
     ],
     "en": [
      [
       "The caterpillar",
       "who"
      ],
      [
       "eats a leaf",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Tırtıl",
       "who"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "yaprak yer.",
       "does"
      ]
     ],
     "en": [
      [
       "The caterpillar",
       "who"
      ],
      [
       "eats a leaf",
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
       "Tırtıl",
       "who"
      ],
      [
       "her sabah",
       "when"
      ],
      [
       "bahçede",
       "where"
      ],
      [
       "yaprak yer.",
       "does"
      ]
     ],
     "en": [
      [
       "The caterpillar",
       "who"
      ],
      [
       "eats a leaf",
       "does"
      ],
      [
       "in the garden",
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
   "e": "🐌",
   "title": "Slow Snail",
   "steps": [
    {
     "tr": [
      [
       "Yavaş ilerler.",
       "does"
      ]
     ],
     "en": [
      [
       "moves slowly",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Salyangoz",
       "who"
      ],
      [
       "yavaş ilerler.",
       "does"
      ]
     ],
     "en": [
      [
       "The snail",
       "who"
      ],
      [
       "moves slowly",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Salyangoz",
       "who"
      ],
      [
       "duvarın üstünde",
       "where"
      ],
      [
       "yavaş ilerler.",
       "does"
      ]
     ],
     "en": [
      [
       "The snail",
       "who"
      ],
      [
       "moves slowly",
       "does"
      ],
      [
       "on the wall",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Salyangoz",
       "who"
      ],
      [
       "yağmurdan sonra",
       "when"
      ],
      [
       "duvarın üstünde",
       "where"
      ],
      [
       "yavaş ilerler.",
       "does"
      ]
     ],
     "en": [
      [
       "The snail",
       "who"
      ],
      [
       "moves slowly",
       "does"
      ],
      [
       "on the wall",
       "where"
      ],
      [
       "after the rain",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🐜",
   "title": "Busy Ants",
   "steps": [
    {
     "tr": [
      [
       "Yiyecek taşır.",
       "does"
      ]
     ],
     "en": [
      [
       "carry food",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Karıncalar",
       "who"
      ],
      [
       "yiyecek taşır.",
       "does"
      ]
     ],
     "en": [
      [
       "The ants",
       "who"
      ],
      [
       "carry food",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Karıncalar",
       "who"
      ],
      [
       "yuvalarına",
       "where"
      ],
      [
       "yiyecek taşır.",
       "does"
      ]
     ],
     "en": [
      [
       "The ants",
       "who"
      ],
      [
       "carry food",
       "does"
      ],
      [
       "to their nest",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Karıncalar",
       "who"
      ],
      [
       "bütün gün",
       "when"
      ],
      [
       "yuvalarına",
       "where"
      ],
      [
       "yiyecek taşır.",
       "does"
      ]
     ],
     "en": [
      [
       "The ants",
       "who"
      ],
      [
       "carry food",
       "does"
      ],
      [
       "to their nest",
       "where"
      ],
      [
       "all day",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 30 ----------
UNITS_A2.push({
 "L": {
  "rank": "Story Master",
  "theme": "Fairy Tales",
  "tr": "Masallar",
  "icon": "🏰",
  "song": {
   "title": "Once Upon a Time",
   "lines": [
    "A <b>dragon</b> was flying in the sky,",
    "When the <b>princess</b> came walking by,",
    "The <b>prince</b> was singing a happy song,",
    "And they all danced the whole night long!"
   ]
  },
  "cards": [
   {
    "e": "🐉",
    "w": "dragon",
    "ipa": "/ˈdræɡən/",
    "tr": "Ejderha",
    "ex": "The dragon was sleeping in a cave."
   },
   {
    "e": "🏰",
    "w": "castle",
    "ipa": "/ˈkæsəl/",
    "tr": "Kale",
    "ex": "The king lived in a big castle."
   },
   {
    "e": "👑",
    "w": "king",
    "ipa": "/kɪŋ/",
    "tr": "Kral",
    "ex": "The king was eating when the wizard came."
   },
   {
    "e": "👸",
    "w": "princess",
    "ipa": "/ˈprɪnsɛs/",
    "tr": "Prenses",
    "ex": "The princess was reading a book in the garden."
   },
   {
    "e": "🤴",
    "w": "prince",
    "ipa": "/prɪns/",
    "tr": "Prens",
    "ex": "The prince was riding his horse."
   },
   {
    "e": "🧙",
    "w": "wizard",
    "ipa": "/ˈwɪzərd/",
    "tr": "Büyücü",
    "ex": "The wizard was making a potion."
   },
   {
    "e": "🧚",
    "w": "fairy",
    "ipa": "/ˈfɛri/",
    "tr": "Peri",
    "ex": "The fairy was flying over the trees."
   },
   {
    "e": "🧜",
    "w": "mermaid",
    "ipa": "/ˈmɜrˌmeɪd/",
    "tr": "Deniz kızı",
    "ex": "The mermaid was singing by the sea."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "dragon",
    "options": [
     "dragon",
     "wizard",
     "mermaid"
    ],
    "hint": [
     "It is a big animal with wings and a long tail.",
     "Kanatları ve uzun bir kuyruğu olan büyük bir hayvan."
    ]
   },
   {
    "type": "pick",
    "q": "She lives in a castle. She is the king's daughter. Who is she?",
    "tr": "Kalede yaşar. Kralın kızıdır. Kimdir?",
    "options": [
     {
      "e": "👸",
      "v": "princess"
     },
     {
      "e": "🧚",
      "v": "fairy"
     },
     {
      "e": "🧙",
      "v": "wizard"
     },
     {
      "e": "🧜",
      "v": "mermaid"
     }
    ],
    "answer": "princess",
    "hint": [
     "She wears a crown and lives with her father, the king.",
     "Taç takar ve babası kralla birlikte yaşar."
    ]
   },
   {
    "type": "listen",
    "say": "The king was eating his dinner when the dragon came.",
    "q": "What was the king doing?",
    "tr": "Kral ne yapıyordu?",
    "options": [
     {
      "e": "🍽️",
      "v": "eating"
     },
     {
      "e": "😴",
      "v": "sleeping"
     },
     {
      "e": "🎵",
      "v": "singing"
     }
    ],
    "answer": "eating",
    "hint": [
     "Listen again: “…was e… his dinner…”.",
     "Tekrar dinle: “…was e… his dinner…”."
    ]
   },
   {
    "type": "write",
    "e": "🧚",
    "sentence": "The fairies ___ dancing when the wizard came.",
    "answer": "were",
    "mask": "W _ _ _",
    "tr": "Büyücü geldiğinde periler dans ediyordu.",
    "hint": [
     "It is the past of “are”. w - e - r - e",
     "“Are” fiilinin geçmişi. w - e - r - e"
    ]
   },
   {
    "type": "speak",
    "sentence": "The king was sleeping when the dragon came.",
    "tr": "Ejderha geldiğinde kral uyuyordu."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "princess",
    "hint": [
     "She is the king's daughter. p - r - i - n - c - e - s - s",
     "Kralın kızı. p - r - i - n - c - e - s - s"
    ]
   },
   {
    "type": "dictation",
    "word": "wizard",
    "e": "🧙",
    "hint": [
     "It starts with “w”. He does magic with a wand.",
     "“w” ile başlıyor. Asasıyla sihir yapar."
    ]
   },
   {
    "type": "order",
    "tr": "Prens geldiğinde prenses okuyordu.",
    "answer": "The princess was reading when the prince came",
    "extra": "were",
    "hint": [
     "Start with: “The princess …”",
     "Şöyle başla: “The princess …”"
    ]
   },
   {
    "type": "story",
    "say": "Once upon a time, a princess was walking in the forest when she saw a small fairy. The fairy was crying because she lost her wand. The princess looked for it and found it under a tree.",
    "q": "Why was the fairy crying?",
    "tr": "Peri neden ağlıyordu?",
    "options": [
     "She lost her wand",
     "She was hungry",
     "She was cold"
    ],
    "answer": "She lost her wand",
    "hint": [
     "Listen for the word “lost”.",
     "“Lost” kelimesini dinle."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Büyücü geldiğinde ben uyuyordum.",
    "answer": "I was sleeping when the wizard came."
   }
  ]
 },
 "songs": [
  {
   "title": "The Wizard's Tea",
   "lines": [
    "A <b>wizard</b> was making magic tea,",
    "When a little frog jumped on his knee,",
    "He waved his wand, one, two, three,",
    "The frog was a <b>prince</b>, as happy as can be!"
   ]
  },
  {
   "title": "Fairy Dust",
   "lines": [
    "A <b>fairy</b> was flying over the town,",
    "When her wand fell down, down, down,",
    "Sparkly dust fell on the ground,",
    "Magic flowers grew all around!"
   ]
  },
  {
   "title": "The Mermaid's Song",
   "lines": [
    "A <b>mermaid</b> was singing by the sea,",
    "When a little boat came sailing by me,",
    "She waved her tail and said hello,",
    "Then swam away, so deep and slow!"
   ]
  },
  {
   "title": "The King's Castle",
   "lines": [
    "The <b>king</b> was sleeping in his <b>castle</b>,",
    "When a bell rang out, what a hassle!",
    "He jumped out of bed and ran to see,",
    "A friendly <b>dragon</b> came for tea!"
   ]
  }
 ],
 "reading": {
  "title": "The Princess and the Dragon",
  "e": "🏰",
  "lines": [
   [
    "Long ago, a king lived in a big castle with his daughter, the princess.",
    "Çok eskiden bir kral, kızı prensesle birlikte büyük bir kalede yaşardı."
   ],
   [
    "One night, the king was sleeping when he heard a loud noise.",
    "Bir gece kral uyurken yüksek bir ses duydu."
   ],
   [
    "A dragon was standing outside the castle.",
    "Kalenin dışında bir ejderha duruyordu."
   ],
   [
    "The king was afraid, but the princess was not.",
    "Kral korkmuştu ama prenses korkmamıştı."
   ],
   [
    "She went outside and said hello to the dragon.",
    "Dışarı çıktı ve ejderhaya merhaba dedi."
   ],
   [
    "The dragon was crying because he was lost.",
    "Ejderha kaybolduğu için ağlıyordu."
   ],
   [
    "The princess helped him find his cave, and then he flew home.",
    "Prenses mağarasını bulmasına yardım etti, sonra ejderha eve uçtu."
   ],
   [
    "After that, the dragon was the king's best friend.",
    "Ondan sonra ejderha kralın en iyi arkadaşı oldu."
   ]
  ],
  "qs": [
   {
    "q": "What was the king doing when he heard a noise?",
    "tr": "Kral bir ses duyduğunda ne yapıyordu?",
    "options": [
     "He was sleeping.",
     "He was eating.",
     "He was reading."
    ],
    "answer": "He was sleeping."
   },
   {
    "q": "Why was the dragon crying?",
    "tr": "Ejderha neden ağlıyordu?",
    "options": [
     "He was lost.",
     "He was hungry.",
     "He was tired."
    ],
    "answer": "He was lost."
   },
   {
    "q": "Who helped the dragon?",
    "tr": "Ejderhaya kim yardım etti?",
    "options": [
     "the king",
     "the princess",
     "a wizard"
    ],
    "answer": "the princess"
   }
  ]
 },
 "listening": [
  {
   "say": "The prince was riding his horse when it started to rain.",
   "q": "What was the prince riding?",
   "tr": "Prens neye biniyordu?",
   "options": [
    {
     "e": "🐴",
     "v": "horse"
    },
    {
     "e": "🚲",
     "v": "bike"
    },
    {
     "e": "🐘",
     "v": "elephant"
    }
   ],
   "answer": "horse"
  },
  {
   "say": "The fairy was flying over the castle.",
   "q": "What was she flying over?",
   "tr": "Neyin üzerinde uçuyordu?",
   "options": [
    {
     "e": "🏰",
     "v": "castle"
    },
    {
     "e": "🏠",
     "v": "house"
    },
    {
     "e": "🌳",
     "v": "tree"
    }
   ],
   "answer": "castle"
  },
  {
   "say": "The mermaid was singing when the boat came.",
   "q": "What was the mermaid doing?",
   "tr": "Deniz kızı ne yapıyordu?",
   "options": [
    {
     "e": "🎤",
     "v": "singing"
    },
    {
     "e": "😴",
     "v": "sleeping"
    },
    {
     "e": "🏊",
     "v": "swimming"
    }
   ],
   "answer": "singing"
  },
  {
   "say": "The wizard was reading a big book when I came in.",
   "q": "What was the wizard reading?",
   "tr": "Büyücü ne okuyordu?",
   "options": [
    {
     "e": "📖",
     "v": "book"
    },
    {
     "e": "✉️",
     "v": "letter"
    },
    {
     "e": "🗺️",
     "v": "map"
    }
   ],
   "answer": "book"
  },
  {
   "say": "The princess was playing with a small dragon.",
   "q": "Who was the princess playing with?",
   "tr": "Prenses kiminle oynuyordu?",
   "options": [
    {
     "e": "🐉",
     "v": "dragon"
    },
    {
     "e": "🐱",
     "v": "cat"
    },
    {
     "e": "🐶",
     "v": "dog"
    }
   ],
   "answer": "dragon"
  }
 ],
 "speaking": [
  {
   "e": "🐉",
   "en": "The dragon was sleeping in a cave.",
   "tr": "Ejderha bir mağarada uyuyordu."
  },
  {
   "e": "👑",
   "en": "The king was eating when the wizard came.",
   "tr": "Büyücü geldiğinde kral yemek yiyordu."
  },
  {
   "e": "🧚",
   "en": "The fairy was flying when it started to rain.",
   "tr": "Yağmur başladığında peri uçuyordu."
  },
  {
   "e": "🧜",
   "en": "The mermaid was singing a beautiful song.",
   "tr": "Deniz kızı güzel bir şarkı söylüyordu."
  },
  {
   "e": "🤴",
   "en": "The prince was walking to the castle when he saw a dragon.",
   "tr": "Prens kaleye yürürken bir ejderha gördü."
  }
 ],
 "write": {
  "title": "A Fairy Tale",
  "en": "Write your own fairy tale. What were the characters doing when something happened?",
  "tr": "Kendi masalını yaz. Bir şey olduğunda karakterler ne yapıyordu?",
  "starters": [
   "Once upon a time,",
   "The king was",
   "A princess was",
   "… when a dragon",
   "Then",
   "In the end,"
  ],
  "checks": [
   {
    "re": /\b(was|were) [a-z]+ing\b/,
    "t": "Past continuous kullan (was sleeping, were dancing…)"
   },
   {
    "re": /\bwhen\b/,
    "t": "“when” ile bağla (…when the dragon came)"
   }
  ],
  "model": "Once upon a time, a princess was living in a big castle. One day, she was reading a book in the garden when a dragon came. The dragon was crying because he was lost. The princess was very kind, so she helped him. Then a fairy was flying over the castle and she made the dragon happy. They all lived happily ever after."
 },
 "towers": [
  {
   "e": "🐉",
   "title": "Sleepy Dragon",
   "steps": [
    {
     "tr": [
      [
       "Uyuyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "was sleeping",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ejderha",
       "who"
      ],
      [
       "uyuyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The dragon",
       "who"
      ],
      [
       "was sleeping",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ejderha",
       "who"
      ],
      [
       "mağarada",
       "where"
      ],
      [
       "uyuyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The dragon",
       "who"
      ],
      [
       "was sleeping",
       "does"
      ],
      [
       "in a cave",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ejderha",
       "who"
      ],
      [
       "dün gece",
       "when"
      ],
      [
       "mağarada",
       "where"
      ],
      [
       "uyuyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The dragon",
       "who"
      ],
      [
       "was sleeping",
       "does"
      ],
      [
       "in a cave",
       "where"
      ],
      [
       "last night",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🧙",
   "title": "Magic Potion",
   "steps": [
    {
     "tr": [
      [
       "İksir hazırlıyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "was making a potion",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Büyücü",
       "who"
      ],
      [
       "iksir hazırlıyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The wizard",
       "who"
      ],
      [
       "was making a potion",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Büyücü",
       "who"
      ],
      [
       "kulesinde",
       "where"
      ],
      [
       "iksir hazırlıyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The wizard",
       "who"
      ],
      [
       "was making a potion",
       "does"
      ],
      [
       "in his tower",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Büyücü",
       "who"
      ],
      [
       "dün sabah",
       "when"
      ],
      [
       "kulesinde",
       "where"
      ],
      [
       "iksir hazırlıyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The wizard",
       "who"
      ],
      [
       "was making a potion",
       "does"
      ],
      [
       "in his tower",
       "where"
      ],
      [
       "yesterday morning",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🧜",
   "title": "Sea Song",
   "steps": [
    {
     "tr": [
      [
       "Şarkı söylüyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "was singing",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Deniz kızı",
       "who"
      ],
      [
       "şarkı söylüyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The mermaid",
       "who"
      ],
      [
       "was singing",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Deniz kızı",
       "who"
      ],
      [
       "kayaların yanında",
       "where"
      ],
      [
       "şarkı söylüyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The mermaid",
       "who"
      ],
      [
       "was singing",
       "does"
      ],
      [
       "by the rocks",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Deniz kızı",
       "who"
      ],
      [
       "gün batımında",
       "when"
      ],
      [
       "kayaların yanında",
       "where"
      ],
      [
       "şarkı söylüyordu.",
       "does"
      ]
     ],
     "en": [
      [
       "The mermaid",
       "who"
      ],
      [
       "was singing",
       "does"
      ],
      [
       "by the rocks",
       "where"
      ],
      [
       "at sunset",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
