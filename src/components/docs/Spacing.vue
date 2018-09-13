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
              <div :style="{height: value, width: value}" class="spacing-example__spacer" />
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
.spacing-example__spacer {
  background-color: $spartan-blue;
}
</style>
