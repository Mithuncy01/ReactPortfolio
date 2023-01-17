/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }
      
      'xsm': '0px',

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#625eff',
      'whitepurple': '#9896ff',
      'midnight': '#121063',
      'DarkBlue': '#0f0d48',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray': '#4e4e4e',
      'black': '#232323',
      'Pure-black': '#232323',
      'mycolor': '#00e3db',
      'mycolor2': '#bbb9ff',
      'red': '#f20000',

    },
    container: {
      center: true,
    },
    extend: {
      
    },
  },
  plugins: [],
}
