// plugins/toastification.js
import { defineNuxtPlugin } from '#app'
import Toast, { POSITION } from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: POSITION.TOP_RIGHT,
    timeout: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  }

  nuxtApp.vueApp.use(Toast, options)
})
