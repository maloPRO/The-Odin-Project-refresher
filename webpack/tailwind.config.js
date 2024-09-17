/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'img-1': "url('../images/bg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

