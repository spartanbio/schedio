<template>
  <div>
    <SContainerRow>
      <SContainerColumn>
        <SHeading>Accessibility</SHeading>
        <p>
          WCAG 2.1 AA sets minimum contrast ratio of 4.5 for non-decorative elements (e.g.: text,
          icons without additional identifiers, progress indicators), and their backgrounds. If an
          element is purely decorative, this does not apply. Try to hit a minimum of 3.0, however.
        </p>

        <SCallout type="warning">
          WCAG 2.1 AA allows bold text, size 18px or greater to have a minimum contrast ratio of
          3.0. For simplicity's sake, consider 4.5 the minimum for that as well.
        </SCallout>
      </SContainerColumn>
    </SContainerRow>

    <SContainerRow>
      <SContainerColumn>
        <p>You can use this calculator to check contrast.</p>
        <ContrastCalculator />
      </SContainerColumn>
    </SContainerRow>
  </div>
</template>

<script>
import ContrastCalculator from '../components/ContrastCalculator';

export default {
  name: 'ColorAccessibility',

  components: {
    ContrastCalculator,
  },
};
</script>
