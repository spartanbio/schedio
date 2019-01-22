import { SIcon } from '@/components/SIcon'

export default {
  components: {
    SIcon
  },

  props: {
    iconLeft: {
      type: String,
      default: ''
    },

    iconLeftColor: {
      type: String,
      default: 'green'
    },

    iconRight: {
      type: String,
      default: ''
    },

    iconRightColor: {
      type: String,
      default: 'green'
    }
  }
}
