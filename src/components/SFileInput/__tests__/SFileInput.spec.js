import { mount, shallowMount } from '@vue/test-utils';
import SFileInput from '../SFileInput.vue';
import MockFile from '../../../../tests/__mocks__/MockFile';
import { SChip } from '@/components/SChip';
import { SButton } from '@/components/SButton';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SFileInput.vue', () => {
  let wrapper;
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });

  // mock files
  const fileA = new MockFile({
    name: 'test-file-a.txt',
    size: 44320,
    type: 'text/plain',
  });

  const fileB = new MockFile({
    name: 'test-file-b.txt',
    size: 512,
    type: 'text/plain',
  });

  const defaultProps = {
    id: 'file-input',
    name: 'file-input',
    label: 'File input',
  };

  beforeEach(() => {
    wrapper = shallowMount(SFileInput, {
      propsData: defaultProps,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', async () => {
    wrapper = mount(SFileInput, { propsData: defaultProps });
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('requires id, and label', () => {
    shallowMount(SFileInput);
    // 4 times because we one of the props expects a string, but receives `undefined`
    expect(errorSpy).toHaveBeenCalledTimes(3);
    expect(errorSpy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
  });

  /**
   * We can't test the upload functionality with Jest currently.
   * jsdom is missing the `DataTransfer` object.
   * Instead, we're just going to test the input's input handler.
   */
  it('handles inputs', async () => {
    // watch the input handler
    const inputSpy = jest.spyOn(wrapper.vm, 'handleFiles');
    wrapper.setMethods({ handleFiles: inputSpy });
    await wrapper.vm.$nextTick();
    // ensure input is triggered and handler is called
    wrapper.find('input').trigger('input');
    await wrapper.vm.$nextTick();
    expect(inputSpy).toHaveBeenCalled();
    // fake the input event
    wrapper.vm.handleFiles({ target: { files: [fileA] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.findComponent(SChip).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('passes `multiple` to the input', async () => {
    wrapper = mount(SFileInput, { propsData: { ...defaultProps, multiple: true } });
    expect(wrapper.find('input').element.multiple).toBeTruthy();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can upload multiple files', async () => {
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileList.length).toBe(2);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can remove files', async () => {
    wrapper = mount(SFileInput, {
      propsData: defaultProps,
    });

    // emitted[0]
    wrapper.vm.handleFiles({ target: { files: [fileA] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileList.length).toBe(1);
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0][0]).toEqual(wrapper.vm.fileList);

    // find the button and click it
    // emitted[1] - `click` also triggers an input event
    wrapper.find(SButton).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileList.length).toBe(0);
    expect(wrapper.emitted('input')[1][0]).toEqual(wrapper.vm.fileList);

    // with multiple files
    // emitted[0]
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileList.length).toBe(2);
    expect(wrapper.emitted('input')[2][0]).toEqual(wrapper.vm.fileList);

    // find all buttons, click the first
    // emitted[3]
    wrapper
      .findAll(SButton)
      .at(0)
      .trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileList.length).toBe(1);
    expect(wrapper.emitted('input')[3][0]).toEqual(wrapper.vm.fileList);

    // ensure only the desired file was deleted
    expect(wrapper.vm.fileNames).toContain(fileB.name);
  });

  it('works with v-model', async () => {
    wrapper = mount({
      components: { SFileInput },
      data: () => ({ files: [], defaultProps }),
      template: '<SFileInput v-bind="defaultProps" v-model="files" />',
    });

    const fileInput = wrapper.find(SFileInput);

    fileInput.vm.handleFiles({ target: { files: [fileA] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.files).toEqual(fileInput.vm.fileList);
  });

  it('displays a file count', async () => {
    wrapper.setProps({ multiple: true });
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('2 file');
  });

  it('can hide a file count', async () => {
    wrapper.setProps({ multiple: true, hideCount: true });
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('2 file');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('checks for duplicate file names', async () => {
    wrapper.setProps({ multiple: true });
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    wrapper.vm.handleFiles({ target: { files: [fileA] } });
    await wrapper.vm.$nextTick();

    const emittedError = wrapper.emitted('error');
    expect(emittedError).toBeTruthy();
    expect(emittedError[0][0].payload[0].failed).toContain('duplicate name');
    expect(emittedError[0][0].payload[0].name).toBe(fileA.name);
    expect(wrapper.vm.fileList.length).toBe(2);
  });

  it('displays file names to users', async () => {
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.fileNames).toEqual([fileA, fileB].map(file => file.name));
    expect(wrapper.text()).toContain(fileA.name);
    expect(wrapper.text()).toContain(fileB.name);
  });

  it('hides the file list if no files exist', () => {
    expect(wrapper.find('schipgroup-stub').isVisible()).toBe(false);
  });

  it('checks for max file size', async () => {
    wrapper.setProps({ multiple: true, maxSize: 1024 });
    wrapper.vm.handleFiles({ target: { files: [fileA, fileB] } });
    await wrapper.vm.$nextTick();

    const emittedError = wrapper.emitted('error');
    expect(emittedError).toBeTruthy();
    expect(emittedError[0][0].payload[0].failed).toContain('exceeds max size');
    expect(emittedError[0][0].payload[0].name).toBe(fileA.name);
    expect(wrapper.vm.fileList.length).toBe(1);
  });

  it('displays the file size limit', async () => {
    const maxSize = 23829;
    wrapper.setProps({ maxSize });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(maxSize);
  });

  it('can have custom text', async () => {
    const customText = 'Custom text';
    wrapper.setProps({ text: customText });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(customText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('drop zone', () => {
    let display;

    beforeEach(() => {
      wrapper.setProps({ isDroppable: true });
      display = wrapper.find('.file-input__display');
    });

    it('can be a drop zone', async () => {
      await wrapper.vm.$nextTick();
      expect(errorSpy).not.toHaveBeenCalled();
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('can hide the icon', async () => {
      wrapper.setProps({ hideIcon: true });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('sicon').exists()).toBe(false);
      expect(wrapper.html()).toMatchSnapshot();
    });

    const events = [
      ['dragenter', ['handleDragenter'], 'file-input__display--dragover', ''],
      ['dragover', ['handleDragover'], '', ''],
      ['dragleave', ['handleDragleave'], '', 'file-input__display--dragover'],
      ['drop', ['handleDrop', 'handleFiles'], '', ''],
    ];

    it.each(events)('handles "%s" correctly', async (event, handlers, included, excluded) => {
      const spies = new Map(handlers.map(handler => [handler, jest.spyOn(wrapper.vm, handler)]));

      spies.forEach((spy, handler) => wrapper.setMethods({ [handler]: spy }));
      display.trigger(event);
      await wrapper.vm.$nextTick();
      spies.forEach(spy => expect(spy).toHaveBeenCalled());

      if (included) expect(display.classes()).toContain(included);
      if (excluded) expect(display.classes()).not.toContain(excluded);

      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
