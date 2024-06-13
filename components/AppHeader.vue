<script setup lang="ts">
const route = useRoute()

const links = [
{
    label: 'Main',
    icon: 'i-heroicons-clock',
    to: '/'
},{
    label: 'Miner',
    icon: 'i-heroicons-clock',
    to: '/miner'
},]
</script>

<template>
    <UHorizontalNavigation :links="links" />
</template>
