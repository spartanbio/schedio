import { shallowMount } from '@vue/test-utils';
import SCard from '@/components/SCard/SCard.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SCard.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SCard, {
      slots: {
        default: '<div>Default Slot</div>',
      },
    });
  });

  it('renders correctly', async () => {
    expect(wrapper.find('.card').exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can use different HTML tags', async () => {
    wrapper.setProps({ tag: 'section' });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('section').exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can show an image', async () => {
    const props = {
      image: {
        src: '/some-image.jpg',
        alt: 'An image',
      },
    };

    wrapper.setProps(props);
    await wrapper.vm.$nextTick();
    expect(wrapper.props('image')).toEqual(props.image);
    expect(wrapper.find('img').exists()).toBe(true);

    const imageAttributes = wrapper.find('img').attributes();

    expect(imageAttributes).toMatchObject(props.image);
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can have content', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can remove padding from content', async () => {
    wrapper.setProps({ hasNoPadding: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.card__body--no-padding').exists()).toBe(true);
  });

  it('can have a header', () => {
    const withHeader = shallowMount(SCard, {
      slots: {
        header: '<div>Header Slot</div>',
      },
    });

    expect(withHeader.vm.$slots.header).toBeTruthy();
    expect(withHeader.html()).toMatchSnapshot();
  });

  it('can have a footer', () => {
    const withFooter = shallowMount(SCard, {
      slots: {
        footer: '<div>Footer Slot</div>',
      },
    });

    expect(withFooter.vm.$slots.footer).toBeTruthy();
    expect(withFooter.html()).toMatchSnapshot();
  });
});
