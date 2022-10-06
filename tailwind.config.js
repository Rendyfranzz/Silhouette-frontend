/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'base': '#FFFFFF',
        'abu':'#E5E5E5',
        'abu2':'#484747'
      },
      fontFamily:{
        'popin': 'Poppins, sans-serif',
        'serat' :'Montserrat, sans-serif'
      },
      fontSize: {
        title: '24px',
        isi: '16px',
        xl: '1.25rem',
      }
    },
  },
  plugins: [],
}
