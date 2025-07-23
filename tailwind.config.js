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
        ppneue: ['"PP Neue Montreal"', 'sans-serif'],
      },
      content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./pages/**/*.{ts,tsx}",
]


    },
  },
  plugins: [],
}
