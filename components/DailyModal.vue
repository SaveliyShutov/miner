<script setup lang="ts">
const modal = useModal()
</script>
<template>
    <UModal :ui="{ background: 'bg-white dark:bg-neutral-900' }" fullscreen>
        <div class="flex items-center justify-center">
            <div class="flex flex-col items-center mt-20">
                <img class="size-48" src="https://em-content.zobj.net/source/telegram/386/fire_1f525.webp">
                <span class="mt-5 unbounded-bold text-1xl text-white text-center">Ваши ежедневные подарочки</span>
            </div>


            <div class="absolute bottom-0 left-0 w-full px-6 pb-4">
                <div class="grid grid-cols-2 gap-4 w-full mb-5">
                    <div
                        class="h-32 border-4 border rounded-lg border-zinc-800 text-center flex flex-col justify-center items-center">
                        <p class="text-3xl font-bold text-start"> 10</p>
                        <p class="text-base font-medium text-zinc-400 text-start"> коины</p>
                    </div>
                    <div
                        class="h-32 border-4 border rounded-lg border-zinc-800 text-center flex flex-col justify-center items-center">
                        <p class="text-3xl font-bold text-start"> 5</p>
                        <p class="text-base font-medium text-zinc-400 text-start">повесток</p>
                    </div>
                </div>
                <!-- <p class="text-base font-medium text-start flex align-center mb-5 text-zinc-400">Ну зайди ты завтра пж,
                    если не зайдешь то все напрасно!</p> -->
                <button @click="modal.close()" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
                    <p class="unbounded-regular text-lg">
                        Да иди ты в жопу
                    </p>
                </button>
            </div>

        </div>
    </UModal>
</template>
