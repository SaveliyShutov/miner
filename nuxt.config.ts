export default defineNuxtConfig({
  css: ["/assets/style/main.scss"],
  ssr: false,
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", '@pinia/nuxt', '@vueuse/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  plugins: [
    '~/plugins/gsap.ts',
  ]
})
