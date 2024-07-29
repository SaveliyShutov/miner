<script setup lang="ts">

const userStore = useAuth()
const { user, isAuth } = storeToRefs(userStore)
let router = useRouter()

let count = ref<number>(0)
let time = ref('08:00:00')
let timerLimit = ref<number>(user.value.timerLimit)
let previousTime = ref<number>(86400)

let visible = ref<boolean>(false)
let isWaiting = ref<boolean>(user.value.isWaiting)

function closeModal() {
    visible.value = !visible.value
}

async function openBox() {
    console.log(user.value);
    await userStore.openBox(userStore.user._id)
    // visible.value = !visible.value
    isWaiting.value = true
}

// timer logics 
function timer() {
    previousTime.value -= 1
    time.value = secondsToHms(previousTime.value)
}

function secondsToHms(d: number) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h <= 9 ? `0${h}:` : `${h}:`
    let mDisplay = m <= 9 ? `0${m}:` : `${m}:`
    var sDisplay = s <= 9 ? `0${s}` : `${s}`

    return hDisplay + mDisplay + sDisplay;
}

onMounted(() => {

})

onBeforeMount(() => {
})


</script>
<template>
    <div class="flex flex-col">
        <p class="font-medium">tg {{ user.tgId }} </p>
        <div class="flex flex-col">
            <div class="text-white h-full mt-3 grid grid-cols-6 gap-5">
                <div class="flex align-center items-center justify-center col-span-6">
                    <svg class="size-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                    </svg>
                    <p class="text-5xl font-medium">{{ count }} </p>
                </div>
            </div>
        </div>
        <div>
            <UButton v-if='!isWaiting' size="xl" block @click="openBox()"
                class="bg-gradient-to-r from-pink-500 to-yellow-500 ">
                <p class="text-white text-xl font-bold">Claim</p>
            </UButton>
            <UButton v-else disabled block size="xl" color="gray">
                <p class="text-white text-xl font-bold">{{ time }}</p>
            </UButton>
        </div>
    </div>
    <UModal v-model="visible" fullscreen>
        <div class="p-4">
            <BoxAnimation @closeModal="closeModal" />
        </div>
    </UModal>
</template>
<style></style>