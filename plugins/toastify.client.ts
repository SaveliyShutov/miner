import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 1200, position: "top-center", theme: "dark", closeButton: false, pauseOnFocusLoss: false });

  return {
    provide: { toast },
  };
});