<script setup lang="ts">

let emit = defineEmits(['closeModal'])

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Number(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
}

let randMax = ref<number>(getRandomInt(6, 10))
let count = ref<number>(1)

function onClick() {    

    const parent = document.getElementById('root') as HTMLElement;
    const child = document.getElementById('child') as HTMLElement;

    count.value += 1
    if (count.value <= randMax.value) {
        parent.removeChild(child)
        console.log(count.value);
        console.log(randMax.value);
        

        setTimeout(function () {
            parent.prepend(child)
        }, 250)
    } else{
        parent.removeChild(child)
        emit('closeModal')
    }


}

</script>
<template>
    <div class="ml-2 h-dvh flex items-center justify-center" @click="onClick()" id="root">
        <div id="child">
            <div>
                
            </div>
            <div class="sc-bdVaJa hCqOlD">
                <div class="sc-bwzfXH biqWkE">
                    <div class="sc-htpNat kGQype">
                        <div class="sc-bxivhb sc-dnqmqq ZEDDw">
                            <div class="sc-iwsKbI ekMwXW"></div>
                            <div class="sc-gZMcBi fujrhZ"></div>
                            <div class="sc-gqjmRU jRAgJu"></div>
                            <div class="sc-VigVT gpuqLL"></div>
                        </div>
                        <div class="sc-bxivhb sc-ifAKCX kLAltZ"></div>
                        <div class="sc-bxivhb sc-EHOje gvPWuP"></div>
                        <div class="sc-bxivhb sc-bZQynM ldKBkL"></div>
                        <div class="sc-bxivhb sc-gzVnrw fFMyeM"></div>
                        <div class="sc-bxivhb sc-htoDjs crPZsS"></div>
                    </div>
                </div>
            </div>
            <div class="text-xl text-end font-bold">
                {{ count }} / {{ randMax }}
            </div>
        </div>
    </div>
</template>
<style>

#root{
    height: 95vh;
}

.hCqOlD {
    -webkit-animation: hCClNo 0.3s ease-in;
    animation: hCClNo 0.3s ease-in;
    -webkit-transform: scale3d(0.6, 0.5, 0.6);
    -ms-transform: scale3d(0.6, 0.5, 0.6);
    transform: scale3d(0.6, 0.5, 0.6);
}

.hCqOlD div {
    box-sizing: border-box;
}

/* sc-component-id: sc-bwzfXH */
.biqWkE {
    width: 300px;
    height: 300px;
    -webkit-perspective: 1500px;
    -moz-perspective: 1500px;
    -ms-perspective: 1500px;
    perspective: 1500px;
    -webkit-animation: cRMhPG 0.7s;
    animation: cRMhPG 0.7s;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

/* sc-component-id: sc-htpNat */
.kGQype {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotate3d(1, 0, 0, -23deg) rotate3d(0, 1, 0, 50deg) translate3D(150px, 100px, -150px);
    -ms-transform: rotate3d(1, 0, 0, -23deg) rotate3d(0, 1, 0, 50deg) translate3D(150px, 100px, -150px);
    transform: rotate3d(1, 0, 0, -23deg) rotate3d(0, 1, 0, 50deg) translate3D(150px, 100px, -150px);
}

/* sc-component-id: sc-bxivhb */

/* fragile label*/
.kLAltZ {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    background: url("https://i.imgur.com/fkgSnbL.png8"),
        linear-gradient(to left, #f1e767 0%, #feb645 100%);
    background-repeat: no-repeat;
    background-size: 100px, auto;
    background-position: 10% 80%;
    -webkit-transform: translate3d(0, 0, 150px);
    -ms-transform: translate3d(0, 0, 150px);
    transform: translate3d(0, 0, 150px);
}

/* sc-component-id: sc-EHOje */
.gvPWuP {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    background: linear-gradient(45deg,
            #020201 0%,
            #7c5620 50%,
            #8e6425 51%,
            #f6d55a 100%);
    -webkit-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 150px);
    -ms-transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 150px);
    transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 150px);
}

/* sc-component-id: sc-bZQynM */
.ldKBkL {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    -webkit-transform: rotate3d(0, 1, 0, -90deg) translate3d(0, 0, 150px);
    -ms-transform: rotate3d(0, 1, 0, -90deg) translate3d(0, 0, 150px);
    transform: rotate3d(0, 1, 0, -90deg) translate3d(0, 0, 150px);
}

/* sc-component-id: sc-gzVnrw */
.fFMyeM {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    -webkit-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 150px);
    -ms-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 150px);
    transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 150px);
    background: linear-gradient(to left, #0a0a0a 0%, #7a551f 1%, #feb645 100%);
}

/* sc-component-id: sc-htoDjs */
.crPZsS {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    -webkit-transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 150px);
    -ms-transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 150px);
    transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 150px);
}

/* sc-component-id: sc-dnqmqq */
.ZEDDw {
    position: absolute;
    font-size: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    background: transparent;
    border: none;
    -webkit-transform: rotate3d(1, 0, 0, 90deg) translate3d(0, 0, 150px);
    -ms-transform: rotate3d(1, 0, 0, 90deg) translate3d(0, 0, 150px);
    transform: rotate3d(1, 0, 0, 90deg) translate3d(0, 0, 150px);
}

/* sc-component-id: sc-iwsKbI */
.ekMwXW {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #f1e767;
    border: 1px solid #888;
    background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
    -webkit-animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
}

/* sc-component-id: sc-gZMcBi */
.fujrhZ {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #f1e767;
    border: 1px solid #888;
    background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
    -webkit-animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    right: 0;
    -webkit-animation-name: iusdTg;
    animation-name: iusdTg;
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
}

/* sc-component-id: sc-gqjmRU */
.jRAgJu {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #f1e767;
    border: 1px solid #888;
    background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
    -webkit-animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    width: 100%;
    height: 50%;
    -webkit-animation-name: leamKW;
    animation-name: leamKW;
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
}

/* sc-component-id: sc-VigVT */
.gpuqLL {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #f1e767;
    border: 1px solid #888;
    background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
    -webkit-animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    animation: htGdjh 1s ease-in-out 0.5s 1 normal forwards;
    bottom: 0;
    width: 100%;
    height: 50%;
    -webkit-animation-name: diPYIz;
    animation-name: diPYIz;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
}

/* sc-component-id: sc-keyframes-hCClNo */
@-webkit-keyframes hCClNo {
    0% {
        -webkit-transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
        -ms-transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
        transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
    }

    100% {
        -webkit-transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
        -ms-transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
        transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
    }
}

@keyframes hCClNo {
    0% {
        -webkit-transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
        -ms-transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
        transform: translate3d(0, -195px, 0) scale3d(0.5, 0.5, 0.5);
    }

    100% {
        -webkit-transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
        -ms-transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
        transform: translate3d(0) scale3d(0.6, 0.5, 0.6);
    }
}

/* sc-component-id: sc-keyframes-cRMhPG */
@-webkit-keyframes cRMhPG {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        -ms-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        -ms-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        -ms-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes cRMhPG {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        -ms-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        -ms-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        -ms-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        -ms-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

/* sc-component-id: sc-keyframes-htGdjh */
@-webkit-keyframes htGdjh {
    from {
        -webkit-transform: rotate3d(0, 1, 0, 0deg);
        -ms-transform: rotate3d(0, 1, 0, 0deg);
        transform: rotate3d(0, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(0, 1, 0, -190deg);
        -ms-transform: rotate3d(0, 1, 0, -190deg);
        transform: rotate3d(0, 1, 0, -190deg);
    }

    70% {
        -webkit-transform: rotate3d(0, 1, 0, -150deg);
        -ms-transform: rotate3d(0, 1, 0, -150deg);
        transform: rotate3d(0, 1, 0, -150deg);
    }

    to {
        -webkit-transform: rotate3d(0, 1, 0, -190deg);
        -ms-transform: rotate3d(0, 1, 0, -190deg);
        transform: rotate3d(0, 1, 0, -190deg);
    }
}

@keyframes htGdjh {
    from {
        -webkit-transform: rotate3d(0, 1, 0, 0deg);
        -ms-transform: rotate3d(0, 1, 0, 0deg);
        transform: rotate3d(0, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(0, 1, 0, -190deg);
        -ms-transform: rotate3d(0, 1, 0, -190deg);
        transform: rotate3d(0, 1, 0, -190deg);
    }

    70% {
        -webkit-transform: rotate3d(0, 1, 0, -150deg);
        -ms-transform: rotate3d(0, 1, 0, -150deg);
        transform: rotate3d(0, 1, 0, -150deg);
    }

    to {
        -webkit-transform: rotate3d(0, 1, 0, -190deg);
        -ms-transform: rotate3d(0, 1, 0, -190deg);
        transform: rotate3d(0, 1, 0, -190deg);
    }
}

/* sc-component-id: sc-keyframes-iusdTg */
@-webkit-keyframes iusdTg {
    from {
        -webkit-transform: rotate3d(0, 1, 0, 0deg);
        -ms-transform: rotate3d(0, 1, 0, 0deg);
        transform: rotate3d(0, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(0, 1, 0, 170deg);
        -ms-transform: rotate3d(0, 1, 0, 170deg);
        transform: rotate3d(0, 1, 0, 170deg);
    }

    70% {
        -webkit-transform: rotate3d(0, 1, 0, 100deg);
        -ms-transform: rotate3d(0, 1, 0, 100deg);
        transform: rotate3d(0, 1, 0, 100deg);
    }

    to {
        -webkit-transform: rotate3d(0, 1, 0, 140deg);
        -ms-transform: rotate3d(0, 1, 0, 140deg);
        transform: rotate3d(0, 1, 0, 140deg);
    }
}

@keyframes iusdTg {
    from {
        -webkit-transform: rotate3d(0, 1, 0, 0deg);
        -ms-transform: rotate3d(0, 1, 0, 0deg);
        transform: rotate3d(0, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(0, 1, 0, 170deg);
        -ms-transform: rotate3d(0, 1, 0, 170deg);
        transform: rotate3d(0, 1, 0, 170deg);
    }

    70% {
        -webkit-transform: rotate3d(0, 1, 0, 100deg);
        -ms-transform: rotate3d(0, 1, 0, 100deg);
        transform: rotate3d(0, 1, 0, 100deg);
    }

    to {
        -webkit-transform: rotate3d(0, 1, 0, 140deg);
        -ms-transform: rotate3d(0, 1, 0, 140deg);
        transform: rotate3d(0, 1, 0, 140deg);
    }
}

/* sc-component-id: sc-keyframes-leamKW */
@-webkit-keyframes leamKW {
    from {
        -webkit-transform: rotate3d(1, 0, 0, 0deg);
        -ms-transform: rotate3d(1, 0, 0, 0deg);
        transform: rotate3d(1, 0, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 0, 0, 190deg);
        -ms-transform: rotate3d(1, 0, 0, 190deg);
        transform: rotate3d(1, 0, 0, 190deg);
    }

    70% {
        -webkit-transform: rotate3d(1, 0, 0, 130deg);
        -ms-transform: rotate3d(1, 0, 0, 130deg);
        transform: rotate3d(1, 0, 0, 130deg);
    }

    to {
        -webkit-transform: rotate3d(1, 0, 0, 140deg);
        -ms-transform: rotate3d(1, 0, 0, 140deg);
        transform: rotate3d(1, 0, 0, 140deg);
    }
}

@keyframes leamKW {
    from {
        -webkit-transform: rotate3d(1, 0, 0, 0deg);
        -ms-transform: rotate3d(1, 0, 0, 0deg);
        transform: rotate3d(1, 0, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 0, 0, 190deg);
        -ms-transform: rotate3d(1, 0, 0, 190deg);
        transform: rotate3d(1, 0, 0, 190deg);
    }

    70% {
        -webkit-transform: rotate3d(1, 0, 0, 130deg);
        -ms-transform: rotate3d(1, 0, 0, 130deg);
        transform: rotate3d(1, 0, 0, 130deg);
    }

    to {
        -webkit-transform: rotate3d(1, 0, 0, 140deg);
        -ms-transform: rotate3d(1, 0, 0, 140deg);
        transform: rotate3d(1, 0, 0, 140deg);
    }
}

/* sc-component-id: sc-keyframes-diPYIz */
@-webkit-keyframes diPYIz {
    from {
        -webkit-transform: rotate3d(1, 0, 0, 0deg);
        -ms-transform: rotate3d(1, 0, 0, 0deg);
        transform: rotate3d(1, 0, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 0, 0, -190deg);
        -ms-transform: rotate3d(1, 0, 0, -190deg);
        transform: rotate3d(1, 0, 0, -190deg);
    }

    70% {
        -webkit-transform: rotate3d(1, 0, 0, -150deg);
        -ms-transform: rotate3d(1, 0, 0, -150deg);
        transform: rotate3d(1, 0, 0, -150deg);
    }

    to {
        -webkit-transform: rotate3d(1, 0, 0, -190deg);
        -ms-transform: rotate3d(1, 0, 0, -190deg);
        transform: rotate3d(1, 0, 0, -190deg);
    }
}

@keyframes diPYIz {
    from {
        -webkit-transform: rotate3d(1, 0, 0, 0deg);
        -ms-transform: rotate3d(1, 0, 0, 0deg);
        transform: rotate3d(1, 0, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 0, 0, -190deg);
        -ms-transform: rotate3d(1, 0, 0, -190deg);
        transform: rotate3d(1, 0, 0, -190deg);
    }

    70% {
        -webkit-transform: rotate3d(1, 0, 0, -150deg);
        -ms-transform: rotate3d(1, 0, 0, -150deg);
        transform: rotate3d(1, 0, 0, -150deg);
    }

    to {
        -webkit-transform: rotate3d(1, 0, 0, -190deg);
        -ms-transform: rotate3d(1, 0, 0, -190deg);
        transform: rotate3d(1, 0, 0, -190deg);}
}
</style>
