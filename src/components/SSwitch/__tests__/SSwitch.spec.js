import { mount } from '@vue/test-utils'
import SSwitch from '@/components/SSwitch/SSwitch.vue'
import SLabel from '@/components/SLabel/SLabel.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SSwitch.vue', () => {
  const sizes = [
    'small',
    'medium',
    'large',
  ]
  const inputEvent = jest.fn()
  const spy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  const defaultProps = {
    id: 'toggleSwitch',
    label: 'Checkbox',
  }
  let wrapper
  let toggleSwitch

  beforeEach(() => {
    wrapper = mount(SSwitch, {
      propsData: { ...defaultProps },
      listeners: {
        input: inputEvent,
      },
    })

    toggleSwitch = wrapper.find('#toggleSwitch')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires required props', () => {
    // spies on `console.error` without calling `console.error`
    // mounting component without required props
    mount(SSwitch)
    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('can be checked and unchecked', async () => {
    // check
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(toggleSwitch.element.checked).toBe(true)

    // uncheck
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(toggleSwitch.element.checked).toBe(false)

    // check that events were emitted correctly
    expect(wrapper.emitted('input')).toEqual([[true], [false]])
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('can be a required input', async () => {
    wrapper.setProps({ required: true })
    await wrapper.vm.$nextTick()
    expect(toggleSwitch.element.required).toBe(true)
  })

  it('can be invalid', async () => {
    wrapper.setProps({ isInvalid: true })
    await wrapper.vm.$nextTick()
    expect(toggleSwitch.element.validity.valid).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be disabled', () => {
    const disabledWrapper = mount(SSwitch, {
      propsData: {
        id: 'toggleSwitch',
        label: 'Checkbox',
      },
      attrs: {
        disabled: true,
      },
    })

    // verifies disabled attr is passed through to toggleSwitch input element
    expect(disabledWrapper.attributes('disabled')).toBeUndefined()
    expect(disabledWrapper.find('#toggleSwitch').element.disabled).toBeTruthy()
  })

  it('can be reversed', async () => {
    wrapper.setProps({ isReversed: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(SLabel).props('isReversed')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  sizes.forEach((size) => {
    it(`can be size ${size}`, () => {
      const sizeWrapper = mount(SSwitch, {
        propsData: {
          ...defaultProps,
          size,
        },
      })
      expect(spy).not.toHaveBeenCalled()
      expect(sizeWrapper.html()).toMatchSnapshot()
    })
  })

  it('validates size', () => {
    mount(SSwitch, {
      propsData: {
        ...defaultProps,
        size: 'this is not a size',
      },
    })
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('can hide the optional tag', async () => {
    wrapper.setProps({ hideOptional: true, required: false })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
