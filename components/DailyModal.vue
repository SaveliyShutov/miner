<script setup lang="ts">
import confetti from "canvas-confetti";
import useConfetti from "canvas-confetti"
const modal = useModal()

onMounted(() => {
    var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 20,
            scalar: 1.2,
            shapes: ['star']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
})
</script>
<template>
    <UModal :ui="{ background: 'bg-white dark:bg-neutral-900' }" fullscreen>
        <div class="flex items-center justify-center px-6">
            <div class="flex flex-col items-center mt-20">
                <img class="size-48" src="https://em-content.zobj.net/source/telegram/386/fire_1f525.webp">
                <span class="mt-5 unbounded-bold text-2xl text-white text-center">Ваши ежедневные подарочки</span>
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
                <button @click="modal.close()" type="button"
                    class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
                    <p class="unbounded-regular text-lg">
                        Да иди ты в жопу
                    </p>
                </button>
            </div>

        </div>
    </UModal>
</template>
