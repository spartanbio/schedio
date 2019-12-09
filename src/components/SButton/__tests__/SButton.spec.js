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

  it('handles clicks', async () => {
    await wrapper.vm.$nextTick()
    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  Promise.all(
    options.colors.map((color) => {
      it(`can be ${color}`, async () => {
        wrapper.setProps({ color })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    }),
  )

  Promise.all(
    options.colors.map((color) => {
      it(`can be text with ${color}`, async () => {
        wrapper.setProps({ color, isText: true })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-text`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    }),
  )

  Promise.all(
    options.colors.map((color) => {
      it(`can be outlined with ${color}`, async () => {
        wrapper.setProps({ color, isOutlined: true })
        await wrapper.vm.$nextTick()
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-outlined`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    }),
  )

  it('validates fill color', async () => {
    shallowMount(SButton, { propsData: { color: 'not a color' } })
    await wrapper.vm.$nextTick()
    expect(errorSpy).toHaveBeenCalled()
  })

  options.sizes.forEach((size) => {
    it(`can be ${size}`, async () => {
      wrapper.setProps({ size })
      await wrapper.vm.$nextTick()
      expect(wrapper.classes()).toContain(`button--size-${size}`)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates size', async () => {
    shallowMount(SButton, { propsData: { size: 'not a size' } })
    await wrapper.vm.$nextTick()
    expect(errorSpy).toHaveBeenCalled()
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

  it('can have an icon and no text', async () => {
    const iconButton = shallowMount(SButton, {
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
    expect(await axe(iconButton.html())).toHaveNoViolations()
    expect(iconButton.text()).toBeFalsy()
    expect(iconButton.html()).toMatchSnapshot()
  })

  it('can use slot text for `aria-label`', async () => {
    const iconButton = shallowMount(SButton, {
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
    expect(await axe(iconButton.html())).toHaveNoViolations()
    expect(iconButton.text()).toBeFalsy()
    expect(iconButton.html()).toMatchSnapshot()
  })

  it('errors if no discernible text', async () => {
    const iconButton = shallowMount(SButton, {
      listeners: { click },
      propsData: {
        iconOnly: true,
        iconLeft: iconList[0],
      },
    })

    await wrapper.vm.$nextTick()
    expect(errorSpy).toHaveBeenCalled()
    expect(await axe(iconButton.html())).not.toHaveNoViolations()
  })

  it('can have a loading spinner', async () => {
    wrapper.setProps({ isLoading: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
