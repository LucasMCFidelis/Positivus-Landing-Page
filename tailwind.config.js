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
        'title-1-desktop': '5vw',
        'title-1-mobile': '10vw',
        'title-2-desktop': '3vw',
        'title-2-mobile': '6vw',
        'title-3-desktop': 'clamp(1.5rem, 2.2vw , 3vw)',
        'title-3-mobile': 'clamp(1.2rem, 5vw, 1.6rem)',
        'paragraph-desktop': 'clamp(1.2rem, 1.36vw , 2rem)',
        'paragraph-mobile': 'clamp(1rem, 4vw , 1.5rem)',
      },
      boxShadow:{
        'basic': '0px 5px 0px #191A23;'
      },
      borderColor:{
        'basic': '#191A23'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}