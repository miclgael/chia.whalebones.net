// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Privacy first. Opt-out of telemetry by default.
  // https://nuxt.com/docs/api/configuration/nuxt-config#telemetry
  telemetry: false,

  // Whether your app is being unit tested.
  // https://nuxt.com/docs/api/configuration/nuxt-config#test
  test: false,

  // Set the nuxt source directory, for a tidier project root
  // https://nuxt.com/docs/api/configuration/nuxt-config#srcdir
  srcDir: 'src/',

  // Pico minimal CSS framework
  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@picocss/pico']
})
