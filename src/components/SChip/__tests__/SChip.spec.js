import { mount, shallowMount } from '@vue/test-utils'
import SChip from '@/components/SChip/SChip.vue'
import SButton from '@/components/SButton/SButton.vue'
import { colors } from '../options'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('SChip.vue', () => {
  const errorSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
  let wrapper

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('base', () => {
    beforeEach(() => {
      wrapper = shallowMount(SChip, {
        slots: {
          default: 'Slot content',
        },
      })
    })

    it('renders correctly', async () => {
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })

    it.each(colors)('can have color %s', async (color) => {
      const colorWrapper = shallowMount(SChip, { propsData: { color } })

      expect(errorSpy).not.toHaveBeenCalled()
      expect(colorWrapper.html()).toMatchSnapshot()
      expect(await axe(colorWrapper.html())).toHaveNoViolations()
    })

    it('validates colors', () => {
      shallowMount(SChip, { propsData: { color: 'Not a color' } })
      expect(errorSpy).toHaveBeenCalledTimes(2)
    })

    it('can have its HTML tag set', () => {
      wrapper.setProps({ tag: 'li' })
      expect(wrapper.contains('li')).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('closable', () => {
    beforeEach(() => {
      wrapper = mount(SChip, {
        slots: {
          default: 'Slot content',
        },
        propsData: {
          isClosable: true,
        },
      })
    })

    it('can be closable', async () => {
      expect(wrapper.contains(SButton)).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })

    it('emits a close event when the button is clicked', () => {
      const button = wrapper.find(SButton)
      button.trigger('click')
      expect(wrapper.emitted('close')).toBeTruthy()
    })

    it('works with v-model', () => {
      const chips = {
        chip1: true,
        chip2: true,
        chip3: true,
      }
      const closeWrapper = mount({
        name: 'CloseWrapper',
        components: { SChip },
        data () {
          return {
            chips,
          }
        },
        template: `
          <div>
            <SChip
              v-for="(val, chip) in chips"
              :key="chip"
              is-closable="true"
              v-model="chips[chip]"
            >
              {{ chip }}
            </SChip>
          </div>
        `,
      })

      const chipComponents = closeWrapper.findAll(SChip)
      const buttons = closeWrapper.findAll(SButton)
      const chipNames = Object.keys(chips)
      const totalChips = chipNames.length

      expect(chipComponents.length).toBe(totalChips)
      expect(buttons.length).toBe(totalChips)

      const randIdx = Math.floor(totalChips * Math.random())
      const randKey = chipNames[randIdx]

      buttons.at(randIdx).trigger('click')

      expect(chipComponents.at(randIdx).isVisible()).toBe(false)
      expect(closeWrapper.vm.chips[randKey]).toBe(false)
    })

    it('sets `aria-hidden` on close', async () => {
      wrapper = mount({
        components: { SChip },
        data: () => ({ chip: true }),
        template: '<SChip is-closable="true" v-model="chip">Chip</SChip>',
      })
      wrapper.find(SButton).trigger('click')
      expect(wrapper.find(SChip).attributes('aria-hidden')).toBe('true')
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })

    it("can change the button's `aria-label`", async () => {
      wrapper.setProps({ closeAriaLabel: 'Changed' })
      expect(wrapper.find('button').attributes('aria-label')).toBe('Changed')
      expect(wrapper.html()).toMatchSnapshot()
      expect(await axe(wrapper.html())).toHaveNoViolations()
    })
  })
})
