const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: ["class"],
 content: [
  "./pages/**/*.{ts,tsx,vue}",
  "./components/**/*.{ts,tsx,vue}",
  "./app/**/*.{ts,tsx,vue}",
  "./src/**/*.{ts,tsx,vue}",
 ],
 theme: {
  container: {
   center: true,
   padding: "2rem",
   screens: {
    "2xl": "1400px",
   },
  },
  extend: {
   keyframes: {
    "accordion-down": {
     from: { height: 0 },
     to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
     from: { height: "var(--radix-accordion-content-height)" },
     to: { height: 0 },
    },
   },
   animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
   },
   colors: {
    primary: "#0b1c2c",
    secondary: "#0ea5e9",
    tertiary: "#e6eef5",
    quaternary: "#f5a524",
    quinary: "#0a0f1c",
   },
   fontFamily: {
    Playfair: ["Playfair Display", "serif"],
    Montserrat: ["Montserrat", "sans-serif"],
    Roboto: ["Roboto", "sans-serif"],
    OpenSans: ["Open Sans", "sans-serif"],
    Merriweather: ["Merriweather", "serif"],
    DM: ["DM Serif Display", "serif"],
    Cormorant: ["Cormorant Garamond", "serif"],
    Lora: ["Lora", "serif"],
    Zilla: ["Zilla Slab", "serif"],
    Pridi: ["Pridi", "serif"],
   },
   backgroundImage: {
    "radial-gradient": "radial-gradient(#47d3ff 2px, transparent 2px)",
   },
   backgroundColor: {
    "custom-blue": "#47d3ff",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
  },
 },
 plugins: [animate],
}
