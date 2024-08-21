import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap)
  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
  nuxtApp.provide('MotionPathPlugin', MotionPathPlugin)
  nuxtApp.provide('TextPlugin', TextPlugin)
})