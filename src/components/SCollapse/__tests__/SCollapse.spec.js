import SCollapse from '@/components/SCollapse/SCollapse.vue'
import { mount, shallowMount } from '@vue/test-utils'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SCollapse.vue', () => {
  const content = 'content'
  const triggerText = 'trigger text'
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SCollapse)
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('opens and closes', () => {
    wrapper = mount(SCollapse)
    const button = wrapper.find('button')

    button.trigger('click')
    expect(wrapper.vm.showContent).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()

    button.trigger('click')
    expect(wrapper.vm.showContent).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts props for text', () => {
    wrapper.setProps({ content, triggerText })
    expect(wrapper.text()).toContain(content)
    expect(wrapper.text()).toContain(triggerText)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts slots for text', () => {
    wrapper = shallowMount(SCollapse, {
      slots: { content, triggerText },
    })

    expect(wrapper.text()).toContain(content)
    expect(wrapper.text()).toContain(triggerText)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
