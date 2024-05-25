/** @type {import('tailwindcss').Config} */

import { gray, green, lime, pink, rose } from 'tailwindcss/colors'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      lime,
      green,
      pink,
      rose,
      gray
    },
    extend: {}
  },
  plugins: []
}
