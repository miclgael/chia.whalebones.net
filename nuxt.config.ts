// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'slide-fade',
      mode: 'out-in'
    },
    head: {
      bodyAttrs: {
        'data-theme': 'dark'
      }
    }
  },


  // Move @ directory to src/
  // https://nuxt.com/docs/api/configuration/nuxt-config#srcdir
  srcDir: 'src/',

  // Use "chia" components as a layer of this project
  // https://nuxt.com/docs/api/configuration/nuxt-config#extends
  // @see https://github.com/nuxt/nuxt/issues/12347 
  // extends: 'github:miclgael/chia#main',
  // extends: '../chia', // <- temporary `generate` workaround
  extends: 'tmp/chia-core_v0-0-1', // <- temporary `generate` workaround

  // Use Volar for TS support
  // https://nuxt.com/docs/api/configuration/nuxt-config#tsconfig
  typescript: { shim: false },

  // Configure PicoCSS
  // https://nuxt.com/docs/api/configuration/nuxt-config#css 
  css: ['@picocss/pico'],

  // Nuxt extensions to load
  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: ['@nuxt/content', '@nuxt/image-edge'],

  // Config for official content module
  // https://content.nuxtjs.org/api/configuration
  content: {},

  // Config for official image module
  // https://v1.image.nuxtjs.org/configuration
  image: {
    domains: ['whalebones.net']
  },

  // Specify if the app contains unit tests
  // Note these are currently not working great in Nuxt 3
  // https://nuxt.com/docs/api/configuration/nuxt-config#test
  test: false,

  // Specific Vite config. See Vite docs for more info
  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {},

  experimental: {
    payloadExtraction: false
  },

  ignore: ['**/*.config.{js,ts,json}']
})
