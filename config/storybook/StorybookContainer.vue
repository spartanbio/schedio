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
  padding: spacing('half');

  // Accounts for nested container. Storybook applies the container twice.
  // unquote + interpolation allows resolution of variable in `calc`
  min-height: unquote("calc(100vh - #{spacing('base')})");
}
</style>
