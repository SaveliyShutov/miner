<script setup lang="ts">
useHead({
  title: 'Plant Miner',
})

const userStore = useAuth()

// let tgId = ref(Number(window.Telegram.WebAppUser.id))
// let username = ref(window.Telegram.WebAppUser.username)
// let is_bot = ref(window.Telegram.WebAppUser.is_bot)

// alert(window.Telegram.WebAppUser)
// alert(window.Telegram.WebApp)

declare global {
  interface Window { Telegram: any; }
}

// let tgId = 885129018
// let username = 'SaveliyShutov'
// let is_bot = false

// await userStore.login(tgId.value, username.value, is_bot.value)

onBeforeMount(async () => {
  await $fetch('http://localhost:3030/auth/test', {
    method: 'POST',
    body: window.Telegram.WebApp
  })
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>