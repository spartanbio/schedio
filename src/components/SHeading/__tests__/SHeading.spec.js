import { shallowMount } from '@vue/test-utils'
import SHeading from '@/components/SHeading/SHeading.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SHeading.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SHeading, {
      propsData: {
        level: 1,
      },
      slots: {
        default: 'Heading Content',
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

  it('can have the tag specified', async () => {
    wrapper.setProps({ tag: 'div' })
    await wrapper.vm.$nextTick()
    expect(wrapper.props('tag')).toBe('div')
  })

  it('should compute the h tag to use', () => {
    for (let i; i <= 4; i++) {
      shallowMount(SHeading, { propsData: { level: i } })
      expect(wrapper.props('tag')).toBe('h' + i)
    }
  })

  it('should have a level of 4 or less', () => {
    for (let i; i <= 4; i++) {
      shallowMount(SHeading, { propsData: { level: i } })
      expect(errorSpy).not.toHaveBeenCalled()
    }

    shallowMount(SHeading, { propsData: { level: 5 } })
    expect(errorSpy).toHaveBeenCalled()
  })

  it('can be display', async () => {
    wrapper.setProps({ isDisplay: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have no case', async () => {
    wrapper.setProps({ hasNoCase: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be subtle', async () => {
    wrapper.setProps({ isSubtle: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
