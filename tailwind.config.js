/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9800",
        light: "#E5E5E5",
        dark: "#111111",
        lightGray: "#CCCCCC",
        darkGray: "#191919",
        darkBlue: "#020B1A",
        skyBlue: "#00A6FB",
        // darkBlue: "#010038",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  darkMode: "class",
  darkSelector: ".dark-mode", // Class to apply dark mode styles
};
