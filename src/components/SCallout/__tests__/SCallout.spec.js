import { shallowMount } from '@vue/test-utils'
import SCallout from '@/components/SCallout/SCallout.vue'
import { types } from '../options'

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

  types.forEach(type => {
    it(`can have type ${type}`, () => {
      wrapper.setProps({ type })

      expect(errorSpy).not.toBeCalled()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates the `type`', () => {
    shallowMount(SCallout, {
      propsData: {
        type: 'not a type'
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
