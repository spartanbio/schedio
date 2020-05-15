import { shallowMount } from '@vue/test-utils'
import SFormValidation from '@/components/SFormValidation/SFormValidation.vue'
import SIcon from '@/components/SIcon/SIcon.vue'
import { states } from '../options'
import icons from 'feather-icons/dist/icons.json'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SFormValidation.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SFormValidation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('validates its visual state', () => {
    shallowMount(SFormValidation, { propsData: { state: 'not valid' } })

    expect(errorSpy).toHaveBeenCalled()
  })

  it('accepts text as a prop or slot', async () => {
    wrapper.setProps({ text: 'Some text' })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Some text')
    expect(wrapper).toMatchSnapshot()

    const slotWrapper = shallowMount(SFormValidation, { slots: { default: 'More text' } })
    expect(slotWrapper.text()).toContain('More text')
    expect(slotWrapper).toMatchSnapshot()
  })

  states.forEach((state) => {
    it(`sets a visual state for ${state} state`, async () => {
      wrapper.setProps({ state })
      await wrapper.vm.$nextTick()
      expect(errorSpy).not.toHaveBeenCalled()
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })
  })

  it('accepts an icon prop', async () => {
    wrapper.setProps({ icon: Object.keys(icons)[0] })
    await wrapper.vm.$nextTick()
    expect(errorSpy).not.toHaveBeenCalled()

    const component = wrapper.findComponent(SIcon)
    expect(component.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('can hide its icon', async () => {
    wrapper.setProps({ icon: Object.keys(icons)[0], hideIcon: true })
    await wrapper.vm.$nextTick()
    expect(errorSpy).not.toHaveBeenCalled()

    const component = wrapper.findComponent(SIcon)
    expect(component.exists()).toBe(false)
  })
})
