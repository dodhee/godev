/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'godev-primary': '#556B2F',   // Hijau Sage - kesan tenang, terpercaya, membumi
        'godev-secondary': '#2C3E50', // Abu-abu Biru Gelap - profesional
        'godev-accent': '#25D366',    // Hijau WhatsApp - untuk semua CTA
        'godev-accent-dark': '#1DA851', // Variant lebih gelap untuk WCAG AA compliance (contrast ratio 4.5:1)
      },
    },
  },
  plugins: [],
}
