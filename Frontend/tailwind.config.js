/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlueLight: '#638fff',
        customBlue: '#205fff',
        customBlueDark: '#1a4ccc',

        customRedLight: '#ed5564',
        customRed: '#E50C21',
        customRedDark: '#a00817',
      },
    },
  },
  plugins: [],
}