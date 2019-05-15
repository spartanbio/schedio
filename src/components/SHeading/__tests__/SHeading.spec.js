import { shallowMount } from '@vue/test-utils'
import SHeading from '@/components/SHeading/SHeading.vue'

describe('SHeading.vue', () => {
  let errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SHeading, {
      propsData: {
        level: 1
      },
      slots: {
        default: 'Heading Content'
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have the tag specified', () => {
    wrapper.setProps({ tag: 'div' })
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
      expect(errorSpy).not.toBeCalled()
    }

    shallowMount(SHeading, { propsData: { level: 5 } })
    expect(errorSpy).toBeCalled()
  })

  it('can be display', () => {
    wrapper.setProps({ isDisplay: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have no case', () => {
    wrapper.setProps({ hasNoCase: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be subtle', () => {
    wrapper.setProps({ isSubtle: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
