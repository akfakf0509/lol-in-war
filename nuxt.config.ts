// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/root.scss"],
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore"],
  },
});
