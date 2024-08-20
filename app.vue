<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js'
    }
  ]
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UModals />
  </div>
</template>