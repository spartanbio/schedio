<template>
  <div>

    <BaseHeading level="1">Colours</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colours</p>

    <!-- Primary -->
    <BaseHeading level="2">Primary</BaseHeading>
    <p>This is the primary Spartan palette. It's primary purpose is for layout</p>

    <template v-for="colour in primaryPalette">
      <div :key="colour.name" class="colour-preview">
        <div :class="`colour-preview--${colour.name}`" />
        <div class="colour-preview__caption">
          <div>
          <strong>Name:</strong> {{ colour.name }}</div>
          <div>
            <strong>RGB: </strong>
            <code>{{ colour.value }}</code>
          </div>
        </div>
      </div>
    </template>

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <template v-for="colour in secondaryPalette">
      <div :key="colour.name" class="colour-preview">
        <div :class="`colour-preview--${colour.name}`" />
        <div class="colour-preview__caption">
          <div>
          <strong>Name:</strong> {{ colour.name }}</div>
          <div>
            <strong>RGB: </strong>
            <code>{{ colour.value }}</code>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'

export default {
  name: 'Colour',

  data() {
    return {
      colours: Object.values(props).filter(
        t => t.category === 'background-color'
      )
    }
  },

  computed: {
    primaryPalette() {
      return this.getPalette('primary')
    },
    secondaryPalette() {
      return this.getPalette('secondary')
    }
  },

  methods: {
    /**
     * Split colours into palettes
     * @param {('primary'|'secondary')} palette Get the primary or secondary palette
     *
     * @returns {[Object.<string, string>]}
     */
    getPalette(palette) {
      const notValid =
        typeof palette !== 'string' && palette !== ('primary' || 'secondary')
      if (notValid) return
      return Object.values(this.colours).filter(c => c.palette === palette)
    }
  }
}
</script>

<style lang="scss">
.colour-preview {
  $card-dimensions: 4em;

  align-items: center;
  display: flex;
  margin: 1em 0;

  &__caption {
    margin: 0 1em;
  }

  @each $name, $value in $colours {
    // Create preview classes

    &--#{$name} {
      background: colour($name);
      border-radius: $card-dimensions;
      height: $card-dimensions;
      width: $card-dimensions;
    }
  }

  &--spartan-white {
    border: 1px solid colour('spartan-grey');
  }
}
</style>
