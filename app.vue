<script setup lang="ts">
import { toast } from 'vue3-toastify';

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
  let friendTgId = _window.Telegram.WebApp?.initDataUnsafe?.start_param
  // console.log(friendTgId);
  // в dev нет user, поэтому используем подставного
  if (user?.id) {
    console.log('logged in user:', user);
    
    await userStore.login(user)
  } else {
    toast('Wtf? tguser не найден', {
      type: 'error'
    })
    await userStore.login({
      // '1155714398'
      id: '885129018',
      first_name: 'Савелий',
      last_name: 'Дзюин',
      username: 'SaveliyShutov',
      language_code: "ru"
    })
  }
  if (friendTgId) {
    if (user.id)
      await userStore.addNewFriend(friendTgId, user.id)
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