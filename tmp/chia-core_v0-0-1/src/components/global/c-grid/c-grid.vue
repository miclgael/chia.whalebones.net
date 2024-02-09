<template>
  <component
    :is="tag"
    class="grid"
  >
    <slot />
  </component>
</template>

<script setup>
import { alignOptions, justifyOptions } from './c-grid.config.js'

defineProps({
  /**
   * The minimum width (in rems) of each grid cell,
   * before it wraps to the next row.
   * Number becomes rem units.
   */
  minimumColumnWidth: {
    type: Number,
    default: 16,
    validate: (value) => value >= 0
  },
  /**
   * Gap between each grid cell. Number becomes rem units.
   */
  gap: {
    type: Number,
    default: 1,
    validate: (value) => value >= 0
  },
  /**
   * CSS `align-items` value for the grid
   */
  align: {
    type: String,
    default: 'center',
    validator: (value) => alignOptions.includes(value)
  },
  /**
   * CSS `justify-items` value for the grid
   */
  justify: {
    type: String,
    default: 'start',
    validate: (value) => {
      return justifyOptions.includes(value)
    }
  },

  /* Element name */
  tag: {
    type: String,
    default: 'div'
  }
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: calc(v-bind(gap) * 1rem);
  align-items: v-bind(align);
  justify-items: v-bind(justify);
  grid-template-columns: repeat(auto-fill, minmax(calc(v-bind(minimumColumnWidth) * 1rem), 1fr));
}
</style>
