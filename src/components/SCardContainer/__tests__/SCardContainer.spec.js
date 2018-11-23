import { shallowMount } from '@vue/test-utils'
import SCardContainer from '@/components/SCardContainer/SCardContainer.vue'

describe('SCardContainer.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SCardContainer, {
      slots: {
        default: '<div>Slot content</div>'
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have content', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy()
  })
})
