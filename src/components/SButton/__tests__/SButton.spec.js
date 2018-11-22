import { shallowMount } from '@vue/test-utils'
import SButton from '@/components/SButton/SButton.vue'

describe('SButton.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button Text'
      }
    })

    expect(wrapper.contains('.btn--color-green'))
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Button Text')
  })

  it('handles clicks', () => {
    const click = jest.fn()
    const wrapper = shallowMount(SButton, { listeners: { click } })

    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  it('sets color correctly', () => {
    const wrapper = shallowMount(SButton, { propsData: { color: 'red' } })

    expect(wrapper.contains('.btn--color-red'))
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('sets size correctly', () => {
    const wrapper = shallowMount(SButton, { propsData: { size: 'lg' } })

    expect(wrapper.contains('.btn--size-lg'))
    expect(wrapper.html()).toMatchSnapshot()
  })
})
