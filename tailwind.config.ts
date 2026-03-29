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
    primary: "#1f2937",
    secondary: "#b68a35",
    tertiary: "#111827",
    quaternary: "#6b7280",
    quinary: "#f3f4f6",
    surface: "#ffffff",
    muted: "#4b5563",
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
    "radial-gradient": "radial-gradient(rgba(182,138,53,0.2) 2px, transparent 2px)",
    "neon-grid":
     "radial-gradient(circle at 12% 22%, rgba(255,255,255,0.72), transparent 44%), radial-gradient(circle at 88% 10%, rgba(249,250,251,0.85), transparent 36%), radial-gradient(circle at 18% 76%, rgba(229,231,235,0.75), transparent 42%), radial-gradient(circle at 82% 68%, rgba(255,255,255,0.7), transparent 40%)",
   },
   backgroundColor: {
    "custom-blue": "#b68a35",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
   boxShadow: {
    glow: "0 20px 70px rgba(15,23,42,0.12), 0 10px 30px rgba(17,24,39,0.08)",
   },
  },
 },
 plugins: [animate],
}
