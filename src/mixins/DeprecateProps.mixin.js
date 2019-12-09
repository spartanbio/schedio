import { warnPropsDeprecation } from '@/utils/deprecate'

/** @typedef {import('vue').ComponentOptions} VueComponentOptions */
/**
 * Mixin for warning about deprecated props
 * @param {string|string[]} props
 * @param {string} alternative
 * @returns {VueComponentOptions} A Vue mixin
 */
export default function DeprecatePropsMixin (props, alternative) {
  if (!props || props.length === 0) throw new Error('missing required argument `props`')

  return {
    mounted () {
      const deprecated = props.filter(prop => this.$options.propsData[prop])

      if (deprecated.length) warnPropsDeprecation(deprecated, alternative)
    },
  }
}
