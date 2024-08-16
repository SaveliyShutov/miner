<script setup lang="ts">
import gsap from "gsap"
import { DailyModal } from '#components'

const modal = useModal()

let pageContainer: any = ref(null)
let { height } = useWindowSize()

function setMargin(newWindowHeight: number) {    
    if (pageContainer.value.offsetHeight >= (newWindowHeight - 90)) {
        // прибавляем высоту кнопки, чтобы можно было проскроллить
        pageContainer.value.style.paddingBottom = '48px'
    } else {
        pageContainer.value.style.paddingBottom = '0px'
    }
}

watch(height, (newWindowHeight) => {
    setMargin(newWindowHeight)
})

onMounted(() => {
    setMargin(height.value)

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
    <div ref="pageContainer">
        <div class="flex flex-col items-center pt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">S</span>
            </div>
            <span class="mt-3 unbounded-medium text-2xl text-white">Saveliy Shutov</span>
            <div class="flex items-center mt-10">
                <p class="unbounded-bold text-3xl">1488</p>
            </div>
        </div>
    </div>
    <!-- it's a global style -->
    <div class="bottom-button-container px-6">
        <button type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
            <p class="unbounded-regular text-lg">
                гриша какашка
            </p>
        </button>
    </div>
</template>
