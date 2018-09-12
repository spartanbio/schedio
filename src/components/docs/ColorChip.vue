<template>
  <div class="palette-wrapper">
    <BaseHeading level="3">
      {{ heading | underscoreToSpace }}
    </BaseHeading>

    <div class="palette-card">
      <div v-for="color in palette" :key="color.name" class="palette-card__row">
        <div :style="{ backgroundColor: color.value }" class="palette-card__shade" />

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

<style lang="scss">
$palette-border-radius: 0.5em;
$shadow-color: color('grey', 'light');

.palette-wrapper {
  // Add some space

  &:not(:last-child) {
    margin-right: $spacing-base;
  }
}

.palette-card {
  border-radius: $palette-border-radius;
  box-shadow: 0 0 1px $shadow-color, 0 0.5em 1.5em $shadow-color;
  background-color: color('ice');
  display: inline-block;
  width: 26em;

  $row-height: 6em;

  &__description {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    min-height: inherit;
    padding: $spacing-base;
  }

  &__shade {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    box-shadow: 1px 0 color('grey', 'lighter');
    height: 100%;
    min-height: inherit;
    min-width: $row-height;
  }

  &__row {
    align-items: center;
    display: flex;
    min-height: $row-height;
    position: relative;

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
        box-shadow: 0 -1px color('grey', 'lighter');
      }
    }
  }
}
</style>
