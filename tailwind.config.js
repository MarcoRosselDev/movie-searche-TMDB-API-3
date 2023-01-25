/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts, tsx}'],
  theme: {
    extend: {
      colors: '#423F71',
      header: '#292841',
      body: '#1C1B29',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
