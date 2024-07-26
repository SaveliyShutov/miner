<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }]
})

declare global {
  interface Window { Telegram: any; }
}

const userStore = useAuth()
const tg = window.Telegram.WebApp.initDataUnsafe.user

// let tgId = 885129018
// let username = 'SaveliyShutov'
// let is_bot = false


watch(tg, (val) => {
  setApp()
})

let setApp = async () => {
  await userStore.login(Number(tg.id), tg.username, tg.is_bot)
}

// onMounted(async () => {
//   await setApp()
// })
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>