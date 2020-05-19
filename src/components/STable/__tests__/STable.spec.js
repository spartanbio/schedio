import { mount } from '@vue/test-utils'
import STable from '@/components/STable/STable.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('STable.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
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
    expect(slotWrapper.find('caption').exists()).toBe(true)
    expect(slotWrapper.find('tbody').exists()).toBe(true)
    expect(slotWrapper.find('thead').exists()).toBe(true)
    expect(slotWrapper.find('tfoot').exists()).toBe(true)

    expect(slotWrapper.html()).toMatchSnapshot()
  })

  it('generates header cells from data', () => {
    expect(wrapper.find('th').exists()).toBe(true)
  })

  it('can override generated headers', async () => {
    wrapper.setProps({
      header: [
        'One',
        'Two',
        'Three',
      ],
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can hide header cells', async () => {
    wrapper.setProps({ hideHeader: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('thead').exists()).toBe(false)
  })

  it('can duplicate the header in the footer', async () => {
    wrapper.setProps({ headerInFooter: true })
    await wrapper.vm.$nextTick()
    const headerCells = wrapper.findAll('th')
    const footerCells = wrapper.findAll('tfoot > tr > td')

    expect(footerCells.length).toBe(headerCells.length)

    for (let i = 0; i < headerCells.length; i++) {
      expect(footerCells.at(i).text()).toBe(headerCells.at(i).text())
    }

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have a caption', async () => {
    wrapper.setProps({ caption: 'caption' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('caption').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have the caption at the top', async () => {
    wrapper.setProps({ hasCaptionTop: true, caption: 'caption' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.table__caption--top').exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be bordered', async () => {
    wrapper.setProps({ isBordered: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be hoverable', async () => {
    wrapper.setProps({ isHoverable: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be striped', async () => {
    wrapper.setProps({ isStriped: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be fullwidth', async () => {
    wrapper.setProps({ isFullwidth: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
