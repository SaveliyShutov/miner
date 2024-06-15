<script setup lang="ts">
let count = ref<number>(0)
let energy = ref<number>(300)
let level = ref<number>(1)

function tap() {
    if (energy.value >= 0) {
        count.value += 1
        energy.value -= 1
    } else {
        alert('no more energy')
    }
}

</script>
<template>
    <div class="mt-10 h-full grid grid-cols-6 gap-5">
        <div class="flex align-center items-center justify-center col-span-6">
            <p class="text-7xl font-medium">{{ count }} </p>
        </div>
        <div class="flex col-span-6">
            <UMeter size="lg" :ui="{ wrapper: 'flex-row-reverse content-center items-center' }" :value="count"
                indicator>
                <template #indicator="{ percent }">
                    <div class="text-md font-medium">
                        {{ Math.round(percent) }}%
                    </div>
                </template>
            </UMeter>
            <!-- <UMeter :value="35" indicator /> -->
        </div>
        <div class="flex align-center justify-center col-span-6">
            <UButton @click='tap()' :ui="{ rounded: 'rounded-full' }"
                class="flex items-center justify-center bg-gradient-to-r from-emerald-300 to-emerald-400 active:from-emerald-400 active:to-emerald-300 size-64"
                variant="soft"> <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="white"
                        d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                </svg>
            </UButton>
        </div>
        <div class="h-full text-2xl font-medium flex justify-between col-span-6">
            <div class="flex align-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M11.997 21q-2.999 0-4.998-2.062Q5 16.875 5 13.803q0-1.36.62-2.74q.619-1.38 1.547-2.648q.93-1.269 2.006-2.392q1.077-1.124 2-1.956q.18-.161.393-.249q.212-.087.434-.087t.434.087t.393.25q.923.83 2 1.955q1.077 1.123 2.006 2.391t1.548 2.649t.619 2.74q0 3.072-2.002 5.135Q14.994 21 11.996 21m-.497-7.308v3.658q0 .202.199.244t.284-.123l2.358-4.56q.117-.213-.011-.408t-.343-.195H12.5V8.65q0-.202-.199-.244t-.284.123l-2.358 4.56q-.117.213.011.408t.343.195z" />
                </svg> {{ energy }}
            </div>
            <div>
                lvl {{ level }}
            </div>
        </div>
    </div>

</template>

<style>
/* @import url("~/assets/css/font.scss"); */
</style>