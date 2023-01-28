<script setup>
const route = useRoute()
</script>

<template>
  <c-section :is-container="false" class="center vertical-spacer">
    <molecules-newsletter-form :theme="route.path === '/' ? 'secondary': 'primary'" />
    <atoms-social-links />
  </c-section>
</template>

<style lang="scss" scoped>

</style>
