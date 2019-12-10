import * as options from '@/components/SButton/options'
import SButton from '@/components/SButton/SButton.vue'
import { shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

const iconList = Object.keys(icons)

describe('SButton.vue', () => {
  const click = jest.fn()
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button Text',
      },
      listeners: { click },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Button Text')
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  describe.each(options.colorNames)('with color %s', (color) => {
    const shades = options.colors[color]

    describe('and base style', () => {
      it('can be the base shade', async () => {
        wrapper.setProps({ color })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}`)
        expect(wrapper.html()).toMatchSnapshot()
      })

      if (!shades.length) return

      it.each(shades)('can have shade %p', async (shade) => {
        wrapper.setProps({ color, shade })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-${shade}`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    })

    describe.each(options.types)('and %p style', (type) => {
      it('can be the base shade', async () => {
        if (typeof type !== 'string') console.dir(type)
        wrapper.setProps({ type, color })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-${type}`)
        expect(wrapper.html()).toMatchSnapshot()
      })

      if (!shades.length) return

      it.each(shades)('can be the shade %p', async (shade) => {
        wrapper.setProps({ type, color, shade })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-${shade}-${type}`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  })

  describe('can be size', () => {
    it.each(options.sizes)('%s', async (size) => {
      wrapper.setProps({ size })
      await wrapper.vm.$nextTick()
      expect(wrapper.classes()).toContain(`button--size-${size}`)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('can have an icon', () => {
    it('on the left', async () => {
      wrapper.setProps({ iconLeft: iconList[0] })
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('on the right', async () => {
      wrapper.setProps({ iconRight: iconList[0] })
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('and no text', async () => {
      wrapper = shallowMount(SButton, {
        slots: {
          default: 'Button Text',
        },
        listeners: { click },
        attrs: {
          'aria-label': 'Button',
        },
        propsData: {
          iconOnly: true,
          iconLeft: iconList[0],
        },
      })

      await wrapper.vm.$nextTick()
      expect(await axe(wrapper.html())).toHaveNoViolations()
      expect(wrapper.text()).toBeFalsy()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('validates', () => {
    it.each(['color', 'type', 'size'])('%s', async (prop) => {
      shallowMount(SButton, { propsData: { [prop]: 'not a prop' } })
      await wrapper.vm.$nextTick()
      expect(errorSpy).toHaveBeenCalled()
    })
  })

  describe('errors if', () => {
    it('no discernible text', async () => {
      wrapper = shallowMount(SButton, {
        listeners: { click },
        propsData: {
          iconOnly: true,
          iconLeft: iconList[0],
        },
      })

      await wrapper.vm.$nextTick()
      expect(errorSpy).toHaveBeenCalled()
      expect(await axe(wrapper.html())).not.toHaveNoViolations()
    })

    it.each(['isOutlined', 'isText'])('`%s` is used', async (prop) => {
      wrapper = shallowMount(SButton, {
        slots: {
          default: 'Button Text',
        },
        propsData: {
          [prop]: true,
        },
      })

      await wrapper.vm.$nextTick()
      expect(errorSpy).toHaveBeenCalled()
    })
  })

  it('handles clicks', async () => {
    await wrapper.vm.$nextTick()
    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  it('can use slot text for `aria-label`', async () => {
    wrapper = shallowMount(SButton, {
      slots: {
        default: 'Button Text',
      },
      listeners: { click },
      propsData: {
        iconOnly: true,
        iconLeft: iconList[0],
      },
    })

    await wrapper.vm.$nextTick()
    expect(await axe(wrapper.html())).toHaveNoViolations()
    expect(wrapper.text()).toBeFalsy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have a loading spinner', async () => {
    wrapper.setProps({ isLoading: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
