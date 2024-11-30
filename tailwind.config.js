/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC143C',
          dark: '#B22222',
          light: '#FF1744'
        },
        dark: {
          DEFAULT: '#000000',
          secondary: '#121212',
          tertiary: '#1E1E1E'
        },
        light: {
          DEFAULT: '#FFFFFF',
          secondary: '#B0B0B0',
          tertiary: '#808080'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
};