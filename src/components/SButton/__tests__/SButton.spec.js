import * as options from '@/components/SButton/options'
import SButton from '@/components/SButton/SButton.vue'
import { shallowMount } from '@vue/test-utils'
import icons from 'feather-icons/dist/icons.json'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

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

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Button Text')
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('handles clicks', () => {
    wrapper.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  Promise.all(
    options.colors.map(color => {
      it(`can be ${color}`, async () => {
        wrapper.setProps({ color })
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  )

  Promise.all(
    options.colors.map(color => {
      it(`can be outlined with ${color}`, async () => {
        wrapper.setProps({ color, isOutlined: true })
        expect(await axe(wrapper.html())).toHaveNoViolations()
        expect(wrapper.classes()).toContain(`button--color-${color}-outlined`)
        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  )

  it('validates fill color', () => {
    shallowMount(SButton, { propsData: { color: 'not a color' } })
    expect(errorSpy).toBeCalled()
  })

  options.sizes.forEach(size => {
    it(`can be ${size}`, () => {
      wrapper.setProps({ size })
      expect(wrapper.classes()).toContain(`button--size-${size}`)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates color', () => {
    shallowMount(SButton, { propsData: { size: 'not a size' } })
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

  it('can have an icon and no text', async () => {
    const iconButton = shallowMount(SButton, {
      slots: {
        default: 'Button Text'
      },
      listeners: { click },
      attrs: {
        'aria-label': 'Button'
      },
      propsData: {
        iconOnly: true,
        iconLeft: iconList[0]
      }
    })

    expect(await axe(iconButton.html())).toHaveNoViolations()
    expect(iconButton.text()).toBeFalsy()
    expect(iconButton.html()).toMatchSnapshot()
  })

  it('errors if no discernible text', async () => {
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

    expect(errorSpy).toBeCalled()
    expect(await axe(iconButton.html())).not.toHaveNoViolations()
  })

  it('can have a loading spinner', async () => {
    wrapper.setProps({ isLoading: true })
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })
})
