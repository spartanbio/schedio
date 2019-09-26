import { colors as iconColors } from '@/components/SIcon/options'
import { allowed as options } from '@/components/SInput/options'
import SInput from '@/components/SInput/SInput.vue'
import { mount, shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)
const iconList = Object.keys(icons)

describe('SInput.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  const inputEvent = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = mount(SInput, {
      propsData: {
        id: 'input',
        label: 'input',
      },
      listeners: {
        input: inputEvent,
      },
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires required props', () => {
    // mounting component without required props
    shallowMount(SInput)
    expect(errorSpy).toHaveBeenCalled()
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('validates the input type', () => {
    const defaultProps = { id: 'input', label: 'input' }
    const randOptionIndex = Math.round(Math.random() * options.length)
    const option = options[randOptionIndex]

    shallowMount(SInput, {
      propsData: {
        ...defaultProps,
        type: option,
      },
    })
    expect(errorSpy).not.toHaveBeenCalled()

    shallowMount(SInput, {
      propsData: {
        ...defaultProps,
        type: 'checkbox',
      },
    })
    expect(errorSpy).toHaveBeenCalled()
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
      iconRightColor: iconColors[1],
    })

    expect(errorSpy).not.toHaveBeenCalled()
    expect(wrapper.props('iconLeftColor')).not.toBe(wrapper.props('iconRightColor'))
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide the optional tag', () => {
    wrapper.setProps({ hideOptional: true, required: false })
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
