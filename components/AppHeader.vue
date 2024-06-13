<script setup lang="ts">
const route = useRoute()

const links = [{
    label: 'Timer',
    icon: 'i-heroicons-clock',
    to: '/timer'
}, {
    label: 'To-do',
    icon: 'i-heroicons-clipboard-document-check',
    to: '/to-do'
}, {
    label: 'Group',
    icon: 'i-heroicons-user-group',
    to: '/group'
},
{
    label: 'Miner',
    icon: 'i-heroicons-user-group',
    to: '/miner'
}]
</script>

<template>
    <UHorizontalNavigation :links="links" />
</template>
