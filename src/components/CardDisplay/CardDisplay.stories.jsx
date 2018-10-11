import CardDisplay from '@/components/CardDisplay'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseHeading from '@/components/BaseHeading'

storiesOf('Components/CardDisplay', module)
  .addDecorator(withKnobs)
  .add('CardDisplay', () => {
    const headerSlot = text('Header', 'I am the header slot', 'Slots')
    const defaultSlot = text('Default', 'I am the default slot', 'Slots')
    const footerSlot = text('Footer', 'I am the footer slot', 'Slots')

    const props = {
      image: {
        src: text('image.src', '', 'Props'),
        alt: text('image.alt', '', 'Props')
      },
      hasNoPadding: boolean('has-no-padding', false, 'Props'),
      tag: text('tag', 'div', 'Props')
    }

    return {
      render: h => (
        <div>
          <BaseHeading level="1">Card Display</BaseHeading>
          It's a card! It has header, footer, and default slots, and supports images. Padding on the
          default slot can be toggled with the <code>has-no-padding</code> prop.
          <BaseHeading level="2">Example</BaseHeading>
          <CardDisplay {...{ props }}>
            <template slot="header">{headerSlot}</template>
            <template slot="default">{defaultSlot}</template>
            <template slot="footer">{footerSlot}</template>
          </CardDisplay>
          <BaseHeading level="2">Prop list</BaseHeading>
          <ul>
            {Object.keys(CardDisplay.props).map(prop => (
              <li>{prop}</li>
            ))}
          </ul>
        </div>
      )
    }
  })
