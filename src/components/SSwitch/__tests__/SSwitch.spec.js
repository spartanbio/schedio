import { mount } from '@vue/test-utils'
import SSwitch from '@/components/SSwitch/SSwitch.vue'
import SLabel from '@/components/SLabel/SLabel.vue'

describe('SSwitch.vue', () => {
  const sizes = ['small', 'medium', 'large']
  const inputEvent = jest.fn()
  const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  const defaultProps = {
    id: 'toggleSwitch',
    name: 'toggleSwitch',
    label: 'Checkbox'
  }
  let wrapper
  let toggleSwitch

  beforeEach(() => {
    wrapper = mount(SSwitch, {
      propsData: { ...defaultProps },
      listeners: {
        input: inputEvent
      }
    })

    toggleSwitch = wrapper.find('#toggleSwitch')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires required props', () => {
    // spies on `console.error` without calling `console.error`
    // mounting component without required props
    mount(SSwitch)
    expect(spy).toBeCalled()
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('can be checked and unchecked', () => {
    // check
    wrapper.trigger('click')
    expect(toggleSwitch.element.checked).toBe(true)

    // uncheck
    wrapper.trigger('click')
    expect(toggleSwitch.element.checked).toBe(false)

    // check that events were emitted correctly
    expect(wrapper.emitted('input')).toEqual([[true], [false]])
  })

  it('can be a required input', () => {
    wrapper.setProps({ required: true })
    expect(toggleSwitch.element.required).toBe(true)
  })

  it('can be invalid', () => {
    wrapper.setProps({ isInvalid: true })
    expect(toggleSwitch.element.validity.valid).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be disabled', () => {
    const disabledWrapper = mount(SSwitch, {
      propsData: {
        id: 'toggleSwitch',
        name: 'toggleSwitch',
        label: 'Checkbox'
      },
      attrs: {
        disabled: true
      }
    })

    // verifies disabled attr is passed through to toggleSwitch input element
    expect(disabledWrapper.attributes('disabled')).toBeUndefined()
    expect(disabledWrapper.find('#toggleSwitch').element.disabled).toBeTruthy()
  })

  it('can be reversed', () => {
    wrapper.setProps({ isReversed: true })
    expect(wrapper.find(SLabel).props('isReversed')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  sizes.forEach(size => {
    it(`can be size ${size}`, () => {
      const sizeWrapper = mount(SSwitch, {
        propsData: {
          ...defaultProps,
          size
        }
      })
      expect(spy).not.toBeCalled()
      expect(sizeWrapper.html()).toMatchSnapshot()
    })
  })

  it('validates size', () => {
    mount(SSwitch, {
      propsData: {
        ...defaultProps,
        size: 'this is not a size'
      }
    })
    expect(spy).toBeCalledTimes(2)
  })

  it('can hide the optional tag', () => {
    wrapper.setProps({ showOptional: false, required: true })
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
