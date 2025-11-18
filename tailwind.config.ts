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
    primary: "#060a1a",
    secondary: "#7cf8ff",
    tertiary: "#0c132b",
    quaternary: "#9c7bff",
    quinary: "#0a132b",
    surface: "#070f22",
    muted: "#c7d8ff",
   },
   fontFamily: {
    display: ["Space Grotesk", "Montserrat", "Inter", "sans-serif"],
    body: ["Inter", "Open Sans", "Roboto", "sans-serif"],
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
    "radial-gradient": "radial-gradient(#7cf8ff 2px, transparent 2px)",
    "neon-grid":
     "radial-gradient(circle at 12% 22%, rgba(124,248,255,0.26), transparent 36%), radial-gradient(circle at 88% 10%, rgba(156,123,255,0.22), transparent 26%), radial-gradient(circle at 18% 76%, rgba(103,153,255,0.2), transparent 32%), radial-gradient(circle at 82% 68%, rgba(255,255,255,0.06), transparent 30%)",
   },
   backgroundColor: {
    "custom-blue": "#7cf8ff",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
   boxShadow: {
    glow: "0 20px 80px rgba(0,0,0,0.35), 0 10px 40px rgba(124,248,255,0.24)",
   },
  },
 },
 plugins: [animate],
}
