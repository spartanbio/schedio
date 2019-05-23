import { shallowMount } from '@vue/test-utils'
import SFileInput from '../SFileInput.vue'
import MockFile from '../../../../tests/__mocks__/MockFile'
import { types } from '../options'

describe('SFileInput.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  // mock files
  const fileA = new MockFile({
    name: 'test-file-a.txt',
    size: 44320,
    type: 'text/plain'
  })

  const fileB = new File([''], 'test-file-b.txt', {
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

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
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
   * Instead, we're just going to test the input's change handler.
   */
  it('handles changes to the input', () => {
    // watch the change handler
    const changeSpy = jest.spyOn(wrapper.vm, 'handleChange')
    wrapper.setMethods({ handleChange: changeSpy })
    // ensure change is triggered and handler is called
    wrapper.find('input').trigger('change')
    expect(changeSpy).toBeCalled()
    // fake the change event input
    wrapper.vm.handleChange({ target: { files: [fileA] } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('passes `multiple` to the input', () => {
    wrapper.setProps({ multiple: true })
    expect(wrapper.find('input').element.multiple).toBeTruthy()
  })

  it('can upload multiple files', () => {
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileList.length).toBe(2)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can remove files', () => {
    // single file
    wrapper.vm.handleChange({ target: { files: [fileA] } })
    expect(wrapper.vm.fileList.length).toBe(1)
    // find the button stub and click it
    wrapper.find('sbutton').trigger('click')
    expect(wrapper.vm.fileList.length).toBe(0)
    // with multiple files
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileList.length).toBe(2)
    // find all button stubs, click the first
    wrapper
      .findAll('sbutton')
      .at(0)
      .trigger('click')
    expect(wrapper.vm.fileList.length).toBe(1)
    // ensure only the desired file was deleted
    expect(wrapper.vm.fileNames).toContain(fileB.name)
  })

  it('displays a file count', () => {
    wrapper.setProps({ multiple: true })
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    expect(wrapper.text()).toContain('2 file')
  })

  it('can hide a file count', () => {
    wrapper.setProps({ multiple: true, hideCount: true })
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    expect(wrapper.text()).not.toContain('2 file')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('checks for duplicate file names', () => {
    wrapper.setProps({ multiple: true })
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    wrapper.vm.handleChange({ target: { files: [fileA] } })

    const emittedError = wrapper.emitted('error')
    expect(emittedError).toBeTruthy()
    expect(emittedError[0][0].payload[0].failed).toContain('duplicate name')
    expect(emittedError[0][0].payload[0].name).toBe(fileA.name)
    expect(wrapper.vm.fileList.length).toBe(2)
  })

  it('displays file names to users', () => {
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })
    expect(wrapper.vm.fileNames).toEqual([fileA, fileB].map(file => file.name))
    expect(wrapper.text()).toContain(fileA.name)
    expect(wrapper.text()).toContain(fileB.name)
  })

  it('checks for max file size', () => {
    wrapper.setProps({ multiple: true, maxSize: 1024 })
    wrapper.vm.handleChange({ target: { files: [fileA, fileB] } })

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

  it.each(types)(`can have type %s`, t => {
    wrapper.setProps({ type: t })
    expect(errorSpy).not.toBeCalled()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('validates its type', () => {
    shallowMount(SFileInput, {
      propsData: {
        ...defaultProps,
        type: 'Not a type'
      }
    })

    expect(errorSpy).toBeCalledTimes(2)
  })

  it("can hide the icon when it's an area", () => {
    wrapper.setProps({ type: 'area', hideIcon: true })
    expect(wrapper.contains('sicon')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
