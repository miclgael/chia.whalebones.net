<script setup>
// Stylesheet overrides
import '@/assets/pico.config.css'

// Copyright year
const year = (new Date).getFullYear()

// Query nuxt content for site config
// const { data } = useAsyncData('config', () => queryContent('/config').findOne())
const appConfig = useAppConfig()
</script>

<template>
  <c-section class="app-background" :is-container="false">
    <c-section class="app-background-inside" :background="'rgba(0,0,0,0.6)'">
      <c-section element="header" :background="null">
        <div class="center">
          <h1 class="sr-only" id="site-title">{{ appConfig.siteName }}</h1>
        </div>
      </c-section>
      <c-section element="main" :is-container="false" :background="null">
        <slot />
      </c-section>
      <c-section element="footer" :background="null" class="footer">
        <p><a href="https://www.michaelgale.dev/">{{ appConfig.siteAuthor }}</a> &copy; 1987 - {{ year }}</p>
      </c-section>
    </c-section>
  </c-section>
</template>

<style>
html,
body {
  min-height: 100vh;
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: black;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.center {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.app-background {
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  background-image: url('/every-alterations-web-medium.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-attachment: fixed;
}

.app-background > div {
  height: 100%;
  display: grid;
}
/* Use large image on larger devices */
@media screen and (min-width: 768px) {
  .app-background {
    background-image: url('/every-alterations-web-large.jpg');
    background-position: center;
  }
}
.app-background-inside {
  min-height: 100vh;
}
.app-background-inside > div {
  height: 100%;
  display: grid;
}

.footer {
  text-align: center;
}
.footer * {
  color: rgba(206, 206, 206, 0.8) !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
