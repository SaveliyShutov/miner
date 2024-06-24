<script setup lang="ts">

let id = ref(window.Telegram.WebApp.id)
let username = ref(window.Telegram.WebApp.username)

declare global {
    interface Window { Telegram: any; }
}

onMounted(async () => {
  let data = await $fetch('http://localhost:3030/auth/login', {
    method: 'POST',
    body: {
      id: id,
      userName: username
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