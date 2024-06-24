<script setup lang="ts">

let id = ref(window.Telegram.WebApp.id)
let username = ref(window.Telegram.WebApp.username)
let is_bot = ref(window.Telegram.WebApp.is_bot)

// let id = '885129018'
// let username = 'SaveliyShutov'


declare global {
    interface Window { Telegram: any; }
}

onMounted(async () => {
  alert(window.Telegram.WebApp.WebAppUser)
  let data = await $fetch('http://localhost:3030/auth/login', {
    method: 'POST',
    body: {
      id: id.value,
      userName: username.value,
      is_bot: is_bot.value
    }
  })
  console.log(data);


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