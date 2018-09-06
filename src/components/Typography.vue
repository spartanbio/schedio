<template>
  <div>
    <BaseHeading level="1">Typography</BaseHeading>
    <p>We'll outline typography here</p>

    <hr>

    <BaseHeading 
      level="1" 
      is-display
      class="uppercase">
      Display 1 Uppercase
    </BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height: 1.25em | Tracking: 0.025em | Class: <code>.uppercase</code>
    </p>

    <BaseHeading 
      level="1" 
      is-display>
      Display 1 Lowercase
    </BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height: 1.25em | Tracking: 0.025em
    </p>

    <BaseHeading 
      level="2" 
      is-display
      class="uppercase">
      Display 2 Uppercase
    </BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height: 1.25em | Tracking: 0.025em | Class: <code>.uppercase</code>
    </p>

    <BaseHeading 
      level="2" 
      is-display>
      Display 2 Lowercase
    </BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height: 1.25em | Tracking: 0.025em
    </p>

    <BaseHeading level="1">Heading 1</BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-3'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height: 1.5em
    </p>

    <BaseHeading level="2">Heading 2</BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-4'] }} | Weight: {{ tokens['font-weight-bold'] }}
    </p>

    <BaseHeading level="3">Heading 3</BaseHeading>
    <p class="caption">
      Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-bold'] }}
    </p>

    <p>Body</p>
    <p class="caption">
      Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-regular'] }}
    </p>

    <p 
      class="caption" 
      style="margin-top: 1rem;">
      Caption
    </p>
    <p class="caption">
      Size: {{ tokens['font-size-6'] }} | Weight: {{ tokens['font-weight-regular'] }} | Colour: <code>{{ tokens['spartan-grey'] }}</code>
    </p>
  </div>
</template>

<script>
import tokens from '@/assets/styles/tokens/tokens.json'

export default {
  name: 'Typography',

  data: () => ({
    tokens
  })
}
</script>
