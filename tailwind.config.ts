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
    primary: "#425E87",
    secondary: "#50AED3",
    tertiary: "#7CD2F0",
    quaternary: "#8BA651",
    quinary: "#BFD962",
    surface: "#ffffff",
    muted: "#3a4f70",
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
    "radial-gradient": "radial-gradient(rgba(80,174,211,0.24) 2px, transparent 2px)",
    "neon-grid":
     "radial-gradient(circle at 12% 22%, rgba(80,174,211,0.24), transparent 44%), radial-gradient(circle at 88% 10%, rgba(124,210,240,0.28), transparent 36%), radial-gradient(circle at 18% 76%, rgba(139,166,81,0.2), transparent 42%), radial-gradient(circle at 82% 68%, rgba(191,217,98,0.18), transparent 40%)",
   },
   backgroundColor: {
    "custom-blue": "#50AED3",
   },
   backgroundSize: {
    "12": "12px 12px",
   },
   boxShadow: {
    glow: "0 20px 70px rgba(66,94,135,0.16), 0 10px 30px rgba(80,174,211,0.14)",
   },
  },
 },
 plugins: [animate],
}
