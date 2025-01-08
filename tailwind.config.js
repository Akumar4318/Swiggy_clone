/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
       "darkOrange":"#ff5200",
    'lightOrange':"#ed5325",
    'white':'#FFFFFF',
    "black":"#000000"
    },
    fontFamily:{
      "gilory":['Gilory'],
      "giloryBlack":['Giloryblack'],
      "giloryHeavy":['GiloryHeavy'],
      'GilorysemiBold':['GilorysemiBold'],
      "giloryExtraBold":['Giloryextrabold'],
      'gilorymedium':['Gilorymedium'],
      'NovaRegular':['ProximaNovaRegular'],
      'Novabold':['ProximaNovaBold']
    }
  },
  plugins: [],
  
}

