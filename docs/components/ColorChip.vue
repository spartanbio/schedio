<template>
  <SCard
    has-no-padding
    class="palette-card"
  >
    <template v-slot:header>
      <SHeading
        level="3"
        is-title
      >
        {{ heading | underscoreToSpace }}
      </SHeading>
    </template>

    <div
      v-for="({ name, value }) in palette"
      :key="name"
      :style="{ backgroundColor: value }"
      class="palette-card__row"
    >
      <div class="palette-card__description">
        <div>
          <strong>Shade: </strong>
          <code>{{ name | getShade }}</code>
        </div>
        <div>
          <strong>{{ value | colorSpace }}: </strong>
          <code>{{ value }}</code>
        </div>
        <div v-if="value !== '#'">
          <strong>HEX: </strong>
          <code>{{ value | rgbToHex }}</code>
        </div>
      </div>
    </div>
  </SCard>
</template>

<script>
import { SCard } from '@/components/SCard'

const valToHex = (hex, int) => {
  const val = Number(int).toString(16)
  return hex + (val.length === 1 ? `0${val}` : val).toUpperCase()
}

export default {
  name: 'ColorChip',

  filters: {
    underscoreToSpace: str => str.replace(/_/g, ' '),
    rgbToHex: color => color.match(/\d+/g).reduce(valToHex, '#'),
    colorSpace: color => (color[0] === '#' ? 'HEX' : color.split('(')[0].toUpperCase()),
    getShade: str => (str.split('-').length > 1 ? str.split('-').pop() : 'base'),
  },

  components: {
    SCard,
  },

  props: {
    palette: {
      type: Array,
      required: true,
    },

    heading: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$palette-border-radius: border-radius();
$shadow-color: color('grey', 'light');
$left-border-shadow: -1px 0 color('grey', 'lighter');

.palette-card {
  margin-bottom: spacing('loose');

  &__description {
    background-color: color('white');
    box-shadow: $left-border-shadow;
    margin-left: 6.5rem;
    padding: spacing('base');
  }

  &__row {
    // Set up border radii
    &:last-child {
      border-bottom-left-radius: $palette-border-radius;
      border-bottom-right-radius: $palette-border-radius;

      .palette-card__description {
        border-bottom-right-radius: $palette-border-radius;
      }
    }

    &:not(:first-child) {
      // Add a border to descriptions
      .palette-card__description {
        box-shadow: $left-border-shadow, 0 -1px color('grey', 'lighter');
      }
    }
  }
}
</style>
