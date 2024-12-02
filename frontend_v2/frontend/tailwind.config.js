/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../**/src/**/*.{js,css,scss,html}",
    "../**/templates/**/*.{js,css,scss,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

