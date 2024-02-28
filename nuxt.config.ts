// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-anime",
    "nuxt-icon",
    "@nuxt/image",
    "shadcn-nuxt",
  ],
  css: ["~/assets/css/tailwind.css"],
  shadcn: {
    /**
     * Prefix for all the imported componen
     */
    prefix: "UI",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
