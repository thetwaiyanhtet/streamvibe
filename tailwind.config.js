/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntuSans:["Ubuntu Sans"]
      },
      colors:{
        primary: "black",
        secondary: "#a855f7",
        tBase: "white",
        tSecondary:"#999999",
        buttonPrimary: "#E50000",
        glass: "#141414",
        bdPrimary:"#262626"
      }
    },
  },
  plugins: [],
}