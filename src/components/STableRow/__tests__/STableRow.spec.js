import { shallowMount } from '@vue/test-utils'
import STableRow from '@/components/STableRow/STableRow.vue'

describe('STableRow.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(STableRow, {
      slots: {
        default: '<td>Slot content</td>'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
