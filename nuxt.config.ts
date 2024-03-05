// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    // Custom head https://nuxt.com/docs/getting-started/seo-meta
    head: {
      title: 'My Nuxt.js App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My awesome Nuxt.js app' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    baseURL: '/',
  },

  srcDir: 'src',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: ['@/components', '@/components/commons'],

  devServer: {
    host: '0.0.0.0',
    port: 80,
  },
})
