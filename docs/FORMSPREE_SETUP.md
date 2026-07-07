# Panduan Setup Formspree untuk Form Kontak GoDev

## Apa itu Formspree?

Formspree adalah layanan form backend gratis yang memudahkan Anda menerima submission form tanpa perlu membuat backend sendiri. Data form akan dikirim ke email Anda.

## Langkah-langkah Setup

### 1. Daftar Akun Formspree (Gratis)

1. Buka https://formspree.io
2. Klik **Sign Up** di pojok kanan atas
3. Daftar dengan email Anda (atau gunakan Google/GitHub login)
4. **Tidak perlu kartu kredit** untuk free tier

### 2. Buat Form Baru

1. Setelah login, klik tombol **+ New Form**
2. Beri nama form: `GoDev Contact Form`
3. Masukkan email tujuan notifikasi (email Anda)
4. Klik **Create Form**

### 3. Dapatkan Endpoint URL

1. Setelah form dibuat, Anda akan melihat **Form Endpoint**
2. Format endpoint: `https://formspree.io/f/xxxxx`
3. **Copy URL ini** (akan digunakan di langkah berikutnya)

### 4. Konfigurasi di Project GoDev

1. Buat file `.env` di root folder project (sejajar dengan `package.json`)
2. Tambahkan baris berikut:

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

**Ganti `xxxxx` dengan ID form Anda yang sudah di-copy**

Contoh:
```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/mwpklvyz
```

3. **Simpan file `.env`**
4. File `.env` sudah otomatis masuk `.gitignore`, jadi aman dari commit ke GitHub

### 5. Testing Form

1. Jalankan dev server:
```bash
npm run dev
```

2. Buka http://localhost:4321/kontak

3. Isi form dan klik **Kirim Pesan**

4. **Saat submit pertama kali**, Formspree akan minta konfirmasi:
   - Buka email Anda
   - Klik link konfirmasi dari Formspree
   - Setelah dikonfirmasi, form sudah aktif!

5. Submission berikutnya akan langsung masuk tanpa konfirmasi

### 6. Menerima Notifikasi

Setiap kali ada submission baru:
- Email notifikasi otomatis dikirim ke email Anda
- Data submission juga bisa dilihat di dashboard Formspree
- Dashboard: https://formspree.io/forms

## Batasan Free Tier

- **50 submissions per bulan**
- Notifikasi email unlimited
- 1 form (bisa lebih dengan akun terpisah)
- Data disimpan permanent di dashboard

**Untuk UMKM dengan traffic rendah-medium, ini lebih dari cukup.**

## Troubleshooting

### Form tidak submit / Error "Unable to submit"

1. Pastikan file `.env` sudah dibuat dengan benar
2. Cek apakah endpoint URL sudah benar (tanpa spasi)
3. Restart dev server setelah membuat `.env`:
   - Stop server (Ctrl+C)
   - Jalankan lagi: `npm run dev`

### Email notifikasi tidak masuk

1. Cek folder Spam/Junk email Anda
2. Pastikan email sudah dikonfirmasi (cek langkah 5)
3. Login ke dashboard Formspree untuk cek submission manual

### Validasi nomor WhatsApp gagal

- Format yang benar: `628123456789` (tanpa spasi, tanpa tanda +)
- Harus diawali dengan `62` (kode negara Indonesia)
- Panjang total: 11-15 digit

## Deployment ke Production

**PENTING:** Saat deploy ke Cloudflare Pages (Fase 7), Anda harus:

1. Tambahkan environment variable di dashboard Cloudflare:
   - Key: `FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/xxxxx` (endpoint Anda)

2. Jangan pernah commit file `.env` ke GitHub!

## Alternatif Formspree (Jika Butuh Lebih)

Jika submission sudah lebih dari 50/bulan:

- **Formspree Paid**: $10/bulan untuk 1000 submissions
- **Google Forms**: Gratis unlimited, tapi user experience kurang bagus
- **Tally.so**: Free tier 100 submissions/bulan
- **Custom Backend**: Pakai Google Apps Script + Google Sheets (gratis, tapi perlu setup manual)

## Support

Jika ada masalah setup Formspree, hubungi:
- WhatsApp: 6281234796567
- Email: info@godev.biz.id