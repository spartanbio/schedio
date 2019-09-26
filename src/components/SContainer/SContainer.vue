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
