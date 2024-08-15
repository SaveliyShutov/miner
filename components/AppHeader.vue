<script setup lang="ts">
const route = useRoute()
let router = useRouter()

</script>

<template>
    <div class="fixed bottom-5 left-0 z-50 w-full h-16">
        <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
            <button @click="router.push('/')" type="button"
                class="inline-flex flex-col items-center justify-center px-5 group">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-400 group-hover:text-gray-300" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                        <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                    </g>
                </svg>
                <span class="text-sm dark:text-gray-400 group-hover:text-gray-200">Home</span>
            </button>
            <button @click="router.push('/friends')" type="button" class="inline-flex flex-col items-center justify-center px-5 group">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                    class=" text-gray-400 group-hover:text-gray-300" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0m6 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0M7 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                </svg>
                <span class="text-sm dark:text-gray-400 group-hover:text-gray-200">Friends</span>
            </button>
            <button type="button" class="inline-flex flex-col items-center justify-center px-5 group">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                    class=" text-gray-400 group-hover:text-gray-300" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                        <path
                            d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
                        <path d="M20 12v4h-4a2 2 0 0 1 0-4z" />
                    </g>
                </svg>
                <span class="text-sm dark:text-gray-400 group-hover:text-gray-200">Wallet</span>
            </button>
        </div>
    </div>
</template>
