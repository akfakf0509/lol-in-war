// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["nuxt-mongoose", "radix-vue/nuxt"],
  mongoose: {
    options: {
      dbName: process.env.MONGODB_NAME,
    },
    uri: process.env.MONGODB_URI,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
