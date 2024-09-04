<script setup lang="ts">
import gsap from "gsap"
import { DailyModal } from '#components'

const userStore = useAuth()
const modal = useModal()

let { user } = storeToRefs(userStore)
let pageContainer: any = ref(null)
let { height } = useWindowSize()
let _window: any = window
let timeLeft = ref<string>('')
let startTokenCount: number = 0;
let currentTokenCount = ref<number>(0)
let percentage = ref<number>(0)

// это нужно, чтобы использовать метод clearInterval
let intervalFunctionId: any;


let submitted = ref(false)
async function getTimeLeft() {
    // кароче я даун, поэтому, когда у нас 8 часов прошло или
    // пользователь ещё ни разу не наживал на кнопку, то функция возвращает -1
    if (!userStore.user?.startEarnDate) return '-1'

    let startDate = new Date(userStore.user?.startEarnDate)
    // сколько СЕКУНД прошло с нажатия кнопки
    let timePassed = Math.floor((Date.now() - startDate.getTime()) / 1000)
    let delta = 8 * 60 * 60 - timePassed

    // если время закончилось, то начислить пользователю все токены, которые он заработал за 8 часов
    // И ОТПРАВИТЬ В БАЗУ
    if (delta < 0) {
        // доп защита, чтобы не попасть на миллионы от яндекса
        if (!submitted.value) {
            if (!userStore.user?.isClaimed) {
                currentTokenCount.value += 8 * 60 * 60 * 0.1
                percentage.value = 100 - Math.floor((currentTokenCount.value % 1) * Math.pow(10, 2)) * 100;
                await userStore.setTokenCount(currentTokenCount.value)
            }
        }
        submitted.value = true
        clearInterval(intervalFunctionId);
        return '-1'
    }
    // если время не закончилось, то начислить токены, которые он заработал за это время
    // В БАЗУ !НЕ! ОТПРАВЛЯТЬ
    currentTokenCount.value = startTokenCount + timePassed * 0.1
    percentage.value = Math.round(100 - (currentTokenCount.value - Math.trunc(currentTokenCount.value)) * 100)

    let hours = Math.floor(delta / 60 / 60)
    let minutes = Math.floor((delta - hours * 60 * 60) / 60)
    let seconds = delta - hours * 60 * 60 - minutes * 60

    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
}

function setMargin(newWindowHeight: number) {
    if (pageContainer.value.offsetHeight >= (newWindowHeight - 90)) {
        // прибавляем высоту кнопки, чтобы можно было проскроллить
        pageContainer.value.style.paddingBottom = '56px'
    } else {
        pageContainer.value.style.paddingBottom = '0px'
    }
}
async function startEarn() {
    await userStore.startEarn()
    intervalFunctionId = setInterval(async () => {
        timeLeft.value = await getTimeLeft()
        let tokenCountElement = document.getElementById('token-count')
        if (tokenCountElement) {
            gsap.to(tokenCountElement, {
                duration: 0.41,
                text: String(Math.floor(currentTokenCount.value)),
            })
        }
    }, 1000)
}

watch(height, (newWindowHeight) => {
    setMargin(newWindowHeight)
})
watch(user, (newUser) => {
    currentTokenCount.value = userStore.user?.tokenCount ?? 0
    startTokenCount = userStore.user?.tokenCount ?? 0
})
onMounted(async () => {
    setMargin(height.value)

    if (!timeLeft) {
        modal.open(DailyModal)
    }
    currentTokenCount.value = userStore.user?.tokenCount ?? 0
    startTokenCount = userStore.user?.tokenCount ?? 0

    timeLeft.value = await getTimeLeft()
    intervalFunctionId = setInterval(async () => {
        timeLeft.value = await getTimeLeft()
        let tokenCountText = document.getElementById('token-count')
        if (tokenCountText) {
            gsap.to(tokenCountText, {
                duration: 0.41,
                text: String((Math.floor(currentTokenCount.value))),
            })
        }
    }, 1000)
})
onUnmounted(() => {
    clearInterval(intervalFunctionId);
})
</script>
<template>
    <div ref="pageContainer">
        <div class="flex flex-col items-center pt-20">
            <div class="flex items-center justify-center w-28 h-28 bg-green-800 rounded-full">
                <span class="unbounded-bold text-6xl text-white">{{ userStore.user?.first_name[0] }}</span>
            </div>
            <span class="mt-3 unbounded-medium text-xl text-white">{{ userStore.user?.first_name }} {{
                userStore.user?.last_name }}</span>
            <div class="relative size-60 mt-10">
                <svg class="spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke-linecap="round" class="progress stroke-pink-800" stroke-width='10'
                        stroke-dasharray="20" fill="none" cx="50" cy="50" r="42" />
                </svg>
                <!-- Percentage Text -->
                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div class="text-white flex items-center" style="overflow-x: hidden;">
                        <p class="unbounded-bold overflow-hidden text-5xl" id="token-count"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->
    <!-- don't move elements from pageConteiner -->

    <!-- it's a global style -->
    <div class="bottom-button-container px-6">
        <button v-if="timeLeft == '-1'" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5"
            @click="startEarn">
            <p class="unbounded-regular text-lg">
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

<style>
@keyframes progress {
    0% {
        stroke-dasharray: 20;
    }

    100% {
        stroke-dasharray: 283;
    }
}

@keyframes svg--animation {
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(720deg)
    }
}

.progress {
    animation: progress 10s ease-in infinite;
    animation-direction: alternate-reverse;
}

.spinner {
    animation: 10s ease-in infinite svg--animation;
    animation-direction: alternate-reverse;
}
</style>