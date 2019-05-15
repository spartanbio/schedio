import SToast from '@/components/SToast/SToast.vue'
import { shallowMount } from '@vue/test-utils'
import { types, positions } from '../options'

describe('SToast.vue', () => {
  jest.useFakeTimers()
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SToast, {
      propsData: {
        type: types[0],
        body: 'Text'
      }
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  types.forEach(type => {
    it(`renders toast type ${type} correctly`, () => {
      const tempWrapper = shallowMount(SToast, {
        propsData: {
          type: type,
          body: 'Text'
        }
      })

      expect(tempWrapper.html()).toMatchSnapshot()
    })
  })

  it('warns if the wrong toast type is provided', () => {
    shallowMount(SToast, {
      propsData: {
        type: 'not a type',
        body: 'Text'
      }
    })

    expect(errorSpy).toBeCalled()
  })

  it('requires a title or body', () => {
    const mountToast = props => {
      return shallowMount(SToast, {
        propsData: {
          type: types[0],
          ...(props && props)
        }
      })
    }

    mountToast()

    expect(errorSpy).toBeCalled()

    const body = mountToast({ body: 'text' })
    expect(body.html()).toMatchSnapshot()

    const title = mountToast({ title: 'title' })
    expect(title.html()).toMatchSnapshot()

    expect(errorSpy).toBeCalledTimes(4)
  })

  positions.forEach(position => {
    it(`can have position ${position}`, () => {
      wrapper.setProps({ position })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  it('validates position', () => {
    shallowMount(SToast, {
      propsData: {
        type: types[0],
        body: 'Text',
        position: 'not a position'
      }
    })

    expect(errorSpy).toBeCalled()
  })

  it('can have a clickable action', () => {
    const action = jest.fn()

    wrapper.setProps({ action })
    // button should be visible on setting an action
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.find('button').trigger('click')
    expect(action).toBeCalled()
  })

  it('closes on action click', () => {
    wrapper.setProps({ action: jest.fn() })
    wrapper.find('button').trigger('click')

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have action text configured', () => {
    const actionText = 'action text'

    wrapper.setProps({
      action: jest.fn(),
      actionText
    })

    expect(wrapper.text()).toContain(actionText)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('can have the icon hidden', () => {
    wrapper.setProps({ hideIcon: true })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
