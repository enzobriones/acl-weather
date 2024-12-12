/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',
        secondary: '#00796B',
        tertiary: '#26A69A',
        neutralWhite: '#F5F7FA',
        neutralMedium: '#90A4AE',
        neutralDark: '#455A64',
        success: '#4CAF50',
        warning: '#FFA000',
        danger: '#E53935',
      },
      fontFamily: {
        'kanit-black': ['Kanit-Black', 'sans-serif'],
        'kanit-regular': ['Kanit-Regular', 'sans-serif'],
        'kanit-light': ['Kanit-Light', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

