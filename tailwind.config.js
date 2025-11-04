/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { lavender: '#E9E3FF', gold: '#F6D98B', blush: '#F8E7F0', ivory: '#FFFDF8', ink: '#3b3b3b' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.06)' },
      backgroundImage: { 'floral': "url('/floral-bg.svg')", 'floral-gold': "url('/floral-gold.svg')" },
      keyframes: { shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } } },
      animation: { shimmer: 'shimmer 2.5s linear infinite' }
    },
  },
  plugins: [],
}