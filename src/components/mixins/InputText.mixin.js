// Text fields, text areas, etc.
import BaseLabel from '@/components/BaseLabel'
import InputListeners from './InputListeners.mixin'
import InputProps from './InputProps.mixin'

export default {
  components: {
    BaseLabel
  },

  inheritAttrs: false,

  mixins: [InputListeners, InputProps],

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    isInline: {
      type: Boolean,
      default: false
    },

    isFullwidth: {
      type: Boolean,
      default: false
    }
  }
}
