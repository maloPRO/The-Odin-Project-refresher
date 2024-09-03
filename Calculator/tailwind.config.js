/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '30rem',
      },
      borderRadius: {
        'circle': '50%',
      }
    },
  },
  plugins: [],
}