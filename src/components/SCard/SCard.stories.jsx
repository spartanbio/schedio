import { SHeading } from '@/components/SHeading'
import { SCard } from '@/components/SCard'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SCard', module)
  .addDecorator(withKnobs)
  .add('SCard', () => {
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
          <SHeading level="1">Card</SHeading>
          <p>
            It's a card! It has header, footer, and default slots, and supports images. Padding on
            the default slot can be toggled with the <code>has-no-padding</code> prop.
          </p>

          <SHeading level="2">Example</SHeading>
          <SCard {...{ props }}>
            <template slot="header">{headerSlot}</template>
            <template slot="default">{defaultSlot}</template>
            <template slot="footer">{footerSlot}</template>
          </SCard>

          <PropList component={SCard} />
        </StoryContainer>
      )
    }
  })
