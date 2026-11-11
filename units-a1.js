// Movers (A1) üniteleri: Ünite 11–20. index.html bu dosyayı ana betikten önce yükler ve üniteleri LEVELS/READING/... dizilerine ekler.
// Biçim: {L:{rank,theme,tr,icon,song,cards,tasks,hard}, songs, reading, listening, speaking, write, towers}. Denetim: node api/tools/check-units.js
const UNITS_A1 = [];
// ---------- Ünite 11 ----------
UNITS_A1.push({
 "L": {
  "rank": "Junior Mover",
  "theme": "Jobs",
  "tr": "Meslekler",
  "icon": "👩‍⚕️",
  "song": {
   "title": "Who Works Today?",
   "lines": [
    "The <b>doctor</b> helps when we are sick,",
    "The <b>cook</b> makes lunch, so nice and quick,",
    "The <b>pilot</b> flies up in the sky,",
    "The <b>farmer</b> waves as we go by!"
   ]
  },
  "cards": [
   {
    "e": "👨‍⚕️",
    "w": "doctor",
    "ipa": "/ˈdɑktər/",
    "tr": "Doktor",
    "ex": "The doctor works in a hospital."
   },
   {
    "e": "👩‍⚕️",
    "w": "nurse",
    "ipa": "/nɝs/",
    "tr": "Hemşire",
    "ex": "The nurse helps sick people."
   },
   {
    "e": "🧑‍🌾",
    "w": "farmer",
    "ipa": "/ˈfɑrmər/",
    "tr": "Çiftçi",
    "ex": "The farmer works on a farm."
   },
   {
    "e": "🧑‍🍳",
    "w": "cook",
    "ipa": "/kʊk/",
    "tr": "Aşçı",
    "ex": "My uncle is a cook."
   },
   {
    "e": "🚕",
    "w": "driver",
    "ipa": "/ˈdraɪvər/",
    "tr": "Şoför",
    "ex": "The bus driver drives slowly."
   },
   {
    "e": "🧑‍✈️",
    "w": "pilot",
    "ipa": "/ˈpaɪlət/",
    "tr": "Pilot",
    "ex": "She is a pilot. She flies planes."
   },
   {
    "e": "🦷",
    "w": "dentist",
    "ipa": "/ˈdɛntɪst/",
    "tr": "Diş doktoru",
    "ex": "The dentist looks at my teeth."
   },
   {
    "e": "🧑‍🚒",
    "w": "firefighter",
    "ipa": "/ˈfaɪərˌfaɪtər/",
    "tr": "İtfaiyeci",
    "ex": "The firefighter drives a red truck."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "pilot",
    "options": [
     "farmer",
     "pilot",
     "cook"
    ],
    "hint": [
     "Who flies a plane up in the sky?",
     "Gökyüzünde uçak uçuran kim?"
    ]
   },
   {
    "type": "pick",
    "q": "Who looks at your teeth?",
    "tr": "Dişlerine kim bakar?",
    "options": [
     {
      "e": "🦷",
      "v": "dentist"
     },
     {
      "e": "👨‍⚕️",
      "v": "doctor"
     },
     {
      "e": "🧑‍🍳",
      "v": "cook"
     },
     {
      "e": "🚕",
      "v": "driver"
     }
    ],
    "answer": "dentist",
    "hint": [
     "Think about teeth. The word starts with “d” and has a special place to work.",
     "Dişleri düşün. Kelime “d” ile başlıyor."
    ]
   },
   {
    "type": "listen",
    "say": "My uncle is a pilot. He works at the airport. He flies big planes.",
    "q": "What is my uncle's job?",
    "tr": "Amcamın mesleği nedir?",
    "options": [
     {
      "e": "✈️",
      "v": "pilot"
     },
     {
      "e": "🚌",
      "v": "driver"
     },
     {
      "e": "🧑‍🌾",
      "v": "farmer"
     }
    ],
    "answer": "pilot",
    "hint": [
     "Listen again: he flies big planes.",
     "Tekrar dinle: büyük uçaklar uçuruyor."
    ]
   },
   {
    "type": "write",
    "e": "👩‍⚕️",
    "sentence": "She ___ in a hospital.",
    "answer": "works",
    "mask": "W _ R K S",
    "tr": "O bir hastanede çalışır.",
    "hint": [
     "Five letters: w - o - r - k - s. Add -s after “she”.",
     "Beş harf: w - o - r - k - s. “She” den sonra -s eklenir."
    ]
   },
   {
    "type": "speak",
    "sentence": "She works in a hospital.",
    "tr": "O bir hastanede çalışır."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "farmer",
    "hint": [
     "He works on a farm. f - a - r - m - e - r",
     "Çiftlikte çalışır. f - a - r - m - e - r"
    ]
   },
   {
    "type": "dictation",
    "word": "dentist",
    "e": "🦷",
    "hint": [
     "It starts with “d”. This person looks at your teeth.",
     "“d” ile başlıyor. Bu kişi dişlerine bakar."
    ]
   },
   {
    "type": "order",
    "tr": "Babam bir otobüs şoförüdür.",
    "answer": "My father is a bus driver",
    "extra": "pilot",
    "hint": [
     "Start with: “My father …”",
     "Şöyle başla: “My father …”"
    ]
   },
   {
    "type": "story",
    "say": "Mr. Kaya is a farmer. He gets up early. He gives food to the cows and the sheep. Then he drives his tractor.",
    "q": "What does Mr. Kaya drive?",
    "tr": "Bay Kaya ne sürer?",
    "options": [
     "a bus",
     "a tractor",
     "a plane"
    ],
    "answer": "a tractor",
    "hint": [
     "Listen to the last sentence: “Then he drives his …”",
     "Son cümleyi dinle: “Then he drives his …”"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Babam bir pilottur.",
    "answer": "My father is a pilot."
   }
  ]
 },
 "songs": [
  {
   "title": "Hospital Helpers",
   "lines": [
    "The <b>doctor</b> and the <b>nurse</b>, hip hooray!",
    "They help us feel better every day,",
    "A <b>dentist</b> checks each tooth with care,",
    "Open wide, show your teeth up there!"
   ]
  },
  {
   "title": "Beep Beep Bus",
   "lines": [
    "The <b>driver</b> turns the big round wheel,",
    "Beep, beep, beep, hear the engine squeal!",
    "The bus goes up and down the hill,",
    "Our <b>driver</b> drives with lots of skill!"
   ]
  },
  {
   "title": "Busy Workers",
   "lines": [
    "The <b>farmer</b> wakes up with the sun,",
    "There's lots of work, but it is fun!",
    "The <b>cook</b> has bread and soup to make,",
    "Yum, yum, yum, a tasty cake!"
   ]
  },
  {
   "title": "Up in the Sky",
   "lines": [
    "The <b>pilot</b> flies a plane up high,",
    "Over the clouds across the sky,",
    "The <b>firefighter</b> drives a truck so red,",
    "Helping people, then to bed!"
   ]
  }
 ],
 "reading": {
  "title": "Job Day",
  "e": "💼",
  "lines": [
   [
    "Today is Job Day at Can's school.",
    "Bugün Can'ın okulunda Meslek Günü."
   ],
   [
    "Can's mother is a nurse. She works in a hospital.",
    "Can'ın annesi hemşire. Bir hastanede çalışır."
   ],
   [
    "She helps sick people every day.",
    "Her gün hasta insanlara yardım eder."
   ],
   [
    "Can's uncle is a farmer. He works on a farm.",
    "Can'ın amcası çiftçi. Bir çiftlikte çalışır."
   ],
   [
    "He has cows and he grows tomatoes.",
    "İnekleri var ve domates yetiştirir."
   ],
   [
    "Can's father is a cook. He works in a restaurant.",
    "Can'ın babası aşçı. Bir lokantada çalışır."
   ],
   [
    "The children say, “Wow! Can's family has great jobs!”",
    "Çocuklar, “Vay canına! Can'ın ailesinin harika meslekleri var!” der."
   ],
   [
    "Can smiles. “I want to be a pilot!”",
    "Can gülümser. “Ben pilot olmak istiyorum!”"
   ]
  ],
  "qs": [
   {
    "q": "Where does Can's mother work?",
    "tr": "Can'ın annesi nerede çalışır?",
    "options": [
     "in a hospital",
     "on a farm",
     "in a restaurant"
    ],
    "answer": "in a hospital"
   },
   {
    "q": "What does Can's uncle do?",
    "tr": "Can'ın amcası ne iş yapar?",
    "options": [
     "He is a cook.",
     "He is a farmer.",
     "He is a nurse."
    ],
    "answer": "He is a farmer."
   },
   {
    "q": "What does Can want to be?",
    "tr": "Can ne olmak istiyor?",
    "options": [
     "a nurse",
     "a cook",
     "a pilot"
    ],
    "answer": "a pilot"
   }
  ]
 },
 "listening": [
  {
   "say": "She is a doctor. She works in a hospital.",
   "q": "Where does she work?",
   "tr": "Nerede çalışıyor?",
   "options": [
    {
     "e": "🏥",
     "v": "hospital"
    },
    {
     "e": "🏫",
     "v": "school"
    },
    {
     "e": "🌾",
     "v": "farm"
    }
   ],
   "answer": "hospital"
  },
  {
   "say": "My brother is a bus driver. He drives a big bus.",
   "q": "What does he drive?",
   "tr": "Ne sürüyor?",
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
     "e": "🚜",
     "v": "tractor"
    }
   ],
   "answer": "bus"
  },
  {
   "say": "The firefighter has a red truck.",
   "q": "What does the firefighter have?",
   "tr": "İtfaiyecinin neyi var?",
   "options": [
    {
     "e": "🚒",
     "v": "truck"
    },
    {
     "e": "⛵",
     "v": "boat"
    },
    {
     "e": "🚲",
     "v": "bike"
    }
   ],
   "answer": "truck"
  },
  {
   "say": "My aunt is a dentist. She looks at teeth.",
   "q": "What does she look at?",
   "tr": "Neye bakıyor?",
   "options": [
    {
     "e": "🦷",
     "v": "teeth"
    },
    {
     "e": "👂",
     "v": "ears"
    },
    {
     "e": "👁️",
     "v": "eyes"
    }
   ],
   "answer": "teeth"
  },
  {
   "say": "He is a cook. He makes pizza for people.",
   "q": "What does he make?",
   "tr": "Ne yapıyor?",
   "options": [
    {
     "e": "🍕",
     "v": "pizza"
    },
    {
     "e": "🥪",
     "v": "sandwich"
    },
    {
     "e": "🍲",
     "v": "soup"
    }
   ],
   "answer": "pizza"
  }
 ],
 "speaking": [
  {
   "e": "👩‍⚕️",
   "en": "My mother is a doctor.",
   "tr": "Annem doktor."
  },
  {
   "e": "🏥",
   "en": "He works in a hospital.",
   "tr": "O bir hastanede çalışır."
  },
  {
   "e": "❓",
   "en": "What does your father do?",
   "tr": "Baban ne iş yapar?"
  },
  {
   "e": "✈️",
   "en": "She is a pilot.",
   "tr": "O bir pilot."
  },
  {
   "e": "🌾",
   "en": "The farmer works on a farm.",
   "tr": "Çiftçi çiftlikte çalışır."
  }
 ],
 "write": {
  "title": "Jobs in My Family",
  "en": "Write about jobs in your family. What does your mother or father do? Where does he or she work?",
  "tr": "Ailendeki meslekleri anlat. Annen ya da baban ne iş yapar? Nerede çalışır?",
  "starters": [
   "My mother is a",
   "She works in",
   "My father is a",
   "He helps",
   "My uncle",
   "I want to be a"
  ],
  "checks": [
   {
    "re": /\b(works|helps|drives|flies|makes|cooks)\b/,
    "t": "Fiile -s ekle (works, helps, drives…)"
   },
   {
    "re": /\bis an? /,
    "t": "Mesleği söyle (is a nurse)"
   }
  ],
  "model": "My mother is a nurse. She works in a hospital. She helps sick people every day. My father is a driver. He drives a big bus in the city. My uncle is a farmer. He works on a farm. I want to be a pilot because I love planes."
 },
 "towers": [
  {
   "e": "🏥",
   "title": "Hospital Work",
   "steps": [
    {
     "tr": [
      [
       "çalışır.",
       "does"
      ]
     ],
     "en": [
      [
       "works",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece'nin annesi",
       "who"
      ],
      [
       "çalışır.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece's mother",
       "who"
      ],
      [
       "works",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece'nin annesi",
       "who"
      ],
      [
       "hastanede",
       "where"
      ],
      [
       "çalışır.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece's mother",
       "who"
      ],
      [
       "works",
       "does"
      ],
      [
       "in a hospital",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ece'nin annesi",
       "who"
      ],
      [
       "her gün",
       "when"
      ],
      [
       "hastanede",
       "where"
      ],
      [
       "çalışır.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece's mother",
       "who"
      ],
      [
       "works",
       "does"
      ],
      [
       "in a hospital",
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
   "e": "✈️",
   "title": "The Pilot",
   "steps": [
    {
     "tr": [
      [
       "büyük bir uçak uçurur.",
       "does"
      ]
     ],
     "en": [
      [
       "flies a big plane",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert'in amcası",
       "who"
      ],
      [
       "büyük bir uçak uçurur.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert's uncle",
       "who"
      ],
      [
       "flies a big plane",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert'in amcası",
       "who"
      ],
      [
       "denizin üzerinde",
       "where"
      ],
      [
       "büyük bir uçak uçurur.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert's uncle",
       "who"
      ],
      [
       "flies a big plane",
       "does"
      ],
      [
       "over the sea",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Mert'in amcası",
       "who"
      ],
      [
       "her sabah",
       "when"
      ],
      [
       "denizin üzerinde",
       "where"
      ],
      [
       "büyük bir uçak uçurur.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert's uncle",
       "who"
      ],
      [
       "flies a big plane",
       "does"
      ],
      [
       "over the sea",
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
   "e": "🐄",
   "title": "On the Farm",
   "steps": [
    {
     "tr": [
      [
       "ineklere yem verir.",
       "does"
      ]
     ],
     "en": [
      [
       "feeds the cows",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Çiftçi",
       "who"
      ],
      [
       "ineklere yem verir.",
       "does"
      ]
     ],
     "en": [
      [
       "The farmer",
       "who"
      ],
      [
       "feeds the cows",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Çiftçi",
       "who"
      ],
      [
       "çiftlikte",
       "where"
      ],
      [
       "ineklere yem verir.",
       "does"
      ]
     ],
     "en": [
      [
       "The farmer",
       "who"
      ],
      [
       "feeds the cows",
       "does"
      ],
      [
       "on the farm",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Çiftçi",
       "who"
      ],
      [
       "sabahları",
       "when"
      ],
      [
       "çiftlikte",
       "where"
      ],
      [
       "ineklere yem verir.",
       "does"
      ]
     ],
     "en": [
      [
       "The farmer",
       "who"
      ],
      [
       "feeds the cows",
       "does"
      ],
      [
       "on the farm",
       "where"
      ],
      [
       "in the morning",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 12 ----------
UNITS_A1.push({
 "L": {
  "rank": "Town Explorer",
  "theme": "My Town",
  "tr": "Şehrim",
  "icon": "🏙️",
  "song": {
   "title": "Our Town",
   "lines": [
    "There is a <b>park</b> next to my school,",
    "There is a <b>library</b>, it's very cool,",
    "There's a <b>market</b> and a <b>cinema</b> too,",
    "Come and see our town with me and you!"
   ]
  },
  "cards": [
   {
    "e": "🏥",
    "w": "hospital",
    "ipa": "/ˈhɑspɪtl/",
    "tr": "Hastane",
    "ex": "The hospital is next to the park."
   },
   {
    "e": "📚",
    "w": "library",
    "ipa": "/ˈlaɪbrɛri/",
    "tr": "Kütüphane",
    "ex": "There is a library opposite my school."
   },
   {
    "e": "🌳",
    "w": "park",
    "ipa": "/pɑrk/",
    "tr": "Park",
    "ex": "There are many trees in the park."
   },
   {
    "e": "🏪",
    "w": "market",
    "ipa": "/ˈmɑrkɪt/",
    "tr": "Pazar, market",
    "ex": "The market is between the bank and the bakery."
   },
   {
    "e": "🎬",
    "w": "cinema",
    "ipa": "/ˈsɪnəmə/",
    "tr": "Sinema",
    "ex": "Is there a cinema in your town?"
   },
   {
    "e": "🛒",
    "w": "supermarket",
    "ipa": "/ˈsupərˌmɑrkɪt/",
    "tr": "Süpermarket",
    "ex": "There is a big supermarket next to my house."
   },
   {
    "e": "🚏",
    "w": "bus station",
    "ipa": "/bʌs ˈsteɪʃən/",
    "tr": "Otobüs durağı",
    "ex": "The bus station is opposite the cinema."
   },
   {
    "e": "🏊",
    "w": "swimming pool",
    "ipa": "/ˈswɪmɪŋ pul/",
    "tr": "Yüzme havuzu",
    "ex": "There is a swimming pool in our town."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "park",
    "options": [
     "park",
     "market",
     "cinema"
    ],
    "hint": [
     "Children play here. There are trees and grass.",
     "Çocuklar burada oynar. Ağaçlar ve çimenler var."
    ]
   },
   {
    "type": "pick",
    "q": "Where can you borrow books?",
    "tr": "Kitapları nereden ödünç alabilirsin?",
    "options": [
     {
      "e": "📚",
      "v": "library"
     },
     {
      "e": "🏥",
      "v": "hospital"
     },
     {
      "e": "🎬",
      "v": "cinema"
     },
     {
      "e": "🏪",
      "v": "market"
     }
    ],
    "answer": "library",
    "hint": [
     "You read and borrow books there. It is quiet.",
     "Orada kitap okur ve ödünç alırsın. Sessizdir."
    ]
   },
   {
    "type": "listen",
    "say": "There is a cinema next to the park. There are two shops opposite the cinema.",
    "q": "What is next to the park?",
    "tr": "Parkın yanında ne var?",
    "options": [
     {
      "e": "🎬",
      "v": "cinema"
     },
     {
      "e": "🏥",
      "v": "hospital"
     },
     {
      "e": "🏊",
      "v": "swimming pool"
     }
    ],
    "answer": "cinema",
    "hint": [
     "Listen to the first sentence: “There is a … next to the park.”",
     "İlk cümleyi dinle: “There is a … next to the park.”"
    ]
   },
   {
    "type": "write",
    "e": "🌳",
    "sentence": "There ___ two parks in my town.",
    "answer": "are",
    "mask": "A _ E",
    "tr": "Şehrimde iki park var.",
    "hint": [
     "Three letters. We say this word with “two” (more than one).",
     "Üç harf. Bu kelimeyi “two” (birden fazla) ile kullanırız."
    ]
   },
   {
    "type": "speak",
    "sentence": "The library is opposite the park.",
    "tr": "Kütüphane parkın karşısında."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "library",
    "hint": [
     "A quiet place with lots of books. l - i - b - r - a - r - y",
     "Bir sürü kitabın olduğu sessiz yer. l - i - b - r - a - r - y"
    ]
   },
   {
    "type": "dictation",
    "word": "cinema",
    "e": "🎬",
    "hint": [
     "It starts with “c”. You watch films there.",
     "“c” ile başlıyor. Orada film izlersin."
    ]
   },
   {
    "type": "order",
    "tr": "Parkın yanında bir sinema var.",
    "answer": "There is a cinema next to the park",
    "extra": "opposite",
    "hint": [
     "Start with: “There is …”",
     "Şöyle başla: “There is …”"
    ]
   },
   {
    "type": "story",
    "say": "This is my town. The supermarket is opposite the library. The park is between the library and the cinema. My school is next to the park.",
    "q": "Where is the park?",
    "tr": "Park nerede?",
    "options": [
     "next to the supermarket",
     "between the library and the cinema",
     "opposite the school"
    ],
    "answer": "between the library and the cinema",
    "hint": [
     "Listen for the word “park” in the third sentence.",
     "Üçüncü cümlede “park” kelimesini dinle."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Marketin yanında bir hastane var.",
    "answer": "There is a hospital next to the market."
   }
  ]
 },
 "songs": [
  {
   "title": "Where Is It?",
   "lines": [
    "Where is the <b>library</b>? Let me see,",
    "It's opposite the park, near me!",
    "Where is the <b>hospital</b>? Over there,",
    "It's next to the market, on the square!"
   ]
  },
  {
   "title": "Town Walk",
   "lines": [
    "There is a <b>market</b>, there is a <b>park</b>,",
    "We walk and walk until it's dark,",
    "There are lots of shops, a bus, a bike,",
    "Come on, let's go for a town hike!"
   ]
  },
  {
   "title": "Movie Night",
   "lines": [
    "There is a <b>cinema</b> on my street,",
    "Popcorn and a comfy seat,",
    "The lights go down, the show begins,",
    "Sit with friends and smile and grin!"
   ]
  },
  {
   "title": "Splash and Ride",
   "lines": [
    "At the <b>swimming pool</b> we splash and play,",
    "There are kids here every day,",
    "The <b>bus station</b> is down the street,",
    "Take the bus, and move your feet!"
   ]
  }
 ],
 "reading": {
  "title": "Deniz's Town",
  "e": "🏙️",
  "lines": [
   [
    "Deniz lives in a small town by the sea.",
    "Deniz, deniz kenarındaki küçük bir kasabada yaşar."
   ],
   [
    "There is a big park in the town.",
    "Kasabada büyük bir park var."
   ],
   [
    "There are many trees and a small pond in the park.",
    "Parkta çok ağaç ve küçük bir gölet var."
   ],
   [
    "The library is opposite the park.",
    "Kütüphane parkın karşısında."
   ],
   [
    "There is a cinema next to the library.",
    "Kütüphanenin yanında bir sinema var."
   ],
   [
    "The swimming pool is between the market and the cinema.",
    "Yüzme havuzu market ile sinemanın arasında."
   ],
   [
    "Deniz goes to the swimming pool on Saturdays.",
    "Deniz cumartesi günleri yüzme havuzuna gider."
   ],
   [
    "She loves her town!",
    "Kasabasını çok sever!"
   ]
  ],
  "qs": [
   {
    "q": "Where is the library?",
    "tr": "Kütüphane nerede?",
    "options": [
     "opposite the park",
     "next to the market",
     "between the park and the pool"
    ],
    "answer": "opposite the park"
   },
   {
    "q": "What is between the market and the cinema?",
    "tr": "Market ile sinemanın arasında ne var?",
    "options": [
     "the park",
     "the swimming pool",
     "the hospital"
    ],
    "answer": "the swimming pool"
   },
   {
    "q": "When does Deniz go to the swimming pool?",
    "tr": "Deniz yüzme havuzuna ne zaman gider?",
    "options": [
     "on Saturdays",
     "on Sundays",
     "every day"
    ],
    "answer": "on Saturdays"
   }
  ]
 },
 "listening": [
  {
   "say": "The hospital is next to the park.",
   "q": "What is next to the park?",
   "tr": "Parkın yanında ne var?",
   "options": [
    {
     "e": "🏥",
     "v": "hospital"
    },
    {
     "e": "🎬",
     "v": "cinema"
    },
    {
     "e": "📚",
     "v": "library"
    }
   ],
   "answer": "hospital"
  },
  {
   "say": "There are three supermarkets in my town.",
   "q": "How many supermarkets are there?",
   "tr": "Kaç süpermarket var?",
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
  },
  {
   "say": "The bus station is opposite the cinema.",
   "q": "What is opposite the cinema?",
   "tr": "Sinemanın karşısında ne var?",
   "options": [
    {
     "e": "🚏",
     "v": "bus station"
    },
    {
     "e": "🏊",
     "v": "swimming pool"
    },
    {
     "e": "🛒",
     "v": "supermarket"
    }
   ],
   "answer": "bus station"
  },
  {
   "say": "The library is between the park and the market.",
   "q": "Which place is between the park and the market?",
   "tr": "Park ile marketin arasında hangi yer var?",
   "options": [
    {
     "e": "📚",
     "v": "library"
    },
    {
     "e": "🎬",
     "v": "cinema"
    },
    {
     "e": "🏊",
     "v": "swimming pool"
    }
   ],
   "answer": "library"
  },
  {
   "say": "I go to the swimming pool after school. It is next to my house.",
   "q": "What is the swimming pool next to?",
   "tr": "Yüzme havuzu neyin yanında?",
   "options": [
    {
     "e": "🏠",
     "v": "my house"
    },
    {
     "e": "🏫",
     "v": "my school"
    },
    {
     "e": "🏥",
     "v": "the hospital"
    }
   ],
   "answer": "my house"
  }
 ],
 "speaking": [
  {
   "e": "🌳",
   "en": "There is a park in my town.",
   "tr": "Şehrimde bir park var."
  },
  {
   "e": "📚",
   "en": "The library is opposite the cinema.",
   "tr": "Kütüphane sinemanın karşısında."
  },
  {
   "e": "🛒",
   "en": "There are two markets near my house.",
   "tr": "Evimin yakınında iki market var."
  },
  {
   "e": "🏥",
   "en": "Where is the hospital?",
   "tr": "Hastane nerede?"
  },
  {
   "e": "🚏",
   "en": "It is next to the bus station.",
   "tr": "Otobüs durağının yanında."
  }
 ],
 "write": {
  "title": "My Town",
  "en": "Write about your town. What places are there? Where are they?",
  "tr": "Şehrini anlat. Orada hangi yerler var? Nerede bulunurlar?",
  "starters": [
   "I live in",
   "There is a",
   "There are",
   "The park is next to",
   "The library is opposite",
   "I like my town because"
  ],
  "checks": [
   {
    "re": /\bthere (is|are)\b/,
    "t": "There is / There are kullan"
   },
   {
    "re": /\b(next to|opposite|between)\b/,
    "t": "Yer bildiren ifade kullan (next to, opposite, between)"
   }
  ],
  "model": "I live in a small town. There is a big park next to my school. There are two markets and a cinema in my town. The library is opposite the park. There is a swimming pool between the library and the hospital. I like my town because it is very friendly."
 },
 "towers": [
  {
   "e": "⚽",
   "title": "Park Fun",
   "steps": [
    {
     "tr": [
      [
       "futbol oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "plays football",
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
       "futbol oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays football",
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
       "parkta",
       "where"
      ],
      [
       "futbol oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays football",
       "does"
      ],
      [
       "in the park",
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
       "okuldan sonra",
       "when"
      ],
      [
       "parkta",
       "where"
      ],
      [
       "futbol oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays football",
       "does"
      ],
      [
       "in the park",
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
   "e": "📖",
   "title": "Library Time",
   "steps": [
    {
     "tr": [
      [
       "kitap okur.",
       "does"
      ]
     ],
     "en": [
      [
       "reads a book",
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
       "kitap okur.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "reads a book",
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
       "kütüphanede",
       "where"
      ],
      [
       "kitap okur.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "reads a book",
       "does"
      ],
      [
       "in the library",
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
       "cumartesi günü",
       "when"
      ],
      [
       "kütüphanede",
       "where"
      ],
      [
       "kitap okur.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "reads a book",
       "does"
      ],
      [
       "in the library",
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
   "e": "🏊",
   "title": "Swimming Fun",
   "steps": [
    {
     "tr": [
      [
       "yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "swims",
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
       "yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "swims",
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
       "yüzme havuzunda",
       "where"
      ],
      [
       "yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "swims",
       "does"
      ],
      [
       "in the swimming pool",
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
       "her pazar",
       "when"
      ],
      [
       "yüzme havuzunda",
       "where"
      ],
      [
       "yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "swims",
       "does"
      ],
      [
       "in the swimming pool",
       "where"
      ],
      [
       "every Sunday",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 13 ----------
UNITS_A1.push({
 "L": {
  "rank": "Feelings Friend",
  "theme": "Feelings",
  "tr": "Duygular",
  "icon": "😊",
  "song": {
   "title": "How Do You Feel?",
   "lines": [
    "I'm <b>happy</b> when the sun is bright,",
    "I'm <b>sad</b> when I can't fly my kite,",
    "I'm <b>tired</b> when the day is done,",
    "I'm <b>hungry</b> for some food and fun!"
   ]
  },
  "cards": [
   {"e": "😊", "w": "happy", "ipa": "/ˈhæpi/", "tr": "Mutlu", "ex": "I'm happy because it's my birthday."},
   {"e": "😢", "w": "sad", "ipa": "/sæd/", "tr": "Üzgün", "ex": "I'm sad because my friend is away."},
   {"e": "😡", "w": "angry", "ipa": "/ˈæŋɡri/", "tr": "Kızgın", "ex": "He's angry because his toy is broken."},
   {"e": "😴", "w": "tired", "ipa": "/ˈtaɪərd/", "tr": "Yorgun", "ex": "I'm tired because I played all day."},
   {"e": "😋", "w": "hungry", "ipa": "/ˈhʌŋɡri/", "tr": "Aç", "ex": "Are you hungry? Yes, I am."},
   {"e": "🥤", "w": "thirsty", "ipa": "/ˈθɜrsti/", "tr": "Susamış", "ex": "I'm thirsty because it's hot."},
   {"e": "🥱", "w": "bored", "ipa": "/bɔrd/", "tr": "Sıkılmış", "ex": "Are you bored? No, I'm not."},
   {"e": "😨", "w": "scared", "ipa": "/skɛrd/", "tr": "Korkmuş", "ex": "I'm scared because it's dark."}
  ],
  "tasks": [
   {
    "type": "song", "line": 1, "blank": "sad",
    "options": ["happy", "sad", "tired"],
    "hint": ["How do you feel when you can't fly your kite?", "Uçurtmanı uçuramazsan nasıl hissedersin?"]
   },
   {
    "type": "pick",
    "q": "Which one is HUNGRY?",
    "tr": "Hangisi aç?",
    "options": [{"e": "😢", "v": "sad"}, {"e": "😡", "v": "angry"}, {"e": "😴", "v": "tired"}, {"e": "😋", "v": "hungry"}],
    "answer": "hungry",
    "hint": ["You want to eat a big sandwich. Yum!", "Kocaman bir sandviç yemek istersin. Ham!"]
   },
   {
    "type": "listen",
    "say": "I'm thirsty because it's very hot. I want some water.",
    "q": "How does he feel?",
    "tr": "Nasıl hissediyor?",
    "options": [{"e": "🥤", "v": "thirsty"}, {"e": "😴", "v": "tired"}, {"e": "😡", "v": "angry"}],
    "answer": "thirsty",
    "hint": ["Listen again: “I'm t… because it's hot.”", "Tekrar dinle: “I'm t… because it's hot.”"]
   },
   {
    "type": "write", "e": "😋",
    "sentence": "___ you hungry? Yes, I am.",
    "answer": "are",
    "mask": "A _ E",
    "tr": "Aç mısın? Evet, açım.",
    "hint": ["Three letters. We say “___ you…?” a-r-e.", "Üç harf. “___ you…?” diye sorarız: a-r-e."]
   },
   {
    "type": "speak", "sentence": "I'm happy because it's my birthday.", "tr": "Mutluyum çünkü bugün doğum günüm."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 3, "blank": "hungry",
    "hint": ["You want to eat! h - u - n - g - r - y", "Yemek yemek istiyorsun! h - u - n - g - r - y"]
   },
   {
    "type": "dictation", "word": "scared", "e": "😨",
    "hint": ["It starts with “s”. You feel this in the dark.", "“s” ile başlıyor. Karanlıkta böyle hissedersin."]
   },
   {
    "type": "order",
    "tr": "Sıkıldım çünkü yağmur yağıyor.",
    "answer": "I am bored because it is raining",
    "extra": "tired",
    "hint": ["Start with: “I am …”", "Şöyle başla: “I am …”"]
   },
   {
    "type": "story",
    "say": "Ece is angry because her brother broke her toy. He says sorry and gives her a hug. Now Ece is happy.",
    "q": "Why is Ece angry?",
    "tr": "Ece neden kızgın?",
    "options": ["Her brother broke her toy.", "She is hungry.", "It is raining."],
    "answer": "Her brother broke her toy.",
    "hint": ["Listen to the first sentence: “…because…”", "İlk cümleyi dinle: “…because…”"]
   },
   {
    "type": "speakTr", "tr": "Susadım çünkü hava sıcak.", "answer": "I'm thirsty because it's hot."
   }
  ]
 },
 "songs": [
  {
   "title": "Smile, Smile, Smile",
   "lines": [
    "When I'm <b>happy</b>, I jump and sing,",
    "When I'm <b>sad</b>, I hug my string,",
    "A smile, a hug, a cuddly friend,",
    "Make my sad days start to end!"
   ]
  },
  {
   "title": "Stomp, Stomp, Grr",
   "lines": [
    "I'm <b>angry</b>! Stomp, stomp, stomp!",
    "Take a breath and count to ten, plomp,",
    "One, two, three, I'm calm and cool,",
    "No more grr, I'm kind and cool!"
   ]
  },
  {
   "title": "Yum and Glug",
   "lines": [
    "I'm <b>hungry</b>, yum, yum, yum,",
    "I'm <b>thirsty</b>, glug, glug, glug,",
    "Bread and soup and apple juice,",
    "Now I'm full, what a good use!"
   ]
  },
  {
   "title": "Night-Night Moon",
   "lines": [
    "I'm <b>tired</b>, the moon is high,",
    "I'm not <b>scared</b> of the dark night sky,",
    "I'm not <b>bored</b>, I'm warm in bed,",
    "Sweet, sweet dreams, my sleepy head!"
   ]
  }
 ],
 "reading": {
  "title": "Can's Up and Down Day",
  "e": "🎂",
  "lines": [
    ["Can is happy this morning because it is his birthday.", "Can bu sabah mutlu çünkü bugün onun doğum günü."],
    ["But at school, he is sad because his friend Mert is ill.", "Ama okulda üzgün çünkü arkadaşı Mert hasta."],
    ["At lunch, Can is hungry and thirsty.", "Öğle yemeğinde Can aç ve susamış."],
    ["He eats a sandwich and drinks some juice.", "Bir sandviç yer ve biraz meyve suyu içer."],
    ["In the afternoon, he is bored because it is rainy.", "Öğleden sonra sıkılır çünkü hava yağmurlu."],
    ["Then Mert calls him and sings a birthday song.", "Sonra Mert onu arar ve doğum günü şarkısı söyler."],
    ["Can is happy again, but he is very tired at night.", "Can yine mutlu olur ama geceleyin çok yorgundur."]
  ],
  "qs": [
   {"q": "Why is Can happy in the morning?", "tr": "Can sabah neden mutlu?", "options": ["It is his birthday.", "He is hungry.", "It is sunny."], "answer": "It is his birthday."},
   {"q": "Why is Can sad at school?", "tr": "Can okulda neden üzgün?", "options": ["He is tired.", "Mert is ill.", "He is scared."], "answer": "Mert is ill."},
   {"q": "Why is Can bored in the afternoon?", "tr": "Can öğleden sonra neden sıkılıyor?", "options": ["It is rainy.", "He is thirsty.", "It is his birthday."], "answer": "It is rainy."}
  ]
 },
 "listening": [
  {
   "say": "I'm sad because my cat is ill.",
   "q": "How does she feel?", "tr": "Nasıl hissediyor?",
   "options": [{"e": "😢", "v": "sad"}, {"e": "😊", "v": "happy"}, {"e": "😡", "v": "angry"}],
   "answer": "sad"
  },
  {
   "say": "I'm hungry because I didn't eat breakfast. I want a pizza.",
   "q": "What does he want?", "tr": "Ne istiyor?",
   "options": [{"e": "🍕", "v": "pizza"}, {"e": "🥤", "v": "juice"}, {"e": "🍌", "v": "banana"}],
   "answer": "pizza"
  },
  {
   "say": "Are you tired? Yes, I am. I want to go to bed.",
   "q": "What does she want to do?", "tr": "Ne yapmak istiyor?",
   "options": [{"e": "🛏️", "v": "go to bed"}, {"e": "⚽", "v": "play football"}, {"e": "📺", "v": "watch TV"}],
   "answer": "go to bed"
  },
  {
   "say": "I'm scared because there is a big dog.",
   "q": "Why is he scared?", "tr": "Neden korkuyor?",
   "options": [{"e": "🐕", "v": "a big dog"}, {"e": "🌧️", "v": "the rain"}, {"e": "🌙", "v": "the dark"}],
   "answer": "a big dog"
  },
  {
   "say": "I'm bored because it's rainy. I can't play in the park.",
   "q": "What is the weather like?", "tr": "Hava nasıl?",
   "options": [{"e": "☀️", "v": "sunny"}, {"e": "🌧️", "v": "rainy"}, {"e": "❄️", "v": "snowy"}],
   "answer": "rainy"
  }
 ],
 "speaking": [
  {"e": "😊", "en": "I'm happy because it's Saturday.", "tr": "Mutluyum çünkü bugün cumartesi."},
  {"e": "😢", "en": "I'm sad because my friend is away.", "tr": "Üzgünüm çünkü arkadaşım uzakta."},
  {"e": "😋", "en": "Are you hungry? Yes, I am.", "tr": "Aç mısın? Evet, açım."},
  {"e": "🥤", "en": "I'm thirsty, I want some water.", "tr": "Susadım, biraz su istiyorum."},
  {"e": "😴", "en": "No, I'm not tired. I'm happy.", "tr": "Hayır, yorgun değilim. Mutluyum."}
 ],
 "write": {
  "title": "How Do I Feel?",
  "en": "Write about your feelings. How do you feel and why?",
  "tr": "Duygularını anlat: Nasıl hissediyorsun ve neden?",
  "starters": ["I'm happy when", "I'm sad because", "I'm tired because", "I'm hungry at", "I'm scared when"],
  "checks": [
   {"re": /\b(i'm|i am) (very |so )?(happy|sad|angry|tired|hungry|thirsty|bored|scared)/, "t": "Duygu söyle (I'm happy…)"},
   {"re": /\bbecause\b/, "t": "Nedenini söyle (because…)"}
  ],
  "model": "I'm happy today because it's Saturday. In the morning, I'm tired because I wake up early. At lunch, I'm hungry, so I eat soup. Sometimes I'm scared at night because it's dark. But I'm never bored because I like drawing."
 },
 "towers": [
  {
   "e": "😢", "title": "A Sad Day",
   "steps": [
    {"tr": [["Üzgündür.", "does"]], "en": [["is sad", "does"]]},
    {"tr": [["Deniz", "who"], ["üzgündür.", "does"]], "en": [["Deniz", "who"], ["is sad", "does"]]},
    {"tr": [["Deniz", "who"], ["evde", "where"], ["üzgündür.", "does"]], "en": [["Deniz", "who"], ["is sad", "does"], ["at home", "where"]]},
    {"tr": [["Deniz", "who"], ["bugün", "when"], ["evde", "where"], ["üzgündür.", "does"]], "en": [["Deniz", "who"], ["is sad", "does"], ["at home", "where"], ["today", "when"]]}
   ]
  },
  {
   "e": "🥱", "title": "Rainy Boredom",
   "steps": [
    {"tr": [["Sıkılıyor.", "does"]], "en": [["is bored", "does"]]},
    {"tr": [["Elif", "who"], ["sıkılıyor.", "does"]], "en": [["Elif", "who"], ["is bored", "does"]]},
    {"tr": [["Elif", "who"], ["arabada", "where"], ["sıkılıyor.", "does"]], "en": [["Elif", "who"], ["is bored", "does"], ["in the car", "where"]]},
    {"tr": [["Elif", "who"], ["pazar günü", "when"], ["arabada", "where"], ["sıkılıyor.", "does"]], "en": [["Elif", "who"], ["is bored", "does"], ["in the car", "where"], ["on Sunday", "when"]]}
   ]
  },
  {
   "e": "😋", "title": "Hungry Boy",
   "steps": [
    {"tr": [["Acıkır.", "does"]], "en": [["gets hungry", "does"]]},
    {"tr": [["Mert", "who"], ["acıkır.", "does"]], "en": [["Mert", "who"], ["gets hungry", "does"]]},
    {"tr": [["Mert", "who"], ["parkta", "where"], ["acıkır.", "does"]], "en": [["Mert", "who"], ["gets hungry", "does"], ["in the park", "where"]]},
    {"tr": [["Mert", "who"], ["öğleden sonra", "when"], ["parkta", "where"], ["acıkır.", "does"]], "en": [["Mert", "who"], ["gets hungry", "does"], ["in the park", "where"], ["in the afternoon", "when"]]}
   ]
  }
 ]
});
// ---------- Ünite 14 ----------
UNITS_A1.push({
 "L": {
  "rank": "Health Hero",
  "theme": "Health",
  "tr": "Sağlık",
  "icon": "🩺",
  "song": {
   "title": "Feel Better Soon",
   "lines": [
    "Oh dear, oh dear, I've got a <b>cold</b>,",
    "Drink warm tea, do as you're told,",
    "Take your <b>medicine</b> and <b>rest</b> in bed,",
    "Soon you'll feel better, sleepy head!"
   ]
  },
  "cards": [
   {"e": "🤕", "w": "headache", "ipa": "/ˈhɛdeɪk/", "tr": "Baş ağrısı", "ex": "I've got a headache."},
   {"e": "🦷", "w": "toothache", "ipa": "/ˈtuθeɪk/", "tr": "Diş ağrısı", "ex": "She's got a toothache, so she must see the dentist."},
   {"e": "👂", "w": "earache", "ipa": "/ˈɪreɪk/", "tr": "Kulak ağrısı", "ex": "What's the matter? I've got an earache."},
   {"e": "🤧", "w": "cold", "ipa": "/koʊld/", "tr": "Nezle", "ex": "I've got a cold, so I should stay at home."},
   {"e": "😷", "w": "cough", "ipa": "/kɔf/", "tr": "Öksürük", "ex": "He's got a bad cough."},
   {"e": "🌡️", "w": "fever", "ipa": "/ˈfivər/", "tr": "Ateş", "ex": "You've got a fever, so you must rest."},
   {"e": "💊", "w": "medicine", "ipa": "/ˈmɛdɪsən/", "tr": "İlaç", "ex": "You must take your medicine."},
   {"e": "🛏️", "w": "rest", "ipa": "/rɛst/", "tr": "Dinlenmek", "ex": "You should rest in bed."}
  ],
  "tasks": [
   {
    "type": "song", "line": 0, "blank": "cold",
    "options": ["cold", "cough", "fever"],
    "hint": ["It rhymes with “told”. You sneeze and need warm tea.", "“told” ile kafiyeli. Hapşırırsın ve sıcak çay içersin."]
   },
   {
    "type": "pick",
    "q": "Which one is MEDICINE?",
    "tr": "Hangisi ilaç?",
    "options": [{"e": "🦷", "v": "toothache"}, {"e": "💊", "v": "medicine"}, {"e": "🌡️", "v": "fever"}, {"e": "👂", "v": "earache"}],
    "answer": "medicine",
    "hint": ["The doctor gives it to you when you are ill.", "Hastayken doktor sana verir."]
   },
   {
    "type": "listen",
    "say": "I've got a toothache. I must go to the dentist.",
    "q": "What's the matter?",
    "tr": "Sorun ne?",
    "options": [{"e": "🦷", "v": "toothache"}, {"e": "🤕", "v": "headache"}, {"e": "👂", "v": "earache"}],
    "answer": "toothache",
    "hint": ["Listen again: “I've got a t…”. Think of the dentist.", "Tekrar dinle: “I've got a t…”. Dişçiyi düşün."]
   },
   {
    "type": "write", "e": "🛏️",
    "sentence": "You ___ rest in bed.",
    "answer": "must",
    "mask": "M _ S T",
    "tr": "Yatakta dinlenmelisin.",
    "hint": ["Four letters. It means “you have to”: m - u - s - t.", "Dört harf. “Yapmak zorundasın” demek: m - u - s - t."]
   },
   {
    "type": "speak", "sentence": "I've got a headache.", "tr": "Başım ağrıyor."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 2, "blank": "medicine",
    "hint": ["You take it when you are ill. m - e - d - i - c - i - n - e", "Hastayken içersin. m - e - d - i - c - i - n - e"]
   },
   {
    "type": "dictation", "word": "cough", "e": "😷",
    "hint": ["It starts with “c”. It goes “ahem, ahem!”", "“c” ile başlıyor. “Öhö, öhö!” diye ses çıkarır."]
   },
   {
    "type": "order",
    "tr": "İlacını almalısın.",
    "answer": "You must take your medicine",
    "extra": "should",
    "hint": ["Start with: “You must …”", "Şöyle başla: “You must …”"]
   },
   {
    "type": "story",
    "say": "Deniz has a fever and a cough. Her mother says, You must stay in bed and drink warm tea. Deniz takes her medicine and rests.",
    "q": "What must Deniz do?",
    "tr": "Deniz ne yapmalı?",
    "options": ["go to school", "stay in bed", "play football"],
    "answer": "stay in bed",
    "hint": ["Listen to her mother: “You must …”", "Annesini dinle: “You must …”"]
   },
   {
    "type": "speakTr", "tr": "Kulağım ağrıyor.", "answer": "I've got an earache."
   }
  ]
 },
 "songs": [
  {
   "title": "What's the Matter?",
   "lines": [
    "What's the matter? What's the matter?",
    "I've got a <b>headache</b>, it's no joke,",
    "Close your eyes and <b>rest</b> a while,",
    "Soon you'll get your happy smile!"
   ]
  },
  {
   "title": "Sparkly Teeth",
   "lines": [
    "Ouch, ouch, a <b>toothache</b>, oh no!",
    "Go to the dentist, don't be slow,",
    "Brush your teeth, no sweets at night,",
    "Smile so wide and smile so bright!"
   ]
  },
  {
   "title": "Cough, Cough, Cough",
   "lines": [
    "I've got a <b>cough</b>, cough, cough,",
    "And a <b>fever</b>, I feel hot, hot, hot,",
    "Warm tea and honey, drink it all,",
    "Rest in bed, you'll feel well, that's all!"
   ]
  },
  {
   "title": "Doctor, Doctor",
   "lines": [
    "Doctor, doctor, I've got an <b>earache</b>,",
    "Take your <b>medicine</b>, for goodness' sake,",
    "You must rest and you should sleep,",
    "Then you'll jump and run and leap!"
   ]
  }
 ],
 "reading": {
  "title": "Mert Has a Cold",
  "e": "🤧",
  "lines": [
    ["Mert is not at school today.", "Mert bugün okulda değil."],
    ["He has got a cold and a bad cough.", "Nezle ve kötü bir öksürüğü var."],
    ["His mother takes him to the doctor.", "Annesi onu doktora götürür."],
    ["The doctor says, \"You've got a fever, Mert.\"", "Doktor, \"Ateşin var Mert\" der."],
    ["\"You must take your medicine and rest in bed.\"", "\"İlacını almalı ve yatakta dinlenmelisin.\""],
    ["\"You should drink warm tea, too.\"", "\"Sıcak çay da içmelisin.\""],
    ["Mert rests for three days.", "Mert üç gün dinlenir."],
    ["Now he feels better and goes back to school.", "Şimdi daha iyi hisseder ve okula geri döner."]
  ],
  "qs": [
   {"q": "What is the matter with Mert?", "tr": "Mert'in neyi var?", "options": ["He has got a cold and a cough.", "He has got a toothache.", "He has got an earache."], "answer": "He has got a cold and a cough."},
   {"q": "What must Mert do?", "tr": "Mert ne yapmalı?", "options": ["Play outside.", "Take his medicine.", "Go to school."], "answer": "Take his medicine."},
   {"q": "How long does Mert rest?", "tr": "Mert ne kadar dinlenir?", "options": ["one day", "three days", "a week"], "answer": "three days"}
  ]
 },
 "listening": [
  {
   "say": "I've got a headache. I should lie down.",
   "q": "What's the matter?", "tr": "Sorun ne?",
   "options": [{"e": "🤕", "v": "headache"}, {"e": "🦷", "v": "toothache"}, {"e": "👂", "v": "earache"}],
   "answer": "headache"
  },
  {
   "say": "You've got a fever. You must stay in bed.",
   "q": "What must she do?", "tr": "Ne yapmalı?",
   "options": [{"e": "🛏️", "v": "stay in bed"}, {"e": "⚽", "v": "play football"}, {"e": "🏫", "v": "go to school"}],
   "answer": "stay in bed"
  },
  {
   "say": "He's got a cough. He should drink warm tea.",
   "q": "What should he drink?", "tr": "Ne içmeli?",
   "options": [{"e": "🍵", "v": "warm tea"}, {"e": "🥤", "v": "cold juice"}, {"e": "🥛", "v": "milk"}],
   "answer": "warm tea"
  },
  {
   "say": "I've got an earache. I must see the doctor.",
   "q": "Who must he see?", "tr": "Kimi görmeli?",
   "options": [{"e": "👩‍⚕️", "v": "the doctor"}, {"e": "🧑‍🍳", "v": "the cook"}, {"e": "🧑‍🏫", "v": "the teacher"}],
   "answer": "the doctor"
  },
  {
   "say": "Take your medicine after lunch.",
   "q": "When must you take it?", "tr": "Ne zaman almalısın?",
   "options": [{"e": "🍽️", "v": "after lunch"}, {"e": "🌅", "v": "in the morning"}, {"e": "🌙", "v": "at night"}],
   "answer": "after lunch"
  }
 ],
 "speaking": [
  {"e": "❓", "en": "What's the matter?", "tr": "Sorun ne?"},
  {"e": "🤕", "en": "I've got a headache.", "tr": "Başım ağrıyor."},
  {"e": "💊", "en": "You must take your medicine.", "tr": "İlacını almalısın."},
  {"e": "🛏️", "en": "You should rest in bed.", "tr": "Yatakta dinlenmelisin."},
  {"e": "🌡️", "en": "I've got a fever and a cough.", "tr": "Ateşim ve öksürüğüm var."}
 ],
 "write": {
  "title": "At the Doctor's",
  "en": "You are ill. Write what is the matter and what you must do.",
  "tr": "Hastasın. Sorunun ne olduğunu ve ne yapman gerektiğini yaz.",
  "starters": ["I've got a", "I feel", "I must", "I should", "Then I will"],
  "checks": [
   {"re": /\b(i've got|i have got|i have|he's got|she's got) (a|an) (bad |terrible )?(headache|toothache|earache|cold|cough|fever)/, "t": "Hastalığını söyle (I've got a headache)"},
   {"re": /\b(must|should)\b/, "t": "must ya da should kullan"}
  ],
  "model": "I've got a bad cold and a cough. I feel tired. I must take my medicine every day. I should drink warm tea and rest in bed. I must stay at home, so I can't go to school. I'll feel better soon."
 },
 "towers": [
  {
   "e": "🦷", "title": "At the Dentist",
   "steps": [
    {"tr": [["Dişçiye gider.", "does"]], "en": [["goes to the dentist", "does"]]},
    {"tr": [["Ece", "who"], ["dişçiye gider.", "does"]], "en": [["Ece", "who"], ["goes to the dentist", "does"]]},
    {"tr": [["Ece", "who"], ["hastanede", "where"], ["dişçiye gider.", "does"]], "en": [["Ece", "who"], ["goes to the dentist", "does"], ["at the clinic", "where"]]},
    {"tr": [["Ece", "who"], ["pazartesi", "when"], ["hastanede", "where"], ["dişçiye gider.", "does"]], "en": [["Ece", "who"], ["goes to the dentist", "does"], ["at the clinic", "where"], ["on Monday", "when"]]}
   ]
  },
  {
   "e": "🛏️", "title": "Time to Rest",
   "steps": [
    {"tr": [["Dinlenir.", "does"]], "en": [["rests", "does"]]},
    {"tr": [["Can", "who"], ["dinlenir.", "does"]], "en": [["Can", "who"], ["rests", "does"]]},
    {"tr": [["Can", "who"], ["yatakta", "where"], ["dinlenir.", "does"]], "en": [["Can", "who"], ["rests", "does"], ["in bed", "where"]]},
    {"tr": [["Can", "who"], ["bütün gün", "when"], ["yatakta", "where"], ["dinlenir.", "does"]], "en": [["Can", "who"], ["rests", "does"], ["in bed", "where"], ["all day", "when"]]}
   ]
  },
  {
   "e": "💊", "title": "Medicine Time",
   "steps": [
    {"tr": [["İlacını alır.", "does"]], "en": [["takes her medicine", "does"]]},
    {"tr": [["Elif", "who"], ["ilacını alır.", "does"]], "en": [["Elif", "who"], ["takes her medicine", "does"]]},
    {"tr": [["Elif", "who"], ["mutfakta", "where"], ["ilacını alır.", "does"]], "en": [["Elif", "who"], ["takes her medicine", "does"], ["in the kitchen", "where"]]},
    {"tr": [["Elif", "who"], ["yemekten sonra", "when"], ["mutfakta", "where"], ["ilacını alır.", "does"]], "en": [["Elif", "who"], ["takes her medicine", "does"], ["in the kitchen", "where"], ["after lunch", "when"]]}
   ]
  }
 ]
});
// ---------- Ünite 15 ----------
UNITS_A1.push({
 "L": {
  "rank": "Jungle Ranger",
  "theme": "Wild Animals",
  "tr": "Vahşi Hayvanlar",
  "icon": "🦁",
  "song": {
   "title": "Big and Small",
   "lines": [
    "The <b>lion</b> is bigger than the cat,",
    "The <b>whale</b> is bigger than that!",
    "The <b>penguin</b> is smaller, small and sweet,",
    "Waddle, waddle, on little feet!"
   ]
  },
  "cards": [
   {
    "e": "🦁",
    "w": "lion",
    "ipa": "/ˈlaɪən/",
    "tr": "Aslan",
    "ex": "A lion is bigger than a cat."
   },
   {
    "e": "🐻",
    "w": "bear",
    "ipa": "/bɛr/",
    "tr": "Ayı",
    "ex": "A bear is stronger than a dog."
   },
   {
    "e": "🦘",
    "w": "kangaroo",
    "ipa": "/ˌkæŋɡəˈru/",
    "tr": "Kanguru",
    "ex": "A kangaroo is faster than me."
   },
   {
    "e": "🐧",
    "w": "penguin",
    "ipa": "/ˈpɛŋɡwɪn/",
    "tr": "Penguen",
    "ex": "A penguin is smaller than a bear."
   },
   {
    "e": "🐋",
    "w": "whale",
    "ipa": "/weɪl/",
    "tr": "Balina",
    "ex": "A whale is bigger than a shark."
   },
   {
    "e": "🦈",
    "w": "shark",
    "ipa": "/ʃɑrk/",
    "tr": "Köpekbalığı",
    "ex": "A shark is faster than a turtle."
   },
   {
    "e": "🐼",
    "w": "panda",
    "ipa": "/ˈpændə/",
    "tr": "Panda",
    "ex": "A panda is slower than a tiger."
   },
   {
    "e": "🐅",
    "w": "tiger",
    "ipa": "/ˈtaɪɡər/",
    "tr": "Kaplan",
    "ex": "A tiger is stronger than a monkey."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "whale",
    "options": [
     "whale",
     "penguin",
     "panda"
    ],
    "hint": [
     "It lives in the sea and it is bigger than a lion.",
     "Denizde yaşar ve aslandan daha büyüktür."
    ]
   },
   {
    "type": "pick",
    "q": "I am black and white. I eat bamboo all day. Which animal am I?",
    "tr": "Ben siyah beyazım. Bütün gün bambu yerim. Ben hangi hayvanım?",
    "options": [
     {
      "e": "🐼",
      "v": "panda"
     },
     {
      "e": "🦘",
      "v": "kangaroo"
     },
     {
      "e": "🐋",
      "v": "whale"
     },
     {
      "e": "🐅",
      "v": "tiger"
     }
    ],
    "answer": "panda",
    "hint": [
     "Think of bamboo and a round, soft animal.",
     "Bambuyu ve yuvarlak, tüylü hayvanı düşün."
    ]
   },
   {
    "type": "listen",
    "say": "I am very big. I live in the sea. I am bigger than a shark. What am I?",
    "q": "Which animal is it?",
    "tr": "Bu hangi hayvan?",
    "options": [
     {
      "e": "🐋",
      "v": "whale"
     },
     {
      "e": "🦈",
      "v": "shark"
     },
     {
      "e": "🐧",
      "v": "penguin"
     }
    ],
    "answer": "whale",
    "hint": [
     "Listen again: “bigger than a shark”.",
     "Tekrar dinle: “bigger than a shark”."
    ]
   },
   {
    "type": "write",
    "e": "🦁",
    "sentence": "A lion is ___ than a cat.",
    "answer": "bigger",
    "mask": "B _ G G _ R",
    "tr": "Aslan kediden daha büyüktür.",
    "hint": [
     "Six letters: b - i - g - g - e - r.",
     "Altı harf: b - i - g - g - e - r."
    ]
   },
   {
    "type": "speak",
    "sentence": "The tiger is faster than the bear.",
    "tr": "Kaplan ayıdan daha hızlıdır."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "penguin",
    "hint": [
     "A black and white bird that cannot fly. p - e - n - g - u - i - n",
     "Uçamayan siyah beyaz bir kuş: p - e - n - g - u - i - n"
    ]
   },
   {
    "type": "dictation",
    "word": "kangaroo",
    "e": "🦘",
    "hint": [
     "It starts with “k”. It jumps and has a pocket for its baby.",
     "“k” ile başlıyor. Zıplar ve yavrusu için bir cebi vardır."
    ]
   },
   {
    "type": "order",
    "tr": "Kaplan ayıdan daha hızlıdır.",
    "answer": "The tiger is faster than the bear",
    "extra": "slower",
    "hint": [
     "Start with: “The tiger …”",
     "Şöyle başla: “The tiger …”"
    ]
   },
   {
    "type": "story",
    "say": "A kangaroo is fast. A panda is slow. A turtle is slower than a panda. A tiger is faster than a kangaroo.",
    "q": "Who is faster than the kangaroo?",
    "tr": "Kanguru'dan daha hızlı olan kim?",
    "options": [
     "the tiger",
     "the panda",
     "the turtle"
    ],
    "answer": "the tiger",
    "hint": [
     "Listen for the last sentence: “faster than a kangaroo”.",
     "Son cümleyi dinle: “faster than a kangaroo”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Balina köpekbalığından daha büyüktür.",
    "answer": "A whale is bigger than a shark."
   }
  ]
 },
 "songs": [
  {
   "title": "Tiger, Tiger, Faster",
   "lines": [
    "The <b>tiger</b> is faster than the bear,",
    "The <b>kangaroo</b> jumps up in the air,",
    "The <b>panda</b> is slower, chewing all day,",
    "Which one is faster? Let’s all play!"
   ]
  },
  {
   "title": "Under the Sea",
   "lines": [
    "The <b>shark</b> is faster than a fish,",
    "Swish, swish, swish, swish, swish!",
    "The <b>whale</b> is bigger than a boat,",
    "Splash and sing, it loves to float!"
   ]
  },
  {
   "title": "Panda Picnic",
   "lines": [
    "The <b>panda</b> is slower than me,",
    "It sits and eats beneath a tree,",
    "The <b>bear</b> is stronger, the cub is small,",
    "But I like them, one and all!"
   ]
  },
  {
   "title": "Penguin Parade",
   "lines": [
    "The <b>penguin</b> is smaller than a bear,",
    "Waddle, waddle, here and there,",
    "The <b>lion</b> is louder than a bee,",
    "Roar, roar, roar! Come see, come see!"
   ]
  }
 ],
 "reading": {
  "title": "Deniz at the Zoo",
  "e": "🦁",
  "lines": [
   [
    "Deniz and his sister Ece go to the zoo on Saturday.",
    "Deniz ve kız kardeşi Ece cumartesi günü hayvanat bahçesine gider."
   ],
   [
    "First, they see a lion. It is bigger than their cat at home.",
    "Önce bir aslan görürler. Evdeki kedilerinden daha büyüktür."
   ],
   [
    "Then they see a kangaroo. It is faster than Deniz!",
    "Sonra bir kanguru görürler. Deniz'den daha hızlıdır!"
   ],
   [
    "Deniz laughs. “I am slower than a kangaroo!”",
    "Deniz güler. “Ben kangurudan daha yavaşım!”"
   ],
   [
    "Next, they see a panda. It is slower than the kangaroo.",
    "Sonra bir panda görürler. Kangurudan daha yavaştır."
   ],
   [
    "The panda eats bamboo all day.",
    "Panda bütün gün bambu yer."
   ],
   [
    "At the end, they see a penguin. It is smaller than the panda.",
    "En sonunda bir penguen görürler. Pandadan daha küçüktür."
   ],
   [
    "Ece smiles. “I like the penguin!”",
    "Ece gülümser. “Ben pengueni sevdim!”"
   ]
  ],
  "qs": [
   {
    "q": "When do Deniz and Ece go to the zoo?",
    "tr": "Deniz ve Ece hayvanat bahçesine ne zaman gider?",
    "options": [
     "on Saturday",
     "on Sunday",
     "on Monday"
    ],
    "answer": "on Saturday"
   },
   {
    "q": "Which animal is faster than Deniz?",
    "tr": "Hangi hayvan Deniz'den daha hızlıdır?",
    "options": [
     "the kangaroo",
     "the panda",
     "the penguin"
    ],
    "answer": "the kangaroo"
   },
   {
    "q": "Which animal is slower than the kangaroo?",
    "tr": "Hangi hayvan kangurudan daha yavaştır?",
    "options": [
     "the panda",
     "the lion",
     "the cat"
    ],
    "answer": "the panda"
   }
  ]
 },
 "listening": [
  {
   "say": "A lion is bigger than a cat.",
   "q": "Which animal is bigger?",
   "tr": "Hangi hayvan daha büyük?",
   "options": [
    {
     "e": "🦁",
     "v": "lion"
    },
    {
     "e": "🐱",
     "v": "cat"
    },
    {
     "e": "🐭",
     "v": "mouse"
    }
   ],
   "answer": "lion"
  },
  {
   "say": "The kangaroo is faster than the turtle.",
   "q": "Which animal is slower?",
   "tr": "Hangi hayvan daha yavaş?",
   "options": [
    {
     "e": "🦘",
     "v": "kangaroo"
    },
    {
     "e": "🐢",
     "v": "turtle"
    },
    {
     "e": "🐼",
     "v": "panda"
    }
   ],
   "answer": "turtle"
  },
  {
   "say": "The penguin is smaller than the bear.",
   "q": "Which animal is smaller?",
   "tr": "Hangi hayvan daha küçük?",
   "options": [
    {
     "e": "🐧",
     "v": "penguin"
    },
    {
     "e": "🐻",
     "v": "bear"
    },
    {
     "e": "🦁",
     "v": "lion"
    }
   ],
   "answer": "penguin"
  },
  {
   "say": "The shark is faster than the whale.",
   "q": "Which animal is faster?",
   "tr": "Hangi hayvan daha hızlı?",
   "options": [
    {
     "e": "🦈",
     "v": "shark"
    },
    {
     "e": "🐋",
     "v": "whale"
    },
    {
     "e": "🐢",
     "v": "turtle"
    }
   ],
   "answer": "shark"
  },
  {
   "say": "I like the tiger. It is stronger than the panda.",
   "q": "Which animal is stronger?",
   "tr": "Hangi hayvan daha güçlü?",
   "options": [
    {
     "e": "🐅",
     "v": "tiger"
    },
    {
     "e": "🐼",
     "v": "panda"
    },
    {
     "e": "🐧",
     "v": "penguin"
    }
   ],
   "answer": "tiger"
  }
 ],
 "speaking": [
  {
   "e": "🦁",
   "en": "A lion is bigger than a cat.",
   "tr": "Aslan kediden daha büyüktür."
  },
  {
   "e": "🐻",
   "en": "A bear is stronger than a dog.",
   "tr": "Ayı köpekten daha güçlüdür."
  },
  {
   "e": "🦘",
   "en": "A kangaroo is faster than me.",
   "tr": "Kanguru benden daha hızlıdır."
  },
  {
   "e": "🐧",
   "en": "A penguin is smaller than a bear.",
   "tr": "Penguen ayıdan daha küçüktür."
  },
  {
   "e": "🐋",
   "en": "A whale is bigger than a shark.",
   "tr": "Balina köpekbalığından daha büyüktür."
  }
 ],
 "write": {
  "title": "My Favourite Wild Animal",
  "en": "Compare two wild animals. Which one is bigger, faster or slower?",
  "tr": "İki vahşi hayvanı karşılaştır. Hangisi daha büyük, daha hızlı ya da daha yavaş?",
  "starters": [
   "My favourite animal is",
   "It is bigger than",
   "It is faster than",
   "It is slower than",
   "I like it because"
  ],
  "checks": [
   {
    "re": /\b\w+er than\b/,
    "t": "Karşılaştırma yap (bigger than, faster than…)"
   },
   {
    "re": /\bbecause\b/,
    "t": "Nedenini söyle (because …)"
   }
  ],
  "model": "My favourite animal is the panda. It is bigger than a dog, but it is smaller than a whale. A panda is slower than a tiger. A tiger is faster than a panda. I like the panda because it is soft and sweet."
 },
 "towers": [
  {
   "e": "🦘",
   "title": "The Happy Kangaroo",
   "steps": [
    {
     "tr": [
      [
       "yüksek zıplar.",
       "does"
      ]
     ],
     "en": [
      [
       "jumps high",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kanguru",
       "who"
      ],
      [
       "yüksek zıplar.",
       "does"
      ]
     ],
     "en": [
      [
       "The kangaroo",
       "who"
      ],
      [
       "jumps high",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kanguru",
       "who"
      ],
      [
       "hayvanat bahçesinde",
       "where"
      ],
      [
       "yüksek zıplar.",
       "does"
      ]
     ],
     "en": [
      [
       "The kangaroo",
       "who"
      ],
      [
       "jumps high",
       "does"
      ],
      [
       "in the zoo",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kanguru",
       "who"
      ],
      [
       "her sabah",
       "when"
      ],
      [
       "hayvanat bahçesinde",
       "where"
      ],
      [
       "yüksek zıplar.",
       "does"
      ]
     ],
     "en": [
      [
       "The kangaroo",
       "who"
      ],
      [
       "jumps high",
       "does"
      ],
      [
       "in the zoo",
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
   "e": "🐧",
   "title": "The Cold Swimmer",
   "steps": [
    {
     "tr": [
      [
       "hızlı yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "swims fast",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Penguen",
       "who"
      ],
      [
       "hızlı yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "The penguin",
       "who"
      ],
      [
       "swims fast",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Penguen",
       "who"
      ],
      [
       "soğuk suda",
       "where"
      ],
      [
       "hızlı yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "The penguin",
       "who"
      ],
      [
       "swims fast",
       "does"
      ],
      [
       "in the cold water",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Penguen",
       "who"
      ],
      [
       "her öğleden sonra",
       "when"
      ],
      [
       "soğuk suda",
       "where"
      ],
      [
       "hızlı yüzer.",
       "does"
      ]
     ],
     "en": [
      [
       "The penguin",
       "who"
      ],
      [
       "swims fast",
       "does"
      ],
      [
       "in the cold water",
       "where"
      ],
      [
       "every afternoon",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🐋",
   "title": "The Sleepy Whale",
   "steps": [
    {
     "tr": [
      [
       "uyur.",
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
       "Büyük balina",
       "who"
      ],
      [
       "uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The big whale",
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
       "Büyük balina",
       "who"
      ],
      [
       "mavi denizde",
       "where"
      ],
      [
       "uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The big whale",
       "who"
      ],
      [
       "sleeps",
       "does"
      ],
      [
       "in the blue sea",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Büyük balina",
       "who"
      ],
      [
       "geceleri",
       "when"
      ],
      [
       "mavi denizde",
       "where"
      ],
      [
       "uyur.",
       "does"
      ]
     ],
     "en": [
      [
       "The big whale",
       "who"
      ],
      [
       "sleeps",
       "does"
      ],
      [
       "in the blue sea",
       "where"
      ],
      [
       "at night",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 16 ----------
UNITS_A1.push({
 "L": {
  "rank": "Nature Scout",
  "theme": "Nature",
  "tr": "Doğa",
  "icon": "🏔️",
  "song": {
   "title": "The Biggest and the Best",
   "lines": [
    "The <b>mountain</b> is the highest, standing tall,",
    "The <b>river</b> is the longest of them all,",
    "The <b>forest</b> is the greenest, come and see,",
    "Nature is the best place to be!"
   ]
  },
  "cards": [
   {
    "e": "🏔️",
    "w": "mountain",
    "ipa": "/ˈmaʊntn̩/",
    "tr": "Dağ",
    "ex": "Mount Everest is the highest mountain."
   },
   {
    "e": "🏞️",
    "w": "river",
    "ipa": "/ˈrɪvər/",
    "tr": "Nehir",
    "ex": "The river is the longest in our town."
   },
   {
    "e": "🛶",
    "w": "lake",
    "ipa": "/leɪk/",
    "tr": "Göl",
    "ex": "The lake is the deepest here."
   },
   {
    "e": "🌲",
    "w": "forest",
    "ipa": "/ˈfɔrəst/",
    "tr": "Orman",
    "ex": "The forest is the greenest place."
   },
   {
    "e": "🏝️",
    "w": "island",
    "ipa": "/ˈaɪlənd/",
    "tr": "Ada",
    "ex": "That island is the smallest."
   },
   {
    "e": "🏖️",
    "w": "beach",
    "ipa": "/bitʃ/",
    "tr": "Kumsal",
    "ex": "The beach is the warmest place."
   },
   {
    "e": "💦",
    "w": "waterfall",
    "ipa": "/ˈwɔtərˌfɔl/",
    "tr": "Şelale",
    "ex": "The waterfall is the highest here."
   },
   {
    "e": "🌴",
    "w": "jungle",
    "ipa": "/ˈdʒʌŋɡəl/",
    "tr": "Cungla",
    "ex": "The jungle is the wettest place."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "river",
    "options": [
     "river",
     "lake",
     "beach"
    ],
    "hint": [
     "Water flows in it, and it is very long.",
     "İçinde su akar ve çok uzundur."
    ]
   },
   {
    "type": "pick",
    "q": "Water falls down from high rocks. What is it?",
    "tr": "Su yüksek kayalardan aşağı düşer. Bu nedir?",
    "options": [
     {
      "e": "💦",
      "v": "waterfall"
     },
     {
      "e": "🏖️",
      "v": "beach"
     },
     {
      "e": "🌲",
      "v": "forest"
     },
     {
      "e": "🏔️",
      "v": "mountain"
     }
    ],
    "answer": "waterfall",
    "hint": [
     "Splash! Water goes down, down, down.",
     "Şıpır şıpır! Su aşağı, aşağı akar."
    ]
   },
   {
    "type": "listen",
    "say": "I like the beach. It is the warmest place in summer. I play in the sand.",
    "q": "Where am I?",
    "tr": "Neredeyim?",
    "options": [
     {
      "e": "🏖️",
      "v": "beach"
     },
     {
      "e": "🏔️",
      "v": "mountain"
     },
     {
      "e": "🌲",
      "v": "forest"
     }
    ],
    "answer": "beach",
    "hint": [
     "Listen for “sand”. Where do you find sand?",
     "“sand” kelimesini dinle. Kumu nerede bulursun?"
    ]
   },
   {
    "type": "write",
    "e": "🏔️",
    "sentence": "Mount Ararat is the ___ mountain in Türkiye.",
    "answer": "highest",
    "mask": "H _ G H _ S T",
    "tr": "Ağrı Dağı Türkiye'nin en yüksek dağıdır.",
    "hint": [
     "Seven letters: h - i - g - h - e - s - t.",
     "Yedi harf: h - i - g - h - e - s - t."
    ]
   },
   {
    "type": "speak",
    "sentence": "The mountain is the highest here.",
    "tr": "Dağ buradaki en yüksek yerdir."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "forest",
    "hint": [
     "A place with lots of trees. f - o - r - e - s - t",
     "Bir sürü ağaç olan yer: f - o - r - e - s - t"
    ]
   },
   {
    "type": "dictation",
    "word": "island",
    "e": "🏝️",
    "hint": [
     "It starts with “i”. Water is all around it.",
     "“i” ile başlıyor. Etrafı sularla çevrilidir."
    ]
   },
   {
    "type": "order",
    "tr": "Orman en yeşil yerdir.",
    "answer": "The forest is the greenest place",
    "extra": "bigger",
    "hint": [
     "Start with: “The forest …”",
     "Şöyle başla: “The forest …”"
    ]
   },
   {
    "type": "story",
    "say": "We visit three places. The beach is the warmest. The lake is the calmest. The mountain is the coldest. I like the warm place best.",
    "q": "Which place does the child like best?",
    "tr": "Çocuk en çok hangi yeri sever?",
    "options": [
     "the beach",
     "the lake",
     "the mountain"
    ],
    "answer": "the beach",
    "hint": [
     "Which place is warm? Listen for “warmest”.",
     "Hangi yer sıcak? “warmest” kelimesini dinle."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Orman en sessiz yerdir.",
    "answer": "The forest is the quietest place."
   }
  ]
 },
 "songs": [
  {
   "title": "Sunny Beach",
   "lines": [
    "The <b>beach</b> is the warmest place to play,",
    "Sand and sea on a sunny day,",
    "The <b>island</b> is the farthest I can see,",
    "A little boat will take me!"
   ]
  },
  {
   "title": "Waterfall Song",
   "lines": [
    "The <b>waterfall</b> is the loudest, splash, splash, splash!",
    "Down the rocks with a happy dash,",
    "The <b>lake</b> is the calmest, still and blue,",
    "Reflecting clouds and me and you!"
   ]
  },
  {
   "title": "Into the Green",
   "lines": [
    "The <b>jungle</b> is the greenest, wet and deep,",
    "Parrots sing and monkeys leap,",
    "The <b>forest</b> is the quietest, shh, be still,",
    "Listen to the trees on the hill!"
   ]
  },
  {
   "title": "Mountain Climb",
   "lines": [
    "Climb the <b>mountain</b>, up we go,",
    "It’s the highest, with the snow,",
    "Down by the <b>lake</b> we stop and rest,",
    "Nature is the very best!"
   ]
  }
 ],
 "reading": {
  "title": "Can's Camping Trip",
  "e": "⛺",
  "lines": [
   [
    "Can and his father go camping near a lake.",
    "Can ve babası bir gölün yanında kampa gider."
   ],
   [
    "The lake is the calmest place Can knows.",
    "Göl, Can'ın bildiği en sakin yerdir."
   ],
   [
    "In the morning, they walk through the forest.",
    "Sabah ormanın içinden yürürler."
   ],
   [
    "It is very green and very quiet.",
    "Orman çok yeşil ve çok sessizdir."
   ],
   [
    "Then they climb the highest hill.",
    "Sonra en yüksek tepeye tırmanırlar."
   ],
   [
    "From the top, Can sees a long river.",
    "Tepeden Can uzun bir nehir görür."
   ],
   [
    "They have lunch next to a waterfall.",
    "Öğle yemeğini bir şelalenin yanında yerler."
   ],
   [
    "Can smiles. “Nature is the best!”",
    "Can gülümser. “Doğa en güzeli!”"
   ]
  ],
  "qs": [
   {
    "q": "Where do Can and his father go camping?",
    "tr": "Can ve babası nerede kamp yapar?",
    "options": [
     "near a lake",
     "on a beach",
     "on an island"
    ],
    "answer": "near a lake"
   },
   {
    "q": "What does Can see from the top?",
    "tr": "Can tepeden ne görür?",
    "options": [
     "a river",
     "an island",
     "a jungle"
    ],
    "answer": "a river"
   },
   {
    "q": "Where do they have lunch?",
    "tr": "Öğle yemeğini nerede yerler?",
    "options": [
     "next to a waterfall",
     "next to the lake",
     "on the beach"
    ],
    "answer": "next to a waterfall"
   }
  ]
 },
 "listening": [
  {
   "say": "The mountain is the highest place here.",
   "q": "Which place is the highest?",
   "tr": "Hangi yer en yüksek?",
   "options": [
    {
     "e": "🏔️",
     "v": "mountain"
    },
    {
     "e": "🏖️",
     "v": "beach"
    },
    {
     "e": "🌲",
     "v": "forest"
    }
   ],
   "answer": "mountain"
  },
  {
   "say": "The jungle is the wettest place.",
   "q": "Which place is the wettest?",
   "tr": "Hangi yer en ıslak?",
   "options": [
    {
     "e": "🌴",
     "v": "jungle"
    },
    {
     "e": "🏔️",
     "v": "mountain"
    },
    {
     "e": "🏖️",
     "v": "beach"
    }
   ],
   "answer": "jungle"
  },
  {
   "say": "The river is the longest in our country.",
   "q": "What is the longest?",
   "tr": "En uzun olan hangisi?",
   "options": [
    {
     "e": "🏞️",
     "v": "river"
    },
    {
     "e": "🌲",
     "v": "forest"
    },
    {
     "e": "🏝️",
     "v": "island"
    }
   ],
   "answer": "river"
  },
  {
   "say": "My family goes to the island by boat. It is the farthest place.",
   "q": "How does the family go to the island?",
   "tr": "Aile adaya nasıl gidiyor?",
   "options": [
    {
     "e": "🚤",
     "v": "boat"
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
   "answer": "boat"
  },
  {
   "say": "The waterfall is the loudest place in the forest.",
   "q": "What is the loudest?",
   "tr": "En gürültülü olan hangisi?",
   "options": [
    {
     "e": "💦",
     "v": "waterfall"
    },
    {
     "e": "🌲",
     "v": "forest"
    },
    {
     "e": "🛶",
     "v": "lake"
    }
   ],
   "answer": "waterfall"
  }
 ],
 "speaking": [
  {
   "e": "🏔️",
   "en": "The mountain is the highest here.",
   "tr": "Dağ buradaki en yüksek yerdir."
  },
  {
   "e": "🏞️",
   "en": "The river is the longest in town.",
   "tr": "Nehir kasabadaki en uzun olandır."
  },
  {
   "e": "🌲",
   "en": "The forest is the greenest place.",
   "tr": "Orman en yeşil yerdir."
  },
  {
   "e": "🏖️",
   "en": "The beach is the warmest place.",
   "tr": "Kumsal en sıcak yerdir."
  },
  {
   "e": "💦",
   "en": "The waterfall is the loudest.",
   "tr": "Şelale en gürültülü olandır."
  }
 ],
 "write": {
  "title": "My Favourite Place",
  "en": "Write about your favourite place in nature. Use words like the highest, the biggest, the quietest.",
  "tr": "Doğadaki en sevdiğin yeri anlat. En yüksek, en büyük, en sessiz gibi sözcükler kullan.",
  "starters": [
   "My favourite place is",
   "It is the",
   "There is a",
   "I can see",
   "I like it because"
  ],
  "checks": [
   {
    "re": /\bthe \w+est\b/,
    "t": "En üstünlük kullan (the warmest, the highest…)"
   },
   {
    "re": /\bbecause\b/,
    "t": "Nedenini söyle (because …)"
   }
  ],
  "model": "My favourite place is the beach. It is the warmest place in summer. There is a small island near the beach. Behind it, there is a green forest and a long river. I like it because it is the most beautiful place for my family."
 },
 "towers": [
  {
   "e": "🏔️",
   "title": "The Mountain Climber",
   "steps": [
    {
     "tr": [
      [
       "tırmanır.",
       "does"
      ]
     ],
     "en": [
      [
       "climbs up",
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
       "tırmanır.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "climbs up",
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
       "dağa",
       "where"
      ],
      [
       "tırmanır.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "climbs up",
       "does"
      ],
      [
       "the mountain",
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
       "her yaz",
       "when"
      ],
      [
       "dağa",
       "where"
      ],
      [
       "tırmanır.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "climbs up",
       "does"
      ],
      [
       "the mountain",
       "where"
      ],
      [
       "every summer",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🏖️",
   "title": "Fun at the Beach",
   "steps": [
    {
     "tr": [
      [
       "oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "plays",
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
       "oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "plays",
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
       "kumsalda",
       "where"
      ],
      [
       "oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "plays",
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
       "Elif",
       "who"
      ],
      [
       "her hafta sonu",
       "when"
      ],
      [
       "kumsalda",
       "where"
      ],
      [
       "oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "plays",
       "does"
      ],
      [
       "on the beach",
       "where"
      ],
      [
       "every weekend",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🌲",
   "title": "A Walk in the Forest",
   "steps": [
    {
     "tr": [
      [
       "yürür.",
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
       "Deniz",
       "who"
      ],
      [
       "yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
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
       "Deniz",
       "who"
      ],
      [
       "ormanda",
       "where"
      ],
      [
       "yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "walks",
       "does"
      ],
      [
       "in the forest",
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
       "öğle yemeğinden sonra",
       "when"
      ],
      [
       "ormanda",
       "where"
      ],
      [
       "yürür.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "walks",
       "does"
      ],
      [
       "in the forest",
       "where"
      ],
      [
       "after lunch",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 17 ----------
UNITS_A1.push({
 L: {
  rank: "Home Builder", theme: "My Home", tr: "Evim", icon: "🏠",
  song: { title: "My Happy House", lines: [
   "Mum is in the <b>kitchen</b> making tea,",
   "I am in the <b>garden</b> by the tree,",
   "Up the <b>stairs</b> and down below,",
   "In my <b>bedroom</b> I say hello!" ] },
  cards: [
   { e: "🍳", w: "kitchen", ipa: "/ˈkɪtʃən/", tr: "Mutfak", ex: "Mum is in the kitchen." },
   { e: "🛁", w: "bathroom", ipa: "/ˈbæθˌrum/", tr: "Banyo", ex: "The bathroom is next to my bedroom." },
   { e: "🛏️", w: "bedroom", ipa: "/ˈbɛdˌrum/", tr: "Yatak odası", ex: "My bedroom is upstairs." },
   { e: "📺", w: "living room", ipa: "/ˈlɪvɪŋ rum/", tr: "Oturma odası", ex: "We watch TV in the living room." },
   { e: "🌳", w: "garden", ipa: "/ˈɡɑrdn/", tr: "Bahçe", ex: "The cat is in the garden." },
   { e: "🪜", w: "stairs", ipa: "/stɛrz/", tr: "Merdiven", ex: "The stairs are behind the door." },
   { e: "🛋️", w: "sofa", ipa: "/ˈsoʊfə/", tr: "Kanepe", ex: "The cat is on the sofa." },
   { e: "🪟", w: "window", ipa: "/ˈwɪndoʊ/", tr: "Pencere", ex: "My bed is under the window." }
  ],
  tasks: [
   { type: "song", line: 1, blank: "garden", options: ["kitchen", "garden", "bedroom"],
     hint: ["You can find trees and flowers here.", "Burada ağaçlar ve çiçekler vardır."] },
   { type: "pick", q: "Which room do you sleep in?", tr: "Hangi odada uyursun?",
     options: [{ e: "🍳", v: "kitchen" }, { e: "🛏️", v: "bedroom" }, { e: "🛁", v: "bathroom" }, { e: "🌳", v: "garden" }],
     answer: "bedroom", hint: ["There is a bed in this room. Zzz…", "Bu odada bir yatak var. Zzz…"] },
   { type: "listen", say: "Mum is in the kitchen. Dad is in the garden. I am in the bedroom.", q: "Where is Dad?", tr: "Baba nerede?",
     options: [{ e: "🍳", v: "kitchen" }, { e: "🌳", v: "garden" }, { e: "🛏️", v: "bedroom" }],
     answer: "garden", hint: ["Listen again: “Dad is in the g…”.", "Tekrar dinle: “Dad is in the g…”."] },
   { type: "write", e: "🛏️", sentence: "My bedroom is ___.", answer: "upstairs", mask: "U P _ _ _ _ R S", tr: "Yatak odam üst kattadır.",
     hint: ["Not downstairs! u - p - s - t - a - i - r - s", "Alt kat değil! u - p - s - t - a - i - r - s"] },
   { type: "speak", sentence: "My bedroom is upstairs.", tr: "Yatak odam üst kattadır." }
  ],
  hard: [
   { type: "songtype", line: 2, blank: "stairs", hint: ["You walk up and down them. s - t - a - i - r - s", "Onlardan yukarı aşağı yürürsün. s - t - a - i - r - s"] },
   { type: "dictation", word: "window", e: "🪟", hint: ["It starts with “w”. You look out of it.", "“w” ile başlıyor. Dışarıyı ondan izlersin."] },
   { type: "order", tr: "Kedi kanepenin arkasında.", answer: "The cat is behind the sofa", extra: "under",
     hint: ["Start with: “The cat …”", "Şöyle başla: “The cat …”"] },
   { type: "story", say: "Our house has two floors. The kitchen and the living room are downstairs. My bedroom is upstairs. The garden is behind the house.",
     q: "Where is the bedroom?", tr: "Yatak odası nerede?", options: ["downstairs", "upstairs", "in the garden"], answer: "upstairs",
     hint: ["Listen for “My bedroom is …”.", "“My bedroom is …” kısmını dinle."] },
   { type: "speakTr", tr: "Mutfak alt kattadır.", answer: "The kitchen is downstairs." }
  ]
 },
 songs: [
  { title: "Upstairs, Downstairs", lines: [
   "Upstairs, downstairs, up and down,",
   "Run up the <b>stairs</b>, I'm the king of the town,",
   "Downstairs, upstairs, down and up,",
   "Time for a snack in my little cup!" ] },
  { title: "Where Is the Cat?", lines: [
   "Where is the cat? It is on the <b>sofa</b>,",
   "Where is the cat? It is under the chair,",
   "Where is the cat? It is behind the <b>window</b>,",
   "Meow, meow, meow! The cat is everywhere!" ] },
  { title: "Rooms in My House", lines: [
   "Cook in the <b>kitchen</b>, wash in the <b>bathroom</b>,",
   "Sleep in the <b>bedroom</b>, snug and warm,",
   "Play in the <b>garden</b>, sing in the <b>living room</b>,",
   "Home is the place where I feel no harm." ] },
  { title: "Look Out of the Window", lines: [
   "Look out of the <b>window</b>, what can you see?",
   "A bird in the <b>garden</b> in the apple tree,",
   "A little blue butterfly next to the door,",
   "Look out of the <b>window</b> and see some more!" ] }
 ],
 reading: { title: "Can's New House", e: "🏠", lines: [
  ["Can has a new house with two floors.", "Can'ın iki katlı yeni bir evi var."],
  ["The kitchen and the living room are downstairs.", "Mutfak ve oturma odası alt kattadır."],
  ["There is a big sofa in the living room.", "Oturma odasında büyük bir kanepe var."],
  ["Can's bedroom is upstairs, next to the bathroom.", "Can'ın yatak odası üst kattadır, banyonun yanında."],
  ["His bed is under the window.", "Yatağı pencerenin altındadır."],
  ["Behind the house, there is a small garden.", "Evin arkasında küçük bir bahçe var."],
  ["Can's cat sleeps on the sofa every day.", "Can'ın kedisi her gün kanepede uyur."]
 ], qs: [
  { q: "Where is Can's bedroom?", tr: "Can'ın yatak odası nerede?", options: ["upstairs", "downstairs", "in the garden"], answer: "upstairs" },
  { q: "Where is his bed?", tr: "Yatağı nerede?", options: ["on the sofa", "under the window", "behind the house"], answer: "under the window" },
  { q: "Where does the cat sleep?", tr: "Kedi nerede uyur?", options: ["in the garden", "in the kitchen", "on the sofa"], answer: "on the sofa" }
 ] },
 listening: [
  { say: "The ball is under the sofa.", q: "Where is the ball?", tr: "Top nerede?",
    options: [{ e: "⬇️", v: "under the sofa" }, { e: "⬆️", v: "on the sofa" }, { e: "🔙", v: "behind the sofa" }], answer: "under the sofa" },
  { say: "My bedroom is upstairs.", q: "Where is the bedroom?", tr: "Yatak odası nerede?",
    options: [{ e: "⬆️", v: "upstairs" }, { e: "⬇️", v: "downstairs" }, { e: "🌳", v: "garden" }], answer: "upstairs" },
  { say: "We eat dinner in the kitchen.", q: "Where do they eat dinner?", tr: "Akşam yemeğini nerede yiyorlar?",
    options: [{ e: "🍳", v: "kitchen" }, { e: "🛁", v: "bathroom" }, { e: "📺", v: "living room" }], answer: "kitchen" },
  { say: "Look out of the window. I can see a bird in the garden.", q: "What can I see?", tr: "Ne görüyorum?",
    options: [{ e: "🐦", v: "bird" }, { e: "🐱", v: "cat" }, { e: "🐶", v: "dog" }], answer: "bird" },
  { say: "The bathroom is next to my bedroom.", q: "What is next to the bedroom?", tr: "Yatak odasının yanında ne var?",
    options: [{ e: "🛁", v: "bathroom" }, { e: "🍳", v: "kitchen" }, { e: "🪜", v: "stairs" }], answer: "bathroom" }
 ],
 speaking: [
  { e: "🍳", en: "Mum is in the kitchen.", tr: "Annem mutfakta." },
  { e: "🛏️", en: "My bedroom is upstairs.", tr: "Yatak odam üst kattadır." },
  { e: "🛋️", en: "The cat is on the sofa.", tr: "Kedi kanepenin üstünde." },
  { e: "🪟", en: "My bed is under the window.", tr: "Yatağım pencerenin altında." },
  { e: "🌳", en: "The garden is behind the house.", tr: "Bahçe evin arkasında." }
 ],
 write: { title: "My House", en: "Write about your home. Where are the rooms? What is in your bedroom?",
  tr: "Evini anlat: Odalar nerede? Yatak odanda neler var?",
  starters: ["I live in a house with", "Downstairs there is", "My bedroom is", "In my bedroom, there is a bed", "Behind the house, there is"],
  checks: [
   { re: /\b(in|on|under|behind|next to)\b/, t: "Yer bildiren kelime kullan (in, on, under, next to…)" },
   { re: /\b(upstairs|downstairs)\b/, t: "upstairs ya da downstairs kullan" }
  ],
  model: "I live in a house with a garden. Downstairs there is a big kitchen and a living room. My bedroom is upstairs, next to the bathroom. My bed is under the window. I love my home because it is warm and cosy." },
 towers: [
  { e: "🐱", title: "Sleepy Cat", steps: [
   { tr: [["Uyur.", "does"]], en: [["sleeps", "does"]] },
   { tr: [["Kedi", "who"], ["uyur.", "does"]], en: [["The cat", "who"], ["sleeps", "does"]] },
   { tr: [["Kedi", "who"], ["kanepede", "where"], ["uyur.", "does"]], en: [["The cat", "who"], ["sleeps", "does"], ["on the sofa", "where"]] },
   { tr: [["Kedi", "who"], ["her öğleden sonra", "when"], ["kanepede", "where"], ["uyur.", "does"]], en: [["The cat", "who"], ["sleeps", "does"], ["on the sofa", "where"], ["every afternoon", "when"]] }
  ] },
  { e: "🧸", title: "Playing Upstairs", steps: [
   { tr: [["Oynar.", "does"]], en: [["plays", "does"]] },
   { tr: [["Deniz", "who"], ["oynar.", "does"]], en: [["Deniz", "who"], ["plays", "does"]] },
   { tr: [["Deniz", "who"], ["üst katta", "where"], ["oynar.", "does"]], en: [["Deniz", "who"], ["plays", "does"], ["upstairs", "where"]] },
   { tr: [["Deniz", "who"], ["okuldan sonra", "when"], ["üst katta", "where"], ["oynar.", "does"]], en: [["Deniz", "who"], ["plays", "does"], ["upstairs", "where"], ["after school", "when"]] }
  ] },
  { e: "🍽️", title: "Dinner Time", steps: [
   { tr: [["Akşam yemeği yer.", "does"]], en: [["eats dinner", "does"]] },
   { tr: [["Baba", "who"], ["akşam yemeği yer.", "does"]], en: [["Dad", "who"], ["eats dinner", "does"]] },
   { tr: [["Baba", "who"], ["mutfakta", "where"], ["akşam yemeği yer.", "does"]], en: [["Dad", "who"], ["eats dinner", "does"], ["in the kitchen", "where"]] },
   { tr: [["Baba", "who"], ["saat yedide", "when"], ["mutfakta", "where"], ["akşam yemeği yer.", "does"]], en: [["Dad", "who"], ["eats dinner", "does"], ["in the kitchen", "where"], ["at seven o'clock", "when"]] }
  ] }
 ]
});
// ---------- Ünite 18 ----------
UNITS_A1.push({
 L: {
  rank: "Master Chef", theme: "Food and Drinks", tr: "Yiyecek ve İçecekler", icon: "🍕",
  song: { title: "Yummy Menu", lines: [
   "Can I have some <b>pizza</b>, please?",
   "Some <b>soup</b> with crunchy bread and cheese!",
   "I'd like a <b>banana</b> and a <b>carrot</b> too,",
   "Some <b>juice</b> for me and some for you!" ] },
  cards: [
   { e: "🥪", w: "sandwich", ipa: "/ˈsændwɪtʃ/", tr: "Sandviç", ex: "I'd like a sandwich, please." },
   { e: "🍲", w: "soup", ipa: "/sup/", tr: "Çorba", ex: "Can I have some soup, please?" },
   { e: "🥗", w: "salad", ipa: "/ˈsæləd/", tr: "Salata", ex: "There isn't any salad." },
   { e: "🥞", w: "pancake", ipa: "/ˈpænˌkeɪk/", tr: "Krep", ex: "I'd like a pancake with some honey." },
   { e: "🧃", w: "juice", ipa: "/dʒus/", tr: "Meyve suyu", ex: "Is there any juice?" },
   { e: "🍕", w: "pizza", ipa: "/ˈpitsə/", tr: "Pizza", ex: "Can I have some pizza, please?" },
   { e: "🥕", w: "carrot", ipa: "/ˈkærət/", tr: "Havuç", ex: "I eat some carrots every day." },
   { e: "🍌", w: "banana", ipa: "/bəˈnænə/", tr: "Muz", ex: "I'd like a banana, please." }
  ],
  tasks: [
   { type: "song", line: 0, blank: "pizza", options: ["pizza", "soup", "salad"],
     hint: ["It is round and has cheese on top.", "Yuvarlaktır ve üstünde peynir vardır."] },
   { type: "pick", q: "Which one is a drink?", tr: "Hangisi bir içecek?",
     options: [{ e: "🧃", v: "juice" }, { e: "🍕", v: "pizza" }, { e: "🥕", v: "carrot" }, { e: "🍌", v: "banana" }],
     answer: "juice", hint: ["You drink it with a straw. Slurp!", "Pipetle içersin. Höpür!"] },
   { type: "listen", say: "Can I have a sandwich, please? No cheese, thank you.", q: "What does he want?", tr: "Ne istiyor?",
     options: [{ e: "🥪", v: "sandwich" }, { e: "🍕", v: "pizza" }, { e: "🥗", v: "salad" }],
     answer: "sandwich", hint: ["Listen again: “Can I have a s…”.", "Tekrar dinle: “Can I have a s…”."] },
   { type: "write", e: "🥕", sentence: "Can I have ___ carrots, please?", answer: "some", mask: "S _ M E", tr: "Biraz havuç alabilir miyim, lütfen?",
     hint: ["A word for “a few” in a polite question: s - o - m - e", "Kibar bir istekte “birkaç” anlamındaki kelime: s - o - m - e"] },
   { type: "speak", sentence: "I'd like a pancake, please.", tr: "Bir krep istiyorum, lütfen." }
  ],
  hard: [
   { type: "songtype", line: 1, blank: "soup", hint: ["A hot meal in a bowl. s - o - u - p", "Kâsede sıcak bir yemek. s - o - u - p"] },
   { type: "dictation", word: "pancake", e: "🥞", hint: ["It starts with “p”. It is flat and round, and you eat it with honey.", "“p” ile başlıyor. Yassı ve yuvarlaktır, balla yenir."] },
   { type: "order", tr: "Biraz çorba alabilir miyim, lütfen?", answer: "Can I have some soup please", extra: "any",
     hint: ["Start with: “Can I have …”", "Şöyle başla: “Can I have …”"] },
   { type: "story", say: "Ece is hungry. There is some soup on the table. There isn't any salad. Ece eats the soup and drinks some juice.",
     q: "What is there on the table?", tr: "Masada ne var?", options: ["some soup", "some salad", "some pizza"], answer: "some soup",
     hint: ["Listen for “There is some …”.", "“There is some …” kısmını dinle."] },
   { type: "speakTr", tr: "Biraz meyve suyu istiyorum.", answer: "I'd like some juice." }
  ]
 },
 songs: [
  { title: "Pancake Day", lines: [
   "Flip, flip, flip a <b>pancake</b> high,",
   "Flip it up into the sky,",
   "Catch it, catch it, in the pan,",
   "Eat it up as fast as you can!" ] },
  { title: "Some and Any", lines: [
   "Is there any <b>soup</b>? Yes, there is some,",
   "Are there any <b>carrots</b>? Yes, here they come!",
   "Is there any <b>pizza</b>? No, not any,",
   "But have a <b>banana</b>, we've got many!" ] },
  { title: "Fruit and Veg", lines: [
   "A yellow <b>banana</b>, an orange <b>carrot</b>,",
   "Crunchy and sweet, I'll eat it, I swear it,",
   "A big green <b>salad</b> in a bowl,",
   "Healthy food is good for the soul!" ] },
  { title: "Lunch Time", lines: [
   "Tick-tock, tick-tock, it's time for lunch,",
   "A <b>sandwich</b> and a crunch, crunch, crunch,",
   "A glass of <b>juice</b>, a little <b>soup</b>,",
   "Yum, yum, yum, we're a hungry group!" ] }
 ],
 reading: { title: "Ece's Pancake Day", e: "🥞", lines: [
  ["It is Sunday morning. Ece wants to make pancakes.", "Pazar sabahı. Ece krep yapmak istiyor."],
  ["“Mum, is there any milk?” she asks.", "“Anne, hiç süt var mı?” diye sorar."],
  ["“Yes, there is some milk in the fridge,” says Mum.", "“Evet, buzdolabında biraz süt var,” der annesi."],
  ["“Are there any eggs?” “No, there aren't any, but we have some bananas.”", "“Hiç yumurta var mı?” “Hayır, hiç yok ama biraz muzumuz var.”"],
  ["They make banana pancakes together.", "Birlikte muzlu krep yaparlar."],
  ["“Can I have some juice, please?” asks Ece.", "“Biraz meyve suyu alabilir miyim, lütfen?” diye sorar Ece."],
  ["Mum gives her a glass of orange juice.", "Annesi ona bir bardak portakal suyu verir."],
  ["“Yummy! I'd like another pancake, please!”", "“Çok lezzetli! Bir krep daha istiyorum, lütfen!”"]
 ], qs: [
  { q: "What is there in the fridge?", tr: "Buzdolabında ne var?", options: ["some milk", "some juice", "some soup"], answer: "some milk" },
  { q: "What do they make?", tr: "Ne yapıyorlar?", options: ["a salad", "banana pancakes", "a pizza"], answer: "banana pancakes" },
  { q: "What does Ece drink?", tr: "Ece ne içer?", options: ["milk", "soup", "juice"], answer: "juice" }
 ] },
 listening: [
  { say: "I'd like a pizza, please.", q: "What does he want?", tr: "Ne istiyor?",
    options: [{ e: "🍕", v: "pizza" }, { e: "🥪", v: "sandwich" }, { e: "🥗", v: "salad" }], answer: "pizza" },
  { say: "Can I have some juice, please?", q: "What does she want to drink?", tr: "Ne içmek istiyor?",
    options: [{ e: "🧃", v: "juice" }, { e: "🥛", v: "milk" }, { e: "💧", v: "water" }], answer: "juice" },
  { say: "There isn't any soup, but there is some salad.", q: "What is there?", tr: "Ne var?",
    options: [{ e: "🍲", v: "soup" }, { e: "🥗", v: "salad" }, { e: "🥞", v: "pancake" }], answer: "salad" },
  { say: "I eat a carrot every day.", q: "What does he eat?", tr: "Ne yiyor?",
    options: [{ e: "🥕", v: "carrot" }, { e: "🍌", v: "banana" }, { e: "🍕", v: "pizza" }], answer: "carrot" },
  { say: "For lunch, I have a sandwich and some juice.", q: "What does she drink?", tr: "Ne içiyor?",
    options: [{ e: "🧃", v: "juice" }, { e: "🥛", v: "milk" }, { e: "🍵", v: "tea" }], answer: "juice" }
 ],
 speaking: [
  { e: "🍕", en: "Can I have some pizza, please?", tr: "Biraz pizza alabilir miyim, lütfen?" },
  { e: "🥪", en: "I'd like a sandwich, please.", tr: "Bir sandviç istiyorum, lütfen." },
  { e: "🧃", en: "Is there any juice?", tr: "Hiç meyve suyu var mı?" },
  { e: "🍌", en: "There are some bananas.", tr: "Birkaç muz var." },
  { e: "🍲", en: "There isn't any soup.", tr: "Hiç çorba yok." }
 ],
 write: { title: "My Favourite Meal", en: "Write about your favourite meal. What would you like to eat and drink?",
  tr: "En sevdiğin yemeği anlat: Ne yemek ve ne içmek istersin?",
  starters: ["My favourite meal is", "I'd like some", "Can I have", "There is some", "There isn't any"],
  checks: [
   { re: /\b(some|any)\b/, t: "some ya da any kullan" },
   { re: /\b(i'd like|i like|can i have|i eat|i love)\b/, t: "I'd like / Can I have / I eat gibi bir kalıp kullan" }
  ],
  model: "My favourite meal is lunch. I'd like some soup and a sandwich, please. I eat a salad with some carrots too. There isn't any pizza today, but there is some juice. For dessert, I love a banana." },
 towers: [
  { e: "🥪", title: "Hungry Ali", steps: [
   { tr: [["Sandviç yer.", "does"]], en: [["eats a sandwich", "does"]] },
   { tr: [["Ali", "who"], ["sandviç yer.", "does"]], en: [["Ali", "who"], ["eats a sandwich", "does"]] },
   { tr: [["Ali", "who"], ["mutfakta", "where"], ["sandviç yer.", "does"]], en: [["Ali", "who"], ["eats a sandwich", "does"], ["in the kitchen", "where"]] },
   { tr: [["Ali", "who"], ["öğlen", "when"], ["mutfakta", "where"], ["sandviç yer.", "does"]], en: [["Ali", "who"], ["eats a sandwich", "does"], ["in the kitchen", "where"], ["at noon", "when"]] }
  ] },
  { e: "🧃", title: "Juice Time", steps: [
   { tr: [["Meyve suyu içer.", "does"]], en: [["drinks some juice", "does"]] },
   { tr: [["Elif", "who"], ["meyve suyu içer.", "does"]], en: [["Elif", "who"], ["drinks some juice", "does"]] },
   { tr: [["Elif", "who"], ["masada", "where"], ["meyve suyu içer.", "does"]], en: [["Elif", "who"], ["drinks some juice", "does"], ["at the table", "where"]] },
   { tr: [["Elif", "who"], ["her sabah", "when"], ["masada", "where"], ["meyve suyu içer.", "does"]], en: [["Elif", "who"], ["drinks some juice", "does"], ["at the table", "where"], ["every morning", "when"]] }
  ] },
  { e: "🥞", title: "Banana Pancakes", steps: [
   { tr: [["Krep yapar.", "does"]], en: [["makes pancakes", "does"]] },
   { tr: [["Baba", "who"], ["krep yapar.", "does"]], en: [["Dad", "who"], ["makes pancakes", "does"]] },
   { tr: [["Baba", "who"], ["evde", "where"], ["krep yapar.", "does"]], en: [["Dad", "who"], ["makes pancakes", "does"], ["at home", "where"]] },
   { tr: [["Baba", "who"], ["pazar günleri", "when"], ["evde", "where"], ["krep yapar.", "does"]], en: [["Dad", "who"], ["makes pancakes", "does"], ["at home", "where"], ["on Sundays", "when"]] }
  ] }
 ]
});
// ---------- Ünite 19 ----------
UNITS_A1.push({
 "L": {
  "rank": "Sports Star",
  "theme": "Sports",
  "tr": "Sporlar",
  "icon": "⚽",
  "song": {
   "title": "Let's Play",
   "lines": [
    "Let's play <b>football</b> in the sun,",
    "<b>Climb</b> the wall and have some fun,",
    "I like <b>skating</b>, fast and free,",
    "Sports are great for you and me!"
   ]
  },
  "cards": [
   {
    "e": "⚽",
    "w": "football",
    "ipa": "/ˈfʊtˌbɔl/",
    "tr": "Futbol",
    "ex": "I like playing football."
   },
   {
    "e": "🎾",
    "w": "tennis",
    "ipa": "/ˈtɛnɪs/",
    "tr": "Tenis",
    "ex": "Ece plays tennis very well."
   },
   {
    "e": "🏀",
    "w": "basketball",
    "ipa": "/ˈbæskɪtˌbɔl/",
    "tr": "Basketbol",
    "ex": "He is good at basketball."
   },
   {
    "e": "⛸️",
    "w": "skate",
    "ipa": "/skeɪt/",
    "tr": "Paten kaymak",
    "ex": "I like skating in the park."
   },
   {
    "e": "⛷️",
    "w": "ski",
    "ipa": "/ski/",
    "tr": "Kayak yapmak",
    "ex": "We like skiing in winter."
   },
   {
    "e": "🧗",
    "w": "climb",
    "ipa": "/klaɪm/",
    "tr": "Tırmanmak",
    "ex": "She likes climbing trees."
   },
   {
    "e": "🚲",
    "w": "ride a bike",
    "ipa": "/raɪd ə baɪk/",
    "tr": "Bisiklete binmek",
    "ex": "I like riding a bike."
   },
   {
    "e": "🎣",
    "w": "fish",
    "ipa": "/fɪʃ/",
    "tr": "Balık tutmak",
    "ex": "My dad likes fishing."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "football",
    "options": [
     "tennis",
     "football",
     "basketball"
    ],
    "hint": [
     "Which game do you play with your feet?",
     "Ayaklarınla hangi oyunu oynarsın?"
    ]
   },
   {
    "type": "pick",
    "q": "You hit a small ball over a net with a racket. Which sport is it?",
    "tr": "Küçük bir topa raketle file üzerinden vurursun. Hangi spor?",
    "options": [
     {
      "e": "🎾",
      "v": "tennis"
     },
     {
      "e": "⚽",
      "v": "football"
     },
     {
      "e": "🏀",
      "v": "basketball"
     },
     {
      "e": "⛷️",
      "v": "ski"
     }
    ],
    "answer": "tennis",
    "hint": [
     "Think about the net and the racket.",
     "File ve raketi düşün."
    ]
   },
   {
    "type": "listen",
    "say": "I like riding my bike in the park. I ride very fast.",
    "q": "What does he like?",
    "tr": "Neyi seviyor?",
    "options": [
     {
      "e": "🚲",
      "v": "riding a bike"
     },
     {
      "e": "⚽",
      "v": "football"
     },
     {
      "e": "🎣",
      "v": "fishing"
     }
    ],
    "answer": "riding a bike",
    "hint": [
     "Listen again: “I like r… my bike”.",
     "Tekrar dinle: “I like r… my bike”."
    ]
   },
   {
    "type": "write",
    "e": "🎾",
    "sentence": "Ece plays tennis very ___.",
    "answer": "well",
    "mask": "W _ _ L",
    "tr": "Ece çok iyi tenis oynar.",
    "hint": [
     "Four letters: w - e - l - l. It means “in a good way”.",
     "Dört harf: w - e - l - l. “İyi bir şekilde” demek."
    ]
   },
   {
    "type": "speak",
    "sentence": "I like riding my bike.",
    "tr": "Bisiklet sürmeyi severim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "climb",
    "hint": [
     "You go up a wall with your hands and feet! c - l - i - m - b",
     "Duvara elle ve ayakla çıkarsın! c - l - i - m - b"
    ]
   },
   {
    "type": "dictation",
    "word": "basketball",
    "e": "🏀",
    "hint": [
     "It starts with “b”. You throw the ball into a high basket.",
     "“b” ile başlıyor. Topu yüksekteki sepete atarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Ece parkta paten kaymayı sever.",
    "answer": "Ece likes skating in the park",
    "extra": "skate",
    "hint": [
     "Start with: “Ece likes …”",
     "Şöyle başla: “Ece likes …”"
    ]
   },
   {
    "type": "story",
    "say": "Mert likes sports. He is good at football, but he is not good at tennis. On Saturday, he plays football with his friends. He plays very well.",
    "q": "What is Mert good at?",
    "tr": "Mert neyde iyi?",
    "options": [
     "football",
     "tennis",
     "skiing"
    ],
    "answer": "football",
    "hint": [
     "He is not good at tennis. What does he play on Saturday?",
     "Tenisde iyi değil. Cumartesi ne oynuyor?"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Tenis oynamakta iyiyim.",
    "answer": "I'm good at tennis."
   }
  ]
 },
 "songs": [
  {
   "title": "Ride and Ring",
   "lines": [
    "I <b>ride a bike</b> down the street,",
    "Ring, ring, ring! I feel the beat,",
    "I like riding, fast and fun,",
    "Wheels go round in the bright sun!"
   ]
  },
  {
   "title": "Snow Day",
   "lines": [
    "Snow is falling, white and deep,",
    "I like <b>skiing</b> down the steep,",
    "Zoom, zoom, zoom, I ski so well,",
    "Hear my happy snowy yell!"
   ]
  },
  {
   "title": "Bounce and Hit",
   "lines": [
    "Bounce, bounce, <b>basketball</b>,",
    "Jump up high, I score them all,",
    "Hit, hit, <b>tennis</b> ball,",
    "Over the net, I run and call!"
   ]
  },
  {
   "title": "Quiet Lake",
   "lines": [
    "By the lake, so calm and blue,",
    "I <b>fish</b> and wait for a fish or two,",
    "I like fishing, slow and still,",
    "Sitting on the little hill."
   ]
  }
 ],
 "reading": {
  "title": "Deniz's Sports Day",
  "e": "🏅",
  "lines": [
   [
    "Today is Sports Day at Deniz's school.",
    "Bugün Deniz'in okulunda Spor Günü."
   ],
   [
    "Deniz likes climbing, and he is good at it.",
    "Deniz tırmanmayı sever ve bunda iyidir."
   ],
   [
    "He climbs the wall very quickly.",
    "Duvara çok hızlı tırmanır."
   ],
   [
    "His friend Ece likes tennis. She plays very well.",
    "Arkadaşı Ece tenisi sever. Çok iyi oynar."
   ],
   [
    "Can is not good at tennis, but he likes playing.",
    "Can tenisde iyi değil ama oynamayı seviyor."
   ],
   [
    "After the games, they ride their bikes to the park.",
    "Oyunlardan sonra bisikletleriyle parka giderler."
   ],
   [
    "They are tired, but they are happy.",
    "Yorgunlar ama mutlular."
   ],
   [
    "“I like sports!” says Deniz.",
    "“Sporu seviyorum!” der Deniz."
   ]
  ],
  "qs": [
   {
    "q": "What does Deniz like?",
    "tr": "Deniz neyi sever?",
    "options": [
     "skiing",
     "climbing",
     "fishing"
    ],
    "answer": "climbing"
   },
   {
    "q": "How does Deniz climb the wall?",
    "tr": "Deniz duvara nasıl tırmanır?",
    "options": [
     "slowly",
     "badly",
     "quickly"
    ],
    "answer": "quickly"
   },
   {
    "q": "Who plays tennis very well?",
    "tr": "Kim çok iyi tenis oynar?",
    "options": [
     "Ece",
     "Can",
     "Deniz"
    ],
    "answer": "Ece"
   }
  ]
 },
 "listening": [
  {
   "say": "I like playing basketball with my friends.",
   "q": "What does she like?",
   "tr": "Neyi seviyor?",
   "options": [
    {
     "e": "🏀",
     "v": "basketball"
    },
    {
     "e": "⚽",
     "v": "football"
    },
    {
     "e": "🎾",
     "v": "tennis"
    }
   ],
   "answer": "basketball"
  },
  {
   "say": "My brother is good at skiing. He skis very fast.",
   "q": "What is he good at?",
   "tr": "Neyde iyi?",
   "options": [
    {
     "e": "⛷️",
     "v": "skiing"
    },
    {
     "e": "🚲",
     "v": "riding a bike"
    },
    {
     "e": "🎣",
     "v": "fishing"
    }
   ],
   "answer": "skiing"
  },
  {
   "say": "My dad likes fishing by the lake on Sundays.",
   "q": "What does Dad like?",
   "tr": "Babası neyi seviyor?",
   "options": [
    {
     "e": "🎣",
     "v": "fishing"
    },
    {
     "e": "🧗",
     "v": "climbing"
    },
    {
     "e": "⛸️",
     "v": "skating"
    }
   ],
   "answer": "fishing"
  },
  {
   "say": "Ali plays tennis very well.",
   "q": "How does Ali play tennis?",
   "tr": "Ali tenisi nasıl oynuyor?",
   "options": [
    {
     "e": "👍",
     "v": "well"
    },
    {
     "e": "🐢",
     "v": "slowly"
    },
    {
     "e": "😟",
     "v": "badly"
    }
   ],
   "answer": "well"
  },
  {
   "say": "We like skating in the park on Saturday.",
   "q": "Where do they skate?",
   "tr": "Nerede paten kayıyorlar?",
   "options": [
    {
     "e": "🌳",
     "v": "park"
    },
    {
     "e": "🏫",
     "v": "school"
    },
    {
     "e": "🏖️",
     "v": "beach"
    }
   ],
   "answer": "park"
  }
 ],
 "speaking": [
  {
   "e": "⚽",
   "en": "I like playing football.",
   "tr": "Futbol oynamayı severim."
  },
  {
   "e": "🎾",
   "en": "She is good at tennis.",
   "tr": "O, tenisde iyidir."
  },
  {
   "e": "🧗",
   "en": "He climbs very quickly.",
   "tr": "O çok hızlı tırmanır."
  },
  {
   "e": "🚲",
   "en": "We like riding our bikes.",
   "tr": "Bisiklet sürmeyi severiz."
  },
  {
   "e": "🎣",
   "en": "My dad likes fishing.",
   "tr": "Babam balık tutmayı sever."
  }
 ],
 "write": {
  "title": "My Favourite Sport",
  "en": "Write about the sports you like. What are you good at?",
  "tr": "Sevdiğin sporları yaz. Neyde iyisin?",
  "starters": [
   "I like",
   "I'm good at",
   "I play",
   "My friend likes",
   "We play very",
   "My favourite sport is"
  ],
  "checks": [
   {
    "re": /\b(like|likes) \w+ing\b/,
    "t": "like + -ing kullan (I like playing football)"
   },
   {
    "re": /\b(well|quickly|good at)\b/,
    "t": "well, quickly ya da good at kullan"
   }
  ],
  "model": "I like playing football and I like riding my bike. I'm good at football, and I play very well. My sister likes skating in the park. She skates quickly. My brother plays tennis. My dad likes fishing by the lake. We all like sports!"
 },
 "towers": [
  {
   "e": "🎾",
   "title": "Tennis Time",
   "steps": [
    {
     "tr": [
      [
       "Tenis oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "plays tennis",
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
       "tenis oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "plays tennis",
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
       "kulüpte",
       "where"
      ],
      [
       "tenis oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "plays tennis",
       "does"
      ],
      [
       "at the club",
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
       "her cumartesi",
       "when"
      ],
      [
       "kulüpte",
       "where"
      ],
      [
       "tenis oynar.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "plays tennis",
       "does"
      ],
      [
       "at the club",
       "where"
      ],
      [
       "every Saturday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🚲",
   "title": "Bike Ride",
   "steps": [
    {
     "tr": [
      [
       "Bisikletine biner.",
       "does"
      ]
     ],
     "en": [
      [
       "rides her bike",
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
       "bisikletine biner.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "rides her bike",
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
       "parkta",
       "where"
      ],
      [
       "bisikletine biner.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "rides her bike",
       "does"
      ],
      [
       "in the park",
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
       "okuldan sonra",
       "when"
      ],
      [
       "parkta",
       "where"
      ],
      [
       "bisikletine biner.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "rides her bike",
       "does"
      ],
      [
       "in the park",
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
   "e": "⛷️",
   "title": "Snow Fun",
   "steps": [
    {
     "tr": [
      [
       "Çok iyi kayak yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "skis very well",
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
       "çok iyi kayak yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "skis very well",
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
       "dağda",
       "where"
      ],
      [
       "çok iyi kayak yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "skis very well",
       "does"
      ],
      [
       "on the mountain",
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
       "kışın",
       "when"
      ],
      [
       "dağda",
       "where"
      ],
      [
       "çok iyi kayak yapar.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "skis very well",
       "does"
      ],
      [
       "on the mountain",
       "where"
      ],
      [
       "in winter",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
// ---------- Ünite 20 ----------
UNITS_A1.push({
 "L": {
  "rank": "Time Traveller",
  "theme": "Last Weekend",
  "tr": "Geçen Hafta Sonu",
  "icon": "🧳",
  "song": {
   "title": "Last Weekend",
   "lines": [
    "Last weekend we went by <b>train</b>,",
    "Choo-choo, choo-choo, through the rain,",
    "We saw the sea and ate some cake,",
    "Then we took a <b>boat</b> on the lake!"
   ]
  },
  "cards": [
   {
    "e": "🚆",
    "w": "train",
    "ipa": "/treɪn/",
    "tr": "Tren",
    "ex": "We went to Izmir by train."
   },
   {
    "e": "✈️",
    "w": "plane",
    "ipa": "/pleɪn/",
    "tr": "Uçak",
    "ex": "We took a plane to Antalya."
   },
   {
    "e": "🚌",
    "w": "bus",
    "ipa": "/bʌs/",
    "tr": "Otobüs",
    "ex": "Last weekend we went to the beach by bus."
   },
   {
    "e": "🚕",
    "w": "taxi",
    "ipa": "/ˈtæksi/",
    "tr": "Taksi",
    "ex": "We took a taxi to the park."
   },
   {
    "e": "⛵",
    "w": "boat",
    "ipa": "/boʊt/",
    "tr": "Tekne",
    "ex": "We visited the island by boat."
   },
   {
    "e": "🏍️",
    "w": "motorbike",
    "ipa": "/ˈmoʊtərˌbaɪk/",
    "tr": "Motosiklet",
    "ex": "I saw a fast motorbike."
   },
   {
    "e": "🎫",
    "w": "ticket",
    "ipa": "/ˈtɪkɪt/",
    "tr": "Bilet",
    "ex": "Dad bought a ticket."
   },
   {
    "e": "🧳",
    "w": "suitcase",
    "ipa": "/ˈsutˌkeɪs/",
    "tr": "Bavul",
    "ex": "I packed my suitcase."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "train",
    "options": [
     "train",
     "plane",
     "taxi"
    ],
    "hint": [
     "It goes choo-choo on a railway!",
     "Rayların üzerinde çuf çuf gider!"
    ]
   },
   {
    "type": "pick",
    "q": "You buy it before you get on a train or a plane. What is it?",
    "tr": "Trene ya da uçağa binmeden önce onu alırsın. Nedir?",
    "options": [
     {
      "e": "🎫",
      "v": "ticket"
     },
     {
      "e": "🧳",
      "v": "suitcase"
     },
     {
      "e": "🚕",
      "v": "taxi"
     },
     {
      "e": "⛵",
      "v": "boat"
     }
    ],
    "answer": "ticket",
    "hint": [
     "It is a small piece of paper. You show it to get on.",
     "Küçük bir kâğıt parçası. Binmek için gösterirsin."
    ]
   },
   {
    "type": "listen",
    "say": "Last weekend, we went to Izmir by plane. We took a taxi to the hotel.",
    "q": "How did they go to Izmir?",
    "tr": "İzmir'e nasıl gittiler?",
    "options": [
     {
      "e": "✈️",
      "v": "plane"
     },
     {
      "e": "🚆",
      "v": "train"
     },
     {
      "e": "🚌",
      "v": "bus"
     }
    ],
    "answer": "plane",
    "hint": [
     "Listen again: “…to Izmir by p…”.",
     "Tekrar dinle: “…to Izmir by p…”."
    ]
   },
   {
    "type": "write",
    "e": "🚆",
    "sentence": "Last weekend we ___ to the beach by train.",
    "answer": "went",
    "mask": "W _ _ T",
    "tr": "Geçen hafta sonu trenle plaja gittik.",
    "hint": [
     "It is the past of “go”. w - e - n - t",
     "“Go” fiilinin geçmişi. w - e - n - t"
    ]
   },
   {
    "type": "speak",
    "sentence": "Last weekend we went to Bursa by train.",
    "tr": "Geçen hafta sonu trenle Bursa'ya gittik."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "boat",
    "hint": [
     "You sail on the lake in it! b - o - a - t",
     "Gölde onunla yelken açarsın! b - o - a - t"
    ]
   },
   {
    "type": "dictation",
    "word": "suitcase",
    "e": "🧳",
    "hint": [
     "It starts with “s”. You put your clothes in it for a trip.",
     "“s” ile başlıyor. Gezi için kıyafetlerini içine koyarsın."
    ]
   },
   {
    "type": "order",
    "tr": "Bursa'ya trenle gittik.",
    "answer": "We went to Bursa by train",
    "extra": "go",
    "hint": [
     "Start with: “We went …”",
     "Şöyle başla: “We went …”"
    ]
   },
   {
    "type": "story",
    "say": "Last weekend, Can went to the sea with his family. They took a bus to the port. Then they took a boat to a small island. They ate fish and played on the beach.",
    "q": "How did they go to the island?",
    "tr": "Adaya nasıl gittiler?",
    "options": [
     "by bus",
     "by boat",
     "by plane"
    ],
    "answer": "by boat",
    "hint": [
     "The bus took them to the port. Listen for “island”!",
     "Otobüs onları limana götürdü. “Island” kelimesini dinle!"
    ]
   },
   {
    "type": "speakTr",
    "tr": "Geçen hafta sonu parka gittik.",
    "answer": "We went to the park last weekend."
   }
  ]
 },
 "songs": [
  {
   "title": "Fly Away",
   "lines": [
    "We took a <b>plane</b> up in the sky,",
    "Clouds like cotton floating by,",
    "We played and slept and ate some pie,",
    "Then landed down, goodbye, goodbye!"
   ]
  },
  {
   "title": "Taxi, Taxi",
   "lines": [
    "A <b>taxi</b> came, beep, beep, beep,",
    "We jumped in and went down the street,",
    "The driver smiled and said hello,",
    "Off to the park we went, go, go, go!"
   ]
  },
  {
   "title": "My Suitcase",
   "lines": [
    "I packed my <b>suitcase</b>, one, two, three,",
    "A hat, a book, and a toy for me,",
    "I bought a <b>ticket</b>, off I go,",
    "Last weekend's trip was fun, you know!"
   ]
  },
  {
   "title": "Rumble and Roll",
   "lines": [
    "Rumble, rumble, <b>motorbike</b>,",
    "Slowly, slowly, as I like,",
    "Then we took a big red <b>bus</b>,",
    "Rolling, rolling, with no fuss!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Trip",
  "e": "🧳",
  "lines": [
   [
    "Last weekend, Ece and her family went to Izmir.",
    "Geçen hafta sonu Ece ve ailesi İzmir'e gitti."
   ],
   [
    "They went by plane.",
    "Uçakla gittiler."
   ],
   [
    "Ece took a small red suitcase.",
    "Ece küçük, kırmızı bir bavul aldı."
   ],
   [
    "At the airport, Dad showed the tickets.",
    "Havalimanında Babası biletleri gösterdi."
   ],
   [
    "They took a taxi to the hotel.",
    "Otele taksiyle gittiler."
   ],
   [
    "On Sunday, they took a boat to a small island.",
    "Pazar günü küçük bir adaya tekneyle gittiler."
   ],
   [
    "Ece saw many fish and played on the beach.",
    "Ece bir sürü balık gördü ve kumsalda oynadı."
   ],
   [
    "She was very happy.",
    "Çok mutluydu."
   ]
  ],
  "qs": [
   {
    "q": "How did Ece go to Izmir?",
    "tr": "Ece İzmir'e nasıl gitti?",
    "options": [
     "by train",
     "by bus",
     "by plane"
    ],
    "answer": "by plane"
   },
   {
    "q": "How did they go to the hotel?",
    "tr": "Otele nasıl gittiler?",
    "options": [
     "by taxi",
     "by boat",
     "by train"
    ],
    "answer": "by taxi"
   },
   {
    "q": "What did they take on Sunday?",
    "tr": "Pazar günü neye bindiler?",
    "options": [
     "a train",
     "a boat",
     "a plane"
    ],
    "answer": "a boat"
   }
  ]
 },
 "listening": [
  {
   "say": "We went to Ankara by train.",
   "q": "How did they go?",
   "tr": "Nasıl gittiler?",
   "options": [
    {
     "e": "🚆",
     "v": "train"
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
   "answer": "train"
  },
  {
   "say": "I put my clothes in my suitcase.",
   "q": "Where did he put his clothes?",
   "tr": "Kıyafetlerini nereye koydu?",
   "options": [
    {
     "e": "🧳",
     "v": "suitcase"
    },
    {
     "e": "🎒",
     "v": "bag"
    },
    {
     "e": "📦",
     "v": "box"
    }
   ],
   "answer": "suitcase"
  },
  {
   "say": "My uncle took me to school on his motorbike.",
   "q": "What did my uncle ride?",
   "tr": "Amcam neye bindi?",
   "options": [
    {
     "e": "🏍️",
     "v": "motorbike"
    },
    {
     "e": "🚲",
     "v": "bike"
    },
    {
     "e": "🚕",
     "v": "taxi"
    }
   ],
   "answer": "motorbike"
  },
  {
   "say": "We saw a big boat on the sea last Sunday.",
   "q": "What did they see?",
   "tr": "Ne gördüler?",
   "options": [
    {
     "e": "⛵",
     "v": "boat"
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
   "answer": "boat"
  },
  {
   "say": "Mum bought two tickets for the bus.",
   "q": "How many tickets did Mum buy?",
   "tr": "Annesi kaç bilet aldı?",
   "options": [
    {
     "e": "1️⃣",
     "v": "one"
    },
    {
     "e": "2️⃣",
     "v": "two"
    },
    {
     "e": "3️⃣",
     "v": "three"
    }
   ],
   "answer": "two"
  }
 ],
 "speaking": [
  {
   "e": "🚆",
   "en": "We went to Bursa by train.",
   "tr": "Bursa'ya trenle gittik."
  },
  {
   "e": "✈️",
   "en": "We took a plane to Izmir.",
   "tr": "İzmir'e uçakla gittik."
  },
  {
   "e": "🚕",
   "en": "We took a taxi to the hotel.",
   "tr": "Otele taksiyle gittik."
  },
  {
   "e": "🧳",
   "en": "I packed my suitcase.",
   "tr": "Bavulumu hazırladım."
  },
  {
   "e": "⛵",
   "en": "We visited the island by boat.",
   "tr": "Adayı tekneyle gezdik."
  }
 ],
 "write": {
  "title": "Last Weekend",
  "en": "Write about your last weekend. Where did you go? How did you go?",
  "tr": "Geçen hafta sonunu anlat. Nereye gittin? Oraya nasıl gittin?",
  "starters": [
   "Last weekend, I",
   "We went to",
   "We went by",
   "I saw",
   "We ate",
   "It was"
  ],
  "checks": [
   {
    "re": /\b(went|saw|played|visited|took|ate)\b/,
    "t": "Geçmiş zaman fiili kullan (went, saw, played…)"
   },
   {
    "re": /\bby (train|plane|bus|taxi|boat|car|motorbike|bike)\b|\btook a\b/,
    "t": "Ulaşım aracını yaz (by train, took a taxi…)"
   }
  ],
  "model": "Last weekend, we went to Izmir by plane. I took a small suitcase. We took a taxi to the hotel. On Sunday, we visited an island by boat. I saw many fish and ate an ice cream. It was a great weekend!"
 },
 "towers": [
  {
   "e": "🚆",
   "title": "Train Trip",
   "steps": [
    {
     "tr": [
      [
       "Trene bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "took the train",
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
       "trene bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "took the train",
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
       "Bursa'ya",
       "where"
      ],
      [
       "trene bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "took the train",
       "does"
      ],
      [
       "to Bursa",
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
       "geçen pazar",
       "when"
      ],
      [
       "Bursa'ya",
       "where"
      ],
      [
       "trene bindi.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "took the train",
       "does"
      ],
      [
       "to Bursa",
       "where"
      ],
      [
       "last Sunday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "⛵",
   "title": "Boat Day",
   "steps": [
    {
     "tr": [
      [
       "Gitti.",
       "does"
      ]
     ],
     "en": [
      [
       "went",
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
       "gitti.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "went",
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
       "adaya tekneyle",
       "where"
      ],
      [
       "gitti.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "went",
       "does"
      ],
      [
       "to the island by boat",
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
       "dün",
       "when"
      ],
      [
       "adaya tekneyle",
       "where"
      ],
      [
       "gitti.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "went",
       "does"
      ],
      [
       "to the island by boat",
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
   "e": "🧳",
   "title": "Packing Time",
   "steps": [
    {
     "tr": [
      [
       "Bavulunu hazırladı.",
       "does"
      ]
     ],
     "en": [
      [
       "packed her suitcase",
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
       "bavulunu hazırladı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "packed her suitcase",
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
       "odasında",
       "where"
      ],
      [
       "bavulunu hazırladı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "packed her suitcase",
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
       "Elif",
       "who"
      ],
      [
       "geçen cuma",
       "when"
      ],
      [
       "odasında",
       "where"
      ],
      [
       "bavulunu hazırladı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "packed her suitcase",
       "does"
      ],
      [
       "in her room",
       "where"
      ],
      [
       "last Friday",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});
