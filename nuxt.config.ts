// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 modules: [
  "@nuxtjs/tailwindcss",
  "@hypernym/nuxt-anime",
  "nuxt-icon",
  "@nuxt/image",
  "shadcn-nuxt",
  "@nuxtjs/google-fo nts",
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
})
