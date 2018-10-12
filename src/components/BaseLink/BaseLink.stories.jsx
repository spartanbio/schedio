import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'

storiesOf('Base Components/BaseLink', module)
  .addDecorator(withKnobs)
  .add('BaseLink', () => {
    const props = {
      to: text('Link to (required)', 'https://spartanbio.com', 'Props')
    }

    const linkText = text('Link text', 'Spartan Bio', 'Slots')

    return {
      render() {
        return (
          <div>
            <BaseHeading level="1">Links</BaseHeading>
            <p>
              Here's an external link to <BaseLink {...{ props }}>{linkText}</BaseLink>.
            </p>
            <p>
              Here's an{' '}
              <BaseLink to="/some-internal-page" on-click={e => e.preventDefault()}>
                internal link.
              </BaseLink>{' '}
              Don't worry; it's called with <code>@click.prevent</code>.
            </p>
            <p>
              <code>BaseLink</code> will detect external and internal links automatically. It
              supports use with or without <code>vue-router</code>, and with <code>nuxt</code>.
              <code>a</code>, <code>router-link</code>, or <code>nuxt-link</code> will be used for
              the component as necessary.
            </p>
            <BaseHeading level="2">Prop list</BaseHeading>
            <ul>
              {Object.keys(BaseLink.props).map(prop => (
                <li>{prop}</li>
              ))}
            </ul>
          </div>
        )
      }
    }
  })
