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
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}