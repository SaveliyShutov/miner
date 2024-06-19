<script setup lang="ts">

let router = useRouter()

let percent = ref<number>(0)
let count = ref<number>(0)
let energy = ref<number>(1000)
let currentLevel = ref<number>(1)
let isWater = ref<boolean>(false)
let click = ref<number>(1)
let maxEnergy = ref<number>(1000+500*currentLevel.value)

let levels = ref([
    { level: 2, count: 100 },
    { level: 3, count: 300 },
    { level: 4, count: 1000 },
    { level: 5, count: 3000 },
    { level: 6, count: 5000 },
    { level: 7, count: 10000 },
    { level: 8, count: 25000 },
    { level: 9, count: 50000 },
    { level: 10, count: 100000 },
    
])


function tap() {
    let nextLevel = levels.value[currentLevel.value - 1]
    percent.value = (count.value / nextLevel.count * 100)
    if (count.value >= nextLevel.count) {
        currentLevel.value += 1
    }

    if (energy.value > 0) {
        count.value += click.value
        energy.value -= click.value

    } else {
        isWater.value = true
    }
}

declare const window: any;
onMounted(()=>{
    count.value = Number(localStorage.getItem('count')) ? Number(localStorage.getItem('count')) : 0
    click.value = Number(localStorage.getItem('click')) ? Number(localStorage.getItem('click')) : 1
    energy.value = Number(localStorage.getItem('water')) ? Number(localStorage.getItem('water'))*500+1000 : 1000
    maxEnergy.value = Number(localStorage.getItem('water')) ? Number(localStorage.getItem('water'))*500+1000 : 1000
    currentLevel.value = Number(localStorage.getItem('currentLevel')) ? Number(localStorage.getItem('currentLevel')) : 1

})
onBeforeUnmount(() => {
    localStorage.setItem('count', count.value.toString())
    localStorage.setItem('currentLevel', currentLevel.value.toString())
    
})
</script>
<template>
    <div class="grid grid-cols-3 gap-2 mt-2">
        <div class="text-base">
            <UCard class="bg-gray-800 text-center text-xs" :ui="{ body: { padding: 'px-2 py-1 sm:p-3' } }">Your
                level
                <br>
                <p class="font-bold text-lg">{{ currentLevel }}</p>
            </UCard>
        </div>
        <div class="text-base">
            <UCard class="bg-gray-800 text-center text-xs" :ui="{ body: { padding: 'px-2 py-1 sm:p-3' } }">Per click
                <br>
                <p class="font-bold text-lg">{{ click }}</p>
            </UCard>
        </div>
        <div class="text-base">
            <UCard class="bg-gray-800 text-center text-xs" :ui="{ body: { padding: 'px-2 py-1 sm:p-3' } }">Next
                level
                <br>
                <p class="font-bold text-lg">{{ levels[currentLevel - 1].count }}</p>
            </UCard>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="text-white h-full mt-3 grid grid-cols-6 gap-5">
            <div class="flex align-center items-center justify-center col-span-6">
                <svg class="size-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                </svg>
                <p class="text-7xl  font-medium">{{ count }} </p>
            </div>
            <div class="flex col-span-6">
                <UMeter size="lg" :ui="{ wrapper: 'flex-row-reverse content-center items-center' }" :value="percent"
                    indicator>
                    <template #indicator="{ percent }">
                        <div class="text-md font-medium">
                            {{ Math.round(percent) }}%
                        </div>
                    </template>
                </UMeter>
            </div>
        </div>
    </div>
    <div @click="tap()" class="click mt-4 flex align-center justify-center">
        <UButton :disabled="isWater" :ui="{ rounded: 'rounded-full' }"
            class="img flex align-center justify-center bg-gradient-to-r from-emerald-300 to-emerald-400 active:from-emerald-400 active:to-emerald-300 "
            variant="soft">
            <img class="rounded-full" src="../assets/images/farmer.png">
        </UButton>
    </div>
    <div class="text-2xl fixed left-0 right-0 bottom-24 w-full font-medium flex justify-between items-center">
        <div class="ml-4 flex align-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M11.997 21q-2.999 0-4.998-2.062Q5 16.875 5 13.803q0-1.36.62-2.74q.619-1.38 1.547-2.648q.93-1.269 2.006-2.392q1.077-1.124 2-1.956q.18-.161.393-.249q.212-.087.434-.087t.434.087t.393.25q.923.83 2 1.955q1.077 1.123 2.006 2.391t1.548 2.649t.619 2.74q0 3.072-2.002 5.135Q14.994 21 11.996 21m-.497-7.308v3.658q0 .202.199.244t.284-.123l2.358-4.56q.117-.213-.011-.408t-.343-.195H12.5V8.65q0-.202-.199-.244t-.284.123l-2.358 4.56q-.117.213.011.408t.343.195z" />
            </svg> {{ energy }} / {{ maxEnergy }}
        </div>
        <div class="mr-4">
            <UButton @click="router.push({ path: '/update', query: { count: count } })" class="text-lg bg-gradient-to-r from-pink-500 to-yellow-500 ">
                <p class="text-white">update</p>
            </UButton>
        </div>
    </div>

</template>
<style>
.click:active {
  transform: scale(1.01);
}
.img {
    max-height: 18rem;
    max-width: 18rem;
}

@media (max-height: 600px) {
    .img {
        max-height: 15rem;
        max-width: 15rem;
    }
}
@media (min-height: 800px) {
    .img {
        max-height: 22rem;
        max-width: 22rem;
    }
}
</style>