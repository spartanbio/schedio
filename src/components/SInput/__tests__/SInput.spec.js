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

  it('can be required', async () => {
    wrapper.setProps({ required: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be invalid', async () => {
    wrapper.setProps({ isInvalid: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have a placeholder', async () => {
    wrapper.setProps({ placeholder: 'some placeholder' })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts user input', async () => {
    const input = wrapper.find('input')
    input.element.value = 'text'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(input.element.value).toBe('text')
  })

  it('can have an icon on the left', async () => {
    wrapper.setProps({ iconLeft: iconList[0] })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have an icon on the right', async () => {
    wrapper.setProps({ iconRight: iconList[0] })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can set each icon color', async () => {
    const leftColor = Object.keys(iconColors)[0]
    const rightColor = Object.keys(iconColors)[1]
    const leftShade = Object.keys(iconColors[leftColor])[0]
    const rightShade = Object.keys(iconColors[rightColor])[1]

    wrapper.setProps({
      iconLeftColor: leftColor,
      iconLeftShade: iconColors[leftColor][leftShade],
      iconRightColor: rightColor,
      iconRightShade: iconColors[rightColor][rightShade],
    })

    await wrapper.vm.$nextTick()

    expect(errorSpy).not.toHaveBeenCalled()
    expect(wrapper.props('iconLeftColor')).not.toBe(wrapper.props('iconRightColor'))
    expect(wrapper.props('iconLeftShade')).not.toBe(wrapper.props('iconRightShade'))
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide the optional tag', async () => {
    wrapper.setProps({ hideOptional: true, required: false })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
