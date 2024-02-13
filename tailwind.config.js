/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
       "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        primary:'#3955C1'
      },
      height:{
        jk:'34rem'
      }

    },
  },
  plugins: [],
}

