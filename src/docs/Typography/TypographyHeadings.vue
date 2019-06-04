<template>
  <div>
    <div class="typography-intro">
      <SHeading>Headings and Displays</SHeading>

      <p>
        Headings and displays typically have <code>margin-top: 2em;</code> and
        <code>margin-bottom: 1em;</code>, but that has been disabled for example purposes.
      </p>
      <p>
        The
        <StoryLink
          to="Components/Layout.SHeading"
          story="Heading"
        >
          SHeading
        </StoryLink>
        component can be used for headings and displays.
      </p>
    </div>

    <article class="typography-example">
      <SHeading is-display>
        Display 1 Uppercase
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em
      </p>
    </article>

    <article class="typography-example">
      <SHeading
        is-display
        has-no-case
      >
        Display 1 Lowercase
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-1'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em | Class: <code>.heading--has-no-case</code>
      </p>
    </article>

    <article class="typography-example">
      <SHeading
        level="2"
        is-display
      >
        Display 2 Uppercase
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em | Class: <code>.uppercase</code>
      </p>
    </article>

    <article class="typography-example">
      <SHeading
        level="2"
        is-display
        has-no-case
      >
        Display 2 Lowercase
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-2'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.25em | Tracking: 0.025em | Class: <code>.heading--has-no-case</code>
      </p>
    </article>

    <article class="typography-example">
      <SHeading>Heading 1</SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-3'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        1.5em
      </p>
    </article>

    <article class="typography-example">
      <SHeading level="2">
        Heading 2
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-4'] }} | Weight: {{ tokens['font-weight-bold'] }}
      </p>
    </article>

    <article class="typography-example">
      <SHeading level="3">
        Heading 3
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-bold'] }}
      </p>
    </article>

    <article class="typography-example">
      <SHeading level="4">
        Heading 4
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-bold'] }}
      </p>
    </article>
  </div>
</template>

<script>
import StoryLink from '@/docs/StoryLink.vue'
import tokens from '@/assets/styles/tokens/dist/tokens.json'

export default {
  name: 'TypographyHeadings',

  components: {
    StoryLink
  },

  data: () => ({
    tokens
  })
}
</script>

<style lang="scss" scoped>
@import 'typography.stories';
</style>
