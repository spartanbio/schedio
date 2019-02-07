<template>
  <div
    :class="{ 'container--fullwidth': isFullwidth }"
    class="container"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SContainer',

  props: {
    isFullwidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>
