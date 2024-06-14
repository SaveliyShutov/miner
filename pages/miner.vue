<script setup lang="ts">
let count = ref<number>(0)
let energy = ref<number>(1000)

function tap() {
    count.value += 1
    energy.value -=1
}



</script>
<template>
    <div class="mt-4 grid grid-cols-6 gap-5">
        <div class="flex justify-center col-span-6">
            <UIcon name="material-symbols-light:potted-plant-outline-rounded" />
            <p class="text-6xl font-medium">{{ count }} </p>
        </div>
        <div class="flex col-span-6">
            <UMeter size="lg" :ui="{ wrapper: 'flex-row-reverse content-center items-center' }" :value="count" indicator>
                <template #indicator="{ percent }">
                    <div class="text-md font-medium">
                        {{ Math.round(percent) }}%
                    </div>
                </template>
            </UMeter>
                <!-- <UMeter :value="35" indicator /> -->
        </div>
        <div class="flex justify-center col-span-6">
            <UButton @click='tap()' :ui="{ rounded: 'rounded-full' }"
                class="bg-gradient-to-r from-emerald-300 to-emerald-400 active:from-emerald-400 active:to-emerald-300 size-64"
                variant="soft"></UButton>
        </div>
        <div class="mt-10 text-lg font-medium flex justify-between col-span-6">
            <div class="ml-5">
                {{ energy }}
            </div>
            <div >
                8000
            </div>
        </div>
    </div>

</template>

<style>
/* @import url("~/assets/css/font.scss"); */
</style>