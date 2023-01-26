import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CSection from './c-section.vue'

describe('v-section', () => {
  it('Render background class on element', async () => {
    const wrapper = mount(CSection, {
      props: {
        background: 'red',
      }
    })
    expect(wrapper.classes())
      .toMatch(/_section__background/)
  })

  it('Render color class on element', async () => {
    const wrapper = mount(CSection, {
      props: {
        color: 'red',
      }
    })
    expect(wrapper.classes())
      .toMatch(/_section/)
  })

  it('Render text in a slot', async () => {
    const wrapper = mount(CSection, {
      slots: {
        default: 'Foo bar',
      }
    })
    expect(wrapper.text()).toMatch(/Foo bar/)
  })

  it('Renders container div class', async () => {
    const wrapper = mount(CSection, {
      props: {
        isContainer: true
      }
    })
    expect(wrapper.get('div').classes()).toMatch(/_section__inside/)
  })
})
