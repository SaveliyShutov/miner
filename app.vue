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

let tg_id = ref<any>(null)

watch(tg, (val) => {
  if (val) {
    setApp()
  }
})

watch(tg_id, (val) => {
  if (val) {
    setApp()
  }
})

let setApp = async () => {
  if (tg_id.value) {
    await userStore.login(Number(tg_id.value))
  }
  else {
    await userStore.login(Number(tg.value.id))
    localStorage.setItem('tgId', tg.value.id);
  }
}

onMounted(() => {
  tg_id.value = localStorage.getItem('tgId') ? localStorage.getItem('tgId') : null
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>