/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.green,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple,
      lime: colors.lime,
      red: colors.red
    },
    extend: {},
  },
  plugins: [],
};
