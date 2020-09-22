import { mount } from '@vue/test-utils';
import SButton from '@/components/SButton/SButton.vue';
import SButtonGroup from '@/components/SButtonGroup/SButtonGroup.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SButtonGroup.vue', () => {
  let wrapper;
  let buttonGroup;

  beforeEach(() => {
    wrapper = mount(
      {
        components: { SButton, SButtonGroup },
        template: `
          <SButtonGroup>
            <SButton v-for="i in 3" :key="i">
              Button {{ i }}
            </SButton>
          </SButtonGroup>
        `,
      },
      { stubs: { SButton: true } },
    );

    buttonGroup = wrapper.findComponent(SButtonGroup);
  });

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.vm.$nextTick();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('renders child buttons', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(SButton).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('groups child buttons', async () => {
    buttonGroup.setProps({ isGrouped: true });
    await wrapper.vm.$nextTick();
    expect(buttonGroup.find('.button-group--grouped').exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('disables shadow based on children disabled status', async () => {
    const disabledWrapper = mount({
      components: { SButton, SButtonGroup },
      props: {
        disabled: {
          type: Boolean,
          default: false,
        },
      },
      template: `
          <SButtonGroup>
            <SButton v-for="i in 3" :key="i" :disabled="disabled">
              Button {{ i }}
            </SButton>
          </SButtonGroup>
        `,
    });

    disabledWrapper.setProps({ disabled: true });

    await wrapper.vm.$nextTick();
    expect(disabledWrapper.classes()).toContain('button-group--disabled');
    expect(disabledWrapper.html()).toMatchSnapshot();
    expect(await axe(disabledWrapper.html())).toHaveNoViolations();
  });
});
