<template>
  <div
    :class="classList"
    class="row"
  >
    <slot />
  </div>
</template>

<script>
import ContainerMethods from '@/mixins/ContainerMethods'
import rowOptions from './row-options'
import mobileBreakpoints from '@/components/SContainer/mobile-breakpoints'

const flexOptions = Object.values(rowOptions)
const validator = v => (flexOptions.includes(v) ? true : console.error(`Allowed: ${flexOptions}`))

const propSettings = () => ({
  type: String,
  default: '',
  validator
})

// set up all $props relying on mobile breakpoints
const breakpointProps = mobileBreakpoints.reduce((props, breakpoint) => {
  props[`align-after-${breakpoint}`] = propSettings()
  props[`align-until-${breakpoint}`] = propSettings()
  props[`justify-after-${breakpoint}`] = propSettings()
  props[`justify-until-${breakpoint}`] = propSettings()

  return props
}, {})

export default {
  name: 'SContainerRow',

  mixins: [ContainerMethods],

  props: {
    ...breakpointProps,

    isReversed: {
      type: Boolean,
      default: false
    },

    /* eslint-disable vue/require-default-prop */
    // eslint doesn't see prop defaults in functions
    // Add base props without breakpoints
    justify: propSettings(),

    align: propSettings()
    /* eslint-enable */
  },

  computed: {
    theNames() {
      return this.generateResponsiveClassNames('align|justify')
    },

    classList() {
      return [
        this.align ? `row--align-${this.align}` : '',
        this.justify ? `row--justify-${this.justify}` : '',
        this.isReversed ? `row--reverse` : '',
        ...this.generateResponsiveClassNames('align|justify')
      ]
    }
  },

  methods: {
    // used by mixin
    classNameReducer: classes => (acc, key) => {
      const rx = /(align|justify)-(.+)/
      // e.g.: $props.alignUntilXl => 'row--align-center-until-xl'
      const name = key.replace(rx, `row--$1-${classes[key]}-$2`)

      if (classes[key] && key.match(rx)) return acc.concat(name)

      return acc
    }
  }
}
</script>
