import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import VGrid from './c-grid.vue'

describe('v-grid', () => {
  it('Renders a single column', async () => {
    const wrapper = mount(VGrid, {
      props: {
        columns: 1
      },
      slots: {
        default: '<div>test</div>'
      }
    })
    expect(wrapper.get('div').text()).toBe('test')
  })

  it('Renders multiple columns', async () => {
    const wrapper = mount(VGrid, {
      props: {
        columns: 3,
      },
      slots: {
        default: '<p>test</p>'.repeat(3)
      }
    })
    expect(wrapper.get('div').text()).toBe('test'.repeat(3))
  })

  it('Renders multiple rows', async () => {
    const wrapper = mount(VGrid, {
      props: {
        columns: 2,
        rows: 3
      },
      slots: {
        default: '<p>test</p>'.repeat(6)
      }
    })
    expect(wrapper.get('div').text()).toBe('test'.repeat(6))
  })
})
