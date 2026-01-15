/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      tawja: {
        '100': '#F5F0F8',
        '200': '#EAD9F1',
        '300': '#DDBFE9',
        '400': '#CFA5E1',
        '500': '#C28BDA',
        '600': '#A56DC2',
        '700': '#854FAA',
        '800': '#663191',
        '900': '#531D77'
      },
      'white': '#ffffff',
      'black': colors.black,
      'red': colors.red,
      'yellow': colors.yellow,
      gray: {
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

