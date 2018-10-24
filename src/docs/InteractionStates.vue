<template>
  <StoryContainer>
    <BaseHeading level="1">
      Interaction
    </BaseHeading>
    <p>
      Interaction states communicate the status of components and interactive elements. These states
      should be visibly distinct, but the element should still be recognizable. Interactive elements
      should whether or not they are interactive and provide feedback upon interaction. Feedback
      should be provided as to the outcome of that interaction.
    </p>

    <BaseHeading level="2">
      Motion &amp; Animation
    </BaseHeading>
    <p>
      Motion and animation help smooth and clarify the transitions between states. They should never
      impede the usability or accessibility of a product when used correctly.
    </p>

    <BaseHeading level="2">
      Empty States
    </BaseHeading>
    <p>
      Empty states are incredibly important, and should always be considered. They confirm that no
      errors have occurred, and can provide instructions and calls to action. Additionally, they
      give an opportunity to reinforce branding.
    </p>
  </StoryContainer>
</template>

<script>
import StoryContainer from '@/docs/StoryContainer'

export default {
  name: 'InteractionStates',

  components: {
    StoryContainer
  }
}
</script>
