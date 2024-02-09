<script setup lang="ts">
const route = useRoute()
const prev = ref({title: '', slug: ''})
const next = ref({title: '', slug: ''})
</script>

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
