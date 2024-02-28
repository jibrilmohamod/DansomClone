// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "radix-vue/nuxt",
    "@hypernym/nuxt-anime",
  ],
  css: ["~/assets/css/tailwind.css"],
});
