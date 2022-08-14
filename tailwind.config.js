/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        70: ["70%"],
        50: ["200px"],
      },
      height: {
        50: ["200px"],
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
        white: ["0 0 15px 3px #fff"],
        sky: ["0 0 15px 3px #4B4FCC"],
      },
      blur: {
        100: ["160px"],
      },
      backgroundImage: {
        bgbanner: " url('/src/assets/mainpage/banner/shadow.png')",
        firstcard: "linear-gradient(127.93deg, #2F68FF 0.98%, #AF52FA 100%)",
        bgglow: "url('/src/assets/mainpage/roadmap/glow.png')",
      },
      borderColor: {
        firstcard: "linear-gradient(127.93deg, #2F68FF 0.98%, #AF52FA 100%)",
      },
      dropShadow: {
        stone: ["0px 4px 10px rgba(0, 0, 0, 0.5)"],
        sky: ["0 0 15px 3px #4B4FCB"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
