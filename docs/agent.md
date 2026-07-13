# agent.md — Panduan Agent untuk Proyek GoDev

> **Sumber kebenaran:** `docs/mega_prompt_godev.txt`
> **Status terakhir:** 13 Juli 2026
> **Dibaca wajib di awal setiap sesi baru.**

---

## 1. Identitas Proyek

| Item | Detail |
|---|---|
| **Nama Proyek** | godev |
| **Deskripsi** | Landing page jasa Done-For-You (DFY) otomatisasi Google Workspace untuk UMKM Indonesia |
| **URL Produksi** | https://godev.biz.id |
| **URL Repo** | https://github.com/dodhee/godev.git |
| **Branch aktif** | `master` |
| **Platform deploy** | Cloudflare Pages (free tier) |
| **Stack** | Astro 6.4.8, AstroWind template, Tailwind CSS 4.3.2, Formspree, Cloudflare Pages |
| **Sister site** | https://klikdev.my.id (traffic source via UTM) |

---

## 2. Aturan Komunikasi Wajib (dari mega_prompt)

- **Jangan klaim "berhasil/selesai"** sebelum benar-benar diverifikasi. Katakan eksplisit jika kode "belum dites".
- **Tandai asumsi** dengan format: `[ASUMSI: ...]`
- **Sebutkan trade-off** — setiap solusi harus ada "Kelebihan" dan "Kekurangan/Risiko".
- **Stop and wait** setelah setiap fase, minta persetujuan sebelum lanjut.
- **Jangan basa-basi** — langsung ke substansi.
- **Lapor error apa adanya**, jangan menutupi kesalahan kode sebelumnya.
- **Minta konfirmasi** sebelum command destruktif/sulit di-undo.
- **Protokol error:** Berhenti setelah 3x error yang sama, beri hipotesis & 2 alternatif.

---

## 3. Aturan Kode & File

- **File BARU:** Full code, tanpa placeholder.
- **File YANG SUDAH ADA:** Diff presisi dengan format:
  ```
  📄 File: [nama file]
  📍 Lokasi: [posisi perubahan]
  TAMBAHKAN / GANTI / HAPUS: [kode yang berubah]
  ```
- **Jangan tulis ulang file utuh** jika hanya mengubah sebagian.
- **NO HALLUCINATION:** Jangan membuat file, fungsi, atau API yang tidak ada.
- **NO CONTENT COLLECTIONS:** Semua konten hardcode di komponen Astro.
- **Gunakan `npm`**, bukan `pnpm`.
- **Prettier** sebagai formatter.

---

## 4. Design System

| Token | Nilai |
|---|---|
| `godev-primary` | `#556B2F` (Hijau Sage — branding utama) |
| `godev-secondary` | `#2C3E50` (Biru-abu gelap) |
| `godev-accent` | `#25D366` (Hijau WhatsApp — SEMUA tombol CTA) |
| Font heading | Inter |
| Font body | Plus Jakarta Sans |

> ⚠️ TIDAK pakai `font-signature` atau `Roboto Mono`.

---

## 5. WhatsApp Config

| Item | Nilai |
|---|---|
| Nomor WA | `6281234796567` |
| Format URL | `https://wa.me/6281234796567?text=[pesan_terencode]` |
| Default message | `Halo godev, saya tertarik konsultasi gratis tentang otomatisasi usaha saya.` |

**Pre-filled per konteks:**
- Studi kasus Rental: `...saya tertarik dengan solusi untuk RENTAL.`
- Studi kasus Homestay: `...saya tertarik dengan solusi untuk HOMESTAY.`
- Studi kasus Retail: `...saya tertarik dengan solusi untuk RETAIL.`
- Per paket: `...saya tertarik dengan Paket [Rapi/Terima Beres/Tenang].`
- UTM-based: `...saya tertarik dengan solusi [nama-produk] tapi pusing setup-nya.`

---

## 6. Struktur Halaman (17 halaman)

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/index.astro` | ✅ Production |
| `/harga` | `src/pages/harga.astro` | ✅ Production |
| `/kontak` | `src/pages/kontak.astro` | ✅ Production |
| `/faq` | `src/pages/faq.astro` | ✅ Production |
| `/glossary` | `src/pages/glossary.astro` | ✅ Production |
| `/studi-kasus/rental-mobil` | `src/pages/studi-kasus/rental-mobil.astro` | ✅ Production |
| `/studi-kasus/homestay` | `src/pages/studi-kasus/homestay.astro` | ✅ Production |
| `/studi-kasus/toko-retail` | `src/pages/studi-kasus/toko-retail.astro` | ✅ Production |
| `/blog` | `src/pages/blog.astro` | ✅ Production |
| `/blog/5-tanda-umkm-butuh-otomasi` | `src/pages/blog/5-tanda-umkm-butuh-otomasi.astro` | ✅ Ada |
| `/blog/cara-otomasi-buku-kas-google-sheets` | `src/pages/blog/cara-otomasi-buku-kas-google-sheets.astro` | ✅ Ada |
| `/blog/roi-investasi-sistem-otomasi` | `src/pages/blog/roi-investasi-sistem-otomasi.astro` | ✅ Ada |
| `/blog/google-workspace-vs-excel-umkm` | `src/pages/blog/google-workspace-vs-excel-umkm.astro` | ✅ Dibuat 13 Jul |
| `/blog/kesalahan-umkm-implementasi-sistem` | `src/pages/blog/kesalahan-umkm-implementasi-sistem.astro` | ✅ Dibuat 13 Jul |
| `/404` | `src/pages/404.astro` | ✅ Production |
| `/privacy` | `src/pages/privacy.md` | ✅ Production |
| `/terms` | `src/pages/terms.md` | ✅ Production |
| `/test-glass` | `src/pages/test-glass.astro` | ⚠️ Hapus di production cleanup |
| `/test-glass-effects` | `src/pages/test-glass-effects.astro` | ⚠️ Hapus di production cleanup |

---

## 7. Komponen Kunci

| Komponen | Path | Fungsi |
|---|---|---|
| `FloatingWhatsApp` | `src/components/FloatingWhatsApp.astro` | Tombol WA fixed pojok kanan bawah, glassmorphism + pulse |
| `WhatsAppButton` | `src/components/WhatsAppButton.astro` | Tombol WA reusable (props: text, label, variant) |
| `FormKontak` | `src/components/FormKontak.astro` | Form Formspree, validasi nomor WA Indonesia (08xxx/62xxx) |
| `UTMHelper` | `src/utils/UTMHelper.ts` | Baca UTM dari URL, generate pre-filled WA message |
| `LocalBusinessSchema` | `src/components/seo/LocalBusinessSchema.astro` | JSON-LD SEO lokal |
| `ServiceSchema` | `src/components/seo/ServiceSchema.astro` | JSON-LD jasa |
| `FAQPageSchema` | `src/components/seo/FAQPageSchema.astro` | JSON-LD FAQ rich snippet |

---

## 8. Status Sistem Produksi

| Sistem | Status |
|---|---|
| Build | ✅ Berhasil (17 halaman, 88.15 KB HTML) |
| Google Analytics (G-G0NEG69QSL) | ✅ Live — Partytown **dinonaktifkan** (hardcode di `Analytics.astro` baris 5) |
| Google Search Console | ✅ Terverifikasi, sitemap-index.xml sudah disubmit |
| Formspree | ✅ Berfungsi (dikonfirmasi user) |
| WhatsApp Integration | ✅ Aktif dengan UTM tracking |
| Cross-link klikdev→godev | ✅ Aktif di homepage klikdev |
| Cross-link godev→klikdev | ❌ Belum diimplementasi (opsional) |

---

## 9. Paket Layanan

| Paket | Harga | Fitur Utama |
|---|---|---|
| **RAPI** | Mulai Rp 750.000 (sekali bayar) | Form input otomatis, dashboard Google Sheets, pelatihan 1x, garansi 2 minggu |
| **TERIMA BERES** | Mulai Rp 1.500.000 (sekali bayar) | Semua Rapi + notif WA, booking/inventory real-time, email profesional, maintenance 1 bulan, pelatihan 2x |
| **TENANG** | Rp 350.000/bulan | Maintenance, bug fix prioritas, backup rutin, laporan bulanan, respon WA maks 2 jam |

---

## 10. Git Workflow

```bash
# Format commit message
feat(godev): [deskripsi singkat]

# Cek file sensitif SEBELUM commit
git status   # pastikan .env tidak ter-track
git diff --staged
git push origin master
```

> ⚠️ **Selalu cek `.env` tidak ter-commit.** File ini ada di `.gitignore` tapi verifikasi manual wajib.

---

## 11. Known Issues & Pending Tasks

### 🐛 Bug yang Sudah Diperbaiki
- **Partytown GA:** `partytown: false` di-hardcode di `src/components/common/Analytics.astro` baris 5 (jangan diubah balik ke `true`).

### ⚠️ Pekerjaan Pending (Opsional)
- [ ] Hapus halaman test (`/test-glass`, `/test-glass-effects`) saat production cleanup
- [ ] Tambah cross-link godev→klikdev di footer
- [ ] Event tracking WhatsApp clicks (`gtag('event', 'whatsapp_click', ...)`)
- [ ] GA4 Enhanced Measurement (scroll, outbound clicks)
- [ ] Artikel blog: terlah diselesaikan 5 dari 7 yang direncanakan (mega_prompt menyebut 7)
- [ ] A/B testing CTA copy dan pricing

### 📊 Target Metrik
| Periode | Metrik | Target |
|---|---|---|
| Week 1 | GA4 Active users | > 10/hari |
| Week 1 | Bounce rate | < 70% |
| Week 1 | WhatsApp clicks | > 5/minggu |
| Month 1 | GSC Impressions | > 100/hari |
| Month 1 | GSC Clicks | > 10/hari |
| Month 1 | Leads (WA+form) | > 15/bulan |
| Month 1 | Conversion rate | > 2% |

---

## 12. Konteks Teknis Penting

- **Astro version:** 6.4.8 — gunakan hanya API yang ada di dokumentasi resmi ini.
- **Tailwind:** 4.3.2 dengan Vite plugin — sintaks bisa berbeda dari Tailwind 3.x.
- **AstroWind components** yang boleh dipakai: `Hero`, `Features`, `Steps`, `CardGrid`, `CallToAction`.
- **`bg-linear-to-r`** bukan `bg-gradient-to-r` (Tailwind 4.x syntax).
- **Formspree endpoint** disimpan di `.env` sebagai `FORMSPREE_ENDPOINT`.
- **`rss.xml.ts`** ada tapi blog TIDAK menggunakan Content Collections — RSS mungkin perlu penyesuaian jika artikel bertambah.

---

*File ini dibuat otomatis oleh agent pada 13 Juli 2026. Update file ini setiap akhir sesi signifikan.*
