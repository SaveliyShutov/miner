<script setup lang="ts">
import gsap from "gsap"
import { DailyModal } from '#components'

const userStore = useAuth()
const user = storeToRefs(userStore)
const modal = useModal()

let pageContainer: any = ref(null)
let { height } = useWindowSize()
let _window: any = window
let timeLeft = ref<string>('')


function getTimeLeft() {
    if (!userStore.user?.startEarnDate) return ''

    let startDate = new Date(userStore.user?.startEarnDate)
    // сколько СЕКУНД прошло с нажатия кнопки
    let timePassed = Math.floor((Date.now() - startDate.getTime()) / 1000)
    let delta = 8 * 60 * 60 - timePassed

    let hours = Math.floor(delta / 60 / 60)
    let minutes = Math.floor((delta - hours * 60 * 60) / 60)
    let seconds = delta - hours * 60 * 60 - minutes * 60

    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
}

function setMargin(newWindowHeight: number) {
    if (pageContainer.value.offsetHeight >= (newWindowHeight - 90)) {
        // прибавляем высоту кнопки, чтобы можно было проскроллить
        pageContainer.value.style.paddingBottom = '48px'
    } else {
        pageContainer.value.style.paddingBottom = '0px'
    }
}
async function startEarn() {
    await userStore.startEarn()
}

watch(height, (newWindowHeight) => {
    setMargin(newWindowHeight)
})

onMounted(async () => {
    setMargin(height.value)

    if (!timeLeft) {
        modal.open(DailyModal)
    }

    console.log(_window.Telegram);

    let user: any = {}
    if (_window.Telegram.WebView.initParams.user) {
        user = JSON.parse(_window.Telegram.WebView.initParams.user)
        console.log('WebView.initParams.user: ', user);
    }
    _window.Telegram.WebApp.setBackgroundColor('#121212')
    _window.Telegram.WebApp.setHeaderColor('#121212')
    // в dev нет user, поэтому используем подставного
    if (user.id) {
        await userStore.login(user)
    } else {
        await userStore.login({
            id: '1155714398',
            first_name: 'Григорий',
            last_name: 'Дзюин',
            username: 'jet_green',
            language_code: "en"
        })
    }
    setInterval(() => {
        timeLeft.value = getTimeLeft()
    }, 1000)
})
</script>
<template>
    <div ref="pageContainer">
        <div class="flex flex-col items-center pt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">{{ userStore.user?.first_name[0] }}</span>
            </div>
            <span class="mt-3 unbounded-medium text-2xl text-white">{{ userStore.user?.first_name }} {{
                userStore.user?.last_name }}</span>
            <div class="flex items-center mt-10">
                <p class="unbounded-bold text-7xl">1488</p>
            </div>
        </div>
    </div>
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->

    <!-- it's a global style -->
    <div class="bottom-button-container px-6">
        <button v-if="!timeLeft" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5" @click="startEarn">
            <p class="unbounded-regular text-lg" >
                начать
            </p>
        </button>
        <button v-else type="button" class="z-2 w-full text-zinc-400 bg-zinc-700 rounded-lg py-2.5">
            <p class="unbounded-regular text-lg">
                {{ timeLeft }}
            </p>
        </button>
    </div>
</template>
