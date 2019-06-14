import { shallowMount } from '@vue/test-utils'
import SIcon from '@/components/SIcon/SIcon.vue'
import * as options from '@/components/SIcon/options'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)

describe('SIcon.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SIcon, {
      propsData: {
        icon: iconList[0],
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(errorSpy).not.toHaveBeenCalled()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires an icon name', () => {
    shallowMount(SIcon)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('validates icons', () => {
    shallowMount(SIcon, { propsData: { icon: 'not an icon' } })
    expect(errorSpy).toHaveBeenCalled()
  })

  options.colors.forEach((color) => {
    it(`can be ${color}`, () => {
      wrapper.setProps({ color })
      expect(wrapper.contains(`.icon--color-${color}`)).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SIcon, { propsData: { icon: iconList[0], color: 'not a color' } })
    expect(errorSpy).toHaveBeenCalled()
  })

  options.sizes.forEach((size) => {
    it(`can be ${size}`, () => {
      wrapper.setProps({ size })
      expect(wrapper.contains(`.icon--size-${size}`)).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates size', () => {
    shallowMount(SIcon, { propsData: { icon: iconList[0], size: 'not a size' } })
    expect(errorSpy).toHaveBeenCalled()
  })
})
