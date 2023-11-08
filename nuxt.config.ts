// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      link: [
        {
          rel: "stylesheet",
          href: "https://lolstatic-a.akamaihd.net/webfonts/live/css/fonts/beaufortforlol.css",
        },
        {
          rel: "stylesheet",
          href: "https://lolstatic-a.akamaihd.net/webfonts/live/css/fonts/spiegel.css",
        },
      ],
    },
  },
  css: ["@/assets/styles/root.scss"],
  modules: ["@pinia/nuxt"],
  pinia: {},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
});
