// https://nuxt.com/docs/api/configuration/nuxt-config
import { Theme } from "./assets/css/theme";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module','@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
          preset: Theme,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
    }
  },
  css: [
    '@/assets/css/main.scss',
  ],
})
