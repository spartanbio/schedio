import { shallowMount } from '@vue/test-utils'
import SContainer from '@/components/SContainer/SContainer.vue'

describe('SContainer.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SContainer, {
      slots: {
        default: '<div>Container Content</div>',
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders slot content', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be fullwidth', () => {
    wrapper.setProps({ isFullwidth: true })
    expect(wrapper.vm.isFullwidth).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
