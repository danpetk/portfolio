/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "argon": ["Argon", "sans-serif"],
      },
      dropShadow: {
        glow: [
          "0 0px 25px rgba(34, 197, 94, .25)",
          "0 0px 65px rgba(34, 197, 94, .7)"
        ]
      },
      colors: {
        primary: '#10141a',
        secondary: '#0a0d11'
      }
    },
  },
  plugins: [],
}

