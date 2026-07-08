/**
 * FAQ (Frequently Asked Questions) lengkap untuk GoDev
 * 
 * 20+ pertanyaan yang paling sering ditanyakan pelanggan
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Harga & Pembayaran' | 'Teknis & Implementasi' | 'Support & Maintenance' | 'Keamanan & Data' | 'Umum';
}

export const faqItems: FAQItem[] = [
  // Kategori: Harga & Pembayaran
  {
    category: 'Harga & Pembayaran',
    question: 'Apakah ada biaya bulanan selain jasa pembuatan?',
    answer: 'Jasa pembuatan adalah biaya sekali bayar. Namun, untuk sistem "Terima Beres" yang aman dan profesional, Anda memerlukan akun Google Workspace dengan biaya sekitar Rp 90.000/user/bulan (ditagih langsung oleh Google). Ini adalah standar keamanan data usaha Anda agar tidak hilang atau bocor. Untuk Paket Rapi, bisa menggunakan Gmail gratis.'
  },
  {
    category: 'Harga & Pembayaran',
    question: 'Apakah bisa cicil atau ada diskon untuk pembayaran di muka?',
    answer: 'Untuk saat ini kami belum menyediakan sistem cicilan. Namun, kami memberikan diskon 10% untuk pembayaran di muka (full payment) sebelum pekerjaan dimulai. Kami juga sering ada promo khusus di bulan-bulan tertentu, follow Instagram kami untuk update promo.'
  },
  {
    category: 'Harga & Pembayaran',
    question: 'Apakah harga sudah termasuk revisi?',
    answer: 'Ya, untuk Paket Terima Beres, revisi unlimited dalam scope awal yang sudah disepakati. Maksudnya: kalau ada bug, salah fungsi, atau UI yang perlu diperbaiki dalam fitur yang sudah dijanjikan, gratis. Tapi kalau mau tambah fitur baru yang tidak ada di scope awal, itu dihitung sebagai add-on dengan harga terpisah.'
  },
  {
    category: 'Harga & Pembayaran',
    question: 'Bagaimana cara pembayaran?',
    answer: 'Kami terima pembayaran via transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, GoPay, Dana), atau QRIS. Skema pembayaran: 50% DP setelah deal dan mulai kerjaan, 50% pelunasan setelah sistem selesai dan training. Kami akan kirim invoice resmi via email.'
  },
  
  // Kategori: Teknis & Implementasi
  {
    category: 'Teknis & Implementasi',
    question: 'Berapa lama proses pembuatannya?',
    answer: 'Rata-rata 7-14 hari kerja tergantung kompleksitas. Paket Rapi biasanya selesai dalam 5-7 hari kerja. Paket Terima Beres 10-14 hari kerja. Kami akan update progress lewat WhatsApp setiap 2 hari sekali agar Anda tahu perkembangannya.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Kalau saya tidak paham IT, bisa pakai tidak?',
    answer: 'Justru itulah tujuan kami! Sistem dirancang untuk orang awam. Antarmuka sederhana, tidak ada istilah teknis yang membingungkan. Kami latih sampai Anda dan tim bisa pakai sendiri dengan percaya diri. Kalau ada yang lupa, tinggal tanya kami via WhatsApp. Tidak ada pertanyaan bodoh di sini.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Apakah bisa request fitur khusus sesuai kebutuhan bisnis saya?',
    answer: 'Tentu bisa! Justru itu kelebihan kami dibanding software jadi. Kami akan konsultasi dulu untuk pahami bisnis Anda, lalu design sistem yang pas. Kalau fitur yang Anda minta masih dalam scope paket standar, tidak ada biaya tambahan. Kalau di luar scope (misal: integrasi payment gateway, fitur AI, dll), kami beri tahu estimasi biaya tambahannya secara transparan.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Apakah sistem bisa diakses dari HP?',
    answer: 'Sangat bisa! Malah ini salah satu keunggulan utama sistem berbasis Google Workspace. Anda bisa akses dari HP (Android/iOS), tablet, laptop, atau komputer. Tinggal buka browser atau aplikasi Google Sheets. Data real-time sync otomatis. Owner bisa monitoring dari mana saja, bahkan saat liburan.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Apakah harus punya laptop/komputer? HP saja bisa tidak?',
    answer: 'HP saja bisa! Untuk input data harian dan monitoring, HP sudah cukup. Tapi untuk setup awal dan training, kami sarankan pakai laptop/komputer agar lebih nyaman. Setelah sistem jalan, 90% aktivitas bisa dari HP.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Apakah bisa integrasi dengan software yang sudah saya pakai sekarang?',
    answer: 'Tergantung software apa. Kalau software modern yang punya API (seperti: Tokopedia, Shopee, WhatsApp Business API, payment gateway, dll), biasanya bisa integrasi. Kalau software jadul atau desktop-only, agak susah. Solusinya: export data dari software lama ke format Excel/CSV, lalu import ke sistem baru. Konsultasikan kebutuhan spesifik Anda, kami cek feasibility-nya.'
  },
  {
    category: 'Teknis & Implementasi',
    question: 'Kalau internet mati, sistem masih bisa dipakai tidak?',
    answer: 'Google Sheets punya mode offline terbatas. Anda masih bisa lihat data, tapi tidak bisa input data baru atau sync. Solusi: siapkan buku tulis kecil untuk emergency backup. Kalau internet mati, catat manual dulu. Setelah internet normal, input ke sistem. Atau pakai hotspot HP sebagai backup internet.'
  },
  
  // Kategori: Support & Maintenance
  {
    category: 'Support & Maintenance',
    question: 'Kalau ada masalah atau bug, berapa lama response time-nya?',
    answer: 'Untuk pelanggan Paket Terima Beres dan Paket Tenang: maksimal 4 jam di jam kerja (Senin-Jumat 09:00-17:00 WIB). Untuk pelanggan Paket Rapi: maksimal 1 hari kerja. Urgent issue (sistem down total) kami prioritaskan dan usahakan respon dalam 1 jam. Support via WhatsApp, fast dan tidak pakai ticketing system yang ribet.'
  },
  {
    category: 'Support & Maintenance',
    question: 'Apakah ada biaya tambahan untuk update atau perbaikan bug?',
    answer: 'Tidak, selama dalam masa garansi (2 minggu untuk Paket Rapi, 1 bulan untuk Paket Terima Beres). Setelah masa garansi, kalau ada bug yang memang kesalahan kami, tetap gratis kami perbaiki. Tapi kalau Anda mau tambah fitur baru atau modifikasi sistem, itu dihitung sebagai add-on. Pelanggan Paket Tenang dapat update fitur minor gratis setiap bulan.'
  },
  {
    category: 'Support & Maintenance',
    question: 'Kalau staff saya resign, bisa training staff baru tidak?',
    answer: 'Bisa! Untuk pelanggan Paket Terima Beres, 1x training untuk staff baru gratis (dalam 6 bulan pertama). Setelah itu, training tambahan Rp 200.000/session (1-2 jam). Atau bisa subscribe Paket Tenang yang include unlimited training. Bonus: kami selalu kasih video tutorial dan SOP tertulis, jadi onboarding staff baru bisa lebih mandiri.'
  },
  {
    category: 'Support & Maintenance',
    question: 'Apakah ada kontrak jangka panjang atau bisa stop kapan saja?',
    answer: 'Tidak ada kontrak jangka panjang! Paket Rapi dan Terima Beres adalah one-time payment, setelah selesai sistem jadi milik Anda sepenuhnya. Paket Tenang (maintenance) adalah subscription bulanan yang bisa stop kapan saja, tidak ada minimum commitment. Mau pause 2 bulan karena cash flow lagi ketat? Boleh. Mau aktifkan lagi nanti? Boleh.'
  },
  
  // Kategori: Keamanan & Data
  {
    category: 'Keamanan & Data',
    question: 'Apakah data saya aman? Apa GoDev bisa akses data saya?',
    answer: 'Data 100% milik Anda. Sistem dibuat di akun Google Workspace Anda sendiri (bukan akun kami). Kami hanya dapat akses temporary saat setup dan maintenance (dengan permission Anda). Setelah selesai, Anda bisa revoke akses kami kapan saja. Data tersimpan di Google Cloud yang security-nya setara bank internasional. Kami tidak pernah menyimpan atau membagikan data pelanggan.'
  },
  {
    category: 'Keamanan & Data',
    question: 'Bagaimana kalau akun Google saya di-hack?',
    answer: 'Kami sangat sarankan aktifkan 2-Factor Authentication (2FA) untuk keamanan maksimal. Kami akan bantu setup saat training. Kalau akun benar-benar kena hack dan data hilang, kami punya backup data mingguan (untuk pelanggan Paket Tenang) atau Anda bisa setup auto-backup sendiri yang kami ajarkan. Prevention is better than cure: jangan pernah share password, gunakan password manager, dan aktifkan 2FA.'
  },
  {
    category: 'Keamanan & Data',
    question: 'Apakah data saya bisa hilang?',
    answer: 'Sangat kecil kemungkinannya. Google punya 99.9% uptime guarantee dan data tersimpan di multiple data centers. Tapi untuk extra safety, kami ajarkan cara backup data secara manual (download as Excel) setiap akhir bulan. Pelanggan Paket Tenang kami backup-kan otomatis setiap minggu. Selama 3 tahun beroperasi, belum ada satupun klien kami yang kehilangan data.'
  },
  {
    category: 'Keamanan & Data',
    question: 'Apakah bisa migrasi data dari sistem lama ke sistem baru?',
    answer: 'Bisa! Kalau data Anda sekarang dalam format Excel/CSV, kami bisa import ke sistem baru. Gratis untuk data sampai 1.000 rows. Kalau lebih dari itu atau butuh data cleaning/transformation, ada biaya add-on Rp 500.000 - 1.500.000 tergantung kompleksitas. Kami akan analisa data Anda dulu dan beri estimasi waktu & biaya yang akurat.'
  },
  
  // Kategori: Umum
  {
    category: 'Umum',
    question: 'Kenapa harus pilih GoDev? Apa bedanya dengan freelancer atau software jadi?',
    answer: 'Vs Freelancer: Kami punya tim (bukan solo), jadi tidak worry kalau "orangnya hilang". Ada SOP, garansi, dan support jangka panjang. Vs Software Jadi (SaaS): Kami custom sesuai workflow Anda (bukan Anda yang menyesuaikan), one-time payment (bukan subscription selamanya), dan data tetap milik Anda. Plus: kami fokus ke UMKM Indonesia, jadi paham betul pain point dan culture bisnis lokal.'
  },
  {
    category: 'Umum',
    question: 'Apakah GoDev melayani di luar Surabaya?',
    answer: 'Ya, melayani seluruh Indonesia! Setup dan training bisa dilakukan online via Zoom. Untuk klien di luar Surabaya, biasanya: konsultasi awal via WA, deal, transfer DP, kami kerjakan sistem, demo via Zoom, training via Zoom, transfer sisa pembayaran, selesai. Sudah ada klien kami di Jakarta, Bali, Bandung, Yogyakarta, dan Makassar. Kalau Anda prefer training offline, bisa diatur dengan biaya transportasi tambahan.'
  },
  {
    category: 'Umum',
    question: 'Apakah ada portfolio atau contoh sistem yang sudah dibuat?',
    answer: 'Ada! Kami punya 50+ sistem yang sudah live untuk rental mobil, homestay, catering, toko retail, jasa service, dll. Tapi karena agreement NDA (Non-Disclosure Agreement) dengan klien, kami tidak bisa share akses langsung. Yang bisa kami lakukan: screenshare demo sistem sejenis saat konsultasi, atau hubungkan Anda dengan klien kami (dengan permission mereka) untuk tanya testimoni langsung. Kami prioritaskan privacy klien.'
  },
  {
    category: 'Umum',
    question: 'Apakah bisa trial atau demo dulu sebelum beli?',
    answer: 'Kami tidak menyediakan trial karena setiap sistem dibuat custom (bukan software jadi). Tapi kami sediakan: 1) Konsultasi gratis untuk analisis kebutuhan Anda, 2) Demo sistem sejenis via Zoom/screenshare, 3) Penjelasan detail mockup/flow sistem yang akan kami buat. Setelah yakin baru deal dan mulai kerjaan. Risk Anda minimal karena ada garansi: kalau tidak sesuai yang dijanjikan, kami revisi sampai sesuai atau refund.'
  },
  {
    category: 'Umum',
    question: 'Saya punya budget terbatas, ada paket yang lebih murah?',
    answer: 'Paket paling affordable kami adalah Paket Rapi (Rp 750.000). Kalau budget masih belum mencukupi, kami sarankan mulai dari DIY (Do It Yourself) pakai template gratis kami yang tersedia di artikel blog. Atau Anda bisa cicil dengan kartu kredit (kami terima). Kami juga kadang ada promo untuk early adopter atau package bundling untuk komunitas/group bisnis. Chat kami untuk diskusi opsi pembayaran yang flexible.'
  },
];