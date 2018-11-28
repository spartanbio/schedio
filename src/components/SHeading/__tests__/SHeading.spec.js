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

  it('does not need the tag specified', () => {
    expect(wrapper.props('tag')).toBeFalsy()
    expect(errorSpy).not.toBeCalled()
    expect(wrapper.vm.displayTag).toBeTruthy()
  })

  it('requires a heading level', () => {
    shallowMount(SHeading)
    expect(errorSpy).toBeCalled()
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('should have a level less than 3', () => {
    for (let i; i <= 3; i++) {
      shallowMount(SHeading, { propsData: { level: i } })
      expect(errorSpy).not.toBeCalled()
    }

    shallowMount(SHeading, { propsData: { level: 4 } })
    expect(errorSpy).toBeCalled()
  })

  it('can be display', () => {
    wrapper.setProps({ isDisplay: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('validates the display level', () => {
    wrapper.setProps({ isDisplay: true, level: 3 })
    expect(wrapper.vm.validateProps).toThrowError()
  })

  it('can be uppercase', () => {
    wrapper.setProps({ isUppercase: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be uppercase', () => {
    wrapper.setProps({ isSubtle: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('warns if subtle and uppercase', () => {
    shallowMount(SHeading, { propsData: { isUppercase: true, isSubtle: true } })
    expect(errorSpy).toBeCalled()
  })
})
