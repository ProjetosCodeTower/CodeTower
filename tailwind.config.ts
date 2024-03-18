import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      // container: {
      //   center: true,
      //   padding: "1rem",
      // },
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        dark: '#292d34',
        primary: '#407bff',
        secondary: '#ff6b6b',
        tertiary: '#7bc678',
        quaternary: '#f2994a',
        gray: {
          default: '#828282',
          soft: '#f2f2f2'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config