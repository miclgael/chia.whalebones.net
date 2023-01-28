<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <div class="skip-link">
    <a href="#main">Skip to main content</a>
  </div>
  <c-section element="header">
    <div class="center">
      <h1 class="sr-only" id="site-title">{{ appConfig.siteName }}</h1>
    </div>
  </c-section>
</template>
