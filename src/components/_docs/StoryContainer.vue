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
  name: 'StoryContainer',

  components: {
    CardDisplay
  }
}
</script>
