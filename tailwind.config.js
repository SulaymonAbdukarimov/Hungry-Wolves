/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        70: ["70%"],
      },
      padding: {
        104: ["104px"],
        147: ["147px"],
      },
      colors: {
        hero: "#825AFC",
        kok: "#696373",
        ochkok: "#2B2A32",
        herobg: "#1D1E23",
      },
      fontFamily: {
        condensed: ["Barlow Condensed"],
        barlow: ["Barlow"],
      },
      borderRadius: {
        twenty: ["20px"],
        ten: ["10px"],
      },
      lineHeight: {
        hero: ["115px"],
        56: ["56px"],
        28: ["28px"],
        72: ["72px"],
      },
      letterSpacing: {
        wide: ["0.03em"],
        small: ["0.02em"],
        0.15: ["0.015em"],
        0.005: ["0.005em"],
      },
      boxShadow: {
        icons: ["0 0 15px 3px #2F68FF"],
        button: ["0 0 15px 5px #2F68FF"],
        aboutcard: ["0px 2px 15px rgba(0, 0, 0, 0.5)"],
      },
      blur: {
        100: ["160px"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
