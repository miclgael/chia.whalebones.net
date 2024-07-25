<script setup lang="ts">
// Stylesheet overrides
import '@/assets/pico.config.css'

const appConfig:AppConfig = useAppConfig()

useHead({
  title: appConfig.siteName + ' - ' + appConfig.siteTagline,
  meta: [{ name: 'description', content: appConfig.siteTagline }]
})
</script>

<template>
  <div class="main-content">
    <img src="/logo-white-stacked.svg" alt="" width="800" aria-labelledby="site-title" loading="lazy" />
    
     <c-section :is-container="false">
      <h2 class="vertical-spacer">New album "GLAMOUR BOY" out now</h2>
      <c-grid class="grid--cta">
        <c-grid-cell>
          <img src="/glamour-boy-lp.jpg" alt="The artwork of the GLAMOUR BOY LP - featuring a big distorted dental x-ray" width="250" height="250" loading="lazy" />
        </c-grid-cell>
        <c-grid-cell>
          <p class="blurb">
            The brand new album from <em>Whalebones</em>, featuring 9 original tracks and a remix. More experimental pop, disco and ambient findings from Michael Gale. 
          </p>
          <c-grid class="grid--buttons">
            <atoms-c-button role="button" to="https://mirlo.space/whalebones/release/glamour-boy">
              <span class="desktop-only">Listen now on </span>Mirlo
            </atoms-c-button>
            <atoms-c-button role="button" class="secondary" to="https://whalebones.bandcamp.com/album/glamour-boy">
              Bandcamp
            </atoms-c-button>
            <atoms-c-button role="button" class="secondary" to="https://open.spotify.com/album/60PRgolOzB6xfanO6RWugr?si=TGbtuxxeSm-4xjwlaNGtMQ">
              Spotify
            </atoms-c-button>
          </c-grid>
          <div class="blurb blurb--plus">
            <details>
              <summary>
                Also available on these platforms
              </summary>
              <ul role="list">
                <li role="listitem">
                  <atoms-c-button to="https://music.apple.com/au/album/glamour-boy/1745108319?app=music">
                    Apple Music
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://music.apple.com/au/album/glamour-boy/1745108319?app=itunes">
                    iTunes
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button  to="https://youtube.com/playlist?list=OLAK5uy_n-rzd-DydSJFyj8JHfkzspv8YaJyf4DAs">
                    YouTube Music
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://www.deezer.com/album/583382382">
                    Deezer
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://listen.tidal.com/album/361823944">
                    Tidal
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://music.amazon.com/albums/B0D3J4M8BK">
                    Amazon Music
                  </atoms-c-button>
                </li>
              </ul>
            </details>
          </div>
        </c-grid-cell>
      </c-grid>
    </c-section>

    <c-section :is-container="false">
      <h2 class="vertical-spacer">"Every Alterations" also available</h2>
      <c-grid class="grid--cta">
        <c-grid-cell>
          <img src="/every-alterations-web-medium.jpg" alt="The artwork of the Every Alterations LP - featuring a big distorted face" width="250" height="250" loading="lazy" />
        </c-grid-cell>
        <c-grid-cell>
          <p class="blurb">
            The debut album from <em>Whalebones</em>, featuring 14 original tracks. Take a dip in the warm waters of introspective and emotive <abbr title="Intelligent Dance Music">IDM</abbr> from the Australian musician. 
          </p>
          <c-grid class="grid--buttons">
            <atoms-c-button role="button" to="https://whalebones.bandcamp.com/album/every-alterations">
              <span class="desktop-only">Listen now on </span>Bandcamp
            </atoms-c-button>
            <atoms-c-button role="button" class="secondary" to="https://open.spotify.com/album/60PRgolOzB6xfanO6RWugr?si=TGbtuxxeSm-4xjwlaNGtMQ">
              Spotify
            </atoms-c-button>
            <atoms-c-button role="button" class="secondary" to="https://music.apple.com/au/artist/whalebones/279869764">
              Apple
            </atoms-c-button>
          </c-grid>
          <div class="blurb blurb--plus">
            <details>
              <summary>
                Also available on these platforms
              </summary>
              <ul role="list">
                <li role="listitem">
                  <atoms-c-button to="https://soundcloud.com/whalebonesss/sets/every-alterations">
                    Soundcloud
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button  to="https://music.youtube.com/playlist?list=OLAK5uy_kiSCsu1sVhbEE-zUOs9hjv_-VyCE06wZ0">
                    YouTube Music
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://www.deezer.com/album/372405187">
                    Deezer
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://tidal.com/browse/album/258271612">
                    Tidal
                  </atoms-c-button>
                </li>
                <li role="listitem">
                  <atoms-c-button to="https://www.amazon.com/dp/B0BLCNTPYC/">
                    Amazon Music
                  </atoms-c-button>
                </li>
              </ul>
            </details>
          </div>
        </c-grid-cell>
      </c-grid>
    </c-section>

    <!-- <blockquote class="testimonial">
      <p>It appears atonal and naive on the surface but comes from a place of strong competence.</p>
      <p>Slow, thoughtful, ambient wanderings mashed with a wonderful spontaneous oddness. Young and naive, packed with atonal abandon and honesty.</p>
      <cite>- Jon L</cite>
    </blockquote> -->
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  grid-gap: 5rem;
  @media screen and (min-width: 768px) {
      padding: 0 1rem;
  }
}
.main-content h2 {
  color: var(--contrast);
  font-weight: 300;
}

.grid--cta {
  @media screen and (min-width: 768px) {
    grid-template-columns: 250px 1fr;
  }
}
.grid--buttons {
  grid-template-columns: 2fr auto auto;
  grid-gap: 0.5rem;
  justify-content: space-between;
  align-items: center;

  a {
    width: 100%;
  }
}
.blurb {
  max-width: 480px;
  text-align: left;
}
.blurb--plus {
  margin-top: 1rem;
  p {
    margin-bottom: 0.25rem;
  }
}

.desktop-only {
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
}

</style>
