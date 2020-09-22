// Text fields, text areas, etc.
import { SLabel } from '@/components/SLabel';
import InputListeners from './InputListeners.mixin';
import InputProps from './InputProps.mixin';

export default {
  components: {
    SLabel,
  },

  inheritAttrs: false,

  mixins: [InputListeners, InputProps],

  props: {
    placeholder: {
      type: String,
      default: '',
    },

    isInline: {
      type: Boolean,
      default: false,
    },

    isFullwidth: {
      type: Boolean,
      default: false,
    },
  },
};
