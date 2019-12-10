import { colors as iconColors } from '@/components/SIcon/options'
import SSelect from '@/components/SSelect/SSelect.vue'
import { mount, shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)
const iconList = Object.keys(icons)

describe('SSelect.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  const inputListener = jest.fn()
  const defaultOptions = ['one', 'two']

  let wrapper

  beforeEach(() => {
    wrapper = mount(SSelect, {
      propsData: {
        id: 'select',
        label: 'Select',
        selectOptions: defaultOptions,
      },
      listeners: {
        change: inputListener,
        input: inputListener,
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires required props', () => {
    shallowMount(SSelect)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('can have a single placeholder', async () => {
    const placeholder = 'This is a placeholder'

    wrapper.setProps({ placeholder })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain(placeholder)

    const placeholderOptions = wrapper.findAll('option').filter(w => w.text() === placeholder)

    expect(placeholderOptions.length).toBe(1)
    expect(placeholderOptions.at(0).value).toBeUndefined()
    expect(placeholderOptions.at(0).element.disabled).toBeTruthy()
    expect(placeholderOptions.at(0).text()).toBe(placeholder)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an array of objects for `selectOptions`', async () => {
    wrapper.setProps({ selectOptions: [{ label: 'One', value: 1 }, { label: 'Two', value: 2 }] })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an object of objects for `selectOptions`', async () => {
    wrapper.setProps({
      selectOptions: {
        optionOne: { label: 'One', value: 1 },
        optionTwo: { label: 'Two', value: 2 },
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an object of arrays `selectOptions` with groups', async () => {
    const optGroups = {
      groupOne: [{ label: 'One', value: 1 }],
      groupTwo: [{ label: 'Two', value: 2 }],
    }

    wrapper.setProps({ selectOptions: optGroups })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.contains('optgroup')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be a multiple select', async () => {
    wrapper.setProps({ multiple: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('select').element.multiple).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('accepts input', async () => {
    wrapper.find('select').setValue(defaultOptions[0])
    await wrapper.vm.$nextTick()
    expect(inputListener).toHaveBeenCalled()
    expect(wrapper.emitted('change')[0][0]).toBe(defaultOptions[0])
  })

  it('can be invalid', async () => {
    wrapper.setProps({ isInvalid: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be required', async () => {
    wrapper.setProps({ required: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be inline', async () => {
    wrapper.setProps({ isInline: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be fullwidth', async () => {
    wrapper.setProps({ isFullwidth: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
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

    wrapper.setProps({
      iconLeftColor: leftColor,
      iconLeftShade: iconColors[leftColor][0],
      iconRightColor: rightColor,
      iconRightShade: iconColors[rightColor][1],
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

  it('can be disabled correctly', async () => {
    wrapper.setProps({ disabled: 'disabled' })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
