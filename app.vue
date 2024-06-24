<script setup lang="ts">

declare global {
    interface Window { Telegram: any; }
}

onMounted(async () => {
  let data = await $fetch('http://localhost:3030/auth/login', {
    method: 'POST',
    body: {
      id: '885129018',
      userName: 'SaveliyShutov'
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