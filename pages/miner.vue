<script setup lang="ts">
let count = ref<number>(0)

function tap() {
    count.value += 1
}

</script>
<template>

    <div class="grid grid-cols-6 gap-5">
        <div class="flex justify-center col-span-6">
            <p class="text-6xl font-medium">{{ count }} </p>
        </div>
        <div class="flex col-span-6">
            <UProgress :value="count" />
        </div>
        <div class="flex justify-center col-span-6">
            <UButton @click='tap()' :ui="{ rounded: 'rounded-full' }"
                class="bg-gradient-to-r from-emerald-200 to-emerald-300 active:from-emerald-300 to-emerald-200 size-96"
                variant="soft"></UButton>
        </div>
    </div>

</template>

<style>
/* @import url("~/assets/css/font.scss"); */
</style>