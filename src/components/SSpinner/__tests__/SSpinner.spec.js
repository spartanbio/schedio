import { shallowMount } from '@vue/test-utils';
import * as options from '@/components/SSpinner/options';
import SSpinner from '@/components/SSpinner/SSpinner.vue';

describe('SSpinner.vue', () => {
  let wrapper;
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });

  beforeEach(() => {
    wrapper = shallowMount(SSpinner, {
      propsData: {
        progress: '50',
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  options.colors.forEach((color) => {
    it(`can be ${color}`, async () => {
      wrapper.setProps({ color });
      await wrapper.vm.$nextTick();
      expect(errorSpy).not.toHaveBeenCalled();
      expect(wrapper.props('color')).toBe(color);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it('only allows valid colors', () => {
    shallowMount(SSpinner, {
      propsData: {
        color: 'this is not a color',
      },
    });
    expect(errorSpy).toHaveBeenCalled();
  });

  options.sizes.forEach((size) => {
    it(`can be ${size}`, async () => {
      wrapper.setProps({ size });
      await wrapper.vm.$nextTick();
      expect(errorSpy).not.toHaveBeenCalled();
      expect(wrapper.props('size')).toBe(size);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it('only allows valid sizes', () => {
    shallowMount(SSpinner, {
      propsData: {
        size: 'this is not a size',
      },
    });
    expect(errorSpy).toHaveBeenCalled();
  });
});
