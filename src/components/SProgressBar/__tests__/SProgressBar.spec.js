import { shallowMount } from '@vue/test-utils';
import SProgressBar from '@/components/SProgressBar/SProgressBar.vue';
import * as options from '@/components/SProgressBar/options';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SProgressBar.vue', () => {
  let wrapper;
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });

  beforeEach(() => {
    wrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: '50',
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('renders progress', () => {
    shallowMount(SProgressBar);
    expect(errorSpy).toHaveBeenCalled();
  });

  it('only allows values between 0 and 100', async () => {
    // we need to mount new components to test the prop validator
    const smallWrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: -100,
      },
    });
    const bigWrapper = shallowMount(SProgressBar, {
      propsData: {
        progress: 200,
      },
    });

    wrapper.setProps({ progress: -100 });
    await wrapper.vm.$nextTick();
    expect(smallWrapper.vm.computedProgress).toBe(0);
    wrapper.setProps({ progress: 200 });
    await wrapper.vm.$nextTick();
    expect(bigWrapper.vm.computedProgress).toBe(100);
    // 4 times because Vue console.errors if prop is invalid, then we return consoe.error
    expect(errorSpy).toHaveBeenCalledTimes(4);
  });

  options.colors.forEach((color) => {
    it(`can be ${color}`, async () => {
      wrapper.setProps({ color });
      await wrapper.vm.$nextTick();
      expect(errorSpy).not.toHaveBeenCalled();
      expect(wrapper.props('color')).toBe(color);
      expect(wrapper.html()).toMatchSnapshot();
      expect(await axe(wrapper.html())).toHaveNoViolations();
    });
  });

  it('only allows valid colors', () => {
    shallowMount(SProgressBar, {
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
    shallowMount(SProgressBar, {
      propsData: {
        size: 'this is not a size',
      },
    });
    expect(errorSpy).toHaveBeenCalled();
  });

  it('can display a message', async () => {
    const message = 'this is a message';
    wrapper.setProps({ message });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(message);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can hide the percent complete', async () => {
    wrapper.setProps({ hidePercentComplete: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).not.toContain(wrapper.props('progress') + '%');
  });
});
