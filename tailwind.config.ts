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
   padding: "1rem",
   screens: { "2xl": "1400px" },
  },
  extend: {
   opacity: {
    35: "0.35",
    45: "0.45",
    55: "0.55",
    58: "0.58",
    62: "0.62",
    64: "0.64",
    65: "0.65",
    66: "0.66",
    68: "0.68",
    88: "0.88",
   },
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
    ink: "rgb(var(--ink) / <alpha-value>)",
    panel: "rgb(var(--panel) / <alpha-value>)",
    "panel-soft": "rgb(var(--panel-soft) / <alpha-value>)",
    line: "rgb(var(--line) / <alpha-value>)",
    mist: "rgb(var(--mist) / <alpha-value>)",
    primary: "rgb(var(--primary) / <alpha-value>)",
    "accent-ink": "rgb(var(--accent-ink) / <alpha-value>)",
    paper: "rgb(var(--paper) / <alpha-value>)",
    secondary: "#BFD962",
    tertiary: "#50AED3",
    quaternary: "#8BA651",
    quinary: "#BFD962",
    surface: "#0D1D2B",
    muted: "#91A4B5",
   },
   fontFamily: {
    display: ["Space Grotesk", "sans-serif"],
    body: ["Manrope", "sans-serif"],
   },
   boxShadow: {
    lift: "0 28px 80px -42px rgb(var(--shadow) / 0.55)",
   },
  },
 },
 plugins: [animate],
}
