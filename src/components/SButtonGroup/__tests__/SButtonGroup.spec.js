import { mount } from '@vue/test-utils'
import SButton from '@/components/SButton/SButton.vue'
import SButtonGroup from '@/components/SButtonGroup/SButtonGroup.vue'

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

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders child buttons', () => {
    expect(buttonGroup.is(SButtonGroup)).toBe(true)
    expect(wrapper.contains(SButton)).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('changes child button colors', () => {
    buttonGroup.setProps({ groupColor: 'red' })
    expect(buttonGroup.contains('.button-group--color-red')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('groups child buttons', () => {
    buttonGroup.setProps({ areGrouped: true })
    expect(buttonGroup.contains('.button-group--grouped')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
