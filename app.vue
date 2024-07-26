<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }]
})

declare global {
  interface Window { Telegram: any; }
}

const userStore = useAuth()
const tg = window.Telegram.WebApp

let tgId = ref(Number(tg.id))
let username = ref(tg.username)
let is_bot = ref(tg.is_bot)

await userStore.test(tg.initDataUnsafe.user)
await userStore.test(window.Telegram)
await userStore.login(tgId.value, username.value, is_bot.value)


// let tgId = 885129018
// let username = 'SaveliyShutov'
// let is_bot = false

// let setApp = async () => {
//   await userStore.login(tgId.value, username.value, is_bot.value)
// }

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