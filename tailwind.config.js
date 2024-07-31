const {nextui} = require('@nextui-org/theme');
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
const Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'colors': {
        'dodger-blue': {  
          DEFAULT: '#3B82F6',  
          50: '#EBF2FE',  
          100: '#D7E6FD',  
          200: '#B0CDFB',  
          300: '#89B4FA',  
          400: '#629BF8',  
          500: '#3B82F6',  
          600: '#0B61EE',  
          700: '#084BB8',  
          800: '#063583',  
          900: '#041F4D',  
          950: '#021532'},
        'icons' : {
          Create: '#7fc380',
          Read: '#7ed0ec',
          Update: '#a1a1a1',
          Delete: '#e84a4a',
        },
        'brand' : {
          'light-shades':'#FCFAFB',
          'light-accent':'#EC9A94',
          'main':'#0D6E6E',
          'dark-accent':'#FF3D3D',
          'dark-shades':'#332329',
        }
      },
    },
  },
  darkMode: "class",
 plugins: [nextui()],
}
module.exports = withMT(Config);

