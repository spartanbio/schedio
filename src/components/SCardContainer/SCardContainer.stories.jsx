import { SCardContainer } from '@/components/SCardContainer';
import { SHeading } from '@/components/SHeading';
import PropList from '@@/docs/components/PropList';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Layout/SCardContainer',

  parameters: {
    jest: 'SCardContainer',
  },
};

export const cardContainer = () => ({
  props: {
    props: {
      tag: {
        default: text('tag', 'div', 'Optional Props'),
      },
    },
    slotContent: {
      default: text('default', 'This is a card container!', 'Slots'),
    },
  },
  render (h) {
    return (
      <div>
        <SHeading level="1">Card Container</SHeading>
        <p>Creates a container that also looks like a card.</p>

        <SHeading level="2">Example</SHeading>
        <SCardContainer {...{ props: this.props }}>{this.slotContent}</SCardContainer>

        {SCardContainer.props && <PropList component={SCardContainer} />}
      </div>
    );
  },
});

cardContainer.story = {
  name: 'Card Container',
};
