/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        'secondary': '#E5E5E5',
        'background': '#F3F4F5',
        'primary': '#666666'
      }
    },
  },
  plugins: [],
}

