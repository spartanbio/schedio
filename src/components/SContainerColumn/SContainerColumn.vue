<template>
  <div
    :class="classList"
    class="column"
  >
    <slot />
  </div>
</template>

<script>
import ContainerMethods from '@/mixins/ContainerMethods'
import mobileBreakpoints from '@/components/SContainer/mobile-breakpoints'

// Validator function for most $props
const sizeValidator = value => {
  if (Number(value) > 12) return console.error('Value cannot exceed 12')
  return true
}

// Validator function for $props.order*
const orderValidator = value => {
  if (!value) return true

  if (!['first', 'last'].includes(value) || Number(value > 12)) {
    return console.error('Valid `order` strings: first, last. Otherwise, value cannot exceed 12')
  }

  return true
}

// Default props. Function allows reuse and cusomization.
const propSettings = ({ types = [], validator = sizeValidator, defaultVal = '' } = {}) => ({
  type: [Number, String, ...types],
  default: defaultVal,
  validator
})

const narrowSettings = () => ({
  type: Boolean,
  default: false
})

// set up all $props relying on mobile breakpoints
const breakpointProps = mobileBreakpoints.reduce((props, breakpoint) => {
  props[breakpoint] = propSettings({ types: [Boolean] })
  props[`narrow-after-${breakpoint}`] = narrowSettings()
  props[`narrow-until-${breakpoint}`] = narrowSettings()
  props[`offset-${breakpoint}`] = propSettings()
  props[`order-${breakpoint}`] = propSettings({ validator: orderValidator })

  return props
}, {})

export default {
  name: 'SContainerColumn',

  mixins: [ContainerMethods],

  props: {
    ...breakpointProps,
    /* eslint-disable vue/require-default-prop */
    // eslint doesn't see prop defaults in functions
    // Add base props without breakpoints
    size: propSettings(),
    offset: propSettings(),
    narrow: narrowSettings(),
    order: propSettings({ validator: orderValidator })
    /* eslint-enable */
  },

  data() {
    return {
      mobileBreakpoints
    }
  },

  computed: {
    /**
     * @returns {Array.<string>}
     */
    responsiveSizeClasses() {
      const breakpointModifiers = `(${this.mobileBreakpoints.join('|')})`
      return this.generateResponsiveClassNames(breakpointModifiers)
    },

    /**
     * @returns {Array.<string>}
     */
    responsiveNarrowClasses() {
      return this.generateResponsiveClassNames('narrow')
    },

    /**
     * @returns {Array.<string>}
     */
    responsiveOffsetClasses() {
      return this.generateResponsiveClassNames('offset')
    },

    /**
     * @returns {Array.<string>}
     */
    responsiveOrderClasses() {
      return this.generateResponsiveClassNames('order')
    },

    /**
     * @returns {Array.<string>}
     */
    classList() {
      const columnSize = this.size ? `column--${this.size}` : ''

      // concatenate all responsive classes from computed properties
      return Object.keys(this.$options.computed).reduce(
        (classes, key) => (/responsive(.*)Classes/.test(key) ? classes.concat(this[key]) : classes),
        [columnSize]
      )
    }
  },

  methods: {
    // Used by mixin
    classNameReducer: classes => (acc, key) => {
      // e.g.: 'column--1', 'column--narrow'
      if (typeof classes[key] === 'boolean') return acc.concat(`column--${key}`)
      // e.g.: 'column--sm-1', 'column--offset-md-1', 'column--narrow-until-lg'
      if (classes[key]) return acc.concat(`column--${key}-${classes[key]}`)
      return acc
    }
  }
}
</script>
