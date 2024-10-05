/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors:{
      // default
      'black':"#000000",
      'blue':{
        700:'#1d4ed8'
      },
      'gray':{
        50:'#f9fafb',
        400:'#9ca3af',
        700:'#374151',
        800:'#1f2937'
      },
      'red':{
        700:'#b91c1c'
      },
      'white': '#ffffff',
      // default end
      'primary':'#FFCF48',
      'secondary':'#b91c1c',
      'back':'#640D5F'
    },
    extend: {
      fontFamily:{
        montserrat:['Montserrat Alternates'],
        roboto:['Roboto']
      }
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}