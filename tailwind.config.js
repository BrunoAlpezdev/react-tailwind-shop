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
    extend: {},
  },
  darkMode: "class",
 plugins: [nextui()],
}
module.exports = withMT(Config);

