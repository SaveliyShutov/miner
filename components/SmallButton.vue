<script lang="ts" setup>
import useConfetti from "canvas-confetti";

const triggerConfetti = () => {
    useConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

let clicked = ref<boolean>(false)
let claimed = ref<boolean>(true)
</script>
<template>
    <button v-if="!clicked" @click="clicked = true; claimed = false" type="button"
        class="text-white bg-zinc-700 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        Start
    </button>
    <button v-if="!claimed && clicked == true" @click="claimed = true; triggerConfetti()" type="button"
        class="bg-pink-500 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        Claim
    </button>
    <div v-if="claimed && clicked == true" class="text-zinc-600 text-center px-5 py-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" />
        </svg>
    </div>
</template>