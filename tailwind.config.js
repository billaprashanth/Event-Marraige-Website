/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#70e1f5',
        peach: '#ffd194',
      },
      animation: {
        pulseOnce: 'pulse 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
