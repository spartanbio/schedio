import { shallowMount } from '@vue/test-utils'
import SLabel from '@/components/SLabel/SLabel.vue'

describe('SLabel.vue', () => {
  const testBooleanProp = (propName, value = true) => {
    wrapper.setProps({ [propName]: value })
    expect(wrapper.html()).toMatchSnapshot()
  }

  const shallowMountWrapper = (additionalProps = {}) => {
    return shallowMount(SLabel, {
      propsData: { label: 'label', ...additionalProps }
    })
  }

  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  let wrapper

  beforeEach(() => {
    wrapper = shallowMountWrapper()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires label text', () => {
    shallowMount(SLabel)
    expect(errorSpy).toBeCalled()
  })

  it('can be required', () => {
    wrapper.setProps({ isOptional: false })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be inline', () => {
    testBooleanProp('isInline')
  })

  it('can be fullwidth', () => {
    wrapper.setProps({ isInline: true })
    testBooleanProp('isFullwidth')
  })

  it('can be reversed', () => {
    wrapper.setProps({ isInline: true })
    testBooleanProp('isReversed')
  })

  it('validates `is-fullwidth` and `is-reversed` are used with `is-inline`', () => {
    shallowMountWrapper({ isFullwidth: true })
    expect(errorSpy).toBeCalled()

    shallowMountWrapper({ isReversed: true })
    expect(errorSpy).toBeCalledTimes(2)
  })
})
