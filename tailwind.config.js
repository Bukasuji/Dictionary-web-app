/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        dark: 'black',
        light: '#ffffff'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
      textColor: ['dark', 'dark-hover', 'dark-group-hover'],
    },
  },
  plugins: [],
}

