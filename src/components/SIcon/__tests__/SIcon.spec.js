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

  describe.each(Object.keys(options.colors))('color "%s"', (color) => {
    it('can be the base color', async () => {
      wrapper.setProps({ color })
      await wrapper.vm.$nextTick()
      expect(wrapper.find(`.icon--color-${color}`).exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })

    if (!options.colors[color].length) return

    it.each(options.colors[color])('can be the shade "%s"', async (shade) => {
      wrapper.setProps({ color, shade })
      await wrapper.vm.$nextTick()
      expect(wrapper.find(`.icon--color-${color}-${shade}`).exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('validates', () => {
    it('icons', () => {
      shallowMount(SIcon, { propsData: { icon: 'not an icon' } })
      expect(errorSpy).toHaveBeenCalled()
    })

    it('color', () => {
      shallowMount(SIcon, { propsData: { icon: iconList[0], color: 'not a color' } })
      expect(errorSpy).toHaveBeenCalled()
    })

    it('shade', () => {
      shallowMount(SIcon, {
        propsData: {
          icon: iconList[0],
          color: Object.keys(options.colors)[0],
          shade: 'not a shade',
        },
      })
      expect(errorSpy).toHaveBeenCalledTimes(2)
    })

    it('size', () => {
      shallowMount(SIcon, { propsData: { icon: iconList[0], size: 'not a size' } })
      expect(errorSpy).toHaveBeenCalled()
    })
  })

  describe('size', () => {
    it.each(options.sizes)('can be "%s"', async (size) => {
      wrapper.setProps({ size })
      await wrapper.vm.$nextTick()
      expect(wrapper.find(`.icon--size-${size}`).exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
