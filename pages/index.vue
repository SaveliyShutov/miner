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
    <div class="column" >
        <div class="flex flex-col items-center mt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">S</span>
            </div>
            <span class="col-span-1 mt-3 unbounded-medium text-md text-white">Saveliy Shutov</span>
            <div class="flex items-center mt-10">
                <p class="unbounded-bold text-5xl">1488</p>
            </div>
        </div>
        <div class="w-full">
            <button type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
                <p class="unbounded-regular text-lg">
                    гриша какашка
                </p>
            </button>
        </div>
    </div>
</template>
<style>
.column {
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.particle {
    z-index: 1;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 9999px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
