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
    <nuxt-img src="/logo-white-stacked.svg" alt="" width="800" aria-labelledby="site-title" />
    
    <div>
      <h2 class="vertical-spacer">Debut album "Every Alterations" out now</h2>
      <c-grid class="grid--cta">
        <c-grid-cell>
          <nuxt-img src="/every-alterations-web-medium.jpg" />
        </c-grid-cell>
        <c-grid-cell>
          <p class="blurb">The debut album from Whalebones. Take a dip into the warm depths of emotion: 14 tracks of ambient and introspective music.</p>
          <c-grid class="grid--buttons">
            <atoms-c-button role="button" to="https://open.spotify.com/album/60PRgolOzB6xfanO6RWugr?si=TGbtuxxeSm-4xjwlaNGtMQ">
              Stream now on Spotify
            </atoms-c-button>
            <atoms-c-button role="button" class="secondary" to="https://music.apple.com/au/artist/whalebones/279869764">
              Apple
            </atoms-c-button>
          </c-grid>
          <p class="blurb blurb--plus">
            <small>
              Also available on: <atoms-c-button class="secondary" to="https://soundcloud.com/whalebonesss/sets/every-alterations">
                Soundcloud</atoms-c-button>, <atoms-c-button class="secondary" to="https://music.youtube.com/playlist?list=OLAK5uy_kiSCsu1sVhbEE-zUOs9hjv_-VyCE06wZ0">
                  YouTube Music</atoms-c-button>
            </small>
            </p>
        </c-grid-cell>
      </c-grid>
    </div>

    <!-- <blockquote class="testimonial">
      <p>It appears atonal and naive on the surface but comes from a place of strong competence.</p>
      <p>Slow, thoughtful, ambient wanderings mashed with a wonderful spontaneous oddness. Young and naive, packed with atonal abandon and honesty.</p>
      <cite>- Jon L</cite>
    </blockquote> -->

    <molecules-newsletter-form class="vertical-spacer" />
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
  grid-gap: 5rem;
}
.main-content h2 {
  color: var(--contrast);
  font-weight: 300;
}

@media screen and (min-width: 768px) {
.grid--cta {
    grid-template-columns: 250px 1fr;
  }
  .grid--buttons {
    grid-template-columns: auto 1fr;
  }
}
.blurb {
  max-width: 480px;
  text-align: left;
}
.blurb--plus {
  margin-top: 1rem;
}

</style>
