<template>
  <div :class="{ 'container--fullwidth': isFullwidth }" class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',

  props: {
    isFullwidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>
