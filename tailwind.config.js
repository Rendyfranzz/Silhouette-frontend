/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light': '#04ff00',
        'base': '#FFFFFF',
        'abu': '#E5E5E5',
        'abu2': '#484747'
      },
      fontFamily: {
        'popin': 'Poppins, sans-serif',
        'serat': 'Montserrat, sans-serif'
      }
    },
  },
  plugins: [],
}
