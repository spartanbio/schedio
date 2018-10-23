<template>
  <BaseContainer>
    <CardDisplay>
      <slot />
    </CardDisplay>
  </BaseContainer>
</template>

<script>
import CardDisplay from '@/components/CardDisplay'

export default {
  name: 'CardContainer',

  components: {
    CardDisplay
  }
}
</script>
