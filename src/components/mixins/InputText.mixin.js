import BaseLabel from '@/components/base/BaseLabel'
export default {
  components: {
    BaseLabel
  },

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
