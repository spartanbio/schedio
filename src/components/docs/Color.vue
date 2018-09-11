<template>
  <div>

    <BaseHeading level="1">Colors</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colors</p>

    <!-- Primary -->
    <BaseHeading level="2">Primary</BaseHeading>
    <p>This is the primary Spartan palette. It's primary purpose is for layout</p>

    <ColorList v-for="color in getPalette('primary')" :color="color" :key="color.name" />

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <ColorList v-for="color in getPalette('secondary')" :color="color" :key="color.name" />

  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'
import ColorList from '@/components/docs/ColorList'

export default {
  name: 'Color',

  components: {
    ColorList
  },

  data() {
    return {
      colors: Object.values(props).filter(t => t.category === 'background-color')
    }
  },

  methods: {
    /**
     * Split colors into palettes
     * @param {('primary'|'secondary')} palette Get the primary or secondary palette
     *
     * @returns {[Object.<string, string>]}
     */
    getPalette(palette) {
      const notValid = typeof palette !== 'string' && palette !== ('primary' || 'secondary')

      if (notValid) return

      return Object.values(this.colors).filter(c => c.palette === palette)
    }
  }
}
</script>
