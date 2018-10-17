<template>
  <BaseContainer>
    <CardDisplay>
      <slot />
    </CardDisplay>
  </BaseContainer>
</template>

<script>
import BaseContainer from '@/components/BaseContainer'
import CardDisplay from '@/components/CardDisplay'

export default {
  name: 'StoryContainer',

  components: {
    BaseContainer,
    CardDisplay
  }
}
</script>
