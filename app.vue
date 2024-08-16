<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js'
    }
  ]
})

// declare global {
//   interface Window { Telegram: any; }
// }

// const userStore = useAuth()
// let tg = ref<any>()
// tg.value = window.Telegram.WebApp.initDataUnsafe.user


// watch(tg, (val) => {
//   if (val) {
//     setApp()
//   }
// })

// let setApp = async () => {
//   await userStore.login(Number(tg.value.id))
//   localStorage.setItem('tgId', tg.value.id);
// }

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UModals />
  </div>
</template>