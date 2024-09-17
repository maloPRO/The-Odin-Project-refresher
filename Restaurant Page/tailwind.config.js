module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fascinate: ['Fascinate Inline', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
