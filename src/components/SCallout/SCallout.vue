<template>
  <div
    class="callout"
    :class="classList"
  >
    <slot />
  </div>
</template>

<script>
import { types } from './options';

export default {
  name: 'SCallout',

  props: {
    type: {
      type: String,
      default: types[0],
      validator: (v) => {
        return types.includes(v) || console.error(`\`type\` should be one of ${types.join(', ')}`);
      },
    },
  },

  computed: {
    classList () {
      return {
        [`callout--${this.type}`]: !!this.type,
      };
    },
  },
};
</script>

<style lang="scss">
.callout {
  background: color('ice');
  border-left: border();
  border-left-width: border-width('thickest');
  border-radius: border-radius('small');
  padding: spacing();

  & + & {
    margin-top: spacing();
  }

  &--success {
    background: lighten(color('green', 'lighter'), 45%);
    border-left-color: color('green');
  }

  &--warning {
    background: lighten(color('gold', 'lighter'), 13%);
    border-left-color: color('gold');
  }

  &--error {
    background: lighten(color('red', 'lighter'), 10%);
    border-left-color: color('red');
  }
}
</style>
