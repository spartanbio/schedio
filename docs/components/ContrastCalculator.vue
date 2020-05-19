<template>
  <form>
    <SHeading level="2">
      Contrast Calculator
    </SHeading>

    <SContainerRow align="center">
      <SContainerColumn narrow>
        <div
          class="contrast-calculator__preview"
          :style="{
            color: foreground,
            backgroundColor: background,
          }"
        >
          Foreground
        </div>
      </SContainerColumn>

      <SContainerColumn>
        <span style="display: flex; align-items: center;">
          <SIcon
            :color="passesAccessibility ? 'green' : 'red'"
            :icon="passesAccessibility ? 'check-circle' : 'x-circle'"
            style="margin-right: 0.25rem;"
          />
          {{ passesAccessibility ? 'Accessible' : 'Not accessible' }}
        </span>

        <output>
          <div><strong>Contrast Ratio:</strong> {{ contrastRatio }}</div>
          <div><strong>WCAG Score:</strong> {{ wcagScore }}</div>
        </output>
      </SContainerColumn>
    </SContainerRow>

    <SContainerRow>
      <SContainerColumn>
        <SHeading level="3">
          Foreground
        </SHeading>

        <ColorPicker
          id="foreground-picker"
          v-model="foreground"
        />
      </SContainerColumn>

      <SContainerColumn>
        <SHeading level="3">
          Background
        </SHeading>

        <ColorPicker
          id="background-picker"
          v-model="background"
        />
      </SContainerColumn>
    </SContainerRow>
  </form>
</template>

<script>
import ColorPicker from './ColorPicker'
import contrast from 'get-contrast'

export default {
  name: 'ContrastCalculator',

  components: {
    ColorPicker,
  },

  data () {
    return {
      foreground: 'rgb(255, 255, 255)',
      background: 'rgb(6, 137, 58)',
    }
  },

  computed: {
    contrastRatio () {
      try {
        return this.ratio(this.foreground, this.background).toFixed(2)
      } catch {
        return 0
      }
    },
    passesAccessibility () {
      try {
        return this.isAccessible(this.foreground, this.background)
      } catch {
        return false
      }
    },
    wcagScore () {
      try {
        return this.score(this.foreground, this.background)
      } catch {
        return 'F'
      }
    },
  },

  methods: {
    ...contrast,
  },
}
</script>

<style lang="scss">
.contrast-calculator__preview {
  border-radius: border-radius('small');
  display: inline-block;
  margin-bottom: spacing('half');
  padding: spacing('half') spacing();
}
</style>
