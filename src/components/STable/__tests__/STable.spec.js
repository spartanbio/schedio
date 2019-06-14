import { mount } from '@vue/test-utils'
import STable from '@/components/STable/STable.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('STable.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = mount(STable, {
      propsData: {
        tableData: [
          {
            col1: 'Cell 1',
            col2: 'Cell 2',
            col3: 'Cell 3',
          },
          {
            col1: 'Cell 4',
            col2: 'Cell 5',
            col3: 'Cell 6',
          },
        ],
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires data', () => {
    mount(STable)
    expect(errorSpy).toHaveBeenCalled()
  })

  it('allows slots to be used for data', () => {
    const slotWrapper = mount(STable, {
      slots: {
        caption: '<span>Caption</span>',
        header: '<tr><th>Header</th></tr>',
        default: '<tr><td>Slot content</td></tr>',
        footer: '<tr><td>Footer</td></tr>',
      },
    })

    expect(errorSpy).not.toHaveBeenCalled()
    expect(slotWrapper.contains('caption')).toBe(true)
    expect(slotWrapper.contains('tbody')).toBe(true)
    expect(slotWrapper.contains('thead')).toBe(true)
    expect(slotWrapper.contains('tfoot')).toBe(true)

    expect(slotWrapper.html()).toMatchSnapshot()
  })

  it('generates header cells from data', () => {
    expect(wrapper.contains('th')).toBe(true)
  })

  it('can override generated headers', () => {
    wrapper.setProps({
      header: [
        'One',
        'Two',
        'Three',
      ],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide header cells', () => {
    wrapper.setProps({ hideHeader: true })
    expect(wrapper.contains('thead')).toBe(false)
  })

  it('can duplicate the header in the footer', () => {
    wrapper.setProps({ headerInFooter: true })
    const headerCells = wrapper.findAll('th')
    const footerCells = wrapper.findAll('tfoot > tr > td')

    expect(footerCells.length).toBe(headerCells.length)

    for (let i = 0; i < headerCells.length; i++) {
      expect(footerCells.at(i).text()).toBe(headerCells.at(i).text())
    }

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have a caption', () => {
    wrapper.setProps({ caption: 'caption' })
    expect(wrapper.contains('caption')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have the caption at the top', () => {
    wrapper.setProps({ hasCaptionTop: true, caption: 'caption' })
    expect(wrapper.contains('.table__caption--top')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be bordered', () => {
    wrapper.setProps({ isBordered: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be hoverable', () => {
    wrapper.setProps({ isHoverable: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be striped', () => {
    wrapper.setProps({ isStriped: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
