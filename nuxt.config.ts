// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-anime",
    "nuxt-icon",
    "@nuxt/image",
  ],
  css: ["~/assets/css/tailwind.css"],
});
