const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      yellow: colors.amber
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
