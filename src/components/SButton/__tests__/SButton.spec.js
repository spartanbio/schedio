import { shallowMount } from '@vue/test-utils'
import SButton from '@/components/SButton/SButton.vue'
import * as options from '@/components/SButton/options'

describe('SButton.vue', () => {
  const click = jest.fn()
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button Text'
      },
      listeners: { click }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Button Text')
  })

  it('handles clicks', () => {
    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  options.colors.forEach(color => {
    it(`can be ${color}`, () => {
      wrapper.setProps({ buttonColor: color })
      expect(wrapper.contains(`.btn--color-${color}`))
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SButton, { propsData: { buttonColor: 'not a color' } })
    expect(errorSpy).toBeCalled()
  })

  options.colors.forEach(size => {
    it(`can be ${size}`, () => {
      wrapper.setProps({ buttonSize: size })
      expect(wrapper.contains(`.btn--size-${size}`))
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SButton, { propsData: { buttonSize: 'not a size' } })
    expect(errorSpy).toBeCalled()
  })
})
