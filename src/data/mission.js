export const missions = [
  {
    id: 1,
    title: "Misi 1: Fungsi Dasar",
    info: "Latihan dasar untuk mengenali fungsi-fungsi paling umum dalam perhitungan Excel.",
    questions: [
      {
        question: "Untuk menjumlahkan item rahasia, agen menggunakan fungsi...",
        options: ["ADD", "Combine", "TOTAL", "SUM"],
        answer: "SUM",
      },
      {
        question: "Fungsi untuk membulatkan angka ke atas adalah...",
        options: ["Floor", "Ceiling", "RoundDown", "Shorten"],
        answer: "Ceiling",
      },
    ],
  },
  {
    id: 2,
    title: "Misi 2: Statistik",
    info: "Pahami cara menganalisis data menggunakan COUNT, MAX, dan fungsi statistik lainnya.",
    questions: [
      {
        question: "Fungsi untuk menghitung banyaknya data dalam Excel?",
        options: ["SUM", "MIN", "COUNT", "IF"],
        answer: "COUNT",
      },
      {
        question:
          "Untuk mengetahui nilai tertinggi dari skor agen digunakan...",
        options: ["MIN", "AVERAGE", "MAX", "MOD"],
        answer: "MAX",
      },
    ],
  },
  {
    id: 3,
    title: "Misi 3: Finansial",
    info: "Gunakan fungsi keuangan seperti PMT dan FV untuk mengendalikan masa depan keuanganmu.",
    questions: [
      {
        question: "Fungsi yang menghitung cicilan bulanan adalah...",
        options: ["PV", "FV", "PMT", "NPer"],
        answer: "PMT",
      },
      {
        question: "Fungsi untuk mengetahui nilai di masa depan adalah...",
        options: ["FV", "RATE", "PV", "COUNT"],
        answer: "FV",
      },
    ],
  },
  {
    id: 4,
    title: "Misi 4: Lookup",
    info: "Tantangan untuk menemukan informasi tersembunyi menggunakan lookup dan reference.",
    questions: [
      {
        question: "Fungsi untuk mencari data secara vertikal?",
        options: ["HLOOKUP", "INDEX", "VLOOKUP", "MATCH"],
        answer: "VLOOKUP",
      },
      {
        question: "Fungsi untuk mengekstrak data berdasarkan baris & kolom?",
        options: ["INDEX", "MATCH", "IF", "SUMIF"],
        answer: "INDEX",
      },
    ],
  },
  {
    id: 5,
    title: "Misi 5: Logika",
    info: "Uji kemampuan berpikirmu dengan logika AND, OR, dan NOT. Jangan tertipu ilusi!",
    questions: [
      {
        question: "Fungsi logika untuk dua kondisi sekaligus?",
        options: ["OR", "AND", "IF", "ROUND"],
        answer: "AND",
      },
      {
        question: "Apa hasil dari =NOT(TRUE) ?",
        options: ["TRUE", "FALSE", "ERROR", "0"],
        answer: "FALSE",
      },
    ],
  },
];
