import BaseHeading from '@/components/BaseHeading'
import CardDisplay from '@/components/CardDisplay'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/CardDisplay', module)
  .addDecorator(withKnobs)
  .add('CardDisplay', () => {
    const props = {
      image: {
        src: text('image.src', '', 'Props'),
        alt: text('image.alt', '', 'Props')
      },
      hasNoPadding: boolean('has-no-padding', false, 'Optional Props'),
      tag: text('tag', 'div', 'Props')
    }
    const headerSlot = text('Header', 'I am the header slot', 'Slots')
    const defaultSlot = text('Default', 'I am the default slot', 'Slots')
    const footerSlot = text('Footer', 'I am the footer slot', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Card Display</BaseHeading>
          <p>
            It's a card! It has header, footer, and default slots, and supports images. Padding on
            the default slot can be toggled with the <code>has-no-padding</code> prop.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <CardDisplay {...{ props }}>
            <template slot="header">{headerSlot}</template>
            <template slot="default">{defaultSlot}</template>
            <template slot="footer">{footerSlot}</template>
          </CardDisplay>

          <PropList component={CardDisplay} />
        </StoryContainer>
      )
    }
  })
