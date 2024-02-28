// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  css: ["~/assets/css/tailwind.css"],
  primevue: {
    unstyled: true,
  },
});
