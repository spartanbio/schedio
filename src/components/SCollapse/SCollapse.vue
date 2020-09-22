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
          aria-hidden="true"
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
import { SButton } from '@/components/SButton';
import { SIcon } from '@/components/SIcon';

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
    };
  },

  methods: {
    toggleContent () {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss">
.collapse {
  $root: &;

  &:not(:last-child) {
    border-bottom: border();
    border-color: color('grey', 'lighter');
    margin-bottom: spacing('tight');
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
    margin-bottom: spacing('half');
    text-align: left;
    width: 100%;
  }

  &__icon {
    flex: 0 0 auto;
    margin-left: spacing('half');
    transition: all duration() easing();
  }

  &__content {
    padding: spacing();
    padding-top: spacing('tight');
  }

  &--active {
    #{$root}__trigger {
      background: color('ice');
    }

    #{$root}__icon {
      transform: rotate(-180deg);
    }
  }
}
</style>
