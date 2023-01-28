<template>
  <component
    :is="buttonType($props)"
    v-bind="linkProps($props)"
    :class="[$props.color, $props.variant]"
    :role="buttonType($props) !== 'a' ? 'button' : null"
  >
    <slot />
  </component>
</template>

<script setup>
import { colorOptions } from './c-button.config.js'
const props = defineProps({
  /**
   * The presence of the `to` prop, will output an `nuxt-link`, or `a` tag, depending on its contents.
   * Use for navigating between different routes, or external links.
   */
  to: {
    type: String,
    default: null
  },

  /**
   * Provide action name. Use for triggering a function.
   * Type must be a button.
   */
  action: {
    type: String,
    default: null
  },

  /**
   * The color of the button
   */
  color: {
    type: String,
    default: 'primary',
    validator: (value) => colorOptions.includes(value)
  },

  /**
   * The variant of the button
   */
  variant: {
    type: String,
    default: null,
    validator: (value) => ['outline'].includes(value)
  }
})

/**
 * Get the type of link to use
 */
const getLinkType = (props) => {
  const isExternal = props.to && props.to.startsWith('http')
  const isNuxtLink = props.to && props.to.startsWith('/')

  return {
    isExternal,
    isNuxtLink
  }
}

const { isExternal, isNuxtLink } = getLinkType(props)

const buttonType = () => {
  if (isExternal) {
    return 'a'
  } else if (isNuxtLink) {
    return 'nuxt-link'
  } else {
    return 'button'
  }
}

const linkProps = (props) => {
  if (isExternal) {
    return {
      ...props,
      href: props.to
    }
  } else if (isNuxtLink) {
    return {
      ...props,
      to: props.to
    }
  } else {
    return {
      ...props
    }
  }
}

</script>
