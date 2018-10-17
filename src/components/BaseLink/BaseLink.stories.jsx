import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import StoryLink from '@/components/_docs/StoryLink'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseLink', module)
  .addDecorator(withKnobs)
  .add('BaseLink', () => {
    const props = {
      to: text('Link to (required)', 'https://spartanbio.com', 'Props')
    }

    const linkText = text('Link text', 'Spartan Bio', 'Slots')

    // TODO: document visited/unvisited states.

    return {
      render() {
        return (
          <StoryContainer>
            <BaseHeading level="1">Links</BaseHeading>
            <p>
              Links are used for simple navigation. If you find yourself adding{' '}
              <code>href="#"</code> or <code>href=""javascript:void(0)"</code>, you should probably
              be using a <StoryLink to="Base Components/BaseButton" />.
            </p>
            <p>
              <code>BaseLink</code> will detect external and internal links automatically. It
              supports use with or without <code>vue-router</code>, and with <code>nuxt</code>.
              <code>a</code>, <code>router-link</code>, or <code>nuxt-link</code> will be used for
              the component as necessary.
            </p>

            <BaseHeading level="2">Example</BaseHeading>
            <p>
              Here's an external link to <BaseLink {...{ props }}>{linkText}</BaseLink>.
            </p>
            <p>
              Here's an{' '}
              <BaseLink to="/some-internal-page" on-click={e => e.preventDefault()}>
                internal link.
              </BaseLink>{' '}
              Don't worry; it's called with <code>@click.prevent</code>, so you won't leave the
              documentation..
            </p>

            <PropList component={BaseLink} />
          </StoryContainer>
        )
      }
    }
  })
