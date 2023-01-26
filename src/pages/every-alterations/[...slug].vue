<template>
  <c-section>
    <h1 v-if="title">Track {{ id }}: <em>{{ title }}</em></h1>
    <content-doc :path="`/tracks/${slug}`"/>
    <atoms-spotify-embed v-if="embed" :src="embed" />
  </c-section>
</template>

<script setup>
const route = useRoute()
// Get the chapter ID from the route
const [slug] = route.params.slug

// Get the track data
const { data:track } = await useAsyncData('track', () => {
  return queryContent(`/tracks/${slug}`).findOne()
})

// Pull out the track title and ID
const { id, title, embed } = track.value
</script>
