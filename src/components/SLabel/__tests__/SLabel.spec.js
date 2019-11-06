import { shallowMount } from '@vue/test-utils'
import SLabel from '@/components/SLabel/SLabel.vue'

describe('SLabel.vue', () => {
  const testBooleanProp = (propName, value = true) => {
    wrapper.setProps({ [propName]: value })
    expect(wrapper.html()).toMatchSnapshot()
  }

  const shallowMountWrapper = (additionalProps = {}) => {
    return shallowMount(SLabel, {
      propsData: { label: 'label', ...additionalProps },
    })
  }

  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })

  let wrapper

  beforeEach(() => {
    wrapper = shallowMountWrapper()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires label text', () => {
    shallowMount(SLabel)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('can be required', () => {
    wrapper.setProps({ isOptional: false })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide the optional tag', () => {
    wrapper.setProps({ hideOptional: true })
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })

  /* eslint-disable jest/expect-expect */
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
  /* eslint-enable jest/expect-expect */

  it('validates `is-fullwidth` and `is-reversed` are used with `is-inline`', () => {
    shallowMountWrapper({ isFullwidth: true })
    expect(errorSpy).toHaveBeenCalled()

    shallowMountWrapper({ isReversed: true })
    expect(errorSpy).toHaveBeenCalledTimes(2)
  })
})
