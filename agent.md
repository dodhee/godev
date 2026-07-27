# agent.md — Panduan Agent untuk Proyek GoDev

> **Lokasi kanonik:** `/agent.md` di **root repo** — JANGAN pindah ke `docs/agent.md`.
> **Sumber kebenaran spek:** `docs/mega_prompt_godev.txt`
> **Status terakhir:** 27 Juli 2026 — Fase B live di `main` @ `13ccc10`, production OK
> **Dibaca wajib di awal setiap sesi baru.**

---

## 1. Identitas Proyek

| Item | Detail |
|---|---|
| **Nama Proyek** | godev |
| **Deskripsi** | Landing page jasa Done-For-You (DFY) otomatisasi Google Workspace untuk UMKM Indonesia |
| **URL Produksi** | https://godev.biz.id |
| **URL Repo** | https://github.com/dodhee/godev.git |
| **Branch aktif** | `main` |
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
- **Blog = Content Collections** (`src/content/blog` + `src/content.config.ts` collection `blog`). Decap tulis MD → build render `/blog/[slug]`. Landing non-blog tetap hardcode di komponen Astro.
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

## 6. Struktur Halaman (~17 route build)

| Route | File / sumber | Status |
|---|---|---|
| `/` | `src/pages/index.astro` (preview 3 post terbaru via `getCollection`) | ✅ Live |
| `/harga` | `src/pages/harga.astro` | ✅ Live |
| `/kontak` | `src/pages/kontak.astro` | ✅ Live |
| `/faq` | `src/pages/faq.astro` | ✅ Live |
| `/glossary` | `src/pages/glossary.astro` | ✅ Live |
| `/studi-kasus/rental-mobil` | `src/pages/studi-kasus/rental-mobil.astro` | ✅ Live |
| `/studi-kasus/homestay` | `src/pages/studi-kasus/homestay.astro` | ✅ Live |
| `/studi-kasus/toko-retail` | `src/pages/studi-kasus/toko-retail.astro` | ✅ Live |
| `/blog` | `src/pages/blog.astro` → `getCollection('blog')` | ✅ Live |
| `/blog/[slug]` (5 artikel) | `src/pages/blog/[slug].astro` + MD di `src/content/blog/` | ✅ Live |
| `/rss.xml` | `src/pages/rss.xml.ts` → collection (5 item) | ✅ Live |
| `/404` | `src/pages/404.astro` | ✅ Live |
| `/privacy` | `src/pages/privacy.md` | ✅ Live |
| `/terms` | `src/pages/terms.md` | ✅ Live |
| `/admin/` | `public/admin/` (Decap CMS) | ✅ Scaffold live |

**Artikel blog (slug = nama file MD, tanpa `.md`):**
- `5-tanda-umkm-butuh-otomasi`
- `cara-otomasi-buku-kas-google-sheets`
- `roi-investasi-sistem-otomasi`
- `google-workspace-vs-excel-umkm`
- `kesalahan-umkm-implementasi-sistem`

> ❌ Jangan recreate `src/pages/blog/<slug>.astro` hardcode, `/test-glass*`, dual `src/content/config.ts`, atau collection `post` / `src/data/post`.

---

## 7. Komponen Kunci

| Komponen | Path | Fungsi |
|---|---|---|
| `FloatingWhatsApp` | `src/components/FloatingWhatsApp.astro` | Tombol WA fixed pojok kanan bawah, glassmorphism + pulse |
| `WhatsAppButton` | `src/components/WhatsAppButton.astro` | Tombol WA reusable (props: text, label, variant) |
| `FormKontak` | `src/components/FormKontak.astro` | Form Formspree, validasi nomor WA Indonesia (08xxx/62xxx) |
| `UTMHelper` | `src/utils/UTMHelper.ts` | Baca UTM dari URL, generate pre-filled WA message |
| `blogImages` | `src/utils/blogImages.ts` | Resolve frontmatter `image: /images/<base>` → `src/images/blog/*` |
| `LocalBusinessSchema` | `src/components/seo/LocalBusinessSchema.astro` | JSON-LD SEO lokal |
| `ServiceSchema` | `src/components/seo/ServiceSchema.astro` | JSON-LD jasa |
| `FAQPageSchema` | `src/components/seo/FAQPageSchema.astro` | JSON-LD FAQ rich snippet |
| `BlogPostingSchema` | `src/components/seo/BlogPostingSchema.astro` | JSON-LD Article/BlogPosting per post |

**Widget AstroWind yang boleh dipakai:** `Hero`, `Features`, `Steps`, `CallToAction`, `Header`, `Footer`, `Pricing*`, `FAQs`, `Content`, `TestimonialsCarousel`.  
**Jangan restore** widget residual yang dihapus (Announcement, Hero2, Features2/3, Brands, Stats, dll.).

---

## 8. Status Sistem Produksi

| Sistem | Status |
|---|---|
| Git tip | `13ccc10` `feat(godev): Fase B blog collections + cleanup residual AstroWind` = `origin/main` |
| Build local | ✅ 17 page(s), CSS `/_astro/Layout.*.css` OK |
| Production | ✅ https://godev.biz.id — visual + asset verified 27 Jul 2026 (CSS `text/css` 200) |
| Blog live | ✅ Collection → 5 slug + listing + RSS 5/5 + `BlogPosting` |
| Decap CMS | ✅ `/admin/` scaffold (GitHub backend + `functions/` OAuth). Publish lewat MD di `src/content/blog` |
| Google Analytics (G-G0NEG69QSL) | ✅ Live — Partytown **off** (`Analytics.astro` `partytown: false`) |
| Google Search Console | ✅ Terverifikasi, sitemap-index.xml disubmit |
| Formspree | ✅ Berfungsi |
| WhatsApp + UTM | ✅ Aktif |
| Cross-link klikdev→godev | ✅ Di homepage klikdev |
| Cross-link godev→klikdev | ❌ Belum (opsional) |

> **Noise DevTools:** `ERR_BLOCKED_BY_CLIENT` / MIME CSS palsu sering dari **adblock/extension**, bukan deploy. Cek Incognito tanpa extension dulu. Asset CSS live = `text/css` 200.

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
git push origin main
```

> ⚠️ **Selalu cek `.env` tidak ter-commit.** File ini ada di `.gitignore` tapi verifikasi manual wajib.

---

## 11. Known Issues & Pending Tasks

### 🐛 Bug yang Sudah Diperbaiki
- **Partytown GA:** `partytown: false` di-hardcode di `src/components/common/Analytics.astro` baris 5 (jangan diubah balik ke `true`).

### ⚠️ Pekerjaan Pending (Opsional)
- [ ] Tambah cross-link godev→klikdev di footer
- [ ] Event tracking WhatsApp clicks (`gtag('event', 'whatsapp_click', ...)`)
- [ ] GA4 Enhanced Measurement (scroll, outbound clicks)
- [ ] Artikel blog: 5 live via collection; mega_prompt sebut 7 — sisanya lewat Decap `/admin/`
- [ ] A/B testing CTA copy dan pricing

### ✅ Selesai (27 Jul 2026) — commit `13ccc10` pushed
- [x] Hapus `/test-glass*`, dead AstroWind widgets/docs/assets residual
- [x] **Fase B blog live:** Decap MD = single source → collection `blog` → `/blog/[slug]` + listing + RSS 5/5 + `BlogPostingSchema`; hardcode blog pages + dual schema (`content/config.ts`, collection `post`) dihapus
- [x] Image frontmatter `/images/<basename>`; body MD tanpa H1 duplikat (1 H1 page)
- [x] Title metadata pakai template `%s | GoDev` (jangan hardcode `| GoDev` lagi di page)
- [x] `agent.md` kanonik di **root** (bukan `docs/`)
- [x] Production visual verified (home + blog styled; CSS/JS/font 200)

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

- **Astro:** 6.4.8 — API sesuai docs resmi.
- **Tailwind:** 4.3.2 Vite plugin — `bg-linear-to-r` **bukan** `bg-gradient-to-r`.
- **Formspree:** `.env` lokal; CF Pages Build: `PUBLIC_FORMSPREE_*`. OAuth Decap Runtime: `GITHUB_CLIENT_*`.
- **Blog pipeline (Fase B, live):**
  1. Tulis/edit di Decap `/admin/` **atau** langsung `src/content/blog/<slug>.md`
  2. Frontmatter wajib: `title`, `description`, `pubDate`, `author`, `category`, `tags`, `image: /images/<file>`
  3. File image di `src/images/blog/` (nama basename cocok frontmatter)
  4. Body MD: **jangan** ulangi `# Judul` (H1 sudah di `[slug].astro`) — mulai dari paragraf / `##`
  5. Build → `/blog/<slug>`, listing, RSS, `BlogPosting` JSON-LD otomatis
- **Schema collection:** hanya `src/content.config.ts` collection `blog` (glob `./content/blog/*.{md,mdx}`).
- **SEO title:** page kirim `title` **tanpa** suffix brand; `Metadata.astro` + `config.yaml` template `%s | GoDev`.
- **Push HTTPS (shell Hermes Win):**  
  `GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=never git -c credential.helper= -c credential.helper=manager push origin main`

---

*Update 27 Juli 2026: agent.md sinkron tip `13ccc10` + production verified. Root lock.*
