// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { 
          name: 'viewport', 
          content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=overlays-content' 
        }
      ],
      script: [
        {src: "https://telegram.org/js/telegram-web-app.js"}
      ]
    },
  },
  
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
    output: {
      dir: 'dist'
    }
  },

  modules: ["@nuxtjs/tailwindcss"]
})