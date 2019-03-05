import { SHeading } from '@/components/SHeading'
import { SCard } from '@/components/SCard'
import PropList from '@/docs/PropList'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Layout.SCard', module)
  .addParameters({ jest: 'SCard' })
  .add('SCard', () => {
    return {
      props: {
        image: {
          default: () => ({
            src: text('image.src', '', 'Optional Props'),
            alt: text('image.alt', '', 'Optional Props')
          })
        },
        hasNoPadding: { default: boolean('has-no-padding', false, 'Optional Props') },
        tag: { default: text('tag', 'div', 'Optional Props') },
        headerSlot: { default: text('Header', 'I am the header slot', 'Slots') },
        defaultSlot: { default: text('Default', 'I am the default slot', 'Slots') },
        footerSlot: { default: text('Footer', 'I am the footer slot', 'Slots') }
      },
      render(h) {
        const { headerSlot, defaultSlot, footerSlot, ...props } = this.$props
        return (
          <div>
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
          </div>
        )
      }
    }
  })
