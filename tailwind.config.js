/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gruppo: ["Gruppo", "sans-serif"],
      shoulder: ['Big Shoulders Stencil Display', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: '20px'
      }
    },
  },
  plugins: [],
}

