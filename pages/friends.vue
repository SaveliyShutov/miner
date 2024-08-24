<script setup lang="ts">
let modal = ref(false)
let pageContainer = ref()
let { height } = useWindowSize()
let userStore = useAuth()

function setMargin(newWindowHeight: number) {
  if (pageContainer.value.offsetHeight >= (newWindowHeight - 90)) {
    // прибавляем высоту кнопки, чтобы можно было проскроллить
    pageContainer.value.style.paddingBottom = '56px'
  } else {
    pageContainer.value.style.paddingBottom = '0px'
  }
}

watch(height, (newHeight) => {
  setMargin(newHeight)
})

onMounted(() => {
  setMargin(height.value)
})
</script>
<template>
  <div class="flex items-center justify-center px-6" ref="pageContainer">
    <div class="flex flex-col items-center">
      <img class="mt-10 mb-5 size-32"
        src="https://em-content.zobj.net/source/telegram/386/see-no-evil-monkey_1f648.webp">

      <p class="text-2xl unbounded-bold text-center">Приглашай друзей. Получай токены с ними</p>

      <div class="w-full mt-10  flex justify-start">
        <p class="text-base font-medium text-start flex align-center"><span class="banana mr-2">🍌</span>Скопируй
          ссылку</p>
      </div>
      <div class="w-full mt-5 flex justify-start">
        <p class="text-base font-medium text-start flex align-center"><span class="banana mr-2">🥭</span>Отправь другу
          и получи токены!</p>
      </div>

      <div class="w-full mt-20">
        <p class="text-lg unbounded-medium">3 frends</p>
        <ul class="max-w-md divide-y divide-zinc-200 dark:divide-zinc-700 mt-3">
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="https://sun3-22.userapi.com/s/v1/ig2/yTL_7obEkzrCdjTuQeImJCiNkjEDWIaLSnJCtk1nbH1XknvfB8VWzCWN_Q6LO69LCt1b8-51eAHuv-6L82Pw5ePo.jpg?quality=95&crop=233,282,546,546&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540&ava=1&u=yBYjsOc5HQKPd_8U7SR0uCQ4soQR9_V2XOf86JBdwxA&cs=200x200">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  jet_green
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="https://sun3-22.userapi.com/s/v1/ig2/zHzqGifAi7xtqq2ZlbZg7u5_iMVzwiL-iqwJLZi0C3rwlXk-BjmH9qx1LcNi6Ks5MG9mmiZQp3m62fjRjuUe_YW9.jpg?quality=95&crop=0,590,342,342&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=u0XfUphJhm_1o5LmYf7vpcZWDJIGw1IgDd_sSFwOHHE&cs=200x200" alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  SaveliyShutov
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="https://sun3-22.userapi.com/s/v1/ig2/XQgfW4P440LSmZ5vO-pyaoe6r0PTZoMQaFWz5FpZMjxqc4WNyxpKkAktL6MP4AuB-xZF--68IGIWTBoF9DMDb_cO.jpg?quality=95&crop=20,0,995,995&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=OzC0-T55mLQ0WmBcKzXeB0c5fiJQOXQSYlzCHucS_9U&cs=200x200"  alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  grachevrv
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <!-- <BottomButton @buttonClick="openModal"> пригласить друга </BottomButton> -->
    <InviteFriendModal :isOpen="modal" @close="modal = false" />
    <div class="bottom-button-container px-6">
      <button type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5" @click="modal = true">
        <p class="unbounded-regular text-lg">
          пригласить
        </p>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.banana {
  font-size: 30px;
}
</style>