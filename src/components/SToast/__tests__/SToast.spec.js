import { shallowMount } from '@vue/test-utils'
import SToast from '@/components/SToast/SToast.vue'

describe('SToast.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(SToast)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
