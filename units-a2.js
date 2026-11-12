// Flyers (A2) üniteleri: Ünite 21–30. index.html bu dosyayı ana betikten önce yükler ve üniteleri LEVELS/READING/... dizilerine ekler.
// Biçim units-a1.js ile aynı. Denetim: node api/tools/check-units.js units-a1.js units-a2.js
const UNITS_A2 = [];
// ---------- Ünite 21 ----------
UNITS_A2.push({
 "L": {
  "rank": "Junior Flyer",
  "theme": "Holidays",
  "tr": "Tatil",
  "icon": "🏖️",
  "song": {
   "title": "Holiday Time",
   "lines": [
    "We are going to have a <b>holiday</b>,",
    "We are going to swim and play,",
    "I am going to take my <b>camera</b> too,",
    "And my <b>sunglasses</b> for the sea so blue!"
   ]
  },
  "cards": [
   {
    "e": "🏖️",
    "w": "holiday",
    "ipa": "/ˈhɑləˌdeɪ/",
    "tr": "Tatil",
    "ex": "We are going to have a holiday in Antalya."
   },
   {
    "e": "🛂",
    "w": "passport",
    "ipa": "/ˈpæsˌpɔrt/",
    "tr": "Pasaport",
    "ex": "I am going to show my passport at the airport."
   },
   {
    "e": "🗺️",
    "w": "map",
    "ipa": "/mæp/",
    "tr": "Harita",
    "ex": "Dad is going to read the map in the car."
   },
   {
    "e": "📷",
    "w": "camera",
    "ipa": "/ˈkæmrə/",
    "tr": "Fotoğraf makinesi",
    "ex": "She is going to take photos with her camera."
   },
   {
    "e": "⛺",
    "w": "tent",
    "ipa": "/tɛnt/",
    "tr": "Çadır",
    "ex": "We are going to sleep in a big tent."
   },
   {
    "e": "🏨",
    "w": "hotel",
    "ipa": "/hoʊˈtɛl/",
    "tr": "Otel",
    "ex": "Are you going to stay in a hotel?"
   },
   {
    "e": "📮",
    "w": "postcard",
    "ipa": "/ˈpoʊstˌkɑrd/",
    "tr": "Kartpostal",
    "ex": "I am going to send a postcard to my friend."
   },
   {
    "e": "🕶️",
    "w": "sunglasses",
    "ipa": "/ˈsʌnˌɡlæsɪz/",
    "tr": "Güneş gözlüğü",
    "ex": "Mum is going to wear her sunglasses on the beach."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "holiday",
    "options": [
     "holiday",
     "passport",
     "hotel"
    ],
    "hint": [
     "You go to the beach or the mountains for it. It is a time to rest!",
     "Plaja ya da dağlara gidersin. Dinlenme zamanıdır!"
    ]
   },
   {
    "type": "pick",
    "q": "You show it at the airport when you travel to another country. What is it?",
    "tr": "Başka bir ülkeye giderken havalimanında onu gösterirsin. Nedir?",
    "options": [
     {
      "e": "🛂",
      "v": "passport"
     },
     {
      "e": "🗺️",
      "v": "map"
     },
     {
      "e": "📷",
      "v": "camera"
     },
     {
      "e": "🏨",
      "v": "hotel"
     }
    ],
    "answer": "passport",
    "hint": [
     "It is a small book with your photo inside.",
     "İçinde fotoğrafın olan küçük bir kitapçık."
    ]
   },
   {
    "type": "listen",
    "say": "Next summer, we are going to visit Cappadocia. We are going to sleep in a tent near the rocks.",
    "q": "Where are they going to sleep?",
    "tr": "Nerede uyuyacaklar?",
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
    "answer": "tent",
    "hint": [
     "Listen again: “…sleep in a t…”.",
     "Tekrar dinle: “…sleep in a t…”."
    ]
   },
   {
    "type": "write",
    "e": "🏖️",
    "sentence": "Next week we are ___ to visit Izmir.",
    "answer": "going",
    "mask": "G _ _ _ _",
    "tr": "Gelecek hafta İzmir'i ziyaret edeceğiz.",
    "hint": [
     "We say “am / is / are ___ to” for plans. g - o - i - n - g",
     "Planlar için “am / is / are ___ to” deriz. g - o - i - n - g"
    ]
   },
   {
    "type": "speak",
    "sentence": "We are going to visit Cappadocia next summer.",
    "tr": "Gelecek yaz Kapadokya'yı ziyaret edeceğiz."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "sunglasses",
    "hint": [
     "You wear them on your eyes when the sun is strong! s - u - n - g - l - a - s - s - e - s",
     "Güneş güçlüyken gözüne takarsın! s - u - n - g - l - a - s - s - e - s"
    ]
   },
   {
    "type": "dictation",
    "word": "passport",
    "e": "🛂",
    "hint": [
     "It starts with “p”. You need it to fly to another country.",
     "“p” ile başlıyor. Başka bir ülkeye uçmak için gerekir."
    ]
   },
   {
    "type": "order",
    "tr": "Babam haritayı okuyacak.",
    "answer": "Dad is going to read the map",
    "extra": "goes",
    "hint": [
     "Start with: “Dad is going …”",
     "Şöyle başla: “Dad is going …”"
    ]
   },
   {
    "type": "story",
    "say": "Mert is going to visit Cappadocia with his family. They are going to stay in a small hotel. Mert is going to take his camera. He is going to take photos of the balloons.",
    "q": "What is Mert going to take photos of?",
    "tr": "Mert neyin fotoğraflarını çekecek?",
    "options": [
     "the balloons",
     "the sea",
     "the hotel"
    ],
    "answer": "the balloons",
    "hint": [
     "Listen for the last sentence: “…photos of the b…”.",
     "Son cümleyi dinle: “…photos of the b…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Gelecek yaz tatile çıkacağız.",
    "answer": "We are going to have a holiday next summer."
   }
  ]
 },
 "songs": [
  {
   "title": "Night in a Tent",
   "lines": [
    "We are going to sleep in a <b>tent</b>,",
    "Under the stars, the whole night spent,",
    "Dad is going to read the <b>map</b>,",
    "Mum is going to take a nap!"
   ]
  },
  {
   "title": "Hotel by the Sea",
   "lines": [
    "Tomorrow we are going to stay in a <b>hotel</b>,",
    "Ring the bell, ring the bell,",
    "We are going to see the sea from our room,",
    "And splash in the pool, boom, boom, boom!"
   ]
  },
  {
   "title": "My Postcard",
   "lines": [
    "I am going to write a <b>postcard</b> today,",
    "To my friend who is far away,",
    "I am going to say, “The sun is hot!”",
    "And send it from this sunny spot!"
   ]
  },
  {
   "title": "Show Your Passport",
   "lines": [
    "Show your <b>passport</b>, one, two, three,",
    "We are going to fly across the sea,",
    "Are you going to take your <b>camera</b> too?",
    "Yes, I am! And you, and you!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Holiday",
  "e": "🏖️",
  "lines": [
   [
    "Next week, Ece and her family are going to have a holiday in Cappadocia.",
    "Gelecek hafta Ece ve ailesi Kapadokya'da tatil yapacak."
   ],
   [
    "Ece is going to take her camera and her sunglasses.",
    "Ece kamerasını ve güneş gözlüğünü yanına alacak."
   ],
   [
    "Dad is going to read the map in the car.",
    "Babası arabada haritayı okuyacak."
   ],
   [
    "They are not going to stay in a hotel.",
    "Otelde kalmayacaklar."
   ],
   [
    "They are going to sleep in a big tent near the rocks.",
    "Kayaların yanındaki büyük bir çadırda uyuyacaklar."
   ],
   [
    "Ece is going to take many photos of the balloons.",
    "Ece balonların çok sayıda fotoğrafını çekecek."
   ],
   [
    "She is going to write a postcard to her friend Zeynep.",
    "Arkadaşı Zeynep'e bir kartpostal yazacak."
   ],
   [
    "Ece cannot wait for the holiday!",
    "Ece tatili sabırsızlıkla bekliyor!"
   ]
  ],
  "qs": [
   {
    "q": "Where are they going to sleep?",
    "tr": "Nerede uyuyacaklar?",
    "options": [
     "in a tent",
     "in a hotel",
     "in a house"
    ],
    "answer": "in a tent"
   },
   {
    "q": "What is Dad going to read?",
    "tr": "Babası ne okuyacak?",
    "options": [
     "a book",
     "the map",
     "a postcard"
    ],
    "answer": "the map"
   },
   {
    "q": "Who is Ece going to write a postcard to?",
    "tr": "Ece kime kartpostal yazacak?",
    "options": [
     "Zeynep",
     "Mert",
     "Can"
    ],
    "answer": "Zeynep"
   }
  ]
 },
 "listening": [
  {
   "say": "Tomorrow we are going to fly to Antalya. I am going to show my passport at the airport.",
   "q": "What is the girl going to show?",
   "tr": "Kız neyi gösterecek?",
   "options": [
    {
     "e": "🛂",
     "v": "passport"
    },
    {
     "e": "🎫",
     "v": "ticket"
    },
    {
     "e": "🗺️",
     "v": "map"
    }
   ],
   "answer": "passport"
  },
  {
   "say": "Dad is going to look at the map. We are going to find the way to the lake.",
   "q": "What is Dad going to look at?",
   "tr": "Babası neye bakacak?",
   "options": [
    {
     "e": "🗺️",
     "v": "map"
    },
    {
     "e": "📷",
     "v": "camera"
    },
    {
     "e": "📮",
     "v": "postcard"
    }
   ],
   "answer": "map"
  },
  {
   "say": "My sister is going to take photos of the sea. She is going to use her new camera.",
   "q": "What is she going to use?",
   "tr": "Neyi kullanacak?",
   "options": [
    {
     "e": "📷",
     "v": "camera"
    },
    {
     "e": "📱",
     "v": "phone"
    },
    {
     "e": "📖",
     "v": "book"
    }
   ],
   "answer": "camera"
  },
  {
   "say": "It is very sunny at the beach. I am going to wear my sunglasses.",
   "q": "What is the speaker going to wear?",
   "tr": "Konuşan kişi ne takacak?",
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
   "say": "We are going to send a postcard to Grandma. We are going to write it at the hotel.",
   "q": "Where are they going to write it?",
   "tr": "Onu nerede yazacaklar?",
   "options": [
    {
     "e": "🏨",
     "v": "hotel"
    },
    {
     "e": "🏖️",
     "v": "beach"
    },
    {
     "e": "⛺",
     "v": "tent"
    }
   ],
   "answer": "hotel"
  }
 ],
 "speaking": [
  {
   "e": "🏖️",
   "en": "We are going to have a holiday in Antalya.",
   "tr": "Antalya'da tatil yapacağız."
  },
  {
   "e": "🛂",
   "en": "I am going to show my passport.",
   "tr": "Pasaportumu göstereceğim."
  },
  {
   "e": "⛺",
   "en": "We are going to sleep in a tent.",
   "tr": "Çadırda uyuyacağız."
  },
  {
   "e": "📷",
   "en": "She is going to take photos with her camera.",
   "tr": "Kamerasıyla fotoğraf çekecek."
  },
  {
   "e": "🕶️",
   "en": "Are you going to wear your sunglasses?",
   "tr": "Güneş gözlüğünü takacak mısın?"
  }
 ],
 "write": {
  "title": "My Holiday Plans",
  "en": "Write about your next holiday. Where are you going to go? What are you going to do?",
  "tr": "Bir sonraki tatilini anlat. Nereye gideceksin? Neler yapacaksın?",
  "starters": [
   "Next summer, I am going to",
   "We are going to stay in",
   "I am going to take",
   "I am going to see",
   "We are going to eat",
   "I can't wait!"
  ],
  "checks": [
   {
    "re": /\b(am|is|are) going to\b/,
    "t": "“going to” kalıbını kullan (I am going to…)"
   },
   {
    "re": /\b(holiday|hotel|tent|camera|map|passport|postcard|sunglasses)\b/,
    "t": "Tatille ilgili bir kelime yaz (hotel, tent, camera…)"
   }
  ],
  "model": "Next summer, my family and I are going to have a holiday in Antalya. We are going to stay in a hotel near the beach. I am going to take my camera and my sunglasses. Dad is going to read the map, and Mum is going to buy a postcard. I am going to swim in the sea. I can't wait for this holiday!"
 },
 "towers": [
  {
   "e": "🏖️",
   "title": "Beach Plan",
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
       "Ece",
       "who"
      ],
      [
       "Yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
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
       "Ece",
       "who"
      ],
      [
       "denizde",
       "where"
      ],
      [
       "Yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
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
       "Ece",
       "who"
      ],
      [
       "yarın",
       "when"
      ],
      [
       "denizde",
       "where"
      ],
      [
       "Yüzecek.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
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
       "tomorrow",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "⛺",
   "title": "Camping Night",
   "steps": [
    {
     "tr": [
      [
       "Uyuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "is going to sleep",
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
       "Uyuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to sleep",
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
       "çadırda",
       "where"
      ],
      [
       "Uyuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to sleep",
       "does"
      ],
      [
       "in a tent",
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
       "gelecek hafta sonu",
       "when"
      ],
      [
       "çadırda",
       "where"
      ],
      [
       "Uyuyacak.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "is going to sleep",
       "does"
      ],
      [
       "in a tent",
       "where"
      ],
      [
       "next weekend",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "📷",
   "title": "Photo Time",
   "steps": [
    {
     "tr": [
      [
       "Fotoğraf çekeceğiz.",
       "does"
      ]
     ],
     "en": [
      [
       "are going to take photos",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Biz",
       "who"
      ],
      [
       "Fotoğraf çekeceğiz.",
       "does"
      ]
     ],
     "en": [
      [
       "We",
       "who"
      ],
      [
       "are going to take photos",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Biz",
       "who"
      ],
      [
       "Kapadokya'da",
       "where"
      ],
      [
       "Fotoğraf çekeceğiz.",
       "does"
      ]
     ],
     "en": [
      [
       "We",
       "who"
      ],
      [
       "are going to take photos",
       "does"
      ],
      [
       "in Cappadocia",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Biz",
       "who"
      ],
      [
       "gelecek yaz",
       "when"
      ],
      [
       "Kapadokya'da",
       "where"
      ],
      [
       "Fotoğraf çekeceğiz.",
       "does"
      ]
     ],
     "en": [
      [
       "We",
       "who"
      ],
      [
       "are going to take photos",
       "does"
      ],
      [
       "in Cappadocia",
       "where"
      ],
      [
       "next summer",
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
  "rank": "Space Explorer",
  "theme": "Space",
  "tr": "Uzay",
  "icon": "🚀",
  "song": {
   "title": "Blast Off",
   "lines": [
    "One day a <b>rocket</b> will fly so high,",
    "An <b>astronaut</b> will wave goodbye,",
    "We won't be scared of the dark night sky,",
    "A shiny <b>star</b> will wink, “Hi, hi!”"
   ]
  },
  "cards": [
   {
    "e": "🪐",
    "w": "planet",
    "ipa": "/ˈplænɪt/",
    "tr": "Gezegen",
    "ex": "One day people will visit another planet."
   },
   {
    "e": "🌙",
    "w": "moon",
    "ipa": "/mun/",
    "tr": "Ay",
    "ex": "One day people will live on the moon."
   },
   {
    "e": "⭐",
    "w": "star",
    "ipa": "/stɑr/",
    "tr": "Yıldız",
    "ex": "We will see a bright star tonight."
   },
   {
    "e": "🚀",
    "w": "rocket",
    "ipa": "/ˈrɑkɪt/",
    "tr": "Roket",
    "ex": "The rocket will fly very fast."
   },
   {
    "e": "👨‍🚀",
    "w": "astronaut",
    "ipa": "/ˈæstrəˌnɔt/",
    "tr": "Astronot",
    "ex": "An astronaut will walk in space."
   },
   {
    "e": "🌍",
    "w": "earth",
    "ipa": "/ɜrθ/",
    "tr": "Dünya",
    "ex": "The earth will look blue from space."
   },
   {
    "e": "👽",
    "w": "alien",
    "ipa": "/ˈeɪliən/",
    "tr": "Uzaylı",
    "ex": "I think an alien won't look like a person."
   },
   {
    "e": "🔭",
    "w": "telescope",
    "ipa": "/ˈtɛləˌskoʊp/",
    "tr": "Teleskop",
    "ex": "Elif will look at the stars with a telescope."
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
     "It flies up into space very fast!",
     "Uzaya çok hızlı uçar!"
    ]
   },
   {
    "type": "pick",
    "q": "You use it to look at the stars at night. What is it?",
    "tr": "Geceleri yıldızlara bakmak için onu kullanırsın. Nedir?",
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
      "e": "🌙",
      "v": "moon"
     }
    ],
    "answer": "telescope",
    "hint": [
     "It is long, and you look through it.",
     "Uzun bir şey, içinden bakarsın."
    ]
   },
   {
    "type": "listen",
    "say": "In the future, a rocket will take people to Mars. The astronauts will stay there for one year.",
    "q": "What will take people to Mars?",
    "tr": "İnsanları Mars'a ne götürecek?",
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
      "e": "🚌",
      "v": "bus"
     }
    ],
    "answer": "rocket",
    "hint": [
     "Listen again: “…a r… will take people…”.",
     "Tekrar dinle: “…a r… will take people…”."
    ]
   },
   {
    "type": "write",
    "e": "🌙",
    "sentence": "One day people ___ live on the moon.",
    "answer": "will",
    "mask": "W _ _ _",
    "tr": "Bir gün insanlar Ay'da yaşayacak.",
    "hint": [
     "We use it to talk about the future. w - i - l - l",
     "Gelecekten bahsederken kullanırız. w - i - l - l"
    ]
   },
   {
    "type": "speak",
    "sentence": "One day people will live on the moon.",
    "tr": "Bir gün insanlar Ay'da yaşayacak."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "astronaut",
    "hint": [
     "This person travels in a rocket! a - s - t - r - o - n - a - u - t",
     "Roketle yolculuk eden kişi! a - s - t - r - o - n - a - u - t"
    ]
   },
   {
    "type": "dictation",
    "word": "telescope",
    "e": "🔭",
    "hint": [
     "It starts with “t”. You look at the stars with it.",
     "“t” ile başlıyor. Onunla yıldızlara bakarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Roket çok hızlı gidecek.",
    "answer": "The rocket will go very fast",
    "extra": "goes",
    "hint": [
     "Start with: “The rocket will …”",
     "Şöyle başla: “The rocket will …”"
    ]
   },
   {
    "type": "story",
    "say": "Elif looks at the sky with her telescope. She thinks there will be aliens on a far planet. “The aliens won't look like people,” she says. “They will be small and green, and they will love music!”",
    "q": "What will the aliens love?",
    "tr": "Uzaylılar neyi sevecek?",
    "options": [
     "music",
     "football",
     "cake"
    ],
    "answer": "music",
    "hint": [
     "Listen to the last sentence: “…they will love m…”.",
     "Son cümleyi dinle: “…they will love m…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bir gün astronot olacağım.",
    "answer": "One day I will be an astronaut."
   }
  ]
 },
 "songs": [
  {
   "title": "Look at the Moon",
   "lines": [
    "Tonight we will look at the <b>moon</b>,",
    "Through my <b>telescope</b>, very soon,",
    "I think we will see a crater deep,",
    "And Mum won't make us go to sleep!"
   ]
  },
  {
   "title": "Alien on Mars",
   "lines": [
    "Will an <b>alien</b> live on Mars?",
    "It won't be lonely under the <b>stars</b>,",
    "It will wave to us from a faraway place,",
    "With a big green smile on its funny face!"
   ]
  },
  {
   "title": "Our Earth",
   "lines": [
    "Our <b>earth</b> is blue, our <b>earth</b> is round,",
    "We will keep it clean and sound,",
    "One day we will see every <b>planet</b> there,",
    "But home will be the best, I swear!"
   ]
  },
  {
   "title": "Countdown",
   "lines": [
    "Ten, nine, eight, the <b>rocket</b> will go,",
    "Seven, six, five, it won't be slow,",
    "Four, three, two, one, blast off high,",
    "The <b>astronaut</b> will touch the sky!"
   ]
  }
 ],
 "reading": {
  "title": "Mert's Space Dream",
  "e": "🚀",
  "lines": [
   [
    "Mert loves space, and he wants to be an astronaut.",
    "Mert uzayı seviyor ve astronot olmak istiyor."
   ],
   [
    "Every night, he looks at the moon and the stars with his telescope.",
    "Her gece teleskobuyla Ay'a ve yıldızlara bakıyor."
   ],
   [
    "“One day a rocket will take me to the moon,” he says.",
    "“Bir gün bir roket beni Ay'a götürecek,” diyor."
   ],
   [
    "“I will see our beautiful earth from space.”",
    "“Güzel Dünya'mızı uzaydan göreceğim.”"
   ],
   [
    "His sister Zeynep laughs and asks about aliens.",
    "Kız kardeşi Zeynep gülüyor ve uzaylıları soruyor."
   ],
   [
    "“I don't know,” says Mert. “Maybe they will live on another planet.”",
    "“Bilmiyorum,” diyor Mert. “Belki başka bir gezegende yaşayacaklar.”"
   ],
   [
    "“They won't look like us, but they will be friendly.”",
    "“Bize benzemeyecekler ama dost canlısı olacaklar.”"
   ],
   [
    "“I won't be scared. I will say hello!”",
    "“Korkmayacağım. Merhaba diyeceğim!”"
   ]
  ],
  "qs": [
   {
    "q": "What does Mert look at with his telescope?",
    "tr": "Mert teleskobuyla neye bakıyor?",
    "options": [
     "the moon and the stars",
     "aliens",
     "rockets"
    ],
    "answer": "the moon and the stars"
   },
   {
    "q": "What will take Mert to the moon?",
    "tr": "Mert'i Ay'a ne götürecek?",
    "options": [
     "a plane",
     "a rocket",
     "a telescope"
    ],
    "answer": "a rocket"
   },
   {
    "q": "Will Mert be scared of the aliens?",
    "tr": "Mert uzaylılardan korkacak mı?",
    "options": [
     "No, he won't",
     "Yes, he will",
     "He doesn't know"
    ],
    "answer": "No, he won't"
   }
  ]
 },
 "listening": [
  {
   "say": "One day, a big rocket will take astronauts to Mars. It will fly very fast.",
   "q": "What will fly very fast?",
   "tr": "Ne çok hızlı uçacak?",
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
     "e": "🐦",
     "v": "bird"
    }
   ],
   "answer": "rocket"
  },
  {
   "say": "Tonight it won't rain, and there won't be any clouds. We will see many bright stars.",
   "q": "What will they see tonight?",
   "tr": "Bu gece ne görecekler?",
   "options": [
    {
     "e": "⭐",
     "v": "stars"
    },
    {
     "e": "🌧️",
     "v": "rain"
    },
    {
     "e": "☁️",
     "v": "clouds"
    }
   ],
   "answer": "stars"
  },
  {
   "say": "My uncle has a telescope. He will show me Saturn, a planet with rings.",
   "q": "What will my uncle show me?",
   "tr": "Amcam bana ne gösterecek?",
   "options": [
    {
     "e": "🪐",
     "v": "planet"
    },
    {
     "e": "🌙",
     "v": "moon"
    },
    {
     "e": "🚀",
     "v": "rocket"
    }
   ],
   "answer": "planet"
  },
  {
   "say": "I think aliens won't look like us. They will have big eyes and green skin.",
   "q": "What will the aliens have?",
   "tr": "Uzaylıların neleri olacak?",
   "options": [
    {
     "e": "👀",
     "v": "big eyes"
    },
    {
     "e": "🦵",
     "v": "long legs"
    },
    {
     "e": "👃",
     "v": "big nose"
    }
   ],
   "answer": "big eyes"
  },
  {
   "say": "The astronaut will take a photo of the earth. It will look blue and beautiful.",
   "q": "What will the astronaut take a photo of?",
   "tr": "Astronot neyin fotoğrafını çekecek?",
   "options": [
    {
     "e": "🌍",
     "v": "earth"
    },
    {
     "e": "🌙",
     "v": "moon"
    },
    {
     "e": "⭐",
     "v": "star"
    }
   ],
   "answer": "earth"
  }
 ],
 "speaking": [
  {
   "e": "🌙",
   "en": "One day people will live on the moon.",
   "tr": "Bir gün insanlar Ay'da yaşayacak."
  },
  {
   "e": "🚀",
   "en": "The rocket will fly very fast.",
   "tr": "Roket çok hızlı uçacak."
  },
  {
   "e": "👨‍🚀",
   "en": "An astronaut will walk in space.",
   "tr": "Bir astronot uzayda yürüyecek."
  },
  {
   "e": "👽",
   "en": "Aliens won't look like us.",
   "tr": "Uzaylılar bize benzemeyecek."
  },
  {
   "e": "🔭",
   "en": "I will look at the stars with my telescope.",
   "tr": "Teleskobumla yıldızlara bakacağım."
  }
 ],
 "write": {
  "title": "My Future in Space",
  "en": "Write about the future in space. What will people do? What won't they do?",
  "tr": "Uzaydaki geleceği anlat. İnsanlar neler yapacak? Neler yapmayacak?",
  "starters": [
   "One day, people will",
   "Rockets will",
   "Astronauts will",
   "People won't",
   "I think aliens",
   "I will"
  ],
  "checks": [
   {
    "re": /\b(will|won't)\b/,
    "t": "“will” ya da “won't” kullan (People will…)"
   },
   {
    "re": /\b(moon|planet|planets|star|stars|rocket|rockets|astronaut|astronauts|alien|aliens|earth|telescope)\b/,
    "t": "Uzayla ilgili bir kelime yaz (moon, rocket…)"
   }
  ],
  "model": "One day, people will live on the moon. Rockets will fly to every planet, and astronauts will take photos of the earth. I think aliens won't look like us. They will be small and friendly. I will look at the stars with my telescope, and maybe I will become an astronaut. It won't be easy, but I will try!"
 },
 "towers": [
  {
   "e": "🚀",
   "title": "Rocket Trip",
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
       "Roket",
       "who"
      ],
      [
       "Uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
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
       "Roket",
       "who"
      ],
      [
       "Mars'a",
       "where"
      ],
      [
       "Uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
       "who"
      ],
      [
       "will fly",
       "does"
      ],
      [
       "to Mars",
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
       "gelecek yıl",
       "when"
      ],
      [
       "Mars'a",
       "where"
      ],
      [
       "Uçacak.",
       "does"
      ]
     ],
     "en": [
      [
       "The rocket",
       "who"
      ],
      [
       "will fly",
       "does"
      ],
      [
       "to Mars",
       "where"
      ],
      [
       "next year",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "👨‍🚀",
   "title": "Space Walk",
   "steps": [
    {
     "tr": [
      [
       "Yürüyecek.",
       "does"
      ]
     ],
     "en": [
      [
       "will walk",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Astronot",
       "who"
      ],
      [
       "Yürüyecek.",
       "does"
      ]
     ],
     "en": [
      [
       "The astronaut",
       "who"
      ],
      [
       "will walk",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Astronot",
       "who"
      ],
      [
       "uzayda",
       "where"
      ],
      [
       "Yürüyecek.",
       "does"
      ]
     ],
     "en": [
      [
       "The astronaut",
       "who"
      ],
      [
       "will walk",
       "does"
      ],
      [
       "in space",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Astronot",
       "who"
      ],
      [
       "yarın",
       "when"
      ],
      [
       "uzayda",
       "where"
      ],
      [
       "Yürüyecek.",
       "does"
      ]
     ],
     "en": [
      [
       "The astronaut",
       "who"
      ],
      [
       "will walk",
       "does"
      ],
      [
       "in space",
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
   "title": "Night Sky",
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
       "Yıldızlara bakacak.",
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
       "teleskobuyla",
       "where"
      ],
      [
       "Yıldızlara bakacak.",
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
       "with her telescope",
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
       "teleskobuyla",
       "where"
      ],
      [
       "Yıldızlara bakacak.",
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
       "with her telescope",
       "where"
      ],
      [
       "tonight",
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
  "rank": "Young Inventor",
  "theme": "Materials",
  "tr": "Malzemeler",
  "icon": "🧱",
  "song": {
   "title": "What Is It Made Of?",
   "lines": [
    "The chair is made of <b>wood</b>, strong and good,",
    "The window is made of <b>glass</b>, clear as it should,",
    "The ring is made of <b>gold</b>, so bright and bold,",
    "What is it made of? Tell me, I'm told!"
   ]
  },
  "cards": [
   { "e": "🪵", "w": "wood", "ipa": "/wʊd/", "tr": "Ahşap", "ex": "The table is made of wood." },
   { "e": "⚙️", "w": "metal", "ipa": "/ˈmɛtl/", "tr": "Metal", "ex": "The key is made of metal." },
   { "e": "🧴", "w": "plastic", "ipa": "/ˈplæstɪk/", "tr": "Plastik", "ex": "My bottle is made of plastic." },
   { "e": "🥛", "w": "glass", "ipa": "/glæs/", "tr": "Cam", "ex": "This cup is made of glass." },
   { "e": "📄", "w": "paper", "ipa": "/ˈpeɪpər/", "tr": "Kâğıt", "ex": "The box is made of paper." },
   { "e": "🥇", "w": "gold", "ipa": "/goʊld/", "tr": "Altın", "ex": "Her ring is made of gold." },
   { "e": "🥈", "w": "silver", "ipa": "/ˈsɪlvər/", "tr": "Gümüş", "ex": "The spoon is made of silver." },
   { "e": "🧶", "w": "wool", "ipa": "/wʊl/", "tr": "Yün", "ex": "My scarf is made of wool." }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "wood",
    "options": ["wood", "glass", "gold"],
    "hint": [
     "A tree is made of it, and so is a chair!",
     "Ağaç ondan yapılır, sandalye de!"
    ]
   },
   {
    "type": "pick",
    "q": "A warm sweater is often made of this. It comes from a sheep. What is it?",
    "tr": "Sıcak bir kazak çoğu zaman bundan yapılır. Koyundan gelir. Nedir?",
    "options": [
     { "e": "🧶", "v": "wool" },
     { "e": "📄", "v": "paper" },
     { "e": "🪵", "v": "wood" },
     { "e": "🥇", "v": "gold" }
    ],
    "answer": "wool",
    "hint": [
     "It is soft and warm. You can make a scarf from it.",
     "Yumuşak ve sıcak. Ondan atkı yapabilirsin."
    ]
   },
   {
    "type": "listen",
    "say": "This box is made of plastic. It is not made of metal, so it is very light.",
    "q": "What is the box made of?",
    "tr": "Kutu neyden yapılmış?",
    "options": [
     { "e": "🧴", "v": "plastic" },
     { "e": "⚙️", "v": "metal" },
     { "e": "🥛", "v": "glass" }
    ],
    "answer": "plastic",
    "hint": [
     "Listen again: “…made of p…”. It is not metal.",
     "Tekrar dinle: “…made of p…”. Metal değil."
    ]
   },
   {
    "type": "write",
    "e": "🪵",
    "sentence": "The table is ___ of wood.",
    "answer": "made",
    "mask": "M _ _ E",
    "tr": "Masa ahşaptan yapılmıştır.",
    "hint": [
     "We say “is made of” for materials. m - a - d - e",
     "Malzemeler için “is made of” deriz. m - a - d - e"
    ]
   },
   {
    "type": "speak",
    "sentence": "The window is made of glass.",
    "tr": "Pencere camdan yapılmıştır."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "gold",
    "hint": [
     "A yellow, shiny metal. It is very expensive! g - o - l - d",
     "Sarı, parlak bir metal. Çok değerlidir! g - o - l - d"
    ]
   },
   {
    "type": "dictation",
    "word": "silver",
    "e": "🥈",
    "hint": [
     "It starts with “s”. It is grey and shiny, like a coin.",
     "“s” ile başlıyor. Gri ve parlak, madeni para gibi."
    ]
   },
   {
    "type": "order",
    "tr": "Bu kutu kâğıttan yapılmış.",
    "answer": "This box is made of paper",
    "extra": "make",
    "hint": [
     "Start with: “This box is …”",
     "Şöyle başla: “This box is …”"
    ]
   },
   {
    "type": "story",
    "say": "Ece found an old box in the attic. The box was made of wood, and inside there was a gold ring. Next to it, there was a silver spoon and a wool scarf. Ece smiled and said, What a beautiful box!",
    "q": "What was the ring made of?",
    "tr": "Yüzük neyden yapılmıştı?",
    "options": ["gold", "silver", "wood"],
    "answer": "gold",
    "hint": [
     "The ring was inside the wooden box. Listen for “ring”!",
     "Yüzük ahşap kutunun içindeydi. “Ring” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bu yüzük altından yapılmıştır.",
    "answer": "This ring is made of gold."
   }
  ]
 },
 "songs": [
  {
   "title": "Paper and Plastic",
   "lines": [
    "A kite is made of <b>paper</b>, light and thin,",
    "A bottle is made of <b>plastic</b>, put it in the bin,",
    "A key is made of <b>metal</b>, with a shiny skin,",
    "What is it made of? Let's begin!"
   ]
  },
  {
   "title": "Warm Wool",
   "lines": [
    "My scarf is made of <b>wool</b>, soft and warm,",
    "It keeps me safe in every storm,",
    "The wool comes from a sheep, you see,",
    "My scarf is made of <b>wool</b> for me!"
   ]
  },
  {
   "title": "Silver and Gold",
   "lines": [
    "A ring made of <b>gold</b> shines in the sun,",
    "A coin made of <b>silver</b> is lots of fun,",
    "Gold is yellow, silver is grey,",
    "Both are shiny in the light of day!"
   ]
  },
  {
   "title": "Look Around",
   "lines": [
    "The window is made of <b>glass</b>, the door of <b>wood</b>,",
    "Ask me what it's made of, I know I could,",
    "The floor is wood, the lamp is glass,",
    "Let's name them all as the minutes pass!"
   ]
  }
 ],
 "reading": {
  "title": "Can at the Museum",
  "e": "🏛️",
  "lines": [
   ["Today, Can's class is at a museum in Istanbul.", "Bugün Can'ın sınıfı İstanbul'da bir müzede."],
   ["The teacher shows them an old chair. It is made of wood.", "Öğretmen onlara eski bir sandalye gösteriyor. Ahşaptan yapılmış."],
   ["Next to it, there is a tiny bottle made of glass.", "Yanında camdan yapılmış küçücük bir şişe var."],
   ["Can asks, “What is this ring made of?”", "Can soruyor: “Bu yüzük neyden yapılmış?”"],
   ["“It is made of gold,” says the guide. “And the spoon is made of silver.”", "Rehber, “Altından yapılmış,” diyor. “Kaşık da gümüşten yapılmış.”"],
   ["The old key on the wall is made of metal.", "Duvardaki eski anahtar metalden yapılmış."],
   ["In the shop, Can buys a notebook made of paper and a scarf made of wool.", "Dükkânda Can, kâğıttan yapılmış bir defter ve yünden yapılmış bir atkı alıyor."],
   ["He loves his day at the museum.", "Müzedeki gününü çok seviyor."]
  ],
  "qs": [
   {
    "q": "What is the old chair made of?",
    "tr": "Eski sandalye neyden yapılmış?",
    "options": ["wood", "metal", "plastic"],
    "answer": "wood"
   },
   {
    "q": "What is the ring made of?",
    "tr": "Yüzük neyden yapılmış?",
    "options": ["silver", "gold", "glass"],
    "answer": "gold"
   },
   {
    "q": "What is Can's scarf made of?",
    "tr": "Can'ın atkısı neyden yapılmış?",
    "options": ["paper", "wool", "wood"],
    "answer": "wool"
   }
  ]
 },
 "listening": [
  {
   "say": "My brother has a new toy car. It is made of plastic, and it is red.",
   "q": "What is the toy car made of?",
   "tr": "Oyuncak araba neyden yapılmış?",
   "options": [
    { "e": "🧴", "v": "plastic" },
    { "e": "⚙️", "v": "metal" },
    { "e": "🪵", "v": "wood" }
   ],
   "answer": "plastic"
  },
  {
   "say": "Grandma is knitting a sweater. It is made of wool, so it is very warm.",
   "q": "What is the sweater made of?",
   "tr": "Kazak neyden yapılmış?",
   "options": [
    { "e": "🧶", "v": "wool" },
    { "e": "📄", "v": "paper" },
    { "e": "🥛", "v": "glass" }
   ],
   "answer": "wool"
  },
  {
   "say": "Can's ring is made of silver. His sister's ring is made of gold.",
   "q": "What is Can's ring made of?",
   "tr": "Can'ın yüzüğü neyden yapılmış?",
   "options": [
    { "e": "🥈", "v": "silver" },
    { "e": "🥇", "v": "gold" },
    { "e": "🧴", "v": "plastic" }
   ],
   "answer": "silver"
  },
  {
   "say": "We made a small house in art class. It is made of paper, not wood.",
   "q": "What is the house made of?",
   "tr": "Ev neyden yapılmış?",
   "options": [
    { "e": "📄", "v": "paper" },
    { "e": "🪵", "v": "wood" },
    { "e": "⚙️", "v": "metal" }
   ],
   "answer": "paper"
  },
  {
   "say": "The old door in my grandfather's house is made of wood. The key is made of metal.",
   "q": "What is the key made of?",
   "tr": "Anahtar neyden yapılmış?",
   "options": [
    { "e": "⚙️", "v": "metal" },
    { "e": "🪵", "v": "wood" },
    { "e": "🥇", "v": "gold" }
   ],
   "answer": "metal"
  }
 ],
 "speaking": [
  { "e": "🪵", "en": "The table is made of wood.", "tr": "Masa ahşaptan yapılmıştır." },
  { "e": "🥛", "en": "My cup is made of glass.", "tr": "Bardağım camdan yapılmıştır." },
  { "e": "🧶", "en": "This scarf is made of wool.", "tr": "Bu atkı yünden yapılmıştır." },
  { "e": "🥇", "en": "What is your ring made of?", "tr": "Yüzüğün neyden yapılmış?" },
  { "e": "⚙️", "en": "The key is made of metal.", "tr": "Anahtar metalden yapılmıştır." }
 ],
 "write": {
  "title": "What Is It Made Of?",
  "en": "Look around your room. What are your things made of? Write about three or more things.",
  "tr": "Odana bak. Eşyaların neyden yapılmış? Üç ya da daha fazla eşyayı yaz.",
  "starters": [
   "My desk is made of",
   "The window is",
   "What is it made of?",
   "It is made of",
   "It is not made of",
   "I like my"
  ],
  "checks": [
   {
    "re": /\bmade of\b/,
    "t": "“made of” kalıbını kullan (is made of wood…)"
   },
   {
    "re": /\b(wood|metal|plastic|glass|paper|gold|silver|wool)\b/,
    "t": "Bir malzeme adı yaz (wood, glass, wool…)"
   }
  ],
  "model": "My room is small, but I love it. My desk is made of wood, and my chair is made of plastic. The window is made of glass. My bookshelf is made of metal, and my notebooks are made of paper. On my bed, there is a warm blanket made of wool. What is your room made of? I think every object tells a story."
 },
 "towers": [
  {
   "e": "🧸",
   "title": "Toy Factory",
   "steps": [
    { "tr": [["Plastikten yapılıyor.", "does"]], "en": [["are made of plastic", "does"]] },
    { "tr": [["Oyuncaklar", "who"], ["plastikten yapılıyor.", "does"]], "en": [["Toys", "who"], ["are made of plastic", "does"]] },
    { "tr": [["Oyuncaklar", "who"], ["bu fabrikada", "where"], ["plastikten yapılıyor.", "does"]], "en": [["Toys", "who"], ["are made of plastic", "does"], ["in this factory", "where"]] },
    { "tr": [["Oyuncaklar", "who"], ["bugünlerde", "when"], ["bu fabrikada", "where"], ["plastikten yapılıyor.", "does"]], "en": [["Toys", "who"], ["are made of plastic", "does"], ["in this factory", "where"], ["these days", "when"]] }
   ]
  },
  {
   "e": "💍",
   "title": "The Gold Ring",
   "steps": [
    { "tr": [["Altından yapıldı.", "does"]], "en": [["was made of gold", "does"]] },
    { "tr": [["Bu yüzük", "who"], ["altından yapıldı.", "does"]], "en": [["This ring", "who"], ["was made of gold", "does"]] },
    { "tr": [["Bu yüzük", "who"], ["İzmir'de", "where"], ["altından yapıldı.", "does"]], "en": [["This ring", "who"], ["was made of gold", "does"], ["in Izmir", "where"]] },
    { "tr": [["Bu yüzük", "who"], ["geçen yıl", "when"], ["İzmir'de", "where"], ["altından yapıldı.", "does"]], "en": [["This ring", "who"], ["was made of gold", "does"], ["in Izmir", "where"], ["last year", "when"]] }
   ]
  },
  {
   "e": "🧣",
   "title": "Grandma's Scarf",
   "steps": [
    { "tr": [["Yünden yapıldı.", "does"]], "en": [["was made of wool", "does"]] },
    { "tr": [["Elif'in atkısı", "who"], ["yünden yapıldı.", "does"]], "en": [["Elif's scarf", "who"], ["was made of wool", "does"]] },
    { "tr": [["Elif'in atkısı", "who"], ["Kapadokya'da", "where"], ["yünden yapıldı.", "does"]], "en": [["Elif's scarf", "who"], ["was made of wool", "does"], ["in Cappadocia", "where"]] },
    { "tr": [["Elif'in atkısı", "who"], ["çok uzun zaman önce", "when"], ["Kapadokya'da", "where"], ["yünden yapıldı.", "does"]], "en": [["Elif's scarf", "who"], ["was made of wool", "does"], ["in Cappadocia", "where"], ["a long time ago", "when"]] }
   ]
  }
 ]
});
// ---------- Ünite 24 ----------
UNITS_A2.push({
 "L": {
  "rank": "Time Keeper",
  "theme": "Seasons and Dates",
  "tr": "Mevsimler ve Tarihler",
  "icon": "📅",
  "song": {
   "title": "Four Seasons",
   "lines": [
    "Flowers grow in <b>spring</b>, birds begin to sing,",
    "We swim in <b>summer</b>, in the sun we play,",
    "Leaves fall in <b>autumn</b>, yellow, red and gray,",
    "It snows in <b>winter</b>, a white and happy day!"
   ]
  },
  "cards": [
   { "e": "🌸", "w": "spring", "ipa": "/sprɪŋ/", "tr": "İlkbahar", "ex": "Flowers open in spring." },
   { "e": "☀️", "w": "summer", "ipa": "/ˈsʌmər/", "tr": "Yaz", "ex": "We go to the beach in summer." },
   { "e": "🍂", "w": "autumn", "ipa": "/ˈɔtəm/", "tr": "Sonbahar", "ex": "Leaves fall in autumn." },
   { "e": "❄️", "w": "winter", "ipa": "/ˈwɪntər/", "tr": "Kış", "ex": "It snows in winter." },
   { "e": "📅", "w": "calendar", "ipa": "/ˈkæləndər/", "tr": "Takvim", "ex": "There is a calendar on the wall." },
   { "e": "🎂", "w": "birthday", "ipa": "/ˈbɜrθˌdeɪ/", "tr": "Doğum günü", "ex": "My birthday is on the fifth of May." },
   { "e": "🗓️", "w": "week", "ipa": "/wik/", "tr": "Hafta", "ex": "There are seven days in a week." },
   { "e": "📆", "w": "month", "ipa": "/mʌnθ/", "tr": "Ay", "ex": "April is the fourth month of the year." }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "spring",
    "options": ["spring", "summer", "winter"],
    "hint": [
     "Flowers wake up in this season. It comes after winter!",
     "Çiçekler bu mevsimde uyanır. Kıştan sonra gelir!"
    ]
   },
   {
    "type": "pick",
    "q": "It shows the days and months of the year. You look at it to find a date. What is it?",
    "tr": "Yılın günlerini ve aylarını gösterir. Bir tarih bulmak için ona bakarsın. Nedir?",
    "options": [
     { "e": "📅", "v": "calendar" },
     { "e": "🎂", "v": "birthday" },
     { "e": "🗓️", "v": "week" },
     { "e": "🌸", "v": "spring" }
    ],
    "answer": "calendar",
    "hint": [
     "You hang it on the wall. It has twelve months.",
     "Duvara asarsın. On iki ayı vardır."
    ]
   },
   {
    "type": "listen",
    "say": "My birthday is on the fifth of May. It is in spring, and I always have a big party.",
    "q": "In which season is the birthday?",
    "tr": "Doğum günü hangi mevsimde?",
    "options": [
     { "e": "🌸", "v": "spring" },
     { "e": "☀️", "v": "summer" },
     { "e": "❄️", "v": "winter" }
    ],
    "answer": "spring",
    "hint": [
     "Listen again: “It is in s…”. Flowers grow then.",
     "Tekrar dinle: “It is in s…”. O zaman çiçekler açar."
    ]
   },
   {
    "type": "write",
    "e": "🎂",
    "sentence": "My birthday is ___ the fifth of May.",
    "answer": "on",
    "mask": "O _",
    "tr": "Doğum günüm beş Mayıs'ta.",
    "hint": [
     "We use “on” with a date. o - n",
     "Tarihlerle “on” kullanırız. o - n"
    ]
   },
   {
    "type": "speak",
    "sentence": "My birthday is on the fifth of May.",
    "tr": "Doğum günüm beş Mayıs'ta."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "winter",
    "hint": [
     "It is the cold season with snow. w - i - n - t - e - r",
     "Karlı, soğuk mevsim. w - i - n - t - e - r"
    ]
   },
   {
    "type": "dictation",
    "word": "calendar",
    "e": "📅",
    "hint": [
     "It starts with “c”. You hang it on the wall to see the date.",
     "“c” ile başlıyor. Tarihi görmek için duvara asarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Kışın kar yağar.",
    "answer": "It snows in winter",
    "extra": "on",
    "hint": [
     "Start with: “It snows …”",
     "Şöyle başla: “It snows …”"
    ]
   },
   {
    "type": "story",
    "say": "Mert loves summer. His birthday is on the twelfth of July, in the middle of summer. Every year, his family goes to Bodrum for one week. They swim in the sea and eat ice cream.",
    "q": "When is Mert's birthday?",
    "tr": "Mert'in doğum günü ne zaman?",
    "options": ["on the twelfth of July", "on the second of June", "in winter"],
    "answer": "on the twelfth of July",
    "hint": [
     "Listen for the month and the number after “on the”.",
     "“On the” sonrasındaki ayı ve sayıyı dinle."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Okul eylülde başlar.",
    "answer": "School starts in September."
   }
  ]
 },
 "songs": [
  {
   "title": "Birthday Song",
   "lines": [
    "My <b>birthday</b> is on the tenth of June,",
    "We sing and dance, the party starts soon,",
    "A big round cake with candles bright,",
    "I make a wish on my birthday night!"
   ]
  },
  {
   "title": "Calendar Song",
   "lines": [
    "Look at the <b>calendar</b> on the wall,",
    "Twelve months are there, that is all,",
    "Each <b>month</b> has weeks, each <b>week</b> has days,",
    "Let's count them in so many ways!"
   ]
  },
  {
   "title": "Seasons Go Round",
   "lines": [
    "In <b>autumn</b> leaves fall on the ground,",
    "In <b>winter</b> snow falls without a sound,",
    "In <b>spring</b> the flowers wake and grow,",
    "In <b>summer</b> the warm winds blow!"
   ]
  },
  {
   "title": "Weeks and Months",
   "lines": [
    "One <b>week</b>, two weeks, three weeks, four,",
    "That makes a <b>month</b>, and then there's more,",
    "In <b>summer</b> we have June and July too,",
    "On the first of August, the sea is blue!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep's Birthday",
  "e": "🎂",
  "lines": [
   ["Zeynep's birthday is on the fifth of May.", "Zeynep'in doğum günü beş Mayıs'ta."],
   ["It is in spring, and the weather is warm.", "İlkbaharda, hava da sıcak."],
   ["Every year, she looks at the calendar a week before her birthday.", "Her yıl doğum gününden bir hafta önce takvime bakıyor."],
   ["This year, her party is on Saturday at home in Izmir.", "Bu yıl partisi cumartesi günü İzmir'de evde."],
   ["Her friends bring gifts, and her mother makes a big cake.", "Arkadaşları hediye getiriyor, annesi de büyük bir pasta yapıyor."],
   ["Zeynep's brother has his birthday in winter, in the month of December.", "Zeynep'in abisinin doğum günü kışın, Aralık ayında."],
   ["He says, “Spring is nice, but I love winter, because it snows!”", "“İlkbahar güzel ama ben kışı seviyorum, çünkü kar yağıyor!” diyor."],
   ["Zeynep laughs and says, “Every month has a special day!”", "Zeynep gülüyor ve “Her ayın özel bir günü var!” diyor."]
  ],
  "qs": [
   {
    "q": "When is Zeynep's birthday?",
    "tr": "Zeynep'in doğum günü ne zaman?",
    "options": ["on the fifth of May", "on the fifth of June", "in winter"],
    "answer": "on the fifth of May"
   },
   {
    "q": "In which season is her birthday?",
    "tr": "Doğum günü hangi mevsimde?",
    "options": ["spring", "summer", "autumn"],
    "answer": "spring"
   },
   {
    "q": "When is her brother's birthday?",
    "tr": "Abisinin doğum günü ne zaman?",
    "options": ["in July", "in December", "in May"],
    "answer": "in December"
   }
  ]
 },
 "listening": [
  {
   "say": "It is very hot in summer. We go to the beach in Antalya with our cousins.",
   "q": "Which season is it?",
   "tr": "Hangi mevsim?",
   "options": [
    { "e": "☀️", "v": "summer" },
    { "e": "❄️", "v": "winter" },
    { "e": "🌸", "v": "spring" }
   ],
   "answer": "summer"
  },
  {
   "say": "In autumn, the leaves fall from the trees. My grandfather cleans them up every week.",
   "q": "When do the leaves fall?",
   "tr": "Yapraklar ne zaman dökülür?",
   "options": [
    { "e": "🍂", "v": "autumn" },
    { "e": "🌸", "v": "spring" },
    { "e": "❄️", "v": "winter" }
   ],
   "answer": "autumn"
  },
  {
   "say": "My birthday is on the twenty-first of March. It is the first day of spring.",
   "q": "In which month is the birthday?",
   "tr": "Doğum günü hangi ayda?",
   "options": [
    { "e": "🌷", "v": "March" },
    { "e": "🌹", "v": "May" },
    { "e": "🏖️", "v": "June" }
   ],
   "answer": "March"
  },
  {
   "say": "There are twelve months in a year. There are four weeks in a month.",
   "q": "How many months are in a year?",
   "tr": "Bir yılda kaç ay vardır?",
   "options": [
    { "e": "1️⃣2️⃣", "v": "twelve" },
    { "e": "4️⃣", "v": "four" },
    { "e": "7️⃣", "v": "seven" }
   ],
   "answer": "twelve"
  },
  {
   "say": "Can looks at the calendar. His school party is on the tenth of January, in winter.",
   "q": "When is the school party?",
   "tr": "Okul partisi ne zaman?",
   "options": [
    { "e": "❄️", "v": "winter" },
    { "e": "☀️", "v": "summer" },
    { "e": "🌸", "v": "spring" }
   ],
   "answer": "winter"
  }
 ],
 "speaking": [
  { "e": "🌸", "en": "Flowers grow in spring.", "tr": "Çiçekler ilkbaharda açar." },
  { "e": "❄️", "en": "It snows in winter.", "tr": "Kışın kar yağar." },
  { "e": "🎂", "en": "My birthday is on the fifth of May.", "tr": "Doğum günüm beş Mayıs'ta." },
  { "e": "📅", "en": "The party is on the tenth of June.", "tr": "Parti on Haziran'da." },
  { "e": "🍂", "en": "Leaves fall in autumn.", "tr": "Sonbaharda yapraklar dökülür." }
 ],
 "write": {
  "title": "My Birthday",
  "en": "Write about your birthday. When is it? What is your favourite season?",
  "tr": "Doğum gününü anlat. Ne zaman? En sevdiğin mevsim hangisi?",
  "starters": [
   "My birthday is on",
   "It is in",
   "My favourite season is",
   "In summer, I",
   "There are",
   "I like"
  ],
  "checks": [
   {
    "re": /\b(in|on) (the )?(spring|summer|autumn|winter|january|february|march|april|may|june|july|august|september|october|november|december)\b/,
    "t": "in / on ile bir ay ya da mevsim yaz (in summer, in May…)"
   },
   {
    "re": /\bon the \w+( of \w+)?\b/,
    "t": "Tarih yaz (on the fifth of May…)"
   }
  ],
  "model": "My birthday is on the tenth of August, so it is in summer. I love summer because we go to the sea. Before my birthday, I look at the calendar every week. This month is special for me! In winter, it snows in my city, and I play outside. My favourite season is summer."
 },
 "towers": [
  {
   "e": "🎂",
   "title": "Birthday Party",
   "steps": [
    { "tr": [["Parti yapar.", "does"]], "en": [["has a party", "does"]] },
    { "tr": [["Ece", "who"], ["parti yapar.", "does"]], "en": [["Ece", "who"], ["has a party", "does"]] },
    { "tr": [["Ece", "who"], ["evde", "where"], ["parti yapar.", "does"]], "en": [["Ece", "who"], ["has a party", "does"], ["at home", "where"]] },
    { "tr": [["Ece", "who"], ["Mayıs'ın beşinde", "when"], ["evde", "where"], ["parti yapar.", "does"]], "en": [["Ece", "who"], ["has a party", "does"], ["at home", "where"], ["on the fifth of May", "when"]] }
   ]
  },
  {
   "e": "❄️",
   "title": "Winter Fun",
   "steps": [
    { "tr": [["Karda oynar.", "does"]], "en": [["play in the snow", "does"]] },
    { "tr": [["Çocuklar", "who"], ["karda oynar.", "does"]], "en": [["The children", "who"], ["play in the snow", "does"]] },
    { "tr": [["Çocuklar", "who"], ["Kapadokya'da", "where"], ["karda oynar.", "does"]], "en": [["The children", "who"], ["play in the snow", "does"], ["in Cappadocia", "where"]] },
    { "tr": [["Çocuklar", "who"], ["kışın", "when"], ["Kapadokya'da", "where"], ["karda oynar.", "does"]], "en": [["The children", "who"], ["play in the snow", "does"], ["in Cappadocia", "where"], ["in winter", "when"]] }
   ]
  },
  {
   "e": "🌸",
   "title": "Spring Visit",
   "steps": [
    { "tr": [["Büyükannesini ziyaret eder.", "does"]], "en": [["visits his grandma", "does"]] },
    { "tr": [["Mert", "who"], ["büyükannesini ziyaret eder.", "does"]], "en": [["Mert", "who"], ["visits his grandma", "does"]] },
    { "tr": [["Mert", "who"], ["İzmir'de", "where"], ["büyükannesini ziyaret eder.", "does"]], "en": [["Mert", "who"], ["visits his grandma", "does"], ["in Izmir", "where"]] },
    { "tr": [["Mert", "who"], ["Nisan'da", "when"], ["İzmir'de", "where"], ["büyükannesini ziyaret eder.", "does"]], "en": [["Mert", "who"], ["visits his grandma", "does"], ["in Izmir", "where"], ["in April", "when"]] }
   ]
  }
 ]
});
// ---------- Ünite 25 ----------
UNITS_A2.push({
 "L": {
  "rank": "Smart Shopper",
  "theme": "Shopping",
  "tr": "Alışveriş",
  "icon": "🛍️",
  "song": {
   "title": "Smart Shopper",
   "lines": [
    "I take my <b>wallet</b> and some <b>money</b> too,",
    "How much is the <b>jacket</b>? Tell me, please do!",
    "The red one is too <b>expensive</b>, the blue one is <b>cheap</b>,",
    "I count each <b>coin</b>, and the rest I keep!"
   ]
  },
  "cards": [
   {
    "e": "💵",
    "w": "money",
    "ipa": "/ˈmʌni/",
    "tr": "Para",
    "ex": "I have some money in my pocket."
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
    "ex": "My wallet is in my school bag."
   },
   {
    "e": "🪙",
    "w": "coin",
    "ipa": "/kɔɪn/",
    "tr": "Bozuk para",
    "ex": "I found a coin under the table."
   },
   {
    "e": "💲",
    "w": "cheap",
    "ipa": "/tʃip/",
    "tr": "Ucuz",
    "ex": "This notebook is cheap, only ten lira."
   },
   {
    "e": "💎",
    "w": "expensive",
    "ipa": "/ɪkˈspɛnsɪv/",
    "tr": "Pahalı",
    "ex": "That watch is too expensive for me."
   },
   {
    "e": "🧥",
    "w": "jacket",
    "ipa": "/ˈdʒækɪt/",
    "tr": "Ceket",
    "ex": "How much is this blue jacket?"
   },
   {
    "e": "🧑‍💼",
    "w": "shop assistant",
    "ipa": "/ʃɑp əˈsɪstənt/",
    "tr": "Satış görevlisi",
    "ex": "The shop assistant helped us find a bag."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "expensive",
    "options": [
     "expensive",
     "cheap",
     "wallet"
    ],
    "hint": [
     "It means the price is very high!",
     "Fiyatı çok yüksek demek!"
    ]
   },
   {
    "type": "pick",
    "q": "It costs only five lira. It does not cost a lot of money. Which word means this?",
    "tr": "Sadece beş lira. Çok para tutmuyor. Hangi kelime bunu anlatır?",
    "options": [
     {
      "e": "💲",
      "v": "cheap"
     },
     {
      "e": "💎",
      "v": "expensive"
     },
     {
      "e": "👛",
      "v": "wallet"
     },
     {
      "e": "🪙",
      "v": "coin"
     }
    ],
    "answer": "cheap",
    "hint": [
     "You do not pay a lot for it.",
     "Onun için çok para ödemezsin."
    ]
   },
   {
    "type": "listen",
    "say": "Ece is in a clothes shop. She asks the shop assistant, “How much is this jacket?” The shop assistant says, “It is three hundred lira.”",
    "q": "What does Ece want to buy?",
    "tr": "Ece ne almak istiyor?",
    "options": [
     {
      "e": "🧥",
      "v": "jacket"
     },
     {
      "e": "👟",
      "v": "shoes"
     },
     {
      "e": "🎒",
      "v": "bag"
     }
    ],
    "answer": "jacket",
    "hint": [
     "Listen again: “How much is this j…?”",
     "Tekrar dinle: “How much is this j…?”"
    ]
   },
   {
    "type": "write",
    "e": "🧥",
    "sentence": "How ___ is this jacket?",
    "answer": "much",
    "mask": "M _ _ H",
    "tr": "Bu ceket ne kadar?",
    "hint": [
     "We ask about the price with “How …”. m - u - c - h",
     "Fiyatı “How …” ile sorarız. m - u - c - h"
    ]
   },
   {
    "type": "speak",
    "sentence": "How much is this jacket? It is too expensive.",
    "tr": "Bu ceket ne kadar? Çok pahalı."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "coin",
    "hint": [
     "A small round piece of money. c - o - i - n",
     "Küçük, yuvarlak bir para. c - o - i - n"
    ]
   },
   {
    "type": "dictation",
    "word": "price",
    "e": "🏷️",
    "hint": [
     "It starts with “p”. It tells you how much something costs.",
     "“p” ile başlıyor. Bir şeyin ne kadar tuttuğunu söyler."
    ]
   },
   {
    "type": "order",
    "tr": "Bu ceket benim için çok pahalı.",
    "answer": "This jacket is too expensive for me",
    "extra": "much",
    "hint": [
     "Start with: “This jacket …”",
     "Şöyle başla: “This jacket …”"
    ]
   },
   {
    "type": "story",
    "say": "Can and his sister went to a shop in Izmir. Can wanted a new jacket. He asked the shop assistant, “How much is this jacket?” It was five hundred lira, so Can said, “It is too expensive. Do you have a cheaper one?”",
    "q": "Why does Can ask for another jacket?",
    "tr": "Can neden başka bir ceket istiyor?",
    "options": [
     "It is too expensive",
     "It is too small",
     "It is too cheap"
    ],
    "answer": "It is too expensive",
    "hint": [
     "Listen for the price: five hundred lira!",
     "Fiyatı dinle: beş yüz lira!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bu cüzdan şu cüzdandan daha ucuz.",
    "answer": "This wallet is cheaper than that wallet."
   }
  ]
 },
 "songs": [
  {
   "title": "Cheap or Expensive",
   "lines": [
    "A <b>cheap</b> ball costs ten lira, hey,",
    "An <b>expensive</b> bike costs much more to pay,",
    "Look at the <b>price</b>, think before you buy,",
    "A smart shopper is clever, and so am I!"
   ]
  },
  {
   "title": "My Little Wallet",
   "lines": [
    "Two <b>coins</b> in my <b>wallet</b>, jingle, jingle, jing,",
    "I save my <b>money</b> for a special thing,",
    "Not too many, not too few,",
    "Soon I will buy a gift for you!"
   ]
  },
  {
   "title": "The Jacket Shop",
   "lines": [
    "The <b>shop assistant</b> smiles at me,",
    "“This <b>jacket</b> is nice,” says she,",
    "“How much is the <b>price</b>?” I ask with care,",
    "“It is cheaper than the others, I swear!”"
   ]
  },
  {
   "title": "Too Expensive!",
   "lines": [
    "Too <b>expensive</b>, too <b>expensive</b>, oh no, no, no!",
    "My <b>money</b> is little, my <b>wallet</b> is low,",
    "Let us find something <b>cheap</b>, come on, let us go,",
    "A smart shopper looks around and takes it slow!"
   ]
  }
 ],
 "reading": {
  "title": "Ece Goes Shopping",
  "e": "🛍️",
  "lines": [
   [
    "On Saturday, Ece went shopping with her brother Can in Izmir.",
    "Cumartesi günü Ece, abisi Can'la İzmir'de alışverişe gitti."
   ],
   [
    "She had three hundred lira in her wallet.",
    "Cüzdanında üç yüz lira vardı."
   ],
   [
    "Ece wanted a new jacket for the winter.",
    "Ece kış için yeni bir ceket istiyordu."
   ],
   [
    "She asked the shop assistant, “How much is this jacket?”",
    "Satış görevlisine sordu: “Bu ceket ne kadar?”"
   ],
   [
    "“It is four hundred and fifty lira,” said the shop assistant.",
    "Satış görevlisi: “Dört yüz elli lira,” dedi."
   ],
   [
    "“That is too expensive!” said Ece.",
    "Ece: “Bu çok pahalı!” dedi."
   ],
   [
    "Then she found a blue jacket. It was cheaper than the first one.",
    "Sonra mavi bir ceket buldu. İlkinden daha ucuzdu."
   ],
   [
    "The price was only two hundred and eighty lira, so she paid with her money.",
    "Fiyatı sadece iki yüz seksen liraydı, bu yüzden parasıyla ödedi."
   ],
   [
    "Ece was a smart shopper, and she was very happy.",
    "Ece akıllı bir alışverişçiydi ve çok mutluydu."
   ]
  ],
  "qs": [
   {
    "q": "How much money did Ece have in her wallet?",
    "tr": "Ece'nin cüzdanında ne kadar para vardı?",
    "options": [
     "200 lira",
     "300 lira",
     "450 lira"
    ],
    "answer": "300 lira"
   },
   {
    "q": "Why did Ece not buy the first jacket?",
    "tr": "Ece neden ilk ceketi almadı?",
    "options": [
     "It was too expensive",
     "It was too small",
     "It was too cheap"
    ],
    "answer": "It was too expensive"
   },
   {
    "q": "How much was the blue jacket?",
    "tr": "Mavi ceket ne kadardı?",
    "options": [
     "180 lira",
     "280 lira",
     "450 lira"
    ],
    "answer": "280 lira"
   }
  ]
 },
 "listening": [
  {
   "say": "Excuse me, how much is this wallet? It is only twenty lira, and it is very nice.",
   "q": "How much is the wallet?",
   "tr": "Cüzdan ne kadar?",
   "options": [
    {
     "e": "2️⃣0️⃣",
     "v": "20 lira"
    },
    {
     "e": "3️⃣0️⃣",
     "v": "30 lira"
    },
    {
     "e": "4️⃣0️⃣",
     "v": "40 lira"
    }
   ],
   "answer": "20 lira"
  },
  {
   "say": "I like this jacket, but it is too expensive for me. I only have one hundred lira.",
   "q": "What does he think about the jacket?",
   "tr": "Ceket hakkında ne düşünüyor?",
   "options": [
    {
     "e": "💎",
     "v": "too expensive"
    },
    {
     "e": "💲",
     "v": "very cheap"
    },
    {
     "e": "📏",
     "v": "too big"
    }
   ],
   "answer": "too expensive"
  },
  {
   "say": "My mother gave me a coin. I put the coin in my wallet and went to the shop.",
   "q": "Where did he put the coin?",
   "tr": "Bozuk parayı nereye koydu?",
   "options": [
    {
     "e": "👛",
     "v": "wallet"
    },
    {
     "e": "👖",
     "v": "pocket"
    },
    {
     "e": "🎒",
     "v": "bag"
    }
   ],
   "answer": "wallet"
  },
  {
   "say": "The shop assistant said that the red bag is cheaper than the blue bag. I took the red one.",
   "q": "Which bag is cheaper?",
   "tr": "Hangi çanta daha ucuz?",
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
   "say": "How many coins do you have in your wallet? I have three coins and a ten lira note.",
   "q": "How many coins does she have?",
   "tr": "Kaç bozuk parası var?",
   "options": [
    {
     "e": "2️⃣",
     "v": "two"
    },
    {
     "e": "3️⃣",
     "v": "three"
    },
    {
     "e": "4️⃣",
     "v": "four"
    }
   ],
   "answer": "three"
  }
 ],
 "speaking": [
  {
   "e": "🧥",
   "en": "How much is this jacket?",
   "tr": "Bu ceket ne kadar?"
  },
  {
   "e": "💎",
   "en": "It is too expensive for me.",
   "tr": "Benim için çok pahalı."
  },
  {
   "e": "👛",
   "en": "This wallet is cheaper than that wallet.",
   "tr": "Bu cüzdan şu cüzdandan daha ucuz."
  },
  {
   "e": "🪙",
   "en": "How many coins do you have in your wallet?",
   "tr": "Cüzdanında kaç bozuk para var?"
  },
  {
   "e": "🧑‍💼",
   "en": "The shop assistant showed me the price.",
   "tr": "Satış görevlisi bana fiyatı gösterdi."
  }
 ],
 "write": {
  "title": "My Shopping Trip",
  "en": "Write about a shopping trip. What did you want to buy? How much was it? Was it cheap or too expensive?",
  "tr": "Bir alışveriş gezisini anlat. Ne almak istedin? Ne kadardı? Ucuz muydu yoksa çok pahalı mıydı?",
  "starters": [
   "I went to",
   "I wanted to buy",
   "How much is",
   "It was too",
   "It was cheaper than",
   "I paid"
  ],
  "checks": [
   {
    "re": /\b(too|cheaper|more expensive)\b/,
    "t": "“too” ya da “-er than” kullan (too expensive, cheaper than…)"
   },
   {
    "re": /\b(how much|how many|lira|price)\b/,
    "t": "Fiyatı yaz (How much…? 250 lira, the price…)"
   }
  ],
  "model": "Last Saturday, I went shopping with my mother. I wanted to buy a new jacket. I asked the shop assistant, “How much is this jacket?” It was 600 lira, and it was too expensive for me. Then I found a cheaper jacket. The price was only 250 lira. I took the money out of my wallet and paid. I was a smart shopper!"
 },
 "towers": [
  {
   "e": "🧥",
   "title": "Jacket Price",
   "steps": [
    {
     "tr": [
      [
       "Çok pahalı.",
       "does"
      ]
     ],
     "en": [
      [
       "is too expensive",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Bu ceket",
       "who"
      ],
      [
       "çok pahalı.",
       "does"
      ]
     ],
     "en": [
      [
       "This jacket",
       "who"
      ],
      [
       "is too expensive",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Bu ceket",
       "who"
      ],
      [
       "benim için",
       "where"
      ],
      [
       "çok pahalı.",
       "does"
      ]
     ],
     "en": [
      [
       "This jacket",
       "who"
      ],
      [
       "is too expensive",
       "does"
      ],
      [
       "for me",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Bu ceket",
       "who"
      ],
      [
       "bugün",
       "when"
      ],
      [
       "benim için",
       "where"
      ],
      [
       "çok pahalı.",
       "does"
      ]
     ],
     "en": [
      [
       "This jacket",
       "who"
      ],
      [
       "is too expensive",
       "does"
      ],
      [
       "for me",
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
   "e": "👛",
   "title": "Cheaper Wallet",
   "steps": [
    {
     "tr": [
      [
       "Daha ucuz bir cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "bought a cheaper wallet",
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
       "daha ucuz bir cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "bought a cheaper wallet",
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
       "çarşıda",
       "where"
      ],
      [
       "daha ucuz bir cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "bought a cheaper wallet",
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
       "Mert",
       "who"
      ],
      [
       "dün",
       "when"
      ],
      [
       "çarşıda",
       "where"
      ],
      [
       "daha ucuz bir cüzdan aldı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "bought a cheaper wallet",
       "does"
      ],
      [
       "in the market",
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
   "e": "💲",
   "title": "Cheap Blue Jacket",
   "steps": [
    {
     "tr": [
      [
       "Kırmızıdan daha ucuz.",
       "does"
      ]
     ],
     "en": [
      [
       "is cheaper than the red one",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mavi ceket",
       "who"
      ],
      [
       "kırmızıdan daha ucuz.",
       "does"
      ]
     ],
     "en": [
      [
       "The blue jacket",
       "who"
      ],
      [
       "is cheaper than the red one",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mavi ceket",
       "who"
      ],
      [
       "mağazada",
       "where"
      ],
      [
       "kırmızıdan daha ucuz.",
       "does"
      ]
     ],
     "en": [
      [
       "The blue jacket",
       "who"
      ],
      [
       "is cheaper than the red one",
       "does"
      ],
      [
       "in the shop",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mavi ceket",
       "who"
      ],
      [
       "bugün",
       "when"
      ],
      [
       "mağazada",
       "where"
      ],
      [
       "kırmızıdan daha ucuz.",
       "does"
      ]
     ],
     "en": [
      [
       "The blue jacket",
       "who"
      ],
      [
       "is cheaper than the red one",
       "does"
      ],
      [
       "in the shop",
       "where"
      ],
      [
       "today",
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
   "title": "Have You Ever?",
   "lines": [
    "Have you ever used a <b>computer</b>? Yes, I have!",
    "I have watched a <b>video</b> and I laughed and waved,",
    "Have you ever met a <b>robot</b>? No, I have never!",
    "Technology is fun, let us learn it together!"
   ]
  },
  "cards": [
   {
    "e": "💻",
    "w": "computer",
    "ipa": "/kəmˈpjutər/",
    "tr": "Bilgisayar",
    "ex": "My dad has a computer in his office."
   },
   {
    "e": "🌐",
    "w": "internet",
    "ipa": "/ˈɪntərˌnɛt/",
    "tr": "İnternet",
    "ex": "We use the internet to find information."
   },
   {
    "e": "📧",
    "w": "email",
    "ipa": "/ˈiˌmeɪl/",
    "tr": "E-posta",
    "ex": "I have sent an email to my teacher."
   },
   {
    "e": "📱",
    "w": "tablet",
    "ipa": "/ˈtæblɪt/",
    "tr": "Tablet",
    "ex": "She has a new tablet for her birthday."
   },
   {
    "e": "⌨️",
    "w": "keyboard",
    "ipa": "/ˈkiˌbɔrd/",
    "tr": "Klavye",
    "ex": "I type fast on the keyboard."
   },
   {
    "e": "🤖",
    "w": "robot",
    "ipa": "/ˈroʊˌbɑt/",
    "tr": "Robot",
    "ex": "Have you ever seen a robot?"
   },
   {
    "e": "🎬",
    "w": "video",
    "ipa": "/ˈvɪdioʊ/",
    "tr": "Video",
    "ex": "We have watched a funny video about cats."
   },
   {
    "e": "💬",
    "w": "message",
    "ipa": "/ˈmɛsɪdʒ/",
    "tr": "Mesaj",
    "ex": "Zeynep has sent me a message."
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
     "robot"
    ],
    "hint": [
     "You can type and play games on it!",
     "Onda yazı yazabilir ve oyun oynayabilirsin!"
    ]
   },
   {
    "type": "pick",
    "q": "You press its keys to write letters and numbers. What is it?",
    "tr": "Tuşlarına basarak harf ve sayı yazarsın. Nedir?",
    "options": [
     {
      "e": "⌨️",
      "v": "keyboard"
     },
     {
      "e": "📱",
      "v": "tablet"
     },
     {
      "e": "🤖",
      "v": "robot"
     },
     {
      "e": "💻",
      "v": "computer"
     }
    ],
    "answer": "keyboard",
    "hint": [
     "It has many small keys: a, b, c…",
     "Birçok küçük tuşu var: a, b, c…"
    ]
   },
   {
    "type": "listen",
    "say": "Mert has never seen a real robot. But he has watched many robot videos on the internet.",
    "q": "What has Mert never seen?",
    "tr": "Mert hiç ne görmemiş?",
    "options": [
     {
      "e": "🤖",
      "v": "robot"
     },
     {
      "e": "💻",
      "v": "computer"
     },
     {
      "e": "📱",
      "v": "tablet"
     }
    ],
    "answer": "robot",
    "hint": [
     "Listen again: “Mert has never seen a real r…”",
     "Tekrar dinle: “Mert has never seen a real r…”"
    ]
   },
   {
    "type": "write",
    "e": "📧",
    "sentence": "She has ___ an email to her teacher.",
    "answer": "sent",
    "mask": "S _ _ T",
    "tr": "O, öğretmenine bir e-posta gönderdi.",
    "hint": [
     "It is the past participle of “send”. s - e - n - t",
     "“Send” fiilinin üçüncü hâli. s - e - n - t"
    ]
   },
   {
    "type": "speak",
    "sentence": "Have you ever sent an email? Yes, I have.",
    "tr": "Hiç e-posta gönderdin mi? Evet, gönderdim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "robot",
    "hint": [
     "It is a machine that can move and talk! r - o - b - o - t",
     "Hareket edip konuşabilen bir makine! r - o - b - o - t"
    ]
   },
   {
    "type": "dictation",
    "word": "keyboard",
    "e": "⌨️",
    "hint": [
     "It starts with “k”. You type on it.",
     "“k” ile başlıyor. Onunla yazı yazarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Hiç robot gördün mü?",
    "answer": "Have you ever seen a robot",
    "extra": "saw",
    "hint": [
     "Start with: “Have you …”",
     "Şöyle başla: “Have you …”"
    ]
   },
   {
    "type": "story",
    "say": "Elif has used a tablet at home many times. But she has never used a computer at school. Today her teacher showed her the keyboard. Elif has just written her first message on it.",
    "q": "What has Elif never used at school?",
    "tr": "Elif okulda hiç ne kullanmamış?",
    "options": [
     "a computer",
     "a tablet",
     "a robot"
    ],
    "answer": "a computer",
    "hint": [
     "Listen for “never”!",
     "“Never” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Ben hiç gerçek bir robot görmedim.",
    "answer": "I have never seen a real robot."
   }
  ]
 },
 "songs": [
  {
   "title": "Click, Click",
   "lines": [
    "I have used the <b>internet</b> to find a song,",
    "I have watched a <b>video</b> all day long,",
    "I have typed on a <b>keyboard</b>, click, click, click,",
    "My fingers are fast, and they are quick!"
   ]
  },
  {
   "title": "My Tablet",
   "lines": [
    "I have a <b>tablet</b>, it is thin and light,",
    "I have read a story there tonight,",
    "I have sent a <b>message</b> to my best friend,",
    "I have never wanted this fun to end!"
   ]
  },
  {
   "title": "The Email Song",
   "lines": [
    "Have you ever sent an <b>email</b> to a friend?",
    "Yes, I have, I wrote it again and again,",
    "Click on send, and it flies away,",
    "I have never waited for a reply all day!"
   ]
  },
  {
   "title": "Robot Friend",
   "lines": [
    "My <b>robot</b> has learned to dance and spin,",
    "It has played a <b>video</b> game and won, it is a win!",
    "It has never been tired, it never will be,",
    "A clever <b>computer</b> inside, as you can see!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep and the Tablet",
  "e": "📱",
  "lines": [
   [
    "Zeynep is ten years old, and she lives in Cappadocia.",
    "Zeynep on yaşında ve Kapadokya'da yaşıyor."
   ],
   [
    "Last week her uncle gave her a tablet.",
    "Geçen hafta amcası ona bir tablet verdi."
   ],
   [
    "Zeynep has never used a tablet before, but she learns fast.",
    "Zeynep daha önce hiç tablet kullanmadı ama çabuk öğreniyor."
   ],
   [
    "She has opened the internet and watched a video about robots.",
    "İnterneti açtı ve robotlar hakkında bir video izledi."
   ],
   [
    "She has also sent an email to her grandmother in Izmir.",
    "Ayrıca İzmir'deki anneannesine bir e-posta gönderdi."
   ],
   [
    "Her grandmother has never received an email before!",
    "Anneannesi daha önce hiç e-posta almamıştı!"
   ],
   [
    "She wrote back a short message: “Thank you, my dear Zeynep!”",
    "Kısa bir mesajla cevap yazdı: “Teşekkür ederim, canım Zeynep!”"
   ],
   [
    "Now Zeynep has a new hobby, and her whole family is proud of her.",
    "Şimdi Zeynep'in yeni bir hobisi var ve bütün ailesi onunla gurur duyuyor."
   ]
  ],
  "qs": [
   {
    "q": "What has Zeynep never used before?",
    "tr": "Zeynep daha önce hiç ne kullanmamış?",
    "options": [
     "a tablet",
     "a robot",
     "a keyboard"
    ],
    "answer": "a tablet"
   },
   {
    "q": "Who has Zeynep sent an email to?",
    "tr": "Zeynep kime e-posta göndermiş?",
    "options": [
     "her teacher",
     "her grandmother",
     "her friend"
    ],
    "answer": "her grandmother"
   },
   {
    "q": "What did Zeynep watch on the internet?",
    "tr": "Zeynep internette ne izledi?",
    "options": [
     "a video about robots",
     "a video about cats",
     "a video about cars"
    ],
    "answer": "a video about robots"
   }
  ]
 },
 "listening": [
  {
   "say": "I have never used a keyboard. It looks very difficult, and there are so many keys.",
   "q": "What has he never used?",
   "tr": "Hiç ne kullanmamış?",
   "options": [
    {
     "e": "⌨️",
     "v": "keyboard"
    },
    {
     "e": "🖥️",
     "v": "computer"
    },
    {
     "e": "📱",
     "v": "tablet"
    }
   ],
   "answer": "keyboard"
  },
  {
   "say": "My sister has sent an email to her teacher about the homework. The teacher has answered already.",
   "q": "Who did she send an email to?",
   "tr": "Kime e-posta gönderdi?",
   "options": [
    {
     "e": "👩‍🏫",
     "v": "teacher"
    },
    {
     "e": "👵",
     "v": "grandmother"
    },
    {
     "e": "🧒",
     "v": "friend"
    }
   ],
   "answer": "teacher"
  },
  {
   "say": "Have you ever watched a video about robots? It is very interesting, and I have seen it twice!",
   "q": "What is the video about?",
   "tr": "Video neyle ilgili?",
   "options": [
    {
     "e": "🤖",
     "v": "robots"
    },
    {
     "e": "🚗",
     "v": "cars"
    },
    {
     "e": "🐱",
     "v": "cats"
    }
   ],
   "answer": "robots"
  },
  {
   "say": "We have just found the internet on our new computer. It is very fast, and the screen is big.",
   "q": "Where did they find the internet?",
   "tr": "İnterneti nerede buldular?",
   "options": [
    {
     "e": "💻",
     "v": "computer"
    },
    {
     "e": "📱",
     "v": "tablet"
    },
    {
     "e": "📺",
     "v": "TV"
    }
   ],
   "answer": "computer"
  },
  {
   "say": "Can has written a long message to his best friend, but he has not sent it yet.",
   "q": "Has Can sent the message?",
   "tr": "Can mesajı gönderdi mi?",
   "options": [
    {
     "e": "✅",
     "v": "yes"
    },
    {
     "e": "❌",
     "v": "no"
    },
    {
     "e": "❓",
     "v": "maybe"
    }
   ],
   "answer": "no"
  }
 ],
 "speaking": [
  {
   "e": "💻",
   "en": "Have you ever used a computer?",
   "tr": "Hiç bilgisayar kullandın mı?"
  },
  {
   "e": "🤖",
   "en": "I have never seen a real robot.",
   "tr": "Ben hiç gerçek bir robot görmedim."
  },
  {
   "e": "📧",
   "en": "She has sent an email to her teacher.",
   "tr": "O, öğretmenine bir e-posta gönderdi."
  },
  {
   "e": "🎬",
   "en": "I have watched a funny video on the internet.",
   "tr": "İnternette komik bir video izledim."
  },
  {
   "e": "📱",
   "en": "He has written a message on his tablet.",
   "tr": "O, tabletinde bir mesaj yazdı."
  }
 ],
 "write": {
  "title": "My Technology",
  "en": "Write about technology. What have you used? What have you never used?",
  "tr": "Teknoloji hakkında yaz. Neleri kullandın? Neleri hiç kullanmadın?",
  "starters": [
   "I have used",
   "I have never",
   "I have sent",
   "I have watched",
   "Have you ever",
   "My favourite is"
  ],
  "checks": [
   {
    "re": /\b(have|has) (never |ever |just |already )?(used|sent|seen|watched|written|played|opened|made|tried|met)\b/,
    "t": "Present perfect kullan (I have used, She has sent…)"
   },
   {
    "re": /\b(computer|internet|email|tablet|keyboard|robot|video|message)s?\b/,
    "t": "Bir teknoloji kelimesi yaz (computer, tablet, robot…)"
   }
  ],
  "model": "I love technology. I have used a computer and a tablet many times. I have sent an email to my uncle in Ankara. I have watched a funny video on the internet. I have never seen a real robot, but I would love to see one. My friend Can has made a small robot at school. It was amazing!"
 },
 "towers": [
  {
   "e": "📧",
   "title": "Email Time",
   "steps": [
    {
     "tr": [
      [
       "E-posta gönderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "has sent an email",
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
       "e-posta gönderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has sent an email",
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
       "öğretmenine",
       "where"
      ],
      [
       "e-posta gönderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has sent an email",
       "does"
      ],
      [
       "to her teacher",
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
       "öğretmenine",
       "where"
      ],
      [
       "e-posta gönderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has sent an email",
       "does"
      ],
      [
       "to her teacher",
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
   "e": "🤖",
   "title": "Robot Video",
   "steps": [
    {
     "tr": [
      [
       "Bir robot videosu izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "has watched a robot video",
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
       "bir robot videosu izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has watched a robot video",
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
       "internette",
       "where"
      ],
      [
       "bir robot videosu izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has watched a robot video",
       "does"
      ],
      [
       "on the internet",
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
       "internette",
       "where"
      ],
      [
       "bir robot videosu izledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "has watched a robot video",
       "does"
      ],
      [
       "on the internet",
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
   "e": "📱",
   "title": "New Tablet",
   "steps": [
    {
     "tr": [
      [
       "Yeni bir tablet kullandı.",
       "does"
      ]
     ],
     "en": [
      [
       "has used a new tablet",
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
       "yeni bir tablet kullandı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has used a new tablet",
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
       "okulda",
       "where"
      ],
      [
       "yeni bir tablet kullandı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has used a new tablet",
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
       "Elif",
       "who"
      ],
      [
       "bu hafta",
       "when"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "yeni bir tablet kullandı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "has used a new tablet",
       "does"
      ],
      [
       "at school",
       "where"
      ],
      [
       "this week",
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
  "rank": "Earth Guardian",
  "theme": "Our Planet",
  "tr": "Gezegenimiz",
  "icon": "🌍",
  "song": {
   "title": "Our Planet",
   "lines": [
    "We should <b>recycle</b> every day,",
    "Put your <b>rubbish</b> in the <b>bin</b>, okay?",
    "We mustn't make <b>pollution</b> in the sky,",
    "Our planet is the best, so let's all try!"
   ]
  },
  "cards": [
   {"e": "♻️", "w": "recycle", "ipa": "/ˌriˈsaɪkəl/", "tr": "Geri dönüştürmek", "ex": "We should recycle paper and plastic."},
   {"e": "🗑️", "w": "rubbish", "ipa": "/ˈrʌbɪʃ/", "tr": "Çöp", "ex": "You mustn't leave rubbish on the beach."},
   {"e": "🚮", "w": "bin", "ipa": "/bɪn/", "tr": "Çöp kutusu", "ex": "Please put the paper in the bin."},
   {"e": "🏭", "w": "pollution", "ipa": "/pəˈluʃən/", "tr": "Kirlilik", "ex": "Pollution is bad for fish and birds."},
   {"e": "⚡", "w": "energy", "ipa": "/ˈɛnərdʒi/", "tr": "Enerji", "ex": "We should save energy at home."},
   {"e": "🌱", "w": "plant", "ipa": "/plænt/", "tr": "Bitki", "ex": "My grandma has a small plant in the kitchen."},
   {"e": "🍾", "w": "bottle", "ipa": "/ˈbɑtəl/", "tr": "Şişe", "ex": "We should recycle every empty bottle."},
   {"e": "💡", "w": "light", "ipa": "/laɪt/", "tr": "Işık", "ex": "You should turn off the light when you leave."}
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "recycle",
    "options": ["recycle", "plant", "light"],
    "hint": ["We do it with bottles and paper so they can be used again!", "Şişeleri ve kâğıtları tekrar kullanılsın diye bunu yaparız!"]
   },
   {
    "type": "pick",
    "q": "You put your rubbish in it. What is it?",
    "tr": "Çöpünü içine atarsın. Nedir?",
    "options": [
     {"e": "🚮", "v": "bin"},
     {"e": "🍾", "v": "bottle"},
     {"e": "💡", "v": "light"},
     {"e": "🌱", "v": "plant"}
    ],
    "answer": "bin",
    "hint": ["It is in the street, in the park and in the kitchen.", "Sokakta, parkta ve mutfakta bulunur."]
   },
   {
    "type": "listen",
    "say": "We should turn off the light when we leave the room. It helps us save energy.",
    "q": "What should we turn off?",
    "tr": "Neyi kapatmalıyız?",
    "options": [
     {"e": "💡", "v": "light"},
     {"e": "🌱", "v": "plant"},
     {"e": "🍾", "v": "bottle"}
    ],
    "answer": "light",
    "hint": ["Listen again: “…turn off the l…”.", "Tekrar dinle: “…turn off the l…”."]
   },
   {
    "type": "write",
    "e": "♻️",
    "sentence": "We ___ recycle bottles and paper.",
    "answer": "should",
    "mask": "S _ _ _ _ D",
    "tr": "Şişeleri ve kâğıtları geri dönüştürmeliyiz.",
    "hint": ["It means “yapmalıyız”. s - h - o - u - l - d", "“Yapmalıyız” anlamına gelir. s - h - o - u - l - d"]
   },
   {
    "type": "speak",
    "sentence": "We should recycle bottles and paper.",
    "tr": "Şişeleri ve kâğıtları geri dönüştürmeliyiz."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "rubbish",
    "hint": ["You put it in the bin! r - u - b - b - i - s - h", "Onu çöp kutusuna atarsın! r - u - b - b - i - s - h"]
   },
   {
    "type": "dictation",
    "word": "pollution",
    "e": "🏭",
    "hint": ["It starts with “p”. Dirty air and dirty water are examples.", "“p” ile başlıyor. Kirli hava ve kirli su buna örnektir."]
   },
   {
    "type": "order",
    "tr": "Şişeleri geri dönüştürmeliyiz.",
    "answer": "We should recycle the bottles",
    "extra": "recycles",
    "hint": ["Start with: “We should …”", "Şöyle başla: “We should …”"]
   },
   {
    "type": "story",
    "say": "Can and Ece went to the beach on Saturday. They saw a lot of rubbish on the sand. Ece said, “We mustn't leave rubbish here.” Then they put it all in the bin.",
    "q": "Where did they put the rubbish?",
    "tr": "Çöpü nereye koydular?",
    "options": ["in the sea", "in the bin", "on the sand"],
    "answer": "in the bin",
    "hint": ["They didn't leave it on the sand. Listen to the end!", "Çöpü kumda bırakmadılar. Sonuna kadar dinle!"]
   },
   {
    "type": "speakTr",
    "tr": "Denize çöp atmamalıyız.",
    "answer": "We mustn't throw rubbish in the sea."
   }
  ]
 },
 "songs": [
  {
   "title": "Turn Off the Light",
   "lines": [
    "We should turn off the <b>light</b>,",
    "When we go to bed at night,",
    "We should save our <b>energy</b>,",
    "For a cleaner world, you see!"
   ]
  },
  {
   "title": "Little Plant",
   "lines": [
    "A little <b>plant</b> needs sun and rain,",
    "We should water it again,",
    "We mustn't pick it, let it grow,",
    "A green and happy world, you know!"
   ]
  },
  {
   "title": "Bottle Song",
   "lines": [
    "An empty <b>bottle</b>, don't throw it away,",
    "We should <b>recycle</b> it today,",
    "Plastic, paper, glass and tin,",
    "Put them in the right <b>bin</b>!"
   ]
  },
  {
   "title": "No More Pollution",
   "lines": [
    "We mustn't make <b>pollution</b> grow,",
    "Walk or ride a bike, let's go,",
    "We mustn't leave our <b>rubbish</b> on the ground,",
    "Keep our planet safe and sound!"
   ]
  }
 ],
 "reading": {
  "title": "Clean Beach Day",
  "e": "🏖️",
  "lines": [
   ["On Saturday, Ece and Can went to a beach near Izmir.", "Cumartesi günü Ece ve Can İzmir'in yakınındaki bir plaja gitti."],
   ["They saw a lot of rubbish and plastic bottles on the sand.", "Kumun üzerinde bir sürü çöp ve plastik şişe gördüler."],
   ["Ece said, “We should clean this beach today.”", "Ece, “Bu plajı bugün temizlemeliyiz.” dedi."],
   ["They put the bottles in the recycling bin and the rubbish in a big bin.", "Şişeleri geri dönüşüm kutusuna, çöpleri ise büyük bir çöp kutusuna attılar."],
   ["Can said, “We mustn't throw rubbish in the sea.”", "Can, “Denize çöp atmamalıyız.” dedi."],
   ["Pollution is bad for fish and plants.", "Kirlilik balıklar ve bitkiler için kötüdür."],
   ["At the end, the beach was clean and everybody was happy.", "Sonunda plaj temizdi ve herkes mutluydu."],
   ["Now they know that everyone should help our planet.", "Artık herkesin gezegenimize yardım etmesi gerektiğini biliyorlar."]
  ],
  "qs": [
   {
    "q": "What did Ece say they should do?",
    "tr": "Ece ne yapmaları gerektiğini söyledi?",
    "options": ["play on the sand", "clean the beach", "go home"],
    "answer": "clean the beach"
   },
   {
    "q": "What mustn't we throw in the sea?",
    "tr": "Denize neyi atmamalıyız?",
    "options": ["rubbish", "water", "sand"],
    "answer": "rubbish"
   },
   {
    "q": "What is bad for fish and plants?",
    "tr": "Balıklar ve bitkiler için ne kötüdür?",
    "options": ["a clean beach", "pollution", "a bin"],
    "answer": "pollution"
   }
  ]
 },
 "listening": [
  {
   "say": "We should recycle bottles and paper. Put them in the right bin.",
   "q": "What should we recycle?",
   "tr": "Neyi geri dönüştürmeliyiz?",
   "options": [
    {"e": "🍾", "v": "bottle"},
    {"e": "💡", "v": "light"},
    {"e": "🌱", "v": "plant"}
   ],
   "answer": "bottle"
  },
  {
   "say": "Mert always turns off the light before he leaves. He wants to save energy.",
   "q": "What does Mert turn off?",
   "tr": "Mert neyi kapatıyor?",
   "options": [
    {"e": "💡", "v": "light"},
    {"e": "🍾", "v": "bottle"},
    {"e": "🚮", "v": "bin"}
   ],
   "answer": "light"
  },
  {
   "say": "My grandma has a small plant in her kitchen. She waters it every morning.",
   "q": "What does grandma have?",
   "tr": "Büyükannenin neyi var?",
   "options": [
    {"e": "🌱", "v": "plant"},
    {"e": "🍾", "v": "bottle"},
    {"e": "💡", "v": "light"}
   ],
   "answer": "plant"
  },
  {
   "say": "The big factory makes a lot of pollution. We mustn't forget that clean air is important.",
   "q": "What is bad for the air?",
   "tr": "Hava için ne kötüdür?",
   "options": [
    {"e": "🏭", "v": "pollution"},
    {"e": "⚡", "v": "energy"},
    {"e": "🌱", "v": "plant"}
   ],
   "answer": "pollution"
  },
  {
   "say": "There is a lot of rubbish on the street. Please put it in the bin.",
   "q": "Where should we put the rubbish?",
   "tr": "Çöpü nereye koymalıyız?",
   "options": [
    {"e": "🚮", "v": "bin"},
    {"e": "🌊", "v": "sea"},
    {"e": "🏖️", "v": "beach"}
   ],
   "answer": "bin"
  }
 ],
 "speaking": [
  {"e": "♻️", "en": "We should recycle bottles.", "tr": "Şişeleri geri dönüştürmeliyiz."},
  {"e": "🌊", "en": "You mustn't throw rubbish in the sea.", "tr": "Denize çöp atmamalısın."},
  {"e": "💡", "en": "We should turn off the light.", "tr": "Işığı kapatmalıyız."},
  {"e": "🚮", "en": "You should put rubbish in the bin.", "tr": "Çöpü çöp kutusuna atmalısın."},
  {"e": "🏭", "en": "We mustn't make pollution.", "tr": "Kirlilik yaratmamalıyız."}
 ],
 "write": {
  "title": "Save Our Planet",
  "en": "Write about how we should help our planet. What should we do? What mustn't we do?",
  "tr": "Gezegenimize nasıl yardım etmemiz gerektiğini yaz. Ne yapmalıyız? Ne yapmamalıyız?",
  "starters": ["We should", "We mustn't", "You should", "Please put", "It is important to", "Our planet"],
  "checks": [
   {"re": /\b(should|shouldn't|must|mustn't)\b/, "t": "should / shouldn't / must / mustn't kullan"},
   {"re": /\b(recycle|rubbish|bin|bottle|light|energy|plant|pollution)\b/, "t": "Ünitenin kelimelerinden en az birini yaz (recycle, rubbish, bin…)"}
  ],
  "model": "We should help our planet every day. We should recycle bottles and paper, and we should put rubbish in the bin. We mustn't throw rubbish in the sea. We should turn off the light to save energy. We should plant trees, too. Pollution is bad for fish and people. If we all help, our planet will be clean and beautiful."
 },
 "towers": [
  {
   "e": "♻️",
   "title": "Recycle Time",
   "steps": [
    {"tr": [["Şişeleri geri dönüştürmeli.", "does"]], "en": [["should recycle bottles", "does"]]},
    {"tr": [["Çocuklar", "who"], ["şişeleri geri dönüştürmeli.", "does"]], "en": [["The children", "who"], ["should recycle bottles", "does"]]},
    {"tr": [["Çocuklar", "who"], ["okulda", "where"], ["şişeleri geri dönüştürmeli.", "does"]], "en": [["The children", "who"], ["should recycle bottles", "does"], ["at school", "where"]]},
    {"tr": [["Çocuklar", "who"], ["her hafta", "when"], ["okulda", "where"], ["şişeleri geri dönüştürmeli.", "does"]], "en": [["The children", "who"], ["should recycle bottles", "does"], ["at school", "where"], ["every week", "when"]]}
   ]
  },
  {
   "e": "🌊",
   "title": "Clean Beach",
   "steps": [
    {"tr": [["Çöp atmamalı.", "does"]], "en": [["mustn't throw rubbish", "does"]]},
    {"tr": [["Mert", "who"], ["çöp atmamalı.", "does"]], "en": [["Mert", "who"], ["mustn't throw rubbish", "does"]]},
    {"tr": [["Mert", "who"], ["sahilde", "where"], ["çöp atmamalı.", "does"]], "en": [["Mert", "who"], ["mustn't throw rubbish", "does"], ["on the beach", "where"]]},
    {"tr": [["Mert", "who"], ["yazın", "when"], ["sahilde", "where"], ["çöp atmamalı.", "does"]], "en": [["Mert", "who"], ["mustn't throw rubbish", "does"], ["on the beach", "where"], ["in summer", "when"]]}
   ]
  },
  {
   "e": "💡",
   "title": "Save Energy",
   "steps": [
    {"tr": [["Işığı kapatmalı.", "does"]], "en": [["should turn off the light", "does"]]},
    {"tr": [["Elif", "who"], ["ışığı kapatmalı.", "does"]], "en": [["Elif", "who"], ["should turn off the light", "does"]]},
    {"tr": [["Elif", "who"], ["odasında", "where"], ["ışığı kapatmalı.", "does"]], "en": [["Elif", "who"], ["should turn off the light", "does"], ["in her room", "where"]]},
    {"tr": [["Elif", "who"], ["geceleri", "when"], ["odasında", "where"], ["ışığı kapatmalı.", "does"]], "en": [["Elif", "who"], ["should turn off the light", "does"], ["in her room", "where"], ["at night", "when"]]}
   ]
  }
 ]
});
// ---------- Ünite 28 ----------
UNITS_A2.push({
 "L": {
  "rank": "Story Teller",
  "theme": "Fairy Tales",
  "tr": "Masallar",
  "icon": "🏰",
  "song": {
   "title": "Once Upon a Time",
   "lines": [
    "The <b>king</b> was dancing in the hall,",
    "The <b>queen</b> was singing to us all,",
    "The <b>prince</b> was playing in the sun,",
    "The <b>princess</b> was having fun!"
   ]
  },
  "cards": [
   {"e": "🏰", "w": "castle", "ipa": "/ˈkæsəl/", "tr": "Şato", "ex": "The princess lived in a big castle."},
   {"e": "🐉", "w": "dragon", "ipa": "/ˈdrægən/", "tr": "Ejderha", "ex": "The dragon was sleeping in a cave."},
   {"e": "👑", "w": "king", "ipa": "/kɪŋ/", "tr": "Kral", "ex": "The king was eating dinner."},
   {"e": "👑", "w": "queen", "ipa": "/kwin/", "tr": "Kraliçe", "ex": "The queen was reading a book in the garden."},
   {"e": "🤴", "w": "prince", "ipa": "/prɪns/", "tr": "Prens", "ex": "The prince was riding a white horse."},
   {"e": "👸", "w": "princess", "ipa": "/ˈprɪnsɪs/", "tr": "Prenses", "ex": "The princess was sleeping when the dragon came."},
   {"e": "👣", "w": "giant", "ipa": "/ˈdʒaɪənt/", "tr": "Dev", "ex": "A giant was walking near the castle."},
   {"e": "🪄", "w": "magic", "ipa": "/ˈmædʒɪk/", "tr": "Sihir", "ex": "The prince used magic to help the dragon."}
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "king",
    "options": ["king", "queen", "giant"],
    "hint": ["He wears a crown and he is the boss of the castle!", "Tacı var ve şatonun başındaki kişi o!"]
   },
   {
    "type": "pick",
    "q": "It is a very, very big and tall person in stories. What is it?",
    "tr": "Hikâyelerde çok ama çok büyük ve uzun boylu bir kişidir. Nedir?",
    "options": [
     {"e": "👣", "v": "giant"},
     {"e": "🐉", "v": "dragon"},
     {"e": "🏰", "v": "castle"},
     {"e": "🪄", "v": "magic"}
    ],
    "answer": "giant",
    "hint": ["It has huge feet and walks boom, boom, boom!", "Kocaman ayakları var ve güm, güm, güm yürür!"]
   },
   {
    "type": "listen",
    "say": "The princess was sleeping when the dragon came. She woke up and ran to the castle.",
    "q": "Who was sleeping?",
    "tr": "Kim uyuyordu?",
    "options": [
     {"e": "👸", "v": "princess"},
     {"e": "🤴", "v": "prince"},
     {"e": "👑", "v": "king"}
    ],
    "answer": "princess",
    "hint": ["Listen again: “The p… was sleeping”.", "Tekrar dinle: “The p… was sleeping”."]
   },
   {
    "type": "write",
    "e": "👸",
    "sentence": "The princess ___ sleeping when the dragon came.",
    "answer": "was",
    "mask": "W _ S",
    "tr": "Ejderha geldiğinde prenses uyuyordu.",
    "hint": ["It is the past of “is”. w - a - s", "“Is” fiilinin geçmişi. w - a - s"]
   },
   {
    "type": "speak",
    "sentence": "The princess was sleeping when the dragon came.",
    "tr": "Ejderha geldiğinde prenses uyuyordu."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "princess",
    "hint": ["She is the king's daughter! p - r - i - n - c - e - s - s", "O, kralın kızı! p - r - i - n - c - e - s - s"]
   },
   {
    "type": "dictation",
    "word": "dragon",
    "e": "🐉",
    "hint": ["It starts with “d”. It can fly and breathe fire.", "“d” ile başlıyor. Uçabilir ve ateş püskürtür."]
   },
   {
    "type": "order",
    "tr": "Ejderha geldiğinde prenses uyuyordu.",
    "answer": "The princess was sleeping when the dragon came",
    "extra": "were",
    "hint": ["Start with: “The princess …”", "Şöyle başla: “The princess …”"]
   },
   {
    "type": "story",
    "say": "One night, the king and the queen were eating dinner in the castle. Suddenly, a giant knocked on the door. The prince was reading a book in his room. He was not afraid and he used his magic.",
    "q": "What was the prince doing?",
    "tr": "Prens ne yapıyordu?",
    "options": ["reading a book", "eating dinner", "sleeping"],
    "answer": "reading a book",
    "hint": ["The king and the queen were eating. The prince was in his room!", "Kral ve kraliçe yemek yiyordu. Prens odasındaydı!"]
   },
   {
    "type": "speakTr",
    "tr": "Onlar ne yapıyordu?",
    "answer": "What were they doing?"
   }
  ]
 },
 "songs": [
  {
   "title": "Castle on the Hill",
   "lines": [
    "A big <b>castle</b> was standing on a hill,",
    "The <b>giant</b> was sleeping, quiet and still,",
    "The <b>dragon</b> was flying across the sky,",
    "While the clouds were floating by!"
   ]
  },
  {
   "title": "Magic Night",
   "lines": [
    "The <b>magic</b> was shining in the night,",
    "The stars were dancing, bright, bright, bright,",
    "The <b>princess</b> was dreaming in her bed,",
    "With a golden crown upon her head!"
   ]
  },
  {
   "title": "Big Giant",
   "lines": [
    "The <b>giant</b> was walking, boom, boom, boom,",
    "The <b>dragon</b> was hiding in his room,",
    "The <b>king</b> was shouting, “Run away!”",
    "But the <b>prince</b> was brave and said, “Hooray!”"
   ]
  },
  {
   "title": "The Queen's Question",
   "lines": [
    "What was the <b>queen</b> doing at ten?",
    "She was making <b>magic</b> again,",
    "What were the children doing then?",
    "They were running in the <b>castle</b>, ten by ten!"
   ]
  }
 ],
 "reading": {
  "title": "The Sleeping Princess",
  "e": "👸",
  "lines": [
   ["Long ago, a princess lived in a big castle in Cappadocia.", "Çok uzun zaman önce, Kapadokya'daki büyük bir şatoda bir prenses yaşıyordu."],
   ["One night, the princess was sleeping in her bed.", "Bir gece prenses yatağında uyuyordu."],
   ["Suddenly, a green dragon came to the castle.", "Birdenbire şatoya yeşil bir ejderha geldi."],
   ["The king and the queen were eating dinner, and they were very afraid.", "Kral ve kraliçe akşam yemeği yiyordu ve çok korktular."],
   ["The prince was reading a magic book when he heard a loud noise.", "Prens sihirli bir kitap okurken yüksek bir ses duydu."],
   ["He used a little magic, and the dragon became small and friendly.", "Biraz sihir kullandı ve ejderha küçük ve cana yakın oldu."],
   ["The dragon was only looking for a friend, so they all had tea together.", "Ejderha sadece bir arkadaş arıyordu, bu yüzden hep birlikte çay içtiler."],
   ["After that, the castle was always happy.", "Ondan sonra şato hep mutluydu."]
  ],
  "qs": [
   {
    "q": "What was the princess doing when the dragon came?",
    "tr": "Ejderha geldiğinde prenses ne yapıyordu?",
    "options": ["sleeping", "eating dinner", "reading a book"],
    "answer": "sleeping"
   },
   {
    "q": "What was the prince reading?",
    "tr": "Prens ne okuyordu?",
    "options": ["a letter", "a magic book", "a map"],
    "answer": "a magic book"
   },
   {
    "q": "What was the dragon looking for?",
    "tr": "Ejderha ne arıyordu?",
    "options": ["a friend", "food", "a new castle"],
    "answer": "a friend"
   }
  ]
 },
 "listening": [
  {
   "say": "The king was eating dinner when the dragon came. He dropped his spoon.",
   "q": "Who was eating dinner?",
   "tr": "Kim akşam yemeği yiyordu?",
   "options": [
    {"e": "👑", "v": "king"},
    {"e": "👑", "v": "queen"},
    {"e": "🤴", "v": "prince"}
   ],
   "answer": "king"
  },
  {
   "say": "A giant was walking near the castle. The children were hiding behind a tree.",
   "q": "What was walking near the castle?",
   "tr": "Şatonun yakınında ne yürüyordu?",
   "options": [
    {"e": "👣", "v": "giant"},
    {"e": "🐉", "v": "dragon"},
    {"e": "👸", "v": "princess"}
   ],
   "answer": "giant"
  },
  {
   "say": "The queen was reading a book in the garden. It was a book about magic.",
   "q": "What was the book about?",
   "tr": "Kitap neyle ilgiliydi?",
   "options": [
    {"e": "🪄", "v": "magic"},
    {"e": "🐉", "v": "dragon"},
    {"e": "🏰", "v": "castle"}
   ],
   "answer": "magic"
  },
  {
   "say": "What were the prince and the princess doing? They were playing in the garden.",
   "q": "Where were they playing?",
   "tr": "Nerede oynuyorlardı?",
   "options": [
    {"e": "🌳", "v": "garden"},
    {"e": "🏰", "v": "castle"},
    {"e": "🛏️", "v": "bed"}
   ],
   "answer": "garden"
  },
  {
   "say": "The dragon was sleeping when the prince came. He didn't wake up.",
   "q": "What was the dragon doing?",
   "tr": "Ejderha ne yapıyordu?",
   "options": [
    {"e": "😴", "v": "sleeping"},
    {"e": "🍽️", "v": "eating"},
    {"e": "🏃", "v": "running"}
   ],
   "answer": "sleeping"
  }
 ],
 "speaking": [
  {"e": "👸", "en": "The princess was sleeping.", "tr": "Prenses uyuyordu."},
  {"e": "🐉", "en": "The dragon was flying over the castle.", "tr": "Ejderha şatonun üstünde uçuyordu."},
  {"e": "👑", "en": "The king was eating dinner.", "tr": "Kral akşam yemeği yiyordu."},
  {"e": "🪄", "en": "The prince was using magic.", "tr": "Prens sihir kullanıyordu."},
  {"e": "❓", "en": "What were they doing?", "tr": "Onlar ne yapıyordu?"}
 ],
 "write": {
  "title": "My Fairy Tale",
  "en": "Write a short fairy tale. What were the characters doing when something happened?",
  "tr": "Kısa bir masal yaz. Bir şey olduğunda karakterler ne yapıyordu?",
  "starters": ["Once upon a time,", "The princess was", "The king and the queen were", "Suddenly, a dragon", "The prince was", "At the end,"],
  "checks": [
   {"re": /\b(was|were)\s+\w+ing\b/, "t": "Past continuous kullan (was sleeping, were eating…)"},
   {"re": /\b(castle|dragon|king|queen|prince|princess|giant|magic)\b/, "t": "Ünitenin kelimelerinden en az birini yaz (castle, dragon, king…)"}
  ],
  "model": "Once upon a time, a princess lived in a big castle. One night, she was sleeping when a dragon came. The king and the queen were eating dinner, and they were afraid. The prince was reading a magic book. He used magic, and the dragon became a friend. A giant was watching from the hill. Everybody was smiling at the end."
 },
 "towers": [
  {
   "e": "👸",
   "title": "Sleeping Princess",
   "steps": [
    {"tr": [["Uyuyordu.", "does"]], "en": [["was sleeping", "does"]]},
    {"tr": [["Prenses", "who"], ["uyuyordu.", "does"]], "en": [["The princess", "who"], ["was sleeping", "does"]]},
    {"tr": [["Prenses", "who"], ["şatoda", "where"], ["uyuyordu.", "does"]], "en": [["The princess", "who"], ["was sleeping", "does"], ["in the castle", "where"]]},
    {"tr": [["Prenses", "who"], ["gece", "when"], ["şatoda", "where"], ["uyuyordu.", "does"]], "en": [["The princess", "who"], ["was sleeping", "does"], ["in the castle", "where"], ["at night", "when"]]}
   ]
  },
  {
   "e": "🐉",
   "title": "Flying Dragon",
   "steps": [
    {"tr": [["Uçuyordu.", "does"]], "en": [["was flying", "does"]]},
    {"tr": [["Ejderha", "who"], ["uçuyordu.", "does"]], "en": [["The dragon", "who"], ["was flying", "does"]]},
    {"tr": [["Ejderha", "who"], ["şatonun üstünde", "where"], ["uçuyordu.", "does"]], "en": [["The dragon", "who"], ["was flying", "does"], ["over the castle", "where"]]},
    {"tr": [["Ejderha", "who"], ["dün gece", "when"], ["şatonun üstünde", "where"], ["uçuyordu.", "does"]], "en": [["The dragon", "who"], ["was flying", "does"], ["over the castle", "where"], ["last night", "when"]]}
   ]
  },
  {
   "e": "👑",
   "title": "Magic Book",
   "steps": [
    {"tr": [["Sihirli bir kitap okuyordu.", "does"]], "en": [["was reading a magic book", "does"]]},
    {"tr": [["Kraliçe", "who"], ["sihirli bir kitap okuyordu.", "does"]], "en": [["The queen", "who"], ["was reading a magic book", "does"]]},
    {"tr": [["Kraliçe", "who"], ["bahçede", "where"], ["sihirli bir kitap okuyordu.", "does"]], "en": [["The queen", "who"], ["was reading a magic book", "does"], ["in the garden", "where"]]},
    {"tr": [["Kraliçe", "who"], ["sabah", "when"], ["bahçede", "where"], ["sihirli bir kitap okuyordu.", "does"]], "en": [["The queen", "who"], ["was reading a magic book", "does"], ["in the garden", "where"], ["in the morning", "when"]]}
   ]
  }
 ]
});
// ---------- Ünite 29 ----------
UNITS_A2.push({
 "L": {
  "rank": "Super Talent",
  "theme": "Hobbies and Talents",
  "tr": "Hobiler ve Yetenekler",
  "icon": "🎸",
  "song": {
   "title": "Good at Music",
   "lines": [
    "Ece is good at playing the <b>guitar</b>,",
    "She plays it beautifully like a star,",
    "Can plays the <b>drums</b> so loudly, bam, bam, bam,",
    "They play together, yes they can!"
   ]
  },
  "cards": [
   {"e": "🎸", "w": "guitar", "ipa": "/ɡɪˈtɑr/", "tr": "Gitar", "ex": "Ece is good at playing the guitar."},
   {"e": "🎹", "w": "piano", "ipa": "/piˈænoʊ/", "tr": "Piyano", "ex": "Zeynep plays the piano very well."},
   {"e": "🎻", "w": "violin", "ipa": "/ˌvaɪəˈlɪn/", "tr": "Keman", "ex": "My cousin plays the violin beautifully."},
   {"e": "🥁", "w": "drums", "ipa": "/drʌmz/", "tr": "Davul", "ex": "Can is good at playing the drums."},
   {"e": "♟️", "w": "chess", "ipa": "/tʃɛs/", "tr": "Satranç", "ex": "My grandfather is good at playing chess."},
   {"e": "🧩", "w": "puzzle", "ipa": "/ˈpʌzəl/", "tr": "Yapboz", "ex": "Mert finished the puzzle very quickly."},
   {"e": "📰", "w": "magazine", "ipa": "/ˈmæɡəˌzin/", "tr": "Dergi", "ex": "My sister reads a magazine about animals."},
   {"e": "🦸", "w": "comic", "ipa": "/ˈkɑmɪk/", "tr": "Çizgi roman", "ex": "I read a funny comic after school."}
  ],
  "tasks": [
   {
    "type": "song", "line": 0, "blank": "guitar",
    "options": ["guitar", "piano", "violin"],
    "hint": ["You touch its strings with your fingers. Ece plays it like a star!", "Tellerlerine parmaklarınla dokunursun. Ece onu bir yıldız gibi çalıyor!"]
   },
   {
    "type": "pick",
    "q": "You play this with two sticks. It makes a loud “boom, boom” sound. What is it?",
    "tr": "Onu iki çubukla çalarsın. Yüksek sesle “bum, bum” der. Nedir?",
    "options": [{"e": "🥁", "v": "drums"}, {"e": "🎸", "v": "guitar"}, {"e": "🎹", "v": "piano"}, {"e": "🎻", "v": "violin"}],
    "answer": "drums",
    "hint": ["You hit it with sticks. Bam, bam, bam!", "Ona çubuklarla vurursun. Bam, bam, bam!"]
   },
   {
    "type": "listen",
    "say": "Elif is good at playing the violin. She plays it beautifully at school concerts.",
    "q": "What is Elif good at playing?",
    "tr": "Elif neyi çalmakta iyi?",
    "options": [{"e": "🎻", "v": "violin"}, {"e": "🎹", "v": "piano"}, {"e": "🥁", "v": "drums"}],
    "answer": "violin",
    "hint": ["Listen again: “…good at playing the v…”.", "Tekrar dinle: “…good at playing the v…”."]
   },
   {
    "type": "write", "e": "♟️",
    "sentence": "My brother is good at ___ chess.",
    "answer": "playing", "mask": "P _ _ _ _ _ G",
    "tr": "Erkek kardeşim satranç oynamakta iyidir.",
    "hint": ["After “good at” we use the -ing form of “play”. p - l - a - y - i - n - g", "“Good at”ten sonra “play” fiilinin -ing hâli gelir. p - l - a - y - i - n - g"]
   },
   {
    "type": "speak",
    "sentence": "She is good at playing the piano.",
    "tr": "O, piyano çalmakta iyidir."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 2, "blank": "drums",
    "hint": ["Can hits them loudly. d - r - u - m - s", "Can onlara yüksek sesle vurur. d - r - u - m - s"]
   },
   {
    "type": "dictation", "word": "magazine", "e": "📰",
    "hint": ["It starts with “m”. It has pictures and short stories. You read it every week or month.", "“m” ile başlıyor. İçinde resimler ve kısa yazılar var. Her hafta ya da ay okursun."]
   },
   {
    "type": "order",
    "tr": "Mert satranç oynamakta iyidir.",
    "answer": "Mert is good at playing chess",
    "extra": "play",
    "hint": ["Start with: “Mert is good at …”", "Şöyle başla: “Mert is good at …”"]
   },
   {
    "type": "story",
    "say": "Zeynep has a big talent. She is good at playing the piano, and she plays it beautifully. Last Friday, she played a song at school. Everyone clapped, and her teacher smiled.",
    "q": "What is Zeynep good at?",
    "tr": "Zeynep neyi yapmakta iyi?",
    "options": ["playing the piano", "playing chess", "playing the drums"],
    "answer": "playing the piano",
    "hint": ["She played a song at school. Listen for the instrument!", "Okulda bir şarkı çaldı. Çalgıyı dinle!"]
   },
   {
    "type": "speakTr",
    "tr": "O, kemanı çok güzel çalıyor.",
    "answer": "He plays the violin beautifully."
   }
  ]
 },
 "songs": [
  {
   "title": "Piano Time",
   "lines": [
    "I am good at playing the <b>piano</b>,",
    "I play it softly, slowly, slow,",
    "My fingers dance on black and white,",
    "I play it well, it sounds just right!"
   ]
  },
  {
   "title": "Violin Song",
   "lines": [
    "The <b>violin</b> sings so sweet and high,",
    "She plays it beautifully, oh my,",
    "She is good at playing every day,",
    "Her music takes our worries away!"
   ]
  },
  {
   "title": "Chess and Puzzle",
   "lines": [
    "He is good at playing <b>chess</b>,",
    "He thinks and thinks and does not rest,",
    "I am good at doing a <b>puzzle</b>,",
    "Piece by piece, I finish it with no trouble!"
   ]
  },
  {
   "title": "Read and Smile",
   "lines": [
    "I read a funny <b>comic</b> in bed,",
    "A <b>magazine</b> about dogs instead,",
    "I am good at reading every day,",
    "Reading is the best way to play!"
   ]
  }
 ],
 "reading": {
  "title": "The Talent Show",
  "e": "🎸",
  "lines": [
   ["Ece's school had a talent show last Friday.", "Ece'nin okulunda geçen cuma bir yetenek gösterisi vardı."],
   ["Ece is good at playing the violin.", "Ece keman çalmakta iyidir."],
   ["She played a slow song beautifully.", "Yavaş bir şarkıyı çok güzel çaldı."],
   ["Can is good at playing the drums, and he plays them very loudly.", "Can davul çalmakta iyidir ve onu çok yüksek sesle çalar."],
   ["Mert is good at doing puzzles. He finished a big puzzle very quickly.", "Mert yapboz yapmakta iyidir. Büyük bir yapbozu çok hızlı bitirdi."],
   ["Everyone clapped and cheered.", "Herkes alkışladı ve tezahürat yaptı."],
   ["After the show, they read comics and a magazine in the library.", "Gösteriden sonra kütüphanede çizgi romanlar ve bir dergi okudular."],
   ["Ece said, “We are all good at something!”", "Ece, “Hepimiz bir şeyde iyiyiz!” dedi."]
  ],
  "qs": [
   {"q": "What is Ece good at?", "tr": "Ece neyi yapmakta iyi?", "options": ["playing the violin", "playing the drums", "doing puzzles"], "answer": "playing the violin"},
   {"q": "How does Can play the drums?", "tr": "Can davulu nasıl çalıyor?", "options": ["slowly", "loudly", "quietly"], "answer": "loudly"},
   {"q": "What did Mert finish quickly?", "tr": "Mert neyi hızlıca bitirdi?", "options": ["a magazine", "a puzzle", "a chess game"], "answer": "a puzzle"}
  ]
 },
 "listening": [
  {
   "say": "Mert is good at playing chess. He plays with his grandfather every Sunday.",
   "q": "What is Mert good at?", "tr": "Mert neyi yapmakta iyi?",
   "options": [{"e": "♟️", "v": "chess"}, {"e": "🧩", "v": "puzzle"}, {"e": "🎸", "v": "guitar"}],
   "answer": "chess"
  },
  {
   "say": "Zeynep plays the piano very well. She plays it every evening after dinner.",
   "q": "What does Zeynep play?", "tr": "Zeynep ne çalıyor?",
   "options": [{"e": "🎹", "v": "piano"}, {"e": "🎻", "v": "violin"}, {"e": "🥁", "v": "drums"}],
   "answer": "piano"
  },
  {
   "say": "My brother is good at playing the drums. He plays them loudly, so Mum closes the door.",
   "q": "How does he play the drums?", "tr": "Davulu nasıl çalıyor?",
   "options": [{"e": "🔊", "v": "loudly"}, {"e": "🤫", "v": "quietly"}, {"e": "🐢", "v": "slowly"}],
   "answer": "loudly"
  },
  {
   "say": "I like reading comics, but my sister likes magazines. She reads one about animals.",
   "q": "What does her sister read?", "tr": "Kız kardeşi ne okuyor?",
   "options": [{"e": "📰", "v": "magazine"}, {"e": "🦸", "v": "comic"}, {"e": "📘", "v": "book"}],
   "answer": "magazine"
  },
  {
   "say": "Can does a hard puzzle quickly. He is good at solving puzzles.",
   "q": "How does Can do puzzles?", "tr": "Can yapbozu nasıl yapıyor?",
   "options": [{"e": "⚡", "v": "quickly"}, {"e": "🐢", "v": "slowly"}, {"e": "👎", "v": "badly"}],
   "answer": "quickly"
  }
 ],
 "speaking": [
  {"e": "♟️", "en": "She is good at playing chess.", "tr": "O, satranç oynamakta iyidir."},
  {"e": "🎹", "en": "He plays the piano beautifully.", "tr": "O, piyanoyu çok güzel çalar."},
  {"e": "🎸", "en": "I am good at playing the guitar.", "tr": "Ben gitar çalmakta iyiyim."},
  {"e": "🥁", "en": "He plays the drums very loudly.", "tr": "O, davulu çok yüksek sesle çalar."},
  {"e": "📰", "en": "We read a funny comic and a magazine.", "tr": "Komik bir çizgi roman ve bir dergi okuduk."}
 ],
 "write": {
  "title": "My Talent",
  "en": "Write about something you are good at. How do you do it?",
  "tr": "İyi yaptığın bir şeyi anlat. Onu nasıl yaparsın?",
  "starters": ["I am good at", "My brother is good at", "He plays", "She plays it", "We like", "After that, we"],
  "checks": [
   {"re": /\bgood at \w+ing\b/, "t": "“good at + -ing” kalıbını kullan (I am good at playing…)"},
   {"re": /\b(well|quickly|slowly|beautifully|loudly|quietly|carefully)\b/, "t": "Bir zarf kullan (well, quickly, beautifully…)"}
  ],
  "model": "I am good at playing the guitar. I play it every day after school. My brother is good at playing the piano, and he plays it beautifully. Our grandfather is good at playing chess, but he plays slowly and carefully. On Sundays, we sit together and I play a song. After that, we do a puzzle or read a comic and a magazine. We are a talented family!"
 },
 "towers": [
  {
   "e": "🎹", "title": "Piano Practice",
   "steps": [
    {"tr": [["İyi piyano çalar.", "does"]], "en": [["plays the piano well", "does"]]},
    {"tr": [["Zeynep", "who"], ["iyi piyano çalar.", "does"]], "en": [["Zeynep", "who"], ["plays the piano well", "does"]]},
    {"tr": [["Zeynep", "who"], ["okulda", "where"], ["iyi piyano çalar.", "does"]], "en": [["Zeynep", "who"], ["plays the piano well", "does"], ["at school", "where"]]},
    {"tr": [["Zeynep", "who"], ["her gün", "when"], ["okulda", "where"], ["iyi piyano çalar.", "does"]], "en": [["Zeynep", "who"], ["plays the piano well", "does"], ["at school", "where"], ["every day", "when"]]}
   ]
  },
  {
   "e": "♟️", "title": "Chess Club",
   "steps": [
    {"tr": [["Satranç oynamakta iyidir.", "does"]], "en": [["is good at playing chess", "does"]]},
    {"tr": [["Mert", "who"], ["satranç oynamakta iyidir.", "does"]], "en": [["Mert", "who"], ["is good at playing chess", "does"]]},
    {"tr": [["Mert", "who"], ["kulüpte", "where"], ["satranç oynamakta iyidir.", "does"]], "en": [["Mert", "who"], ["is good at playing chess", "does"], ["in the club", "where"]]},
    {"tr": [["Mert", "who"], ["cuma günleri", "when"], ["kulüpte", "where"], ["satranç oynamakta iyidir.", "does"]], "en": [["Mert", "who"], ["is good at playing chess", "does"], ["in the club", "where"], ["on Fridays", "when"]]}
   ]
  },
  {
   "e": "🥁", "title": "Drum Show",
   "steps": [
    {"tr": [["Davulları yüksek sesle çaldı.", "does"]], "en": [["played the drums loudly", "does"]]},
    {"tr": [["Can", "who"], ["davulları yüksek sesle çaldı.", "does"]], "en": [["Can", "who"], ["played the drums loudly", "does"]]},
    {"tr": [["Can", "who"], ["sahnede", "where"], ["davulları yüksek sesle çaldı.", "does"]], "en": [["Can", "who"], ["played the drums loudly", "does"], ["on the stage", "where"]]},
    {"tr": [["Can", "who"], ["dün gece", "when"], ["sahnede", "where"], ["davulları yüksek sesle çaldı.", "does"]], "en": [["Can", "who"], ["played the drums loudly", "does"], ["on the stage", "where"], ["last night", "when"]]}
   ]
  }
 ]
});
// ---------- Ünite 30 ----------
UNITS_A2.push({
 "L": {
  "rank": "Flyers Champion",
  "theme": "Celebrations",
  "tr": "Kutlamalar",
  "icon": "🎉",
  "song": {
   "title": "Party Time",
   "lines": [
    "I had a <b>party</b> because it was my day,",
    "I got a present when my friends came to play,",
    "It was raining, so we stayed inside and sang,",
    "We blew a <b>balloon</b> and the whole house rang!"
   ]
  },
  "cards": [
   {"e": "🎪", "w": "festival", "ipa": "/ˈfɛstəvəl/", "tr": "Festival", "ex": "We went to a music festival in Izmir."},
   {"e": "🥳", "w": "party", "ipa": "/ˈpɑrti/", "tr": "Parti", "ex": "Ece had a birthday party last Saturday."},
   {"e": "🎁", "w": "present", "ipa": "/ˈprɛzənt/", "tr": "Hediye", "ex": "I got a present from my uncle."},
   {"e": "🎈", "w": "balloon", "ipa": "/bəˈlun/", "tr": "Balon", "ex": "Mert blew up a red balloon."},
   {"e": "🕯️", "w": "candle", "ipa": "/ˈkændəl/", "tr": "Mum", "ex": "Elif blew out the candle on her cake."},
   {"e": "💌", "w": "invitation", "ipa": "/ˌɪnvəˈteɪʃən/", "tr": "Davetiye", "ex": "I got an invitation to the party."},
   {"e": "🎆", "w": "fireworks", "ipa": "/ˈfaɪərˌwɜrks/", "tr": "Havai fişek", "ex": "We saw fireworks on Republic Day."},
   {"e": "🎭", "w": "costume", "ipa": "/ˈkɑstum/", "tr": "Kostüm", "ex": "I wore a pirate costume on 23 Nisan."}
  ],
  "tasks": [
   {
    "type": "song", "line": 0, "blank": "party",
    "options": ["party", "festival", "present"],
    "hint": ["You have it on your birthday with cake and friends!", "Doğum gününde pasta ve arkadaşlarınla yaparsın!"]
   },
   {
    "type": "pick",
    "q": "You get this before a party. It tells you the time and the place. What is it?",
    "tr": "Bir partiden önce onu alırsın. Saati ve yeri söyler. Nedir?",
    "options": [{"e": "💌", "v": "invitation"}, {"e": "🎁", "v": "present"}, {"e": "🕯️", "v": "candle"}, {"e": "🎆", "v": "fireworks"}],
    "answer": "invitation",
    "hint": ["It is a card. It asks you to come to the party.", "Bu bir kart. Seni partiye çağırır."]
   },
   {
    "type": "listen",
    "say": "It was raining, so we had the party inside. Ece blew out the candles when everyone sang.",
    "q": "What was the weather like?",
    "tr": "Hava nasıldı?",
    "options": [{"e": "🌧️", "v": "rainy"}, {"e": "☀️", "v": "sunny"}, {"e": "❄️", "v": "snowy"}],
    "answer": "rainy",
    "hint": ["Listen again: “It was r…, so we had the party inside.”", "Tekrar dinle: “It was r…, so we had the party inside.”"]
   },
   {
    "type": "write", "e": "🎆",
    "sentence": "We watched the fireworks ___ it was Republic Day.",
    "answer": "because", "mask": "B _ _ _ _ _ E",
    "tr": "Cumhuriyet Bayramı olduğu için havai fişekleri izledik.",
    "hint": ["It gives a reason. b - e - c - a - u - s - e", "Bir neden bildirir. b - e - c - a - u - s - e"]
   },
   {
    "type": "speak",
    "sentence": "We wore costumes because it was a party.",
    "tr": "Parti olduğu için kostüm giydik."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 3, "blank": "balloon",
    "hint": ["It is round and full of air. b - a - l - l - o - o - n", "Yuvarlaktır ve havayla doludur. b - a - l - l - o - o - n"]
   },
   {
    "type": "dictation", "word": "invitation", "e": "💌",
    "hint": ["It starts with “i”. You write it to ask friends to your party.", "“i” ile başlıyor. Arkadaşlarını partine çağırmak için yazarsın."]
   },
   {
    "type": "order",
    "tr": "Yağmur yağıyordu, bu yüzden içeride kaldık.",
    "answer": "It was raining so we stayed inside",
    "extra": "because",
    "hint": ["Start with: “It was raining …”", "Şöyle başla: “It was raining …”"]
   },
   {
    "type": "story",
    "say": "Last April, Mert was very happy because it was 23 Nisan. He wore a costume and went to a festival in Ankara. When the fireworks started, everyone looked up. Tomorrow he will tell his friends about it.",
    "q": "Why was Mert happy?",
    "tr": "Mert neden mutluydu?",
    "options": ["It was 23 Nisan", "It was raining", "He got a present"],
    "answer": "It was 23 Nisan",
    "hint": ["Listen for “because”!", "“Because” kelimesini dinle!"]
   },
   {
    "type": "speakTr",
    "tr": "Doğum günüm olduğu için bir partim var.",
    "answer": "I have a party because it is my birthday."
   }
  ]
 },
 "songs": [
  {
   "title": "Candles and Cake",
   "lines": [
    "When I blow the <b>candle</b>, I make a wish,",
    "We eat the cake from a big pink dish,",
    "I was seven, now I am eight,",
    "Next year I will be nine, so I can't wait!"
   ]
  },
  {
   "title": "The Invitation",
   "lines": [
    "I wrote an <b>invitation</b> because I had a plan,",
    "I will invite my friends as fast as I can,",
    "When they come, we will play and cheer,",
    "A birthday <b>party</b> is the best of the year!"
   ]
  },
  {
   "title": "Bayram Fireworks",
   "lines": [
    "On Republic Day we saw the <b>fireworks</b>,",
    "Red and gold in the sky so bright,",
    "When the music started, we clapped our hands,",
    "It was a happy, shining night!"
   ]
  },
  {
   "title": "Costume Parade",
   "lines": [
    "I wore a <b>costume</b> when the music began,",
    "We walked in the parade, hand in hand,",
    "It is a <b>festival</b>, so we sing and dance,",
    "Tomorrow we will dance again, if we get the chance!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Republic Day Party",
  "e": "🎉",
  "lines": [
   ["Last year, Ece's family had a big Republic Day party.", "Geçen yıl Ece'nin ailesi büyük bir Cumhuriyet Bayramı partisi verdi."],
   ["Ece wrote an invitation because she wanted all her friends to come.", "Ece tüm arkadaşları gelsin istediği için bir davetiye yazdı."],
   ["It was raining, so the party was inside.", "Yağmur yağıyordu, bu yüzden parti içerideydi."],
   ["Her friends wore costumes, and the room had many balloons.", "Arkadaşları kostüm giydi ve odada çok balon vardı."],
   ["When the evening came, Dad put a candle on the cake.", "Akşam olunca babası pastaya bir mum koydu."],
   ["Ece got a small present from her friend Can.", "Ece arkadaşı Can'dan küçük bir hediye aldı."],
   ["Later, the rain stopped, so they watched the fireworks from the balcony.", "Sonra yağmur durdu, bu yüzden havai fişekleri balkondan izlediler."],
   ["Next year, Ece will invite her cousins too.", "Gelecek yıl Ece kuzenlerini de davet edecek."]
  ],
  "qs": [
   {"q": "Why did Ece write an invitation?", "tr": "Ece neden davetiye yazdı?", "options": ["She wanted her friends to come", "It was raining", "She got a present"], "answer": "She wanted her friends to come"},
   {"q": "Why was the party inside?", "tr": "Parti neden içerideydi?", "options": ["It was raining", "It was night", "It was a festival"], "answer": "It was raining"},
   {"q": "What will Ece do next year?", "tr": "Ece gelecek yıl ne yapacak?", "options": ["invite her cousins", "wear a costume", "go to a festival"], "answer": "invite her cousins"}
  ]
 },
 "listening": [
  {
   "say": "We went to a festival in Cappadocia because my uncle lives there. There were many balloons in the sky.",
   "q": "What was in the sky?", "tr": "Gökyüzünde ne vardı?",
   "options": [{"e": "🎈", "v": "balloons"}, {"e": "🎆", "v": "fireworks"}, {"e": "☁️", "v": "clouds"}],
   "answer": "balloons"
  },
  {
   "say": "On 23 Nisan, I wore a costume at school. I was a little doctor, so I carried a small bag.",
   "q": "What costume did she wear?", "tr": "Hangi kostümü giydi?",
   "options": [{"e": "👩‍⚕️", "v": "doctor"}, {"e": "🏴‍☠️", "v": "pirate"}, {"e": "👑", "v": "king"}],
   "answer": "doctor"
  },
  {
   "say": "When Mert opened the present, he smiled. It was a new football.",
   "q": "What was in the present?", "tr": "Hediyenin içinde ne vardı?",
   "options": [{"e": "⚽", "v": "football"}, {"e": "📚", "v": "book"}, {"e": "🎸", "v": "guitar"}],
   "answer": "football"
  },
  {
   "say": "We will go to Ayşe's party tomorrow because she sent us an invitation. We will bring a present.",
   "q": "When will they go to the party?", "tr": "Partiye ne zaman gidecekler?",
   "options": [{"e": "⏭️", "v": "tomorrow"}, {"e": "⏮️", "v": "yesterday"}, {"e": "📍", "v": "today"}],
   "answer": "tomorrow"
  },
  {
   "say": "Elif blew out the candles, so everyone clapped. Then Dad cut the cake.",
   "q": "What did Elif blow out?", "tr": "Elif neyi üfleyip söndürdü?",
   "options": [{"e": "🕯️", "v": "candles"}, {"e": "🎈", "v": "balloons"}, {"e": "🎆", "v": "fireworks"}],
   "answer": "candles"
  }
 ],
 "speaking": [
  {"e": "🎭", "en": "I wore a costume because it was a party.", "tr": "Parti olduğu için kostüm giydim."},
  {"e": "☔", "en": "It was raining, so we stayed inside.", "tr": "Yağmur yağıyordu, bu yüzden içeride kaldık."},
  {"e": "🎆", "en": "When the fireworks started, we clapped.", "tr": "Havai fişekler başlayınca alkışladık."},
  {"e": "🎁", "en": "I got a present from my friend.", "tr": "Arkadaşımdan bir hediye aldım."},
  {"e": "🎪", "en": "We will go to the festival tomorrow.", "tr": "Yarın festivale gideceğiz."}
 ],
 "write": {
  "title": "My Celebration",
  "en": "Write about a celebration you enjoyed. What did you do? Why?",
  "tr": "Hoşuna giden bir kutlamayı anlat. Ne yaptın? Neden?",
  "starters": ["Last year, we", "It was", "We wore", "I got", "When", "Next year, I will"],
  "checks": [
   {"re": /\b(because|so|when)\b/, "t": "Bağlaç kullan (because, so, when)"},
   {"re": /\b(was|were|went|wore|ate|saw|got|will)\b/, "t": "Geçmiş zaman ya da will ile gelecek kullan (went, wore, will…)"}
  ],
  "model": "Last year, we celebrated 23 Nisan at school because it was Children's Day. I wore a costume, and my friends brought balloons. It was hot, so we ate ice cream in the garden. When the festival finished, I got a small present from my teacher. Next year, I will invite my cousins to a party because I want to share the fun."
 },
 "towers": [
  {
   "e": "🍬", "title": "Bayram Visit",
   "steps": [
    {"tr": [["Büyükanne ve büyükbabasını ziyaret etti.", "does"]], "en": [["visited her grandparents", "does"]]},
    {"tr": [["Elif", "who"], ["büyükanne ve büyükbabasını ziyaret etti.", "does"]], "en": [["Elif", "who"], ["visited her grandparents", "does"]]},
    {"tr": [["Elif", "who"], ["Konya'da", "where"], ["büyükanne ve büyükbabasını ziyaret etti.", "does"]], "en": [["Elif", "who"], ["visited her grandparents", "does"], ["in Konya", "where"]]},
    {"tr": [["Elif", "who"], ["bayramda", "when"], ["Konya'da", "where"], ["büyükanne ve büyükbabasını ziyaret etti.", "does"]], "en": [["Elif", "who"], ["visited her grandparents", "does"], ["in Konya", "where"], ["on the holiday", "when"]]}
   ]
  },
  {
   "e": "🎆", "title": "Fireworks Night",
   "steps": [
    {"tr": [["Havai fişekleri izledi.", "does"]], "en": [["watched the fireworks", "does"]]},
    {"tr": [["Çocuklar", "who"], ["havai fişekleri izledi.", "does"]], "en": [["The children", "who"], ["watched the fireworks", "does"]]},
    {"tr": [["Çocuklar", "who"], ["balkondan", "where"], ["havai fişekleri izledi.", "does"]], "en": [["The children", "who"], ["watched the fireworks", "does"], ["from the balcony", "where"]]},
    {"tr": [["Çocuklar", "who"], ["Cumhuriyet Bayramı'nda", "when"], ["balkondan", "where"], ["havai fişekleri izledi.", "does"]], "en": [["The children", "who"], ["watched the fireworks", "does"], ["from the balcony", "where"], ["on Republic Day", "when"]]}
   ]
  },
  {
   "e": "🎈", "title": "Party Plan",
   "steps": [
    {"tr": [["Balon şişirecek.", "does"]], "en": [["will blow up balloons", "does"]]},
    {"tr": [["Zeynep", "who"], ["balon şişirecek.", "does"]], "en": [["Zeynep", "who"], ["will blow up balloons", "does"]]},
    {"tr": [["Zeynep", "who"], ["bahçede", "where"], ["balon şişirecek.", "does"]], "en": [["Zeynep", "who"], ["will blow up balloons", "does"], ["in the garden", "where"]]},
    {"tr": [["Zeynep", "who"], ["yarın", "when"], ["bahçede", "where"], ["balon şişirecek.", "does"]], "en": [["Zeynep", "who"], ["will blow up balloons", "does"], ["in the garden", "where"], ["tomorrow", "when"]]}
   ]
  }
 ]
});
