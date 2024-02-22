/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode:['selector'],
  theme: {
    extend: {
      colors:{
        'background':"#ffffff",
        'primary':"#ffdf7c",
        'secondary':"#ffe9a4",
        'accent':"#ff8c00",
        'text':"#050316",
        'dark_background':"#151413",
        'dark_p':"#856300",
        'dark_s':"#5c4500",
        'dark_a':"#ff8c00",
      }
    },
    fontFamily:{
      'display': ["Inter"],
      'body': ["Inter"]
    }
  },
  plugins: [],
}

