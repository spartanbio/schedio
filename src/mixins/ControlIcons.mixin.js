import { SIcon } from '@/components/SIcon'

export default {
  components: {
    SIcon,
  },

  props: {
    iconLeft: {
      type: String,
      default: '',
    },

    iconLeftColor: {
      type: String,
      default: 'green',
    },

    iconLeftShade: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: '',
    },

    iconRightColor: {
      type: String,
      default: 'green',
    },

    iconRightShade: {
      type: String,
      default: null,
    },
  },
}
