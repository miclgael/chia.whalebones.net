<script setup lang="ts">
import '@/assets/pico.config.css'
const appConfig = useAppConfig()
</script>

<template>
  <c-section class="app-background" :is-container="false">
    <c-section class="app-background-inside" :background="'rgba(0,0,0,0.6)'">
      <div class="skip-link">
        <a href="#main">Skip to main content</a>
      </div>
      <c-section element="header">
        <div class="center">
          <h1 class="sr-only" id="site-title">{{ appConfig.siteName }}</h1>
        </div>
      </c-section>
      <c-section element="main" id="main" :is-container="false">
        <slot />
      </c-section>
      <c-section element="footer" class="footer">
        <p><nuxt-link href="https://www.michaelgale.dev/">{{ appConfig.siteAuthor }}</nuxt-link> &copy; 1987 - {{ (new Date).getFullYear() }}</p>
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
  width: 100%;
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
  color: var(--color);
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

.skip-link {
  text-align: center;
  height: 0;
}
.skip-link a {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
 
.skip-link a:focus {
  position: static;
  width: auto;
  height: auto;
}
</style>
