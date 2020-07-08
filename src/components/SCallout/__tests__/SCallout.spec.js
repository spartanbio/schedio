import { shallowMount } from '@vue/test-utils';
import SCallout from '@/components/SCallout/SCallout.vue';
import { types } from '../options';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SCallout.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SCallout);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', async () => {
    const wrapper = shallowMount(SCallout);

    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  Promise.all(
    // eslint-disable-next-line array-callback-return
    types.map((type) => {
      it(`can have type ${type}`, async () => {
        wrapper.setProps({ type });

        expect(await axe(wrapper.html())).toHaveNoViolations();
        expect(errorSpy).not.toHaveBeenCalled();
        expect(wrapper.html()).toMatchSnapshot();
      });
    }),
  );

  it('validates the `type`', () => {
    shallowMount(SCallout, {
      propsData: {
        type: 'not a type',
      },
    });

    expect(errorSpy).toHaveBeenCalled();
  });

  it('accepts slot content', () => {
    const slotText = 'I am slot text';
    const slotWrapper = shallowMount(SCallout, {
      slots: {
        default: slotText,
      },
    });

    expect(slotWrapper.text()).toBe(slotText);
    expect(slotWrapper.html()).toMatchSnapshot();
  });
});
