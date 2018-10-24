// Checkboxes, radios, etc.
import InputListeners from './InputListeners.mixin'
import InputProps from './InputProps.mixin'

export default {
  // prevent `<label/>` from inheriting attrs
  inheritAttrs: false,

  mixins: [InputListeners, InputProps],

  props: {
    isReversed: {
      type: Boolean,
      default: false
    }
  }
}
