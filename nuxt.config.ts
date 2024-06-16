export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/scripts"],
  colorMode: {
    preference: 'dark'
  },
})