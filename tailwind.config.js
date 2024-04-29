/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito':['Nunito','sans-serif'],
        'inter':['Inter','sans-serif']
      }
    },
  },
  theme: {
    extend: {
      colors: {
        "v-yellow" : '#FFE061',
      }
    }
  },
  plugins: [],
}

