<template>
  <div>
    <SHeading level="1">
      Interaction
    </SHeading>
    <p>
      Interaction states communicate the status of components and interactive elements. These states
      should be visibly distinct, but the element should still be recognizable. Interactive elements
      should whether or not they are interactive and provide feedback upon interaction. Feedback
      should be provided as to the outcome of that interaction.
    </p>

    <SHeading level="2">
      Motion &amp; Animation
    </SHeading>
    <p>
      Motion and animation help smooth and clarify the transitions between states. They should never
      impede the usability or accessibility of a product when used correctly.
    </p>

    <SHeading level="2">
      Empty States
    </SHeading>
    <p>
      Empty states are incredibly important, and should always be considered. They confirm that no
      errors have occurred, and can provide instructions and calls to action. Additionally, they
      give an opportunity to reinforce branding.
    </p>
  </div>
</template>

<script>
export default {
  name: 'InteractionStates',
};
</script>
