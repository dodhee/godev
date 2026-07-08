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
      href: 'https://wa.me/6281234796567?text=Halo%20GoDev%2C%20saya%20tertarik%20konsultasi%20gratis%20tentang%20otomatisasi%20usaha%20saya.',
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
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6281234796567' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <p class="text-sm text-muted">
      GoDev © ${new Date().getFullYear()} · Jasa Done-For-You Otomatisasi Google Workspace untuk UMKM<br/>
      Dibuat dengan ❤️ untuk UMKM Indonesia oleh <strong>dody [mbah]</strong>
    </p>
  `,
};
