<template>
  <div class="storybook-container">
    <SContainer>
      <SCard>
        <slot />
      </SCard>
    </SContainer>
  </div>
</template>

<script>
export default {
  name: 'StoryContainer',
}
</script>

<style lang="scss" scoped>
.storybook-container {
  background-color: color('ice');
  min-height: 100vh;
  padding: spacing('triple');
}
</style>
