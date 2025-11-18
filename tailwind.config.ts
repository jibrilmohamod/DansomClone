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
    primary: "#0d1117",
    secondary: "#d7b065",
    tertiary: "#131a23",
    quaternary: "#8c7357",
    quinary: "#111822",
    surface: "#0f141c",
    muted: "#d4d8df",
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
    "radial-gradient": "radial-gradient(#d7b065 2px, transparent 2px)",
    "neon-grid":
     "radial-gradient(circle at 12% 22%, rgba(215,176,101,0.22), transparent 35%), radial-gradient(circle at 88% 10%, rgba(140,115,87,0.2), transparent 25%), radial-gradient(circle at 18% 76%, rgba(111,137,155,0.16), transparent 30%), radial-gradient(circle at 82% 68%, rgba(215,176,101,0.18), transparent 28%)",
   },
   backgroundColor: {
    "custom-blue": "#d7b065",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
   boxShadow: {
    glow: "0 20px 80px rgba(0,0,0,0.35), 0 10px 40px rgba(215,176,101,0.18)",
   },
  },
 },
 plugins: [animate],
}
