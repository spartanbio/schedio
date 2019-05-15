import { shallowMount } from '@vue/test-utils'
import SFormValidation from '@/components/SFormValidation/SFormValidation.vue'
import SIcon from '@/components/SIcon/SIcon.vue'
import { states } from '../options'
import icons from 'feather-icons/dist/icons.json'

describe('SFormValidation.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SFormValidation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('validates its visual state', () => {
    shallowMount(SFormValidation, { propsData: { state: 'not valid' } })

    expect(errorSpy).toBeCalled()
  })

  it('accepts text as a prop or slot', () => {
    wrapper.setProps({ text: 'Some text' })
    expect(wrapper.text()).toContain('Some text')
    expect(wrapper).toMatchSnapshot()

    const slotWrapper = shallowMount(SFormValidation, { slots: { default: 'More text' } })
    expect(slotWrapper.text()).toContain('More text')
    expect(slotWrapper).toMatchSnapshot()
  })

  states.forEach(state => {
    it(`sets a visual state for ${state} state`, () => {
      wrapper.setProps({ state })
      // test if `state = ''` does not show an icon while other states do
      expect(wrapper.contains(SIcon)).toBe(!!state)
      expect(errorSpy).not.toBeCalled()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('accepts an icon prop', () => {
    wrapper.setProps({ icon: Object.keys(icons)[0] })
    expect(errorSpy).not.toBeCalled()
    expect(wrapper.contains(SIcon)).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('can hide its icon', () => {
    wrapper.setProps({ icon: Object.keys(icons)[0], hideIcon: true })
    expect(errorSpy).not.toBeCalled()
    expect(wrapper.contains(SIcon)).toBe(false)
  })
})
