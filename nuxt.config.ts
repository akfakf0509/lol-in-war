// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/lol-in-war",
    buildAssetsDir: "assets",
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
  ssr: false,
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
