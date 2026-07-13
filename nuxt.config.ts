// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 modules: [
  "@nuxtjs/tailwindcss",
  "nuxt-icon",
  "@nuxt/image",
  "shadcn-nuxt",
  "@nuxtjs/google-fonts",
  "@nuxtjs/seo",
 ],
 css: ["~/assets/css/tailwind.css", "animate.css/animate.min.css"],
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
    "Space Grotesk": true,
    Inter: true,
    "Playfair Display": true,
    Roboto: true,
    Montserrat: true,
   "Open Sans": true,
   Merriweather: true,
   Lora: true,
   Pridi: true,
   "Zilla Slab": true,
   "Cormorant Garamond": true,
   "DM Serif Display": true,
  },
  prefetch: true,
  preconnect: true,
  display: "swap",
 },

 //  nuxt image
 image: {
  cloudinary: {
   baseURL: "https://res.cloudinary.com/dckmlqzgd/image/upload/",
  },
 },

 // seo
 site: {
  url: "https://dansomconsultancy.org",
  name: "Dansom Research & Consultancy",
  title: "Dansom Research & Consultancy",
  description:
   "Research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
  defaultLocale: "en",
  indexable: true,
 },

 //transitions
 app: {
  head: {
   htmlAttrs: {
    lang: "en",
   },
   title: "Dansom Research & Consultancy",
   titleTemplate: (titleChunk) =>
    titleChunk && titleChunk !== "Dansom Research & Consultancy"
     ? `${titleChunk} | Dansom Research & Consultancy`
     : "Dansom Research & Consultancy",
   templateParams: {
    siteName: "Dansom Research & Consultancy",
   },
   link: [
    { rel: "canonical", href: "https://dansomconsultancy.org" },
   ],
   meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "application-name", content: "Dansom Research & Consultancy" },
    { name: "apple-mobile-web-app-title", content: "Dansom Research & Consultancy" },
    { name: "author", content: "Dansom Research & Consultancy" },
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
