import { SHeading } from '@/components/SHeading';
import { colorNames as iconColors, allShadeOptions } from '@/components/SIcon/options';
import { SInput } from '@/components/SInput';
import { allowed } from '@/components/SInput/options';
import PropList from '@@/docs/components/PropList';
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields';
import { boolean, select, text } from '@storybook/addon-knobs';
import icons from 'feather-icons/dist/icons.json';
import { SFormField } from '@/components/SFormField';

const iconList = Object.keys(icons);
const iconProp = side => select(`icon-${side}`, ['', ...iconList], '', 'Optional Props');
const iconColor = (side) => {
  return select(`icon-${side}-color`, ['', ...iconColors], 'green', 'Optional Props');
};
const iconShade = (side) => {
  return select(`icon-${side}-shade`, ['', ...allShadeOptions], '', 'Optional Props');
};

export default {
  title: 'Components/Inputs/SInput',

  parameters: {
    jest: 'SInput',
  },
};

export const input = () => ({
  props: {
    props: {
      default: () => ({
        ...withAttrsAsProps({ id: 'base-input', name: 'base-input', label: 'Base Input' }),
        placeholder: text('placeholder', 'Placeholder text', 'Required Props'),
        type: select('type', ['', ...allowed], '', 'Optional Props'),
        isInline: boolean('is-inline', false, 'Optional Props'),
        isFullwidth: boolean('is-fullwidth', false, 'Optional Props'),
        iconLeft: iconProp('left'),
        iconLeftColor: iconColor('left'),
        iconLeftShade: iconShade('left'),
        iconRight: iconProp('right'),
        iconRightColor: iconColor('right'),
        iconRightShade: iconShade('right'),
      }),
    },

    attrs: {
      default: withUnboundAttrs(),
    },
  },
  render (h) {
    const { props, attrs } = this.$props;
    return (
      <div>
        <SHeading level="1">Input</SHeading>
        <p>Inputs are used to collect user provided text data that should be fairly short.</p>

        <SHeading level="2">Example</SHeading>
        <SInput {...{ props }} {...{ attrs }} />

        <PropList component={SInput} />
      </div>
    );
  },
});

input.story = {
  name: 'Input',
};

export const inputWithIcons = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Input with icons</SHeading>
        <p>Colors can be provided for each icon.</p>
        <SFormField>
          <SInput icon-left="activity" id="icon-l" name="icon-l" label="Input" />
        </SFormField>
        <SFormField>
          <SInput icon-right="activity" id="icon-r" name="icon-r" label="Input" />
        </SFormField>
        <SFormField>
          <SInput
            icon-left="activity"
            icon-right="activity"
            id="icon-b"
            name="icon-b"
            label="Input"
          />
        </SFormField>
      </div>
    );
  },
});

inputWithIcons.story = {
  name: 'Input with icons',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};
