<template>
  <div>
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

    <SContainer>
      <SContainerRow justify="center">
        <SContainerColumn md="6">
          <img
            src="@/assets/images/cube.jpg"
            alt="Cube on a blue background"
          >
        </SContainerColumn>
      </SContainerRow>
    </SContainer>

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

    <SContainer>
      <SContainerRow justify="center">
        <SContainerColumn md="6">
          <img
            src="@/assets/images/installation-illustration.svg"
            alt="Cube installation"
          >
        </SContainerColumn>
      </SContainerRow>
    </SContainer>

    <SHeading level="2">
      Icons
    </SHeading>
    <p>
      Icons should be distinct, and readable. They can be used to help users quickly identify key
      information or actions, but they should never be the sole identifier. When an icon is used for
      identification, it should be accompanied by a label.
    </p>

    <SContainer>
      <SContainerRow justify="center">
        <SContainerColumn
          md="2"
          style="align-items: center; display: flex;"
        >
          <img
            src="@/assets/images/clipboard-icon.svg"
            alt="Clipboard icon"
          >
        </SContainerColumn>
        <SContainerColumn
          md="2"
          style="align-items: center; display: flex;"
        >
          <img
            src="@/assets/images/droplet-icon.svg"
            alt="Droplet icon"
          >
        </SContainerColumn>
        <SContainerColumn
          md="2"
          style="align-items: center; display: flex;"
        >
          <img
            src="@/assets/images/user-icon.svg"
            alt="User icon"
          >
        </SContainerColumn>
        <SContainerColumn
          md="2"
          style="align-items: center; display: flex;"
        >
          <img
            src="@/assets/images/password-icon.svg"
            alt="Password icon"
          >
        </SContainerColumn>
        <SContainerColumn
          md="2"
          style="align-items: center; display: flex;"
        >
          <img
            src="@/assets/images/system-icon.svg"
            alt="Cube icon"
          >
        </SContainerColumn>
      </SContainerRow>
    </SContainer>
  </div>
</template>

<script>
export default {
  name: 'Graphics',
}
</script>
