<template>
  <div class="column">
    <pre>{{ $props }}</pre>
    <pre>{{ orderClasses }}</pre>
    <pre>{{ classList }}</pre>
    {{ offsetClasses }}
    <slot/>
  </div>
</template>

<script>
import kebabCase from 'lodash.kebabcase'

const sizes = ['sm', 'md', 'lg', 'xl']

const sizeValidator = value => {
  if (Number(value) > 12) return console.error('Value cannot exceed 12')
  return true
}

const orderValidator = value => {
  if (!value) return true
  if (!['first', 'last'].includes(value) || Number(value > 12)) {
    return console.error('Valid `order` strings: first, last. Otherwise, value cannot exceed 12')
  }

  return true
}

const propSettings = (type = [Number, String], validatorFn = sizeValidator) => ({
  type: type,
  default: '',
  validator: validatorFn
})

const sizeProps = sizes.reduce((props, size) => {
  props[size] = propSettings([Number, String, Boolean])
  props[`offset-${size}`] = propSettings()
  props[`order-${size}`] = propSettings([Number, String], orderValidator)
  return props
}, {})

export default {
  name: 'BaseContainerColumn',

  props: {
    ...sizeProps,
    // eslint-disable-next-line vue/require-default-prop
    offset: propSettings(),
    // eslint-disable-next-line vue/require-default-prop
    order: propSettings([Number, String], orderValidator)
  },

  computed: {
    sizeClasses() {
      const { sm, md, lg, xl } = this.$props
      const colSizes = { sm, md, lg, xl }
      return this.generateSizedClasses(colSizes)
    },

    offsetClasses() {
      const { offsetSm, offsetMd, offsetLg, offsetXl } = this.$props
      const colOffsets = { offsetSm, offsetMd, offsetLg, offsetXl }
      return this.generateSizedClasses(colOffsets, 'offset')
    },

    orderClasses() {
      const { orderSm, orderMd, orderLg, orderXl } = this.$props
      const colOrders = { orderSm, orderMd, orderLg, orderXl }
      return this.generateSizedClasses(colOrders, 'order')
    },

    classList() {
      return [...this.sizeClasses, ...this.offsetClasses, ...this.orderClasses]
    }
  },

  methods: {
    generateSizedClasses(obj, kind) {
      const sizedClasses = []

      for (let key in obj) {
        if (typeof obj[key] === 'boolean') {
          sizedClasses.push(`column--${kebabCase(key)}`)
        } else if (obj[key]) {
          key === kind
            ? sizedClasses.push(`column--${kebabCase(key)}`)
            : sizedClasses.push(`column--${kebabCase(key)}-${obj[key]}`)
        }
      }

      return sizedClasses
    }
  }
}
</script>
