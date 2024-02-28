/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#55C1D9",
        secondary: "#8BA651",
        tertiary: "#BFD962",
        quaternary: "#46658C",
        quinary: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
