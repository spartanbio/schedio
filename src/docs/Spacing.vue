<template>
  <StoryContainer>
    <BaseHeading level="1">Spacing</BaseHeading>
    <p>Consistent spacing allows elements to stand out. It improves scannability and reduces noise.</p>
    <p>
      All spacing is defined using the
      <code>em</code> unit. This ensures spacing is relative to the parent element's
      <code>font-size</code>.
    </p>

    <table class="table table--bordered table--hoverable">
      <thead>
        <tr>
          <th class="table__cell">Name</th>
          <th class="table__cell">Value</th>
          <th class="table__cell">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ name, value } in spacing" :key="name">
          <td class="table__cell">
            <code>${{ name }}</code>
          </td>
          <td class="table__cell table__cell--numeric">
            <code>{{ value }}</code>
          </td>
          <td class="table__cell spacing-example">
            <div :style="{height: value, width: value}" class="spacing-example__spacer" />
          </td>
        </tr>
      </tbody>
    </table>

  </StoryContainer>
</template>

<script>
import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'
import StoryContainer from '@/docs/StoryContainer'

export default {
  name: 'Spacing',

  components: {
    StoryContainer
  },

  data() {
    return {
      spacing: Object.values(props).filter(p => p.category === 'spacing')
    }
  }
}
</script>

<style lang="scss" scoped>
.spacing-example__spacer {
  background-color: $spartan-blue;
}
</style>
