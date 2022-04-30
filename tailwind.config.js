const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar-hide'),
     require('@tailwindcss/aspect-ratio'),
    // ...
  ]
}