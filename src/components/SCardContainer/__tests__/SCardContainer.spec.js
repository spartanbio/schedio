import { shallowMount } from '@vue/test-utils';
import SCardContainer from '@/components/SCardContainer/SCardContainer.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SCardContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SCardContainer, {
      slots: {
        default: '<div>Slot content</div>',
      },
    });
  });

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can have content', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy();
  });

  it('can be any html element', async () => {
    wrapper.setProps({ tag: 'section' });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
