import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lblue: '#D4F7FF'
      }
    },
  },
  plugins: [],
} satisfies Config;
