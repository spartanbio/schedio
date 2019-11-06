import mobileBreakpoints from '@/components/SContainer/mobile-breakpoints'
import SContainerRow from '@/components/SContainerRow/SContainerRow.vue'
import rowOptions from '@/components/SContainerRow/row-options'
import { shallowMount } from '@vue/test-utils'
import camelCase from 'lodash.camelcase'

describe('SContainerRow.vue', () => {
  const staticProps = ['justify', 'align']
  // Generate the same props generated in `SContainerRow.vue`
  const propsToGenerate = [
    'align-until',
    'align-after',
    'justify-until',
    'justify-after',
  ]
  const propList = propsToGenerate.reduce((list, prop) => {
    mobileBreakpoints.forEach(breakPoint => list.push(camelCase(`${prop}-${breakPoint}`)))
    return list
  }, staticProps)

  const rowPropTest = (propName, value) => {
    wrapper.setProps({ [propName]: value })
    expect(wrapper.props(propName)).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SContainerRow, {
      slots: {
        default: '<div>Row Content</div>',
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // eslint-disable-next-line jest/expect-expect
  it('can be reversed', () => {
    rowPropTest('isReversed', true)
  })

  it('generates props for mobile breakpoints', () => {
    propList.forEach(expect(wrapper.props()).toHaveProperty)
  })

  propList.forEach((propName) => {
    const flexOptions = Object.values(rowOptions).filter(opt => !!opt)
    flexOptions.forEach((option) => {
      // eslint-disable-next-line jest/expect-expect
      it(`can be ${propName} ${option}`, () => rowPropTest(propName, option))
    })
  })
})
