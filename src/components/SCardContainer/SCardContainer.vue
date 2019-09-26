<template>
  <SContainer>
    <SCard :tag="tag">
      <slot />
    </SCard>
  </SContainer>
</template>

<script>
import { SCard } from '@/components/SCard'
import { SContainer } from '@/components/SContainer'

export default {
  name: 'SCardContainer',

  components: {
    SCard,
    SContainer,
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>
