import InputListeners from './InputListeners.mixin'

export default {
  // prevent `<label/>` from inheriting attrs
  inheritAttrs: false,

  mixins: [InputListeners],

  props: {
    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    isReversed: {
      type: Boolean,
      default: false
    }
  }
}
