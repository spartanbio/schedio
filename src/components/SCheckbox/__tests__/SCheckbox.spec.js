import { mount } from '@vue/test-utils';
import SCheckbox from '@/components/SCheckbox/SCheckbox.vue';
import SLabel from '@/components/SLabel/SLabel.vue';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SCheckbox.vue', () => {
  const inputEvent = jest.fn();
  let wrapper;
  let checkbox;

  beforeEach(() => {
    wrapper = mount(SCheckbox, {
      propsData: {
        id: 'checkbox',
        label: 'Checkbox',
      },
      listeners: {
        input: inputEvent,
      },
    });

    checkbox = wrapper.find('#checkbox');
  });

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('requires required props', () => {
    // spies on `console.error` without calling `console.error`
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => { });
    // mounting component without required props
    mount(SCheckbox);
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop');
  });

  it('can be checked and unchecked', () => {
    // check
    wrapper.trigger('click');
    expect(checkbox.element.checked).toBe(true);

    // uncheck
    wrapper.trigger('click');
    expect(checkbox.element.checked).toBe(false);

    // check that events were emitted correctly
    expect(wrapper.emitted('input')).toEqual([[true], [false]]);
  });

  it('can be a required input', async () => {
    wrapper.setProps({ required: true });
    await wrapper.vm.$nextTick();
    expect(checkbox.element.required).toBe(true);
  });

  it('can be invalid', async () => {
    wrapper.setProps({ isInvalid: true });
    await wrapper.vm.$nextTick();
    expect(checkbox.element.validity.valid).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can be disabled', () => {
    const disabledWrapper = mount(SCheckbox, {
      propsData: {
        id: 'checkbox',
        label: 'Checkbox',
      },
      attrs: {
        disabled: true,
      },
    });

    // verifies disabled attr is passed through to checkbox input element
    expect(disabledWrapper.attributes('disabled')).toBeUndefined();
    expect(disabledWrapper.find('#checkbox').element.disabled).toBeTruthy();
  });

  it('can be reversed', async () => {
    wrapper.setProps({ isReversed: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(SLabel).props('isReversed')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can hide the optional tag', async () => {
    wrapper.setProps({ hideOptional: true, required: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('Optional');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
