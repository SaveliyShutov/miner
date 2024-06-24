<script setup lang="ts">

let id = ref(window.Telegram.WebApp.WebAppUser.id)
let username = ref(window.Telegram.WebApp.WebAppUser.username)
let is_bot = ref(window.Telegram.WebApp.WebAppUser.is_bot)

// let id = '885129018'
// let username = 'SaveliyShutov'


declare global {
    interface Window { Telegram: any; }
}

onMounted(async () => {
  let data = await $fetch('http://localhost:3030/auth/login', {
    method: 'POST',
    body: {
      id: id.value,
      userName: username.value,
      is_bot: is_bot.value
    }
  })
  useHead({
    title: 'Plant Miner',
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