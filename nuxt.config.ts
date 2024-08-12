export default defineNuxtConfig({
  css: ["/assets/style/main.scss"],
  ssr: false,
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", '@nuxtjs/color-mode', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  plugins: [
    '~/plugins/gsap.ts',
  ]
})
