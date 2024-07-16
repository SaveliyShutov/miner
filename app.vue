<script setup lang="ts">
useHead({
  title: 'Plant Miner',
})

const userStore = useAuth()

let tgId = ref(Number(window.Telegram.WebApp.id))
let username = ref(window.Telegram.WebApp.username)
let is_bot = ref(window.Telegram.WebApp.is_bot)

declare global {
  interface Window { Telegram: any; }
}

// let tgId = 885129018
// let username = 'SaveliyShutov'
// let is_bot = false

await userStore.login(tgId.value, username.value, is_bot.value)
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>