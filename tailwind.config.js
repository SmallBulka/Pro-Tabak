/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '940px',
      xl: '1200px'
      
    },
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        lighgra: '#D4C17F',
        placeholder: '#BEBEBE',
        heroGradient: 'rgba(45, 52, 60, 0.38)',
        
      },
      backgroundImage: {
        'hero': "url('/img/Gag.jpg')"
        
      },
    },
  },
  plugins: [],
} 