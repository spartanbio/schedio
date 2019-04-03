import { shallowMount } from '@vue/test-utils'
import SCallout from '@/components/SCallout/SCallout.vue'
import { calloutTypes } from '../options'

describe('SCallout.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SCallout)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(SCallout)

    expect(wrapper.html()).toMatchSnapshot()
  })

  calloutTypes.forEach(type => {
    it(`can have type ${type}`, () => {
      wrapper.setProps({ calloutType: type })

      expect(errorSpy).not.toBeCalled()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates the `calloutType`', () => {
    shallowMount(SCallout, {
      propsData: {
        calloutType: 'not a type'
      }
    })

    expect(errorSpy).toBeCalled()
  })

  it('accepts slot content', () => {
    const slotText = 'I am slot text'
    const slotWrapper = shallowMount(SCallout, {
      slots: {
        default: slotText
      }
    })

    expect(slotWrapper.text()).toBe(slotText)
    expect(slotWrapper.html()).toMatchSnapshot()
  })
})
