import SToast from '@/components/SToast/SToast.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { positions, types } from '../options';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SToast.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SToast, {
      propsData: {
        type: types[0],
        body: 'Text',
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  types.forEach((type) => {
    it(`renders toast type ${type} correctly`, async () => {
      jest.useFakeTimers();

      const tempWrapper = mount(SToast, {
        propsData: {
          type,
          body: 'Text',
        },
      });

      // workaround for async callback not running in expected timeframe
      // https://github.com/testing-library/react-testing-library/issues/244
      Promise.resolve().then(() => jest.runAllTimers());

      expect(tempWrapper.html()).toMatchSnapshot();
      expect(await axe(tempWrapper.html())).toHaveNoViolations();
    });
  });

  it('warns if the wrong toast type is provided', () => {
    shallowMount(SToast, {
      propsData: {
        type: 'not a type',
        body: 'Text',
      },
    });

    expect(errorSpy).toHaveBeenCalled();
  });

  it('requires a title or body', () => {
    const mountToast = (props) => {
      return shallowMount(SToast, {
        propsData: {
          type: types[0],
          ...(props && props),
        },
      });
    };

    mountToast();

    expect(errorSpy).toHaveBeenCalled();

    const body = mountToast({ body: 'text' });
    expect(body.html()).toMatchSnapshot();

    const title = mountToast({ title: 'title' });
    expect(title.html()).toMatchSnapshot();

    expect(errorSpy).toHaveBeenCalledTimes(2);
  });

  positions.forEach((position) => {
    it(`can have position ${position}`, async () => {
      wrapper.setProps({ position });
      await wrapper.vm.$nextTick();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it('validates position', () => {
    shallowMount(SToast, {
      propsData: {
        type: types[0],
        body: 'Text',
        position: 'not a position',
      },
    });

    expect(errorSpy).toHaveBeenCalled();
  });

  it('can have a clickable action', async () => {
    const action = jest.fn();

    wrapper.setProps({ action });
    await wrapper.vm.$nextTick();
    // button should be visible on setting an action
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(action).toHaveBeenCalled();
  });

  it('closes on action click', async () => {
    wrapper.setProps({ action: jest.fn() });
    await wrapper.vm.$nextTick();
    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can have action text configured', async () => {
    const actionText = 'action text';

    wrapper.setProps({
      action: jest.fn(),
      actionText,
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(actionText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can have the icon hidden', async () => {
    wrapper.setProps({ hideIcon: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
