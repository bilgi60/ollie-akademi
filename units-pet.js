// B1 Preliminary for Schools üniteleri: Ünite 41–50. index.html bu dosyayı ana betikten önce yükler ve üniteleri LEVELS/READING/... dizilerine ekler.
// Biçim units-key.js ile aynı. Denetim: node api/tools/check-units.js units-a1.js units-a2.js units-key.js units-pet.js
const UNITS_PET = [];
// ---------- Ünite 41 ----------
UNITS_PET.push({
 "L": {
  "rank": "Teen Trailblazer",
  "theme": "Teen Life",
  "tr": "Gençlik hayatı",
  "icon": "🛹",
  "song": {
   "title": "Teen Life",
   "lines": [
    "I have been a <b>teenager</b> since last year,",
    "I have joined a <b>club</b> with friends so dear,",
    "We have been a <b>volunteer</b> team for two years now,",
    "And I have never felt so proud, wow!"
   ]
  },
  "cards": [
   {
    "e": "🧑",
    "w": "teenager",
    "ipa": "/ˈtinˌeɪdʒər/",
    "tr": "Genç (ergen)",
    "ex": "My brother has been a teenager since last year."
   },
   {
    "e": "🙋",
    "w": "volunteer",
    "ipa": "/ˌvɑlənˈtɪr/",
    "tr": "Gönüllü",
    "ex": "Ece has been a volunteer at the animal shelter for two years."
   },
   {
    "e": "🏅",
    "w": "club",
    "ipa": "/klʌb/",
    "tr": "Kulüp",
    "ex": "I have been in the chess club since September."
   },
   {
    "e": "🤳",
    "w": "selfie",
    "ipa": "/ˈsɛlfi/",
    "tr": "Selfie (özçekim)",
    "ex": "Have you ever taken a selfie with a famous person?"
   },
   {
    "e": "👫",
    "w": "hang out",
    "ipa": "/hæŋ aʊt/",
    "tr": "Arkadaşlarla vakit geçirmek",
    "ex": "We have been hanging out at the park since we were ten."
   },
   {
    "e": "💻",
    "w": "online",
    "ipa": "/ˌɔnˈlaɪn/",
    "tr": "Çevrimiçi",
    "ex": "I have never played online games with strangers."
   },
   {
    "e": "🛹",
    "w": "skateboard",
    "ipa": "/ˈskeɪtˌbɔrd/",
    "tr": "Kaykay",
    "ex": "Kerem has had his skateboard for three years."
   },
   {
    "e": "❤️",
    "w": "charity",
    "ipa": "/ˈtʃɛrəti/",
    "tr": "Hayır kurumu",
    "ex": "Our class has raised money for charity since January."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "club",
    "options": [
     "club",
     "charity",
     "selfie"
    ],
    "hint": [
     "You join it to do an activity with other people, for example chess or drama.",
     "Satranç ya da tiyatro gibi bir etkinliği başkalarıyla yapmak için ona katılırsın."
    ]
   },
   {
    "type": "pick",
    "q": "You ride it and do tricks at the skate park. What is it?",
    "tr": "Onunla kaykay parkında numaralar yaparsın. Nedir?",
    "options": [
     {
      "e": "🛹",
      "v": "skateboard"
     },
     {
      "e": "🤳",
      "v": "selfie"
     },
     {
      "e": "❤️",
      "v": "charity"
     },
     {
      "e": "🏅",
      "v": "club"
     }
    ],
    "answer": "skateboard",
    "hint": [
     "It has four wheels and you stand on it.",
     "Dört tekeri vardır ve üstünde ayakta durursun."
    ]
   },
   {
    "type": "listen",
    "say": "I have been in the drama club since September, and I have never missed a rehearsal.",
    "q": "Since when has she been in the club?",
    "tr": "Kız kulüpte ne zamandan beri?",
    "options": [
     {
      "e": "🍂",
      "v": "September"
     },
     {
      "e": "❄️",
      "v": "January"
     },
     {
      "e": "☀️",
      "v": "June"
     }
    ],
    "answer": "September",
    "hint": [
     "Listen again: “…since S…”.",
     "Tekrar dinle: “…since S…”."
    ]
   },
   {
    "type": "write",
    "e": "🛹",
    "sentence": "Kerem has ___ in the skateboard club since March.",
    "answer": "been",
    "mask": "B _ _ _",
    "tr": "Kerem Mart ayından beri kaykay kulübünde.",
    "hint": [
     "After “has” we use the third form of “be”. b - e - e - n",
     "“has” den sonra “be” fiilinin üçüncü halini kullanırız. b - e - e - n"
    ]
   },
   {
    "type": "speak",
    "sentence": "I have been in the club since 2024.",
    "tr": "2024'ten beri kulüpteyim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 0,
    "blank": "teenager",
    "hint": [
     "You are one when you are between thirteen and nineteen. t - e - e - n - a - g - e - r",
     "On üç ile on dokuz yaş arasındayken birisindir. t - e - e - n - a - g - e - r"
    ]
   },
   {
    "type": "dictation",
    "word": "volunteer",
    "e": "🙋",
    "hint": [
     "It starts with “v”. This person helps for free.",
     "“v” ile başlıyor. Bu kişi karşılık beklemeden yardım eder."
    ]
   },
   {
    "type": "order",
    "tr": "Ece iki yıldır gönüllü.",
    "answer": "Ece has been a volunteer for two years",
    "extra": "since",
    "hint": [
     "Start with: “Ece has been …”",
     "Şöyle başla: “Ece has been …”"
    ]
   },
   {
    "type": "story",
    "say": "Deniz has been in the school club since September. He has never missed a meeting. Last week he took a selfie with the whole club, and he has already shown it to his grandmother.",
    "q": "Who has seen the selfie?",
    "tr": "Selfie'yi kim gördü?",
    "options": [
     "his grandmother",
     "his teacher",
     "his cousin"
    ],
    "answer": "his grandmother",
    "hint": [
     "Listen for the last sentence: “…shown it to his g…”.",
     "Son cümleyi dinle: “…shown it to his g…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Hiç online oyun oynadın mı?",
    "answer": "Have you ever played online games?"
   }
  ]
 },
 "songs": [
  {
   "title": "Selfie Time",
   "lines": [
    "Have you ever taken a <b>selfie</b> with me?",
    "We have been friends since we were three,",
    "I have never seen a smile so bright,",
    "Let's take another one tonight!"
   ]
  },
  {
   "title": "Volunteer Day",
   "lines": [
    "We have been a <b>volunteer</b> team since spring,",
    "We have helped a <b>charity</b>, and we sing,",
    "I have never worked so hard before,",
    "And I have felt happy more and more!"
   ]
  },
  {
   "title": "Skate Park",
   "lines": [
    "I have had my <b>skateboard</b> for a year,",
    "I have practised here with friends so near,",
    "Have you ever tried a trick like mine?",
    "I have never fallen, I am doing fine!"
   ]
  },
  {
   "title": "Hanging Out",
   "lines": [
    "We often <b>hang out</b> after school,",
    "We have never been bored, that's the rule,",
    "Have you been <b>online</b> since half past three?",
    "Let's meet at the park, just you and me!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Club",
  "e": "🙋",
  "lines": [
   [
    "Ece is a teenager from Izmir, and she loves her school club.",
    "Ece İzmir'li bir genç ve okul kulübünü çok seviyor."
   ],
   [
    "She has been in the volunteer club since September.",
    "Eylül'den beri gönüllüler kulübünde."
   ],
   [
    "The club has helped a local charity for two years.",
    "Kulüp iki yıldır yerel bir hayır kurumuna yardım ediyor."
   ],
   [
    "Ece has never missed a meeting, and she has made many new friends.",
    "Ece hiç toplantıyı kaçırmadı ve birçok yeni arkadaş edindi."
   ],
   [
    "They hang out together after school, and sometimes they take a selfie.",
    "Okuldan sonra birlikte vakit geçiriyorlar ve bazen selfie çekiyorlar."
   ],
   [
    "Her brother Mert has been a skateboard fan since last summer.",
    "Ağabeyi Mert geçen yazdan beri kaykay hayranı."
   ],
   [
    "He has never been bored, because he practises online with other skaters.",
    "Diğer kaykaycılarla internetten antrenman yaptığı için hiç sıkılmadı."
   ],
   [
    "Ece says it has been the best part of her school year.",
    "Ece bunun okul yılının en güzel kısmı olduğunu söylüyor."
   ]
  ],
  "qs": [
   {
    "q": "Since when has Ece been in the club?",
    "tr": "Ece kulüpte ne zamandan beri?",
    "options": [
     "since September",
     "since last summer",
     "since January"
    ],
    "answer": "since September"
   },
   {
    "q": "How long has the club helped the charity?",
    "tr": "Kulüp hayır kurumuna ne kadardır yardım ediyor?",
    "options": [
     "for two years",
     "for two months",
     "for two weeks"
    ],
    "answer": "for two years"
   },
   {
    "q": "What has Ece never done?",
    "tr": "Ece hiç ne yapmadı?",
    "options": [
     "missed a meeting",
     "taken a selfie",
     "joined a club"
    ],
    "answer": "missed a meeting"
   }
  ]
 },
 "listening": [
  {
   "say": "I have lived in Ankara since 2020, and I have never been to Izmir.",
   "q": "Where has he never been?",
   "tr": "O nereye hiç gitmedi?",
   "options": [
    {
     "e": "🌊",
     "v": "Izmir"
    },
    {
     "e": "🏛️",
     "v": "Ankara"
    },
    {
     "e": "🌳",
     "v": "Bursa"
    }
   ],
   "answer": "Izmir"
  },
  {
   "say": "Zeynep has been a volunteer at the animal shelter for six months.",
   "q": "How long has Zeynep been a volunteer?",
   "tr": "Zeynep ne kadardır gönüllü?",
   "options": [
    {
     "e": "🌙",
     "v": "six months"
    },
    {
     "e": "📆",
     "v": "six years"
    },
    {
     "e": "🗓️",
     "v": "six weeks"
    }
   ],
   "answer": "six months"
  },
  {
   "say": "Have you ever taken a selfie with a famous singer? Yes, I have! I took one last year.",
   "q": "What does the boy say?",
   "tr": "Çocuk ne diyor?",
   "options": [
    {
     "e": "✅",
     "v": "Yes, he has"
    },
    {
     "e": "❌",
     "v": "No, he hasn't"
    },
    {
     "e": "🤔",
     "v": "He isn't sure"
    }
   ],
   "answer": "Yes, he has"
  },
  {
   "say": "Can has had his skateboard since his birthday in May.",
   "q": "When did Can get his skateboard?",
   "tr": "Can kaykayını ne zaman aldı?",
   "options": [
    {
     "e": "🌷",
     "v": "May"
    },
    {
     "e": "☀️",
     "v": "June"
    },
    {
     "e": "🌸",
     "v": "April"
    }
   ],
   "answer": "May"
  },
  {
   "say": "We have been online for two hours, so now we are going to hang out in the park.",
   "q": "Where are they going?",
   "tr": "Nereye gidiyorlar?",
   "options": [
    {
     "e": "🌳",
     "v": "to the park"
    },
    {
     "e": "🎬",
     "v": "to the cinema"
    },
    {
     "e": "📚",
     "v": "to the library"
    }
   ],
   "answer": "to the park"
  }
 ],
 "speaking": [
  {
   "e": "🙋",
   "en": "I have been a volunteer since last year.",
   "tr": "Geçen yıldan beri gönüllüyüm."
  },
  {
   "e": "🏅",
   "en": "Have you ever joined a club?",
   "tr": "Hiç bir kulübe katıldın mı?"
  },
  {
   "e": "🤳",
   "en": "I have never taken a selfie with a teacher.",
   "tr": "Hiç bir öğretmenle selfie çekmedim."
  },
  {
   "e": "🛹",
   "en": "He has had his skateboard for three years.",
   "tr": "Üç yıldır kaykayı var."
  },
  {
   "e": "💻",
   "en": "They have been online for two hours.",
   "tr": "İki saattir çevrimiçiler."
  }
 ],
 "write": {
  "title": "An Email to Ece",
  "en": "Your English friend Ece has sent you an email: “What do you do in your free time? Have you ever joined a club? How long have you been in it?” Write your reply to Ece (about 100 words).",
  "tr": "İngiliz arkadaşın Ece sana e-posta gönderdi: “Boş zamanında neler yapıyorsun? Hiç bir kulübe katıldın mı? Ne zamandır içindesin?” Ece'ye cevap yaz (yaklaşık 100 kelime).",
  "starters": [
   "Hi Ece,",
   "Thanks for your email!",
   "I have been in",
   "I have never",
   "Have you ever",
   "Write soon,"
  ],
  "checks": [
   {
    "re": /(\b(have|has|haven't|hasn't)|'ve) \w+/,
    "t": "Present perfect kullan: “have / has + fiilin üçüncü hali” (I have been…)"
   },
   {
    "re": /\b(since|ever|never|for [\w ]{1,12}(minutes?|hours?|days?|weeks?|months?|years?|time|ages))\b/,
    "t": "“for / since / ever / never” kelimelerinden birini kullan (since September, never…)"
   }
  ],
  "model": "Hi Ece, Thanks for your email! In my free time I love to hang out with my friends. I have been in a volunteer club since September, and we have helped a local charity for two years. I have never missed a meeting, and I have made lots of new friends there. Have you ever joined a club? My brother has had a skateboard since his birthday, and he has never stopped practising. At the weekend we usually go online and chat with our cousins. I have been really happy this year because I have learned so many new things. Write soon and tell me about your hobbies, Mert"
 },
 "towers": [
  {
   "e": "🛹",
   "title": "At the Skate Park",
   "steps": [
    {
     "tr": [
      [
       "Kaykay kayıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "has been skating",
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
       "Kaykay kayıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "has been skating",
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
       "kaykay parkında",
       "where"
      ],
      [
       "Kaykay kayıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "has been skating",
       "does"
      ],
      [
       "at the skate park",
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
       "Haziran'dan beri",
       "when"
      ],
      [
       "kaykay parkında",
       "where"
      ],
      [
       "Kaykay kayıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "has been skating",
       "does"
      ],
      [
       "at the skate park",
       "where"
      ],
      [
       "since June",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🙋",
   "title": "Helping Others",
   "steps": [
    {
     "tr": [
      [
       "Yardım ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "has helped",
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
       "Yardım ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has helped",
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
       "barınakta",
       "where"
      ],
      [
       "Yardım ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has helped",
       "does"
      ],
      [
       "at the shelter",
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
       "iki yıldır",
       "when"
      ],
      [
       "barınakta",
       "where"
      ],
      [
       "Yardım ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "has helped",
       "does"
      ],
      [
       "at the shelter",
       "where"
      ],
      [
       "for two years",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🤳",
   "title": "A Happy Selfie",
   "steps": [
    {
     "tr": [
      [
       "Selfie çekti.",
       "does"
      ]
     ],
     "en": [
      [
       "has taken a selfie",
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
       "Selfie çekti.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has taken a selfie",
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
       "konserde",
       "where"
      ],
      [
       "Selfie çekti.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has taken a selfie",
       "does"
      ],
      [
       "at the concert",
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
       "bu hafta iki kez",
       "when"
      ],
      [
       "konserde",
       "where"
      ],
      [
       "Selfie çekti.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "has taken a selfie",
       "does"
      ],
      [
       "at the concert",
       "where"
      ],
      [
       "twice this week",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 42 ----------
UNITS_PET.push({
 "L": {
  "rank": "Idea Maker",
  "theme": "Inventions",
  "tr": "İcatlar",
  "icon": "💡",
  "song": {
   "title": "Clever Ideas",
   "lines": [
    "The <b>wheel</b> was invented long ago,",
    "The <b>light bulb</b> is used to make a room glow,",
    "Every <b>invention</b> is made by someone clever,",
    "And new things are made now and forever!"
   ]
  },
  "cards": [
   {
    "e": "🔧",
    "w": "invention",
    "ipa": "/ɪnˈvɛnʃən/",
    "tr": "İcat",
    "ex": "The telephone is an invention that is used every day."
   },
   {
    "e": "👨‍🔬",
    "w": "inventor",
    "ipa": "/ɪnˈvɛntər/",
    "tr": "İcatçı",
    "ex": "The first telephone was made by a clever inventor."
   },
   {
    "e": "⚙️",
    "w": "wheel",
    "ipa": "/wil/",
    "tr": "Tekerlek",
    "ex": "The wheel was invented thousands of years ago."
   },
   {
    "e": "💡",
    "w": "light bulb",
    "ipa": "/ˈlaɪt ˌbʌlb/",
    "tr": "Ampul",
    "ex": "The light bulb was improved by Thomas Edison."
   },
   {
    "e": "☎️",
    "w": "telephone",
    "ipa": "/ˈtɛləˌfoʊn/",
    "tr": "Telefon",
    "ex": "The first telephone was invented in 1876."
   },
   {
    "e": "🔋",
    "w": "battery",
    "ipa": "/ˈbætəri/",
    "tr": "Pil",
    "ex": "A battery is made of metal and chemicals."
   },
   {
    "e": "🏭",
    "w": "machine",
    "ipa": "/məˈʃin/",
    "tr": "Makine",
    "ex": "Many machines are used in factories."
   },
   {
    "e": "🔭",
    "w": "discover",
    "ipa": "/dɪˈskʌvər/",
    "tr": "Keşfetmek",
    "ex": "Penicillin was discovered by accident in 1928."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "wheel",
    "options": [
     "wheel",
     "battery",
     "machine"
    ],
    "hint": [
     "It is round and it is used on cars and bikes.",
     "Yuvarlaktır ve arabalarda, bisikletlerde kullanılır."
    ]
   },
   {
    "type": "pick",
    "q": "It is used to make a toy or a phone work without a plug. What is it?",
    "tr": "Oyuncağın ya da telefonun fişsiz çalışması için kullanılır. Nedir?",
    "options": [
     {
      "e": "🔋",
      "v": "battery"
     },
     {
      "e": "⚙️",
      "v": "wheel"
     },
     {
      "e": "☎️",
      "v": "telephone"
     },
     {
      "e": "💡",
      "v": "light bulb"
     }
    ],
    "answer": "battery",
    "hint": [
     "It is made of metal and chemicals, and it is put inside the toy.",
     "Metal ve kimyasallardan yapılır ve oyuncağın içine konur."
    ]
   },
   {
    "type": "listen",
    "say": "The telephone was invented by Alexander Graham Bell in 1876.",
    "q": "Who invented the telephone?",
    "tr": "Telefonu kim icat etti?",
    "options": [
     {
      "e": "☎️",
      "v": "Bell"
     },
     {
      "e": "💡",
      "v": "Edison"
     },
     {
      "e": "🍎",
      "v": "Newton"
     }
    ],
    "answer": "Bell",
    "hint": [
     "Listen again: “…invented by Alexander Graham B…”.",
     "Tekrar dinle: “…invented by Alexander Graham B…”."
    ]
   },
   {
    "type": "write",
    "e": "☎️",
    "sentence": "The telephone was ___ by Alexander Bell.",
    "answer": "invented",
    "mask": "I _ _ _ _ _ _ _",
    "tr": "Telefon Alexander Bell tarafından icat edildi.",
    "hint": [
     "For the past passive we say “was + third form”. i - n - v - e - n - t - e - d",
     "Geçmiş edilgen için “was + fiilin üçüncü hali” deriz. i - n - v - e - n - t - e - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "The wheel was invented thousands of years ago.",
    "tr": "Tekerlek binlerce yıl önce icat edildi."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "invention",
    "hint": [
     "It is a new thing that somebody makes for the first time. i - n - v - e - n - t - i - o - n",
     "Birinin ilk kez yaptığı yeni bir şeydir. i - n - v - e - n - t - i - o - n"
    ]
   },
   {
    "type": "dictation",
    "word": "battery",
    "e": "🔋",
    "hint": [
     "It starts with “b”. It gives power to a torch or a toy.",
     "“b” ile başlıyor. Fenere ya da oyuncağa güç verir."
    ]
   },
   {
    "type": "order",
    "tr": "Telefon Bell tarafından icat edildi.",
    "answer": "The telephone was invented by Bell",
    "extra": "inventing",
    "hint": [
     "Start with: “The telephone was …”",
     "Şöyle başla: “The telephone was …”"
    ]
   },
   {
    "type": "story",
    "say": "Last week our teacher showed us a machine. It was made in 1950, and it was used in a factory. Now it is kept in a museum. We were told that it was repaired by a young inventor.",
    "q": "Where is the machine kept now?",
    "tr": "Makine şimdi nerede tutuluyor?",
    "options": [
     "in a museum",
     "in a factory",
     "in a school"
    ],
    "answer": "in a museum",
    "hint": [
     "Listen for the third sentence: “…kept in a m…”.",
     "Üçüncü cümleyi dinle: “…kept in a m…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Pil metal ve kimyasallardan yapılır.",
    "answer": "A battery is made of metal and chemicals."
   }
  ]
 },
 "songs": [
  {
   "title": "Light Bulb Night",
   "lines": [
    "The <b>light bulb</b> is switched on at night,",
    "Our room is filled with bright, bright light,",
    "It was invented long ago,",
    "And it is used everywhere, you know!"
   ]
  },
  {
   "title": "Telephone Song",
   "lines": [
    "A <b>telephone</b> was invented, ring, ring, ring,",
    "Now it is used for talk and everything,",
    "Many calls are made every day,",
    "And friends are called far away!"
   ]
  },
  {
   "title": "Battery Power",
   "lines": [
    "A <b>battery</b> is made of metal and more,",
    "It is put inside a clock or a toy,",
    "When it is empty, it is charged as before,",
    "And then we play with it, full of joy!"
   ]
  },
  {
   "title": "Famous Inventors",
   "lines": [
    "Every <b>inventor</b> has a clever plan,",
    "A <b>machine</b> is built by hand,",
    "New secrets are discovered, one by one,",
    "And the world is changed by everyone!"
   ]
  }
 ],
 "reading": {
  "title": "Inventions Day",
  "e": "💡",
  "lines": [
   [
    "Our class had an Inventions Day at school.",
    "Sınıfımızın okulda bir İcatlar Günü vardı."
   ],
   [
    "Ece was asked to talk about the wheel, which was invented thousands of years ago.",
    "Ece'den, binlerce yıl önce icat edilen tekerlek hakkında konuşması istendi."
   ],
   [
    "Mert talked about the light bulb, and he showed us how it is made.",
    "Mert ampul hakkında konuştu ve bize nasıl yapıldığını gösterdi."
   ],
   [
    "Elif brought a telephone from 1950, and everyone was surprised.",
    "Elif 1950'den kalma bir telefon getirdi ve herkes şaşırdı."
   ],
   [
    "The old telephone was made of metal and plastic, and it was used by her grandfather.",
    "Eski telefon metal ve plastikten yapılmıştı ve dedesi tarafından kullanılmıştı."
   ],
   [
    "Then our teacher said that many things are discovered by accident.",
    "Sonra öğretmenimiz birçok şeyin tesadüfen keşfedildiğini söyledi."
   ],
   [
    "The best invention was chosen by the class.",
    "En iyi icat sınıf tarafından seçildi."
   ],
   [
    "The prize was given to Elif, and she was very happy.",
    "Ödül Elif'e verildi ve çok mutlu oldu."
   ]
  ],
  "qs": [
   {
    "q": "What was invented thousands of years ago?",
    "tr": "Binlerce yıl önce ne icat edildi?",
    "options": [
     "the wheel",
     "the telephone",
     "the light bulb"
    ],
    "answer": "the wheel"
   },
   {
    "q": "What was the old telephone made of?",
    "tr": "Eski telefon neyden yapılmıştı?",
    "options": [
     "metal and plastic",
     "wood and glass",
     "paper and metal"
    ],
    "answer": "metal and plastic"
   },
   {
    "q": "Who was the prize given to?",
    "tr": "Ödül kime verildi?",
    "options": [
     "Elif",
     "Mert",
     "Ece"
    ],
    "answer": "Elif"
   }
  ]
 },
 "listening": [
  {
   "say": "Batteries are used in many toys. This toy is powered by two batteries.",
   "q": "How many batteries does the toy use?",
   "tr": "Oyuncak kaç pil kullanıyor?",
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
   "answer": "two"
  },
  {
   "say": "The wheel was invented a very long time ago, and it is used in every car.",
   "q": "What is used in every car?",
   "tr": "Her arabada ne kullanılır?",
   "options": [
    {
     "e": "⚙️",
     "v": "the wheel"
    },
    {
     "e": "💡",
     "v": "the light bulb"
    },
    {
     "e": "☎️",
     "v": "the telephone"
    }
   ],
   "answer": "the wheel"
  },
  {
   "say": "My grandfather's old radio was made in 1960. It was repaired last week by my uncle.",
   "q": "Who repaired the radio?",
   "tr": "Radyoyu kim tamir etti?",
   "options": [
    {
     "e": "👨",
     "v": "uncle"
    },
    {
     "e": "👴",
     "v": "grandfather"
    },
    {
     "e": "👩‍🏫",
     "v": "teacher"
    }
   ],
   "answer": "uncle"
  },
  {
   "say": "The first telephone was invented in 1876.",
   "q": "When was the first telephone invented?",
   "tr": "İlk telefon ne zaman icat edildi?",
   "options": [
    {
     "e": "☎️",
     "v": "1876"
    },
    {
     "e": "📻",
     "v": "1786"
    },
    {
     "e": "📺",
     "v": "1967"
    }
   ],
   "answer": "1876"
  },
  {
   "say": "This machine is used in a factory. Cars are made by it.",
   "q": "What is made by the machine?",
   "tr": "Makine ile ne yapılıyor?",
   "options": [
    {
     "e": "🚗",
     "v": "cars"
    },
    {
     "e": "👟",
     "v": "shoes"
    },
    {
     "e": "🍞",
     "v": "bread"
    }
   ],
   "answer": "cars"
  }
 ],
 "speaking": [
  {
   "e": "💡",
   "en": "The light bulb was invented a long time ago.",
   "tr": "Ampul çok uzun zaman önce icat edildi."
  },
  {
   "e": "☎️",
   "en": "The first telephone was invented by Bell.",
   "tr": "İlk telefon Bell tarafından icat edildi."
  },
  {
   "e": "🔋",
   "en": "A battery is used in my toy.",
   "tr": "Oyuncağımda bir pil kullanılıyor."
  },
  {
   "e": "🏭",
   "en": "Many machines are made in factories.",
   "tr": "Birçok makine fabrikalarda yapılır."
  },
  {
   "e": "🔭",
   "en": "New things are discovered every year.",
   "tr": "Her yıl yeni şeyler keşfedilir."
  }
 ],
 "write": {
  "title": "An Invention I Can't Live Without",
  "en": "Your school magazine wants articles with the title “An invention I can't live without”. Write your article (about 100 words). Say what the invention is, who invented it, what it is made of and why you use it.",
  "tr": "Okul dergisi “Onsuz yaşayamayacağım bir icat” başlıklı yazılar istiyor. Makaleni yaz (yaklaşık 100 kelime). İcadın ne olduğunu, kimin icat ettiğini, neyden yapıldığını ve neden kullandığını anlat.",
  "starters": [
   "The invention I can't live without is",
   "It was invented by",
   "It is made of",
   "It is used for",
   "Many people",
   "Without it,"
  ],
  "checks": [
   {
    "re": /\b(is|are) (also |often |usually |always |still |mostly )?(\w+ed|made|built|sold|known|found|given|taken|written|seen|done|kept|put|bought|set|held|run)\b/,
    "t": "Şimdiki zaman edilgen kullan: “is / are + fiilin üçüncü hali” (It is made of…)"
   },
   {
    "re": /\b(was|were) (also |first |later |then |only )?(\w+ed|made|built|sold|known|found|given|taken|written|seen|done|kept|put|bought|set|held|run)\b/,
    "t": "Geçmiş zaman edilgen kullan: “was / were + fiilin üçüncü hali” (It was invented by…)"
   }
  ],
  "model": "The invention I can't live without is the telephone. It was invented by Alexander Graham Bell in 1876, and the first one was made of wood and metal. Today a telephone is made of glass, plastic and a small battery. It is used by millions of people every day. I use mine to call my grandparents, and my homework is sent to my teacher with it. Many machines were built before the telephone, but none of them was as useful for me. Without it, my friends could not be reached so easily, and my life would be boring."
 },
 "towers": [
  {
   "e": "☎️",
   "title": "The Telephone",
   "steps": [
    {
     "tr": [
      [
       "İcat edildi.",
       "does"
      ]
     ],
     "en": [
      [
       "was invented",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Telefon",
       "who"
      ],
      [
       "İcat edildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The telephone",
       "who"
      ],
      [
       "was invented",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Telefon",
       "who"
      ],
      [
       "Boston'da",
       "where"
      ],
      [
       "İcat edildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The telephone",
       "who"
      ],
      [
       "was invented",
       "does"
      ],
      [
       "in Boston",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Telefon",
       "who"
      ],
      [
       "1876'da",
       "when"
      ],
      [
       "Boston'da",
       "where"
      ],
      [
       "İcat edildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The telephone",
       "who"
      ],
      [
       "was invented",
       "does"
      ],
      [
       "in Boston",
       "where"
      ],
      [
       "in 1876",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "💡",
   "title": "The Light Bulb",
   "steps": [
    {
     "tr": [
      [
       "Geliştirildi.",
       "does"
      ]
     ],
     "en": [
      [
       "was improved",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ampul",
       "who"
      ],
      [
       "Geliştirildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The light bulb",
       "who"
      ],
      [
       "was improved",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ampul",
       "who"
      ],
      [
       "bir laboratuvarda",
       "where"
      ],
      [
       "Geliştirildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The light bulb",
       "who"
      ],
      [
       "was improved",
       "does"
      ],
      [
       "in a laboratory",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Ampul",
       "who"
      ],
      [
       "1879'da",
       "when"
      ],
      [
       "bir laboratuvarda",
       "where"
      ],
      [
       "Geliştirildi.",
       "does"
      ]
     ],
     "en": [
      [
       "The light bulb",
       "who"
      ],
      [
       "was improved",
       "does"
      ],
      [
       "in a laboratory",
       "where"
      ],
      [
       "in 1879",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🔋",
   "title": "The Battery",
   "steps": [
    {
     "tr": [
      [
       "Kullanılır.",
       "does"
      ]
     ],
     "en": [
      [
       "is used",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Pil",
       "who"
      ],
      [
       "Kullanılır.",
       "does"
      ]
     ],
     "en": [
      [
       "The battery",
       "who"
      ],
      [
       "is used",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Pil",
       "who"
      ],
      [
       "oyuncağımda",
       "where"
      ],
      [
       "Kullanılır.",
       "does"
      ]
     ],
     "en": [
      [
       "The battery",
       "who"
      ],
      [
       "is used",
       "does"
      ],
      [
       "in my toy",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Pil",
       "who"
      ],
      [
       "her gün",
       "when"
      ],
      [
       "oyuncağımda",
       "where"
      ],
      [
       "Kullanılır.",
       "does"
      ]
     ],
     "en": [
      [
       "The battery",
       "who"
      ],
      [
       "is used",
       "does"
      ],
      [
       "in my toy",
       "where"
      ],
      [
       "every day",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 43 ----------
UNITS_PET.push({
 "L": {
  "rank": "Memory Keeper",
  "theme": "Childhood Memories",
  "tr": "Çocukluk anıları",
  "icon": "🧸",
  "song": {
   "title": "When I Was Little",
   "lines": [
    "When I was little, I used to hug my <b>teddy bear</b>,",
    "I used to fly high on the <b>swing</b>, up in the air,",
    "I didn't use to cry at <b>kindergarten</b>, not a tear,",
    "Now it is a happy <b>memory</b> I hold dear!"
   ]
  },
  "cards": [
   {
    "e": "🧒",
    "w": "childhood",
    "ipa": "/ˈtʃaɪldˌhʊd/",
    "tr": "Çocukluk",
    "ex": "In my childhood, I used to play outside every day."
   },
   {
    "e": "🚂",
    "w": "toy",
    "ipa": "/tɔɪ/",
    "tr": "Oyuncak",
    "ex": "I used to have a toy train, but I didn't use to share it."
   },
   {
    "e": "🌳",
    "w": "swing",
    "ipa": "/swɪŋ/",
    "tr": "Salıncak",
    "ex": "We used to play on the swing in the park."
   },
   {
    "e": "🧸",
    "w": "teddy bear",
    "ipa": "/ˈtɛdi bɛr/",
    "tr": "Oyuncak ayı",
    "ex": "Ece used to sleep with her teddy bear every night."
   },
   {
    "e": "🎒",
    "w": "kindergarten",
    "ipa": "/ˈkɪndərˌɡɑrtən/",
    "tr": "Anaokulu",
    "ex": "Did you use to go to kindergarten by bus?"
   },
   {
    "e": "👵",
    "w": "grandparents",
    "ipa": "/ˈɡrænˌpɛrənts/",
    "tr": "Büyükanne ve büyükbaba",
    "ex": "We used to visit our grandparents every summer."
   },
   {
    "e": "📷",
    "w": "photo album",
    "ipa": "/ˈfoʊtoʊ ˈælbəm/",
    "tr": "Fotoğraf albümü",
    "ex": "Look at this photo album! I used to have long hair."
   },
   {
    "e": "💭",
    "w": "memory",
    "ipa": "/ˈmɛməri/",
    "tr": "Anı",
    "ex": "One happy memory is that we used to eat ice cream on the beach."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "swing",
    "options": [
     "swing",
     "toy",
     "memory"
    ],
    "hint": [
     "You fly high on it in the park. It goes up and down.",
     "Parkta üzerinde yükseklere uçarsın. Bir yukarı bir aşağı gider."
    ]
   },
   {
    "type": "pick",
    "q": "It is a book where you keep old pictures of your family. What is it?",
    "tr": "Ailenin eski fotoğraflarını sakladığın bir kitaptır. Nedir?",
    "options": [
     {
      "e": "📷",
      "v": "photo album"
     },
     {
      "e": "🧸",
      "v": "teddy bear"
     },
     {
      "e": "🌳",
      "v": "swing"
     },
     {
      "e": "🧒",
      "v": "childhood"
     }
    ],
    "answer": "photo album",
    "hint": [
     "You look at it and remember old days. It has photos inside.",
     "Ona bakıp eski günleri hatırlarsın. İçinde fotoğraflar var."
    ]
   },
   {
    "type": "listen",
    "say": "When I was five, I used to have a big teddy bear. I used to take it to bed every night.",
    "q": "Where did he use to take his teddy bear?",
    "tr": "Oyuncak ayısını nereye götürürdü?",
    "options": [
     {
      "e": "🛏️",
      "v": "to bed"
     },
     {
      "e": "🏫",
      "v": "to school"
     },
     {
      "e": "🚌",
      "v": "on the bus"
     }
    ],
    "answer": "to bed",
    "hint": [
     "Listen again: “…take it to b…”.",
     "Tekrar dinle: “…take it to b…”."
    ]
   },
   {
    "type": "write",
    "e": "🚗",
    "sentence": "Kerem used to ___ with a toy car when he was little.",
    "answer": "play",
    "mask": "P _ _ _",
    "tr": "Kerem küçükken oyuncak arabayla oynardı.",
    "hint": [
     "After “used to” we use the base verb. p - l - a - y",
     "“used to” sonrasında fiilin yalın hâli gelir. p - l - a - y"
    ]
   },
   {
    "type": "speak",
    "sentence": "I used to play on the swing when I was little.",
    "tr": "Küçükken salıncakta oynardım."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "kindergarten",
    "hint": [
     "It is the school for very small children. k - i - n - d - e - r - g - a - r - t - e - n",
     "Çok küçük çocukların okuludur. k - i - n - d - e - r - g - a - r - t - e - n"
    ]
   },
   {
    "type": "dictation",
    "word": "grandparents",
    "e": "👵",
    "hint": [
     "It starts with “g”. They are your mum's and dad's parents.",
     "“g” ile başlıyor. Annenin ve babanın anne ve babalarıdır."
    ]
   },
   {
    "type": "order",
    "tr": "Mert'in eskiden bir oyuncak ayısı vardı.",
    "answer": "Mert used to have a teddy bear",
    "extra": "use",
    "hint": [
     "Start with: “Mert used to …”",
     "Şöyle başla: “Mert used to …”"
    ]
   },
   {
    "type": "story",
    "say": "When Ece was little, she used to live near her grandparents. She used to play on the swing in their garden. She didn't use to watch TV, because she loved her toys. Now she looks at her photo album and smiles.",
    "q": "What didn't Ece use to do?",
    "tr": "Ece eskiden ne yapmazdı?",
    "options": [
     "watch TV",
     "play outside",
     "visit her grandparents"
    ],
    "answer": "watch TV",
    "hint": [
     "Listen for: “She didn't use to w…”.",
     "Şunu dinle: “She didn't use to w…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Eskiden anaokuluna otobüsle giderdim.",
    "answer": "I used to go to kindergarten by bus."
   }
  ]
 },
 "songs": [
  {
   "title": "My Teddy Bear",
   "lines": [
    "I used to sleep with my <b>teddy bear</b>,",
    "He used to sit on my little chair,",
    "I used to tell him all my dreams,",
    "Now he is a <b>memory</b>, or so it seems!"
   ]
  },
  {
   "title": "The Old Swing",
   "lines": [
    "We used to play on the old <b>swing</b>,",
    "We used to laugh and shout and sing,",
    "I didn't use to be afraid of the sky,",
    "I just used to fly, fly, fly!"
   ]
  },
  {
   "title": "Grandparents' House",
   "lines": [
    "We used to visit our <b>grandparents</b> by the sea,",
    "They used to make sweet tea for me,",
    "I didn't use to go home early, you see,",
    "It is my best <b>childhood</b> memory!"
   ]
  },
  {
   "title": "Toy Box",
   "lines": [
    "I used to have a <b>toy</b> train and a ball,",
    "I used to keep them in a box in the hall,",
    "I didn't use to put them away at night,",
    "Now I look at my <b>photo album</b> in the light!"
   ]
  }
 ],
 "reading": {
  "title": "Ece's Childhood",
  "e": "🧒",
  "lines": [
   [
    "When Ece was little, she used to live in a small house in İzmir.",
    "Ece küçükken İzmir'de küçük bir evde yaşardı."
   ],
   [
    "Her grandparents lived next door, so she used to see them every day.",
    "Büyükanne ve büyükbabası bitişik evde oturuyordu, bu yüzden onları her gün görürdü."
   ],
   [
    "She used to go to kindergarten by bus, and she didn't use to cry at all.",
    "Anaokuluna otobüsle giderdi ve hiç ağlamazdı."
   ],
   [
    "She used to have a favourite teddy bear, and she took it everywhere.",
    "En sevdiği bir oyuncak ayısı vardı ve onu her yere götürürdü."
   ],
   [
    "In the garden there was a swing, and Ece used to play on it after lunch.",
    "Bahçede bir salıncak vardı ve Ece öğle yemeğinden sonra onda oynardı."
   ],
   [
    "She didn't use to watch much TV, because she loved to play outside.",
    "Dışarıda oynamayı çok sevdiği için fazla televizyon izlemezdi."
   ],
   [
    "Last week she found a photo album in her grandmother's room.",
    "Geçen hafta büyükannesinin odasında bir fotoğraf albümü buldu."
   ],
   [
    "Now every picture is a happy memory of her childhood.",
    "Şimdi her fotoğraf çocukluğundan mutlu bir anı."
   ]
  ],
  "qs": [
   {
    "q": "How did Ece use to go to kindergarten?",
    "tr": "Ece anaokuluna nasıl giderdi?",
    "options": [
     "by bus",
     "on foot",
     "by car"
    ],
    "answer": "by bus"
   },
   {
    "q": "What did Ece find last week?",
    "tr": "Ece geçen hafta ne buldu?",
    "options": [
     "a photo album",
     "a toy train",
     "a teddy bear"
    ],
    "answer": "a photo album"
   },
   {
    "q": "What didn't Ece use to do much?",
    "tr": "Ece eskiden neyi pek yapmazdı?",
    "options": [
     "watch TV",
     "play outside",
     "visit her grandparents"
    ],
    "answer": "watch TV"
   }
  ]
 },
 "listening": [
  {
   "say": "When I was five, I used to have a big teddy bear. I took it to bed every night.",
   "q": "Where did he take his teddy bear?",
   "tr": "Oyuncak ayısını nereye götürürdü?",
   "options": [
    {
     "e": "🛏️",
     "v": "to bed"
    },
    {
     "e": "🏫",
     "v": "to school"
    },
    {
     "e": "🚌",
     "v": "on the bus"
    }
   ],
   "answer": "to bed"
  },
  {
   "say": "Did you use to play on the swing at the park? Yes, I did. I used to go every Saturday.",
   "q": "When did she use to go to the park?",
   "tr": "Parka ne zaman giderdi?",
   "options": [
    {
     "e": "🌞",
     "v": "Saturday"
    },
    {
     "e": "🌿",
     "v": "Sunday"
    },
    {
     "e": "🌧️",
     "v": "Friday"
    }
   ],
   "answer": "Saturday"
  },
  {
   "say": "I didn't use to like kindergarten, but now it is a good memory.",
   "q": "What does he think about kindergarten now?",
   "tr": "Şimdi anaokulu hakkında ne düşünüyor?",
   "options": [
    {
     "e": "😊",
     "v": "It is a good memory"
    },
    {
     "e": "😢",
     "v": "It is a bad memory"
    },
    {
     "e": "😴",
     "v": "It is boring"
    }
   ],
   "answer": "It is a good memory"
  },
  {
   "say": "Kerem used to visit his grandparents every summer. They used to live in a small village.",
   "q": "Where did his grandparents use to live?",
   "tr": "Büyükanne ve büyükbabası nerede yaşardı?",
   "options": [
    {
     "e": "🏘️",
     "v": "in a village"
    },
    {
     "e": "🏙️",
     "v": "in a city"
    },
    {
     "e": "🏖️",
     "v": "at the beach"
    }
   ],
   "answer": "in a village"
  },
  {
   "say": "My dad used to collect toy cars. Now he keeps them on a shelf.",
   "q": "What did his dad use to collect?",
   "tr": "Babası ne biriktirirdi?",
   "options": [
    {
     "e": "🚗",
     "v": "toy cars"
    },
    {
     "e": "🧸",
     "v": "teddy bears"
    },
    {
     "e": "📷",
     "v": "photos"
    }
   ],
   "answer": "toy cars"
  }
 ],
 "speaking": [
  {
   "e": "🧸",
   "en": "I used to sleep with a teddy bear.",
   "tr": "Eskiden oyuncak ayıyla uyurdum."
  },
  {
   "e": "🌳",
   "en": "We used to play on the swing every day.",
   "tr": "Eskiden her gün salıncakta oynardık."
  },
  {
   "e": "🎒",
   "en": "I didn't use to cry at kindergarten.",
   "tr": "Anaokulunda eskiden ağlamazdım."
  },
  {
   "e": "👵",
   "en": "Did you use to visit your grandparents?",
   "tr": "Eskiden büyükanne ve büyükbabanı ziyaret eder miydin?"
  },
  {
   "e": "📷",
   "en": "I used to look at this photo album with my mum.",
   "tr": "Bu fotoğraf albümüne eskiden annemle bakardım."
  }
 ],
 "write": {
  "title": "When I Was Little",
  "en": "You are writing an article for your school magazine called “When I was little”. Write about what you used to do, play with and enjoy. Write about 100 words.",
  "tr": "Okul dergin için “Küçükken” adlı bir makale yazıyorsun. Eskiden neler yaptığını, nelerle oynadığını ve nelerden hoşlandığını anlat. Yaklaşık 100 kelime yaz.",
  "starters": [
   "When I was little, I used to",
   "I didn't use to",
   "My favourite toy was",
   "We used to visit",
   "I used to go to",
   "Now I look at"
  ],
  "checks": [
   {
    "re": /\bused to\b/,
    "t": "“used to + fiil” kullan (I used to play…)"
   },
   {
    "re": /\b(didn't|did not|never) use(d)? to\b/,
    "t": "Olumsuz için “didn't use to + fiil” kullan (I didn't use to cry…)"
   }
  ],
  "model": "When I was little, I used to live in Ankara with my parents and my grandparents. My favourite toy was a brown teddy bear, and I used to take it everywhere. I used to go to kindergarten by bus, and I didn't use to cry because my teacher was very kind. After school we used to play on the swing in the garden. I didn't use to watch much TV, because I loved playing outside. Now I look at our photo album and smile. My childhood was happy, and every picture is a lovely memory."
 },
 "towers": [
  {
   "e": "🎒",
   "title": "Going to Kindergarten",
   "steps": [
    {
     "tr": [
      [
       "Giderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "used to go",
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
       "Giderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "used to go",
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
       "anaokuluna",
       "where"
      ],
      [
       "Giderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "used to go",
       "does"
      ],
      [
       "to kindergarten",
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
       "anaokuluna",
       "where"
      ],
      [
       "Giderdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Ece",
       "who"
      ],
      [
       "used to go",
       "does"
      ],
      [
       "to kindergarten",
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
   "e": "🌳",
   "title": "Playing Outside",
   "steps": [
    {
     "tr": [
      [
       "Oynardı.",
       "does"
      ]
     ],
     "en": [
      [
       "used to play",
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
       "Oynardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "used to play",
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
       "salıncakta",
       "where"
      ],
      [
       "Oynardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "used to play",
       "does"
      ],
      [
       "on the swing",
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
       "öğle yemeğinden sonra",
       "when"
      ],
      [
       "salıncakta",
       "where"
      ],
      [
       "Oynardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "used to play",
       "does"
      ],
      [
       "on the swing",
       "where"
      ],
      [
       "after lunch",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "👵",
   "title": "Visiting Grandparents",
   "steps": [
    {
     "tr": [
      [
       "Büyükanne ve büyükbabasını ziyaret ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "used to visit her grandparents",
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
       "Büyükanne ve büyükbabasını ziyaret ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "used to visit her grandparents",
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
       "köyde",
       "where"
      ],
      [
       "Büyükanne ve büyükbabasını ziyaret ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "used to visit her grandparents",
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
       "Zeynep",
       "who"
      ],
      [
       "her yaz",
       "when"
      ],
      [
       "köyde",
       "where"
      ],
      [
       "Büyükanne ve büyükbabasını ziyaret ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "used to visit her grandparents",
       "does"
      ],
      [
       "in the village",
       "where"
      ],
      [
       "every summer",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 44 ----------
UNITS_PET.push({
 "L": {
  "rank": "Dream Chaser",
  "theme": "Dreams and Wishes",
  "tr": "Hayaller ve dilekler",
  "icon": "🌠",
  "song": {
   "title": "If I Had a Wish",
   "lines": [
    "If I had one <b>wish</b>, I would fly,",
    "In a silver <b>spaceship</b> across the sky,",
    "If I were <b>famous</b>, I would sing,",
    "And I would give you everything!"
   ]
  },
  "cards": [
   {
    "e": "🌠",
    "w": "wish",
    "ipa": "/wɪʃ/",
    "tr": "Dilek",
    "ex": "If I had one wish, I would help all the animals."
   },
   {
    "e": "🦸",
    "w": "superpower",
    "ipa": "/ˈsupərˌpaʊər/",
    "tr": "Süper güç",
    "ex": "If I had a superpower, I would fly over Ankara."
   },
   {
    "e": "👀",
    "w": "invisible",
    "ipa": "/ɪnˈvɪzəbəl/",
    "tr": "Görünmez",
    "ex": "If I were invisible, I would surprise my best friend."
   },
   {
    "e": "🌟",
    "w": "famous",
    "ipa": "/ˈfeɪməs/",
    "tr": "Ünlü",
    "ex": "If I were famous, I would help sick children."
   },
   {
    "e": "🏰",
    "w": "mansion",
    "ipa": "/ˈmænʃən/",
    "tr": "Büyük konak",
    "ex": "If I lived in a mansion, I would have a big library."
   },
   {
    "e": "🏆",
    "w": "prize",
    "ipa": "/praɪz/",
    "tr": "Ödül",
    "ex": "If I won a prize, I would share it with my friends."
   },
   {
    "e": "🚀",
    "w": "spaceship",
    "ipa": "/ˈspeɪsˌʃɪp/",
    "tr": "Uzay gemisi",
    "ex": "If I had a spaceship, I would visit Mars."
   },
   {
    "e": "🌍",
    "w": "travel the world",
    "ipa": "/ˈtrævəl ðə wɜrld/",
    "tr": "Dünyayı gezmek",
    "ex": "If I had a lot of money, I would travel the world."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "famous",
    "options": [
     "famous",
     "invisible",
     "mansion"
    ],
    "hint": [
     "Everybody knows a famous singer or actor.",
     "Herkes ünlü bir şarkıcıyı ya da oyuncuyu tanır."
    ]
   },
   {
    "type": "pick",
    "q": "It is a special power, like flying or being very strong. What is it?",
    "tr": "Uçmak ya da çok güçlü olmak gibi özel bir güçtür. Nedir?",
    "options": [
     {
      "e": "🦸",
      "v": "superpower"
     },
     {
      "e": "🏆",
      "v": "prize"
     },
     {
      "e": "🏰",
      "v": "mansion"
     },
     {
      "e": "🚀",
      "v": "spaceship"
     }
    ],
    "answer": "superpower",
    "hint": [
     "Superheroes have it. It is a very special power.",
     "Süper kahramanlarda vardır. Çok özel bir güçtür."
    ]
   },
   {
    "type": "listen",
    "say": "If I had a spaceship, I would fly to the moon. Then I would take a photo of the Earth.",
    "q": "Where would he fly?",
    "tr": "Nereye uçardı?",
    "options": [
     {
      "e": "🌙",
      "v": "to the moon"
     },
     {
      "e": "☀️",
      "v": "to the sun"
     },
     {
      "e": "⭐",
      "v": "to a star"
     }
    ],
    "answer": "to the moon",
    "hint": [
     "Listen again: “…I would fly to the m…”.",
     "Tekrar dinle: “…I would fly to the m…”."
    ]
   },
   {
    "type": "write",
    "e": "👀",
    "sentence": "If I ___ invisible, I would play a funny trick on my brother.",
    "answer": "were",
    "mask": "W _ _ _",
    "tr": "Görünmez olsaydım, kardeşime komik bir oyun oynardım.",
    "hint": [
     "In “If I …” sentences we use “were”. w - e - r - e",
     "“If I …” cümlelerinde “were” kullanırız. w - e - r - e"
    ]
   },
   {
    "type": "speak",
    "sentence": "If I had a superpower, I would help everyone.",
    "tr": "Bir süper gücüm olsaydı herkese yardım ederdim."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 1,
    "blank": "spaceship",
    "hint": [
     "You fly to the stars in it. s - p - a - c - e - s - h - i - p",
     "İçinde yıldızlara uçarsın. s - p - a - c - e - s - h - i - p"
    ]
   },
   {
    "type": "dictation",
    "word": "superpower",
    "e": "🦸",
    "hint": [
     "It starts with “s”. A superhero has one.",
     "“s” ile başlıyor. Bir süper kahramanın vardır."
    ]
   },
   {
    "type": "order",
    "tr": "Bir ödül kazansaydım çok mutlu olurdum.",
    "answer": "If I won a prize I would be happy",
    "extra": "will",
    "hint": [
     "Start with: “If I won …”",
     "Şöyle başla: “If I won …”"
    ]
   },
   {
    "type": "story",
    "say": "Deniz says: If I had a spaceship, I would visit Mars. I would take my dog with me, and we would look at the red desert. If I were famous, I would tell everybody about it.",
    "q": "Who would Deniz take to Mars?",
    "tr": "Deniz, Mars'a kimi götürürdü?",
    "options": [
     "his dog",
     "his sister",
     "his teacher"
    ],
    "answer": "his dog",
    "hint": [
     "Listen for: “I would take my d… with me”.",
     "Şunu dinle: “I would take my d… with me”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Dünyayı gezebilseydim Japonya'yı ziyaret ederdim.",
    "answer": "If I could travel the world, I would visit Japan."
   }
  ]
 },
 "songs": [
  {
   "title": "Superpower",
   "lines": [
    "If I had a <b>superpower</b>, I would be strong,",
    "I would help the people all day long,",
    "If I were <b>invisible</b>, I would hide,",
    "And I would laugh and run outside!"
   ]
  },
  {
   "title": "A Big Mansion",
   "lines": [
    "If I lived in a <b>mansion</b>, I would have a pool,",
    "I would swim every day and be so cool,",
    "If I won a <b>prize</b>, I would share it with you,",
    "We would dance and sing the whole night through!"
   ]
  },
  {
   "title": "Around the World",
   "lines": [
    "If I could <b>travel the world</b>, I would go by train,",
    "I would see the sea and the golden plain,",
    "If I had a <b>wish</b>, I would go again,",
    "Again and again and again!"
   ]
  },
  {
   "title": "Star Wish",
   "lines": [
    "If I could <b>wish</b> upon a star,",
    "I would go to a place that is far,",
    "If I were <b>famous</b>, I would be kind,",
    "And leave all my worries behind!"
   ]
  }
 ],
 "reading": {
  "title": "Elif's Big Wishes",
  "e": "🌠",
  "lines": [
   [
    "Elif is twelve, and she loves to dream.",
    "Elif on iki yaşında ve hayal kurmayı çok sever."
   ],
   [
    "She often says, “If I had one wish, I would travel the world.”",
    "Sık sık şöyle der: “Bir dileğim olsaydı dünyayı gezerdim.”"
   ],
   [
    "“If I had a spaceship, I would fly to Mars,” she says.",
    "“Bir uzay gemim olsaydı Mars'a uçardım” der."
   ],
   [
    "“If I were invisible, I would surprise my brother on his birthday.”",
    "“Görünmez olsaydım, doğum gününde ağabeyimi şaşırtırdım.”"
   ],
   [
    "Her best friend Mert has different dreams.",
    "En yakın arkadaşı Mert'in hayalleri farklı."
   ],
   [
    "“If I were famous, I would help sick children,” he says.",
    "“Ünlü olsaydım hasta çocuklara yardım ederdim” der."
   ],
   [
    "“And if I won a prize, I would give the money to a hospital.”",
    "“Bir ödül kazansaydım parayı bir hastaneye verirdim.”"
   ],
   [
    "Elif smiles and says, “If I had a superpower, I would make all your dreams come true!”",
    "Elif gülümser ve şöyle der: “Bir süper gücüm olsaydı tüm hayallerini gerçekleştirirdim!”"
   ]
  ],
  "qs": [
   {
    "q": "Where would Elif fly if she had a spaceship?",
    "tr": "Elif'in bir uzay gemisi olsaydı nereye uçardı?",
    "options": [
     "to Mars",
     "to the moon",
     "to Ankara"
    ],
    "answer": "to Mars"
   },
   {
    "q": "What would Mert do if he were famous?",
    "tr": "Mert ünlü olsaydı ne yapardı?",
    "options": [
     "help sick children",
     "buy a mansion",
     "travel the world"
    ],
    "answer": "help sick children"
   },
   {
    "q": "What would Elif do with a superpower?",
    "tr": "Elif bir süper güçle ne yapardı?",
    "options": [
     "make her friend's dreams come true",
     "fly to school",
     "hide from her brother"
    ],
    "answer": "make her friend's dreams come true"
   }
  ]
 },
 "listening": [
  {
   "say": "If I had a mansion, I would have a big cinema room.",
   "q": "What would she have in the mansion?",
   "tr": "Konakta ne olurdu?",
   "options": [
    {
     "e": "🎬",
     "v": "a cinema room"
    },
    {
     "e": "🏊",
     "v": "a swimming pool"
    },
    {
     "e": "📚",
     "v": "a library"
    }
   ],
   "answer": "a cinema room"
  },
  {
   "say": "If I won a prize, I would buy a new bike for my brother.",
   "q": "What would he buy?",
   "tr": "Ne satın alırdı?",
   "options": [
    {
     "e": "🚲",
     "v": "a bike"
    },
    {
     "e": "🎮",
     "v": "a game"
    },
    {
     "e": "👟",
     "v": "shoes"
    }
   ],
   "answer": "a bike"
  },
  {
   "say": "If I were famous, I would sing on a big stage, but I would still live in Ankara.",
   "q": "Where would she live?",
   "tr": "Nerede yaşardı?",
   "options": [
    {
     "e": "🏠",
     "v": "Ankara"
    },
    {
     "e": "🌊",
     "v": "İzmir"
    },
    {
     "e": "🎡",
     "v": "London"
    }
   ],
   "answer": "Ankara"
  },
  {
   "say": "If I could travel the world, I would go to Japan first, and then to Brazil.",
   "q": "Where would she go first?",
   "tr": "İlk olarak nereye giderdi?",
   "options": [
    {
     "e": "🗾",
     "v": "Japan"
    },
    {
     "e": "⚽",
     "v": "Brazil"
    },
    {
     "e": "🗼",
     "v": "France"
    }
   ],
   "answer": "Japan"
  },
  {
   "say": "If I had one wish, I would ask for a puppy. I would call it Pamuk.",
   "q": "What would he call the puppy?",
   "tr": "Köpek yavrusuna ne ad verirdi?",
   "options": [
    {
     "e": "☁️",
     "v": "Pamuk"
    },
    {
     "e": "🐶",
     "v": "Max"
    },
    {
     "e": "⚡",
     "v": "Şimşek"
    }
   ],
   "answer": "Pamuk"
  }
 ],
 "speaking": [
  {
   "e": "🌠",
   "en": "If I had one wish, I would help all the animals.",
   "tr": "Bir dileğim olsaydı bütün hayvanlara yardım ederdim."
  },
  {
   "e": "🦸",
   "en": "If I had a superpower, I would fly.",
   "tr": "Bir süper gücüm olsaydı uçardım."
  },
  {
   "e": "👀",
   "en": "If I were invisible, I would surprise my friends.",
   "tr": "Görünmez olsaydım arkadaşlarımı şaşırtırdım."
  },
  {
   "e": "🚀",
   "en": "If I had a spaceship, I would visit Mars.",
   "tr": "Bir uzay gemim olsaydı Mars'ı ziyaret ederdim."
  },
  {
   "e": "🌍",
   "en": "What would you do if you could travel the world?",
   "tr": "Dünyayı gezebilseydin ne yapardın?"
  }
 ],
 "write": {
  "title": "If I Could Have One Wish",
  "en": "You are writing an article for your school magazine called “If I could have one wish”. What would you wish for? What would you do? Write about 100 words.",
  "tr": "Okul dergin için “Tek bir dileğim olsaydı” adlı bir makale yazıyorsun. Ne dilerdin? Ne yapardın? Yaklaşık 100 kelime yaz.",
  "starters": [
   "If I could have one wish,",
   "If I had a superpower,",
   "If I were famous,",
   "I would",
   "If I lived in a mansion,",
   "My friends would"
  ],
  "checks": [
   {
    "re": /\bif\b[^.?!]{0,50}\b(had|were|was|could|won|lived|knew|found|became|got|went|met|saw|took|made|did|\w+ed)\b/,
    "t": "“If + geçmiş zaman” ile hayalî bir durum anlat (If I had…, If I were…)"
   },
   {
    "re": /\b(would|wouldn't)\b|'d\b/,
    "t": "Sonucu “would + fiil” ile söyle (I would help…)"
   }
  ],
  "model": "If I could have one wish, I would ask for a spaceship. If I had a spaceship, I would fly to Mars with my best friends. We would take a lot of photos of the red desert and send them to our teachers. If I were famous, I would help children all over the world. I would also give a big prize to every school that plants trees. If I lived in a mansion, I would open it to everyone for a big party. I would travel the world and tell kind stories. That would be the best wish ever."
 },
 "towers": [
  {
   "e": "🚀",
   "title": "Flying High",
   "steps": [
    {
     "tr": [
      [
       "Uçardı.",
       "does"
      ]
     ],
     "en": [
      [
       "would fly",
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
       "Uçardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "would fly",
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
       "Mars'a",
       "where"
      ],
      [
       "Uçardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "would fly",
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
       "Elif",
       "who"
      ],
      [
       "bir gün",
       "when"
      ],
      [
       "Mars'a",
       "where"
      ],
      [
       "Uçardı.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "would fly",
       "does"
      ],
      [
       "to Mars",
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
   "e": "🦸",
   "title": "Superhero Day",
   "steps": [
    {
     "tr": [
      [
       "İnsanlara yardım ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "would help people",
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
       "İnsanlara yardım ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "would help people",
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
       "şehirde",
       "where"
      ],
      [
       "İnsanlara yardım ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "would help people",
       "does"
      ],
      [
       "in the city",
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
       "şehirde",
       "where"
      ],
      [
       "İnsanlara yardım ederdi.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "would help people",
       "does"
      ],
      [
       "in the city",
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
   "e": "🏆",
   "title": "Big Prize",
   "steps": [
    {
     "tr": [
      [
       "Ödülü paylaşırdı.",
       "does"
      ]
     ],
     "en": [
      [
       "would share the prize",
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
       "Ödülü paylaşırdı.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "would share the prize",
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
       "arkadaşlarıyla",
       "where"
      ],
      [
       "Ödülü paylaşırdı.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "would share the prize",
       "does"
      ],
      [
       "with her friends",
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
       "partiden sonra",
       "when"
      ],
      [
       "arkadaşlarıyla",
       "where"
      ],
      [
       "Ödülü paylaşırdı.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "would share the prize",
       "does"
      ],
      [
       "with her friends",
       "where"
      ],
      [
       "after the party",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 45 ----------
UNITS_PET.push({
 "L": {
  "rank": "Mystery Solver",
  "theme": "Mysteries",
  "tr": "Gizemler",
  "icon": "🔍",
  "song": {
   "title": "The Muddy Footprint",
   "lines": [
    "Someone left a <b>footprint</b> by the door,",
    "It must be a <b>detective</b> looking for more,",
    "It might be a <b>ghost</b>, but it can't be, you see,",
    "It could be my cat, as small as can be!"
   ]
  },
  "cards": [
   {
    "e": "❓",
    "w": "mystery",
    "ipa": "/ˈmɪstəri/",
    "tr": "Gizem",
    "ex": "The empty plate is a mystery, but it must be my little brother."
   },
   {
    "e": "🔎",
    "w": "clue",
    "ipa": "/klu/",
    "tr": "İpucu",
    "ex": "A red sock is a clue; it might be Kerem's, because he loves red."
   },
   {
    "e": "🕵️",
    "w": "detective",
    "ipa": "/dɪˈtɛktɪv/",
    "tr": "Dedektif",
    "ex": "Deniz is a young detective, and she thinks the thief could be the cat."
   },
   {
    "e": "👣",
    "w": "footprint",
    "ipa": "/ˈfʊtˌprɪnt/",
    "tr": "Ayak izi",
    "ex": "This small footprint can't be Dad's because his feet are very big."
   },
   {
    "e": "👻",
    "w": "ghost",
    "ipa": "/ɡoʊst/",
    "tr": "Hayalet",
    "ex": "It can't be a ghost, because ghosts are not real, so it must be the wind."
   },
   {
    "e": "🔒",
    "w": "secret",
    "ipa": "/ˈsikrɪt/",
    "tr": "Sır, gizli",
    "ex": "Elif has a secret, so she might be planning a surprise party."
   },
   {
    "e": "👀",
    "w": "witness",
    "ipa": "/ˈwɪtnɪs/",
    "tr": "Görgü tanığı",
    "ex": "The witness saw a tall person, so it can't be little Ali."
   },
   {
    "e": "🔦",
    "w": "torch",
    "ipa": "/tɔrtʃ/",
    "tr": "El feneri",
    "ex": "It is dark under my bed, so I am using a torch to find my ball."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 0,
    "blank": "footprint",
    "options": [
     "footprint",
     "detective",
     "ghost"
    ],
    "hint": [
     "You leave it on the floor when you walk with muddy shoes.",
     "Çamurlu ayakkabılarla yürüyünce yerde bunu bırakırsın."
    ]
   },
   {
    "type": "pick",
    "q": "You use it in the dark to see. What is it?",
    "tr": "Karanlıkta görmek için kullanırsın. Nedir?",
    "options": [
     {
      "e": "🔦",
      "v": "torch"
     },
     {
      "e": "🔎",
      "v": "clue"
     },
     {
      "e": "👣",
      "v": "footprint"
     },
     {
      "e": "👻",
      "v": "ghost"
     }
    ],
    "answer": "torch",
    "hint": [
     "It gives light, and you can hold it in your hand.",
     "Işık verir ve elinde tutabilirsin."
    ]
   },
   {
    "type": "listen",
    "say": "There is a wet footprint on the floor. It must be the cat, because it has just come in from the rain.",
    "q": "Who made the footprint?",
    "tr": "Ayak izini kim yaptı?",
    "options": [
     {
      "e": "🐱",
      "v": "the cat"
     },
     {
      "e": "🐶",
      "v": "the dog"
     },
     {
      "e": "👨",
      "v": "Dad"
     }
    ],
    "answer": "the cat",
    "hint": [
     "Listen again: “…it must be the c…”.",
     "Tekrar dinle: “…it must be the c…”."
    ]
   },
   {
    "type": "write",
    "e": "🔦",
    "sentence": "The light is on, so I am sure Dad ___ be at home.",
    "answer": "must",
    "mask": "M _ _ _",
    "tr": "Işık açık, o yüzden babamın evde olduğundan eminim.",
    "hint": [
     "When we are sure, we say “must be”. m - u - s - t",
     "Emin olduğumuzda “must be” deriz. m - u - s - t"
    ]
   },
   {
    "type": "speak",
    "sentence": "It must be a clue, because it is under the bed.",
    "tr": "Bu bir ipucu olmalı, çünkü yatağın altında."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 2,
    "blank": "ghost",
    "hint": [
     "A white, scary-looking thing in stories. g - h - o - s - t",
     "Hikâyelerde beyaz, korkunç görünen şey. g - h - o - s - t"
    ]
   },
   {
    "type": "dictation",
    "word": "torch",
    "e": "🔦",
    "hint": [
     "It starts with “t”. You use it when it is dark.",
     "“t” ile başlıyor. Hava karanlık olduğunda kullanırsın."
    ]
   },
   {
    "type": "order",
    "tr": "Bu bir hayalet olamaz.",
    "answer": "It can't be a ghost",
    "extra": "might",
    "hint": [
     "Start with: “It can't …”",
     "Şöyle başla: “It can't …”"
    ]
   },
   {
    "type": "story",
    "say": "Deniz found a muddy footprint in the kitchen. It was small, so it can't be her father. It might be her little brother, or it could be the cat. Then she saw the cat with muddy paws. It must be the cat!",
    "q": "Who made the footprint?",
    "tr": "Ayak izini kim yaptı?",
    "options": [
     "the cat",
     "her father",
     "her brother"
    ],
    "answer": "the cat",
    "hint": [
     "Listen for the end: “…It must be the c…”.",
     "Sonu dinle: “…It must be the c…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bu bir hayalet olamaz, rüzgâr olmalı.",
    "answer": "It can't be a ghost, it must be the wind."
   }
  ]
 },
 "songs": [
  {
   "title": "The Detective",
   "lines": [
    "I am a <b>detective</b> with a big hat,",
    "I look for a <b>clue</b>, and I find a cat,",
    "It must be a clue, it can't be a toy,",
    "Solving a <b>mystery</b> is my joy!"
   ]
  },
  {
   "title": "Torch in the Dark",
   "lines": [
    "My <b>torch</b> is on, the room is black,",
    "Something might be behind my back,",
    "It could be a <b>ghost</b>, but it can't be true,",
    "It must be my sock and my old blue shoe!"
   ]
  },
  {
   "title": "The Secret Door",
   "lines": [
    "There is a <b>secret</b> behind the door,",
    "It might be a cupboard, or something more,",
    "It can't be a monster, I am sure,",
    "It must be my brother, and nothing more!"
   ]
  },
  {
   "title": "The Witness",
   "lines": [
    "The <b>witness</b> saw a person in blue,",
    "It can't be Mum, and it can't be you,",
    "It might be the postman, or it could be Sue,",
    "It must be someone we never knew!"
   ]
  }
 ],
 "reading": {
  "title": "Ece and the Dark Room",
  "e": "🔦",
  "lines": [
   [
    "When I opened the door, the room was dark.",
    "Kapıyı açtığımda oda karanlıktı."
   ],
   [
    "I took my torch and saw a small footprint on the floor.",
    "El fenerimi aldım ve yerde küçük bir ayak izi gördüm."
   ],
   [
    "It can't be Dad's, because it is too small for his big feet.",
    "Bu babamınki olamaz, çünkü onun koca ayakları için fazla küçük."
   ],
   [
    "Then I found a clue under the sofa: a piece of pink paper.",
    "Sonra kanepenin altında bir ipucu buldum: bir parça pembe kâğıt."
   ],
   [
    "It must be a mystery, but I am a good detective.",
    "Bu bir gizem olmalı ama ben iyi bir dedektifim."
   ],
   [
    "Our neighbour was a witness and said, \"I saw a boy with a big cake.\"",
    "Komşumuz görgü tanığıydı ve \"Büyük bir pastayla bir çocuk gördüm\" dedi."
   ],
   [
    "It can't be a thief, because thieves don't usually bring cakes!",
    "Bu bir hırsız olamaz, çünkü hırsızlar genelde pasta getirmez!"
   ],
   [
    "Suddenly the light came on, and everybody shouted, \"Happy birthday!\"",
    "Birden ışık yandı ve herkes \"İyi ki doğdun!\" diye bağırdı."
   ],
   [
    "It was a secret party, and my best friend Kerem had the cake.",
    "Bu gizli bir partiydi ve pastayı en iyi arkadaşım Kerem taşıyordu."
   ]
  ],
  "qs": [
   {
    "q": "What did Ece find under the sofa?",
    "tr": "Ece kanepenin altında ne buldu?",
    "options": [
     "a piece of pink paper",
     "a torch",
     "a cake"
    ],
    "answer": "a piece of pink paper"
   },
   {
    "q": "Why can't the footprint be Dad's?",
    "tr": "Ayak izi neden babasının olamaz?",
    "options": [
     "because it is too small",
     "because it is red",
     "because he is away"
    ],
    "answer": "because it is too small"
   },
   {
    "q": "What was the mystery really?",
    "tr": "Gizem aslında neydi?",
    "options": [
     "a surprise party",
     "a thief",
     "a ghost"
    ],
    "answer": "a surprise party"
   }
  ]
 },
 "listening": [
  {
   "say": "The window is open and there is a wet footprint. It must be the cat.",
   "q": "Who made the footprint?",
   "tr": "Ayak izini kim yaptı?",
   "options": [
    {
     "e": "🐱",
     "v": "cat"
    },
    {
     "e": "🐶",
     "v": "dog"
    },
    {
     "e": "👨",
     "v": "Dad"
    }
   ],
   "answer": "cat"
  },
  {
   "say": "I can't find my torch. It might be in my bag, or it could be under my bed.",
   "q": "What is the girl looking for?",
   "tr": "Kız ne arıyor?",
   "options": [
    {
     "e": "🔦",
     "v": "a torch"
    },
    {
     "e": "🔑",
     "v": "a key"
    },
    {
     "e": "📱",
     "v": "a phone"
    }
   ],
   "answer": "a torch"
  },
  {
   "say": "Mert has a big secret. He can't tell anyone, so it must be a surprise for Zeynep.",
   "q": "Who is the surprise for?",
   "tr": "Sürpriz kimin için?",
   "options": [
    {
     "e": "👧",
     "v": "Zeynep"
    },
    {
     "e": "👦",
     "v": "Kerem"
    },
    {
     "e": "👩",
     "v": "Elif"
    }
   ],
   "answer": "Zeynep"
  },
  {
   "say": "The detective is looking at a clue. It is a blue button, so the thief might wear a blue coat.",
   "q": "What colour is the button?",
   "tr": "Düğme ne renk?",
   "options": [
    {
     "e": "💙",
     "v": "blue"
    },
    {
     "e": "❤️",
     "v": "red"
    },
    {
     "e": "💚",
     "v": "green"
    }
   ],
   "answer": "blue"
  },
  {
   "say": "A witness says she heard a noise at night. It can't be a ghost, so it must be the wind.",
   "q": "What made the noise?",
   "tr": "Sesi ne çıkardı?",
   "options": [
    {
     "e": "💨",
     "v": "the wind"
    },
    {
     "e": "👻",
     "v": "a ghost"
    },
    {
     "e": "🐭",
     "v": "a mouse"
    }
   ],
   "answer": "the wind"
  }
 ],
 "speaking": [
  {
   "e": "🔦",
   "en": "It must be under my bed.",
   "tr": "Yatağımın altında olmalı."
  },
  {
   "e": "👣",
   "en": "That can't be Mum's footprint, it is too big.",
   "tr": "Bu annemin ayak izi olamaz, çok büyük."
  },
  {
   "e": "👻",
   "en": "It might be a ghost, but I don't think so.",
   "tr": "Bir hayalet olabilir ama sanmıyorum."
  },
  {
   "e": "🕵️",
   "en": "The detective says it could be the cat.",
   "tr": "Dedektif bunun kedi olabileceğini söylüyor."
  },
  {
   "e": "🔒",
   "en": "Elif has a secret, so she must be happy.",
   "tr": "Elif'in bir sırrı var, o yüzden mutlu olmalı."
  }
 ],
 "write": {
  "title": "The Dark Room Story",
  "en": "Write a story (about 100 words) that begins: “When I opened the door, the room was dark.” Say what you saw and guess what it could be. Use must be, might be, could be and can't be.",
  "tr": "“When I opened the door, the room was dark.” cümlesiyle başlayan bir hikâye yaz (yaklaşık 100 kelime). Ne gördüğünü anlat ve ne olabileceğini tahmin et. must be, might be, could be ve can't be kullan.",
  "starters": [
   "When I opened the door, the room was dark.",
   "I took my torch and",
   "It must be",
   "It might be",
   "It can't be",
   "In the end it was"
  ],
  "checks": [
   {
    "re": /\b(must|might|could|may) be\b/,
    "t": "Tahmin yürütmek için “must be / might be / could be” kullan (It must be…)"
   },
   {
    "re": /\b(can['’]t|cannot|couldn['’]t|mustn['’]t) be\b/,
    "t": "Olamayacağını söylemek için “can't be” kullan (It can't be a ghost)"
   }
  ],
  "model": "When I opened the door, the room was dark. I took my torch and walked slowly inside. There was a small footprint on the carpet. It can't be my father's, because it is too small. It might be my little brother's, or it could be a neighbour's. Then I found a clue under the sofa: a piece of pink paper. I thought, \"It must be a mystery, but I am a good detective!\" It can't be a ghost, because ghosts are not real. Suddenly the light came on and my friends shouted, \"Surprise!\" It was a secret birthday party, and the cake must be for me."
 },
 "towers": [
  {
   "e": "🔦",
   "title": "Looking for the Torch",
   "steps": [
    {
     "tr": [
      [
       "El fenerini arıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "is looking for the torch",
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
       "El fenerini arıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "is looking for the torch",
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
       "karanlık odada",
       "where"
      ],
      [
       "El fenerini arıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "is looking for the torch",
       "does"
      ],
      [
       "in the dark room",
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
       "gece",
       "when"
      ],
      [
       "karanlık odada",
       "where"
      ],
      [
       "El fenerini arıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "is looking for the torch",
       "does"
      ],
      [
       "in the dark room",
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
   "e": "🕵️",
   "title": "The Detective",
   "steps": [
    {
     "tr": [
      [
       "Bir ipucunu takip ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "is following a clue",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedektif",
       "who"
      ],
      [
       "Bir ipucunu takip ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "The detective",
       "who"
      ],
      [
       "is following a clue",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedektif",
       "who"
      ],
      [
       "eski evde",
       "where"
      ],
      [
       "Bir ipucunu takip ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "The detective",
       "who"
      ],
      [
       "is following a clue",
       "does"
      ],
      [
       "in the old house",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Dedektif",
       "who"
      ],
      [
       "bu akşam",
       "when"
      ],
      [
       "eski evde",
       "where"
      ],
      [
       "Bir ipucunu takip ediyor.",
       "does"
      ]
     ],
     "en": [
      [
       "The detective",
       "who"
      ],
      [
       "is following a clue",
       "does"
      ],
      [
       "in the old house",
       "where"
      ],
      [
       "this evening",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "🐱",
   "title": "Where Is the Cat?",
   "steps": [
    {
     "tr": [
      [
       "uyuyor olabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "might be sleeping",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kedi",
       "who"
      ],
      [
       "uyuyor olabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat",
       "who"
      ],
      [
       "might be sleeping",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kedi",
       "who"
      ],
      [
       "kanepenin altında",
       "where"
      ],
      [
       "uyuyor olabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat",
       "who"
      ],
      [
       "might be sleeping",
       "does"
      ],
      [
       "under the sofa",
       "where"
      ]
     ]
    },
    {
     "tr": [
      [
       "Kedi",
       "who"
      ],
      [
       "şimdi",
       "when"
      ],
      [
       "kanepenin altında",
       "where"
      ],
      [
       "uyuyor olabilir.",
       "does"
      ]
     ],
     "en": [
      [
       "The cat",
       "who"
      ],
      [
       "might be sleeping",
       "does"
      ],
      [
       "under the sofa",
       "where"
      ],
      [
       "now",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 46 ----------
UNITS_PET.push({
 "L": {
  "rank": "True Friend",
  "theme": "Friendship",
  "tr": "Arkadaşlık",
  "icon": "🤝",
  "song": {
   "title": "After the Argument",
   "lines": [
    "Ece said she was sorry for the <b>argument</b>,",
    "She told me that she wanted to <b>apologise</b>,",
    "I said that she was my <b>best friend</b>,",
    "And she said our <b>friendship</b> would never end!"
   ]
  },
  "cards": [
   {
    "e": "👫",
    "w": "friendship",
    "ipa": "/ˈfrɛndˌʃɪp/",
    "tr": "Arkadaşlık",
    "ex": "Zeynep said that our friendship was very important to her."
   },
   {
    "e": "😠",
    "w": "argument",
    "ipa": "/ˈɑrɡjəmənt/",
    "tr": "Tartışma",
    "ex": "Mert told me that the argument was his fault."
   },
   {
    "e": "🙏",
    "w": "apologise",
    "ipa": "/əˈpɑləˌdʒaɪz/",
    "tr": "Özür dilemek",
    "ex": "Can said that he wanted to apologise, so he called me."
   },
   {
    "e": "✋",
    "w": "promise",
    "ipa": "/ˈprɑmɪs/",
    "tr": "Söz",
    "ex": "Ece said that she would never break her promise."
   },
   {
    "e": "💡",
    "w": "advice",
    "ipa": "/ədˈvaɪs/",
    "tr": "Öğüt, tavsiye",
    "ex": "Dad told me that he would give me some advice."
   },
   {
    "e": "💙",
    "w": "trust",
    "ipa": "/trʌst/",
    "tr": "Güven",
    "ex": "Elif told Deniz that she could trust her."
   },
   {
    "e": "👯",
    "w": "best friend",
    "ipa": "/bɛst frɛnd/",
    "tr": "En iyi arkadaş",
    "ex": "He said that his best friend lived in İzmir."
   },
   {
    "e": "😂",
    "w": "joke",
    "ipa": "/dʒoʊk/",
    "tr": "Fıkra, şaka",
    "ex": "Kerem told me a joke, and he said it was his grandfather's."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 1,
    "blank": "apologise",
    "options": [
     "apologise",
     "promise",
     "advice"
    ],
    "hint": [
     "You do this when you say sorry.",
     "Özür dilerken bunu yaparsın."
    ]
   },
   {
    "type": "pick",
    "q": "It is something funny that makes people laugh. What is it?",
    "tr": "İnsanları güldüren komik bir şeydir. Nedir?",
    "options": [
     {
      "e": "😂",
      "v": "joke"
     },
     {
      "e": "🙏",
      "v": "apologise"
     },
     {
      "e": "💡",
      "v": "advice"
     },
     {
      "e": "✋",
      "v": "promise"
     }
    ],
    "answer": "joke",
    "hint": [
     "Kerem told one at lunch, and everybody laughed.",
     "Kerem öğle yemeğinde bir tane anlattı ve herkes güldü."
    ]
   },
   {
    "type": "listen",
    "say": "Mert said that he was sorry, and he told me he would call me after school.",
    "q": "What did Mert say he would do?",
    "tr": "Mert ne yapacağını söyledi?",
    "options": [
     {
      "e": "📞",
      "v": "call"
     },
     {
      "e": "🏠",
      "v": "visit"
     },
     {
      "e": "✉️",
      "v": "write"
     }
    ],
    "answer": "call",
    "hint": [
     "Listen again: “…he would c…”.",
     "Tekrar dinle: “…he would c…”."
    ]
   },
   {
    "type": "write",
    "e": "🙏",
    "sentence": "Mert told me that he ___ sorry.",
    "answer": "was",
    "mask": "W _ _",
    "tr": "Mert bana üzgün olduğunu söyledi.",
    "hint": [
     "In reported speech “am / is” becomes “was”. w - a - s",
     "Aktarılan sözde “am / is” “was” olur. w - a - s"
    ]
   },
   {
    "type": "speak",
    "sentence": "She said that she was sorry.",
    "tr": "Üzgün olduğunu söyledi."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 3,
    "blank": "friendship",
    "hint": [
     "Good friends have this together. f - r - i - e - n - d - s - h - i - p",
     "İyi arkadaşların birlikte sahip olduğu şeydir. f - r - i - e - n - d - s - h - i - p"
    ]
   },
   {
    "type": "dictation",
    "word": "promise",
    "e": "✋",
    "hint": [
     "It starts with “p”. You must keep it.",
     "“p” ile başlıyor. Onu tutmalısın."
    ]
   },
   {
    "type": "order",
    "tr": "Ece bana üzgün olduğunu söyledi.",
    "answer": "Ece told me she was sorry",
    "extra": "said",
    "hint": [
     "Start with: “Ece told …”",
     "Şöyle başla: “Ece told …”"
    ]
   },
   {
    "type": "story",
    "say": "Can and Deniz had an argument about a football game. Can said that he was sorry. Deniz told him that she was sorry too. Then Can told a joke, and they both laughed.",
    "q": "What did Can say?",
    "tr": "Can ne dedi?",
    "options": [
     "that he was sorry",
     "that he was angry",
     "that he was tired"
    ],
    "answer": "that he was sorry",
    "hint": [
     "Listen for the second sentence: “Can said that he was s…”.",
     "İkinci cümleyi dinle: “Can said that he was s…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Bana ona güvenebileceğimi söyledi.",
    "answer": "She told me that I could trust her."
   }
  ]
 },
 "songs": [
  {
   "title": "Best Friends",
   "lines": [
    "Zeynep told me that I was her <b>best friend</b>,",
    "She said that she would always be there,",
    "I told her our <b>friendship</b> was something rare,",
    "And that we would always care!"
   ]
  },
  {
   "title": "The Joke",
   "lines": [
    "Kerem told us a funny <b>joke</b>,",
    "He said it was a very old one,",
    "We all laughed, and then we spoke,",
    "We said that it was lots of fun!"
   ]
  },
  {
   "title": "I Promise",
   "lines": [
    "Mert told me he would keep his <b>promise</b>,",
    "He said that he would come at three,",
    "I said that I would <b>trust</b> him, yes,",
    "And he asked me if we could have tea."
   ]
  },
  {
   "title": "Good Advice",
   "lines": [
    "Dad gave me some <b>advice</b> today,",
    "He said that I should call and say,",
    "I asked him if she would hear me out,",
    "He told me that she would, without a doubt!"
   ]
  }
 ],
 "reading": {
  "title": "Deniz and Elif",
  "e": "👯",
  "lines": [
   [
    "Deniz and Elif are best friends, but yesterday they had an argument.",
    "Deniz ve Elif en iyi arkadaş ama dün tartıştılar."
   ],
   [
    "Elif said that she was angry because Deniz wasn't at her party.",
    "Elif, Deniz partisine gelmediği için kızgın olduğunu söyledi."
   ],
   [
    "Deniz told her that she was ill, but Elif didn't trust her.",
    "Deniz ona hasta olduğunu söyledi ama Elif ona güvenmedi."
   ],
   [
    "That evening Deniz asked her mum for some advice about the problem.",
    "O akşam Deniz annesinden bu sorun hakkında biraz tavsiye istedi."
   ],
   [
    "Her mum told her that a good friendship needs honest words.",
    "Annesi ona iyi bir arkadaşlığın dürüst sözlere ihtiyaç duyduğunu söyledi."
   ],
   [
    "So the next day Deniz told Elif that she wanted to apologise.",
    "Ertesi gün Deniz, Elif'e özür dilemek istediğini söyledi."
   ],
   [
    "Then she told Elif a funny joke about their teacher, and Elif laughed.",
    "Sonra Elif'e öğretmenleri hakkında komik bir fıkra anlattı ve Elif güldü."
   ],
   [
    "Elif said that the argument was over, and she promised to trust Deniz again.",
    "Elif tartışmanın bittiğini söyledi ve Deniz'e yeniden güveneceğine söz verdi."
   ]
  ],
  "qs": [
   {
    "q": "Why was Elif angry?",
    "tr": "Elif neden kızgındı?",
    "options": [
     "because Deniz wasn't at her party",
     "because Deniz lost her book",
     "because Deniz told a joke"
    ],
    "answer": "because Deniz wasn't at her party"
   },
   {
    "q": "Who gave Deniz advice?",
    "tr": "Deniz'e kim tavsiye verdi?",
    "options": [
     "her mum",
     "her teacher",
     "Mert"
    ],
    "answer": "her mum"
   },
   {
    "q": "What did Elif promise?",
    "tr": "Elif ne söz verdi?",
    "options": [
     "to trust Deniz again",
     "to buy a present",
     "to tell a joke"
    ],
    "answer": "to trust Deniz again"
   }
  ]
 },
 "listening": [
  {
   "say": "Kerem said that he was hungry, so he asked me if I had a sandwich.",
   "q": "What did Kerem want?",
   "tr": "Kerem ne istedi?",
   "options": [
    {
     "e": "🥪",
     "v": "a sandwich"
    },
    {
     "e": "🥤",
     "v": "a drink"
    },
    {
     "e": "🎫",
     "v": "a ticket"
    }
   ],
   "answer": "a sandwich"
  },
  {
   "say": "My friend told me that she would call me at six, but she didn't.",
   "q": "What time did she say she would call?",
   "tr": "Saat kaçta arayacağını söyledi?",
   "options": [
    {
     "e": "🕕",
     "v": "six"
    },
    {
     "e": "🕖",
     "v": "seven"
    },
    {
     "e": "🕔",
     "v": "five"
    }
   ],
   "answer": "six"
  },
  {
   "say": "Mum asked me if I had done my homework. I said that I had finished it.",
   "q": "What did Mum ask about?",
   "tr": "Annesi neyi sordu?",
   "options": [
    {
     "e": "📝",
     "v": "homework"
    },
    {
     "e": "🧹",
     "v": "my room"
    },
    {
     "e": "🍽️",
     "v": "dinner"
    }
   ],
   "answer": "homework"
  },
  {
   "say": "Ece told me that she liked my new bag. I said thank you.",
   "q": "What did Ece like?",
   "tr": "Ece neyi beğendi?",
   "options": [
    {
     "e": "🎒",
     "v": "the bag"
    },
    {
     "e": "👟",
     "v": "the shoes"
    },
    {
     "e": "👕",
     "v": "the shirt"
    }
   ],
   "answer": "the bag"
  },
  {
   "say": "Can said that the joke was very funny, and he laughed for a long time.",
   "q": "What did Can do?",
   "tr": "Can ne yaptı?",
   "options": [
    {
     "e": "😂",
     "v": "laughed"
    },
    {
     "e": "😢",
     "v": "cried"
    },
    {
     "e": "😴",
     "v": "slept"
    }
   ],
   "answer": "laughed"
  }
 ],
 "speaking": [
  {
   "e": "😂",
   "en": "Kerem told me a funny joke.",
   "tr": "Kerem bana komik bir fıkra anlattı."
  },
  {
   "e": "🙏",
   "en": "She said that she wanted to apologise.",
   "tr": "Özür dilemek istediğini söyledi."
  },
  {
   "e": "✋",
   "en": "He told me that he would keep his promise.",
   "tr": "Bana sözünü tutacağını söyledi."
  },
  {
   "e": "💡",
   "en": "My mum said that I should talk to her.",
   "tr": "Annem onunla konuşmam gerektiğini söyledi."
  },
  {
   "e": "👯",
   "en": "I asked her if she was my best friend.",
   "tr": "Ona benim en iyi arkadaşım olup olmadığını sordum."
  }
 ],
 "write": {
  "title": "Advice for a Friend",
  "en": "Your friend Ece wrote: “My best friend said that I was selfish, and I told her that I didn't want to talk. What should I do?” Write an email to Ece (about 100 words). Give her some advice and use reported speech.",
  "tr": "Arkadaşın Ece sana şunu yazdı: “En iyi arkadaşım bencil olduğumu söyledi, ben de ona konuşmak istemediğimi söyledim. Ne yapmalıyım?” Ece'ye bir e-posta yaz (yaklaşık 100 kelime). Ona tavsiye ver ve aktarılan konuşma (reported speech) kullan.",
  "starters": [
   "Dear Ece,",
   "I was sorry to hear that",
   "You told me that",
   "I think you should",
   "Your friend said that",
   "Please tell me if"
  ],
  "checks": [
   {
    "re": /\b(said|told|asked|says|tells)\b/,
    "t": "Birinin sözünü aktarmak için “said / told / asked” kullan (She said that…)"
   },
   {
    "re": /\b(was|were|had|would|could|did|wanted|needed)\b/,
    "t": "Aktarırken fiili geçmişe kaydır: was / were / had / would / could"
   }
  ],
  "model": "Dear Ece, I was sorry to hear about your argument. Your best friend said that you were selfish, and you told her that you didn't want to talk. I think you should apologise first, because a good friendship is more important than an argument. You can write her a message and tell her that you were wrong. My mum told me once that honest words are the best advice. Also, maybe you can tell her a joke, so she will smile. I promise she will understand, because she trusts you. Call me tomorrow and tell me what she said! Love, Zeynep"
 },
 "towers": [
  {
   "e": "🙏",
   "title": "Saying Sorry",
   "steps": [
    {
     "tr": [
      [
       "Özür diledi.",
       "does"
      ]
     ],
     "en": [
      [
       "apologised",
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
       "Özür diledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "apologised",
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
       "okulda",
       "where"
      ],
      [
       "Özür diledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "apologised",
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
       "Mert",
       "who"
      ],
      [
       "dün",
       "when"
      ],
      [
       "okulda",
       "where"
      ],
      [
       "Özür diledi.",
       "does"
      ]
     ],
     "en": [
      [
       "Mert",
       "who"
      ],
      [
       "apologised",
       "does"
      ],
      [
       "at school",
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
   "e": "😂",
   "title": "A Funny Joke",
   "steps": [
    {
     "tr": [
      [
       "Fıkra anlattı.",
       "does"
      ]
     ],
     "en": [
      [
       "told a joke",
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
       "Fıkra anlattı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "told a joke",
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
       "arkadaşlarına",
       "where"
      ],
      [
       "Fıkra anlattı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "told a joke",
       "does"
      ],
      [
       "to his friends",
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
       "öğle yemeğinde",
       "when"
      ],
      [
       "arkadaşlarına",
       "where"
      ],
      [
       "Fıkra anlattı.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "told a joke",
       "does"
      ],
      [
       "to his friends",
       "where"
      ],
      [
       "at lunch",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "💡",
   "title": "Good Advice",
   "steps": [
    {
     "tr": [
      [
       "Zeynep'e öğüt verdi.",
       "does"
      ]
     ],
     "en": [
      [
       "gave Zeynep some advice",
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
       "Zeynep'e öğüt verdi.",
       "does"
      ]
     ],
     "en": [
      [
       "My dad",
       "who"
      ],
      [
       "gave Zeynep some advice",
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
       "Zeynep'e öğüt verdi.",
       "does"
      ]
     ],
     "en": [
      [
       "My dad",
       "who"
      ],
      [
       "gave Zeynep some advice",
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
       "dün gece",
       "when"
      ],
      [
       "mutfakta",
       "where"
      ],
      [
       "Zeynep'e öğüt verdi.",
       "does"
      ]
     ],
     "en": [
      [
       "My dad",
       "who"
      ],
      [
       "gave Zeynep some advice",
       "does"
      ],
      [
       "in the kitchen",
       "where"
      ],
      [
       "last night",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 47 ----------
UNITS_PET.push({
 "L": {
  "rank": "World Explorer",
  "theme": "Places to Visit",
  "tr": "Gezilecek yerler",
  "icon": "🏛️",
  "song": {
   "title": "Visit Türkiye",
   "lines": [
    "I am a <b>tourist</b> who loves to roam,",
    "My <b>guidebook</b> is a friend that shows me the way,",
    "I see a <b>palace</b> where kings once stayed,",
    "What a lovely place for a holiday!"
   ]
  },
  "cards": [
   {
    "e": "🧳",
    "w": "tourist",
    "ipa": "/ˈtʊrɪst/",
    "tr": "Turist",
    "ex": "A tourist is a person who visits a place on holiday."
   },
   {
    "e": "📖",
    "w": "guidebook",
    "ipa": "/ˈɡaɪdˌbʊk/",
    "tr": "Rehber kitap",
    "ex": "A guidebook is a book which tells you about a city."
   },
   {
    "e": "🏰",
    "w": "palace",
    "ipa": "/ˈpælɪs/",
    "tr": "Saray",
    "ex": "Topkapı is a palace where the sultans once lived."
   },
   {
    "e": "🗿",
    "w": "statue",
    "ipa": "/ˈstætʃu/",
    "tr": "Heykel",
    "ex": "The statue which stands in the square is very old."
   },
   {
    "e": "🗼",
    "w": "landmark",
    "ipa": "/ˈlændˌmɑrk/",
    "tr": "Simge yapı",
    "ex": "The Galata Tower is a landmark which everyone in İstanbul knows."
   },
   {
    "e": "🏺",
    "w": "ancient",
    "ipa": "/ˈeɪnʃənt/",
    "tr": "Antik, çok eski",
    "ex": "Ephesus is an ancient city where many people lived long ago."
   },
   {
    "e": "🏛️",
    "w": "ruins",
    "ipa": "/ˈruɪnz/",
    "tr": "Kalıntılar",
    "ex": "We walked around the ruins which are near İzmir."
   },
   {
    "e": "🦇",
    "w": "cave",
    "ipa": "/keɪv/",
    "tr": "Mağara",
    "ex": "Ece loves the cave where we found a small lake."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "palace",
    "options": [
     "palace",
     "statue",
     "cave"
    ],
    "hint": [
     "Kings and queens lived in this big, beautiful house.",
     "Krallar ve kraliçeler bu büyük, güzel evde yaşardı."
    ]
   },
   {
    "type": "pick",
    "q": "It is a big, beautiful house where a king or queen lives. What is it?",
    "tr": "Bir kralın ya da kraliçenin yaşadığı büyük, güzel bir evdir. Nedir?",
    "options": [
     {
      "e": "🏰",
      "v": "palace"
     },
     {
      "e": "🗿",
      "v": "statue"
     },
     {
      "e": "🦇",
      "v": "cave"
     },
     {
      "e": "📖",
      "v": "guidebook"
     }
    ],
    "answer": "palace",
    "hint": [
     "Topkapı in İstanbul is a famous one.",
     "İstanbul'daki Topkapı bunun ünlü bir örneğidir."
    ]
   },
   {
    "type": "listen",
    "say": "Ephesus is an ancient city where many people lived long ago.",
    "q": "What kind of place is Ephesus?",
    "tr": "Efes nasıl bir yerdir?",
    "options": [
     {
      "e": "🏺",
      "v": "an ancient city"
     },
     {
      "e": "🏙️",
      "v": "a modern city"
     },
     {
      "e": "🏡",
      "v": "a small village"
     }
    ],
    "answer": "an ancient city",
    "hint": [
     "Listen again: “…an a… city where…”.",
     "Tekrar dinle: “…an a… city where…”."
    ]
   },
   {
    "type": "write",
    "e": "🧳",
    "sentence": "Ece is a tourist ___ loves old cities.",
    "answer": "who",
    "mask": "W _ _",
    "tr": "Ece, eski şehirleri seven bir turisttir.",
    "hint": [
     "For a person we use this word. w - h - o",
     "Bir kişi için bu kelimeyi kullanırız. w - h - o"
    ]
   },
   {
    "type": "speak",
    "sentence": "A tourist is a person who visits new places.",
    "tr": "Turist, yeni yerleri gezen bir kişidir."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 0,
    "blank": "tourist",
    "hint": [
     "A person who visits a place on holiday. t - o - u - r - i - s - t",
     "Tatilde bir yeri gezen kişi. t - o - u - r - i - s - t"
    ]
   },
   {
    "type": "dictation",
    "word": "statue",
    "e": "🗿",
    "hint": [
     "It starts with “s”. It is made of stone and stands in a square.",
     "“s” ile başlıyor. Taştan yapılır ve meydanda durur."
    ]
   },
   {
    "type": "order",
    "tr": "Turist seyahat eden bir kişidir.",
    "answer": "A tourist is a person who travels",
    "extra": "which",
    "hint": [
     "Start with: “A tourist is …”",
     "Şöyle başla: “A tourist is …”"
    ]
   },
   {
    "type": "story",
    "say": "Mert visited a cave in Cappadocia. It was a cave where people lived a long time ago. His guide, who knew the history well, showed him some old paintings.",
    "q": "Who showed Mert the old paintings?",
    "tr": "Mert'e eski resimleri kim gösterdi?",
    "options": [
     "his guide",
     "his teacher",
     "a tourist"
    ],
    "answer": "his guide",
    "hint": [
     "Listen for: “His g…, who knew the history…”.",
     "Şuna dikkat et: “His g…, who knew the history…”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Burası sultanların yaşadığı bir saray.",
    "answer": "This is a palace where the sultans lived."
   }
  ]
 },
 "songs": [
  {
   "title": "Palace Visit",
   "lines": [
    "This is the <b>palace</b> where a king once lived,",
    "Here is a <b>statue</b> which he loved to see,",
    "Here is a <b>tourist</b> who has come to visit,",
    "A happy visitor, just like me!"
   ]
  },
  {
   "title": "Old Stones",
   "lines": [
    "We walk through the <b>ruins</b> which are old and grey,",
    "Here is an <b>ancient</b> street where people used to play,",
    "We see a <b>landmark</b> that stands so tall,",
    "It is the best place of all!"
   ]
  },
  {
   "title": "Into the Cave",
   "lines": [
    "Follow me into the <b>cave</b> where it is dark and cool,",
    "I hold my <b>guidebook</b>, which is my guide,",
    "A friend who loves adventure walks by my side,",
    "And the bats are sleeping, quiet as a pool!"
   ]
  },
  {
   "title": "My Guidebook",
   "lines": [
    "My <b>guidebook</b> is a book which I love,",
    "It shows a <b>landmark</b> like a bird above,",
    "A <b>tourist</b> who reads can find the best,",
    "The best places, and all the rest!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep in Ephesus",
  "e": "🏺",
  "lines": [
   [
    "Ephesus is an ancient city near İzmir, and it is a place every tourist should visit.",
    "Efes, İzmir yakınlarında antik bir şehirdir ve her turistin ziyaret etmesi gereken bir yerdir."
   ],
   [
    "It has beautiful ruins which are more than two thousand years old.",
    "İki bin yıldan daha eski, güzel kalıntıları vardır."
   ],
   [
    "Zeynep, who lives in İzmir, visited it with her class last spring.",
    "İzmir'de yaşayan Zeynep geçen bahar sınıfıyla orayı ziyaret etti."
   ],
   [
    "Their teacher gave them a guidebook which had many photos and maps.",
    "Öğretmenleri onlara birçok fotoğraf ve harita içeren bir rehber kitap verdi."
   ],
   [
    "They walked to the big theatre where thousands of people watched plays.",
    "Binlerce kişinin oyun izlediği büyük tiyatroya yürüdüler."
   ],
   [
    "They also saw an old library whose walls are still standing.",
    "Duvarları hâlâ ayakta duran eski bir kütüphane de gördüler."
   ],
   [
    "Zeynep took a lot of photos for her friend Can, who was ill that day.",
    "Zeynep o gün hasta olan arkadaşı Can için çok fotoğraf çekti."
   ],
   [
    "She says, “Ephesus is a landmark that I will never forget!”",
    "“Efes asla unutmayacağım bir simge!” diyor."
   ]
  ],
  "qs": [
   {
    "q": "Where is Ephesus?",
    "tr": "Efes nerede?",
    "options": [
     "near İzmir",
     "near Ankara",
     "near Antalya"
    ],
    "answer": "near İzmir"
   },
   {
    "q": "What did the teacher give the students?",
    "tr": "Öğretmen öğrencilere ne verdi?",
    "options": [
     "a guidebook",
     "a ticket",
     "a statue"
    ],
    "answer": "a guidebook"
   },
   {
    "q": "Why did Zeynep take photos for Can?",
    "tr": "Zeynep neden Can için fotoğraf çekti?",
    "options": [
     "because he was ill",
     "because he was late",
     "because he liked photos"
    ],
    "answer": "because he was ill"
   }
  ]
 },
 "listening": [
  {
   "say": "A tourist is a person who visits a place on holiday.",
   "q": "What is a tourist?",
   "tr": "Turist nedir?",
   "options": [
    {
     "e": "🧳",
     "v": "a visitor"
    },
    {
     "e": "👩‍🏫",
     "v": "a teacher"
    },
    {
     "e": "👨‍🍳",
     "v": "a cook"
    }
   ],
   "answer": "a visitor"
  },
  {
   "say": "Mert is looking at the statue which stands in front of the museum.",
   "q": "Where is the statue?",
   "tr": "Heykel nerede?",
   "options": [
    {
     "e": "🏛️",
     "v": "in front of the museum"
    },
    {
     "e": "🏫",
     "v": "behind the school"
    },
    {
     "e": "🌳",
     "v": "in the park"
    }
   ],
   "answer": "in front of the museum"
  },
  {
   "say": "We visited a cave where some bats were sleeping.",
   "q": "What was in the cave?",
   "tr": "Mağarada ne vardı?",
   "options": [
    {
     "e": "🦇",
     "v": "bats"
    },
    {
     "e": "🐦",
     "v": "birds"
    },
    {
     "e": "🐟",
     "v": "fish"
    }
   ],
   "answer": "bats"
  },
  {
   "say": "The girl whose guidebook is red is my cousin Elif.",
   "q": "What colour is Elif's guidebook?",
   "tr": "Elif'in rehber kitabı hangi renk?",
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
   "answer": "red"
  },
  {
   "say": "The palace which we visited yesterday was very big.",
   "q": "When did they visit the palace?",
   "tr": "Saraya ne zaman gittiler?",
   "options": [
    {
     "e": "🌙",
     "v": "yesterday"
    },
    {
     "e": "☀️",
     "v": "today"
    },
    {
     "e": "📆",
     "v": "tomorrow"
    }
   ],
   "answer": "yesterday"
  }
 ],
 "speaking": [
  {
   "e": "🧳",
   "en": "A tourist is a person who visits new places.",
   "tr": "Turist, yeni yerleri gezen kişidir."
  },
  {
   "e": "📖",
   "en": "This is the guidebook which I bought in Ankara.",
   "tr": "Bu, Ankara'da aldığım rehber kitap."
  },
  {
   "e": "🏰",
   "en": "Topkapı is a palace where the sultans lived.",
   "tr": "Topkapı, sultanların yaşadığı bir saraydır."
  },
  {
   "e": "🗿",
   "en": "I like the statue which stands in the square.",
   "tr": "Meydanda duran heykeli seviyorum."
  },
  {
   "e": "👦",
   "en": "Mert is the boy whose brother is a guide.",
   "tr": "Mert, abisi rehber olan çocuktur."
  }
 ],
 "write": {
  "title": "A Place in Türkiye Every Tourist Should Visit",
  "en": "Your English teacher has asked you to write an article for the school magazine called “A place in Türkiye every tourist should visit”. Say where the place is, what tourists can see there, and why they will like it.",
  "tr": "İngilizce öğretmenin okul dergisi için “Türkiye'de her turistin gezmesi gereken bir yer” başlıklı bir makale yazmanı istedi. Yerin nerede olduğunu, turistlerin orada neler görebileceğini ve neden seveceklerini anlat.",
  "starters": [
   "I think every tourist should visit",
   "It is a place where",
   "You can see",
   "There is a guide who",
   "It is a city which",
   "I love it because"
  ],
  "checks": [
   {
    "re": /\b(who|whose|where)\b/,
    "t": "“who / where / whose” ile bir ilgi cümlesi kur (a place where…, a guide who…)"
   },
   {
    "re": /\b(which|that)\b/,
    "t": "“which / that” ile bir ilgi cümlesi kur (a landmark which…, a city that…)"
   }
  ],
  "model": "Cappadocia is a place in Türkiye that every tourist should visit. It is a region where you can see strange rocks and ancient cave houses. I went there last summer with my family, and we met a guide who knew every story about the area. He showed us an old cave church which was full of paintings. The landmark that I liked best was a tall rock called Uchisar Castle. It is a place where you can see the whole valley. In the morning, many tourists take a balloon ride, which is really exciting. Please read a guidebook before you go, and take lots of photos!"
 },
 "towers": [
  {
   "e": "🧳",
   "title": "A Tourist in İstanbul",
   "steps": [
    {
     "tr": [
      [
       "Sarayı gezer.",
       "does"
      ]
     ],
     "en": [
      [
       "visits the palace",
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
       "Sarayı gezer.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "visits the palace",
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
       "İstanbul'da",
       "where"
      ],
      [
       "Sarayı gezer.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "visits the palace",
       "does"
      ],
      [
       "in İstanbul",
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
       "her yaz",
       "when"
      ],
      [
       "İstanbul'da",
       "where"
      ],
      [
       "Sarayı gezer.",
       "does"
      ]
     ],
     "en": [
      [
       "Elif",
       "who"
      ],
      [
       "visits the palace",
       "does"
      ],
      [
       "in İstanbul",
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
   "e": "🗿",
   "title": "At the Museum",
   "steps": [
    {
     "tr": [
      [
       "Heykele bakar.",
       "does"
      ]
     ],
     "en": [
      [
       "looks at the statue",
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
       "Heykele bakar.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "looks at the statue",
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
       "müzede",
       "where"
      ],
      [
       "Heykele bakar.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "looks at the statue",
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
       "Kerem",
       "who"
      ],
      [
       "cumartesi günü",
       "when"
      ],
      [
       "müzede",
       "where"
      ],
      [
       "Heykele bakar.",
       "does"
      ]
     ],
     "en": [
      [
       "Kerem",
       "who"
      ],
      [
       "looks at the statue",
       "does"
      ],
      [
       "in the museum",
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
   "e": "🦇",
   "title": "Cave Trip",
   "steps": [
    {
     "tr": [
      [
       "Mağarayı keşfeder.",
       "does"
      ]
     ],
     "en": [
      [
       "explores the cave",
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
       "Mağarayı keşfeder.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "explores the cave",
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
       "Kapadokya'da",
       "where"
      ],
      [
       "Mağarayı keşfeder.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "explores the cave",
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
       "Deniz",
       "who"
      ],
      [
       "geçen hafta",
       "when"
      ],
      [
       "Kapadokya'da",
       "where"
      ],
      [
       "Mağarayı keşfeder.",
       "does"
      ]
     ],
     "en": [
      [
       "Deniz",
       "who"
      ],
      [
       "explores the cave",
       "does"
      ],
      [
       "in Cappadocia",
       "where"
      ],
      [
       "last week",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 48 ----------
UNITS_PET.push({
 "L": {
  "rank": "Rock Star",
  "theme": "Music and Concerts",
  "tr": "Müzik ve konserler",
  "icon": "🎸",
  "song": {
   "title": "Concert Night",
   "lines": [
    "The <b>concert</b> is exciting, I am excited too,",
    "The <b>band</b> is on the <b>stage</b>, and the music is new,",
    "The <b>audience</b> is clapping, what a night,",
    "I am so happy, the lights are bright!"
   ]
  },
  "cards": [
   {
    "e": "🎫",
    "w": "concert",
    "ipa": "/ˈkɑnsərt/",
    "tr": "Konser",
    "ex": "The concert was exciting, and I was excited all evening."
   },
   {
    "e": "🎸",
    "w": "band",
    "ipa": "/bænd/",
    "tr": "Müzik grubu",
    "ex": "The band played an interesting song, and I was interested in the drummer."
   },
   {
    "e": "🎤",
    "w": "singer",
    "ipa": "/ˈsɪŋər/",
    "tr": "Şarkıcı",
    "ex": "The singer was tired because the tour was tiring."
   },
   {
    "e": "👏",
    "w": "audience",
    "ipa": "/ˈɔdiəns/",
    "tr": "Seyirci, dinleyici",
    "ex": "The audience was excited when the music started."
   },
   {
    "e": "🎭",
    "w": "stage",
    "ipa": "/steɪdʒ/",
    "tr": "Sahne",
    "ex": "The lights on the stage were amazing, so everyone was amazed."
   },
   {
    "e": "🎙️",
    "w": "microphone",
    "ipa": "/ˈmaɪkrəˌfoʊn/",
    "tr": "Mikrofon",
    "ex": "The microphone did not work, which was annoying, and the singer was annoyed."
   },
   {
    "e": "🤩",
    "w": "exciting",
    "ipa": "/ɪkˈsaɪtɪŋ/",
    "tr": "Heyecan verici",
    "ex": "It was an exciting show, and I felt excited."
   },
   {
    "e": "😞",
    "w": "disappointed",
    "ipa": "/ˌdɪsəˈpɔɪntɪd/",
    "tr": "Hayal kırıklığına uğramış",
    "ex": "We were disappointed because the concert was boring."
   }
  ],
  "tasks": [
   {
    "type": "song",
    "line": 2,
    "blank": "audience",
    "options": [
     "audience",
     "singer",
     "microphone"
    ],
    "hint": [
     "These people sit and watch the show, and they clap at the end.",
     "Bu kişiler oturup gösteriyi izler ve sonunda alkışlar."
    ]
   },
   {
    "type": "pick",
    "q": "You sing into it, and it makes your voice louder. What is it?",
    "tr": "İçine şarkı söylersin ve sesini yükseltir. Nedir?",
    "options": [
     {
      "e": "🎙️",
      "v": "microphone"
     },
     {
      "e": "🎭",
      "v": "stage"
     },
     {
      "e": "🎫",
      "v": "concert"
     },
     {
      "e": "🎸",
      "v": "band"
     }
    ],
    "answer": "microphone",
    "hint": [
     "Singers hold it in their hand.",
     "Şarkıcılar onu elinde tutar."
    ]
   },
   {
    "type": "listen",
    "say": "The concert was very exciting, but my little brother was tired and went to sleep.",
    "q": "How was the boy's little brother?",
    "tr": "Çocuğun küçük kardeşi nasıldı?",
    "options": [
     {
      "e": "😴",
      "v": "tired"
     },
     {
      "e": "🤩",
      "v": "excited"
     },
     {
      "e": "😞",
      "v": "bored"
     }
    ],
    "answer": "tired",
    "hint": [
     "Listen again: “…my little brother was t…”.",
     "Tekrar dinle: “…my little brother was t…”."
    ]
   },
   {
    "type": "write",
    "e": "😴",
    "sentence": "The film was boring, so I was ___.",
    "answer": "bored",
    "mask": "B _ _ _ _",
    "tr": "Film sıkıcıydı, bu yüzden sıkıldım.",
    "hint": [
     "A person feels this way. b - o - r - e - d",
     "Bir kişi böyle hisseder. b - o - r - e - d"
    ]
   },
   {
    "type": "speak",
    "sentence": "The concert was exciting and I was excited.",
    "tr": "Konser heyecan vericiydi ve ben heyecanlıydım."
   }
  ],
  "hard": [
   {
    "type": "songtype",
    "line": 0,
    "blank": "concert",
    "hint": [
     "A show where a band plays music. c - o - n - c - e - r - t",
     "Bir grubun müzik çaldığı gösteri. c - o - n - c - e - r - t"
    ]
   },
   {
    "type": "dictation",
    "word": "microphone",
    "e": "🎙️",
    "hint": [
     "It starts with “m”. Singers use it to be louder.",
     "“m” ile başlıyor. Şarkıcılar sesini yükseltmek için kullanır."
    ]
   },
   {
    "type": "order",
    "tr": "Konser çok heyecan vericiydi.",
    "answer": "The concert was very exciting",
    "extra": "excited",
    "hint": [
     "Start with: “The concert was …”",
     "Şöyle başla: “The concert was …”"
    ]
   },
   {
    "type": "story",
    "say": "Elif went to a concert last night. She was really excited, but the microphone did not work for ten minutes. Then the music started, and everyone was happy.",
    "q": "What was the problem at the concert?",
    "tr": "Konserde sorun neydi?",
    "options": [
     "the microphone did not work",
     "the stage was small",
     "the band was late"
    ],
    "answer": "the microphone did not work",
    "hint": [
     "Listen for: “…the m… did not work”.",
     "Şuna dikkat et: “…the m… did not work”."
    ]
   },
   {
    "type": "speakTr",
    "tr": "Seyircilerin hepsi çok heyecanlıydı.",
    "answer": "The audience was very excited."
   }
  ]
 },
 "songs": [
  {
   "title": "My Favourite Band",
   "lines": [
    "I am interested in my favourite <b>band</b>,",
    "Their songs are interesting, the best in the land,",
    "The <b>singer</b> is amazing, she is never boring,",
    "I am so excited, my heart is soaring!"
   ]
  },
  {
   "title": "Microphone Check",
   "lines": [
    "Hello, hello, is the <b>microphone</b> on?",
    "The song is exciting, let us sing along,",
    "I am not bored and I am not tired,",
    "The <b>audience</b> is clapping, we are all inspired!"
   ]
  },
  {
   "title": "After the Show",
   "lines": [
    "The <b>concert</b> is over and I am tired,",
    "It was a tiring night, but we were inspired,",
    "Some fans are <b>disappointed</b>, they wanted more,",
    "I am happy, I will come back, that is for sure!"
   ]
  },
  {
   "title": "Lights and Sound",
   "lines": [
    "The lights on the <b>stage</b> are bright and blue,",
    "It is an <b>exciting</b> show for me and you,",
    "The <b>band</b> is playing, the drums go boom,",
    "I am so excited, I am dancing in the room!"
   ]
  }
 ],
 "reading": {
  "title": "Kerem's First Concert",
  "e": "🎸",
  "lines": [
   [
    "Kerem went to his first concert last Saturday with his cousin Deniz.",
    "Kerem geçen cumartesi kuzeni Deniz'le ilk konserine gitti."
   ],
   [
    "He was very excited because his favourite band was playing in Ankara.",
    "Çok heyecanlıydı çünkü en sevdiği grup Ankara'da çalıyordu."
   ],
   [
    "The hall was full, and the audience was clapping and singing.",
    "Salon doluydu ve seyirciler alkışlayıp şarkı söylüyordu."
   ],
   [
    "At first Kerem was disappointed because the microphone did not work.",
    "Başta Kerem hayal kırıklığına uğradı çünkü mikrofon çalışmıyordu."
   ],
   [
    "But after five minutes the singer came back on the stage with a new one.",
    "Ama beş dakika sonra şarkıcı yeni bir mikrofonla sahneye geri geldi."
   ],
   [
    "The show was amazing, and the songs were really exciting.",
    "Gösteri harikaydı ve şarkılar gerçekten heyecan vericiydi."
   ],
   [
    "Deniz was tired after the long evening, but Kerem was not bored for a minute.",
    "Deniz uzun akşamdan sonra yorgundu ama Kerem bir dakika bile sıkılmadı."
   ],
   [
    "He says it was the most interesting night of his life.",
    "Bunun hayatının en ilginç gecesi olduğunu söylüyor."
   ]
  ],
  "qs": [
   {
    "q": "Why was Kerem disappointed at first?",
    "tr": "Kerem başta neden hayal kırıklığına uğradı?",
    "options": [
     "because the microphone did not work",
     "because the band was late",
     "because the hall was empty"
    ],
    "answer": "because the microphone did not work"
   },
   {
    "q": "Where was the concert?",
    "tr": "Konser neredeydi?",
    "options": [
     "in Ankara",
     "in İzmir",
     "in İstanbul"
    ],
    "answer": "in Ankara"
   },
   {
    "q": "How did Deniz feel after the concert?",
    "tr": "Deniz konserden sonra nasıl hissetti?",
    "options": [
     "tired",
     "bored",
     "excited"
    ],
    "answer": "tired"
   }
  ]
 },
 "listening": [
  {
   "say": "I was disappointed because the concert was boring.",
   "q": "Why was he disappointed?",
   "tr": "Neden hayal kırıklığına uğradı?",
   "options": [
    {
     "e": "😴",
     "v": "it was boring"
    },
    {
     "e": "🎫",
     "v": "he lost his ticket"
    },
    {
     "e": "🌧️",
     "v": "it was raining"
    }
   ],
   "answer": "it was boring"
  },
  {
   "say": "The singer is tired because the tour is very tiring.",
   "q": "Why is the singer tired?",
   "tr": "Şarkıcı neden yorgun?",
   "options": [
    {
     "e": "🚌",
     "v": "the tour"
    },
    {
     "e": "🎬",
     "v": "the film"
    },
    {
     "e": "📝",
     "v": "the exam"
    }
   ],
   "answer": "the tour"
  },
  {
   "say": "Zeynep is interested in music, and she thinks guitar lessons are interesting.",
   "q": "What is Zeynep interested in?",
   "tr": "Zeynep neyle ilgileniyor?",
   "options": [
    {
     "e": "🎵",
     "v": "music"
    },
    {
     "e": "⚽",
     "v": "sport"
    },
    {
     "e": "🎨",
     "v": "art"
    }
   ],
   "answer": "music"
  },
  {
   "say": "The band was amazing, and the audience was very excited.",
   "q": "How was the audience?",
   "tr": "Seyirciler nasıldı?",
   "options": [
    {
     "e": "🤩",
     "v": "excited"
    },
    {
     "e": "😴",
     "v": "bored"
    },
    {
     "e": "😠",
     "v": "angry"
    }
   ],
   "answer": "excited"
  },
  {
   "say": "It was a surprising night. The singer was a teenager, and everyone was surprised.",
   "q": "Who was the singer?",
   "tr": "Şarkıcı kimdi?",
   "options": [
    {
     "e": "🧒",
     "v": "a teenager"
    },
    {
     "e": "👩‍🏫",
     "v": "a teacher"
    },
    {
     "e": "🩺",
     "v": "a doctor"
    }
   ],
   "answer": "a teenager"
  }
 ],
 "speaking": [
  {
   "e": "🎫",
   "en": "The concert was exciting.",
   "tr": "Konser heyecan vericiydi."
  },
  {
   "e": "🤩",
   "en": "I am excited about the show.",
   "tr": "Gösteri için heyecanlıyım."
  },
  {
   "e": "😴",
   "en": "The film was boring, so I was bored.",
   "tr": "Film sıkıcıydı, bu yüzden sıkıldım."
  },
  {
   "e": "🎤",
   "en": "Are you interested in music?",
   "tr": "Müzikle ilgileniyor musun?"
  },
  {
   "e": "😞",
   "en": "We were disappointed because the singer was late.",
   "tr": "Şarkıcı geç kaldığı için hayal kırıklığına uğradık."
  }
 ],
 "write": {
  "title": "An Email About a Concert",
  "en": "Your friend Ece sent you an email. Write an email to Ece and answer her questions: Where did you go last weekend? Was the concert good? How did you feel?",
  "tr": "Arkadaşın Ece sana e-posta gönderdi. Ona bir e-posta yaz ve sorularını cevapla: Geçen hafta sonu nereye gittin? Konser iyi miydi? Nasıl hissettin?",
  "starters": [
   "Hi Ece,",
   "Thanks for your email.",
   "Last Saturday I went to",
   "I was very excited because",
   "The concert was",
   "Write soon,"
  ],
  "checks": [
   {
    "re": /\b(excited|bored|interested|tired|disappointed|surprised|amazed|annoyed|worried|embarrassed|pleased|inspired)\b/,
    "t": "Bir duyguyu “-ed” sıfatıyla anlat (I was excited / bored / tired…)"
   },
   {
    "re": /\b(exciting|boring|interesting|tiring|amazing|surprising|annoying|disappointing|fascinating|relaxing|fantastic)\b/,
    "t": "Bir şeyi “-ing” sıfatıyla anlat (The concert was exciting / amazing…)"
   }
  ],
  "model": "Hi Ece, Thanks for your email! Last Saturday I went to a concert in Ankara with my cousin. I was really excited because my favourite band was playing. The concert was amazing, and the singer was fantastic. The audience was clapping and singing all evening. At first I was a bit disappointed because the microphone did not work, but they fixed it quickly. After the show I was tired, but it was an exciting night. I am very interested in music now, and I want to learn the guitar. Would you like to come to the next concert with us? Write soon, Mert"
 },
 "towers": [
  {
   "e": "🎤",
   "title": "On the Stage",
   "steps": [
    {
     "tr": [
      [
       "Şarkı söyler.",
       "does"
      ]
     ],
     "en": [
      [
       "sings a song",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Şarkıcı",
       "who"
      ],
      [
       "Şarkı söyler.",
       "does"
      ]
     ],
     "en": [
      [
       "The singer",
       "who"
      ],
      [
       "sings a song",
       "does"
      ]
     ]
    },
    {
     "tr": [
      [
       "Şarkıcı",
       "who"
      ],
      [
       "sahnede",
       "where"
      ],
      [
       "Şarkı söyler.",
       "does"
      ]
     ],
     "en": [
      [
       "The singer",
       "who"
      ],
      [
       "sings a song",
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
       "Şarkıcı",
       "who"
      ],
      [
       "bu gece",
       "when"
      ],
      [
       "sahnede",
       "where"
      ],
      [
       "Şarkı söyler.",
       "does"
      ]
     ],
     "en": [
      [
       "The singer",
       "who"
      ],
      [
       "sings a song",
       "does"
      ],
      [
       "on the stage",
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
   "e": "🎸",
   "title": "Band Practice",
   "steps": [
    {
     "tr": [
      [
       "Gitar çalar.",
       "does"
      ]
     ],
     "en": [
      [
       "plays the guitar",
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
       "Gitar çalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays the guitar",
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
       "garajda",
       "where"
      ],
      [
       "Gitar çalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays the guitar",
       "does"
      ],
      [
       "in the garage",
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
       "her cuma",
       "when"
      ],
      [
       "garajda",
       "where"
      ],
      [
       "Gitar çalar.",
       "does"
      ]
     ],
     "en": [
      [
       "Can",
       "who"
      ],
      [
       "plays the guitar",
       "does"
      ],
      [
       "in the garage",
       "where"
      ],
      [
       "every Friday",
       "when"
      ]
     ]
    }
   ]
  },
  {
   "e": "👏",
   "title": "At the Concert",
   "steps": [
    {
     "tr": [
      [
       "Alkışlıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "is clapping",
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
       "Alkışlıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is clapping",
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
       "konserde",
       "where"
      ],
      [
       "Alkışlıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is clapping",
       "does"
      ],
      [
       "at the concert",
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
       "bütün akşam",
       "when"
      ],
      [
       "konserde",
       "where"
      ],
      [
       "Alkışlıyor.",
       "does"
      ]
     ],
     "en": [
      [
       "Zeynep",
       "who"
      ],
      [
       "is clapping",
       "does"
      ],
      [
       "at the concert",
       "where"
      ],
      [
       "all evening",
       "when"
      ]
     ]
    }
   ]
  }
 ]
});

// ---------- Ünite 49 ----------
UNITS_PET.push({
 "L": {
  "rank": "Fitness Hero",
  "theme": "Healthy Habits",
  "tr": "Sağlıklı alışkanlıklar",
  "icon": "🥦",
  "song": {
   "title": "Healthy Day",
   "lines": [
    "I love <b>jogging</b> in the morning light,",
    "I want to eat <b>vegetables</b>, they taste just right,",
    "I stopped eating <b>junk food</b>, now I feel so strong,",
    "Being <b>healthy</b> is fun, so sing along!"
   ]
  },
  "cards": [
   { "e": "🏃", "w": "exercise", "ipa": "/ˈɛksərˌsaɪz/", "tr": "Egzersiz, spor", "ex": "I enjoy doing exercise before school, and I want to do more." },
   { "e": "🥗", "w": "diet", "ipa": "/ˈdaɪət/", "tr": "Beslenme düzeni, diyet", "ex": "I love eating fruit, so my diet is good, and I want to keep it that way." },
   { "e": "🥦", "w": "vegetables", "ipa": "/ˈvɛdʒtəbəlz/", "tr": "Sebzeler", "ex": "Ece loves eating vegetables, and she wants to grow some in the garden." },
   { "e": "🏋️", "w": "gym", "ipa": "/dʒɪm/", "tr": "Spor salonu", "ex": "Mert enjoys going to the gym, and he wants to get stronger." },
   { "e": "💪", "w": "healthy", "ipa": "/ˈhɛlθi/", "tr": "Sağlıklı", "ex": "I want to stay healthy, so I enjoy playing sports." },
   { "e": "🍔", "w": "junk food", "ipa": "/ˈdʒʌŋk ˌfud/", "tr": "Abur cubur", "ex": "I decided to stop eating junk food, because it is not good for me." },
   { "e": "👟", "w": "jogging", "ipa": "/ˈdʒɑɡɪŋ/", "tr": "Hafif tempolu koşu", "ex": "Kerem enjoys jogging in the park, and he wants to run a race." },
   { "e": "🙆", "w": "stretch", "ipa": "/strɛtʃ/", "tr": "Esnemek, germek", "ex": "I try to stretch every morning, and I love stretching my arms." }
  ],
  "tasks": [
   {
    "type": "song", "line": 0, "blank": "jogging",
    "options": ["jogging", "gym", "stretch"],
    "hint": ["You do this when you run slowly for exercise.", "Egzersiz için yavaş yavaş koşarken bunu yaparsın."]
   },
   {
    "type": "pick",
    "q": "It is a place with machines where people do sports. What is it?",
    "tr": "İçinde makineler olan ve insanların spor yaptığı yerdir. Nedir?",
    "options": [{ "e": "🏋️", "v": "gym" }, { "e": "🥦", "v": "vegetables" }, { "e": "🍔", "v": "junk food" }, { "e": "🥗", "v": "diet" }],
    "answer": "gym",
    "hint": ["You go there to lift weights and get stronger.", "Oraya ağırlık kaldırmak ve güçlenmek için gidersin."]
   },
   {
    "type": "listen",
    "say": "I love playing football, but I decided to stop eating junk food.",
    "q": "What did the boy decide to stop eating?",
    "tr": "Çocuk neyi yemeyi bırakmaya karar verdi?",
    "options": [{ "e": "🍔", "v": "junk food" }, { "e": "⚽", "v": "football" }, { "e": "🥦", "v": "vegetables" }],
    "answer": "junk food",
    "hint": ["Listen again: “…stop eating j…”.", "Tekrar dinle: “…stop eating j…”."]
   },
   {
    "type": "write", "e": "👟",
    "sentence": "Kerem enjoys ___ in the park every morning.",
    "answer": "jogging", "mask": "J _ _ _ _ _ _",
    "tr": "Kerem her sabah parkta koşmaktan hoşlanır.",
    "hint": ["After “enjoy” we use verb-ing. j - o - g - g - i - n - g", "“enjoy” den sonra fiil-ing kullanırız. j - o - g - g - i - n - g"]
   },
   {
    "type": "speak",
    "sentence": "I enjoy eating vegetables, and I want to stay healthy.",
    "tr": "Sebze yemekten hoşlanırım ve sağlıklı kalmak istiyorum."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 1, "blank": "vegetables",
    "hint": ["You should eat these every day, like carrots and peas. v - e - g - e - t - a - b - l - e - s", "Havuç ve bezelye gibi bunları her gün yemelisin. v - e - g - e - t - a - b - l - e - s"]
   },
   {
    "type": "dictation", "word": "exercise", "e": "🏃",
    "hint": ["It starts with “e”. You do it to keep your body strong.", "“e” ile başlıyor. Vücudunu güçlü tutmak için yaparsın."]
   },
   {
    "type": "order",
    "tr": "Ece sebze yemeyi sever.",
    "answer": "Ece loves eating vegetables",
    "extra": "eat",
    "hint": ["Start with: “Ece loves …”", "Şöyle başla: “Ece loves …”"]
   },
   {
    "type": "story",
    "say": "Deniz stopped eating junk food last month. Now he loves jogging in the park, and he wants to run a race. Every morning he tries to stretch before he runs.",
    "q": "What does Deniz want to do?",
    "tr": "Deniz ne yapmak istiyor?",
    "options": ["run a race", "go to the gym", "eat pizza"],
    "answer": "run a race",
    "hint": ["Listen for: “…wants to run a r…”.", "Şuna kulak ver: “…wants to run a r…”."]
   },
   {
    "type": "speakTr",
    "tr": "Her gün egzersiz yapmaya çalışıyorum.",
    "answer": "I try to do exercise every day."
   }
  ]
 },
 "songs": [
  {
   "title": "Time to Stretch",
   "lines": [
    "I try to <b>stretch</b> before I play,",
    "I enjoy moving every day,",
    "I want to do my <b>exercise</b>,",
    "Then I feel strong and I feel wise!"
   ]
  },
  {
   "title": "At the Gym",
   "lines": [
    "Come with me to the <b>gym</b>,",
    "I love running and I love to swim,",
    "We decide to try our best,",
    "And then we take a little rest!"
   ]
  },
  {
   "title": "My Good Diet",
   "lines": [
    "A good <b>diet</b> is my plan,",
    "I love eating fruit when I can,",
    "I want to stay <b>healthy</b> as I grow,",
    "Eating well helps me to glow!"
   ]
  },
  {
   "title": "No More Junk Food",
   "lines": [
    "I stopped eating <b>junk food</b> today,",
    "I decided to eat fruit and play,",
    "I love eating <b>vegetables</b> too,",
    "They are good for me and for you!"
   ]
  }
 ],
 "reading": {
  "title": "Zeynep's Healthy Week",
  "e": "🥦",
  "lines": [
   ["Zeynep wants to be strong, so she has a healthy routine.", "Zeynep güçlü olmak istiyor, bu yüzden sağlıklı bir rutini var."],
   ["She enjoys jogging in the park before school every morning.", "Her sabah okuldan önce parkta koşmaktan hoşlanır."],
   ["First she tries to stretch for five minutes, because she doesn't want to hurt her legs.", "Önce beş dakika esnemeye çalışır, çünkü bacaklarını incitmek istemez."],
   ["Last year she stopped eating junk food, and now she loves eating vegetables.", "Geçen yıl abur cubur yemeyi bıraktı ve şimdi sebze yemeyi seviyor."],
   ["Her diet is simple: fruit for breakfast, a big salad for lunch and soup for dinner.", "Beslenme düzeni basit: kahvaltıda meyve, öğle yemeğinde büyük bir salata ve akşam yemeğinde çorba."],
   ["On Saturdays she goes to the gym with her cousin Can.", "Cumartesi günleri kuzeni Can'la spor salonuna gider."],
   ["They enjoy playing basketball there, and they never forget to drink water.", "Orada basketbol oynamaktan hoşlanırlar ve su içmeyi asla unutmazlar."],
   ["Zeynep has decided to run a small race next summer.", "Zeynep gelecek yaz küçük bir yarışta koşmaya karar verdi."]
  ],
  "qs": [
   { "q": "What does Zeynep do before she jogs?", "tr": "Zeynep koşmadan önce ne yapar?", "options": ["She stretches", "She goes to the gym", "She plays basketball"], "answer": "She stretches" },
   { "q": "What did Zeynep stop eating?", "tr": "Zeynep neyi yemeyi bıraktı?", "options": ["junk food", "vegetables", "fruit"], "answer": "junk food" },
   { "q": "What does Zeynep want to do next summer?", "tr": "Zeynep gelecek yaz ne yapmak istiyor?", "options": ["run a race", "go to the gym", "stop jogging"], "answer": "run a race" }
  ]
 },
 "listening": [
  {
   "say": "I enjoy playing tennis, and I want to join a tennis club.",
   "q": "What does the girl want to join?", "tr": "Kız neye katılmak istiyor?",
   "options": [{ "e": "🎾", "v": "a tennis club" }, { "e": "♟️", "v": "a chess club" }, { "e": "🎵", "v": "a music club" }],
   "answer": "a tennis club"
  },
  {
   "say": "Mert loves eating vegetables, but he doesn't like eating fish.",
   "q": "What doesn't Mert like eating?", "tr": "Mert neyi yemekten hoşlanmaz?",
   "options": [{ "e": "🐟", "v": "fish" }, { "e": "🥕", "v": "carrots" }, { "e": "🥦", "v": "broccoli" }],
   "answer": "fish"
  },
  {
   "say": "My brother decided to go jogging every morning before school.",
   "q": "When does he go jogging?", "tr": "Ne zaman koşuya çıkıyor?",
   "options": [{ "e": "🌅", "v": "in the morning" }, { "e": "🌙", "v": "in the evening" }, { "e": "☀️", "v": "at noon" }],
   "answer": "in the morning"
  },
  {
   "say": "I stopped drinking cola last month, and now I drink water.",
   "q": "What does she drink now?", "tr": "O şimdi ne içiyor?",
   "options": [{ "e": "💧", "v": "water" }, { "e": "🥤", "v": "cola" }, { "e": "🥛", "v": "milk" }],
   "answer": "water"
  },
  {
   "say": "Elif tries to stretch for ten minutes before she exercises.",
   "q": "How long does Elif stretch?", "tr": "Elif ne kadar süre esner?",
   "options": [{ "e": "⏰", "v": "ten minutes" }, { "e": "🕔", "v": "five minutes" }, { "e": "🕗", "v": "twenty minutes" }],
   "answer": "ten minutes"
  }
 ],
 "speaking": [
  { "e": "🏃", "en": "I want to do exercise every day.", "tr": "Her gün egzersiz yapmak istiyorum." },
  { "e": "🥗", "en": "I decided to have a healthy diet.", "tr": "Sağlıklı beslenmeye karar verdim." },
  { "e": "🍔", "en": "She stopped eating junk food.", "tr": "O abur cubur yemeyi bıraktı." },
  { "e": "🏋️", "en": "Do you enjoy going to the gym?", "tr": "Spor salonuna gitmekten hoşlanıyor musun?" },
  { "e": "🙆", "en": "I try to stretch before I run.", "tr": "Koşmadan önce esnemeye çalışırım." }
 ],
 "write": {
  "title": "How I Stay Healthy",
  "en": "Write an article for your school magazine called “How I Stay Healthy”. Say what you enjoy doing and what you want to try.",
  "tr": "Okul dergin için “Sağlıklı Kalmak İçin Neler Yapıyorum” başlıklı bir yazı yaz. Neler yapmaktan hoşlandığını ve neler denemek istediğini anlat.",
  "starters": ["I enjoy", "I love", "I stopped", "I want to", "I try to", "Next month I decided to"],
  "checks": [
   { "re": /\b(enjoy|enjoys|enjoyed|love|loves|loved|like|likes|hate|stop|stops|stopped|finish|keep|keeps|practise|prefer|avoid|mind|start|started)\s+\w+ing\b/, "t": "“enjoy / love / stop” + fiil-ing kullan (I enjoy jogging…)" },
   { "re": /\b(decide|decides|decided|want|wants|wanted|try|tries|tried|need|needs|hope|plan|learn|would like)\s+to\s+\w+/, "t": "“decide / want / try” + to + fiil kullan (I want to stay healthy…)" }
  ],
  "model": "I am Ece and I want to stay healthy, so I have a simple routine. Every morning I try to stretch for five minutes, and then I enjoy jogging in the park with my dog. I stopped eating junk food last year, and now I love eating vegetables and fruit. My diet is not perfect, but I try to drink a lot of water. On Saturdays I go to the gym with my cousin, and we do some exercise together. I decided to learn how to swim next summer because I want to be even stronger. Being healthy is not difficult, and it makes me feel happy every day."
 },
 "towers": [
  {
   "e": "🏃", "title": "Morning Jog",
   "steps": [
    { "tr": [["Koşmaktan hoşlanır.", "does"]], "en": [["enjoys jogging", "does"]] },
    { "tr": [["Kerem", "who"], ["Koşmaktan hoşlanır.", "does"]], "en": [["Kerem", "who"], ["enjoys jogging", "does"]] },
    { "tr": [["Kerem", "who"], ["parkta", "where"], ["Koşmaktan hoşlanır.", "does"]], "en": [["Kerem", "who"], ["enjoys jogging", "does"], ["in the park", "where"]] },
    { "tr": [["Kerem", "who"], ["her sabah", "when"], ["parkta", "where"], ["Koşmaktan hoşlanır.", "does"]], "en": [["Kerem", "who"], ["enjoys jogging", "does"], ["in the park", "where"], ["every morning", "when"]] }
   ]
  },
  {
   "e": "🥦", "title": "Healthy Dinner",
   "steps": [
    { "tr": [["Sebze yemeyi sever.", "does"]], "en": [["loves eating vegetables", "does"]] },
    { "tr": [["Ece", "who"], ["Sebze yemeyi sever.", "does"]], "en": [["Ece", "who"], ["loves eating vegetables", "does"]] },
    { "tr": [["Ece", "who"], ["evde", "where"], ["Sebze yemeyi sever.", "does"]], "en": [["Ece", "who"], ["loves eating vegetables", "does"], ["at home", "where"]] },
    { "tr": [["Ece", "who"], ["her akşam", "when"], ["evde", "where"], ["Sebze yemeyi sever.", "does"]], "en": [["Ece", "who"], ["loves eating vegetables", "does"], ["at home", "where"], ["every evening", "when"]] }
   ]
  },
  {
   "e": "🏋️", "title": "At the Gym",
   "steps": [
    { "tr": [["Daha güçlü olmak ister.", "does"]], "en": [["wants to get stronger", "does"]] },
    { "tr": [["Mert", "who"], ["Daha güçlü olmak ister.", "does"]], "en": [["Mert", "who"], ["wants to get stronger", "does"]] },
    { "tr": [["Mert", "who"], ["spor salonunda", "where"], ["Daha güçlü olmak ister.", "does"]], "en": [["Mert", "who"], ["wants to get stronger", "does"], ["at the gym", "where"]] },
    { "tr": [["Mert", "who"], ["okuldan sonra", "when"], ["spor salonunda", "where"], ["Daha güçlü olmak ister.", "does"]], "en": [["Mert", "who"], ["wants to get stronger", "does"], ["at the gym", "where"], ["after school", "when"]] }
   ]
  }
 ]
});

// ---------- Ünite 50 ----------
UNITS_PET.push({
 "L": {
  "rank": "Preliminary Champion",
  "theme": "Adventure Stories",
  "tr": "Macera hikâyeleri",
  "icon": "🧭",
  "song": {
   "title": "An Old Map",
   "lines": [
    "We were walking in the <b>desert</b> when we found a map,",
    "It showed a <b>treasure</b> that nobody had found,",
    "We took a <b>compass</b>, and we climbed with a <b>rope</b>,",
    "What an <b>adventure</b>, we jumped up and down!"
   ]
  },
  "cards": [
   { "e": "🗺️", "w": "adventure", "ipa": "/ædˈvɛntʃər/", "tr": "Macera", "ex": "It was a great adventure, and we had never done anything like it before." },
   { "e": "🏔️", "w": "explorer", "ipa": "/ɪkˈsplɔrər/", "tr": "Kâşif", "ex": "The explorer was walking through the forest when he heard a strange noise." },
   { "e": "💎", "w": "treasure", "ipa": "/ˈtrɛʒər/", "tr": "Hazine", "ex": "When we opened the box, we saw that someone had already taken the treasure." },
   { "e": "🚢", "w": "shipwreck", "ipa": "/ˈʃɪpˌrɛk/", "tr": "Batık gemi", "ex": "While we were diving, we found an old shipwreck." },
   { "e": "🧭", "w": "compass", "ipa": "/ˈkʌmpəs/", "tr": "Pusula", "ex": "I had lost my compass, so we were walking in circles." },
   { "e": "🪢", "w": "rope", "ipa": "/roʊp/", "tr": "İp, halat", "ex": "Kerem climbed down the rope while Ece was holding it." },
   { "e": "🏜️", "w": "desert", "ipa": "/ˈdɛzərt/", "tr": "Çöl", "ex": "We were crossing the desert when the sun went down." },
   { "e": "🚪", "w": "escape", "ipa": "/ɪˈskeɪp/", "tr": "Kaçmak, kurtulmak", "ex": "When we closed the door, the cat had already managed to escape." }
  ],
  "tasks": [
   {
    "type": "song", "line": 0, "blank": "desert",
    "options": ["desert", "rope", "compass"],
    "hint": ["It is very hot and sandy, and there is little water.", "Çok sıcak ve kumludur, suyu azdır."]
   },
   {
    "type": "pick",
    "q": "It is a tool that shows you north, south, east and west. What is it?",
    "tr": "Kuzeyi, güneyi, doğuyu ve batıyı gösteren bir araçtır. Nedir?",
    "options": [{ "e": "🧭", "v": "compass" }, { "e": "🪢", "v": "rope" }, { "e": "💎", "v": "treasure" }, { "e": "🚢", "v": "shipwreck" }],
    "answer": "compass",
    "hint": ["You can use it so you don't get lost.", "Kaybolmamak için kullanabilirsin."]
   },
   {
    "type": "listen",
    "say": "We were walking in the desert when it started to rain.",
    "q": "What were they doing when it started to rain?",
    "tr": "Yağmur başladığında ne yapıyorlardı?",
    "options": [{ "e": "🚶", "v": "walking" }, { "e": "🏊", "v": "swimming" }, { "e": "🍽️", "v": "eating" }],
    "answer": "walking",
    "hint": ["Listen again: “…were w… in the desert…”.", "Tekrar dinle: “…were w… in the desert…”."]
   },
   {
    "type": "write", "e": "🧗",
    "sentence": "Ece was holding the ___ while Kerem was climbing.",
    "answer": "rope", "mask": "R _ _ _",
    "tr": "Kerem tırmanırken Ece ipi tutuyordu.",
    "hint": ["It is a thick string you can climb. r - o - p - e", "Tırmanabileceğin kalın bir iptir. r - o - p - e"]
   },
   {
    "type": "speak",
    "sentence": "We were walking in the desert when we found an old map.",
    "tr": "Çölde yürürken eski bir harita bulduk."
   }
  ],
  "hard": [
   {
    "type": "songtype", "line": 2, "blank": "compass",
    "hint": ["It points north. c - o - m - p - a - s - s", "Kuzeyi gösterir. c - o - m - p - a - s - s"]
   },
   {
    "type": "dictation", "word": "treasure", "e": "💎",
    "hint": ["It starts with “t”. Pirates hide gold and jewels as this.", "“t” ile başlıyor. Korsanlar altın ve mücevherleri bu şekilde saklar."]
   },
   {
    "type": "order",
    "tr": "Biz çölde yürüyorduk.",
    "answer": "We were walking in the desert",
    "extra": "walked",
    "hint": ["Start with: “We were …”", "Şöyle başla: “We were …”"]
   },
   {
    "type": "story",
    "say": "Ali was walking on the beach when he saw an old shipwreck. Someone had left a rope near it. He climbed down the rope and found a small box. In the box there was a map!",
    "q": "What was in the box?",
    "tr": "Kutunun içinde ne vardı?",
    "options": ["a map", "a compass", "a rope"],
    "answer": "a map",
    "hint": ["Listen for the last sentence: “…there was a m…”.", "Son cümleyi dinle: “…there was a m…”."]
   },
   {
    "type": "speakTr",
    "tr": "Biz vardığımızda kedi çoktan kaçmıştı.",
    "answer": "The cat had already escaped when we arrived."
   }
  ]
 },
 "songs": [
  {
   "title": "The Explorer",
   "lines": [
    "The <b>explorer</b> was walking by the sea,",
    "When he saw a <b>shipwreck</b>, what could it be?",
    "He had read about it in an old book,",
    "So he swam down for a closer look!"
   ]
  },
  {
   "title": "Use the Compass",
   "lines": [
    "I was lost in the forest, but I had a <b>compass</b>,",
    "It pointed north while the wind was blowing,",
    "I had forgotten my map, but I was not afraid,",
    "The <b>compass</b> showed me the way, so I kept going!"
   ]
  },
  {
   "title": "Climb the Rope",
   "lines": [
    "Kerem was climbing the <b>rope</b>,",
    "While Ece was holding it tight,",
    "They had never been so high before,",
    "And they cheered with all their might!"
   ]
  },
  {
   "title": "A Great Escape",
   "lines": [
    "The cat made a great <b>escape</b>,",
    "We were eating when it ran away,",
    "It had jumped out of the window,",
    "And it was playing in the park all day!"
   ]
  }
 ],
 "reading": {
  "title": "The Old Map",
  "e": "🗺️",
  "lines": [
   ["It was a hot morning when Ece and Kerem found an old map in the garden.", "Ece ve Kerem bahçede eski bir harita bulduklarında sıcak bir sabahtı."],
   ["Their grandfather had hidden it there many years before.", "Dedeleri onu orada yıllar önce saklamıştı."],
   ["The map showed a cave in the hills, so they took a rope and a compass.", "Harita tepelerde bir mağara gösteriyordu, bu yüzden bir ip ve bir pusula aldılar."],
   ["They were walking up the hill when the sky became dark.", "Tepeye doğru yürürlerken gökyüzü karardı."],
   ["Suddenly it started to rain, and they ran into the cave.", "Birden yağmur başladı ve mağaraya koştular."],
   ["Inside, Kerem saw a small box that somebody had left on a rock.", "İçeride Kerem, birinin bir kayanın üzerine bıraktığı küçük bir kutu gördü."],
   ["In the box there was a note: “Well done, explorers! I prepared this adventure for you.”", "Kutuda bir not vardı: “Aferin kâşifler! Bu macerayı sizin için hazırladım.”"],
   ["The real treasure was a big bag of chocolate, and they were laughing all the way home.", "Asıl hazine büyük bir çikolata torbasıydı ve eve dönerken yol boyunca gülüyorlardı."]
  ],
  "qs": [
   { "q": "Who had hidden the map?", "tr": "Haritayı kim saklamıştı?", "options": ["their grandfather", "their teacher", "a pirate"], "answer": "their grandfather" },
   { "q": "What were they doing when the sky became dark?", "tr": "Gökyüzü karardığında ne yapıyorlardı?", "options": ["walking up the hill", "eating lunch", "sleeping in the cave"], "answer": "walking up the hill" },
   { "q": "What was the real treasure?", "tr": "Asıl hazine neydi?", "options": ["chocolate", "gold", "a compass"], "answer": "chocolate" }
  ]
 },
 "listening": [
  {
   "say": "When we arrived at the beach, the boat had already left.",
   "q": "What had already left?", "tr": "Ne çoktan gitmişti?",
   "options": [{ "e": "⛵", "v": "the boat" }, { "e": "🚌", "v": "the bus" }, { "e": "🚂", "v": "the train" }],
   "answer": "the boat"
  },
  {
   "say": "The explorer was crossing the desert when he saw a small lake.",
   "q": "What did the explorer see?", "tr": "Kâşif ne gördü?",
   "options": [{ "e": "🏞️", "v": "a lake" }, { "e": "🏔️", "v": "a mountain" }, { "e": "🏘️", "v": "a village" }],
   "answer": "a lake"
  },
  {
   "say": "Zeynep lost her compass, so she asked a farmer for help.",
   "q": "Who helped Zeynep?", "tr": "Zeynep'e kim yardım etti?",
   "options": [{ "e": "👨‍🌾", "v": "a farmer" }, { "e": "👮", "v": "a police officer" }, { "e": "👩‍🏫", "v": "a teacher" }],
   "answer": "a farmer"
  },
  {
   "say": "We had already eaten our sandwiches when it started to rain.",
   "q": "What had they already eaten?", "tr": "Çoktan ne yemişlerdi?",
   "options": [{ "e": "🥪", "v": "sandwiches" }, { "e": "🍎", "v": "apples" }, { "e": "🍫", "v": "chocolate" }],
   "answer": "sandwiches"
  },
  {
   "say": "I was holding the rope while my brother was climbing the tree.",
   "q": "What was the brother doing?", "tr": "Erkek kardeş ne yapıyordu?",
   "options": [{ "e": "🌳", "v": "climbing a tree" }, { "e": "🏊", "v": "swimming" }, { "e": "🚲", "v": "riding a bike" }],
   "answer": "climbing a tree"
  }
 ],
 "speaking": [
  { "e": "🗺️", "en": "It was a great adventure.", "tr": "Harika bir maceraydı." },
  { "e": "💎", "en": "Someone had already taken the treasure.", "tr": "Biri hazineyi çoktan almıştı." },
  { "e": "🏜️", "en": "We were crossing the desert when it got dark.", "tr": "Hava karardığında çölü geçiyorduk." },
  { "e": "🧭", "en": "I had lost my compass, so I asked for help.", "tr": "Pusulamı kaybetmiştim, bu yüzden yardım istedim." },
  { "e": "🚪", "en": "They escaped while the guard was sleeping.", "tr": "Nöbetçi uyurken kaçtılar." }
 ],
 "write": {
  "title": "An Old Map",
  "en": "Write a story. Your story must begin with this sentence: “It was a hot morning when we found an old map.”",
  "tr": "Bir hikâye yaz. Hikâyen şu cümleyle başlamalı: “Sıcak bir sabahtı, eski bir harita bulduk.”",
  "starters": ["It was a hot morning when", "While we were walking,", "The map showed", "Suddenly, I realised that", "Someone had already", "In the end we"],
  "checks": [
   { "re": /\b(was|were) \w+ing\b/, "t": "Olay sürerken olanı “was / were + fiil-ing” ile anlat (we were walking…)" },
   { "re": /\b(had|hadn't) (already |never |just |not |also |ever )?(\w+ed|been|found|seen|gone|left|made|done|lost|taken|put|read|got|come|heard|known|given|run|met|told|brought|written|forgotten|hidden|become|begun|built|bought|caught|kept|sent|spoken|chosen|flown|eaten|fallen|drunk|swum|thought|won|sat|stood|felt|held|shown|worn|broken|woken)\b/, "t": "Daha önce olanı “had + üçüncü hâl” ile anlat (someone had hidden it…)" }
  ],
  "model": "It was a hot morning when we found an old map in my grandfather's garden. Someone had hidden it under a big stone many years before. The map showed a cave in the desert, so we took a compass and a long rope. We were walking in the hot sun when Kerem suddenly stopped. He had seen some strange footprints near a rock. We followed them and found a tiny cave. Inside there was a box that somebody had left there. We opened it, and we were so surprised! The treasure was a letter from my grandfather. It said: “Great adventure, explorers! Now go home for dinner.”"
 },
 "towers": [
  {
   "e": "🏜️", "title": "In the Desert",
   "steps": [
    { "tr": [["Yürüyordu.", "does"]], "en": [["was walking", "does"]] },
    { "tr": [["Mert", "who"], ["Yürüyordu.", "does"]], "en": [["Mert", "who"], ["was walking", "does"]] },
    { "tr": [["Mert", "who"], ["çölde", "where"], ["Yürüyordu.", "does"]], "en": [["Mert", "who"], ["was walking", "does"], ["in the desert", "where"]] },
    { "tr": [["Mert", "who"], ["öğlen", "when"], ["çölde", "where"], ["Yürüyordu.", "does"]], "en": [["Mert", "who"], ["was walking", "does"], ["in the desert", "where"], ["at noon", "when"]] }
   ]
  },
  {
   "e": "🧭", "title": "The Lost Compass",
   "steps": [
    { "tr": [["Pusulasını kaybetmişti.", "does"]], "en": [["had lost his compass", "does"]] },
    { "tr": [["Kâşif", "who"], ["Pusulasını kaybetmişti.", "does"]], "en": [["The explorer", "who"], ["had lost his compass", "does"]] },
    { "tr": [["Kâşif", "who"], ["ormanda", "where"], ["Pusulasını kaybetmişti.", "does"]], "en": [["The explorer", "who"], ["had lost his compass", "does"], ["in the forest", "where"]] },
    { "tr": [["Kâşif", "who"], ["fırtınadan önce", "when"], ["ormanda", "where"], ["Pusulasını kaybetmişti.", "does"]], "en": [["The explorer", "who"], ["had lost his compass", "does"], ["in the forest", "where"], ["before the storm", "when"]] }
   ]
  },
  {
   "e": "🪢", "title": "The Rope",
   "steps": [
    { "tr": [["İpe tırmandı.", "does"]], "en": [["climbed the rope", "does"]] },
    { "tr": [["Elif", "who"], ["İpe tırmandı.", "does"]], "en": [["Elif", "who"], ["climbed the rope", "does"]] },
    { "tr": [["Elif", "who"], ["mağarada", "where"], ["İpe tırmandı.", "does"]], "en": [["Elif", "who"], ["climbed the rope", "does"], ["in the cave", "where"]] },
    { "tr": [["Elif", "who"], ["dün", "when"], ["mağarada", "where"], ["İpe tırmandı.", "does"]], "en": [["Elif", "who"], ["climbed the rope", "does"], ["in the cave", "where"], ["yesterday", "when"]] }
   ]
  }
 ]
});

