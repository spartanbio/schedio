import { SHeading } from '@/components/SHeading'
import { SCard } from '@/components/SCard'
import PropList from '@@/docs/components/PropList'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Layout.SCard', module)
  .addParameters({ jest: 'SCard' })
  .add('Card', () => {
    return {
      props: {
        image: {
          default: () => ({
            src: text('image.src', '', 'Optional Props'),
            alt: text('image.alt', '', 'Optional Props'),
          }),
        },
        hasNoPadding: { default: boolean('has-no-padding', false, 'Optional Props') },
        tag: { default: text('tag', 'div', 'Optional Props') },
        headerSlot: { default: text('Header', 'I am the header slot', 'Slots') },
        defaultSlot: { default: text('Default', 'I am the default slot', 'Slots') },
        footerSlot: { default: text('Footer', 'I am the footer slot', 'Slots') },
      },
      render (h) {
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
      },
    }
  })
  .add(
    'Card Types',
    () => ({
      render (h) {
        return (
          <div>
            <SHeading>Card Types</SHeading>

            <SHeading level="2">Standard</SHeading>
            <p>All slots are optional.</p>
            <SCard>
              <template slot="header">Header</template>
              <template slot="default">Default</template>
              <template slot="footer">Footer</template>
            </SCard>

            <SHeading level="2">Image</SHeading>
            <p>You should only need to use the default or header slots with an image.</p>
            <SCard image={{ src: ' https://picsum.photos/800', alt: 'A random image' }}>
              <template slot="header">Header</template>
              <template slot="default">Default</template>
            </SCard>
          </div>
        )
      },
    }),
    {
      options: {
        showPanel: false,
      },
    }
  )
