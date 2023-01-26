<script setup>
const tracks = []
</script>

<template>
 <aside>
    <details>
      <summary>Chapter select</summary>
      <nav for="select-chapter">
        <ol id="select-chapter" role="list">
          <li v-for="chapter in tracks" role="listitem">
            <nuxt-link :to="`/every-alterations/${chapter.slug}`">
              {{ chapter.id }}. {{ chapter.title }}
            </nuxt-link>
          </li>
        </ol>
      </nav>
    </details>
  </aside>
</template>
