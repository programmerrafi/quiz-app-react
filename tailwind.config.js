/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        heading: "#002333",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 0.3s linear",
      },
    },
  },
  plugins: [],
};
