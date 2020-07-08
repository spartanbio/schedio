<template>
  <SContainer>
    <SContainerRow>
      <SContainerColumn
        v-for="(colors, name) in palette"
        :key="'preview-' + name"
        md="6"
      >
        <ColorChip
          :heading="name"
          :palette="colors"
        />
      </SContainerColumn>
    </SContainerRow>
  </SContainer>
</template>

<script>
import ColorChip from './ColorChip';

export default {
  components: { ColorChip },
  // eslint-disable-next-line
  props: ['palette']
};
</script>
