/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{js,jsx}","./src/components/*{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
],
}

