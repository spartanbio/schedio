<template>
  <SContainer>
    <SCard>
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
    SContainer
  }
}
</script>
