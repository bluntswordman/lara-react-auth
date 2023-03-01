/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "react-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          500: "#61dafb",
          600: "#5bc9f9",
          700: "#4aaee8",
          800: "#3a8fd6",
          900: "#2a6fc5",
        }
      } 
    },
  },
  plugins: [],
};
