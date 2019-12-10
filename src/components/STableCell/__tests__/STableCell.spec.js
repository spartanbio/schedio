import { mount } from '@vue/test-utils'
import STableCell from '@/components/STableCell/STableCell.vue'
import STableRow from '@/components/STableRow/STableRow.vue'

describe('STableCell.vue', () => {
  let wrapper
  let tableCell

  beforeEach(() => {
    wrapper = mount({
      name: 'BaseWrapper',
      components: { STableCell, STableRow },
      template: `
        <tbody>
          <STableRow>
            <STableCell>Content</STableCell>
          </STableRow>
        </tbody>
      `,
    })

    tableCell = wrapper.find(STableCell)
  })

  it('renders correctly', () => {
    expect(tableCell.html()).toMatchSnapshot()
  })

  // mount this before test or `STableRow` tag will not update
  const headerWrapper = mount(
    {
      name: 'HeaderWrapper',
      components: { STableCell, STableRow },
      template: `
        <thead>
          <STableRow>
            <STableCell>Content</STableCell>
          </STableRow>
        </thead>
      `,
    },
    {
      attachToDocument: true,
    },
  )

  it("automatically detects if it's a header", () => {
    expect(wrapper.contains('th')).toBe(false)
    expect(headerWrapper.find(STableCell).html()).toMatchSnapshot()
    expect(headerWrapper.contains('th')).toBe(true)
  })

  it('can be manually set to use `th`', async () => {
    expect(wrapper.contains('th')).toBe(false)
    tableCell.setProps({ isHeader: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.contains('th')).toBe(true)
    expect(tableCell.html()).toMatchSnapshot()
  })

  it('can be numeric', async () => {
    tableCell.setProps({ isNumeric: true })
    await wrapper.vm.$nextTick()
    expect(tableCell.html()).toMatchSnapshot()
  })
})
