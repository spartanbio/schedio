// Props shared by all form inputs
export default {
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

    required: {
      type: Boolean,
      default: true
    },

    showOptional: {
      type: Boolean,
      default: true
    },

    isInvalid: {
      type: Boolean,
      default: false
    }
  }
}
