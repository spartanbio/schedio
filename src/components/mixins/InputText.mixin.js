import BaseLabel from '@/components//BaseLabel'
import InputListeners from './InputListeners.mixin'

export default {
  components: {
    BaseLabel
  },

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

    label: {
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
