<template>
  <article
    class="collapse"
    :class="{
      'collapse--active': showContent,
    }"
  >
    <header>
      <SButton
        class="collapse__trigger"
        @click="toggleContent"
      >
        <slot name="trigger-text">
          {{ triggerText }}
        </slot>

        <SIcon
          class="collapse__icon"
          icon="chevron-down"
        />
      </SButton>
    </header>

    <Transition name="fade">
      <main
        v-show="showContent"
        class="collapse__content"
        :aria-hidden="!showContent"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </main>
    </Transition>
  </article>
</template>

<script>
import { SButton } from '@/components/SButton'
import { SIcon } from '@/components/SIcon'

export default {
  name: 'SCollapse',

  components: {
    SButton,
    SIcon,
  },

  props: {
    triggerText: {
      type: String,
      default: 'Collapse trigger text',
    },

    content: {
      type: String,
      default: 'Collapse content',
    },
  },

  data () {
    return {
      showContent: false,
    }
  },

  methods: {
    toggleContent () {
      this.showContent = !this.showContent
    },
  },
}
</script>
