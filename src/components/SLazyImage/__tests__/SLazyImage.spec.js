import { shallowMount } from '@vue/test-utils';
import SLazyImage from '@/components/SLazyImage/SLazyImage.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SLazyImage.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SLazyImage, {
      propsData: {
        alt: 'alt',
        src: 'https://source.unsplash.com/a7XPK-oDsMk',
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

  it('requires src', () => {
    shallowMount(SLazyImage);
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });
});
