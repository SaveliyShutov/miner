<script setup lang="ts">
let props = defineProps<{
    isOpen: boolean
}>()

let emit = defineEmits(['close'])

let { isOpen } = toRefs(props)
</script>
<template>
    <UModal :ui="{ background: 'bg-white dark:bg-neutral-900' }" fullscreen v-model="isOpen">
        <div class="flex items-center justify-center">
            <div class="flex flex-col items-center mt-20">
                <img class="size-48"
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Clown%20Face.webp">
                <span class="mt-5 unbounded-bold text-1xl text-white text-center">Ваши друзья клоуны</span>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full px-6 pb-4">
            <button @click="emit('close')" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
                <p class="unbounded-regular text-lg">
                    Скопировать ссылку
                </p>
            </button>
        </div>
    </UModal>
</template>
