import * as options from '@/components/SButton/options'
import SButton from '@/components/SButton/SButton.vue'
import { shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)

describe('SButton.vue', () => {
  const click = jest.fn()
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button Text'
      },
      listeners: { click }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Button Text')
  })

  it('handles clicks', () => {
    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  options.colors.forEach(color => {
    it(`can be ${color}`, () => {
      wrapper.setProps({ buttonColor: color })
      expect(wrapper.contains(`.button--color-${color}`)).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SButton, { propsData: { buttonColor: 'not a color' } })
    expect(errorSpy).toBeCalled()
  })

  options.colors.forEach(size => {
    it(`can be ${size}`, () => {
      wrapper.setProps({ buttonSize: size })
      expect(wrapper.contains(`.button--size-${size}`)).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SButton, { propsData: { buttonSize: 'not a size' } })
    expect(errorSpy).toBeCalled()
  })

  it('can have an icon on the left', () => {
    wrapper.setProps({ iconLeft: iconList[0] })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have an icon on the right', () => {
    wrapper.setProps({ iconRight: iconList[0] })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can an icon and no text', () => {
    const iconButton = shallowMount(SButton, {
      slots: {
        default: 'Button Text'
      },
      listeners: { click },
      propsData: {
        iconOnly: true,
        iconLeft: iconList[0]
      }
    })

    expect(iconButton.text()).toBeFalsy()
    expect(iconButton.html()).toMatchSnapshot()
  })

  it('can have a loading spinner', () => {
    wrapper.setProps({ isLoading: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
