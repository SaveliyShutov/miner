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
tg.value = window.Telegram.WebApp.initDataUnsafe.user

let tg_id = ref()
tg_id.value = localStorage.getItem('tgId')

watch(tg, (newVal) => {
  if (newVal) {
    setApp()
  }
})

watch(tg_id, (newVal) => {
  if (newVal) {
    setApp()
  }
})

let setApp = async () => {
  if (tg_id.value) {
    await userStore.login(Number(tg_id), '', false)
  }
  else {
    await userStore.login(Number(tg.value.id), tg.value.username, tg.value.is_bot)
    localStorage.setItem('tgId', tg.value.id);
  }
}

//test
// let tgId = 885129018
// let username = 'SaveliyShutov'
// let is_bot = false
// await userStore.login(tgId, username, is_bot)

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>