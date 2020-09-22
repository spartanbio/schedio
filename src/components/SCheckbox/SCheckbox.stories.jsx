import { SCheckbox } from '@/components/SCheckbox';
import { SHeading } from '@/components/SHeading';
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields';
import PropList from '@@/docs/components/PropList';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components/Inputs/SCheckbox',

  parameters: {
    jest: 'SCheckbox',
  },
};

export const checkbox = () => ({
  props: {
    props: {
      default: () => ({
        ...withAttrsAsProps({
          id: 'base-checkbox',
          name: 'base-checkbox',
          label: 'Base Checkbox',
        }),
        isReversed: boolean('is-reversed', false, 'Optional Props'),
      }),
    },
    attrs: { default: withUnboundAttrs({ value: 'base-checkbox' }) },
  },

  render (h) {
    const { attrs, props } = this.$props;
    return (
      <div>
        <SHeading level="1">Checkbox</SHeading>
        <p>
          Checkboxes provide the ability to make a range of selections (none, one, or multiple).
          They can also be used to provide consent, or indicate agreement.
        </p>

        <SHeading level="2">Example</SHeading>
        <SCheckbox {...{ props }} {...{ attrs }} />

        <PropList component={SCheckbox} />
      </div>
    );
  },
});

checkbox.story = {
  name: 'Checkbox',
};
