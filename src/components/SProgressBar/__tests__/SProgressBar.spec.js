import { shallowMount } from '@vue/test-utils'
import SProgressBar from '@/components/SProgressBar/SProgressBar.vue'
import * as options from '@/components/SProgressBar/options'

describe('SProgressBar.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  beforeEach(() => {
    wrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: '50'
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders progress', () => {
    shallowMount(SProgressBar)
    expect(errorSpy).toBeCalled()
  })

  it('only allows values between 0 and 100', () => {
    // we need to mount new components to test the prop validator
    const smallWrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: -100
      }
    })
    const bigWrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: 200
      }
    })

    wrapper.setProps({ progress: -100 })
    expect(smallWrapper.vm.computedProgress).toBe(0)
    wrapper.setProps({ progress: 200 })
    expect(bigWrapper.vm.computedProgress).toBe(100)
    // 4 times because Vue console.errors if prop is invalid, then we return consoe.error
    expect(errorSpy).toBeCalledTimes(4)
  })

  options.colors.forEach(color => {
    it(`can be ${color}`, () => {
      wrapper.setProps({ color })
      expect(errorSpy).not.toBeCalled()
      expect(wrapper.props('color')).toBe(color)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('only allows valid colors', () => {
    shallowMount(SProgressBar, {
      propsData: {
        color: 'this is not a color'
      }
    })
    expect(errorSpy).toBeCalled()
  })

  options.sizes.forEach(size => {
    it(`can be ${size}`, () => {
      wrapper.setProps({ size })
      expect(errorSpy).not.toBeCalled()
      expect(wrapper.props('size')).toBe(size)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('only allows valid sizes', () => {
    shallowMount(SProgressBar, {
      propsData: {
        size: 'this is not a size'
      }
    })
    expect(errorSpy).toBeCalled()
  })

  it('can display a message', () => {
    const message = 'this is a message'
    wrapper.setProps({ message })
    expect(wrapper.text()).toContain(message)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide the percent complete', () => {
    wrapper.setProps({ showPercentComplete: false })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).not.toContain(wrapper.props('progress') + '%')
  })
})
