<template>
  <component
    :is="element"
    :class="[
      $style.section,
      background
        ? $style.section__background
        : null
    ]">
    <div
      :class="[
        isContainer
          ? $style.section__inside
          : null
        ]">

      <slot />
    </div>
  </component>
</template>

<script setup>
const props = defineProps({
  /**
   * Type of element to be used (e.g. section, main, footer, header, etc.)
   */
  element: {
    type: String,
    default: 'section'
  },
  /**
   * Treat the section as a container element
   */
  isContainer: {
    type: Boolean,
    default: true
  },
  /**
   * Add a background color to the section
   */
  background: {
    type: String||null,
    default: null
  },
  /**
   * Text color to be applied to the section
   */
  color: {
    type: String,
    default: '#000000'
  },
})
</script>

<style module scoped>
section {
  margin-bottom: 0;
}

.section {
  color: v-bind(color);
}

.section__inside {
  position: relative;
  max-width: 94rem;
  margin: 0 auto;
  padding: 2rem 3rem;
}

.section__background {
  background-color: v-bind(background);
}
</style>
