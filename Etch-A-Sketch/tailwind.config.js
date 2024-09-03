/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '50p': '50%',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      width: {
        '40e': '40em'
      },
      height: {
        '40e': '40em',
      }
    },
  },
  plugins: [],
}