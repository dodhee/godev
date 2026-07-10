import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

const blogPosts = [
  {
    title: '5 Tanda UMKM Anda Butuh Sistem Otomasi (Sebelum Terlambat)',
    slug: '5-tanda-umkm-butuh-otomasi',
    description: 'Usaha berkembang pesat tapi admin kewalahan? Cek 5 tanda ini sebelum kehilangan pelanggan dan omzet karena sistem manual yang kacau.',
    pubDate: new Date('2026-07-01'),
    category: 'Otomasi Bisnis',
  },
  {
    title: 'Cara Otomasi Buku Kas Digital dengan Google Sheets (Tanpa Coding)',
    slug: 'cara-otomasi-buku-kas-google-sheets',
    description: 'Tutorial lengkap membuat buku kas otomatis yang mencatat transaksi, kirim laporan harian via WhatsApp, dan bisa diakses dari mana saja. Gratis!',
    pubDate: new Date('2026-07-02'),
    category: 'Tutorial',
  },
  {
    title: 'ROI Investasi Sistem Otomasi: Berapa Lama Balik Modal?',
    slug: 'roi-investasi-sistem-otomasi',
    description: 'Perhitungan detail ROI sistem otomasi untuk UMKM. Berapa biaya, berapa savings, dan kapan break even? Data real dari 50+ bisnis.',
    pubDate: new Date('2026-07-05'),
    category: 'ROI & Investasi',
  },
];

export async function GET(context: APIContext) {
  return rss({
    title: 'Blog GoDev - Tips Otomasi Bisnis untuk UMKM Indonesia',
    description: 'Artikel, tutorial, dan tips praktis tentang otomasi bisnis untuk UMKM. Belajar cara efisienkan operasional usaha Anda.',
    site: context.site?.toString() || 'https://godev.biz.id',
    items: blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      link: `/blog/${post.slug}`,
      pubDate: post.pubDate,
      categories: [post.category],
    })),
    customData: `<language>id-ID</language>`,
  });
}