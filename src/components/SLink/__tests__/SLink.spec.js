import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import SLink from '@/components/SLink/SLink.vue';
import { axe, toHaveNoViolations } from 'jest-axe';
import icons from 'feather-icons/dist/icons.json';
const iconNames = Object.keys(icons);

expect.extend(toHaveNoViolations);

describe('SLink.vue', () => {
  let wrapper;
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => { });

  beforeEach(() => {
    wrapper = shallowMount(SLink, {
      slots: {
        default: 'link text',
      },
      mocks: {
        $router: 'vue-router',
      },
      propsData: {
        to: 'https://spartanbio.com',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('can display link text', async () => {
    expect(wrapper.vm.$slots.default).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('requires a url', () => {
    shallowMount(SLink);
    expect(errorSpy).toHaveBeenCalled();
  });

  it('detects external links and uses `a` tag for them', async () => {
    expect(wrapper.vm.isExternalLink).toBe(true);
    expect(wrapper.vm.componentIs).toBe('a');
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('respects `isExternal` prop', async () => {
    wrapper.setProps({ to: '/internal', isExternal: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isExternalLink).toBe(true);
    expect(wrapper.vm.componentIs).toBe('a');
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can be set to `a`', async () => {
    const to = '/internal';

    wrapper.setProps({
      to,
      useAnchor: true,
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.componentIs).toBe('a');
    expect(wrapper.attributes('href')).toBe(to);
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('uses `a` when no router is present', () => {
    const noRouter = shallowMount(SLink, {
      propsData: {
        to: '/about',
      },
    });

    expect(noRouter.vm.isExternalLink).toBe(false);
    expect(noRouter.vm.componentIs).toBe('a');
    expect(noRouter.html()).toMatchSnapshot();
  });

  it('can be plain', async () => {
    wrapper.setProps({ isPlain: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can be light', async () => {
    wrapper.setProps({ isLight: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('can have an icon', async () => {
    wrapper.setProps({ icon: iconNames[0] });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  it('uses best practices for [target="_blank"]', () => {
    if (wrapper.element.target === '_blank') {
      expect(wrapper.element.rel).toBe('noopener noreferrer');
    }

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('detects internal links and uses a link component', async () => {
    wrapper.setProps({ to: '/about' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isExternalLink).toBe(false);
    expect(wrapper.vm.componentIs).toBe('router-link');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('can use custom router components', () => {
    wrapper = shallowMount(SLink, {
      propsData: {
        to: '/about',
        linkComponent: 'custom-link',
      },
      mocks: {
        $router: 'vue-router',
      },
      stubs: {
        CustomLink: RouterLinkStub,
      },
    });

    expect(wrapper.vm.componentIs).toBe('custom-link');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
