<template>
  <div class="colour-preview">
    <div :class="`colour-preview--${colour.name}`" />
    <div class="colour-preview__caption">
      <div>
      <strong>Name:</strong> {{ colour.name }}</div>
      <div>
        <strong>RGB: </strong>
        <code>{{ colour.value }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColourList',

  props: {
    colour: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.colour-preview {
  $card-dimensions: 4em;

  align-items: center;
  display: flex;
  margin: 1em 0;

  &__caption {
    margin: 0 1em;
  }

  @each $name, $value in $colours {
    // Create preview classes

    &--#{$name} {
      background: colour($name);
      border-radius: $card-dimensions;
      height: $card-dimensions;
      width: $card-dimensions;
    }
  }

  &--spartan-white {
    border: 1px solid colour('spartan-grey');
  }
}
</style>
