// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: './src/',
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'サンプルサイト',
      htmlAttrs: { lang: 'ja', 'data-theme': 'luxury' }, // ここのテーマを揃える
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
    },
  },
})
