/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      container:{
        center: true,
        padding:'2rem',
      },
      colors: {
        'custom-dark': '#121212',
        black:'#18181B'
      },
      textDecorationThickness: {
        4: '4px',  
        8: '8px', 
      },
    },
  },
  plugins: [],
}