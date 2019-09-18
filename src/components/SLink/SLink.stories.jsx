import { SHeading } from '@/components/SHeading'
import { SLink } from '@/components/SLink'
import PropList from '@@/docs/components/PropList'
import StoryLink from '@@/docs/components/StoryLink'
import { boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/SLink',

  parameters: {
    jest: 'SLink',
  },
}

export const link = () => ({
  // TODO: document visited/unvisited states.
  props: {
    to: {
      default: text('to', 'https://anunvisitedwebsite.com', 'Required Props'),
    },
    isPlain: { default: boolean('is-plain', false, 'Optional Props') },
    linkText: { default: text('Link text', '', 'Slots') },
  },
  render (h) {
    return (
      <div>
        <SHeading level="1">Links</SHeading>
        <p>
          Links are used for simple navigation. If you find yourself adding <code>href="#"</code>{' '}
          or <code>href=""javascript:void(0)"</code>, you should probably be using a{' '}
          <StoryLink to="Components/Buttons.SButton" story="Button" />.
        </p>
        <p>
          <code>SLink</code> will detect external and internal links automatically. It supports
            use with or without <code>vue-router</code>, and with <code>nuxt</code>. <code>a</code>,{' '}
          <code>router-link</code>, or <code>nuxt-link</code> will be used for the component as
          necessary.
        </p>

        <SHeading level="2">Link examples</SHeading>
        <p>
          Here's an external link to <SLink to="https://spartanbio.com">Spartan Bio</SLink>. Make
          sure there is no whitespace around external links. If there is, it will break the icon
          placement.
        </p>
        <p>
          Here's a link with no slot content provided: <SLink to="https://spartanbio.com/" />
        </p>
        <p>
          Here's an{' '}
          <SLink to="/some-internal-page" on-click={e => e.preventDefault()}>
            internal link.
          </SLink>{' '}
          It's called with <code>preventDefault()</code>, so you won't leave the documentation.
        </p>

        <SHeading level="2">Dynamic Example</SHeading>
        <p>
          Storybook's knobs have been bound to the link below. It's called with{' '}
          <code>preventDefault()</code>.
        </p>
        <SLink props={{ isPlain: this.isPlain, to: this.to }} onclick={e => e.preventDefault()}>
          {this.linkText}
        </SLink>

        <PropList component={SLink} />
      </div>
    )
  },
})

link.story = {
  name: 'Link',
}

export const linkTypes = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Link Types</SHeading>

        <SHeading level="2">Base</SHeading>
        <SLink to="anunvisitedwebsite.com" onClick={e => e.preventDefault()} />

        <SHeading level="2">External</SHeading>
        <SLink to="https://anunvisitedwebsite.com" onClick={e => e.preventDefault()} />

        <SHeading level="2">Custom text</SHeading>
        <SLink to="https://anunvisitedwebsite.com" onClick={e => e.preventDefault()}>
          Some text
        </SLink>

        <SHeading level="2">Visited</SHeading>
        <SLink to="https://spartanbio.com">If you haven't spartanbio.com already, click here</SLink>
      </div>
    )
  },
})

linkTypes.story = {
  name: 'Link Types',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
