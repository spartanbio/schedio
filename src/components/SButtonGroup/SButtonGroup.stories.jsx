import { SButton } from '@/components/SButton';
import { SButtonGroup } from '@/components/SButtonGroup';
import { SHeading } from '@/components/SHeading';
import PropList from '@@/docs/components/PropList';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Buttons/SButtonGroup',

  parameters: {
    jest: 'SButtonGroup',
  },
};

export const buttonGroup = () => ({
  props: {
    isGrouped: { default: boolean('is-grouped', false, 'Optional Props') },
    button1Text: { default: text('Button 1 text', 'Button 1', 'Slots') },
    button2Text: { default: text('Button 2 text', 'Button 2', 'Slots') },
    button3Text: { default: text('Button 3 text', 'Button 3', 'Slots') },
    button1Disabled: { default: boolean('Button 1 disabled', false, '$attrs') },
    button2Disabled: { default: boolean('Button 2 disabled', false, '$attrs') },
    button3Disabled: { default: boolean('Button 3 disabled', false, '$attrs') },
  },
  render (h) {
    return (
      <div>
        <SHeading level="1">Button Group</SHeading>
        <p>Button groups take multiple buttons and display them nicely.</p>
        <p>
          Buttons in a group can be merged with the <code>isGrouped</code> prop.
        </p>
        <p>Colors and styles are set on the individual buttons</p>

        <SHeading level="2">Example</SHeading>
        <SButtonGroup
          isGrouped={this.isGrouped}
        >
          <SButton
            color="blue"
            shade="light"
            disabled={this.button1Disabled}
          >
            {this.button1Text}
          </SButton>

          <SButton
            color="blue"
            shade="light"
            disabled={this.button2Disabled}
          >
            {this.button2Text}
          </SButton>

          <SButton
            color="blue"
            shade="light"
            disabled={this.button3Disabled}
          >
            {this.button3Text}
          </SButton>
        </SButtonGroup>

        <PropList component={SButtonGroup} />
      </div>
    );
  },
});

buttonGroup.story = {
  name: 'Button Group',
};
