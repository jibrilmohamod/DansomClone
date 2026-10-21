// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: false },
 modules: [
  "@nuxtjs/tailwindcss",
  "nuxt-icon",
  "@nuxt/image",
  "shadcn-nuxt",
  "@nuxtjs/google-fonts",
  "@nuxtjs/seo",
 ],
 css: ["~/assets/css/tailwind.css"],
 shadcn: {
  /**
   * Prefix for all the imported componen
   */
  prefix: "UI",
  /**
   * Directory that the component lives in.
   * @default "./com ponents/ui"
   */
  componentDir: "./components/ui",
 },
 googleFonts: {
  families: {
    "Space Grotesk": [500, 600, 700],
    Manrope: [400, 500, 600, 700],
  },
  prefetch: true,
  preconnect: true,
  display: "swap",
 },

 // seo
 site: {
  url: "https://dansomconsultancy.org",
  name: "Dansom Research & Consultancy",
  title: "Dansom Research & Consultancy",
  description:
   "Research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
 },

 //transitions
 app: {
  head: {
   htmlAttrs: {
    lang: "en",
   },
   title: "Dansom Research & Consultancy",
   titleTemplate: "%s | Dansom Research & Consultancy",
   link: [
    { rel: "icon", href: "/favicon.ico?v=production", sizes: "any" },
    { rel: "icon", href: "/favicon-16x16.png?v=production", type: "image/png", sizes: "16x16" },
    { rel: "icon", href: "/favicon-32x32.png?v=production", type: "image/png", sizes: "32x32" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=production", type: "image/png", sizes: "180x180" },
   ],
   meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "application-name", content: "Dansom Research & Consultancy" },
    { name: "apple-mobile-web-app-title", content: "Dansom Research & Consultancy" },
    { name: "author", content: "Dansom Research & Consultancy" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#F7F8F6", media: "(prefers-color-scheme: light)" },
    { name: "theme-color", content: "#08131F", media: "(prefers-color-scheme: dark)" },
    {
     name: "description",
     content:
      "Research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
    },
    { property: "og:site_name", content: "Dansom Research & Consultancy" },
    { property: "og:title", content: "Dansom Research & Consultancy" },
    {
     property: "og:description",
     content:
      "Research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://dansomconsultancy.org" },
    { property: "og:image", content: "https://dansomconsultancy.org/dansom-logo.png" },
    { property: "og:image:alt", content: "Dansom Research & Consultancy" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Dansom Research & Consultancy" },
    {
     name: "twitter:description",
     content:
      "Research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
    },
    { name: "twitter:image", content: "https://dansomconsultancy.org/dansom-logo.png" },
   ],
  },
  pageTransition: { name: "page", mode: "out-in" },
 },
})
