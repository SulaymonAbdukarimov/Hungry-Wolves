/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        120: ["-70px"],
      },
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
        line:'rgba(255, 255, 255, 0.1)',
        kok: "#696373",
        ochkok: "#2B2A32",
        herobg: "#1C1C1F",
        mobile: "#222231",
        blueberry: "rgb(47 104 255)",
        heroshadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        gradient:
          "linear-gradient(45deg,#2f68ff 42.29%,#af52fa 67.11%,#8256fa 91.94%)",
        card1:
          "linear-gradient(1turn,hsla(0,0%,100%,.25),rgba(28,28,30,.25) 50.16%,hsla(0,0%,100%,0)),linear-gradient(180deg,hsla(0,0%,100%,.25),rgba(28,28,30,.25) 49.53%,hsla(0,0%,100%,0) 102.26%)",
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
        0.24: ["0.24em"],
      },

      boxShadow: {
        icons: ["0 0 25px 1px #2F68FF"],
        button: ["0 0 15px 5px #2F68FF"],
        aboutcard: ["0px 2px 15px rgba(0, 0, 0, 0.5)"],
        white: ["0 0 25px 1px #fff"],
        sky: ["0 0 15px 3px #4B4FCC"],
        footer: ["0px -2px 4px rgba(0, 0, 0, 0.3)"],
        card1: ["0px 2px 15px rgba(0, 0, 0, 0.5)"],
      },
      blur: {
        100: ["160px"],
        500: ["500px"],
        lg: ["16px"],
      },
      backgroundImage: {
        bgbanner: " url('/src/assets/mainpage/banner/shadow.png')",
        firstcard: "linear-gradient(127.93deg, #2F68FF 0.98%, #AF52FA 100%)",
        bgglow: "url('/src/assets/mainpage/roadmap/glow.png')",
        bgqorasmall: "url('/src/assets/mainpage/roadmap/background2.png')",
        bgqorabig: "url('/src/assets/mainpage/roadmap/background1.png')",
        castle: "url('/src/assets/mainpage/roadmap/castle.png')",
        coolbg: "linear-gradient(180deg, #2F68FF 0%, #AF52FA 100%)",
        gradient:
          "linear-gradient(45deg,#2f68ff 42.29%,#af52fa 67.11%,#8256fa 91.94%)",
      },
      borderColor: {
        firstcard: "linear-gradient(127.93deg, #2F68FF 0.98%, #AF52FA 100%)",
        team: "#5A5A61",
      },
      dropShadow: {
        stone: ["0px 4px 10px rgba(0, 0, 0, 0.5)"],
        sky: ["0 0 15px 3px #4B4FCB"],
      },
      backgroundColor: {
        team: "#2B2B35",
        footer: "#1C1C1E",
        blueberry: "rgb(47 104 255)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
