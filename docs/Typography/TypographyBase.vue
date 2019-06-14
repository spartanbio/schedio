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
          <li>Weight: <code>{{ tokens['font-weight-regular'] }}</code> (Regular)</li>
          <li>Color: <code>{{ tokens['night'] }}</code> (night)</li>
          <li>Leading: <code>{{ tokens['base-line-height'] }}</code></li>
        </ul>
      </p>

      <SCallout type="warning">
        Due to the cost of licensing <code>Avenir Next</code>, another font may be required.
        <code>Averta</code> with stylistic set 1 enabled is the preferred alternative. The base
        font-weight should also be set to <code>300</code> when using <code>Averta</code>
      </SCallout>
    </div>

    <article class="typography-example">
      <p>Body</p>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-regular'] }}
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
import { SCallout } from '@/components/SCallout'

export default {
  name: 'TypographyBase',

  components: { SCallout },

  data: () => ({
    tokens,
  }),
}
</script>

<style lang="scss" scoped>
@import 'typography.stories';
</style>
