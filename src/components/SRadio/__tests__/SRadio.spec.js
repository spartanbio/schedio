import { mount, shallowMount } from '@vue/test-utils'
import SRadio from '@/components/SRadio/SRadio.vue'
import SLabel from '@/components/SLabel/SLabel.vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SRadio.vue', () => {
  const inputEvent = jest.fn()
  let wrapper
  let radio
  const testValue = 'this is a test'

  beforeEach(() => {
    wrapper = mount(SRadio, {
      propsData: {
        id: 'radio',
        label: 'Radio',
        value: testValue,
      },
      listeners: {
        input: inputEvent,
      },
    })

    radio = wrapper.find('#radio')
  })

  it('renders correctly', async () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('requires required props', () => {
    // spies on `console.error` without calling `console.error`
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => { })
    // mounting component without required props
    shallowMount(SRadio)
    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0]).toContain('[Vue warn]: Missing required prop')
  })

  it('can be checked', async () => {
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(radio.element.checked).toBe(true)
    // check that radio emitted input/its value
    expect(wrapper.emitted('input')[0][0]).toBe(testValue)
    expect(await axe(wrapper.html())).toHaveNoViolations()
  })

  it('can be a required input', async () => {
    wrapper.setProps({ required: true })
    await wrapper.vm.$nextTick()
    expect(radio.element.required).toBe(true)
  })

  it('can be invalid', async () => {
    wrapper.setProps({ isInvalid: true })
    await wrapper.vm.$nextTick()
    expect(radio.element.validity.valid).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be disabled', () => {
    const disabledWrapper = shallowMount(SRadio, {
      propsData: {
        id: 'radio',
        label: 'Radio',
      },
      attrs: {
        disabled: true,
      },
    })

    // verifies disabled attr is passed through to radio input element
    expect(disabledWrapper.attributes('disabled')).toBeUndefined()
    expect(disabledWrapper.find('#radio').element.disabled).toBeTruthy()
  })

  it('can be reversed', async () => {
    wrapper.setProps({ isReversed: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(SLabel).props('isReversed')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can be grouped', async () => {
    const groupWrapper = mount({
      components: {
        SRadio,
      },
      template: `
        <div>
          <SRadio
            name="radio-group"
            id="radio-1"
            label="radio-1"
            value="radio-1"
          />
          <SRadio
            name="radio-group"
            id="radio-2"
            label="radio-2"
            value="radio-2"
          />
        </div>
      `,
    })

    const radios = groupWrapper.findAll(SRadio)

    expect(radios.length).toBe(2)
    radios.trigger('click')
    await groupWrapper.vm.$nextTick()
    expect(radios.at(0).emitted('input')[0][0]).toEqual('radio-1')
    expect(radios.at(1).emitted('input')[0][0]).toEqual('radio-2')
    expect(groupWrapper.html()).toMatchSnapshot()
  })

  it('can hide the optional tag', async () => {
    wrapper.setProps({ hideOptional: true, required: false })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toContain('Optional')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
