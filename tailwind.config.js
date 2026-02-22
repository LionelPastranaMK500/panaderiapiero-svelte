/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bakery: {
          flour: "#F9F7F2",
          wood: "#2D241E",
          "wood-dark": "#1A1512",
          gold: "#C5A059",
          crust: "#8B5E34",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Maven Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
