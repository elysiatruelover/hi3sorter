dataSetVersion = "2024-04-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict characters from certain group.",
    checked: false,
    sub: [
      { name: "Herrschers", key: "Honkai" },
      { name: "Schicksal", key: "Schicksal" },
      { name: "Anti-Entropy", key: "AE" },
      { name: "World Serpent", key: "Serpent" },
      { name: "MOTH", key: "MOTH" },
      { name: "St. Freya", key: "Freya" },
      { name: "APHO", key: "APHO" },
      { name: "Other", key: "Other" }
    ]
  },
  {
    name: "Disable non-playable Characters",
    key: "nonplayable",
    tooltip: "Check this to disable non-playable characters.",
    checked: false
  },
  {
    name: "Disable Male Characters",
    key: "male",
    tooltip: "Check this to disable male characters",
    checked: false
  },
  {
    name: "Remove Duplicate Characters",
    key: "dupes",
    tooltip: "Check this to remove Duplicate characters (ex. Herrscher of Thunder, Herrscher of Origin, Lightning Empress etc.)."
  }
  
];

dataSet[dataSetVersion].characterData = [
  //Flame Chasers
  {
    name: "Elysia Miss Pink Elf♪",
    img: "mpe.jpg",
    opts: {
      type: ["MOTH"],
      dupes: true
    }
  },
  {
    name: "Elysia Herrscher of Human: Ego",
    img: "hohe.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
  {
    name: "Kevin Kaslana (Previous Era)",
    img: "kevin.jpg",
    opts: {
      type: ["MOTH"]
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Kevin Kaslana",
    img: "kevin.jpg",
    opts: {
      type: ["World Serpent"]
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Aponia",
    img: "aponia.jpg",
    opts: {
      type: ["MOTH"]
    }
  },
  {
    name: "Kalpas",
    img: "kalpas.jpg",
    opts: {
      type: ["MOTH"],
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Dr. Mobius",
    img: "drmobius.jpg",
    opts: {
      type: ["MOTH"],
      dupes: true,
      nonplayable: true
    }
  },
  {
    name: "Mobius",
    img: "mobius.jpg",
    opts: {
      type: ["MOTH"]
    }
  },
  {
    name: "Pardofelis",
    img: "pardo.jpg",
    opts: {
      type: ["MOTH"]
    }
  },
  {
    name: "Eden",
    img: "eden.jpg",
    opts: {
      type: ["MOTH"]
    }
  },
  {
    name: "Hua",
    img: "hua.jpg",
    opts: {
      type: ["MOTH"],
      dupes: true
    }
  },
  {
    name: "Su",
    img: "su.jpg",
    opts: {
      type: ["MOTH"],
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Kosma",
    img: "kosma.jpg",
    opts: {
      type: ["MOTH"],
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Griseo",
    img: "griseo.jpg",
    opts: {
      type: ["MOTH"],
      dupes: true
    }
  },
  {
    name: "Sakura",
    img: "sakura.png",
    opts: {
      type: ["MOTH"]
    }
  },
  {
    name: "Vill-V",
    img: "villv.jpg",
    opts: {
      type: ["MOTH"]
    }
  },
  //Freya
  {
    name: "Kiana in St. Freya",
    img: "whitecomet.jpg",
    opts: {
      type: ["Freya"],
      dupes: true
    }
  },
  {
    name: "Mei in St. Freya",
    img: "meifreya.jpg",
    opts: {
      type: ["Freya"],
      dupes: true
    }
  },
  {
    name: "Bronya in St. Freya",
    img: "bronyafreya.jpg",
    opts: {
      type: ["Freya"],
      dupes: true
    }
  },
  {
    name: "Hua in St. Freya",
    img: "valkyrieaccipiter.jpg",
    opts: {
      type: ["Freya"],
      dupes: true
    }
  },
  {
    name: "Theresa in St. Freya",
    img: "theresafreya.png",
    opts: {
      type: ["Freya"]
    }
  },
  {
    name: "Theresa",
    img: "theresa.png",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Murata Himeko",
    img: "himeko.jpg",
    opts: {
      type: ["Freya"]
    }
  },
  //Schiksal
  {
    name: "Otto Apocalypse",
    img: "otto.jpg",
    opts: {
      type: ["Schicksal"],
      nonplayable: true,
      male: true
    }
  },
  {
    name: "Bianka Ataegina",
    img: "durandal.png",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Rita Rossweisse",
    img: "rita.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Cecilia Schariac",
    img: "cecilia.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Susannah Manatt",
    img: "susannah.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "APHO MC",
    img: "adam.jpg",
    opts: {
      type: ["APHO"],
      male: true
    }
  },
  {
    name: "Carole Pepper",
    img: "carole.jpg",
    opts: {
      type: ["APHO"]
    }
  },
  {
    name: "Timido Cute",
    img: "timido.jpg",
    opts: {
      type: ["APHO"]
    }
  },
  {
    name: "Lyle Collodi",
    img: "lyle.jpg",
    opts: {
      type: ["APHO"],
      male: true,
      nonplayable: true
    }
  },
  {
    name: "Siegfried Kaslana",
    img: "siegfried.jpg",
    opts: {
      type: ["Schicksal"],
      male: true,
      nonplayable: true
    }
  },
  {
    name: "Kallen Kaslana",
    img: "kallen.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Li Sushang",
    img: "sushang.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },

  //Anti-Entropy
  {
    name: "Welt Yang",
    img: "welt.jpg",
    opts: {
      type: ["APHO"],
      male: true,
      nonplayable: true
    }
  },
  {
    name: "Welt Yang AE",
    img: "weltae.jpg",
    opts: {
      type: ["AE"],
      male: true,
      nonplayable: true
    }
  },
  {
    name: "Welt Joyce",
    img: "joyce.jpg",
    opts: {
      type: ["AE"],
      male: true,
      nonplayable: true
    }
  },
  {
    name: "Frederica Nikola Tesla",
    img: "tesla.jpg",
    opts: {
      type: ["AE"],
      nonplayable: true
    }
  },
  {
    name: "Lieserl Albert Einstein",
    img: "einstein.jpg",
    opts: {
      type: ["AE"],
      nonplayable: true
    }
  },
  {
    name: "Cocolia",
    img: "cocolia.jpg",
    opts: {
      type: ["AE"],
      nonplayable: true
    }
  },
  {
    name: "Seele Vollerei",
    img: "seele.jpg",
    opts: {
      type: ["AE"],
      dupes: true
    }
  },
  {
    name: "Dark Seele",
    img: "darkseele.jpg",
    opts: {
      type: ["AE"]
    }
  },
  {
    name: "Liliya Olenyeva",
    img: "liliya.png",
    opts: {
      type: ["AE"]
    }
  },
  {
    name: "Rozaliya Olenyeva",
    img: "rozaliya.png",
    opts: {
      type: ["AE"]
    }
  },

  //World Serpent
  {
    name: "Misteln Schariac",
    img: "misteln.jpg",
    opts: {
      type: ["Serpent"]
    }
  },
  {
    name: "Natasha Cioara",
    img: "natasha.png",
    opts: {
      type: ["Serpent"]
    }
  },

   //MOTH
  {
    name: "Dr. MEI",
    img: "drmei.jpg",
    opts: {
      type: ["MOTH"],
      nonplayable: true
    }
  },
  {
    name: "PROMETHEUS",
    img: "prometheus.jpg",
    opts: {
      type: ["Serpent"]
    }
  },
  //Herrschers
  {
    name: "Herrscher of Dominance",
    img: "dominance.jpg",
    opts: {
      type: ["Honkai"],
      nonplayable: true
    }
  },
  {
    name: "Sirin",
    img: "sirin.png",
    opts: {
      type: ["Honkai"],
      nonplayable: true
    }
  },
  {
    name: "Herrscher of Sentience",
    img: "senti.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
  {
    name: "Herrscher of Reason (Bronya)",
    img: "reason.jpg",
    opts: {
      type: ["Honkai"],
      dupes: true
    }
  },
  {
    name: "Herrscher of Thunder",
    img: "thunder.jpg",
    opts: {
      type: ["Serpent"]
      dupes: true
    }
  },
  {
    name: "Herrscher of Flamescion",
    img: "flame.jpg",
    opts: {
      type: ["Freya"],
      dupes: true
    }
  },
  {
    name: "Herrscher of Truth",
    img: "truth.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
  {
    name: "Herrscher of Origin",
    img: "origin.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
  {
    name: "Herrscher of Finality",
    img: "finality.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
  {
    name: "Herrscher of Rebirth",
    img: "rebirth.jpg",
    opts: {
      type: ["Honkai"]
    }
  },
 
  //Other
  {
    name: "Yae Sakura",
    img: "yaesakura.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Ai Hyperion Λ",
    img: "aihyperion.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Vita",
    img: "vita.jpg",
    opts: {
      type: ["Other"],
      nonplayable: true
    }
  },
  {
    name: "Sa",
    img: "sa.jpg",
    opts: {
      type: ["Other"],
      nonplayable: true
    }
  },
  {
    name: "Azure Empyria",
    img: "azure.jpg",
    opts: {
      type: ["Other"],
      dupes: true
    }
  },
  {
    name: "Fu Hua",
    img: "fuhua.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Kira Shigure",
    img: "kira.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Kiana Void Drifter",
    img: "voiddrifter.jpg",
    opts: {
      type: ["Other"],
      dupes: true
    }
  },

   //Part 2
  {
    name: "Senadina",
    img: "senadina.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Erdős Helia",
    img: "helia.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Coralie 6626 Planck",
    img: "coralie.jpg",
    opts: {
      type: ["Schicksal"]
    }
  },
  {
    name: "Songque",
    img: "songque.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Thelema Nutriscu",
    img: "thelema.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Chenxue",
    img: "chenxue.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Part 2 Main Character (male)",
    img: "p2malemc.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Part 2 Main Character (female)",
    img: "p2femalemc.jpg",
    opts: {
      type: ["Other"]
    }
  },
  {
    name: "Litost",
    img: "litost.jpg",
    opts: {
      type: ["Other"],
      male: true,
      nonplayable: true
    }
  },

  //APHO
  {
    name: "Raiden Mei (APHO)",
    img: "meiapho.jpg",
    opts: {
      type: ["APHO"],
      dupes: true
    }
  },
  {
    name: "Bronya Zaychik (APHO)",
    img: "bronyaapho.jpg",
    opts: {
      type: ["APHO"],
      dupes: true
    }
  },
  {
    name: "Void Archive",
    img: "voidarchive.jpg",
    opts: {
      type: ["APHO"],
      male: true,
      nonplayable: true
    }
  },
];
	
