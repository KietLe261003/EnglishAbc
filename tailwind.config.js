/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          200: '#F5DDBD',
          300: '#FFF4E5',
          700: '#FB9400',
        },
        slate: {
          400: '#F3F3F3',
        },
        green: {
          700: '#12E333',
        },
        gray: {
          100: '#F8F8F8',
          300: '#ECEBE9',
          200: '#F9F9F9',
          400: '#9E988F',
          500: '#D6B8B8',
          600: '#6D6D6D',
        },
        grey: {
          100: "#f9f9f9",
          200: "#f8f8f8"
        },
        backgroundsidebaradmin: '#FFF4E5',
        textsidebar: '#8C8C8C',
      },
      screens: {
        '3xl': '2000px',
        'xs': '480px'
      },
    },
  },
  plugins: [],
};
