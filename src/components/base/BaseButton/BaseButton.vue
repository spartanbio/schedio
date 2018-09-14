<template>
  <button
    class="button button--color-night"
    @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
