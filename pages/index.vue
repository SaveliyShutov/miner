<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    const box = document.querySelector(".box")!;
    box.addEventListener("click", () => {
        gsap.to(box, {
            scale: 0.9,
            yoyo: true,
            duration: 0.2,
            repeat: 1
        });
    });

})
</script>
<template>
    <div class="main relative">
        <div class="flex flex-col items-center mt-20">
            <div
                class="col-span-1 relative inline-flex items-center justify-center w-28 h-28 overflow-hidden bg-green-800 rounded-full">
                <span class="unbounded-bold text-7xl text-white">S</span>
            </div>
            <span class="col-span-1 mt-3 unbounded-medium text-md text-white">Saveliy Shutov</span>
            <div class="flex items-center mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                    width="42" height="42" viewBox="0 0 256 256" xml:space="preserve">
                    <defs>
                    </defs>
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <circle cx="30.878" cy="72.818" r="17.178"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,164); fill-rule: nonzero; opacity: 1;"
                            transform="  matrix(1 0 0 1 0 0) " />
                        <circle cx="59.128" cy="72.818" r="17.178"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,164); fill-rule: nonzero; opacity: 1;"
                            transform="  matrix(1 0 0 1 0 0) " />
                        <rect x="32.86" y="12.83" rx="0" ry="0" width="24.28" height="66.06"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,164); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " />
                        <path
                            d="M 56.534 24.798 H 33.466 c -3.402 0 -6.161 -2.758 -6.161 -6.161 v -0.943 C 27.306 7.922 35.228 0 45 0 h 0 c 9.772 0 17.694 7.922 17.694 17.694 v 0.943 C 62.694 22.04 59.936 24.798 56.534 24.798 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,164); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                </svg>
                <p class="unbounded-bold text-5xl">1488</p>
            </div>
        </div>
        <button type="button" class="z-2 box absolute bottom-20 left-0 w-full text-black bg-white rounded-lg py-2.5">
            <p class="unbounded-regular text-lg ">сдать сперму</p>
        </button>
    </div>



</template>
<style>
.main {
    height: 85svh;
}

.particle {
    z-index: 1;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 9999px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>