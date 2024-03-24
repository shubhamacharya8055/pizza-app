/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "pizza-regular" : ["pizza-regular" , "sans-serif"],
      "pizza-semibold" : ["pizza-semibold" , "sans-serif"],
      "pizza-extraBold" : ["pizza-extraBold" , "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}