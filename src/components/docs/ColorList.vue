<template>
  <div class="color-preview">
    <div :class="`color-preview--${color.name}`" />
    <div class="color-preview__caption">
      <div>
        <strong>Name:</strong> {{ color.name }}
      </div>
      <div>
        <strong>{{ colorSpace }}: </strong>
        <code>{{ color.value }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorList',

  props: {
    color: {
      type: Object,
      required: true
    }
  },

  computed: {
    colorSpace() {
      return this.color.value[0] === '#' ? 'HEX' : this.color.value.split('(')[0].toUpperCase()
    }
  }
}
</script>

<style lang="scss">
.color-preview {
  $card-dimensions: 4em;

  align-items: center;
  display: flex;
  margin: 1em 0;

  &__caption {
    margin: 0 1em;
  }

  @each $name, $value in $colors {
    // Create preview classes

    &--#{$name} {
      background: color($name);
      border-radius: $card-dimensions;
      height: $card-dimensions;
      width: $card-dimensions;
    }
  }

  &--spartan-white {
    border: 1px solid color('spartan-grey');
  }
}
</style>
