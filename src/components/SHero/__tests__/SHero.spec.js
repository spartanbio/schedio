import { shallowMount } from '@vue/test-utils'
import SHero from '@/components/SHero/SHero.vue'
import * as options from '@/components/SHero/options'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SHero.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })

  beforeEach(() => {
    wrapper = shallowMount(SHero, {
      slots: {
        head: 'Header Content',
        default: 'Body Content',
        foot: 'Foot Content',
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

  it('has a header', () => {
    expect(wrapper.vm.$slots.head).toBeTruthy()
  })

  it('has a body', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy()
  })

  it('requires a default slot', () => {
    shallowMount(SHero)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('hides empty slots', () => {
    const empty = shallowMount(SHero, { slots: { default: 'content' } })
    expect(empty.html()).toMatchSnapshot()
  })

  it('has a footer', () => {
    expect(wrapper.vm.$slots.foot).toBeTruthy()
  })

  options.colors.forEach((color) => {
    it(`can be ${color}`, async () => {
      wrapper.setProps({ color })
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })
  })

  options.heights.forEach((height) => {
    it(`can be ${height}`, () => {
      wrapper.setProps({ height })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('can have no padding on the body', () => {
    wrapper.setProps({ hasNoPadding: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be any html tag', () => {
    wrapper.setProps({ tag: 'section' })
    expect(wrapper.contains('section')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
