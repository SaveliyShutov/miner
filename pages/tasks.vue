<script setup lang="ts">
onMounted(() => {
})
</script>
<template>
    <div class="flex justify-start flex-col">

        <div class="mt-20 relative inline-flex items-center">
            <p class="text-1xl unbounded-bold">Tasks</p>
            <div class="relative -top-3 text-md unbounded-bold">
                3</div>
        </div>
        <p class="text-base font-medium text-start flex align-center mt-5 text-zinc-400">Выполняй задания, умней прям как в школе</p>

        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V184a12 12 0 0 0-24 0v27.13A84.18 84.18 0 0 1 44.87 140H72a12 12 0 0 0 0-24H44.87A84.18 84.18 0 0 1 116 44.87V72a12 12 0 0 0 24 0V44.87A84.18 84.18 0 0 1 211.13 116H184a12 12 0 0 0 0 24h27.13A84.18 84.18 0 0 1 140 211.13"/></svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate text-base unbounded-medium">Сдай батю на сво</p>
                <p class="text-sm text-zinc-300 unbounded-medium">+1000 iq</p>
            </div>
            <SmallButton></SmallButton>
        </div>
        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 11.95q.725-.8 1.113-1.825T14 8t-.387-2.125T12.5 4.05q1.5.2 2.5 1.325T16 8t-1 2.625t-2.5 1.325M18 20v-3q0-.9-.4-1.713t-1.05-1.437q1.275.45 2.363 1.163T20 17v3zm2-7v-2h-2V9h2V7h2v2h2v2h-2v2zM8 12q-1.65 0-2.825-1.175T4 8t1.175-2.825T8 4t2.825 1.175T12 8t-1.175 2.825T8 12m-8 8v-2.8q0-.85.438-1.562T1.6 14.55q1.55-.775 3.15-1.162T8 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T16 17.2V20zm8-10q.825 0 1.413-.587T10 8t-.587-1.412T8 6t-1.412.588T6 8t.588 1.413T8 10m-6 8h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T8 15t-2.775.338T2.5 16.35q-.225.125-.363.35T2 17.2zm6 0"/></svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate  text-base font-medium unbounded-medium">Пригласи 20 бомжей</p>
                <p class="text-sm text-zinc-300 font-medium unbounded-medium">+100 iq / друг</p>
            </div>
            <SmallButton></SmallButton>
        </div>
        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.689q.142 0 .276-.044q.134-.043.245-.149q.608-.552 1.15-1.079q.543-.527.955-1.029t.66-.985t.249-.93q0-.83-.568-1.383q-.567-.551-1.367-.551q-.496 0-.899.204q-.403.205-.701.515q-.26-.31-.678-.515q-.418-.204-.884-.204q-.8 0-1.367.552q-.567.551-.567 1.382q0 .446.238.93q.239.484.651.986t.955 1.028t1.13 1.08q.112.105.246.148q.134.044.276.044M6.616 20q-.672 0-1.144-.472T5 18.385v-7.53l-1.538 1.199q-.178.135-.366.104t-.323-.208t-.11-.365q.023-.189.195-.324l8.148-6.259q.217-.162.472-.243T12 4.68t.513.08t.462.243l8.173 6.26q.171.134.193.322q.02.189-.114.366q-.135.171-.323.202q-.188.03-.36-.104L19 10.856v7.529q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h10.769q.269 0 .442-.173t.173-.442V10.1l-5.634-4.286q-.154-.135-.366-.135t-.365.134L6 10.1v8.285q0 .269.173.442t.443.173m0 0H6h12z"/></svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate text-base font-medium unbounded-medium">Порадуй маму</p>
                <p class="text-sm text-zinc-300 font-medium unbounded-medium">+150 iq</p>
            </div>
            <SmallButton></SmallButton>
        </div>


        <div class="mt-10 relative inline-flex items-center">
            <p class="text-1xl unbounded-bold">Socials</p>
            <div class="relative -top-3 text-md unbounded-bold">
                4</div>
        </div>
        <p class="text-base font-medium text-start flex align-center mt-5 text-zinc-400">Ну подпишсь пж, а мы тебе
            копеек насыпем честно!</p>

        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.052l1.65 1.015q.217.137.444-.022q.227-.158.172-.426l-.443-1.886l1.47-1.264q.21-.186.12-.431q-.09-.246-.363-.27l-1.917-.176l-.76-1.761q-.106-.242-.373-.242t-.373.242l-.76 1.761l-1.917.175q-.273.025-.363.27t.12.432l1.47 1.264l-.442 1.886q-.056.268.17.426q.228.159.445.022zM9.073 19H6.616q-.672 0-1.144-.472T5 17.385v-2.458l-1.79-1.796q-.237-.243-.349-.538T2.75 12t.112-.593t.347-.538L5 9.073V6.616q0-.672.472-1.144T6.616 5h2.457l1.796-1.79q.243-.237.538-.349T12 2.75t.593.112t.538.347L14.927 5h2.458q.67 0 1.143.472q.472.472.472 1.144v2.457l1.79 1.796q.237.243.349.538t.111.593t-.111.593t-.348.538L19 14.927v2.458q0 .67-.472 1.143q-.472.472-1.143.472h-2.458l-1.796 1.79q-.243.237-.538.349T12 21.25t-.593-.111t-.538-.348zm.427-1l2.058 2.058q.173.173.442.173t.442-.173L14.5 18h2.885q.269 0 .442-.173t.173-.442V14.5l2.058-2.058q.173-.173.173-.442t-.173-.442L18 9.5V6.616q0-.27-.173-.443T17.385 6H14.5l-2.058-2.058Q12.27 3.77 12 3.77t-.442.173L9.5 6H6.616q-.27 0-.443.173T6 6.616V9.5l-2.058 2.058q-.173.173-.173.442t.173.442L6 14.5v2.885q0 .269.173.442t.443.173zm2.5-6"/></svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate text-base font-medium unbounded-medium">Роман онлифанс</p>
                <p class="text-sm text-zinc-300 font-medium unbounded-medium">+1000 iq</p>
            </div>
            <SmallButton></SmallButton>
        </div>
        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07A7.971 7.971 0 0 1 12 4c4.41 0 8 3.59 8 8c0 4.07-3.06 7.44-7 7.94"/></svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate text-base font-medium unbounded-medium">Гриша приват</p>
                <p class="text-sm text-zinc-300 font-medium unbounded-medium">-999 iq</p>
            </div>
            <SmallButton></SmallButton>
        </div>
        <div class="mt-5 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11" />
            </svg>
            <div class="max-w-[60%] min-w-[60%]">
                <p class="truncate text-base font-medium unbounded-medium">Порадуй маму</p>
                <p class="text-sm text-zinc-300 font-medium unbounded-medium">+150 iq</p>
            </div>
            <SmallButton></SmallButton>
        </div>
    </div>
</template>
<style></style>
