module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        dancingScript: ["Dancing Script", 'cursive'],
        archivo: ["Archivo Black", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
