const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#FCECDD'
        },
        night: {
          DEFAULT: '#18181B'
        }
      },
      fontFamily: {
        autography: ["Autography", "cursive"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
