<script setup lang="ts">
import { toast } from 'vue3-toastify'

let props = defineProps<{
    isOpen: boolean
}>()

let emit = defineEmits(['close'])
let userStore = useAuth()

let { isOpen } = toRefs(props)

async function copyAndClose() {
    await navigator.clipboard.writeText(`https://t.me/PlantCoin_bot/8b673d4d-7fc0-433a-9d41-c19ba39e016a?startapp=${userStore.user?.id}`)
    toast('Скопирвано!', {
        type: "success",
        hideProgressBar: true,
        autoClose: 900
    })
    emit('close')
}
</script>
<template>
    <UModal :ui="{ background: 'bg-neutral-900 dark:bg-neutral-900' }" fullscreen v-model="isOpen">
        <div class="flex items-center justify-center px-6">
            <div class="flex flex-col items-center mt-20 text-white">
                <img class="size-48" src="https://em-content.zobj.net/source/telegram/386/people-hugging_1fac2.webp">

                <div class="flex flex-col justify-center">
                    <h2 class="mb-3 mt-10 text-2xl unbounded-bold text-white">Твои действия:</h2>
                    <ol class="max-w-md space-y-1 list-decimal list-inside text-4xl unbounded-regular text-pink-500">
                        <li>
                            <span class="text-lg text-white unbounded-light">Скопируй ссылку</span>
                        </li>
                        <li>
                            <span class="text-lg text-white unbounded-light">Отправь другу</span>
                        </li>
                        <li>
                            <span class="text-pink-500 text-4xl unbounded-regular">Получи награду и распишись!</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full px-6 pb-4">
            <button @click="copyAndClose" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
                <p class="unbounded-regular text-lg">
                    Скопировать ссылку
                </p>
            </button>
        </div>
    </UModal>
</template>
