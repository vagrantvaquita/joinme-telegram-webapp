// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      meta: [
        { 
          name: 'viewport', 
          content: 'width=device-width, user-scalable=no' 
        }
      ],
      script: [
        {src: "https://telegram.org/js/telegram-web-app.js"}
      ]
    },
  }
})
