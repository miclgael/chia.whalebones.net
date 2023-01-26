<script setup>
// Stylesheet overrides
import '@/assets/pico.config.css'

const appConfig = useAppConfig()

useHead({
  title: appConfig.siteName + ' - ' + appConfig.siteTagline,
  description: appConfig.siteTagline,
})
</script>

<template>
  <div class="main-content">
    <nuxt-img src="/logo-white-stacked.svg" alt="" width="1000" aria-labelledby="site-title" />
    <h3>Debut album <br />"Every Alterations" <br />out now</h3>
    <atoms-social-links />
  </div>
</template>

<style scoped>
.main-content {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
}
.main-content * {
  color: white !important;
  font-weight: 300 !important;
}
</style>
