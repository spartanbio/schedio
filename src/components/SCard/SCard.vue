<template>
  <Component
    :is="tag"
    class="card"
  >
    <div
      v-if="$slots.header"
      class="card__header"
    >
      <slot name="header" />
    </div>

    <img
      v-if="image && image.src"
      v-bind="image"
      :alt="image.alt"
      class="card__image"
    >

    <div
      v-if="$slots.default"
      :class="{ 'card__body--no-padding': hasNoPadding }"
      class="card__body"
    >
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="card__footer"
    >
      <slot name="footer" />
    </div>
  </Component>
</template>

<script>
const imageValidator = (obj) => {
  const requiredAttrs = ['src', 'alt']

  return requiredAttrs.every((attr) => {
    const hasAttr = {}.hasOwnProperty.call(obj, attr)

    if (!hasAttr) console.error(`\`image\` requires attribute: ${attr}`)

    return hasAttr
  })
}

export default {
  name: 'SCard',

  props: {
    tag: {
      type: String,
      default: 'div',
    },

    image: {
      type: Object,
      default: () => ({ src: '', alt: '' }),
      validator: imageValidator,
    },

    hasNoPadding: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.card {
  background-color: color('white');
  border-radius: border-radius();
  box-shadow: shadow('border'), shadow();
  display: flex;
  flex-direction: column;

  > :first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  > :last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &__header {
    border-bottom: border();
    border-bottom-color: color('grey', 'light');
    flex: 1 1 auto;
    padding: spacing('double');
  }

  &__image {
    flex: 1 1 auto;
    width: 100%;
  }

  &__body {
    flex: 1 1 auto;
    padding: spacing('double');

    &--no-padding {
      padding: spacing('none');
    }
  }

  &__footer {
    border-top: border();
    border-top-color: color('grey', 'light');
    flex: 1 1 auto;
    padding: spacing('double');
  }
}
</style>
