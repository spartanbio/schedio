<template>
  <StoryContainer>
    <SHeading level="1">
      Graphics
    </SHeading>
    <p>
      Graphics can be used to make a statement, enhance understanding, and break up the monotony of
      text. They should not be distracting when used for decoration.
    </p>
    <p>
      Critical content should not be provided by text in graphics, or graphics alone. Always include
      it as simple text.
    </p>

    <SHeading level="2">
      Photos
    </SHeading>
    <p>
      Photos should be provide examples, used to set tone, or convey a broader concept. They should
      have primarily cool colors to avoid clashing with the product design.
    </p>
    <p>
      Instructions generally should not be provided through photos. They can be noisy and distract
      from any instructional text.
    </p>

    <SHeading level="2">
      Illustrations
    </SHeading>
    <p>
      Illustrations should be simple, clear, and descriptive. They should convey just enough
      information to communicate an idea, and little more.
    </p>
    <p>
      Illustrations are well suited to instructions because they provide consistency and are easier
      to modify than photos.
    </p>

    <SHeading level="2">
      Icons
    </SHeading>
    <p>
      Icons should be distinct, and readable. They can be used to help users quickly identify key
      information or actions, but they should never be the sole identifier. When an icon is used for
      identification, it should be accompanied by a label.
    </p>
  </StoryContainer>
</template>

<script>
import StoryContainer from '@/docs/StoryContainer'

export default {
  name: 'Graphics',

  components: {
    StoryContainer
  }
}
</script>
