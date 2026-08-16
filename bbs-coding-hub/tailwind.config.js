/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#120F0C',
        'space-secondary': '#211A15',
        'ivory': '#F3E9D2',
        'parchment': '#D8C7A5',
        'antique-gold': '#A67C42',
        'burgundy': '#6B2E2E',
        'secondary-brown': '#5A3825'
      },
      fontFamily: {
        'garamond': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
