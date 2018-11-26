import { shallowMount } from '@vue/test-utils'
import SInput from '@/components/SInput/SInput.vue'
import { allowed as options } from '@/components/SInput/options'
describe('SInput.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  const inputEvent = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SInput, {
      propsData: {
        id: 'input',
        name: 'input',
        label: 'input'
      },
      listeners: {
        input: inputEvent
      }
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires required props', () => {
    // mounting component without required props
    shallowMount(SInput)
    expect(errorSpy).toBeCalled()
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('validates the input type', () => {
    const defaultProps = { id: 'input', name: 'input', label: 'input' }
    const randOptionIndex = Math.round(Math.random() * options.length)
    const option = options[randOptionIndex]

    shallowMount(SInput, {
      propsData: {
        ...defaultProps,
        type: option
      }
    })
    expect(errorSpy).not.toBeCalled()

    shallowMount(SInput, {
      propsData: {
        ...defaultProps,
        type: 'checkbox'
      }
    })
    expect(errorSpy).toBeCalled()
  })

  it('can be required', () => {
    wrapper.setProps({ required: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be invalid', () => {
    wrapper.setProps({ isInvalid: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have a placeholder', () => {
    wrapper.setProps({ placeholder: 'some placeholder' })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts user input', () => {
    const input = wrapper.find('input')
    input.element.value = 'text'
    input.trigger('input')
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(input.element.value).toBe('text')
  })
})
