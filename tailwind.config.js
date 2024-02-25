/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#127369',
        primaryContent: '#4C5958',
        primarySubContent: '#8AA6A3',
        primaryBase: '#84bba9',
        primaryAccent: '#10403B',
        primaryBg: '#F6F6F6',
      },
    },
  },
  plugins: [],
}

