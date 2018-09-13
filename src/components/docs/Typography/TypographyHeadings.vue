<template>
  <div>
    <div class="typography-intro">
      <BaseHeading level="1">Headings and Displays</BaseHeading>

      <p>
        Headings and displays typically have <code>margin-top: 2em;</code> and
        <code>margin-bottom: 1em;</code>, but that has been disabled for example purposes.
      </p>
    </div>

    <article class="typography-example">
      <BaseHeading level="1" is-display class="uppercase">
        Display 1 Uppercase
      </BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em | Class: <code>.uppercase</code>
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="1" is-display>
        Display 1 Lowercase
      </BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="2" is-display class="uppercase">
        Display 2 Uppercase
      </BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em | Class: <code>.uppercase</code>
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="2" is-display>
        Display 2 Lowercase
      </BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="1">Heading 1</BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-3'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.5em
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="2">Heading 2</BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-4'] }} | Weight: {{ tokens['font-weight-bold'] }}
      </p>
    </article>

    <article class="typography-example">
      <BaseHeading level="3">Heading 3</BaseHeading>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-bold'] }}
      </p>
    </article>
  </div>
</template>

<script>
import tokens from '@/assets/styles/tokens/tokens.json'

export default {
  name: 'TypographyHeadings',

  data: () => ({
    tokens
  })
}
</script>

<style lang="scss">
@import 'typography.stories';
</style>
