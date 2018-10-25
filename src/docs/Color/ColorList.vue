<template>
  <BaseContainer>
    <BaseContainerRow>
      <BaseContainerColumn v-for="(colors, name) in palette" :key="'preview-' + name" md="6">
        <ColorChip :heading="name" :palette="colors" />
      </BaseContainerColumn>
    </BaseContainerRow>
  </BaseContainer>
</template>

<script>
import ColorChip from './ColorChip'

export default {
  components: { ColorChip },
  // eslint-disable-next-line
  props: ['palette']
}
</script>
