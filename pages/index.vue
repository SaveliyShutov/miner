<script setup lang="ts">
import gsap from "gsap"
import { DailyModal } from '#components'

const userStore = useAuth()
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

let _window: any = window
let initDataUnsafe = ref<any>({
    query_id: "eto kto voobshe?",
    user: {
        // it's my actual id
        id: 1155714398,
        first_name: 'Григорий',
        last_name: 'Дзюин',
        username: 'jet_green',
        language_code: "en"
    },
    auth_date: Date.now(),
    hash: 'da xep ego znaet'
})

onMounted(async () => {
    if (_window.Telegram.WebApp?.initDataUnsafe?.user?.id) {
        initDataUnsafe.value = _window.Telegram.WebApp.initDataUnsafe
    }
    if (initDataUnsafe.value.user?.id) {
        await userStore.login(initDataUnsafe.value?.user)
    }
    if (_window.Telegram.ThemeParams) {
        _window.Telegram.ThemeParams.bg_color = '#121212'
    }
})
</script>
<template>
    <div ref="pageContainer">
        <div class="flex flex-col items-center pt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">S</span>
            </div>
            <span class="mt-3 unbounded-medium text-2xl text-white">{{ userStore.user?.first_name }} {{ userStore.user?.last_name }}</span>
            <div class="flex items-center mt-10">
                <p class="unbounded-bold text-3xl">1488</p>
            </div>
        </div>
        <div>
            {{ _window.WebApp?.initDataUnsafe }}
            <hr>
            {{ _window.Telegram.WebApp }}
            <hr>
            {{ _window.Telegram.WebApp.ThemeParams }}
        </div>
    </div>
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->


    <!-- it's a global style -->
    <div class="bottom-button-container px-6">
        <button type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
            <p class="unbounded-regular text-lg">
                гриша какашка
            </p>
        </button>
    </div>
</template>
