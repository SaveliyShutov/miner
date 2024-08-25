<script setup lang="ts">
useHead({
  title: 'Plant Miner',
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js'
    }
  ]
})
let route = useRoute()
let userStore = useAuth()

let _window: any = window

onMounted(async () => {
  let user: any = {}
  if (_window.Telegram.WebView.initParams.user) {
    user = JSON.parse(_window.Telegram.WebView.initParams.user)
    console.log('WebView.initParams.user: ', user);
  }
  if (!user.id) {
    user = _window.Telegram.WebApp.initDataUnsafe.user
  }
  _window.Telegram.WebApp.setHeaderColor('#121212')
  // в dev нет user, поэтому используем подставного
  if (user?.id) {
    await userStore.login(user)
  } else {
    await userStore.login({
      // '1155714398'
      id: '1155714398',
      first_name: 'Григорий',
      last_name: 'Дзюин',
      username: 'jet_green',
      language_code: "en"
    })
  }
  if (route.query.friend_tg_id) {
    if (user.id)
      await userStore.addNewFriend(route.query.friend_tg_id.toString(), user.id)
  }
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