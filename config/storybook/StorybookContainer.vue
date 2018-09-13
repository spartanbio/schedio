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
  background-color: color('ice');
  min-height: 100vh;
  padding: $spacing-half;
}
</style>
