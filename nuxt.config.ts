export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui",'@nuxtjs/color-mode'],
  colorMode: {
    preference: 'dark'
  }
})