<template>
  <BaseContainer>
    <CardDisplay>
      <BaseLink to="/hello">Hello</BaseLink>
      <BaseLabel label="bl"/>
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
