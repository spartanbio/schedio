<template>
  <div class="form-field">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SFormField',
}
</script>

<style lang="scss">
.form-field {
  & + & {
    margin-top: spacing('loose');
  }
}
</style>
