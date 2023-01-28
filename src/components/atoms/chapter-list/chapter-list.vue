<template>
  <ContentList path="/tracks" v-slot="{ list }">
    <div class="track-list">
      <div class="card" v-for="track in list" :key="track._path">
        <video v-if="track.video" class="background-video" autoplay loop muted poster="/every-alterations-web-medium.jpg">
          <source :src="track.video" type="video/mp4">
        </video>
        <div class="foreground">
          <h2>{{ track.title }}</h2>
          <p>{{ track.description.includes('Instrumental') ? ':)' : track.description }}</p>
          <nuxt-link :to="`/every-alterations/${track.slug}`">
            Learn more about <em>{{ track.title }}</em>
          </nuxt-link>
        </div>
      </div>
    </div>
  </ContentList>
</template>

<style>
.track-list {
  display: grid;
  grid-gap: 1rem;
}
.card {
  position: relative;
  height: 200px;
  background-color: rgba(0,0,0,0.5);
}
.background-video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.foreground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
h2 {
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
}
</style>
