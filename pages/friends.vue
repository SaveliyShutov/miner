<script setup lang="ts">
let modal = ref(false)
let pageContainer = ref()
let { height } = useWindowSize()

function setMargin(newWindowHeight: number) {
  if (pageContainer.value.offsetHeight >= (newWindowHeight - 90)) {
    // прибавляем высоту кнопки, чтобы можно было проскроллить
    pageContainer.value.style.paddingBottom = '56px'
  } else {
    pageContainer.value.style.paddingBottom = '0px'
  }
}

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