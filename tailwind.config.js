/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk"
      },
      fontSize: {
        'responsive-paragraph': 'clamp(0.8rem, 1rem, 1.5rem)',
        'responsive-subtitle': 'clamp(1rem, 1.2rem, 2rem)',
        'responsive-title': 'clamp(2rem, 8vw, 3.5rem)',
        'title-1-desktop': '5vw',
        'title-1-mobile': '10vw',
        'title-2-desktop': '3vw',
        'title-2-mobile': '6vw',
        'title-3-desktop': '2vw',
        'title-3-mobile': '5vw',
        'paragraph-desktop': '1.3vw',
        'paragraph-mobile': 'clamp(1rem, 2vw , 1.5rem)',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}