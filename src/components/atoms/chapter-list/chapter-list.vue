<template>
  <aside>
    <ContentList path="/tracks" v-slot="{ list }">
      <div v-for="track in list" :key="track._path">
        <h2>{{ track.title }}</h2>
        <p>{{ track.description.includes('Instrumental') ? ':)' : track.description }}</p>
        <nuxt-link :to="`/every-alterations/${track.slug}`">
          Learn more about <em>{{ track.title }}</em>
        </nuxt-link>
      </div>
    </ContentList>
  </aside>
</template>
