export default {
  // prevent `<label/>` from inheriting attrs
  inheritAttrs: false,

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
