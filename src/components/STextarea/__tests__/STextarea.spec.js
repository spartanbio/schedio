import { colors as iconColors } from '@/components/SIcon/options'
import STextarea from '@/components/STextarea/STextarea.vue'
import { shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)

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
    jest.clearAllMocks()
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

  it('can have an icon on the left', () => {
    wrapper.setProps({ iconLeft: iconList[0] })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have an icon on the right', () => {
    wrapper.setProps({ iconRight: iconList[0] })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can set each icon color', () => {
    wrapper.setProps({
      iconLeftColor: iconColors[0],
      iconRightColor: iconColors[1]
    })

    expect(errorSpy).not.toBeCalled()
    expect(wrapper.props('iconLeftColor')).not.toBe(wrapper.props('iconRightColor'))
    expect(wrapper.html()).toMatchSnapshot()
  })
})
