<script setup lang="ts">
let route = useRoute()

let clickLevel = ref<number>(1)
let waterLevel = ref<number>(1)
let farmerLevel = ref<number>(0)

let waterAmmount = ref<number>(1000+(waterLevel.value-1)*500)

let count = ref<number>(Number(route.query.count))

function upgrateClick() {
    if (count.value >= 100) {
        clickLevel.value += 1
        count.value -= 100
        localStorage.setItem('click', clickLevel.value.toString())
        localStorage.setItem('count', count.value.toString())
    }

}
function upgrateWater() {
    if (count.value >= 100) {
        waterLevel.value += 1
        waterAmmount.value += 500
        count.value -= 100
        localStorage.setItem('water', waterLevel.value.toString())
        localStorage.setItem('count', count.value.toString())
    }

}

onMounted(() => {
    clickLevel.value = Number(localStorage.getItem('click')) ? Number(localStorage.getItem('click')) : 1
    waterLevel.value = Number(localStorage.getItem('water')) ? Number(localStorage.getItem('water')) : 1
})
</script>

<template>
    <div class="grid grid-cols-2 gap-2 mt-2">
        <div class="text-base">
            <UCard class="bg-gray-800 text-center text-xs" :ui="{ body: { padding: 'px-2 py-1 sm:p-3' } }">
                Click {{ clickLevel }} lvl
                <br>
                <p class="font-bold text-lg">{{ clickLevel }}</p>
            </UCard>
        </div>
        <div class="text-base">
            <UCard class="bg-gray-800 text-center text-xs" :ui="{ body: { padding: 'px-2 py-1 sm:p-3' } }">Water {{
                waterLevel }} lvl
                <br>
                <p class="font-bold text-lg">{{ waterAmmount }}</p>
            </UCard>
        </div>
    </div>
    <div class="flex align-center items-center justify-center col-span-6 mt-3">
        <svg class="size-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
        </svg>
        <p class="text-7xl  font-medium">{{ count }} </p>
    </div>
    <div class="flex justify-center mt-4">
        <div
            class="mt-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Прокачай своего бойца</h5>
            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li @click="upgrateClick()" class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"
                                        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.67.67 0 0 1 .198-.471a1.575 1.575 0 1 0-2.228-2.228a3.82 3.82 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.5 4.5 0 0 1 16.35 15m.002 0h-.002" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                                    Рука
                                </p>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm text-gray-400">
                                    +1 за тап
                                </p>
                            </div>
                            <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                                </svg>
                                100
                            </div>
                        </div>
                    </li>
                    <li @click="upgrateWater()" class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M11.5 13.692v3.658q0 .202.199.244t.284-.123l2.358-4.56q.117-.213-.011-.408t-.343-.195H12.5V8.65q0-.202-.199-.244t-.284.123l-2.358 4.56q-.117.213.011.408t.343.195zM11.997 21q-2.999 0-4.998-2.062Q5 16.875 5 13.803q0-1.36.62-2.74q.619-1.38 1.547-2.648q.93-1.269 2.006-2.392q1.077-1.124 2-1.956q.18-.161.393-.249q.212-.087.434-.087t.434.087t.393.25q.923.83 2 1.955q1.077 1.123 2.006 2.391t1.548 2.649t.619 2.74q0 3.072-2.002 5.135Q14.994 21 11.996 21M12 20q2.6 0 4.3-1.763T18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20m0-7.846" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                                    Лейка
                                </p>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm text-gray-400">
                                    +500 к объему
                                </p>
                            </div>
                            <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                                </svg>
                                100
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="m379.42 24.066l-28.059 87.407l28.268 5.941l-3.098 15.352l-52.25 47.843l-51.5-43.125l-23.404-4.093c8.217-14.33 14.683-32.77 16.404-49.594c10.02-2.28 34.92-5.675 46.094-10.059c-4.997-10.285-30.197-16.906-48.7-16.316c-1.733-20.713-8.88-29.054-34.155-27.902c-25.276 1.151-32.972 6.601-30.16 36.423c-18.866 4.127-38.097 12.616-39.74 27.084c7.87-.307 32.96-2.896 40.724-3.011c.66 14.1 4.4 27.847 9.97 36.375l-35.158-6.125L106 195.922l77.344 55.875l1.625 16.844l-34.19 215.75h38.375l38.315-169.25l47.873 169.25h37.47l-3.564-16.407l17.094 16.407l63.062-322.532c5.01-4.54 9.265-8.481 12.094-11.312c.177-10.537-2.537-18.942-5.094-24.5l.971-4.902l27.238 5.724l8.444-93.117l-22.846 68.781l-10.848-2.256l6.635-72.658l-21.568 69.55l-11.217-2.333zm26.578 3.553l.002-.01h-.002zM182.844 153.39l.344 64.095l-31.5-23.75zm88.031 21.252l50.875 45.937s22.993-19.456 44.875-38.531L309.187 467.61l-42.812-197.529z" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                                    Фермер
                                </p>
                            </div>
                            <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34c0 0-5 0-6.62 4.63c0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37c1.97-.26 3.86-.54 4.22-1.26c0 0-1.5 8.5-7 8.5c-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" />
                                </svg>
                                10M
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>