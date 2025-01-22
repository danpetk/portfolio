/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': '1.375rem', // Adjust this value as needed (e.g., 22px equivalent in rem)
      },
      fontFamily: {
        "argon": ["Argon", "sans-serif"],
        "jetbrains": ["Jetbrains", "sans-serif"]
      },
      dropShadow: {
        glowGreen: [
          "0 0px 25px rgba(0, 255, 0, .25)",
          "0 0px 65px rgba(0, 255, 0, .7)"
        ],
        glowCyan: [
          "0 0px 30px rgba(34, 211, 238, .35)",
          "0 0px 65px rgba(34, 211, 238, .7)"
        ],        
        glowYellow: [
          "0 0px 25px rgba(250, 204, 21, .25)",
          "0 0px 65px rgba(250, 204, 21, .7)"
        ],
        glowBlue: [
          "0 7px 25px rgba(17, 24, 39, .25)",
          "0 7px 65px rgba(17, 24, 39, .7)"
        ]
      },
      colors: {
        primary: '#10141a',
        secondary: '#0a0d11',
        neonheader: '#00d500'
      },
    },
  },
  plugins: [],
}

