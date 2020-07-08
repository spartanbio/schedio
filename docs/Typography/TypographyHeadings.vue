<template>
  <div>
    <div class="typography-intro">
      <SHeading>Headings and Displays</SHeading>

      <p>
        Headings and displays typically have <code>margin-top: 2rem;</code> and
        <code>margin-bottom: 1rem;</code>, but that has been disabled for example purposes.
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
        {{ tokens['line-height-large-text'] }} | Tracking: 0.125rem | Case: uppercase
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
        {{ tokens['line-height-large-text'] }} | Tracking: 0.125rem
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
        {{ tokens['line-height-large-text'] }} | Tracking: 0.125rem | Case: uppercase
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
        {{ tokens['line-height-large-text'] }} | Tracking: 0.125rem
      </p>
    </article>

    <article class="typography-example">
      <SHeading>Heading 1</SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-3'] }} | Weight: {{ tokens['font-weight-bold'] }} | Line height:
        {{ tokens['line-height-base'] }} | Case: uppercase
      </p>
    </article>

    <article class="typography-example">
      <SHeading level="2">
        Heading 2
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-4'] }} | Weight: {{ tokens['font-weight-bold'] }} |
        Case: uppercase
      </p>
    </article>

    <article class="typography-example">
      <SHeading level="3">
        Heading 3
      </SHeading>
      <p class="caption">
        Size: {{ tokens['font-size-5'] }} | Weight: {{ tokens['font-weight-bold'] }} |
        Case: uppercase
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
import StoryLink from '@@/docs/components/StoryLink';
import tokens from '@spartanbio/schedio-tokens/dist/web/json/tokens.json';

export default {
  name: 'TypographyHeadings',

  components: {
    StoryLink,
  },

  data: () => ({
    tokens,
  }),
};
</script>

<style lang="scss" scoped>
@import 'typography.stories';
</style>
