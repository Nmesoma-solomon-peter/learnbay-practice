/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{js,jsx}","./src/components/*{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#896DC5'
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide'),
],
}

