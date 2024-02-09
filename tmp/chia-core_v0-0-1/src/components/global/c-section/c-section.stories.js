import CSection from './c-section.vue'

/**
 * Reusable color control options
 */
const colorControls = {
  description: 'Any valid color',
  control: { type: 'color' },
  table: {
    category: 'Colors',
    type: {
      summary: 'Color value',
      detail: 'Valid values include: \n- Any valid CSS color value \n- Any valid CSS gradient value \n- e.g. `#000000`, `rgba(0,0,0,1)`, `linear-gradient(90deg, #000000 0%, #ffffff 100%)` \n\n Colors Must be WCAG AA compliant'
    }
  }
}

/**
 * Boilerplate for the component
 */
export default {
  title: 'Global/CSection',
  component: CSection,
  argTypes: {
    background: { ...colorControls, name: 'Background' },
    color: { ...colorControls, name: 'Color' },
    element: {
      description: 'Any valid html element',
      control: {
        type: 'select',
      },
      options: ['main', 'div', 'section', 'article', 'aside', 'header', 'footer']
    },
    isContainer: {
      description: 'Whether or not to wrap the content in a container',
      control: {
        type: 'boolean'
      },
    }
  }
}

/**
 * Args common between all components
 */
const defaultArgs = {
  default: '<h1>Content</h1>',
  background: 'lightblue',
  color: 'indigo',
  element: 'section'
}

/**
 * Boilerplate for single element stories
 */
const Template = (args, { argTypes }) => ({
  // Required for working slots
  props: Object.keys(argTypes),
  // Components used in your story `template` are defined in the `components` object
  components: { CSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<c-section v-bind="args">${args.default}</c-section>`
})

/**
 * Single component stories
 */
export const WithContainer = Template.bind({})
WithContainer.args = {
  isContainer: true,
  ...defaultArgs
}

export const WithoutContainer = Template.bind({})
WithoutContainer.args = {
  isContainer: false,
  ...defaultArgs
}

/**
 * Boilerplate for nested stories
 */
const MultiTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <c-section element="main" container="true">
      <c-section v-bind="args">${args.default}</c-section>
    </c-section>`
})

defaultArgs.element = 'header'
export const WrappedHeader = MultiTemplate.bind({})
WrappedHeader.args = {
  isContainer: false,
  ...defaultArgs
}

defaultArgs.element = 'footer'
export const WrappedFooter = MultiTemplate.bind({})
WrappedFooter.args = {
  isContainer: false,
  ...defaultArgs
}
