import { shallowMount } from '@vue/test-utils';
import SLabel from '@/components/SLabel/SLabel.vue';

describe('SLabel.vue', () => {
  const testBooleanProp = async (propName, value = true) => {
    wrapper.setProps({ [propName]: value });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  };

  const shallowMountWrapper = (additionalProps = {}) => {
    return shallowMount(SLabel, {
      propsData: { label: 'label', ...additionalProps },
    });
  };

  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMountWrapper();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('requires label text', () => {
    shallowMount(SLabel);
    expect(errorSpy).toHaveBeenCalled();
  });

  it('can be required', async () => {
    wrapper.setProps({ isOptional: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can hide the optional tag', async () => {
    wrapper.setProps({ hideOptional: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('Optional');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can be inline', () => {
    testBooleanProp('isInline');
  });

  it('can be fullwidth', async () => {
    wrapper.setProps({ isInline: true });
    await wrapper.vm.$nextTick();
    testBooleanProp('isFullwidth');
  });

  it('can be reversed', async () => {
    wrapper.setProps({ isInline: true });
    await wrapper.vm.$nextTick();
    testBooleanProp('isReversed');
  });

  it('validates `is-fullwidth` and `is-reversed` are used with `is-inline`', () => {
    shallowMountWrapper({ isFullwidth: true });
    expect(errorSpy).toHaveBeenCalled();

    shallowMountWrapper({ isReversed: true });
    expect(errorSpy).toHaveBeenCalledTimes(2);
  });
});
