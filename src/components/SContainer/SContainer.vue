<template>
  <Component
    :is="tag"
    :class="{ 'container--fullwidth': isFullwidth }"
    class="container"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'SContainer',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    isFullwidth: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  padding: spacing();
  width: 100%;

  &:not(.container--fullwidth) {
    @each $breakpoint in map-keys($media-breakpoints) {
      @include after-breakpoint($breakpoint) {
        max-width: map-get($container-breakpoints, $breakpoint);
      }
    }
  }
}
</style>
