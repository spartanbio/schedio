import { shallowMount } from '@vue/test-utils';
import mobileBreakpoints from '@/components/SContainer/mobile-breakpoints';
import SContainerColumn from '@/components/SContainerColumn/SContainerColumn.vue';
import camelCase from 'lodash.camelcase';

describe('SContainerColumn.vue', () => {
  const staticProps = [
    'size',
    'offset',
    'narrow',
    'order',
  ];
  // Generate the same props generated in `SContainerColumn.vue`
  const propsToGenerate = [
    'narrow-until',
    'narrow-after',
    'offset',
    'order',
  ];
  const propList = propsToGenerate.reduce((list, prop) => {
    mobileBreakpoints.forEach(breakPoint => list.push(camelCase(`${prop}-${breakPoint}`)));
    return list;
  }, staticProps);

  const columnPropTest = async (propName, value) => {
    wrapper.setProps({ [propName]: value });
    await wrapper.vm.$nextTick();
    expect(wrapper.props(propName)).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SContainerColumn, {
      slots: {
        default: '<div>Column Content</div>',
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('accepts slot content', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('generates props for mobile breakpoints', () => {
    propList.forEach(expect(wrapper.props()).toHaveProperty);
  });

  propList.forEach((propName) => {
    if (propName.match(/offset|order|size/)) {
      // props accepting column number
      for (let i = 1; i <= 12; i++) it(`can be ${propName} ${i}`, () => columnPropTest(propName, i));
      // order can also be 'first' or 'last'
      if (propName.match(/order/)) {
        const orderStrings = ['first', 'last'];
        orderStrings.forEach(s => it(`can be ${propName} ${s}`, () => columnPropTest(propName, s)));
      }
    } else {
      // props that are booleans (i.e.: `narrow`, `narrow-*`)
      it(`can be ${propName}`, () => columnPropTest(propName, true));
    }
  });
});
