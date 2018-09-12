<template functional>
  <div class="storybook-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'StorybookContainer'
}
</script>

<style lang="scss" scoped>
.storybook-container {
  background-color: lighten(color('night', 'lightest'), 33%);
  padding: $spacing-half;
}
</style>
