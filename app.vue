<script setup lang="ts">
useHead({
  title: 'Plant Miner',
})

const userStore = useAuth()

// // let id = ref(window.Telegram.WebApp.WebAppUser.id)
// // let username = ref(window.Telegram.WebApp.WebAppUser.username)
// // let is_bot = ref(window.Telegram.WebApp.WebAppUser.is_bot)

// declare global {
//   interface Window { Telegram: any; }
// }

let tgId = 885129018
let username = 'SaveliyShutov'
let is_bot = false

await userStore.login(tgId, username, is_bot)

// onBeforeMount(async () => {
// })

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>