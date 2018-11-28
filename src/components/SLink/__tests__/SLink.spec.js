import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import SLink from '@/components/SLink/SLink.vue'

describe('SLink.vue', () => {
  let wrapper
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

  beforeEach(() => {
    wrapper = shallowMount(SLink, {
      slots: {
        default: 'link text'
      },
      mocks: {
        $router: 'vue-router'
      },
      propsData: {
        to: 'https://spartanbio.com'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('can display link text', () => {
    expect(wrapper.vm.$slots.default).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('requires a url', () => {
    shallowMount(SLink)
    expect(errorSpy).toBeCalled()
  })

  it('detects external links and uses `a` tag for them', () => {
    expect(wrapper.vm.isExternalLink).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('uses best practices for [target="_blank"]', () => {
    if (wrapper.element.target === '_blank') {
      expect(wrapper.element.rel).toBe('noopener noreferrer')
    }

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('detects internal links and uses a link component', () => {
    wrapper.setProps({ to: '/about' })
    expect(wrapper.vm.isExternalLink).toBe(false)
    expect(wrapper.vm.linkProperties.is).toBe('router-link')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('detects nuxt and uses `nuxt-link` instead of `router-link`', () => {
    const nuxtWrapper = shallowMount(SLink, {
      propsData: {
        to: '/about'
      },
      mocks: {
        $router: 'vue-router',
        nuxt: true
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(nuxtWrapper.vm.linkProperties.is).toBe('nuxt-link')
    expect(nuxtWrapper.html()).toMatchSnapshot()
  })
})
