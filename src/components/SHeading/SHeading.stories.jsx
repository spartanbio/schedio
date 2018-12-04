// Global registration doesn't work with `jsx` templates
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, radios, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const headingLevels = ['1', '2', '3']

storiesOf('Components/SHeading', module)
  .addDecorator(withKnobs)
  .add('Heading', function Heading() {
    const options = radios(
      'Pick one',
      ['Default', 'is-uppercase', 'is-subtle'],
      'Default',
      'Optional'
    )

    return {
      props: {
        props: {
          default: {
            level: select('level', headingLevels, '1', 'Required'),
            isUppercase: options === 'is-uppercase',
            isSubtle: options === 'is-subtle',
            isDisplay: boolean('is-display', false, 'Optional'),
            tag: select('tag', ['', 'div', 'span'], '', 'Optional')
          }
        },
        slotContent: {
          default: text('Default', '{{ Slot content }}', 'Slots')
        }
      },
      render(h) {
        const { props } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Heading</SHeading>
            <p>
              <code>SHeading</code> defaults to using <code>h1-h6</code> tags, but can be overriden
              to be a <code>{'<div>'}</code> or <code>{'<span>'}</code> instead using the{' '}
              <code>tag</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>
            <div>
              <SHeading {...{ props }}>
                <p>Heading Level {props.level}</p>
                <p>{this.slotContent}</p>
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
            level: select('level', headingLevels, '1', 'Required'),
            isSubtle: boolean('is-subtle', false, 'Optional')
          }
        },
        slotContent: {
          default: text('Default', '{{ Slot content }}', 'Slots')
        }
      },
      render(h) {
        const { slotContent, props } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Usage: Heading</SHeading>
            <p>Headings help identify key sections and information within a document.</p>

            <SHeading level="2">Example</SHeading>
            <div>
              <SHeading {...{ props }}>
                <p>Heading Level {props.level}</p>
                <p>{slotContent}</p>
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
      ['Default', 'is-uppercase', 'is-subtle'],
      'Default',
      'Optional'
    )

    return {
      props: {
        props: {
          default: {
            level: select('level', ['1', '2'], '1', 'Required'),
            isDisplay: boolean('is-display', true, 'Required'),
            isUppercase: options === 'is-uppercase',
            isSubtle: options === 'is-subtle'
          }
        },
        slotContent: {
          default: text('Default', '{{ Slot content }}', 'Slots')
        }
      },
      render(h) {
        const { slotContent, props } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Usage: Display</SHeading>
            <p>
              Headings are key to structure, and displays are decorative. Displays should be used
              sparingly, typically once per document.
            </p>

            <SHeading level="2">Example</SHeading>
            <div>
              <SHeading {...{ props }}>
                <p>Display Level {props.level}</p>
                <p>{slotContent}</p>
              </SHeading>
            </div>

            <PropList component={SHeading} />
          </StoryContainer>
        )
      }
    }
  })
