/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
            fontFamily: {
        montreal: ['"PP Neue Montreal"', 'sans-serif'],
              bastardo: ['"Bastardo Grotesk"', 'sans-serif'],

      },

    },
  },
  plugins: [],
}
