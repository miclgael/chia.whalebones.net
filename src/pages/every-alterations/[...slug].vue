<template>
  <c-section>
    <!-- <h1 v-if="title">Track {{ id }}: <em>{{ title }}</em></h1> -->
    <!-- <nuxt-img v-if="image" :src="image" /> -->
    <content-doc :path="`/story/${slug}`"/>
    <!-- <audio v-if="audio" src="audio" controls playsinline="" loop autoplay></audio> -->
    <!-- <atoms-spotify-embed v-if="embed" :src="embed" /> -->
    <!-- <molecules-chapter-navigation /> -->
  </c-section>
</template>

<script setup>
const route = useRoute()
// Get the chapter ID from the route
const [slug] = route.params.slug

const { data } = await useAsyncData('tracks-data', () => queryContent('/tracks-data').findOne())

// const { data } = await useAsyncData('tracks', () => {
//   return queryContent().where({ _path: path }).only(['title']).findOne()
// })

console.log(data)

// const tracks = story.value.tracks

// pluck the chapter info from the story
// const { id, title, image, audio, embed } = methods.getTrackBySlug(tracks, slug)
</script> 
