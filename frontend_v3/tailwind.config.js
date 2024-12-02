/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,css,scss,html}",
    "../example/**/templates/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        placepython: "#e08631"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

