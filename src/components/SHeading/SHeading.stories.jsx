// Global registration doesn't work with `jsx` templates
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { boolean, radios, select, text } from '@storybook/addon-knobs'

const headingLevels = ['1', '2', '3', '4']

const tagOptions = ['', 'div', 'span', 'a']

export default {
  title: 'Components/Layout.SHeading',

  parameters: {
    jest: 'SHeading',
  },
}

export const heading = () => {
  const options = radios(
    'Pick one',
    ['Default', 'has-no-case', 'is-subtle'],
    'Default',
    'Optional Props'
  )

  return {
    props: {
      props: {
        default: () => ({
          level: select('level', headingLevels, '1', 'Optional Props'),
          hasNoCase: options === 'has-no-case',
          isSubtle: options === 'is-subtle',
          isDisplay: boolean('is-display', false, 'Optional Props'),
          isTitle: boolean('is-title', false, 'Optional Props'),
          isSubtitle: boolean('is-subtitle', false, 'Optional Props'),
          tag: select('tag', tagOptions, '', 'Optional Props'),
        }),
      },
      slotContent: {
        default: text('Default', 'Slot content', 'Slots'),
      },
    },
    render (h) {
      const { props } = this.$props

      return (
        <div>
          <SHeading>Heading</SHeading>
          <p>
            <code>SHeading</code> defaults to using <code>h1-h6</code> tags, but can be overriden to
            be a <code>{'<div>'}</code> or <code>{'<span>'}</code> instead using the{' '}
            <code>tag</code> prop.
          </p>

          <SHeading level="2">Example</SHeading>
          <div>
            <SHeading {...{ props }}>
              Level {props.level}: {this.slotContent}
            </SHeading>
          </div>

          <PropList component={SHeading} />
        </div>
      )
    },
  }
}

heading.story = {
  name: 'Heading',
}

export const usageHeadings = () => {
  const options = radios(
    'Pick one',
    ['Default', 'has-no-case', 'is-subtle'],
    'Default',
    'Optional Props'
  )

  return {
    props: {
      props: {
        default: () => ({
          level: select('level', headingLevels, '1', 'Optional Props'),
          hasNoCase: options === 'has-no-case',
          isSubtle: options === 'is-subtle',
          isTitle: boolean('is-title', false, 'Optional Props'),
          isSubtitle: boolean('is-subtitle', false, 'Optional Props'),
        }),
      },
      slotContent: {
        default: text('Default', 'Slot content', 'Slots'),
      },
    },
    render (h) {
      const { slotContent, props } = this.$props

      return (
        <div>
          <SHeading>Usage: Heading</SHeading>
          <p>Headings help identify key sections and information within a document.</p>

          <SHeading level="2">Example</SHeading>
          <div>
            <SHeading {...{ props }}>
              Level {props.level}: {slotContent}
            </SHeading>
          </div>

          <SHeading level="3">Consecutive Headings</SHeading>
          <p>Headings placed next to each other will be spaced 1rem apart.</p>
          <div>
            <SHeading>Title</SHeading>
            <SHeading level="2">Subtitle</SHeading>
          </div>

          <div>
            <SHeading isTitle>Title</SHeading>
            <SHeading isSubtitle level="2">
              Subtitle
            </SHeading>
          </div>

          <PropList component={SHeading} />
        </div>
      )
    },
  }
}

usageHeadings.story = {
  name: 'Usage: Headings',
}

export const usageDisplay = () => {
  const options = radios(
    'Pick one',
    ['Default', 'has-no-case', 'is-subtle'],
    'Default',
    'Optional Props'
  )

  return {
    props: {
      props: {
        default: () => ({
          level: select('level', headingLevels, '1', 'Optional Props'),
          hasNoCase: options === 'has-no-case',
          isSubtle: options === 'is-subtle',
          isDisplay: true,
          isTitle: boolean('is-title', false, 'Optional Props'),
          isSubtitle: boolean('is-subtitle', false, 'Optional Props'),
          tag: select('tag', tagOptions, '', 'Optional Props'),
        }),
      },
      slotContent: {
        default: text('Default', 'Slot content', 'Slots'),
      },
    },
    render (h) {
      const { slotContent, props } = this.$props

      return (
        <div>
          <SHeading>Usage: Display</SHeading>
          <p>
            Headings are key to structure, and displays are decorative. Displays should be used
            sparingly, typically once per document.
          </p>

          <SHeading level="2">Example</SHeading>
          <div>
            <SHeading {...{ props }}>
              Level {props.level}: {slotContent}
            </SHeading>
          </div>

          <PropList component={SHeading} />
        </div>
      )
    },
  }
}

usageDisplay.story = {
  name: 'Usage: Display',
}
