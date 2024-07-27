<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }]
})

declare global {
  interface Window { Telegram: any; }
}

const userStore = useAuth()
let tg = ref<any>()


watch(tg, (newVal) => {
  if (newVal) {
    setApp()
  }
})

let setApp = async () => {
  await userStore.login(Number(tg.value.id), tg.value.username, tg.value.is_bot)
}

onMounted(async () => {
  // test 
  // let tgId = 885129018
  // let username = 'SaveliyShutov'
  // let is_bot = false
  // await userStore.login(tgId, username, is_bot)

  tg.value = window.Telegram.WebApp.initDataUnsafe.user
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>