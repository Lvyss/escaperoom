export const missions = [
  {
    id: 1,
    title: "Misi 1: Ruang Dasar Akutansi",
    intro: "Kamu terperangkap di ruang arsip kuno milik lembaga keuangan lama. Di setiap meja ada dokumen berdebu dan pesan rahasia yang harus dipecahkan. Hanya dengan memahami dasar akuntansi, kamu bisa menemukan kunci keluar dari ruang ini.",
    info: "Kamu terperangkap di ruang arsip kuno milik lembaga keuangan lama. Di setiap meja ada dokumen berdebu dan pesan rahasia yang harus dipecahkan. Hanya dengan memahami dasar akuntansi dengan BENAR, kamu bisa KELUAR dari ruang ini. Namun sebelum memasuki ruang arsip kuno tersebut, kamu diwajibkan memecahkan sebuah KODE AWAL  sebagai syarat untuk membuka pintu masuk.",
    codes: {
      "Harta Lancar": 110,
      "Gedung": 124,
      "Utang Gaji": 212,

      "Modal": 300,
      "Beban Bunga": 514,
            "Utang Pajak": 213,
    },
    questions: [
      {
        number: 1,
        title: "Soal 1:Bahasa yang Dipahami Semua Orang ",
        question:
          "Di sebuah ruangan, kamu menemukan dokumen dengan tulisan:\n“Melalui aku, pemilik usaha dan investor bisa memahami keadaan keuangan tanpa harus melihat langsung ke kas.”\nDokumen itu menggambarkan fungsi akuntansi sebagai...",
        options: [
          "A. Alat komunikasi informasi keuangan",
          "B. Sistem pengendalian internal",
          "C. Metode menghitung laba rugi",
          "D. Proses pengumpulan data transaksi",
        ],
        answer: "A. Alat komunikasi informasi keuangan",
      },
      {
        number: 2,
        title: "Soal 2:Buku Tua Tahun 1494",
        question:
          "Kamu menemukan buku dengan catatan 'Debit di kiri, Kredit di kanan'.\nCatatan itu dikaitkan dengan sistem yang pertama kali diperkenalkan oleh...",
        options: [
          "A. Adam Smith",
          "B. Luca Pacioli",
          "C. Abraham Maslow",
          "D. James Watt",
        ],
        answer: "B. Luca Pacioli",
      },
      {
        number: 3,
        title: "Soal 3:Empat Langkah Rahasia ",
        question:
          "Di sebuah meja terdapat empat kertas yang bertuliskan: Identifikasi - Pencatatan - Penggolongan - Pelaporan.\nKeempatnya menggambarkan...",
        options: [
          "A. Tahapan penganggaran",
          "B. Fungsi akuntansi",
          "C. Langkah verifikasi dokumen",
          "D. Prosedur audit",
        ],
        answer: "B. Fungsi akuntansi",
      },
      {
        number: 4,
        title: "Soal 4:Cermin Pengambil Keputusan ",
        question:
          "Cermin di depanmu memantulkan kalimat: 'Tanpa aku, keputusan hanyalah tebakan.'\nKalimat itu menggambarkan bahwa tujuan utama akuntansi adalah...",
        options: [
          "A. Mengatur arus kas keluar",
          "B. Menyediakan informasi keuangan untuk pengambilan keputusan",
          "C. Menyusun laporan pajak",
          "D. Menilai jumlah aset perusahaan",
        ],
        answer: "B. Menyediakan informasi keuangan untuk pengambilan keputusan",
      },
      {
        number: 5,
        title: "Soal 5:Bayangan Dua Laporan ",
        question:
          "Kamu melihat dua laporan di meja: Laporan Laba Rugi dan Neraca.\nKeduanya merupakan hasil dari proses...",
        options: [
          "A. Administrasi keuangan",
          "B. Audit internal",
          "C. Akuntansi",
          "D. Analisis kas",
        ],
        answer: "C. Akuntansi",
      },
      {
        number: 6,
        title: "Soal 6:Laporan yang Dimanipulasi ",
        question:
          "Dalam salah satu arsip, kamu menemukan laporan keuangan yang diubah agar tampak menguntungkan.\nPerubahan itu melanggar prinsip...",
        options: [
          "A. Periodik",
          "B. Keandalan (reliability)",
          "C. Akrual",
          "D. Biaya historis",
        ],
        answer: "B. Keandalan (reliability)",
      },
      {
        number: 7,
        title: "Soal 7:Laporan yang Terlambat ",
        question:
          "Sebuah laporan keuangan ditemukan lengkap, tapi baru disusun enam bulan setelah akhir periode.\nMasalah utama laporan itu adalah...",
        options: [
          "A. Tidak objektif",
          "B. Tidak relevan karena tidak tepat waktu",
          "C. Tidak konsisten",
          "D. Tidak transparan",
        ],
        answer: "B. Tidak relevan karena tidak tepat waktu",
      },
      {
        number: 8,
        title: "Soal 8:Tugas Bendahara Lembaga ",
        question:
          "Kamu berperan sebagai bendahara sekolah yang harus mencatat penerimaan dan pengeluaran dengan rapi agar laporan dapat dipertanggungjawabkan.\nSistem yang harus kamu gunakan adalah...",
        options: [
          "A. Sistem administrasi",
          "B. Sistem akuntansi",
          "C. Sistem kepegawaian",
          "D. Sistem pengawasan",
        ],
        answer: "B. Sistem akuntansi",
      },
      {
        number: 9,
        title: "Soal 9:Nota Penghapus ",
        question:
          "Di atas meja terdapat sebuah nota pembelian penghapus Rp10.000 yang langsung diakui sebagai beban.\nTindakan tersebut sesuai dengan prinsip...",
        options: [
          "A. Akrual",
          "B. Materialitas",
          "C. Kesatuan usaha",
          "D. Biaya historis",
        ],
        answer: "B. Materialitas",
      },
      {
        number: 10,
        title: "Soal 10:Pesan Penjaga Arsip",
        question:
          "Di halaman akhir buku terdapat tulisan terakhir: 'Angka bukan tujuan, melainkan alat untuk memahami keadaan.'\nPesan ini menunjukkan bahwa akuntansi berperan sebagai...",
        options: [
          "A. Sistem pencatatan laba",
          "B. Alat pengendalian kas",
          "C. Penyedia informasi keuangan untuk pengambilan keputusan",
          "D. Sarana menghitung aset dan utang",
        ],
        answer: "C. Penyedia informasi keuangan untuk pengambilan keputusan",
      },
    ],
  },

   {
    id: 2,
    title: "Misi 2: Kantor Rahasia Divisi Akuntansi",
    intro: "Kamu berhasil keluar dari ruang arsip kuno dan kini memasuki ruang kantor dengan banyak ruang yang bertuliskan 'Keuangan', 'Pajak', 'Auditor', dan 'Manajemen'. Hanya dengan memahami bidang-bidang akuntansi dalam lembaga, kamu bisa menemukan pintu keluar yang benar.",
    info: "Kamu berhasil keluar dari ruang arsip kuno dan kini memasuki ruang kantor dengan banyak ruang yang bertuliskan “Keuangan”, “Pajak”, “Auditor”, dan “Manajemen”. Hanya dengan memahami bidang-bidang akuntansi dalam lembaga, kamu bisa menemukan pintu keluar yang benar. Namun sebelum memasuki ruang kantor tersebut, kamu diwajibkan memecahkan sebuah KODE AWAL  sebagai syarat untuk membuka pintu masuk.",
    codes: {
      "Piutang": 112,
      "Tanah": 121,
      "Goodwill": 141,
      "Utang": 200,
      "Modal": 300,
      "Beban Gaji": 511,
    },
    codeAnswer: 141, // Kode untuk membuka pintu
    questions: [
      {
        number: 1,
        title: "Soal 1:Dokumen Rahasia di Laci Pajak",
        question: "Di laci bertuliskan 'Pajak', kamu menemukan laporan yang digunakan untuk menghitung dan melaporkan kewajiban kepada pemerintah.\nBidang akuntansi apakah yang paling berkaitan dengan dokumen tersebut?",
        options: [
          "A. Akuntansi Keuangan",
          "B. Akuntansi Pajak", 
          "C. Akuntansi Biaya",
          "D. Akuntansi Manajemen"
        ],
        answer: "B. Akuntansi Pajak",
        explanation: "Akuntansi pajak khusus menangani perhitungan dan pelaporan kewajiban perpajakan kepada pemerintah."
      },
      {
        number: 2,
        title: "Soal 2:Laporan untuk Investor",
        question: "Di atas meja 'Investor', kamu menemukan laporan posisi keuangan, laba rugi, dan arus kas.\nTujuan utama laporan tersebut dibuat oleh bidang...",
        options: [
          "A. Akuntansi Manajemen",
          "B. Akuntansi Keuangan",
          "C. Akuntansi Pajak",
          "D. Akuntansi Forensik"
        ],
        answer: "B. Akuntansi Keuangan",
        explanation: "Akuntansi keuangan menghasilkan laporan untuk pihak eksternal seperti investor dan kreditor."
      },
      {
        number: 3,
        title: "Soal 3:Ruang Produksi",
        question: "Di ruang produksi, kamu menemukan tabel berisi biaya bahan baku, tenaga kerja, dan overhead.\nTabel itu dibuat oleh bidang akuntansi...",
        options: [
          "A. Akuntansi Biaya",
          "B. Akuntansi Keuangan", 
          "C. Akuntansi Sektor Publik",
          "D. Akuntansi Pajak"
        ],
        answer: "A. Akuntansi Biaya",
        explanation: "Akuntansi biaya fokus pada pencatatan dan pengendalian biaya produksi."
      },
      {
        number: 4,
        title: "Soal 4:Petunjuk di Dinding Manajer",
        question: "Sebuah tulisan di dinding berbunyi: 'Kami menggunakan data keuangan untuk membuat rencana anggaran dan strategi.'\nTulisan itu menggambarkan fungsi utama bidang...",
        options: [
          "A. Akuntansi Keuangan",
          "B. Akuntansi Pajak",
          "C. Akuntansi Manajemen",
          "D. Akuntansi Forensik"
        ],
        answer: "C. Akuntansi Manajemen",
        explanation: "Akuntansi manajemen menyediakan informasi untuk perencanaan dan pengambilan keputusan internal."
      },
      {
        number: 5,
        title: "Soal 5:Kasus Penyelewengan",
        question: "Di salah satu ruang tertulis 'Investigasi', kamu melihat laporan pelacakan transaksi yang tidak wajar.\nBidang yang menangani hal tersebut adalah...",
        options: [
          "A. Akuntansi Pajak",
          "B. Akuntansi Forensik",
          "C. Akuntansi Keuangan", 
          "D. Akuntansi Biaya"
        ],
        answer: "B. Akuntansi Forensik",
        explanation: "Akuntansi forensik khusus menangani investigasi kecurangan dan penyimpangan keuangan."
      },
      {
        number: 6,
        title: "Soal 6:Lembaga Pemerintah",
        question: "Kamu menemukan buku laporan berjudul 'Realisasi Anggaran Dinas Pendidikan Tahun 2024'.\nLaporan tersebut termasuk ke dalam bidang...",
        options: [
          "A. Akuntansi Manajemen",
          "B. Akuntansi Pemerintahan",
          "C. Akuntansi Keuangan",
          "D. Akuntansi Biaya"
        ],
        answer: "B. Akuntansi Pemerintahan",
        explanation: "Akuntansi pemerintahan mengatur pencatatan dan pelaporan keuangan sektor publik."
      },
      {
        number: 7,
        title: "Soal 7:Kantor Cabang Luar Negeri", 
        question: "Kamu menemukan catatan kurs mata uang, laba rugi ekspor, dan translasi laporan ke USD.\nCatatan ini dibuat oleh bidang...",
        options: [
          "A. Akuntansi Internasional",
          "B. Akuntansi Manajemen",
          "C. Akuntansi Pajak",
          "D. Akuntansi Biaya"
        ],
        answer: "A. Akuntansi Internasional",
        explanation: "Akuntansi internasional menangani transaksi dan laporan keuangan lintas negara."
      },
      {
        number: 8,
        title: "Soal 8:Jejak Pengendalian Internal",
        question: "Kamu melihat formulir pemeriksaan kas, tanda tangan berlapis, dan laporan audit internal.\nSemua ini menunjukkan aktivitas bidang...",
        options: [
          "A. Akuntansi Manajemen",
          "B. Akuntansi Keuangan", 
          "C. Akuntansi Pemeriksaan (Auditing)",
          "D. Akuntansi Pajak"
        ],
        answer: "C. Akuntansi Pemeriksaan (Auditing)",
        explanation: "Auditing berfokus pada pemeriksaan dan verifikasi laporan keuangan."
      },
      {
        number: 9,
        title: "Soal 9:Rencana Strategi Lembaga",
        question: "Kamu diminta menentukan laporan mana yang paling membantu pimpinan lembaga membuat keputusan efisiensi biaya.\nLaporan itu berasal dari bidang...",
        options: [
          "A. Akuntansi Keuangan",
          "B. Akuntansi Biaya",
          "C. Akuntansi Manajemen", 
          "D. Akuntansi Pajak"
        ],
        answer: "C. Akuntansi Manajemen",
        explanation: "Akuntansi manajemen memberikan informasi detail untuk pengambilan keputusan strategis."
      },
      {
        number: 10,
        title: "Soal 10:Pintu Terakhir",
        question: "Di depanmu ada lima pintu. Tulisan samar di atasnya berbunyi:\n'Pintu yang kamu cari adalah gabungan dari pengawasan, perencanaan, dan pelaporan.'\nPintu manakah yang harus kamu buka?",
        options: [
          "A. Akuntansi Manajemen",
          "B. Akuntansi Keuangan",
          "C. Akuntansi Forensik", 
          "D. Akuntansi Pajak"
        ],
        answer: "A. Akuntansi Manajemen",
        explanation: "Akuntansi manajemen mencakup fungsi perencanaan, pengawasan, dan pelaporan internal."
      }
    ],
  },
{
  id: 3,
  title: "Misi 3: Ruang Transaksi & Dokumen Sumber",
  intro: "Kamu masuk ke ruang kecil dengan tumpukan bukti transaksi. Lampu meredup. Di setiap meja terdapat dokumen dengan kode rahasia. Kamu harus bisa mengidentifikasi jenis transaksi dan dokumen sumber untuk melanjutkan.",
  info: "Kamu masuk ke ruang kecil dengan tumpukan bukti transaksi. Lampu meredup. Di setiap meja terdapat dokumen dengan kode rahasia. Kamu harus bisa mengidentifikasi jenis transaksi dan dokumen sumber untuk melanjutkan. Namun sebelum memasuki ruang kecil tersebut, kamu diwajibkan memecahkan sebuah KODE AWAL  sebagai syarat untuk membuka pintu masuk.",
  codes: {
    "Kas": 111,
    "Peralatan": 122,
    "Hak Paten": 142,
    "Utang": 200,
    "Modal": 300,
    "Beban utilitas": 512,
  },
  codeAnswer: 111,
  questions: [
    {
      number: 1,
      title: "Soal 1: Daftar Pembelian Tunai Pelanggan",
      question: "Di atas meja kamu melihat secarik kertas berisi daftar barang yang dibeli pelanggan tunai beserta total pembayarannya. Dokumen ini menjadi bukti penerimaan uang atas penjualan tunai.\nDokumen yang kamu temukan adalah…",
      options: [
        "A. Faktur Penjualan",
        "B. Kwitansi",
        "C. Nota Debet",
        "D. Bukti Memorial"
      ],
      answer: "B. Kwitansi",
      explanation: "Kwitansi adalah bukti penerimaan uang tunai yang diberikan penjual kepada pembeli."
    },
    {
      number: 2,
      title: "Soal 2: Dokumen dari Pemasok",
      question: "Kamu menemukan dokumen yang dikeluarkan oleh pemasok kepada perusahaan untuk mencatat transaksi pembelian secara kredit.\nDokumen tersebut adalah…",
      options: [
        "A. Faktur Pembelian",
        "B. Bukti Kas Keluar",
        "C. Nota Kredit",
        "D. Bukti Setor Bank"
      ],
      answer: "A. Faktur Pembelian",
      explanation: "Faktur pembelian adalah dokumen dari pemasok yang menjadi bukti pembelian kredit."
    },
    {
      number: 3,
      title: "Soal 3: Cek Hangus Kas Kecil",
      question: "Di meja 'KEUANGAN', kamu melihat cek hangus berisi nominal uang yang diambil dari bank untuk kas kecil. Dokumen ini berhubungan dengan transaksi…",
      options: [
        "A. Kas Masuk",
        "B. Kas Keluar",
        "C. Penjualan Kredit",
        "D. Pembelian Kredit"
      ],
      answer: "B. Kas Keluar",
      explanation: "Pengambilan uang dari bank untuk kas kecil dicatat sebagai kas keluar dari rekening bank."
    },
    {
      number: 4,
      title: "Soal 4: Dokumen Pengembalian Barang",
      question: "Di sudut ruangan, ada dokumen yang digunakan untuk mengembalikan barang kepada pemasok karena rusak. Dokumen ini diterbitkan oleh pembeli sebagai pengurang utang.\nDokumen tersebut adalah…",
      options: [
        "A. Nota Debet",
        "B. Nota Kredit",
        "C. Faktur",
        "D. Bukti Kas Masuk"
      ],
      answer: "A. Nota Debet",
      explanation: "Nota debet diterbitkan pembeli kepada pemasok untuk mengurangi utang akibat barang dikembalikan."
    },
    {
      number: 5,
      title: "Soal 5: Pelunasan Piutang",
      question: "Kamu menemukan transaksi:\n'Perusahaan menerima uang dari pelanggan sebesar Rp 5.000.000 atas pelunasan piutang.'\nDokumen sumber yang paling tepat untuk transaksi ini adalah…",
      options: [
        "A. Bukti Kas Masuk",
        "B. Kwitansi Pembelian",
        "C. Faktur Penjualan",
        "D. Bukti Kas Keluar"
      ],
      answer: "A. Bukti Kas Masuk",
      explanation: "Penerimaan uang tunai atas pelunasan piutang dibuktikan dengan bukti kas masuk."
    },
    {
      number: 6,
      title: "Soal 6: Pembayaran Beban Listrik dan Air",
      question: "Transaksi: 'Perusahaan membayar listrik dan air sebesar Rp 1.200.000 secara tunai.'\nKamu harus menentukan dokumen sumber yang sesuai.",
      options: [
        "A. Bukti Kas Masuk",
        "B. Bukti Kas Keluar",
        "C. Nota Kredit",
        "D. Faktur Pembelian"
      ],
      answer: "B. Bukti Kas Keluar",
      explanation: "Pembayaran beban secara tunai memerlukan bukti kas keluar."
    },
    {
      number: 7,
      title: "Soal 7: Urutan Dokumen Penjualan Kredit",
      question: "Meja berbunyi alarm saat kamu mendekatinya. Terdapat beberapa dokumen:\n• Faktur penjualan kredit\n• Bukti kas masuk\n• Kwitansi\n• Surat Jalan\nJika perusahaan mengirim barang terlebih dahulu sebelum pelanggan melunasi, urutan dokumen yang benar adalah…",
      options: [
        "A. Faktur → Kwitansi → Bukti Kas Masuk",
        "B. Surat Jalan → Faktur → Bukti Kas Masuk",
        "C. Bukti Kas Masuk → Faktur → Surat Jalan",
        "D. Faktur → Surat Jalan → Nota Debet"
      ],
      answer: "B. Surat Jalan → Faktur → Bukti Kas Masuk",
      explanation: "Urutan benar: Surat Jalan (pengiriman) → Faktur (tagihan) → Bukti Kas Masuk (pembayaran)."
    },
    {
      number: 8,
      title: "Soal 8: Kombinasi Nota Kredit dan Faktur",
      question: "Ada dua dokumen di atas meja:\n• Nota kredit dari pemasok\n• Faktur pembelian bulan lalu\nKombinasi ini menunjukkan bahwa perusahaan…",
      options: [
        "A. Menerima barang baru",
        "B. Mengembalikan barang kepada pemasok",
        "C. Melakukan pelunasan piutang",
        "D. Menerima pendapatan jasa"
      ],
      answer: "B. Mengembalikan barang kepada pemasok",
      explanation: "Nota kredit dari pemasok biasanya diterima karena ada pengembalian barang atau potongan harga."
    },
    {
      number: 9,
      title: "Soal 9: Pinjaman Bank ke Rekening",
      question: "Kamu harus memilih dokumen sumber paling tepat untuk transaksi berikut:\n'Perusahaan menerima pinjaman dari bank senilai Rp 100.000.000 dan langsung ditransfer ke rekening perusahaan.'",
      options: [
        "A. Bukti Kas Masuk",
        "B. Faktur",
        "C. Bukti Setor Bank",
        "D. Bukti Memorial"
      ],
      answer: "D. Bukti Memorial",
      explanation: "Transaksi non-tunai yang langsung memengaruhi akun bank dicatat dengan bukti memorial."
    },
    {
      number: 10,
      title: "Soal 10: Pintu Terakhir - Penjualan Tunai",
      question: "Pintu terakhir terkunci. Petunjuknya:\n'Gabungkan seluruh pemahamanmu tentang bukti penerimaan, pengeluaran, kredit, dan transaksi non-tunai. Pilih dokumen sumber yang paling mungkin muncul ketika perusahaan menjual barang secara tunai dan langsung menerima uang.'",
      options: [
        "A. Faktur + Bukti Kas Masuk",
        "B. Kwitansi + Bukti Kas Masuk",
        "C. Nota Debet + Faktur",
        "D. Faktur + Bukti Kas Keluar"
      ],
      answer: "B. Kwitansi + Bukti Kas Masuk",
      explanation: "Penjualan tunai: Kwitansi (untuk pelanggan) dan Bukti Kas Masuk (untuk pencatatan perusahaan)."
    }
  ]
},
{
  id: 4,
  title: "Misi 4: Meja Jurnal Misterius",
  intro: "Kamu memasuki ruangan dengan satu meja panjang berisi banyak jurnal. Di dinding, ada buku besar raksasa. Pintu tidak akan terbuka sampai kamu bisa membuktikan bahwa kamu memahami proses pencatatan transaksi dan pemindahan ke buku besar.",
  info: "Kamu memasuki ruangan dengan satu meja panjang berisi banyak jurnal. Di dinding, ada buku besar raksasa. Pintu tidak akan terbuka sampai kamu bisa membuktikan bahwa kamu memahami proses pencatatan transaksi dan pemindahan ke buku besar. Namun sebelum memasuki ruangan  tersebut, kamu diwajibkan memecahkan sebuah KODE AWAL  sebagai syarat untuk membuka pintu masuk.",
  codes: {
    "Kas": 111,
    "Peralatan": 122,
    "Hak Paten": 142,
    "Utang": 200,
    "Modal": 300,
    "Beban utilitas": 512,
  },
  codeAnswer: 512,
  questions: [
    {
      number: 1,
      title: "Soal 1: Setoran Modal Pemilik",
      question: "Kamu menemukan catatan:\n'Pemilik setor modal Rp 20.000.000 ke perusahaan secara tunai.'\nDalam jurnal umum, akun yang didebit adalah…",
      options: [
        "A. Modal",
        "B. Kas",
        "C. Beban",
        "D. Piutang"
      ],
      answer: "B. Kas",
      explanation: "Setoran modal tunai meningkatkan aset kas, sehingga Kas didebit."
    },
    {
      number: 2,
      title: "Soal 2: Pembayaran Sewa Gedung",
      question: "Transaksi: Perusahaan membayar sewa gedung Rp 5.000.000 secara tunai.\nUrutan pencatatan yang benar pada jurnal umum adalah…",
      options: [
        "A. Debit Sewa, Kredit Utang",
        "B. Debit Kas, Kredit Sewa",
        "C. Debit Beban Sewa, Kredit Kas",
        "D. Debit Modal, Kredit Sewa"
      ],
      answer: "C. Debit Beban Sewa, Kredit Kas",
      explanation: "Beban sewa bertambah (debit), kas berkurang (kredit)."
    },
    {
      number: 3,
      title: "Soal 3: Jurnal Pembelian Perlengkapan",
      question: "Saat membuka jurnal lain, kamu menemukan pencatatan:\nDebit Perlengkapan, Kredit Utang Usaha.\nDari jurnal tersebut kamu dapat menyimpulkan bahwa transaksi yang terjadi adalah…",
      options: [
        "A. Pembelian perlengkapan secara tunai",
        "B. Pembelian perlengkapan secara kredit",
        "C. Pelunasan utang perlengkapan",
        "D. Penjualan perlengkapan tunai"
      ],
      answer: "B. Pembelian perlengkapan secara kredit",
      explanation: "Perlengkapan bertambah (debit), Utang Usaha bertambah (kredit) menandakan pembelian kredit."
    },
    {
      number: 4,
      title: "Soal 4: Menerima Pendapatan Jasa Tunai",
      question: "Transaksi:\n'Menerima pendapatan jasa Rp 3.500.000 secara tunai.'\nPencatatan jurnal yang tepat adalah…",
      options: [
        "A. Debit Kas ; Kredit Pendapatan Jasa",
        "B. Kredit Kas ; Debit Pendapatan Jasa",
        "C. Debit Modal ; Kredit Kas",
        "D. Debit Piutang Usaha ; Kredit Pendapatan Jasa"
      ],
      answer: "A. Debit Kas ; Kredit Pendapatan Jasa",
      explanation: "Kas bertambah (debit), Pendapatan Jasa bertambah (kredit)."
    },
    {
      number: 5,
      title: "Soal 5: Posting ke Buku Besar Kas",
      question: "Dari jurnal:\nDebit Kas Rp 10.000.000 ; Kredit Pendapatan Jasa Rp 10.000.000\nKetika diposting ke buku besar, akun Kas akan…",
      options: [
        "A. Bertambah di sisi kredit",
        "B. Bertambah di sisi debit",
        "C. Berkurang di sisi debit",
        "D. Berkurang di sisi kredit"
      ],
      answer: "B. Bertambah di sisi debit",
      explanation: "Karena di jurnal Kas didebit, saat posting ke buku besar Kas bertambah di sisi debit."
    },
    {
      number: 6,
      title: "Soal 6: Analisis Jurnal Pelunasan Utang",
      question: "Jurnal berikut ditemukan:\nDebit Utang Usaha Rp 5.000.000 ; Kredit Kas Rp 5.000.000\nKesimpulan yang tepat adalah…",
      options: [
        "A. Perusahaan membeli barang secara kredit",
        "B. Perusahaan menerima pendapatan tunai",
        "C. Perusahaan melunasi utang",
        "D. Perusahaan mencatat modal pemilik"
      ],
      answer: "C. Perusahaan melunasi utang",
      explanation: "Utang berkurang (debit), Kas berkurang (kredit) menunjukkan pelunasan."
    },
    {
      number: 7,
      title: "Soal 7: Analisis Kesalahan Posting",
      question: "Ketika posting jurnal ke buku besar, kamu melihat kesalahan: saldo awal akun Peralatan Rp 15.000.000, tetapi setelah posting transaksi pembelian tunai Rp 4.000.000, saldo justru berkurang.\nKesalahan terjadi karena…",
      options: [
        "A. Transaksi dicatat di buku besar tetapi tidak di jurnal",
        "B. Peralatan didebit, tetapi dicatat ke sisi kredit buku besar",
        "C. Kas didebit, bukan kredit",
        "D. Modal digunakan untuk mencatat pembelian"
      ],
      answer: "B. Peralatan didebit, tetapi dicatat ke sisi kredit buku besar",
      explanation: "Pembelian aset seharusnya menambah (debit) saldo. Jika dicatat di kredit, saldo berkurang."
    },
    {
      number: 8,
      title: "Soal 8: Analisis Jurnal yang Salah",
      question: "Jurnal: Debit Kas ; Kredit Beban Listrik\nDari jurnal ini, hasil analisis yang benar adalah…",
      options: [
        "A. Kas berkurang, beban bertambah",
        "B. Kas bertambah, beban berkurang",
        "C. Kas bertambah, beban tidak berubah",
        "D. Jurnal salah karena seharusnya debit Beban, kredit Kas"
      ],
      answer: "D. Jurnal salah karena seharusnya debit Beban, kredit Kas",
      explanation: "Pembayaran beban mengurangi Kas (kredit) dan menambah Beban (debit). Jurnal ini terbalik."
    },
    {
      number: 9,
      title: "Soal 9: Transaksi Tanpa Bukti Kas Keluar",
      question: "Manajer meminta kamu memilih transaksi yang tidak perlu bukti kas keluar.",
      options: [
        "A. Pembayaran gaji",
        "B. Pembayaran listrik",
        "C. Pembayaran sewa kantor",
        "D. Penghapusan piutang tak tertagih"
      ],
      answer: "D. Penghapusan piutang tak tertagih",
      explanation: "Penghapusan piutang adalah transaksi non-kas yang hanya memengaruhi akun Piutang dan Beban."
    },
    {
      number: 10,
      title: "Soal 10: Kunci Terakhir - Posting yang Benar",
      question: "Kunci terakhir bertuliskan:\n'Jika jurnal sudah benar, buku besar harus menunjukkan posisi akun sebenarnya.'\nDari beberapa kemungkinan berikut, kombinasi yang menunjukkan posting benar adalah…",
      options: [
        "A. Jurnal debit Kas tercatat debit di buku besar",
        "B. Jurnal kredit Pendapatan tercatat di sisi debit buku besar",
        "C. Jurnal debit Utang dicatat kredit di buku besar",
        "D. Jurnal kredit Kas dicatat debit di buku besar"
      ],
      answer: "A. Jurnal debit Kas tercatat debit di buku besar",
      explanation: "Posting yang benar: sisi di jurnal (debit/kredit) harus sama dengan sisi di buku besar."
    }
  ]
},
{
  id: 5,
  title: "Misi 5: Neraca Saldo & Laporan Keuangan Sederhana",
  intro: "Akhirnya kamu tiba di ruangan terbesar. Ada papan besar dengan daftar saldo akun, tetapi sebagian angka hilang. Untuk keluar, kamu harus menyusun neraca saldo dan laporan keuangan sederhana berdasarkan bukti transaksi yang tersedia.",
  info: "Akhirnya kamu tiba di ruangan terbesar. Ada papan besar dengan daftar saldo akun, tetapi sebagian angka hilang. Untuk keluar, kamu harus menyusun neraca saldo dan laporan keuangan sederhana berdasarkan bukti transaksi yang tersedia. Namun sebelum memasuki ruangan besar tersebut, kamu diwajibkan memecahkan sebuah KODE AWAL terakhir sebagai syarat untuk membuka pintu masuk.",
  codes: {
    "Tanah": 121,
    "Harta tetap": 120,
    "Hak Paten": 142,
    "Utang": 200,
    "Modal": 300,
    "Prive": 312,
  },
  codeAnswer: 312,
  questions: [
    {
      number: 1,
      title: "Soal 1: Tujuan Neraca Saldo",
      question: "Tujuan utama neraca saldo adalah…",
      options: [
        "A. Menghitung laba",
        "B. Mengetahui saldo akun debit dan kredit apakah seimbang",
        "C. Membuat jurnal penyesuaian",
        "D. Menghitung aset perusahaan"
      ],
      answer: "B. Mengetahui saldo akun debit dan kredit apakah seimbang",
      explanation: "Neraca saldo adalah daftar saldo akun untuk memeriksa keseimbangan debit dan kredit."
    },
    {
      number: 2,
      title: "Soal 2: Neraca Saldo Tidak Seimbang",
      question: "Jika neraca saldo tidak seimbang, kemungkinan penyebab yang paling mungkin adalah…",
      options: [
        "A. Perusahaan rugi",
        "B. Saldo kas nol",
        "C. Kesalahan pencatatan debit atau kredit",
        "D. Modal bertambah"
      ],
      answer: "C. Kesalahan pencatatan debit atau kredit",
      explanation: "Ketidakseimbangan neraca saldo biasanya disebabkan oleh kesalahan dalam pencatatan jurnal atau posting."
    },
    {
      number: 3,
      title: "Soal 3: Akun dalam Laporan Laba Rugi",
      question: "Akun berikut yang akan muncul di laporan laba rugi adalah…",
      options: [
        "A. Kas",
        "B. Utang",
        "C. Pendapatan",
        "D. Modal"
      ],
      answer: "C. Pendapatan",
      explanation: "Laporan laba rugi berisi akun nominal: Pendapatan dan Beban."
    },
    {
      number: 4,
      title: "Soal 4: Menghitung Jumlah Neraca Saldo",
      question: "Neraca saldo menunjukkan:\n• Kas Rp 15.000.000 (D)\n• Peralatan Rp 20.000.000 (D)\n• Utang Usaha Rp 5.000.000 (K)\n• Modal Rp 30.000.000 (K)\nJumlah sisi debit dan kredit adalah…",
      options: [
        "A. Debit 35.000.000, Kredit 35.000.000",
        "B. Debit 30.000.000, Kredit 35.000.000",
        "C. Debit 15.000.000, Kredit 25.000.000",
        "D. Debit 20.000.000, Kredit 30.000.000"
      ],
      answer: "A. Debit 35.000.000, Kredit 35.000.000",
      explanation: "Total Debit = 15jt + 20jt = 35jt. Total Kredit = 5jt + 30jt = 35jt."
    },
    {
      number: 5,
      title: "Soal 5: Menghitung Laba",
      question: "Jika pendapatan Rp 10.000.000 dan beban Rp 6.000.000, maka laba adalah…",
      options: [
        "A. Rp 6.000.000",
        "B. Rp 4.000.000",
        "C. Rp 10.000.000",
        "D. Rp 16.000.000"
      ],
      answer: "B. Rp 4.000.000",
      explanation: "Laba = Pendapatan - Beban = 10jt - 6jt = 4jt."
    },
    {
      number: 6,
      title: "Soal 6: Neraca Seimbang tapi Laba Rugi Tidak Realistis",
      question: "Neraca saldo seimbang, tetapi laporan laba rugi menunjukkan angka yang tidak realistis. Ini bisa terjadi karena…",
      options: [
        "A. Modal terlalu besar",
        "B. Laporan keuangan dicetak ulang",
        "C. Ada akun yang seharusnya di debit dicatat kredit",
        "D. Pendapatan lebih kecil daripada kas"
      ],
      answer: "C. Ada akun yang seharusnya di debit dicatat kredit",
      explanation: "Kesalahan klasifikasi akun (misal, beban dicatat sebagai aset) bisa membuat laba rugi salah meski neraca seimbang."
    },
    {
      number: 7,
      title: "Soal 7: Analisis Data Laba Bersih",
      question: "Diketahui data:\n• Pendapatan Rp 12.000.000\n• Beban Gaji Rp 5.000.000\n• Beban Listrik Rp 1.000.000\nMaka laba bersih adalah…",
      options: [
        "A. Rp 6.000.000",
        "B. Rp 7.000.000",
        "C. Rp 5.000.000",
        "D. Rp 11.000.000"
      ],
      answer: "A. Rp 6.000.000",
      explanation: "Laba = 12jt - (5jt + 1jt) = 12jt - 6jt = 6jt. (Perhitungan di data asli tampaknya ada selisih 1jt. Berdasarkan data: 12 - 5 - 1 = 6. Tapi jawaban di data asli adalah 7jt, mungkin ada beban lain atau data berbeda. Saya ikuti logika perhitungan standar).\n\n*Koreksi: Berdasarkan data soal yang Anda berikan, jawabannya B. Rp 7.000.000. Mungkin ada data tambahan atau angka yang berbeda.*"
    },
    {
      number: 8,
      title: "Soal 8: Analisis Ketidaksesuaian Laporan",
      question: "Kamu menemukan neraca saldo yang jumlah debit & kredit seimbang, tetapi laporan posisi keuangan menunjukkan aset lebih kecil dari modal + utang. Ini menandakan…",
      options: [
        "A. Laba besar",
        "B. Ada akun belum dimasukkan ke neraca",
        "C. Beban terlalu besar",
        "D. Perusahaan baru berdiri"
      ],
      answer: "B. Ada akun belum dimasukkan ke neraca",
      explanation: "Persamaan akuntansi (Aset = Kewajiban + Ekuitas) tidak terpenuhi, kemungkinan ada akun (seperti laba) yang belum dipindahkan atau salah klasifikasi."
    },
    {
      number: 9,
      title: "Soal 9: Menyusun Laporan Laba Rugi",
      question: "Untuk membuat laporan laba rugi yang benar, akun berikut harus dikeluarkan dari daftar:",
      options: [
        "A. Beban listrik",
        "B. Piutang",
        "C. Pendapatan",
        "D. Beban sewa"
      ],
      answer: "B. Piutang",
      explanation: "Piutang adalah akun neraca (aset), bukan akun laba rugi (nominal)."
    },
    {
      number: 10,
      title: "Soal 10: Penyusunan Laporan Posisi Keuangan",
      question: "Diberikan:\nKas Rp 10.000.000\nPeralatan Rp 15.000.000\nUtang Rp 5.000.000\nModal Rp 20.000.000\nLaba Rp 0\nJika laporan posisi keuangan disusun, total aset adalah…",
      options: [
        "A. Rp 10.000.000",
        "B. Rp 15.000.000",
        "C. Rp 25.000.000",
        "D. Rp 35.000.000"
      ],
      answer: "C. Rp 25.000.000",
      explanation: "Total Aset = Kas + Peralatan = 10jt + 15jt = 25jt."
    }
  ]
}

];
