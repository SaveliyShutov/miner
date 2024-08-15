<script setup lang="ts">
import gsap from "gsap"
import { DailyModal } from '#components'

const modal = useModal()

onMounted(() => {
    modal.open(DailyModal)
    
    const box = document.querySelector(".box")!
    box.addEventListener("click", () => {
        gsap.to(box, {
            scale: 0.9,
            yoyo: true,
            duration: 0.2,
            repeat: 1,
        })
    })
})
</script>
<template>
    <div class="flex items-center justify-center">
        <div class="flex flex-col items-center mt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">S</span>
            </div>
            <span class="mt-3 unbounded-medium text-2xl text-white">Saveliy Shutov</span>
            <div class="flex items-center mt-10">
                <p class="unbounded-bold text-5xl">1488</p>
            </div>
        </div>
        <BottomButton> гриша какашка </BottomButton>
    </div>
</template>
<style> 
</style>
