import { shallowMount } from '@vue/test-utils'
import SFormField from '@/components/SFormField/SFormField.vue'

describe('SFormField.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(SFormField)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
