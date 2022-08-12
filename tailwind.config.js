/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hero: "#825AFC",
      },
      fontFamily: {
        condensed: ["Barlow Condensed"],
        barlow: ["Barlow"],
      },
    },
  },
  plugins: [],
};
