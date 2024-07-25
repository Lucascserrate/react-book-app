/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundColor: {
          'primary': '#F9F9FC',
          'secondary': '#F3F5F7',
      },
    },
  },
  plugins: [],
}

