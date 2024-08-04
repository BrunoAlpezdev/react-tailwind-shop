/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const {nextui} = require('@nextui-org/theme');
const withMT = require("@material-tailwind/react/utils/withMT");
const Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'icons' : {
          Create: '#7fc380',
          Read: '#7ed0ec',
          Update: '#a1a1a1',
          Delete: '#e84a4a',
        },
        'brand-light-shades': {
          DEFAULT: '#FCFAFB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FCFAFB',
          600: '#E7D7DF',
          700: '#D2B4C3',
          800: '#BD91A7',
          900: '#A86E8B',
          950: '#9C5E7D'
        },
        'brand-light-accent': {
          DEFAULT: '#EC9A94',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFCFC',
          300: '#F8DBD9',
          400: '#F2BBB7',
          500: '#EC9A94',
          600: '#E46D64',
          700: '#DB4035',
          800: '#B72B21',
          900: '#882018',
          950: '#701A14'
        },
        'brand-main': {
          DEFAULT: '#0D6E6E',
          50: '#49EAEA',
          100: '#37E7E7',
          200: '#1ADBDB',
          300: '#16B7B7',
          400: '#119292',
          500: '#0D6E6E',
          600: '#073C3C',
          700: '#010A0A',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'brand-dark-accent': {
          DEFAULT: '#FF3D3D',
          50: '#FFF5F5',
          100: '#FFE0E0',
          200: '#FFB7B7',
          300: '#FF8F8F',
          400: '#FF6666',
          500: '#FF3D3D',
          600: '#FF0505',
          700: '#CC0000',
          800: '#940000',
          900: '#5C0000',
          950: '#400000'
        },
        'brand-dark-shades': {
          DEFAULT: '#332329',
          50: '#9D7081',
          100: '#946577',
          200: '#7C5563',
          300: '#634450',
          400: '#4B343C',
          500: '#332329',
          600: '#120C0E',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
}
module.exports = withMT(Config);

