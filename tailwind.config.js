/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#5005F2',
        primaryContent: '#5005F2',
        primarySubContent: '#150140',
        primaryBase: '#150140',
        primaryAccent: '#4804D9',
        primaryBg: '#0D0D0D',
      },
    },
  },
  plugins: [],
}

