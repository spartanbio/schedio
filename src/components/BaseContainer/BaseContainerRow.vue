<template>
  <div :class="classList" class="row">
    <slot/>
  </div>
</template>

<script>
import flexOptions from './row-options'
import sharedMethods from './shared-methods'

import mobileBreakpoints from './mobile-breakpoints'

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
  name: 'BaseContainerRow',

  mixins: [sharedMethods],

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
        ...this.generateResponsiveClassNames('align|justify')
      ]
    }
  },

  methods: {
    // used by mixin
    classNameReducer: classes => (acc, key) => {
      // e.g.: $props.alignUntilXl => 'row--align-center-until-lg'
      const name = key.replace(/(align-|justify-)(.+)/, `row--$1${classes[key]}-$2`)

      if (classes[key]) return acc.concat(name)

      return acc
    }
  }
}
</script>
