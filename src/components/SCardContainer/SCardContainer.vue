<template>
  <SContainer>
    <SCard>
      <slot />
    </SCard>
  </SContainer>
</template>

<script>
import { SCard } from '@/components/SCard'

export default {
  name: 'SCardContainer',

  components: {
    SCard
  }
}
</script>
