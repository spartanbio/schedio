import { mount } from '@vue/test-utils'
import SButton from '@/components/SButton/SButton.vue'
import SButtonGroup from '@/components/SButtonGroup/SButtonGroup.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SButtonGroup.vue', () => {
  let wrapper
  let buttonGroup

  beforeEach(() => {
    wrapper = mount(
      {
        components: { SButton, SButtonGroup },
        template: `
          <SButtonGroup>
            <SButton v-for="i in 3" :key="i">
              Button {{ i }}
            </SButton>
          </SButtonGroup>
        `
      },
      { stubs: { SButton: true } }
    )

    buttonGroup = wrapper.find(SButtonGroup)
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('renders child buttons', () => {
    expect(buttonGroup.is(SButtonGroup)).toBe(true)
    expect(wrapper.contains(SButton)).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('changes child button colors', async () => {
    buttonGroup.setProps({ color: 'red' })
    expect(buttonGroup.classes()).toContain(`button-group--color-red`)
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('changes child button outlines', async () => {
    buttonGroup.setProps({ color: 'red', isOutlined: true, isGrouped: true })
    expect(buttonGroup.classes()).toContain('button-group--color-red-outlined')
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('groups child buttons', () => {
    buttonGroup.setProps({ isGrouped: true })
    expect(buttonGroup.contains('.button-group--grouped')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('disables shadow based on children disabled status', async () => {
    const disabledWrapper = mount({
      components: { SButton, SButtonGroup },
      props: {
        disabled: {
          type: Boolean,
          default: false
        }
      },
      template: `
          <SButtonGroup>
            <SButton v-for="i in 3" :key="i" :disabled="disabled">
              Button {{ i }}
            </SButton>
          </SButtonGroup>
        `
    })

    disabledWrapper.setProps({ disabled: true })

    expect(disabledWrapper.classes()).toContain('button-group--disabled')
    expect(disabledWrapper.html()).toMatchSnapshot()
    expect(await axe(disabledWrapper.html())).toHaveNoViolations()
  })
})
