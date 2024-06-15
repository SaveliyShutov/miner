<script setup lang="ts">
const route = useRoute()
let router = useRouter()

const links = [
    {
        label: 'Main',
        icon: 'i-heroicons-clock',
        to: '/'
    }, {
        label: 'Miner',
        icon: 'i-heroicons-clock',
        to: '/miner'
    },]
</script>

<template>
    <div class="fixed bottom-0 left-0 z-50 w-full h-16">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <button @click="router.push('/miner')" type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">Home</span>
            </button>
            <button type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24">
                    <path fill="currentColor"
                        d="M8.55 22q-.7 0-1.225-.425t-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1T15.45 22zM12 8q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v3q0 .825-.587 1.413T19 15H5q-.825 0-1.412-.587T3 13v-3h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8" />
                </svg>
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">Garden</span>
            </button>
            <button type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24">
                    <circle cx="9.001" cy="6" r="4" fill="currentColor" />
                    <ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4" />
                    <path fill="currentColor"
                        d="M21 17c0 1.657-2.036 3-4.521 3c.732-.8 1.236-1.805 1.236-2.998c0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.688 5.688 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001" />
                </svg>
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">Frends</span>
            </button>
            <button type="button"
                class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                    <path
                        d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                </svg>
                <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">Wallet</span>
            </button>
        </div>
    </div>
</template>
