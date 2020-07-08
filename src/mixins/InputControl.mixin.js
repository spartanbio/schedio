// Checkboxes, radios, etc.
import { SLabel } from '@/components/SLabel';
import InputListeners from './InputListeners.mixin';
import InputProps from './InputProps.mixin';

export default {
  components: {
    SLabel,
  },

  // prevent `<label/>` from inheriting attrs
  inheritAttrs: false,

  mixins: [InputListeners, InputProps],

  props: {
    isReversed: {
      type: Boolean,
      default: false,
    },
  },
};
