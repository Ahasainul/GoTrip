import { Si3M } from 'react-icons/si';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        'primary': '#fea928',
        'secondary': '#ed8900',
      },
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'2rem',
         
        }
      }

    },
  },
  plugins: [],
}

