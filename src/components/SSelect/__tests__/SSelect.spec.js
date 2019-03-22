import { colors as iconColors } from '@/components/SIcon/options'
import SSelect from '@/components/SSelect/SSelect.vue'
import { shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)

describe('SSelect.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  const inputListener = jest.fn()
  const defaultOptions = ['one', 'two']

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SSelect, {
      propsData: {
        id: 'select',
        name: 'select',
        label: 'Select',
        selectOptions: defaultOptions
      },
      listeners: {
        change: inputListener,
        input: inputListener
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
    shallowMount(SSelect)
    expect(errorSpy).toBeCalled()
  })

  it('can have a single placeholder', () => {
    const placeholder = 'This is a placeholder'

    wrapper.setProps({ placeholder })
    expect(wrapper.text()).toContain(placeholder)

    const placeholderOptions = wrapper.findAll('option').filter(w => w.text() === placeholder)

    expect(placeholderOptions.length).toBe(1)
    expect(placeholderOptions.at(0).value).toBeUndefined()
    expect(placeholderOptions.at(0).element.disabled).toBeTruthy()
    expect(placeholderOptions.at(0).text()).toBe(placeholder)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an array of objects for `selectOptions`', () => {
    wrapper.setProps({ selectOptions: [{ label: 'One', value: 1 }, { label: 'Two', value: 2 }] })
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an object of objects for `selectOptions`', () => {
    wrapper.setProps({
      selectOptions: {
        optionOne: { label: 'One', value: 1 },
        optionTwo: { label: 'Two', value: 2 }
      }
    })
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can use an object of arrays `selectOptions` with groups', () => {
    const optGroups = {
      groupOne: [{ label: 'One', value: 1 }],
      groupTwo: [{ label: 'Two', value: 2 }]
    }

    wrapper.setProps({ selectOptions: optGroups })
    expect(wrapper.findAll('option').length).toBeGreaterThan(1)
    expect(wrapper.contains('optgroup')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be a multiple select', () => {
    wrapper.setProps({ multiple: true })
    expect(wrapper.find('select').element.multiple).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('accepts input', () => {
    wrapper.find('select').setValue(defaultOptions[0])
    expect(inputListener).toBeCalled()
    expect(wrapper.emitted('change')[0][0]).toBe(defaultOptions[0])
  })

  it('can be invalid', () => {
    wrapper.setProps({ isInvalid: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be required', () => {
    wrapper.setProps({ required: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be inline', () => {
    wrapper.setProps({ isInline: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be fullwidth', () => {
    wrapper.setProps({ isFullwidth: true })
    expect(wrapper.html()).toMatchSnapshot()
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

  it('can hide the optional tag', () => {
    wrapper.setProps({ showOptional: false, required: true })
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be disabled correctly', () => {
    wrapper.setProps({ disabled: 'disabled' })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
