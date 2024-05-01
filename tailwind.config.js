/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#4D8AF0',
        'azul-oscuro': '#2A4365',
      },
      width: {
        '42': '170px',
      }
    },
  },
  plugins: [],
}