import { shallowMount } from '@vue/test-utils'
import STextarea from '@/components/STextarea/STextarea.vue'

describe('STextarea.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  const inputEvent = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(STextarea, {
      propsData: {
        id: 'textarea',
        name: 'textarea',
        label: 'textarea'
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
    shallowMount(STextarea)
    expect(errorSpy).toBeCalled()
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
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
    const textarea = wrapper.find('textarea')
    textarea.setValue('text')
    expect(wrapper.emitted('input')[0][0]).toBe('text')
    expect(textarea.element.value).toBe('text')
  })
})
