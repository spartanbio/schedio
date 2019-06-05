import { shallowMount, mount } from '@vue/test-utils'
import SFileInput from '../SFileInput.vue'
import MockFile from '../../../../tests/__mocks__/MockFile'
import { SChip } from '@/components/SChip'
import { SButton } from '@/components/SButton'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SFileInput.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  // mock files
  const fileA = new MockFile({
    name: 'test-file-a.txt',
    size: 44320,
    type: 'text/plain'
  })

  const fileB = new MockFile({
    name: 'test-file-b.txt',
    size: 512,
    type: 'text/plain'
  })

  const defaultProps = {
    id: 'file-input',
    name: 'file-input',
    label: 'File input'
  }

  beforeEach(() => {
    wrapper = shallowMount(SFileInput, {
      propsData: defaultProps
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', async () => {
    wrapper = mount(SFileInput, { propsData: defaultProps })
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires id, name, and label', () => {
    shallowMount(SFileInput)
    // 4 times because we one of the props expects a string, but receives `undefined`
    expect(errorSpy).toBeCalledTimes(4)
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  /**
   * We can't test the upload functionality with Jest currently.
   * jsdom is missing the `DataTransfer` object.
   * Instead, we're just going to test the input's input handler.
   */
  it('handles inputs', () => {
    // watch the input handler
    const inputSpy = jest.spyOn(wrapper.vm, 'handleFiles')
    wrapper.setMethods({ handleFiles: inputSpy })
    // ensure input is triggered and handler is called
    wrapper.find('input').trigger('input')
    expect(inputSpy).toBeCalled()
    // fake the input event
    wrapper.vm.handleFiles({ target: { files: [fileA] } })
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.contains(SChip)).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('passes `multiple` to the input', async () => {
    wrapper = mount(SFileInput, { propsData: { ...defaultProps, multiple: true } })
    expect(wrapper.find('input').element.multiple).toBeTruthy()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('can upload multiple files', () => {
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileList.length).toBe(2)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can remove files', () => {
    wrapper = mount(SFileInput, {
      propsData: defaultProps
    })

    // emitted[0]
    wrapper.vm.handleFiles({ target: { files: [fileA] } })
    expect(wrapper.vm.fileList.length).toBe(1)
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')[0][0]).toEqual(wrapper.vm.fileList)

    // find the button and click it
    // emitted[1] - `click` also triggers an input event
    wrapper.find(SButton).trigger('click')
    expect(wrapper.vm.fileList.length).toBe(0)
    expect(wrapper.emitted('input')[1][0]).toEqual(wrapper.vm.fileList)

    // with multiple files
    // emitted[0]
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileList.length).toBe(2)
    expect(wrapper.emitted('input')[2][0]).toEqual(wrapper.vm.fileList)

    // find all buttons, click the first
    // emitted[3]
    wrapper
      .findAll(SButton)
      .at(0)
      .trigger('click')
    expect(wrapper.vm.fileList.length).toBe(1)
    expect(wrapper.emitted('input')[3][0]).toEqual(wrapper.vm.fileList)

    // ensure only the desired file was deleted
    expect(wrapper.vm.fileNames).toContain(fileB.name)
  })

  it('works with v-model', () => {
    wrapper = mount({
      components: { SFileInput },
      data: () => ({ files: [], defaultProps }),
      template: '<SFileInput v-bind="defaultProps" v-model="files" />'
    })

    const fileInput = wrapper.find(SFileInput)

    fileInput.vm.handleFiles({ target: { files: [fileA] } })
    expect(wrapper.vm.files).toEqual(fileInput.vm.fileList)
  })

  it('displays a file count', () => {
    wrapper.setProps({ multiple: true })
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    expect(wrapper.text()).toContain('2 file')
  })

  it('can hide a file count', () => {
    wrapper.setProps({ multiple: true, hideCount: true })
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    expect(wrapper.text()).not.toContain('2 file')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('checks for duplicate file names', () => {
    wrapper.setProps({ multiple: true })
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    wrapper.vm.handleFiles({ target: { files: [fileA] } })

    const emittedError = wrapper.emitted('error')
    expect(emittedError).toBeTruthy()
    expect(emittedError[0][0].payload[0].failed).toContain('duplicate name')
    expect(emittedError[0][0].payload[0].name).toBe(fileA.name)
    expect(wrapper.vm.fileList.length).toBe(2)
  })

  it('displays file names to users', () => {
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileNames).toEqual([fileA, fileB].map(file => file.name))
    expect(wrapper.text()).toContain(fileA.name)
    expect(wrapper.text()).toContain(fileB.name)
  })

  it('hides the file list if no files exist', () => {
    expect(wrapper.find('ul').isVisible()).toBe(false)
  })

  it('checks for max file size', () => {
    wrapper.setProps({ multiple: true, maxSize: 1024 })
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } })

    const emittedError = wrapper.emitted('error')
    expect(emittedError).toBeTruthy()
    expect(emittedError[0][0].payload[0].failed).toContain('exceeds max size')
    expect(emittedError[0][0].payload[0].name).toBe(fileA.name)
    expect(wrapper.vm.fileList.length).toBe(1)
  })

  it('displays the file size limit', () => {
    const maxSize = 23829
    wrapper.setProps({ maxSize })
    expect(wrapper.text()).toContain(maxSize)
  })

  it('can have custom text', () => {
    const customText = 'Custom text'
    wrapper.setProps({ text: customText })
    expect(wrapper.text()).toContain(customText)
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('drop zone', () => {
    let display

    beforeEach(() => {
      wrapper.setProps({ isDroppable: true })
      display = wrapper.find('.file-input__display')
    })

    it('can be a drop zone', () => {
      expect(errorSpy).not.toBeCalled()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('can hide the icon', () => {
      wrapper.setProps({ hideIcon: true })
      expect(wrapper.contains('sicon')).toBe(false)
      expect(wrapper.html()).toMatchSnapshot()
    })

    it.each`
      event          | handlers                         | includesClass                      | excludesClass
      ${'dragenter'} | ${['handleDragenter']}           | ${'file-input__display--dragover'} | ${''}
      ${'dragover'}  | ${['handleDragover']}            | ${''}                              | ${''}
      ${'dragleave'} | ${['handleDragleave']}           | ${''}                              | ${'file-input__display--dragover'}
      ${'drop'}      | ${['handleDrop', 'handleFiles']} | ${''}                              | ${''}
    `('handles $event correctly', ({ event, handlers, includesClass, excludesClass }) => {
      const spies = new Map(handlers.map(handler => [handler, jest.spyOn(wrapper.vm, handler)]))

      spies.forEach((spy, handler) => wrapper.setMethods({ [handler]: spy }))
      display.trigger(event)

      spies.forEach(spy => expect(spy).toBeCalled())
      if (includesClass) expect(display.classes()).toContain(includesClass)
      if (excludesClass) expect(display.classes()).not.toContain(excludesClass)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
