<template>
  <nav for="pagination">
    <ul id="pagination" role="list">
      <li role="listitem">
        <nuxt-link v-if="prev" :to="`/every-alterations/${prev.slug}`">
          <span>{{ prev.title }}</span>
          <span class="sr-only">Previous chapter</span>
          <span aria-hidden="true">&larr;</span>
        </nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link v-if="next" :to="`/every-alterations/${next.slug}`">
          <span>{{ next.title }}</span>
          <span class="sr-only">Next chapter</span>
          <span aria-hidden="true">&rarr;</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const story = useStory()
const route = useRoute()

// Get the chapter ID from the route
const slug = route.params.slug

// get the tracks from the story
const tracks = story.value.tracks

// pluck the chapter info from the story
const prev = story.value.getPreviousTrackBySlug(tracks, slug)
const next = story.value.getNextTrackBySlug(tracks, slug)
</script>
