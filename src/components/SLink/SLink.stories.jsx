import { SHeading } from '@/components/SHeading'
import { SLink } from '@/components/SLink'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SLink', module)
  .addDecorator(withKnobs)
  .add('SLink', () => {
    // TODO: document visited/unvisited states.
    return {
      props: {
        to: { default: text('Link to (required)', 'https://spartanbio.com', 'Props') },
        linkText: { default: text('Link text', 'Spartan Bio', 'Slots') }
      },
      render(h) {
        return (
          <StoryContainer>
            <SHeading level="1">Links</SHeading>
            <p>
              Links are used for simple navigation. If you find yourself adding{' '}
              <code>href="#"</code> or <code>href=""javascript:void(0)"</code>, you should probably
              be using a <StoryLink to="Components/SButton" />.
            </p>
            <p>
              <code>SLink</code> will detect external and internal links automatically. It supports
              use with or without <code>vue-router</code>, and with <code>nuxt</code>.{' '}
              <code>a</code>, <code>router-link</code>, or <code>nuxt-link</code> will be used for
              the component as necessary.
            </p>

            <SHeading level="2">Example</SHeading>
            <p>
              Here's an external link to <SLink to={this.to}>{this.linkText}</SLink>. Make sure
              there is no whitespace around external links. If there is, it will break the icon
              placement.
            </p>
            <p>
              Here's a link with no slot content provided: <SLink to="http://spartanbio.com/" />
            </p>
            <p>
              Here's an{' '}
              <SLink to="/some-internal-page" on-click={e => e.preventDefault()}>
                internal link.
              </SLink>{' '}
              Don't worry; it's called with <code>@click.prevent</code>, so you won't leave the
              documentation..
            </p>

            <PropList component={SLink} />
          </StoryContainer>
        )
      }
    }
  })
