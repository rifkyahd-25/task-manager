/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#394578", // Lightest shade
          200: "#1D284F",
          300: "#121F3E",
          400: "#1F2A50",
          500: "#1C274E",
          600: "#1E2950",
          700: "#131F3F",
          800: "#1B264D",
          900: "#111F3C", // Darkest shade
          950: "#162242"
        },
      },
    },
  },
  plugins: [],
}