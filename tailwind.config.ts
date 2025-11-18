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
    primary: "#050816",
    secondary: "#0ea5e9",
    tertiary: "#0a1a2f",
    quaternary: "#f59e0b",
    quinary: "#0b132b",
    surface: "#0f172a",
    muted: "#94a3b8",
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
    "radial-gradient": "radial-gradient(#47d3ff 2px, transparent 2px)",
    "neon-grid":
     "radial-gradient(circle at 10% 20%, rgba(14,165,233,0.25), transparent 35%), radial-gradient(circle at 90% 10%, rgba(244,63,94,0.2), transparent 25%), radial-gradient(circle at 20% 80%, rgba(245,158,11,0.18), transparent 30%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.22), transparent 28%)",
   },
   backgroundColor: {
    "custom-blue": "#47d3ff",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
   boxShadow: {
    glow: "0 20px 80px rgba(14,165,233,0.25), 0 10px 40px rgba(255,255,255,0.05)",
   },
  },
 },
 plugins: [animate],
}
