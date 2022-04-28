module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#151515",
        gradient0: "#171717",
        gradient1: "#333333",
        gradient3: "#EBFF00",
        gradient4: "#B1BC2D",
        gradient5: "#FAFF00",
        gradient6: "#C1C516",
      },
      animation: {
        "bounce-slow": "bounce 6s linear infinite",

        wiggle: "wiggle 6s ease-in-out infinite",
        cursor: "cursor .6s linear infinite alternate",
        type: "type 2.8s ease-out .5s 1 normal both",
        "type-reverse":
          "type 2.8s ease-out 10s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};
