import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Studi Kasus',
      links: [
        {
          text: 'Rental Mobil',
          href: getPermalink('/studi-kasus/rental-mobil'),
        },
        {
          text: 'Homestay',
          href: getPermalink('/studi-kasus/homestay'),
        },
        {
          text: 'Toko Retail',
          href: getPermalink('/studi-kasus/toko-retail'),
        },
      ],
    },
    {
      text: 'Harga',
      href: getPermalink('/harga'),
    },
    {
      text: 'Kontak',
      href: getPermalink('/kontak'),
    },
  ],
  actions: [
    {
      text: 'Konsultasi Gratis',
      href: 'https://wa.me/6281234796567?text=Halo%20GoDev%2C%20saya%20mau%20konsultasi%20otomasi%20usaha.%0A%0ANama%20usaha%3A%20%5Bisi%20nama%20usaha%5D%0AMasalah%20utama%3A%20%5Bceritakan%20masalah%5D%0ABudget%20disiapkan%3A%20%5BRp%20...%5D',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Layanan',
      links: [
        { text: 'Buku Kas Otomatis', href: getPermalink('/#solusi') },
        { text: 'Kontrol Stok Real-time', href: getPermalink('/#solusi') },
        { text: 'Sistem Booking/Order', href: getPermalink('/#solusi') },
        { text: 'Paket Harga', href: getPermalink('/harga') },
      ],
    },
    {
      title: 'Studi Kasus',
      links: [
        { text: 'Rental Mobil', href: getPermalink('/studi-kasus/rental-mobil') },
        { text: 'Homestay', href: getPermalink('/studi-kasus/homestay') },
        { text: 'Toko Retail', href: getPermalink('/studi-kasus/toko-retail') },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { text: 'Tentang Kami', href: getPermalink('/kontak') },
        { text: 'Kontak', href: getPermalink('/kontak') },
        { text: 'WhatsApp', href: 'https://wa.me/6281234796567' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Syarat & Ketentuan', href: getPermalink('/terms') },
        { text: 'Kebijakan Privasi', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6281234796567' },
    // Instagram & Facebook: Akan diaktifkan setelah akun social media ready
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/godev.id' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/godev.id' },
  ],
  footNote: `
    <p class="text-sm text-muted">
      GoDev © ${new Date().getFullYear()} · Jasa Done-For-You Otomatisasi Google Workspace untuk UMKM<br/>
      Dibuat dengan ❤️ untuk UMKM Indonesia oleh <strong>dody [mbah]</strong>
    </p>
  `,
};
