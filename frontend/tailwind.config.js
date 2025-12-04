/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accentGold: "#D79922",
        neutralBg: "#EFE2BA",
        redAccent: "#F13C20",
        deepIndigo: "#4056A1",
        softPurple: "#C5CBE3",
        brandBg: "#F8F9FB"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "serif"]
      }
    }
  },
  plugins: []
}
