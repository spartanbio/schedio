import { shallowMount } from '@vue/test-utils'
import SLogo from '@/components/SLogo/SLogo.vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import { colors } from '../options'

expect.extend(toHaveNoViolations)

let wrapper
const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })

beforeEach(() => {
  wrapper = shallowMount(SLogo)
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('SLogo.vue', () => {
  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it.each(colors)('can be color %s', async (color) => {
    wrapper.setProps({ color })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(errorSpy).not.toBeCalled()
  })

  it('validates color', async () => {
    shallowMount(SLogo, { propsData: { color: 'not a color' } })
    await wrapper.vm.$nextTick()
    expect(errorSpy).toBeCalled()
  })
})
