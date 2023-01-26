import CGrid from './c-grid.vue'
import CGridCell from './c-grid-cell.vue'

import { alignOptions, justifyOptions } from './c-grid.config.js'

/**
 * Boilerplate for the component
 */
export default {
  title: 'Global/CGrid',
  component: CGrid,
  argTypes: {
    minimumColumnWidth: { control: { type: 'number', min: 8, max: 32 } },
    gap: { control: { type: 'number', min: 0, max: 10 } },
    align: { control: { type: 'select', }, options: alignOptions },
    justify: { control: { type: 'select', }, options: justifyOptions }
  }
}

/**
 * Boilerplate for single element stories
 */
const Template = (args, { argTypes }) => ({
  // Required for working slots
  props: Object.keys(argTypes),
  // Components used in your story `template` are defined in the `components` object
  components: { CGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<c-grid v-bind="args">${args.default}</c-grid>`
})

const defaultArgs = {
  minimumColumnWidth: 16,
  gap: 1,
  align: 'start',
  justify: 'start'
}

/**
 * Single component stories
 */
export const SingleImplicitCell = Template.bind({})
SingleImplicitCell.args = {
  ...defaultArgs,
  default: `<div style="outline: solid 1px firebrick;">
    <h3>A single cell</h3>
    <p>Justified to the start of the grid line</p>
  </div>`,
}
SingleImplicitCell.storyName = 'Single cell (implicit)'

/**
 * Single component stories
 */
export const MultipleImplicitCells = Template.bind({})
MultipleImplicitCells.args = {
  ...defaultArgs,
  default: `<h1>Implicit grid cells</h1>
    <div style="outline: solid 1px orange;">
      <h3>Every cell justified start</h3>
      <p>And all cells aligned start</p>
    </div>
    <div style="outline: solid 1px pink;">
      <h3>Every cell justified start</h3>
      <p>Every cell is an implicit cell</p>
      <p>AKA, "Just a div".</p>
    </div>
    <div style="outline: solid 1px orange;">
      <h3>Every cell justified start</h3>
    </div>
    <div style="outline: solid 1px pink;">
      <h3>Every cell justified start</h3>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel urna sed risus vehicula convallis. </p>
    </div>
    <div style="outline: solid 1px orange;">
      <h3>Every cell justified start</h3>
      <p>Lorem ipsum dolor sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus . </p>
    </div>
    <div style="outline: solid 1px pink;">
      <h3>Every cell justified start</h3>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vel urna sed risus vehicula convallis. </p>
    </div>
  `
}
MultipleImplicitCells.storyName = 'Multiple cells (implicit)'

/**
 * Boilerplate for grid-cell stories
 */
const GridCellTemplate = (args, { argTypes }) => ({
  // Required for working slots
  props: Object.keys(argTypes),
  // Components used in your story `template` are defined in the `components` object
  components: { CGrid, CGridCell },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<c-grid v-bind="args">${args.default}</c-grid>`
})

export const GridCellsJustify = GridCellTemplate.bind({})
GridCellsJustify.args = {
  ...defaultArgs,
  default: `
    <v-grid-cell justify="start">
      <div style="outline: solid 1px red;">
        <h3>Justified to start of cell</h3>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
      </div>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
    </v-grid-cell>
    <v-grid-cell justify="center">
      <h3 style="outline: solid 1px red;">Justified to center of cell</h3>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
    </v-grid-cell>
    <v-grid-cell>
      <h3>Default position (start)</h3>
    </v-grid-cell>
    <v-grid-cell justify="end">
      <div style="outline: solid 1px red;">Justified to end of cell</div>
    </v-grid-cell>
  `
}
GridCellsJustify.storyName = 'Grid cells, justify (explicit)'

export const GridCellsAlign = GridCellTemplate.bind({})
GridCellsAlign.args = {
  ...defaultArgs,
  default: `
  <v-grid-cell>
    <div style="outline: solid 1px red;">
      <h3>Default position (center)</h3>
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
    </div>
  </v-grid-cell>
  <v-grid-cell align="start">
    <h3>Aligned to center of cell</h3>
    <p>Lorem ipsum dolor sit amet</p>
  </v-grid-cell>
  <v-grid-cell>
    <h3>Default position (center)</h3>
  </v-grid-cell>
  <v-grid-cell>
    <h3>Default position (center)</h3>
  </v-grid-cell>
  <v-grid-cell align="center">
    <h3 style="outline: solid 1px red;">Aligned to center of cell</h3>
  </v-grid-cell>
  <v-grid-cell>
    <h3>Default position (center)</h3>
  </v-grid-cell>
  <v-grid-cell>
    <h3>Default position (center)</h3>
  </v-grid-cell>
  <v-grid-cell>
    <h3>Default position (center)</h3>
  </v-grid-cell>
  <v-grid-cell align="end">
    <div style="outline: solid 1px red;">Aligned to end of cell</div>
  </v-grid-cell>
  `
}
GridCellsAlign.storyName = 'Grid cells, align (explicit)'
