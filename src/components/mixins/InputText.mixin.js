// Text fields, text areas, etc.
import InputListeners from './InputListeners.mixin'
import InputProps from './InputProps.mixin'

export default {
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
