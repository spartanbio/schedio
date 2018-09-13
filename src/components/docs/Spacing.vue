<template>
  <div>
    <BaseHeading level="1">Spacing</BaseHeading>
    <p>Consistent spacing allows elements to stand out. It improves scannability and reduces noise.</p>
    <p>
      All spacing is defined using the
      <code>em</code> unit. This ensures spacing is relative to the parent element's
      <code>font-size</code>.
    </p>

    <table>
      <thead>
        <th>Name</th>
        <th>Value</th>
        <th>Example</th>
      </thead>
      <tbody>
        <tr v-for="{ name, value } in spacing" :key="name">
          <td>
            <code>${{ name }}</code>
          </td>
          <td>
            <code>{{ value }}</code>
          </td>
          <td>
            <div class="spacing-example">
              <div :style="{marginRight: value}" class="spacing-example__element" />
              <div class="spacing-example__element" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'
export default {
  name: 'Spacing',

  data() {
    return {
      spacing: Object.values(props).filter(p => p.category === 'spacing')
    }
  }
}
</script>

<style lang="scss" scoped>
.spacing-example {
  align-items: center;
  display: flex;
  justify-content: center;

  $dimensions: $spacing-double;

  &__element {
    background-color: $spartan-blue;
    border-radius: $dimensions;
    height: $dimensions;
    width: $dimensions;
  }
}
</style>
