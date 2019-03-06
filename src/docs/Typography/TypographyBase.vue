<template>
  <div>
    <div class="typography-intro">
      <SHeading level="1">
        Base Typography
      </SHeading>
      <p>
        The base Spartan font parameters are:
        <ul class="no-bullets">
          <li>Font: <code>Avenir Next</code></li>
          <li>Size: <code>{{ tokens['base-font-size'] }}</code></li>
          <li>Weight: <code>{{ tokens['font-weight-light'] }}</code> (Light)</li>
          <li>Color: <code>{{ tokens['night'] }}</code></li>
          <li>Leading: <code>{{ tokens['base-line-height'] }}</code></li>
        </ul>
      </p>
    </div>

    <article class="typography-example">
      <p>Body</p>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-light'] }}
      </p>
    </article>

    <article class="typography-example">
      <p class="caption">
        Caption
      </p>
      <p class="caption">
        Size: {{ tokens['font-size-6'] }} | Weight: {{ tokens['font-weight-regular'] }} | Color:
        <code>{{ tokens['grey'] }}</code>
      </p>
    </article>
  </div>
</template>

<script>
import tokens from '@/assets/styles/tokens/dist/tokens.json'

export default {
  name: 'TypographyBase',

  data: () => ({
    tokens
  })
}
</script>

<style lang="scss" scoped>
@import 'typography.stories';
</style>
