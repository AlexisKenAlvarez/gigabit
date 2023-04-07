import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lblue: '#D4F7FF',
        grn: '#7A9F31',
        bttn: '#3D253D',
        google: '#3283FC',
        bttnHover: '#523152',
        err: '#AC4B3E'
      },
      fontFamily: {
        pixel: ['Pixel'],
        vt: ['VT323']
      },
      boxShadow: {
        googleShadow: '0px 5px 0px 0px rgba(38,109,214,1)',
        bttnShadow: '0px 5px 0px 0px #261626'

      }
    },
  },
  plugins: [],
} satisfies Config;
