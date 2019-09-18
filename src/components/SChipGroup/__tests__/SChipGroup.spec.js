import { shallowMount, mount } from '@vue/test-utils'
import SChipGroup from '@/components/SChipGroup/SChipGroup.vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import { colors } from '@/components/SChip/options'

expect.extend(toHaveNoViolations)

describe('SChipGroup.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SChipGroup)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('has a slot', () => {
    const slotContent = 'test content'
    wrapper = mount(SChipGroup, {
      slots: {
        default: slotContent,
      },
    })

    expect(errorSpy).not.toHaveBeenCalled()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toContain(slotContent)
  })

  it.each(colors)('can have color %s', async (color) => {
    const colorWrapper = shallowMount(SChipGroup, { propsData: { color } })

    expect(errorSpy).not.toHaveBeenCalled()
    expect(colorWrapper.html()).toMatchSnapshot()
    expect(await axe(colorWrapper.html())).toHaveNoViolations()
  })

  it('validates colors', () => {
    shallowMount(SChipGroup, { propsData: { color: 'Not a color' } })
    expect(errorSpy).toHaveBeenCalledTimes(2)
  })
})
