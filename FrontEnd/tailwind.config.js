/** @type {import('tailwindcss').Config} */
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