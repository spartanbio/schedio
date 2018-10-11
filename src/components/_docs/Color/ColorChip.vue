<template>
  <div class="palette-wrapper">
    <BaseHeading level="3">
      {{ heading | underscoreToSpace }}
    </BaseHeading>

    <div class="palette-card">
      <div
        v-for="color in palette"
        :key="color.name"
        :style="{ backgroundColor: color.value }"
        class="palette-card__row">

        <div class="palette-card__description">
          <div>
            <strong>Token name: </strong>
            <code>{{ color.name }}</code>
          </div>
          <div>
            <strong>{{ colorSpace(color.value) }}: </strong>
            <code>{{ color.value }}</code>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorChip',

  filters: {
    underscoreToSpace: str => str.replace(/_/g, ' ')
  },

  props: {
    palette: {
      type: Array,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },

  methods: {
    colorSpace(color) {
      return color[0] === '#' ? 'HEX' : color.split('(')[0].toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
$palette-border-radius: 0.5em;
$shadow-color: color('grey', 'light');
$left-border-shadow: -1px 0 color('grey', 'lighter');

.palette-wrapper {
  // Add some space
  margin: spacing('half');
}

.palette-card {
  border-radius: $palette-border-radius;
  box-shadow: 0 0 1px $shadow-color, 0 0.5em 1.5em $shadow-color;
  display: inline-block;
  width: 28em;

  &__description {
    background-color: color('white');
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    box-shadow: $left-border-shadow;
    margin-left: 5em;
    max-width: 24em;
    min-height: inherit;
    padding: spacing('base');
  }

  &__row {
    // Set up border radii
    &:first-child {
      border-top-left-radius: $palette-border-radius;
      border-top-right-radius: $palette-border-radius;
    }

    &:last-child {
      border-bottom-left-radius: $palette-border-radius;
      border-bottom-right-radius: $palette-border-radius;
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
