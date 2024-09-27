module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
        archivo: ["Archivo Black", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        bounceTwice: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
      animation: {
        bounceTwice: "bounceTwice 1s ease-in-out 2 forwards", // 2 iterations, and forwards keeps the final state
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
