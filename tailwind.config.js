const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   background: {
    //     light: 'white',
    //     dark: '#18191A',
    //   },
    //   red: {
    //     light: '#D64635',
    //     dark: '#DC6456',
    //   },
    //   light_pink : {
    //     light : 'B880FF',
    //     dark : '#C598FF',
    //   },
    //   pink :{
    //     light : '#FF739D',
    //     dark : '#FF87AB',
    //   },
    //   blue :{
    //     light : '#4ABAF9',
    //     dark : '#76C8F6',
    //   },
    //   green :{
    //     light : '#35D6A6',
    //     dark : '#B0F8CD',
    //   },
    //   yellow :{
    //     light : '#FFD600',
    //     dark : '#FFF84F',
    //   },
    // },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
     require('@tailwindcss/aspect-ratio'),
    // ...
  ]
}