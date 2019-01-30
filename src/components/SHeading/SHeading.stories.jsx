// Global registration doesn't work with `jsx` templates
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, radios, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const headingLevels = ['1', '2', '3', '4']
const displayLevels = ['1', '2']
const options = radios(
  'Pick one',
  ['Default', 'has-no-case', 'is-subtle'],
  'Default',
  'Optional props'
)
const tagOptions = ['', 'div', 'span', 'a']

storiesOf('Components/SHeading', module)
  .addDecorator(withKnobs)
  .add('Heading', function Heading() {
    return {
      props: {
        props: {
          default: {
            level: select('level', headingLevels, '1', 'Optional props'),
            displayLevel: select('display-level', displayLevels, '1', 'Optional props'),
            hasNoCase: options === 'has-no-case',
            isSubtle: options === 'is-subtle',
            isDisplay: boolean('is-display', false, 'Optional props'),
            isTitle: boolean('is-title', false, 'Optional props'),
            isSubtitle: boolean('is-subtitle', false, 'Optional props'),
            tag: select('tag', tagOptions, '', 'Optional props')
          }
        },
        slotContent: {
          default: text('Default', 'Slot content', 'Slots')
        }
      },
      render(h) {
        const { props } = this.$props

        return (
          <StoryContainer>
            <SHeading>Heading</SHeading>
            <p>
              <code>SHeading</code> defaults to using <code>h1-h6</code> tags, but can be overriden
              to be a <code>{'<div>'}</code> or <code>{'<span>'}</code> instead using the{' '}
              <code>tag</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>
            <div>
              <SHeading {...{ props }}>
                Level {props.level}: {this.slotContent}
              </SHeading>
            </div>

            <PropList component={SHeading} />
          </StoryContainer>
        )
      }
    }
  })
  .add('Usage: Headings', function UsageHeadings() {
    return {
      props: {
        props: {
          default: {
            level: select('level', headingLevels, '1', 'Optional props'),
            hasNoCase: options === 'has-no-case',
            isSubtle: options === 'is-subtle',
            isTitle: boolean('is-title', false, 'Optional props'),
            isSubtitle: boolean('is-subtitle', false, 'Optional props')
          }
        },
        slotContent: {
          default: text('Default', 'Slot content', 'Slots')
        }
      },
      render(h) {
        const { slotContent, props } = this.$props

        return (
          <StoryContainer>
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
          </StoryContainer>
        )
      }
    }
  })
  .add('Usage: Display', function UsageDisplay() {
    const options = radios(
      'Pick one',
      ['Default', 'has-no-case', 'is-subtle'],
      'Default',
      'Optional'
    )

    return {
      props: {
        props: {
          default: {
            level: select('level', headingLevels, '1', 'Optional props'),
            displayLevel: select('display-level', displayLevels, '1', 'Optional props'),
            hasNoCase: options === 'has-no-case',
            isSubtle: options === 'is-subtle',
            isDisplay: true,
            isTitle: boolean('is-title', false, 'Optional props'),
            isSubtitle: boolean('is-subtitle', false, 'Optional props'),
            tag: select('tag', tagOptions, '', 'Optional props')
          }
        },
        slotContent: {
          default: text('Default', 'Slot content', 'Slots')
        }
      },
      render(h) {
        const { slotContent, props } = this.$props

        return (
          <StoryContainer>
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
          </StoryContainer>
        )
      }
    }
  })
