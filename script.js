/* Was kochen wir heute? – erste funktionsfähige Browser-Version
   Daten werden lokal in diesem Browser gespeichert (localStorage).
   Für geräteübergreifende Synchronisierung wäre später ein Backend nötig. */

"use strict";

const STORAGE_KEY = "wkwheute_v1";
const recipes = [
  {
    "id": "tomaten-pasta",
    "title": "Cremige Tomaten-Pasta",
    "emoji": "🍝",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Pasta",
    "description": "Ein unkompliziertes Wohlfühlgericht mit Tomaten, Knoblauch und einer cremigen Sauce.",
    "ingredients": [
      {
        "name": "Nudeln",
        "amount": "200 g"
      },
      {
        "name": "Tomaten",
        "amount": "250 g"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      },
      {
        "name": "Sahne",
        "amount": "100 ml"
      },
      {
        "name": "Olivenöl",
        "amount": "1 EL"
      },
      {
        "name": "Parmesan",
        "amount": "30 g"
      }
    ],
    "steps": [
      "Einen Topf mit Salzwasser zum Kochen bringen und die Nudeln nach Packungsanweisung garen.",
      "Knoblauch fein hacken. Tomaten würfeln.",
      "Olivenöl in einer Pfanne erwärmen und den Knoblauch kurz darin anschwitzen.",
      "Tomaten hinzufügen und etwa 5 Minuten köcheln lassen. Sahne einrühren und mit Salz und Pfeffer abschmecken.",
      "Nudeln abgießen, mit der Sauce vermengen und mit Parmesan servieren."
    ]
  },
  {
    "id": "gemuese-reis",
    "title": "Bunte Gemüse-Reis-Pfanne",
    "emoji": "🥘",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "Bunt, flexibel und perfekt, um Gemüse aus dem Kühlschrank aufzubrauchen.",
    "ingredients": [
      {
        "name": "Reis",
        "amount": "150 g"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Karotten",
        "amount": "2 Stück"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Sojasauce",
        "amount": "2 EL"
      },
      {
        "name": "Öl",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Reis nach Packungsanweisung kochen.",
      "Gemüse waschen und in kleine Stücke schneiden.",
      "Öl in einer großen Pfanne erhitzen. Zwiebeln und Karotten 4 Minuten anbraten.",
      "Paprika hinzufügen und weitere 5 Minuten braten. Bei Bedarf einen kleinen Schluck Wasser ergänzen.",
      "Reis und Sojasauce unterheben, alles gut erhitzen und abschmecken."
    ]
  },
  {
    "id": "kartoffelgratin",
    "title": "Einfaches Kartoffelgratin",
    "emoji": "🥔",
    "time": 55,
    "prep": 15,
    "cook": 40,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Ofengericht",
    "description": "Goldbraune Kartoffelscheiben mit einer würzigen, cremigen Sauce.",
    "ingredients": [
      {
        "name": "Kartoffeln",
        "amount": "500 g"
      },
      {
        "name": "Sahne",
        "amount": "150 ml"
      },
      {
        "name": "Käse",
        "amount": "80 g"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      },
      {
        "name": "Butter",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Backofen auf 190 °C Ober-/Unterhitze vorheizen.",
      "Kartoffeln schälen und in dünne Scheiben schneiden.",
      "Eine Auflaufform mit Butter einfetten und die Kartoffeln hineinschichten.",
      "Sahne mit fein gehacktem Knoblauch, Salz, Pfeffer und etwas Muskat würzen und über die Kartoffeln gießen.",
      "Käse darüberstreuen und etwa 40 Minuten backen, bis die Kartoffeln weich und die Oberfläche goldbraun ist."
    ]
  },
  {
    "id": "gemuese-curry",
    "title": "Mildes Gemüse-Curry",
    "emoji": "🍛",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Curry",
    "description": "Ein wärmendes Curry mit Kokosmilch – Gemüse lässt sich flexibel austauschen.",
    "ingredients": [
      {
        "name": "Reis",
        "amount": "150 g"
      },
      {
        "name": "Kokosmilch",
        "amount": "200 ml"
      },
      {
        "name": "Currypaste",
        "amount": "1 EL"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Kichererbsen",
        "amount": "1 Dose"
      }
    ],
    "steps": [
      "Reis nach Packungsanweisung kochen.",
      "Zwiebel und Paprika klein schneiden. Kichererbsen abgießen und abspülen.",
      "Zwiebel in etwas Öl glasig anbraten. Currypaste hinzufügen und kurz mitbraten.",
      "Paprika, Kichererbsen und Kokosmilch dazugeben. 12–15 Minuten sanft köcheln lassen.",
      "Mit Salz, Pfeffer und bei Bedarf etwas Limettensaft abschmecken und mit Reis servieren."
    ]
  },
  {
    "id": "wraps",
    "title": "Knusprige Gemüse-Wraps",
    "emoji": "🌯",
    "time": 20,
    "prep": 15,
    "cook": 5,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Schnell",
    "description": "Schnelle Wraps zum Selbstfüllen – ideal für ein unkompliziertes Abendessen.",
    "ingredients": [
      {
        "name": "Tortilla-Wraps",
        "amount": "4 Stück"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "2 Stück"
      },
      {
        "name": "Salat",
        "amount": "4 Blätter"
      },
      {
        "name": "Joghurt",
        "amount": "100 g"
      },
      {
        "name": "Käse",
        "amount": "60 g"
      }
    ],
    "steps": [
      "Paprika und Tomaten klein schneiden, Salat waschen und trocken tupfen.",
      "Joghurt mit Salz, Pfeffer und Kräutern zu einem schnellen Dip verrühren.",
      "Wraps nach Packungsanweisung kurz erwärmen.",
      "Gemüse, Salat und Käse auf den Wraps verteilen und den Dip darübergeben.",
      "Die Seiten einklappen, die Wraps fest aufrollen und direkt servieren."
    ]
  },
  {
    "id": "pfannkuchen",
    "title": "Fluffige Pfannkuchen",
    "emoji": "🥞",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Süß",
    "description": "Ein süßer Klassiker, der mit Obst, Joghurt oder herzhaftem Belag funktioniert.",
    "ingredients": [
      {
        "name": "Mehl",
        "amount": "150 g"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Milch",
        "amount": "200 ml"
      },
      {
        "name": "Backpulver",
        "amount": "1 TL"
      },
      {
        "name": "Butter",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Mehl und Backpulver in einer Schüssel vermischen.",
      "Eier und Milch dazugeben und zu einem glatten Teig verrühren.",
      "Eine beschichtete Pfanne leicht mit Butter einfetten und auf mittlere Hitze bringen.",
      "Jeweils etwas Teig in die Pfanne geben. Wenn sich Bläschen bilden, wenden und von der anderen Seite goldbraun backen.",
      "Mit Obst, Joghurt oder einem Belag nach Wahl servieren."
    ]
  },
  {
    "id": "linsen-suppe",
    "title": "Schnelle Linsensuppe",
    "emoji": "🍲",
    "time": 25,
    "prep": 8,
    "cook": 17,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Suppe",
    "description": "Sättigend, würzig und gut geeignet, um einfache Vorratszutaten zu verwenden.",
    "ingredients": [
      {
        "name": "Linsen",
        "amount": "150 g"
      },
      {
        "name": "Karotten",
        "amount": "2 Stück"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "600 ml"
      },
      {
        "name": "Tomaten",
        "amount": "200 g"
      },
      {
        "name": "Öl",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Zwiebel und Karotten klein würfeln.",
      "Öl in einem Topf erhitzen und das Gemüse 3–4 Minuten anschwitzen.",
      "Linsen, Tomaten und Gemüsebrühe hinzufügen.",
      "Etwa 15–20 Minuten köcheln lassen, bis die Linsen weich sind. Je nach Linsensorte kann die Zeit variieren.",
      "Mit Salz, Pfeffer und Paprikapulver abschmecken. Bei Bedarf mit etwas Wasser verdünnen."
    ]
  },
  {
    "id": "pizza-toast",
    "title": "Pizza-Toast aus dem Ofen",
    "emoji": "🍕",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Schnell",
    "description": "Eine schnelle Idee für Brot, Tomatensauce und Käsereste.",
    "ingredients": [
      {
        "name": "Brot",
        "amount": "4 Scheiben"
      },
      {
        "name": "Tomatensauce",
        "amount": "4 EL"
      },
      {
        "name": "Käse",
        "amount": "80 g"
      },
      {
        "name": "Tomaten",
        "amount": "1 Stück"
      },
      {
        "name": "Oregano",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Brotscheiben auf ein Backblech legen und mit Tomatensauce bestreichen.",
      "Tomaten klein schneiden und darauf verteilen.",
      "Käse und Oregano darübergeben.",
      "Etwa 8–10 Minuten backen, bis der Käse geschmolzen ist und das Brot knusprig wird."
    ]
  },
  {
    "id": "hafer-bowl",
    "title": "Frühstücks-Bowl mit Obst",
    "emoji": "🥣",
    "time": 10,
    "prep": 10,
    "cook": 0,
    "portions": 1,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Frühstück",
    "description": "Eine schnelle Bowl für Frühstück, Snack oder ein leichtes Abendessen.",
    "ingredients": [
      {
        "name": "Haferflocken",
        "amount": "50 g"
      },
      {
        "name": "Joghurt",
        "amount": "150 g"
      },
      {
        "name": "Banane",
        "amount": "1 Stück"
      },
      {
        "name": "Apfel",
        "amount": "1 Stück"
      },
      {
        "name": "Honig",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Haferflocken in eine Schüssel geben.",
      "Joghurt dazugeben und verrühren.",
      "Banane in Scheiben schneiden und Apfel würfeln.",
      "Obst auf der Bowl verteilen und nach Wunsch mit etwas Honig süßen."
    ]
  },
  {
    "id": "spaghetti-carbonara",
    "title": "Klassische Spaghetti Carbonara",
    "emoji": "🍝",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Mittel",
    "category": "Pasta",
    "description": "Cremige italienische Carbonara ohne Sahne mit Eigelb, Speck und Parmesan.",
    "ingredients": [
      {
        "name": "Spaghetti",
        "amount": "200 g"
      },
      {
        "name": "Speck",
        "amount": "100 g"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Parmesan",
        "amount": "50 g"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      }
    ],
    "steps": [
      "Spaghetti in ausreichend Salzwasser al dente kochen.",
      "Speck in einer Pfanne knusprig anbraten.",
      "Eigelb mit geriebenem Parmesan und Pfeffer verquirlen.",
      "Nudeln abgießen, etwas Nudelwasser auffangen.",
      "Nudeln zum Speck geben, vom Herd nehmen und die Ei-Käse-Mischung unter raschem Rühren unterheben."
    ]
  },
  {
    "id": "chili-con-carne",
    "title": "Herzhaftes Chili con Carne",
    "emoji": "🌶️",
    "time": 45,
    "prep": 15,
    "cook": 30,
    "portions": 4,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Eintopf",
    "description": "Ein feuriger Klassiker mit Hackfleisch, Kidneybohnen und Mais.",
    "ingredients": [
      {
        "name": "Hackfleisch",
        "amount": "400 g"
      },
      {
        "name": "Kidneybohnen",
        "amount": "1 Dose"
      },
      {
        "name": "Mais",
        "amount": "1 Dose"
      },
      {
        "name": "Tomaten",
        "amount": "400 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      }
    ],
    "steps": [
      "Zwiebeln und Knoblauch hacken und im Öl anbraten.",
      "Hackfleisch dazugeben und krümelig braun braten.",
      "Stückige Tomaten, Bohnen und Mais hinzufügen.",
      "Mit Chilipulver, Kreuzkümmel, Salz und Pfeffer würzen und 25 Minuten köcheln lassen."
    ]
  },
  {
    "id": "chili-sin-carne",
    "title": "Veganes Chili sin Carne",
    "emoji": "🫘",
    "time": 35,
    "prep": 15,
    "cook": 20,
    "portions": 4,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Eintopf",
    "description": "Würzige vegane Variante mit Linsen, Kidneybohnen und viel Gemüse.",
    "ingredients": [
      {
        "name": "Linsen",
        "amount": "150 g"
      },
      {
        "name": "Kidneybohnen",
        "amount": "1 Dose"
      },
      {
        "name": "Mais",
        "amount": "1 Dose"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "400 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      }
    ],
    "steps": [
      "Zwiebel und Paprika würfeln und in Öl anbraten.",
      "Linsen, Bohnen und Mais eingießen.",
      "Geschälte Tomaten und Brühe dazugeben.",
      "Etwa 20 Minuten sanft köcheln lassen und mit Chili würzen."
    ]
  },
  {
    "id": "kuerbis-cremesuppe",
    "title": "Cremige Kürbissuppe",
    "emoji": "🎃",
    "time": 35,
    "prep": 15,
    "cook": 20,
    "portions": 3,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Suppe",
    "description": "Herbstliche Suppe aus Hokkaido-Kürbis mit Ingwer und Kokosmilch.",
    "ingredients": [
      {
        "name": "Kürbis",
        "amount": "500 g"
      },
      {
        "name": "Karotten",
        "amount": "2 Stück"
      },
      {
        "name": "Kokosmilch",
        "amount": "250 ml"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "500 ml"
      },
      {
        "name": "Ingwer",
        "amount": "1 Stück"
      }
    ],
    "steps": [
      "Kürbis und Karotten entkernen und klein schneiden.",
      "Ingwer hacken und in Öl anbraten, Gemüse dazugeben.",
      "Mit Brühe aufgießen und 20 Minuten weich kochen.",
      "Kokosmilch hinzufügen und pürieren."
    ]
  },
  {
    "id": "kaiserschmarrn",
    "title": "Fluffiger Kaiserschmarrn",
    "emoji": "🥞",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Mittel",
    "category": "Süß",
    "description": "Österreichische Süßspeise mit Puderzucker und Zwetschgenröster oder Apfelmus.",
    "ingredients": [
      {
        "name": "Eier",
        "amount": "3 Stück"
      },
      {
        "name": "Mehl",
        "amount": "120 g"
      },
      {
        "name": "Milch",
        "amount": "150 ml"
      },
      {
        "name": "Zucker",
        "amount": "2 EL"
      },
      {
        "name": "Butter",
        "amount": "2 EL"
      },
      {
        "name": "Rosinen",
        "amount": "30 g"
      }
    ],
    "steps": [
      "Eigelb mit Milch, Mehl und Zucker verrühren. Eiweiß steif schlagen und unterheben.",
      "Butter in einer Pfanne schmelzen, Teig eingießen.",
      "Rosinen auf streuen, unterbraten, wenden und in Stücke zerrupfen.",
      "Mit Puderzucker bestreuen und servieren."
    ]
  },
  {
    "id": "gulasch-klassisch",
    "title": "Klassisches Rindergulasch",
    "emoji": "🥘",
    "time": 120,
    "prep": 20,
    "cook": 100,
    "portions": 4,
    "diet": [],
    "difficulty": "Mittel",
    "category": "Klassiker",
    "description": "Zart geschmortes Rindergulasch mit viel Zwiebeln und Paprika.",
    "ingredients": [
      {
        "name": "Rindfleisch",
        "amount": "600 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "4 Stück"
      },
      {
        "name": "Paprika",
        "amount": "2 Stück"
      },
      {
        "name": "Tomatenmark",
        "amount": "2 EL"
      },
      {
        "name": "Rinderbrühe",
        "amount": "500 ml"
      }
    ],
    "steps": [
      "Fleisch würfeln und kräftig anbraten.",
      "Fein geschnittene Zwiebeln mitanbraten, Tomatenmark einrühren.",
      "Mit Brühe ablöschen und abgedeckt 90 Minuten schmoren.",
      "Paprikawürfel dazugeben und weitere 15 Minuten köcheln."
    ]
  },
  {
    "id": "ofengemuese-feta",
    "title": "Buntes Ofengemüse mit Feta",
    "emoji": "🍠",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Ofengericht",
    "description": "Knackiges Gemüse vom Blech mit geschmolzenem Feta und Kräutern.",
    "ingredients": [
      {
        "name": "Zucchini",
        "amount": "1 Stück"
      },
      {
        "name": "Paprika",
        "amount": "2 Stück"
      },
      {
        "name": "Kartoffeln",
        "amount": "300 g"
      },
      {
        "name": "Feta",
        "amount": "150 g"
      },
      {
        "name": "Olivenöl",
        "amount": "3 EL"
      }
    ],
    "steps": [
      "Gemüse und Kartoffeln in mundgerechte Stücke schneiden.",
      "Mit Olivenöl, Kräutern der Provence, Salz und Pfeffer vermengen.",
      "Auf einem Backblech verteilen und Feta darüber bröseln.",
      "Bei 200 °C Ober-/Unterhitze 25 Minuten backen."
    ]
  },
  {
    "id": "shakshuka",
    "title": "Würzige Shakshuka",
    "emoji": "🍳",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "In würziger Tomaten-Paprika-Sauce pochierte Eier.",
    "ingredients": [
      {
        "name": "Eier",
        "amount": "3 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "400 g"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      }
    ],
    "steps": [
      "Zwiebel, Knoblauch und Paprika in Öl anbraten.",
      "Stückige Tomaten dazugeben und 10 Minuten einkochen lassen.",
      "Kleine Vertiefungen formen und die Eier hineinschlagen.",
      "Abgedeckt bei geringer Hitze stokken lassen, bis das Eiweiß fest ist."
    ]
  },
  {
    "id": "falafel-wrap",
    "title": "Falafel Wrap mit Hummus",
    "emoji": "🥙",
    "time": 15,
    "prep": 10,
    "cook": 5,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Schnell",
    "description": "Orient-Feeling für zuhause mit knusprigen Falafeln und frischem Salat.",
    "ingredients": [
      {
        "name": "Tortilla-Wraps",
        "amount": "2 Stück"
      },
      {
        "name": "Falafel",
        "amount": "6 Stück"
      },
      {
        "name": "Hummus",
        "amount": "4 EL"
      },
      {
        "name": "Gurke",
        "amount": "0.5 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "1 Stück"
      }
    ],
    "steps": [
      "Falafeln in einer Pfanne oder im Ofen erwärmen.",
      "Wraps erwärmen und mit Hummus bestreichen.",
      "Gurkenscheiben, Tomatenwürfel und Falafeln darauf verteilen.",
      "Eng aufrollen und genießen."
    ]
  },
  {
    "id": "gebratene-nudeln",
    "title": "Gebratene Asia-Nudeln",
    "emoji": "🍜",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "Schnelle gebratene Nudeln mit knackigem Gemüse und Sojasauce.",
    "ingredients": [
      {
        "name": "Nudeln",
        "amount": "200 g"
      },
      {
        "name": "Karotten",
        "amount": "1 Stück"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Sojasauce",
        "amount": "3 EL"
      },
      {
        "name": "Sesamöl",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Nudeln kurz kochen und abgießen.",
      "Karotten und Paprika in feine Streifen schneiden.",
      "Gemüse in Sesamöl anbraten, Nudeln und Sojasauce dazugeben und scharf anbraten."
    ]
  },
  {
    "id": "kartoffelsalat",
    "title": "Klassischer Kartoffelsalat",
    "emoji": "🥗",
    "time": 30,
    "prep": 15,
    "cook": 15,
    "portions": 4,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Salat",
    "description": "Traditioneller Kartoffelsalat mit klarer Brühe, Zwiebeln und Gurke.",
    "ingredients": [
      {
        "name": "Kartoffeln",
        "amount": "800 g"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "200 ml"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Essig",
        "amount": "3 EL"
      },
      {
        "name": "Gurke",
        "amount": "0.5 Stück"
      }
    ],
    "steps": [
      "Kartoffeln kochen, schälen und in Scheiben schneiden.",
      "Heiße Brühe mit Zwiebeln, Essig, Öl, Salz und Pfeffer verrühren.",
      "Über die Kartoffeln gießen und Gurkenscheiben unterheben. Ziehen lassen."
    ]
  },
  {
    "id": "tomaten-mozzarella-salat",
    "title": "Caprese mit Basilikum",
    "emoji": "🥗",
    "time": 10,
    "prep": 10,
    "cook": 0,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Salat",
    "description": "Frischer italienischer Klassiker aus Tomaten, Mozzarella und Basilikum.",
    "ingredients": [
      {
        "name": "Tomaten",
        "amount": "3 Stück"
      },
      {
        "name": "Mozzarella",
        "amount": "150 g"
      },
      {
        "name": "Olivenöl",
        "amount": "2 EL"
      },
      {
        "name": "Balsamico",
        "amount": "1 EL"
      },
      {
        "name": "Basilikum",
        "amount": "1 Handvoll"
      }
    ],
    "steps": [
      "Tomaten und Mozzarella in Scheiben schneiden.",
      "Abwechselnd auf einem Teller anrichten.",
      "Mit Olivenöl und Balsamico beträufeln und mit Basilikum garnieren."
    ]
  },
  {
    "id": "flammkuchen",
    "title": "Elsass Flammkuchen",
    "emoji": "🍕",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Ofengericht",
    "description": "Hauchdünner knuspriger Teig mit Schmand, Speckspritzern und Zwiebelringen.",
    "ingredients": [
      {
        "name": "Mehl",
        "amount": "200 g"
      },
      {
        "name": "Wasser",
        "amount": "110 ml"
      },
      {
        "name": "Schmand",
        "amount": "150 g"
      },
      {
        "name": "Speck",
        "amount": "100 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      }
    ],
    "steps": [
      "Mehl, Wasser und 2 EL Öl zu einem glatten Teig kneten und dünn ausrollen.",
      "Mit Schmand bestreichen.",
      "Feine Zwiebelringe und Speckwürfel darauf verteilen.",
      "Bei 220 °C ca. 12-15 Minuten knusprig backen."
    ]
  },
  {
    "id": "lasagne-al-forno",
    "title": "Lasagne al Forno",
    "emoji": "🧀",
    "time": 75,
    "prep": 30,
    "cook": 45,
    "portions": 4,
    "diet": [],
    "difficulty": "Mittel",
    "category": "Ofengericht",
    "description": "Klassische Schicht-Lasagne mit Bolognese-Sauce und Bechamel.",
    "ingredients": [
      {
        "name": "Lasagneplatten",
        "amount": "9 Stück"
      },
      {
        "name": "Hackfleisch",
        "amount": "400 g"
      },
      {
        "name": "Tomaten",
        "amount": "400 g"
      },
      {
        "name": "Milch",
        "amount": "300 ml"
      },
      {
        "name": "Käse",
        "amount": "150 g"
      }
    ],
    "steps": [
      "Bolognese-Sauce aus Hackfleisch und Tomaten einkochen.",
      "Bechamel aus Butter, Mehl und Milch zubereiten.",
      "Abwechselnd Bolognese, Bechamel und Lasagneplatten schichten.",
      "Mit Käse bestreuen und 35 Minuten bei 180 °C backen."
    ]
  },
  {
    "id": "gemuese-lasagne",
    "title": "Cremige Gemüse-Lasagne",
    "emoji": "🥦",
    "time": 70,
    "prep": 25,
    "cook": 45,
    "portions": 4,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Mittel",
    "category": "Ofengericht",
    "description": "Vegetarische Lasagne mit Zucchini, Karotten und Spinat.",
    "ingredients": [
      {
        "name": "Lasagneplatten",
        "amount": "9 Stück"
      },
      {
        "name": "Zucchini",
        "amount": "1 Stück"
      },
      {
        "name": "Karotten",
        "amount": "2 Stück"
      },
      {
        "name": "Spinat",
        "amount": "200 g"
      },
      {
        "name": "Käse",
        "amount": "150 g"
      }
    ],
    "steps": [
      "Gemüse klein schneiden und kurz anbraten.",
      "Eine würzige Tomatensauce vorbereiten.",
      "Gemüse, Tomatensauce und Teigblätter schichten.",
      "Mit Käse überbacken."
    ]
  },
  {
    "id": "griechischer-salat",
    "title": "Griechischer Bauernsalat",
    "emoji": "🥗",
    "time": 15,
    "prep": 15,
    "cook": 0,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Salat",
    "description": "Erfrischender Salat mit Gurken, Tomaten, Oliven und Feta.",
    "ingredients": [
      {
        "name": "Gurke",
        "amount": "1 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "3 Stück"
      },
      {
        "name": "Feta",
        "amount": "150 g"
      },
      {
        "name": "Oliven",
        "amount": "50 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      }
    ],
    "steps": [
      "Gurke, Tomaten und Zwiebeln in grobe Stücke schneiden.",
      "In einer Schüssel mit Oliven vermengen.",
      "Feta darüber bröseln und mit Olivenöl und Oregano anrichten."
    ]
  },
  {
    "id": "gnocchi-pfanne",
    "title": "Bunte Gnocchi-Pfanne",
    "emoji": "🥔",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "Knusprig angebratene Gnocchi mit Kirschtomaten und Mozzarella.",
    "ingredients": [
      {
        "name": "Gnocchi",
        "amount": "400 g"
      },
      {
        "name": "Tomaten",
        "amount": "200 g"
      },
      {
        "name": "Mozzarella",
        "amount": "125 g"
      },
      {
        "name": "Pesto",
        "amount": "2 EL"
      },
      {
        "name": "Olivenöl",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Gnocchi in etwas Olivenöl goldbraun anbraten.",
      "Halbierte Tomaten dazugeben und kurz mitschwenken.",
      "Pesto unterrühren und Mozzarella schmelzen lassen."
    ]
  },
  {
    "id": "risotto-pilze",
    "title": "Cremiges Pilzrisotto",
    "emoji": "🍲",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Mittel",
    "category": "Klassiker",
    "description": "Aromatisches Risotto mit frischen Champignons und Parmesan.",
    "ingredients": [
      {
        "name": "Risottoreis",
        "amount": "180 g"
      },
      {
        "name": "Champignons",
        "amount": "200 g"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "600 ml"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Parmesan",
        "amount": "40 g"
      }
    ],
    "steps": [
      "Zwiebeln anbraten, Risottoreis glasiert anschwitzen.",
      "Kellenweise heiße Brühe unter ständigem Rühren dazugeben.",
      "Pilze seperat anbraten und zum Schluss mit Parmesan unter den Reis heben."
    ]
  },
  {
    "id": "milchreis",
    "title": "Klassischer Milchreis",
    "emoji": "🍚",
    "time": 35,
    "prep": 5,
    "cook": 30,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Süß",
    "description": "Seelenfutter: Süßer Milchreis mit Zimt und Zucker.",
    "ingredients": [
      {
        "name": "Milchreis",
        "amount": "120 g"
      },
      {
        "name": "Milch",
        "amount": "500 ml"
      },
      {
        "name": "Zucker",
        "amount": "2 EL"
      },
      {
        "name": "Zimt",
        "amount": "1 TL"
      },
      {
        "name": "Butter",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Milch mit einer Prise Salz und Zucker aufkochen.",
      "Milchreis einrühren und bei schwacher Hitze ca. 30 Minuten quellen lassen.",
      "Mit Zimt & Zucker servieren."
    ]
  },
  {
    "id": "waffeln",
    "title": "Knusprige Herzwaffeln",
    "emoji": "🧇",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "portions": 3,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Süß",
    "description": "Süße goldgelbe Waffeln frisch aus dem Waffeleisen.",
    "ingredients": [
      {
        "name": "Butter",
        "amount": "100 g"
      },
      {
        "name": "Zucker",
        "amount": "75 g"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Mehl",
        "amount": "200 g"
      },
      {
        "name": "Milch",
        "amount": "150 ml"
      }
    ],
    "steps": [
      "Butter mit Zucker cremig rühren, Eier einzeln unterrühren.",
      "Mehl und Milch abwechselnd hinzugeben.",
      "Im heißen Waffeleisen portionsweise backen."
    ]
  },
  {
    "id": "avocado-toast",
    "title": "Avocado Toast mit Ei",
    "emoji": "🥑",
    "time": 10,
    "prep": 5,
    "cook": 5,
    "portions": 1,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Frühstück",
    "description": "Krosses Vollkornbrot mit zerdrückter Avocado und Spiegelei.",
    "ingredients": [
      {
        "name": "Brot",
        "amount": "2 Scheiben"
      },
      {
        "name": "Avocado",
        "amount": "1 Stück"
      },
      {
        "name": "Eier",
        "amount": "1 Stück"
      },
      {
        "name": "Zitronensaft",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Brotscheiben toasten.",
      "Avocado zerdrücken, mit Zitronensaft, Salz und Pfeffer würzen.",
      "Spiegelei in der Pfanne braten.",
      "Avocado aufs Brot streichen und Ei darauflegen."
    ]
  },
  {
    "id": "couscous-salat",
    "title": "Frischer Couscous-Salat",
    "emoji": "🥗",
    "time": 15,
    "prep": 10,
    "cook": 5,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Sehr einfach",
    "category": "Salat",
    "description": "Schneller Salat mit Tomaten, Gurken und frischer Minze.",
    "ingredients": [
      {
        "name": "Couscous",
        "amount": "150 g"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "200 ml"
      },
      {
        "name": "Gurke",
        "amount": "0.5 Stück"
      },
      {
        "name": "Tomaten",
        "amount": "2 Stück"
      },
      {
        "name": "Zitronensaft",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Couscous mit kochender Gemüsebrühe gießen und 5 Min. quellen lassen.",
      "Gemüse klein würfeln.",
      "Alles vermengen, mit Zitronensaft und Olivenöl abschmecken."
    ]
  },
  {
    "id": "quinoa-bowl",
    "title": "Bunte Quinoa Buddha Bowl",
    "emoji": "🥗",
    "time": 25,
    "prep": 15,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Bowl",
    "description": "Gesunde Bowl mit Quinoa, Avocado, Kichererbsen und Tahin-Dressing.",
    "ingredients": [
      {
        "name": "Quinoa",
        "amount": "120 g"
      },
      {
        "name": "Kichererbsen",
        "amount": "1 Dose"
      },
      {
        "name": "Avocado",
        "amount": "1 Stück"
      },
      {
        "name": "Spinat",
        "amount": "50 g"
      },
      {
        "name": "Zitronensaft",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Quinoa kochen und abkühlen lassen.",
      "Kichererbsen in der Pfanne knusprig anbraten.",
      "Zutaten nebeneinander in der Bowl anrichten."
    ]
  },
  {
    "id": "chana-masala",
    "title": "Indisches Chana Masala",
    "emoji": "🍲",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Curry",
    "description": "Würziges nordindisches Kichererbsencurry.",
    "ingredients": [
      {
        "name": "Kichererbsen",
        "amount": "1 Dose"
      },
      {
        "name": "Tomaten",
        "amount": "400 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Ingwer",
        "amount": "1 Stück"
      },
      {
        "name": "Garam Masala",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Zwiebel und Ingwer anbraten.",
      "Gewürze kurz mitrösten.",
      "Tomaten und Kichererbsen dazugeben und 15 Minuten köcheln lassen."
    ]
  },
  {
    "id": "kichererbsen-curry",
    "title": "Schnelles Kichererbsen-Curry",
    "emoji": "🍛",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Sehr einfach",
    "category": "Curry",
    "description": "Creamy Curry mit Spinat und Kokosmilch.",
    "ingredients": [
      {
        "name": "Kichererbsen",
        "amount": "1 Dose"
      },
      {
        "name": "Kokosmilch",
        "amount": "200 ml"
      },
      {
        "name": "Spinat",
        "amount": "100 g"
      },
      {
        "name": "Currypulver",
        "amount": "1 EL"
      },
      {
        "name": "Reis",
        "amount": "150 g"
      }
    ],
    "steps": [
      "Reis kochen.",
      "Currypulver anrösten, Kokosmilch und Kichererbsen zugeben.",
      "Spinat zum Schluss unterrühren, bis er zusammenfällt."
    ]
  },
  {
    "id": "kartoffel-moehren-eintopf",
    "title": "Kartoffel-Möhren-Eintopf",
    "emoji": "🍲",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "portions": 3,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Eintopf",
    "description": "Klassischer Hausmannskost-Eintopf, leicht stampft.",
    "ingredients": [
      {
        "name": "Kartoffeln",
        "amount": "400 g"
      },
      {
        "name": "Karotten",
        "amount": "400 g"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "700 ml"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Butter",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Gemüse schälen und würfeln.",
      "Zwiebeln in Butter glasig dünsten, Gemüse kurz mitschwitzen.",
      "Mit Brühe aufgießen und 25 Minuten weich kochen.",
      "Grob anstampfen und abschmecken."
    ]
  },
  {
    "id": "minestrone",
    "title": "Italienische Minestrone",
    "emoji": "🍜",
    "time": 35,
    "prep": 15,
    "cook": 20,
    "portions": 4,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Suppe",
    "description": "Reichhaltige Gemüsesuppe mit kleinen Nudeln und Bohnen.",
    "ingredients": [
      {
        "name": "Zucchini",
        "amount": "1 Stück"
      },
      {
        "name": "Karotten",
        "amount": "2 Stück"
      },
      {
        "name": "Nudeln",
        "amount": "80 g"
      },
      {
        "name": "Weiße Bohnen",
        "amount": "1 Dose"
      },
      {
        "name": "Gemüsebrühe",
        "amount": "1 Liter"
      }
    ],
    "steps": [
      "Gemüse würfeln und in Olivenöl anbraten.",
      "Mit Brühe aufgießen, Nudeln und Bohnen dazugeben.",
      "Ca. 12 Minuten kochen, bis die Nudeln gar sind."
    ]
  },
  {
    "id": "kaesespaetzle",
    "title": "Schwäbische Käsespätzle",
    "emoji": "🧀",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Klassiker",
    "description": "Spätzle reichlich geschichtet mit herzhaftem Käse und Röstzwiebeln.",
    "ingredients": [
      {
        "name": "Spätzle",
        "amount": "300 g"
      },
      {
        "name": "Käse",
        "amount": "150 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "2 Stück"
      },
      {
        "name": "Butter",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Zwiebelringe in Butter langsam goldbraun braten.",
      "Spätzle kochen.",
      "Heiße Spätzle abwechselnd mit Käse schichten, bis der Käse schmilzt.",
      "Röstzwiebeln obenauf verteilen."
    ]
  },
  {
    "id": "bauernfruehstueck",
    "title": "Deutsches Bauernfrühstück",
    "emoji": "🍳",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "Bratkartoffeln mit Speck, Zwiebeln und verquirlten Eiern.",
    "ingredients": [
      {
        "name": "Kartoffeln",
        "amount": "400 g"
      },
      {
        "name": "Eier",
        "amount": "3 Stück"
      },
      {
        "name": "Speck",
        "amount": "75 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Gewürzgurke",
        "amount": "2 Stück"
      }
    ],
    "steps": [
      "Gekochte Kartoffeln in Scheiben schneiden und in Öl kross anbraten.",
      "Speck und Zwiebeln dazugeben.",
      "Verquirlte Eier darübergießen und stocken lassen."
    ]
  },
  {
    "id": "fischstaebchen-puerree",
    "title": "Fischstäbchen mit Kartoffelpüree",
    "emoji": "🐟",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Sehr einfach",
    "category": "Schnell",
    "description": "Kinder-Klassiker: Knusprige Fischstäbchen mit cremigem Püree.",
    "ingredients": [
      {
        "name": "Fischstäbchen",
        "amount": "10 Stück"
      },
      {
        "name": "Kartoffeln",
        "amount": "500 g"
      },
      {
        "name": "Milch",
        "amount": "100 ml"
      },
      {
        "name": "Butter",
        "amount": "20 g"
      },
      {
        "name": "Muskat",
        "amount": "1 Prise"
      }
    ],
    "steps": [
      "Kartoffeln kochen, mit Butter und warmem Milch zu Püree stampfen.",
      "Fischstäbchen in der Pfanne goldbraun braten."
    ]
  },
  {
    "id": "lachs-spinat-pasta",
    "title": "Lachs-Spinat-Pasta",
    "emoji": "🍝",
    "time": 20,
    "prep": 5,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Pasta",
    "description": "Edle Pasta mit Lachsfiletwürfeln in Spinat-Sahne-Sauce.",
    "ingredients": [
      {
        "name": "Nudeln",
        "amount": "200 g"
      },
      {
        "name": "Lachs",
        "amount": "200 g"
      },
      {
        "name": "Spinat",
        "amount": "150 g"
      },
      {
        "name": "Sahne",
        "amount": "150 ml"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      }
    ],
    "steps": [
      "Nudeln kochen.",
      "Lachswürfel kurz anbraten und herausnehmen.",
      "Knoblauch und Spinat anbraten, Sahne dazugeben.",
      "Nudeln und Lachs unterheben."
    ]
  },
  {
    "id": "haehnchen-curry",
    "title": "Cremiges Hähnchen-Curry",
    "emoji": "🍛",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Curry",
    "description": "Zartes Hähnchenbrustfilet mit Gemüsestreifen in Kokos-Curry-Sauce.",
    "ingredients": [
      {
        "name": "Hähnchenbrust",
        "amount": "300 g"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Kokosmilch",
        "amount": "250 ml"
      },
      {
        "name": "Currypaste",
        "amount": "1 EL"
      },
      {
        "name": "Reis",
        "amount": "150 g"
      }
    ],
    "steps": [
      "Reis kochen.",
      "Hähnchenstreifen anbraten.",
      "Gemüse und Currypaste mitbraten, mit Kokosmilch ablöschen und 10 Min. simmern lassen."
    ]
  },
  {
    "id": "haehnchen-geschnetzeltes",
    "title": "Hähnchen-Geschnetzeltes",
    "emoji": "🥘",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Klassiker",
    "description": "Geschnetzeltes in champignongefüllter Rahmsauce.",
    "ingredients": [
      {
        "name": "Hähnchenbrust",
        "amount": "300 g"
      },
      {
        "name": "Champignons",
        "amount": "150 g"
      },
      {
        "name": "Sahne",
        "amount": "150 ml"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Spätzle",
        "amount": "250 g"
      }
    ],
    "steps": [
      "Spätzle garen.",
      "Fleisch scharf anbraten, herausnehmen.",
      "Zwiebeln und Champignons anbraten, mit Sahne ablöschen und Fleisch wieder zugeben."
    ]
  },
  {
    "id": "feta-spagetti",
    "title": "Baked Feta Pasta",
    "emoji": "🍝",
    "time": 35,
    "prep": 5,
    "cook": 30,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Pasta",
    "description": "Der Trend-Klassiker: Im Ofen gebackener Feta mit Kirschtomaten.",
    "ingredients": [
      {
        "name": "Spaghetti",
        "amount": "200 g"
      },
      {
        "name": "Feta",
        "amount": "200 g"
      },
      {
        "name": "Tomaten",
        "amount": "300 g"
      },
      {
        "name": "Olivenöl",
        "amount": "3 EL"
      },
      {
        "name": "Knoblauch",
        "amount": "2 Zehen"
      }
    ],
    "steps": [
      "Feta in die Mitte einer Form legen, Tomaten drumherum verteilen.",
      "Mit Olivenöl beträufeln und bei 200 °C 25 Min. backen.",
      "Nudeln kochen und heiß mit dem gequetschten Feta verrühren."
    ]
  },
  {
    "id": "sommerrollen",
    "title": "Frische Sommerrollen",
    "emoji": "🥢",
    "time": 30,
    "prep": 25,
    "cook": 5,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Mittel",
    "category": "Schnell",
    "description": "Reispapier-Rollen gefüllt mit Glasnudeln, Tofu und frischem Gemüse.",
    "ingredients": [
      {
        "name": "Reispapier",
        "amount": "6 Blatt"
      },
      {
        "name": "Glasnudeln",
        "amount": "50 g"
      },
      {
        "name": "Tofu",
        "amount": "100 g"
      },
      {
        "name": "Gurke",
        "amount": "0.5 Stück"
      },
      {
        "name": "Erdnussmus",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Glasnudeln einweichen, Gemüse und Tofu in Stifte schneiden.",
      "Reispapier kurz befeuchten.",
      "Zutaten mittig auflegen, fest einrollen und mit Erdnuss-Dip servieren."
    ]
  },
  {
    "id": "dahl-linsen",
    "title": "Rotes Linsen-Dahl",
    "emoji": "🍲",
    "time": 25,
    "prep": 5,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Curry",
    "description": "Aromatischer indischer Linseneintopf mit Ingwer und Koriander.",
    "ingredients": [
      {
        "name": "Rote Linsen",
        "amount": "150 g"
      },
      {
        "name": "Kokosmilch",
        "amount": "200 ml"
      },
      {
        "name": "Tomaten",
        "amount": "200 g"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Currypulver",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Zwiebeln anbraten, Linsen und Gewürze mitanrösten.",
      "Geschälte Tomaten, Kokosmilch und Wasser zugeben.",
      "20 Minuten weich köcheln lassen."
    ]
  },
  {
    "id": "zucchini-puffer",
    "title": "Knusprige Zucchini-Puffer",
    "emoji": "🥞",
    "time": 25,
    "prep": 15,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Pfanne",
    "description": "Goldbraune Gemüsepuffer mit Kräuterquark.",
    "ingredients": [
      {
        "name": "Zucchini",
        "amount": "2 Stück"
      },
      {
        "name": "Eier",
        "amount": "1 Stück"
      },
      {
        "name": "Mehl",
        "amount": "3 EL"
      },
      {
        "name": "Kräuterquark",
        "amount": "150 g"
      },
      {
        "name": "Öl",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Zucchini raspeln und gut ausdrücken.",
      "Mit Ei, Mehl, Salz und Pfeffer mischen.",
      "In der Pfanne flache Puffer ausbacken und mit Kräuterquark servieren."
    ]
  },
  {
    "id": "moussaka-veggie",
    "title": "Vegetarische Moussaka",
    "emoji": "🍆",
    "time": 60,
    "prep": 20,
    "cook": 40,
    "portions": 3,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Mittel",
    "category": "Ofengericht",
    "description": "Griechischer Auflauf mit Auberginen, Kartoffeln und Linsensauce.",
    "ingredients": [
      {
        "name": "Auberginen",
        "amount": "1 Stück"
      },
      {
        "name": "Kartoffeln",
        "amount": "300 g"
      },
      {
        "name": "Linsen",
        "amount": "100 g"
      },
      {
        "name": "Tomaten",
        "amount": "300 g"
      },
      {
        "name": "Käse",
        "amount": "100 g"
      }
    ],
    "steps": [
      "Auberginen- und Kartoffelscheiben anbraten.",
      "Linsen-Tomatensauce einkochen.",
      "Schichten, mit Käse überbacken und 35 Minuten backen."
    ]
  },
  {
    "id": "strammer-max",
    "title": "Klassischer Strammer Max",
    "emoji": "🍞",
    "time": 10,
    "prep": 3,
    "cook": 7,
    "portions": 1,
    "diet": [],
    "difficulty": "Sehr einfach",
    "category": "Schnell",
    "description": "Brot mit Schinken und Spiegelei – schnell und deftig.",
    "ingredients": [
      {
        "name": "Brot",
        "amount": "2 Scheiben"
      },
      {
        "name": "Schinken",
        "amount": "2 Scheiben"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Butter",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Brot buttere.",
      "Schinken auflegen.",
      "Spiegeleier in der Pfanne braten und auf den Schinken legen."
    ]
  },
  {
    "id": "bruschetta",
    "title": "Knoblauch-Bruschetta",
    "emoji": "🥖",
    "time": 15,
    "prep": 10,
    "cook": 5,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Sehr einfach",
    "category": "Snack",
    "description": "Röstbrot mit marinierten Tomatenwürfeln und Knoblauch.",
    "ingredients": [
      {
        "name": "Brot",
        "amount": "4 Scheiben"
      },
      {
        "name": "Tomaten",
        "amount": "3 Stück"
      },
      {
        "name": "Knoblauch",
        "amount": "2 Zehen"
      },
      {
        "name": "Olivenöl",
        "amount": "2 EL"
      },
      {
        "name": "Basilikum",
        "amount": "1 Handvoll"
      }
    ],
    "steps": [
      "Tomaten würfeln, mit Olivenöl, Basilikum, Salz und Pfeffer vermischen.",
      "Brotscheiben anrösten und mit Knoblauch einreiben.",
      "Tomatenmischung auf dem Brot verteilen."
    ]
  },
  {
    "id": "cremige-spinat-pasta",
    "title": "Spinat-Frischkäse-Pasta",
    "emoji": "🍝",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Pasta",
    "description": "Blitzschnelle Nudeln mit Spinat und kräutrigem Frischkäse.",
    "ingredients": [
      {
        "name": "Nudeln",
        "amount": "200 g"
      },
      {
        "name": "Spinat",
        "amount": "150 g"
      },
      {
        "name": "Frischkäse",
        "amount": "100 g"
      },
      {
        "name": "Knoblauch",
        "amount": "1 Zehe"
      }
    ],
    "steps": [
      "Nudeln kochen.",
      "Knoblauch und Spinat anbraten.",
      "Frischkäse und etwas Nudelwasser unterrühren, mit den Nudeln mischen."
    ]
  },
  {
    "id": "schoki-pudding",
    "title": "Selbstgemachter Schokopudding",
    "emoji": "🍮",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Süß",
    "description": "Cremiger Schokoladenpudding ohne Fertigmischung.",
    "ingredients": [
      {
        "name": "Milch",
        "amount": "400 ml"
      },
      {
        "name": "Kakaopulver",
        "amount": "3 EL"
      },
      {
        "name": "Speisestärke",
        "amount": "3 EL"
      },
      {
        "name": "Zucker",
        "amount": "3 EL"
      }
    ],
    "steps": [
      "Stärke und Kakao mit etwas kalter Milch anrühren.",
      "Restliche Milch mit Zucker aufkochen.",
      "Stärkemischung einrühren und unter Rühren 1 Minute kochen lassen."
    ]
  },
  {
    "id": "apfelpfannkuchen",
    "title": "Süße Apfelpfannkuchen",
    "emoji": "🥞",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Süß",
    "description": "Pfannkuchen mit eingebackenen feinen Apfelscheiben.",
    "ingredients": [
      {
        "name": "Apfel",
        "amount": "2 Stück"
      },
      {
        "name": "Mehl",
        "amount": "150 g"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Milch",
        "amount": "200 ml"
      },
      {
        "name": "Zimt",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Teig aus Mehl, Eiern und Milch anrühren.",
      "Äpfel entkernen und in dünne Scheiben schneiden.",
      "Teig in die Pfanne geben, Apfelscheiben hineindrücken und von beiden Seiten backen."
    ]
  },
  {
    "id": "reissalat",
    "title": "Frischer Reissalat",
    "emoji": "🥗",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Salat",
    "description": "Bunter Salat aus abgekühltem Reis, Paprika und Erbsen.",
    "ingredients": [
      {
        "name": "Reis",
        "amount": "150 g"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Erbsen",
        "amount": "100 g"
      },
      {
        "name": "Mais",
        "amount": "100 g"
      },
      {
        "name": "Essig",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Reis kochen und abkühlen lassen.",
      "Gemüse würfeln und unterheben.",
      "Mit Essig, Öl, Salz und Pfeffer anmachen."
    ]
  },
  {
    "id": "sweet-chili-chicken-wrap",
    "title": "Sweet Chili Chicken Wrap",
    "emoji": "🌯",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 2,
    "diet": [],
    "difficulty": "Einfach",
    "category": "Schnell",
    "description": "Hähnchenbruststreifen mit Salat und Süß-Sauer-Sauce im Wrap.",
    "ingredients": [
      {
        "name": "Tortilla-Wraps",
        "amount airborne": "2 Stück",
        "amount": "2 Stück"
      },
      {
        "name": "Hähnchenbrust",
        "amount": "200 g"
      },
      {
        "name": "Salat",
        "amount": "4 Blätter"
      },
      {
        "name": "Sweet Chili Sauce",
        "amount": "3 EL"
      }
    ],
    "steps": [
      "Hähnchen in Streifen schneiden und anbraten.",
      "Wraps erwärmen.",
      "Salat, Hähnchen und Sweet-Chili-Sauce einwickeln."
    ]
  },
  {
    "id": "tortellini-auflauf",
    "title": "Überbackener Tortellini-Auflauf",
    "emoji": "🧀",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Ofengericht",
    "description": "Tortellini in Tomatensauce mit geschmolzenem Käse.",
    "ingredients": [
      {
        "name": "Tortellini",
        "amount": "400 g"
      },
      {
        "name": "Tomatensauce",
        "amount": "300 ml"
      },
      {
        "name": "Käse",
        "amount": "100 g"
      },
      {
        "name": "Sahne",
        "amount": "50 ml"
      }
    ],
    "steps": [
      "Tortellini kurz kochen.",
      "Mit Tomatensauce und Sahne in eine Form geben.",
      "Käse drüber streuen und bei 200 °C 15 Min. überbacken."
    ]
  },
  {
    "id": "süßkartoffel-curry",
    "title": "Süßkartoffel-Kichererbsen-Curry",
    "emoji": "🍠",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Einfach",
    "category": "Curry",
    "description": "Süßliche Süßkartoffelwürfel in milder Kokos-Currysoße.",
    "ingredients": [
      {
        "name": "Süßkartoffel",
        "amount": "1 Stück"
      },
      {
        "name": "Kichererbsen",
        "amount": "1 Dose"
      },
      {
        "name": "Kokosmilch",
        "amount": "250 ml"
      },
      {
        "name": "Spinat",
        "amount": "100 g"
      },
      {
        "name": "Currypaste",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Süßkartoffel würfeln.",
      "Currypaste anbraten, Süßkartoffel, Kichererbsen und Kokosmilch dazugeben.",
      "20 Minuten köcheln lassen, Spinat am Ende unterheben."
    ]
  },
  {
    "id": "pilz-rahmsosse-knoedel",
    "title": "Pilzrahmsauce mit Knödeln",
    "emoji": "🧆",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Einfach",
    "category": "Klassiker",
    "description": "Semmelknödel mit cremigem Champignon-Rahm.",
    "ingredients": [
      {
        "name": "Semmelknödel",
        "amount": "4 Stück"
      },
      {
        "name": "Champignons",
        "amount": "250 g"
      },
      {
        "name": "Sahne",
        "amount": "150 ml"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Petersilie",
        "amount": "1 EL"
      }
    ],
    "steps": [
      "Knödel nach Anweisung kochen.",
      "Pilze und Zwiebeln anbraten.",
      "Mit Sahne aufgießen, einkochen lassen und mit Petersilie garnieren."
    ]
  },
  {
    "id": "quesadillas",
    "title": "Käse-Gemüse-Quesadillas",
    "emoji": "🌮",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 2,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Schnell",
    "description": "Mexikanische Tortillas gefüllt mit schmelzendem Käse und Paprika.",
    "ingredients": [
      {
        "name": "Tortilla-Wraps",
        "amount": "2 Stück"
      },
      {
        "name": "Käse",
        "amount": "100 g"
      },
      {
        "name": "Paprika",
        "amount": "1 Stück"
      },
      {
        "name": "Mais",
        "amount": "50 g"
      }
    ],
    "steps": [
      "Wrap in die Pfanne legen, eine Hälfte mit Käse, Paprikawürfeln und Mais belegen.",
      "Zusammenklappen und von beiden Seiten knusprig braun braten."
    ]
  },
  {
    "id": "bananen-pancakes",
    "title": "Bananen-Pancakes",
    "emoji": "🥞",
    "time": 15,
    "prep": 5,
    "cook": 10,
    "portions": 1,
    "diet": [
      "vegetarian"
    ],
    "difficulty": "Sehr einfach",
    "category": "Frühstück",
    "description": "Einfache Pancakes aus nur 2 Grundzutaten: Banane und Ei.",
    "ingredients": [
      {
        "name": "Banane",
        "amount": "1 Stück"
      },
      {
        "name": "Eier",
        "amount": "2 Stück"
      },
      {
        "name": "Zimt",
        "amount": "1 Prise"
      },
      {
        "name": "Butter",
        "amount": "1 TL"
      }
    ],
    "steps": [
      "Banane mit der Gabel zerdrücken, mit den Eiern verquirlen.",
      "Kleine Pancakes bei mittlerer Hitze in der Pfanne ausbacken."
    ]
  },
  {
    "id": "bohnensalat",
    "title": "Würziger Bohnensalat",
    "emoji": "🥗",
    "time": 10,
    "prep": 10,
    "cook": 0,
    "portions": 2,
    "diet": [
      "vegetarian",
      "vegan"
    ],
    "difficulty": "Sehr einfach",
    "category": "Salat",
    "description": "Klassischer Salat aus weißen Bohnen, Zwiebeln und Petersilie.",
    "ingredients": [
      {
        "name": "Weiße Bohnen",
        "amount": "1 Dose"
      },
      {
        "name": "Zwiebeln",
        "amount": "1 Stück"
      },
      {
        "name": "Essig",
        "amount": "2 EL"
      },
      {
        "name": "Olivenöl",
        "amount": "2 EL"
      }
    ],
    "steps": [
      "Bohnen abspülen.",
      "Zwiebeln fein würfeln.",
      "Mit Essig, Öl, Salz und Pfeffer vermengen und kurz ziehen lassen."
    ]
  }
];

const foodEmoji = {
  tomaten:"🍅", tomate:"🍅", nudeln:"🍝", reis:"🍚", eier:"🥚", ei:"🥚", milch:"🥛", käse:"🧀",
  parmesan:"🧀", zwiebeln:"🧅", knoblauch:"🧄", kartoffeln:"🥔", karotten:"🥕", paprika:"🫑",
  sahne:"🥛", kokosmilch:"🥥", kichererbsen:"🫘", linsen:"🫘", mehl:"🌾", banane:"🍌", apfel:"🍎",
  brot:"🍞", salat:"🥬", joghurt:"🥣", "olivenöl":"🫒", öl:"🫒", "tortilla-wraps":"🌯", default:"🥬"
};
const colorByRecipe = {
  "tomaten-pasta": "linear-gradient(135deg,#f2d9bf,#e8c5b0)",
  "gemuese-reis": "linear-gradient(135deg,#e3ebc9,#f4dfb7)",
  "kartoffelgratin": "linear-gradient(135deg,#f2e2b9,#e7d5a8)",
  "gemuese-curry": "linear-gradient(135deg,#f0d5a2,#e5b97c)",
  "wraps": "linear-gradient(135deg,#e4edcf,#d5e1bd)",
  "pfannkuchen": "linear-gradient(135deg,#f6e5b8,#e9cfa0)",
  "linsen-suppe": "linear-gradient(135deg,#e7d8b5,#c9d8ad)",
  "pizza-toast": "linear-gradient(135deg,#f1d1b7,#e8b79d)",
  "hafer-bowl": "linear-gradient(135deg,#e6ebcf,#f1dfbd)",
  "spaghetti-carbonara": "linear-gradient(135deg,#fcd5ce,#f8edeb)",
  "chili-con-carne": "linear-gradient(135deg,#d8e2dc,#ffe5d9)",
  "chili-sin-carne": "linear-gradient(135deg,#e8e8e4,#f8edeb)",
  "kuerbis-cremesuppe": "linear-gradient(135deg,#ffd7ba,#fec89a)",
  "kaiserschmarrn": "linear-gradient(135deg,#f2d9bf,#e8c5b0)",
  "gulasch-klassisch": "linear-gradient(135deg,#e3ebc9,#f4dfb7)",
  "ofengemuese-feta": "linear-gradient(135deg,#f2e2b9,#e7d5a8)",
  "shakshuka": "linear-gradient(135deg,#f0d5a2,#e5b97c)",
  "falafel-wrap": "linear-gradient(135deg,#e4edcf,#d5e1bd)",
  "gebratene-nudeln": "linear-gradient(135deg,#f6e5b8,#e9cfa0)",
  "kartoffelsalat": "linear-gradient(135deg,#e7d8b5,#c9d8ad)",
  "tomaten-mozzarella-salat": "linear-gradient(135deg,#f1d1b7,#e8b79d)",
  "flammkuchen": "linear-gradient(135deg,#e6ebcf,#f1dfbd)",
  "lasagne-al-forno": "linear-gradient(135deg,#fcd5ce,#f8edeb)",
  "gemuese-lasagne": "linear-gradient(135deg,#d8e2dc,#ffe5d9)",
  "griechischer-salat": "linear-gradient(135deg,#e8e8e4,#f8edeb)",
  "gnocchi-pfanne": "linear-gradient(135deg,#ffd7ba,#fec89a)",
  "risotto-pilze": "linear-gradient(135deg,#f2d9bf,#e8c5b0)",
  "milchreis": "linear-gradient(135deg,#e3ebc9,#f4dfb7)",
  "waffeln": "linear-gradient(135deg,#f2e2b9,#e7d5a8)",
  "avocado-toast": "linear-gradient(135deg,#f0d5a2,#e5b97c)",
  "couscous-salat": "linear-gradient(135deg,#e4edcf,#d5e1bd)",
  "quinoa-bowl": "linear-gradient(135deg,#f6e5b8,#e9cfa0)",
  "chana-masala": "linear-gradient(135deg,#e7d8b5,#c9d8ad)",
  "kichererbsen-curry": "linear-gradient(135deg,#f1d1b7,#e8b79d)",
  "kartoffel-moehren-eintopf": "linear-gradient(135deg,#e6ebcf,#f1dfbd)",
  "minestrone": "linear-gradient(135deg,#fcd5ce,#f8edeb)",
  "kaesespaetzle": "linear-gradient(135deg,#d8e2dc,#ffe5d9)",
  "bauernfruehstueck": "linear-gradient(135deg,#e8e8e4,#f8edeb)",
  "fischstaebchen-puerree": "linear-gradient(135deg,#ffd7ba,#fec89a)",
  "lachs-spinat-pasta": "linear-gradient(135deg,#f2d9bf,#e8c5b0)",
  "haehnchen-curry": "linear-gradient(135deg,#e3ebc9,#f4dfb7)",
  "haehnchen-geschnetzeltes": "linear-gradient(135deg,#f2e2b9,#e7d5a8)",
  "feta-spagetti": "linear-gradient(135deg,#f0d5a2,#e5b97c)",
  "sommerrollen": "linear-gradient(135deg,#e4edcf,#d5e1bd)",
  "dahl-linsen": "linear-gradient(135deg,#f6e5b8,#e9cfa0)",
  "zucchini-puffer": "linear-gradient(135deg,#e7d8b5,#c9d8ad)",
  "moussaka-veggie": "linear-gradient(135deg,#f1d1b7,#e8b79d)",
  "strammer-max": "linear-gradient(135deg,#e6ebcf,#f1dfbd)",
  "bruschetta": "linear-gradient(135deg,#fcd5ce,#f8edeb)",
  "cremige-spinat-pasta": "linear-gradient(135deg,#d8e2dc,#ffe5d9)",
  "schoki-pudding": "linear-gradient(135deg,#e8e8e4,#f8edeb)",
  "apfelpfannkuchen": "linear-gradient(135deg,#ffd7ba,#fec89a)",
  "reissalat": "linear-gradient(135deg,#f2d9bf,#e8c5b0)",
  "sweet-chili-chicken-wrap": "linear-gradient(135deg,#e3ebc9,#f4dfb7)",
  "tortellini-auflauf": "linear-gradient(135deg,#f2e2b9,#e7d5a8)",
  "süßkartoffel-curry": "linear-gradient(135deg,#f0d5a2,#e5b97c)",
  "pilz-rahmsosse-knoedel": "linear-gradient(135deg,#e4edcf,#d5e1bd)",
  "quesadillas": "linear-gradient(135deg,#f6e5b8,#e9cfa0)",
  "bananen-pancakes": "linear-gradient(135deg,#e7d8b5,#c9d8ad)",
  "bohnensalat": "linear-gradient(135deg,#f1d1b7,#e8b79d)"
};

const defaultState = {
  pantry: [
    {id:"p1",name:"Nudeln",amount:"200 g"},
    {id:"p2",name:"Tomaten",amount:"3 Stück"},
    {id:"p3",name:"Zwiebeln",amount:"2 Stück"},
    {id:"p4",name:"Reis",amount:"1 Packung"},
    {id:"p5",name:"Öl",amount:""},
    {id:"p6",name:"Eier",amount:"4 Stück"}
  ],
  shopping: [{id:"s1",name:"Milch",amount:"1 Liter",done:false}],
  saved: [],
  rejected: [],
  cooked: [],
  ratings: {},
  notes: {},
  currentRecipe: "tomaten-pasta",
  seen: []
};
let state = loadState();
let activeRecipeId = state.currentRecipe || recipes[0].id;
let modalRecipeId = null;
let modalPortions = 2;
let savedFilter = "saved";
let toastTimer = null;
let touchStartX = null;
let touchStartY = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(defaultState), ...parsed };
  } catch (error) {
    console.warn("Gespeicherte Daten konnten nicht gelesen werden.", error);
    return structuredClone(defaultState);
  }
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { showToast("Speichern im Browser war nicht möglich."); }
}
function uid(prefix="item") { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2,7)}`; }
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
function normalize(value) { return String(value || "").toLocaleLowerCase("de").trim().replace(/\s+/g, " "); }
function recipeById(id) { return recipes.find(recipe => recipe.id === id); }
function findPantryItem(name) {
  const key = normalize(name);
  return state.pantry.find(item => normalize(item.name) === key ||
    (key.endsWith("n") && normalize(item.name) === key.slice(0,-1)) ||
    (normalize(item.name).endsWith("n") && normalize(item.name).slice(0,-1) === key));
}
function hasIngredient(name) { return Boolean(findPantryItem(name)); }
function ingredientMatches(recipe) { return recipe.ingredients.filter(item => hasIngredient(item.name)).length; }
function recipeMatchPercent(recipe) { return Math.round(ingredientMatches(recipe) / recipe.ingredients.length * 100); }
function recipeDietText(recipe) {
  if (recipe.diet.includes("vegan")) return "🌱 Vegan";
  if (recipe.diet.includes("vegetarian")) return "🌱 Vegetarisch";
  return "🍽️ Ausgewogen";
}
function getFoodEmoji(name) {
  const key = normalize(name);
  for (const [food, emoji] of Object.entries(foodEmoji)) {
    if (food !== "default" && key.includes(food)) return emoji;
  }
  return foodEmoji.default;
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}
function setView(viewName) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === viewName));
  if (viewName === "discover") renderDiscover();
  if (viewName === "pantry") renderPantry();
  if (viewName === "shopping") renderShopping();
  if (viewName === "saved") renderSaved();
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateCounts() {
  document.getElementById("shoppingCount").textContent = state.shopping.filter(item => !item.done).length;
  document.getElementById("savedCount").textContent = state.saved.length;
  document.getElementById("savedTabCount").textContent = state.saved.length;
  document.getElementById("openShoppingCount").textContent = state.shopping.filter(item => !item.done).length;
  document.getElementById("doneShoppingCount").textContent = state.shopping.filter(item => item.done).length;
}
function getFilteredRecipes() {
  const query = normalize(document.getElementById("recipeSearch").value);
  const filter = document.getElementById("dietFilter").value;
  return recipes.filter(recipe => {
    const haystack = normalize([recipe.title, recipe.description, recipe.category, ...recipe.ingredients.map(i=>i.name)].join(" "));
    if (query && !haystack.includes(query)) return false;
    if (filter === "vegetarian" && !recipe.diet.includes("vegetarian")) return false;
    if (filter === "vegan" && !recipe.diet.includes("vegan")) return false;
    if (filter === "quick" && recipe.time >= 25) return false;
    if (filter === "pantry" && recipeMatchPercent(recipe) < 50) return false;
    return true;
  });
}
function getNextRecipe() {
  const filtered = getFilteredRecipes();
  if (!filtered.length) return null;
  const notRejected = filtered.filter(recipe => !state.rejected.includes(recipe.id));
  const pool = notRejected.length ? notRejected : filtered;
  const unseen = pool.filter(recipe => !state.seen.includes(recipe.id));
  const candidates = unseen.length ? unseen : pool;
  candidates.sort((a,b) => recipeMatchPercent(b)-recipeMatchPercent(a) || a.time-b.time);
  return candidates.find(recipe => recipe.id !== activeRecipeId) || candidates[0];
}
function renderDiscover() {
  const filtered = getFilteredRecipes();
  document.getElementById("recipeResultCount").textContent = `${filtered.length} ${filtered.length === 1 ? "Rezept" : "Rezepte"} gefunden`;
  if (!filtered.length) {
    document.getElementById("recipeTitle").textContent = "Keine Rezepte gefunden";
    document.getElementById("recipeDescription").textContent = "Passe deine Suche oder den Filter an, um weitere Gerichte zu entdecken.";
    document.getElementById("recipeEmoji").textContent = "🔎";
    document.getElementById("recipeTime").textContent = "Andere Filter ausprobieren";
    document.getElementById("recipeDiet").textContent = "";
    document.getElementById("matchText").textContent = "Keine Treffer";
    document.getElementById("matchBar").style.width = "0%";
    document.getElementById("ingredientPreview").innerHTML = "";
    document.getElementById("viewRecipe").disabled = true;
    document.getElementById("photoSave").disabled = true;
    renderPantryMini();
    document.getElementById("moreRecipes").innerHTML = "";
    return;
  }
  let recipe = recipeById(activeRecipeId);
  if (!recipe || !filtered.some(item => item.id === recipe.id)) recipe = filtered[0];
  activeRecipeId = recipe.id;
  state.currentRecipe = recipe.id;
  persist();
  document.getElementById("viewRecipe").disabled = false;
  document.getElementById("photoSave").disabled = false;
  document.getElementById("recipePhoto").style.background = colorByRecipe[recipe.id] || "linear-gradient(135deg,#f2d9bf,#e8c5b0)";
  document.getElementById("recipeEmoji").textContent = recipe.emoji;
  document.getElementById("recipeChip").textContent = recipeMatchPercent(recipe) >= 75 ? "PASST ZU DEINEM VORRAT" : "IDEEN FÜR HEUTE";
  document.getElementById("photoSave").textContent = state.saved.includes(recipe.id) ? "♥" : "♡";
  document.getElementById("photoSave").classList.toggle("is-saved", state.saved.includes(recipe.id));
  document.getElementById("recipeTime").textContent = `⏱ ${recipe.time} Min.`;
  document.getElementById("recipeDiet").textContent = recipeDietText(recipe);
  document.getElementById("recipeTitle").textContent = recipe.title;
  document.getElementById("recipeDescription").textContent = recipe.description;
  document.getElementById("matchText").textContent = `${ingredientMatches(recipe)} von ${recipe.ingredients.length} Zutaten`;
  document.getElementById("matchBar").style.width = `${recipeMatchPercent(recipe)}%`;
  document.getElementById("ingredientPreview").innerHTML = recipe.ingredients.slice(0,4).map(item =>
    `<span class="ingredient-pill ${hasIngredient(item.name) ? "" : "missing"}">${hasIngredient(item.name) ? "✓ " : "+ "}${escapeHTML(item.name)}</span>`).join("") +
    (recipe.ingredients.length > 4 ? `<span class="ingredient-pill">+${recipe.ingredients.length-4}</span>` : "");
  renderPantryMini();
  const more = filtered.filter(item => item.id !== recipe.id).slice(0,3);
  document.getElementById("moreRecipes").innerHTML = more.map(miniRecipeHTML).join("");
}
function renderPantryMini() {
  const list = state.pantry.slice(0,8);
  document.getElementById("pantryMini").innerHTML = list.length
    ? list.map(item=>`<span class="pantry-chip"><b>${getFoodEmoji(item.name)}</b>${escapeHTML(item.name)}</span>`).join("")
    : `<span class="pantry-chip">Noch keine Lebensmittel eingetragen</span>`;
}
function miniRecipeHTML(recipe) {
  return `<article class="mini-card" data-open-recipe="${recipe.id}" tabindex="0" role="button" aria-label="Rezept ${escapeHTML(recipe.title)} öffnen">
    <div class="mini-visual" style="background:${colorByRecipe[recipe.id] || 'linear-gradient(135deg,#f2d9bf,#e8c5b0)'}">${recipe.emoji}</div>
    <div class="mini-content"><h3>${escapeHTML(recipe.title)}</h3><p>⏱ ${recipe.time} Min. · ${recipeMatchPercent(recipe)} % Vorrat passt</p></div>
  </article>`;
}
function showNextRecipe(action) {
  const card = document.getElementById("recipeCard");
  if (action === "reject") {
    if (!state.rejected.includes(activeRecipeId)) state.rejected.push(activeRecipeId);
    state.seen.push(activeRecipeId);
  } else {
    if (!state.saved.includes(activeRecipeId)) state.saved.push(activeRecipeId);
    state.rejected = state.rejected.filter(id=>id !== activeRecipeId);
    state.seen.push(activeRecipeId);
    showToast("Rezept auf deiner Merkliste gespeichert.");
  }
  persist();
  card.classList.add(action === "reject" ? "swipe-left" : "swipe-right");
  setTimeout(() => {
    card.classList.remove("swipe-left","swipe-right");
    const next = getNextRecipe();
    if (next) activeRecipeId = next.id;
    renderDiscover();
    updateCounts();
  }, 150);
}
function renderPantry() {
  const query = normalize(document.getElementById("pantrySearch").value);
  const list = state.pantry.filter(item => normalize(item.name).includes(query));
  document.getElementById("pantrySubtitle").textContent = `${state.pantry.length} ${state.pantry.length === 1 ? "Lebensmittel" : "Lebensmittel"} eingetragen`;
  document.getElementById("pantryEmpty").classList.toggle("hidden", state.pantry.length > 0);
  document.getElementById("pantryList").innerHTML = list.map(item => `
    <div class="pantry-row">
      <span class="food-icon">${getFoodEmoji(item.name)}</span>
      <div class="row-main"><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.amount || "Menge nicht angegeben")}</small></div>
      <div class="row-actions"><button class="small-btn" data-edit-pantry="${item.id}" type="button">Bearbeiten</button><button class="small-btn" data-delete-pantry="${item.id}" type="button">Entfernen</button></div>
    </div>`).join("");
  if (state.pantry.length && !list.length) document.getElementById("pantryList").innerHTML = `<p class="muted">Keine passenden Lebensmittel gefunden.</p>`;
  renderPantryMini();
}
function renderShopping() {
  updateCounts();
  const open = state.shopping.filter(item=>!item.done);
  const done = state.shopping.filter(item=>item.done);
  const sorted = [...open, ...done];
  document.getElementById("shoppingEmpty").classList.toggle("hidden", state.shopping.length > 0);
  document.getElementById("shoppingList").innerHTML = sorted.map(item => `
    <div class="shopping-row ${item.done ? "done" : ""}">
      <input class="shopping-check" type="checkbox" data-toggle-shopping="${item.id}" ${item.done ? "checked" : ""} aria-label="${item.done ? "Als offen markieren" : "Als erledigt markieren"}">
      <span class="food-icon">${getFoodEmoji(item.name)}</span>
      <div class="row-main"><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.amount || "Menge offen")}${item.source ? ` · Für: ${escapeHTML(item.source)}` : ""}</small></div>
      <div class="row-actions"><button class="small-btn" data-edit-shopping="${item.id}" type="button">Bearbeiten</button><button class="small-btn" data-delete-shopping="${item.id}" type="button">Löschen</button></div>
    </div>`).join("");
}
function renderSaved() {
  updateCounts();
  const ids = savedFilter === "saved" ? state.saved : state.cooked;
  const uniqueIds = [...new Set(ids)];
  const list = uniqueIds.map(recipeById).filter(Boolean);
  document.getElementById("savedEmpty").classList.toggle("hidden", list.length > 0);
  document.getElementById("savedGrid").innerHTML = list.map(recipe => {
    const rating = state.ratings[recipe.id];
    const note = state.notes[recipe.id];
    return `<article class="saved-card">
      <div class="mini-visual" style="background:${colorByRecipe[recipe.id] || 'linear-gradient(135deg,#f2d9bf,#e8c5b0)'}">${recipe.emoji}</div>
      <div class="mini-content"><h3>${escapeHTML(recipe.title)}</h3><p>⏱ ${recipe.time} Min. · ${recipeMatchPercent(recipe)} % Vorrat passt</p>
      ${rating ? `<p class="review-line">${rating === "up" ? "👍 Hat dir geschmeckt" : "👎 Hat dir nicht geschmeckt"}</p>` : ""}
      ${note ? `<p class="saved-description">${escapeHTML(note.length > 85 ? note.slice(0,85)+"…" : note)}</p>` : ""}
      <div class="saved-card-actions"><button class="btn btn-light" data-open-recipe="${recipe.id}" type="button">Ansehen</button>${savedFilter === "saved" ? `<button class="btn btn-light" data-unsave="${recipe.id}" type="button">Entfernen</button>` : ""}</div></div>
    </article>`;
  }).join("");
}
function openRecipe(id) {
  const recipe = recipeById(id);
  if (!recipe) return;
  modalRecipeId = id;
  modalPortions = recipe.portions;
  renderModal();
  document.getElementById("recipeModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
  document.body.style.overflow = "";
  modalRecipeId = null;
}
function renderModal() {
  const recipe = recipeById(modalRecipeId);
  if (!recipe) return;
  document.getElementById("modalHero").style.background = colorByRecipe[recipe.id] || "linear-gradient(135deg,#f2d9bf,#e8c5b0)";
  document.getElementById("modalEmoji").textContent = recipe.emoji;
  document.getElementById("modalTime").textContent = `⏱ ${recipe.time} Min. (Vorbereitung ${recipe.prep} · Kochzeit ${recipe.cook})`;
  document.getElementById("modalDiet").textContent = recipeDietText(recipe);
  document.getElementById("modalDifficulty").textContent = `✦ ${recipe.difficulty}`;
  document.getElementById("modalTitle").textContent = recipe.title;
  document.getElementById("modalDescription").textContent = recipe.description;
  document.getElementById("portionValue").textContent = `${modalPortions} ${modalPortions === 1 ? "Portion" : "Portionen"}`;
  document.getElementById("modalIngredients").innerHTML = recipe.ingredients.map((item,index) => {
    const owned = hasIngredient(item.name);
    const amount = scaleAmount(item.amount, modalPortions / recipe.portions);
    return `<label class="modal-ingredient"><input type="checkbox" ${owned ? "checked" : ""} disabled><span class="${owned ? "" : "ingredient-missing"}">${escapeHTML(amount)} ${escapeHTML(item.name)}${owned ? " · vorhanden" : " · fehlt"}</span></label>`;
  }).join("");
  const missing = recipe.ingredients.filter(item=>!hasIngredient(item.name));
  document.getElementById("missingBox").textContent = missing.length ? `Noch ${missing.length} ${missing.length === 1 ? "Zutat" : "Zutaten"} nötig: ${missing.map(i=>i.name).join(", ")}` : "Du hast alle aufgeführten Zutaten laut deinem Vorrat bereits zu Hause.";
  document.getElementById("addMissing").textContent = missing.length ? "Fehlende Zutaten hinzufügen" : "Alles vorhanden";
  document.getElementById("addMissing").disabled = missing.length === 0;
  document.getElementById("modalSteps").innerHTML = recipe.steps.map(step=>`<li>${escapeHTML(step)}</li>`).join("");
  document.getElementById("toggleSaved").textContent = state.saved.includes(recipe.id) ? "♥ Gespeichert" : "♡ Rezept merken";
  document.getElementById("thumbUp").classList.toggle("selected", state.ratings[recipe.id] === "up");
  document.getElementById("thumbDown").classList.toggle("selected", state.ratings[recipe.id] === "down");
  document.getElementById("recipeNote").value = state.notes[recipe.id] || "";
  document.getElementById("markCooked").textContent = state.cooked.includes(recipe.id) ? "✓ Bereits als gekocht markiert" : "✓ Als gekocht markieren";
  document.getElementById("modalStatus").textContent = "";
}
function scaleAmount(amount, factor) {
  const match = String(amount).match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (!match || factor === 1) return amount;
  const value = Number(match[1].replace(",", ".")) * factor;
  const formatted = Number.isInteger(value) ? String(value) : String(Math.round(value*100)/100).replace(".", ",");
  return `${formatted} ${match[2]}`.trim();
}
function addShoppingItem(name, amount="", source="") {
  const existing = state.shopping.find(item => normalize(item.name) === normalize(name) && !item.done);
  if (existing) {
    if (amount && !existing.amount) existing.amount = amount;
    if (source && !existing.source) existing.source = source;
    return false;
  }
  state.shopping.push({id:uid("s"),name:name.trim(),amount:amount.trim(),done:false,source});
  return true;
}
function addMissingIngredients() {
  const recipe = recipeById(modalRecipeId);
  if (!recipe) return;
  const missing = recipe.ingredients.filter(item=>!hasIngredient(item.name));
  if (!missing.length) return;
  let added = 0;
  missing.forEach(item => { if (addShoppingItem(item.name, scaleAmount(item.amount, modalPortions / recipe.portions), recipe.title)) added++; });
  persist(); renderShopping(); updateCounts(); showToast(added ? `${added} Zutat${added === 1 ? "" : "en"} zur Einkaufsliste hinzugefügt.` : "Diese Zutaten stehen bereits auf deiner Einkaufsliste.");
}
function toggleSaved(id) {
  if (state.saved.includes(id)) state.saved = state.saved.filter(item=>item !== id);
  else state.saved.push(id);
  persist(); renderDiscover(); renderSaved(); updateCounts();
  if (modalRecipeId) renderModal();
}
function markCooked() {
  if (!modalRecipeId) return;
  if (!state.cooked.includes(modalRecipeId)) state.cooked.push(modalRecipeId);
  persist(); renderSaved(); renderModal(); showToast("Rezept als gekocht markiert.");
}
function rateRecipe(rating) {
  if (!modalRecipeId) return;
  state.ratings[modalRecipeId] = rating;
  persist(); renderModal(); renderSaved();
  showToast(rating === "up" ? "Danke für deine positive Bewertung!" : "Bewertung gespeichert – danke für dein Feedback.");
}
function addPantryItem(event) {
  event.preventDefault();
  const name = document.getElementById("pantryName").value.trim();
  const amount = document.getElementById("pantryAmount").value.trim();
  if (!name) return;
  const existing = findPantryItem(name);
  if (existing) {
    if (amount) existing.amount = amount;
    showToast("Lebensmittel war schon vorhanden – Eintrag aktualisiert.");
  } else {
    state.pantry.push({id:uid("p"),name,amount});
    showToast(`${name} zum Vorrat hinzugefügt.`);
  }
  event.target.reset(); persist(); renderPantry(); renderDiscover();
}
function addShoppingFromForm(event) {
  event.preventDefault();
  const name = document.getElementById("shoppingName").value.trim();
  const amount = document.getElementById("shoppingAmount").value.trim();
  if (!name) return;
  const added = addShoppingItem(name,amount);
  event.target.reset(); persist(); renderShopping(); updateCounts();
  showToast(added ? `${name} zur Einkaufsliste hinzugefügt.` : `${name} steht bereits auf der Einkaufsliste.`);
}
function editItem(type,id) {
  const collection = type === "pantry" ? state.pantry : state.shopping;
  const item = collection.find(entry=>entry.id === id);
  if (!item) return;
  const name = prompt("Name des Eintrags:", item.name);
  if (name === null) return;
  if (!name.trim()) { showToast("Der Name darf nicht leer sein."); return; }
  const amount = prompt("Menge oder Notiz (optional):", item.amount || "");
  if (amount === null) return;
  item.name = name.trim(); item.amount = amount.trim();
  persist();
  if (type === "pantry") { renderPantry(); renderDiscover(); } else renderShopping();
  showToast("Eintrag aktualisiert.");
}
function deleteItem(type,id) {
  if (type === "pantry") state.pantry = state.pantry.filter(item=>item.id !== id);
  else state.shopping = state.shopping.filter(item=>item.id !== id);
  persist();
  if (type === "pantry") { renderPantry(); renderDiscover(); } else renderShopping();
  updateCounts(); showToast("Eintrag entfernt.");
}
function handleDocumentClick(event) {
  const nav = event.target.closest("[data-view]");
  if (nav) { setView(nav.dataset.view); return; }
  const goto = event.target.closest("[data-goto]");
  if (goto) { setView(goto.dataset.goto); return; }
  const open = event.target.closest("[data-open-recipe]");
  if (open) { openRecipe(open.dataset.openRecipe); return; }
  const editPantry = event.target.closest("[data-edit-pantry]");
  if (editPantry) { editItem("pantry",editPantry.dataset.editPantry); return; }
  const deletePantry = event.target.closest("[data-delete-pantry]");
  if (deletePantry) { deleteItem("pantry",deletePantry.dataset.deletePantry); return; }
  const editShopping = event.target.closest("[data-edit-shopping]");
  if (editShopping) { editItem("shopping",editShopping.dataset.editShopping); return; }
  const deleteShopping = event.target.closest("[data-delete-shopping]");
  if (deleteShopping) { deleteItem("shopping",deleteShopping.dataset.deleteShopping); return; }
  const unsave = event.target.closest("[data-unsave]");
  if (unsave) { toggleSaved(unsave.dataset.unsave); showToast("Rezept aus der Merkliste entfernt."); return; }
  const savedTab = event.target.closest("[data-saved-filter]");
  if (savedTab) {
    savedFilter = savedTab.dataset.savedFilter;
    document.querySelectorAll(".saved-tab").forEach(button=>button.classList.toggle("active",button === savedTab));
    renderSaved();
  }
}
function handleDocumentChange(event) {
  const checkbox = event.target.closest("[data-toggle-shopping]");
  if (!checkbox) return;
  const item = state.shopping.find(entry=>entry.id === checkbox.dataset.toggleShopping);
  if (!item) return;
  item.done = checkbox.checked;
  persist(); renderShopping(); updateCounts();
}
function bindEvents() {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("change", handleDocumentChange);
  document.getElementById("pantryForm").addEventListener("submit", addPantryItem);
  document.getElementById("shoppingForm").addEventListener("submit", addShoppingFromForm);
  document.getElementById("pantrySearch").addEventListener("input", renderPantry);
  document.getElementById("recipeSearch").addEventListener("input", () => {
    const filtered = getFilteredRecipes();
    if (!filtered.some(recipe=>recipe.id === activeRecipeId)) activeRecipeId = filtered[0]?.id || "";
    renderDiscover();
  });
  document.getElementById("dietFilter").addEventListener("change", () => {
    const filtered = getFilteredRecipes();
    activeRecipeId = filtered[0]?.id || "";
    renderDiscover();
  });
  document.getElementById("rejectRecipe").addEventListener("click", () => showNextRecipe("reject"));
  document.getElementById("acceptRecipe").addEventListener("click", () => showNextRecipe("accept"));
  document.getElementById("photoSave").addEventListener("click", () => toggleSaved(activeRecipeId));
  document.getElementById("viewRecipe").addEventListener("click", () => openRecipe(activeRecipeId));
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("recipeModal").addEventListener("click", event => { if (event.target.id === "recipeModal") closeModal(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
    if (event.key === "Enter" && event.target.matches(".mini-card")) openRecipe(event.target.dataset.openRecipe);
  });
  document.getElementById("portionMinus").addEventListener("click", () => { modalPortions = Math.max(1,modalPortions-1); renderModal(); });
  document.getElementById("portionPlus").addEventListener("click", () => { modalPortions = Math.min(12,modalPortions+1); renderModal(); });
  document.getElementById("addMissing").addEventListener("click", addMissingIngredients);
  document.getElementById("toggleSaved").addEventListener("click", () => toggleSaved(modalRecipeId));
  document.getElementById("markCooked").addEventListener("click", markCooked);
  document.getElementById("thumbUp").addEventListener("click", () => rateRecipe("up"));
  document.getElementById("thumbDown").addEventListener("click", () => rateRecipe("down"));
  document.getElementById("saveNote").addEventListener("click", () => {
    if (!modalRecipeId) return;
    const note = document.getElementById("recipeNote").value.trim();
    if (note) state.notes[modalRecipeId] = note;
    else delete state.notes[modalRecipeId];
    persist(); renderSaved();
    document.getElementById("modalStatus").textContent = "Deine Notiz wurde gespeichert.";
    showToast("Notiz gespeichert.");
  });
  document.getElementById("clearDone").addEventListener("click", () => {
    const count = state.shopping.filter(item=>item.done).length;
    state.shopping = state.shopping.filter(item=>!item.done);
    persist(); renderShopping(); updateCounts();
    showToast(count ? `${count} erledigte Einträge gelöscht.` : "Es gibt keine erledigten Einträge.");
  });
  document.getElementById("resetDemo").addEventListener("click", () => {
    if (!confirm("Möchtest du die lokalen Demo-Daten wirklich zurücksetzen? Eigene Vorräte, Listen und Bewertungen werden dabei gelöscht.")) return;
    state = structuredClone(defaultState); activeRecipeId = recipes[0].id; savedFilter = "saved";
    persist(); renderAll(); setView("discover"); showToast("Demo-Daten zurückgesetzt.");
  });

  const card = document.getElementById("recipeCard");
  card.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0]; touchStartX = touch.clientX; touchStartY = touch.clientY;
  }, {passive:true});
  card.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX, dy = touch.clientY - touchStartY;
    touchStartX = touchStartY = null;
    if (Math.abs(dx) > 75 && Math.abs(dx) > Math.abs(dy) * 1.25) showNextRecipe(dx > 0 ? "accept" : "reject");
  }, {passive:true});
  let mouseDownX = null;
  card.addEventListener("mousedown", event => { if (event.button === 0) mouseDownX = event.clientX; });
  card.addEventListener("mouseup", event => {
    if (mouseDownX === null) return;
    const dx = event.clientX - mouseDownX; mouseDownX = null;
    if (Math.abs(dx) > 100) showNextRecipe(dx > 0 ? "accept" : "reject");
  });
}
function renderAll() {
  renderDiscover(); renderPantry(); renderShopping(); renderSaved(); updateCounts();
}
bindEvents();
renderAll();
