import { shallowMount } from '@vue/test-utils'
import SCheckbox from '@/components/SCheckbox/SCheckbox.vue'
import SLabel from '@/components/SLabel/SLabel.vue'

describe('SCheckbox.vue', () => {
  const inputEvent = jest.fn()
  let wrapper
  let checkbox

  beforeEach(() => {
    wrapper = shallowMount(SCheckbox, {
      propsData: {
        id: 'checkbox',
        name: 'checkbox',
        label: 'Checkbox'
      },
      listeners: {
        input: inputEvent
      }
    })

    checkbox = wrapper.find('#checkbox')
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires required props', () => {
    // spies on `console.error` without calling `console.error`
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
    // mounting component without required props
    shallowMount(SCheckbox)
    expect(spy).toBeCalled()
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('can be checked and unchecked', () => {
    // check
    wrapper.trigger('click')
    expect(checkbox.element.checked).toBe(true)

    // uncheck
    wrapper.trigger('click')
    expect(checkbox.element.checked).toBe(false)

    // check that events were emitted correctly
    expect(wrapper.emitted('input')).toEqual([[true], [false]])
  })

  it('can be a required input', () => {
    wrapper.setProps({ required: true })
    expect(checkbox.element.required).toBe(true)
  })

  it('can be invalid', () => {
    wrapper.setProps({ isInvalid: true })
    expect(checkbox.element.validity.valid).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be disabled', () => {
    const disabledWrapper = shallowMount(SCheckbox, {
      propsData: {
        id: 'checkbox',
        name: 'checkbox',
        label: 'Checkbox'
      },
      attrs: {
        disabled: true
      }
    })

    // verifies disabled attr is passed through to checkbox input element
    expect(disabledWrapper.attributes('disabled')).toBeUndefined()
    expect(disabledWrapper.find('#checkbox').element.disabled).toBeTruthy()
  })

  it('can be reversed', () => {
    wrapper.setProps({ isReversed: true })
    expect(wrapper.find(SLabel).props('isReversed')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
