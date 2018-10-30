// Global registration doesn't work with `jsx` templates
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, radios, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const headingLevels = { '1': 1, '2': 2, '3': 3 }

storiesOf('Components/SHeading', module)
  .addDecorator(withKnobs)
  .add('Heading', function Heading() {
    // register required before optional
    const level = select('level', headingLevels, '1', 'Required')
    const options = radios(
      'Pick one',
      ['Default', 'is-uppercase', 'is-subtle'],
      'Default',
      'Optional'
    )
    const slotContent = text('Default', '{{ Slot content }}', 'Slots')

    const props = {
      level,
      isUppercase: options === 'is-uppercase',
      isSubtle: options === 'is-subtle',
      isDisplay: boolean('is-display', false, 'Optional'),
      tag: select('tag', { Unset: '', div: 'div', span: 'span' }, '', 'Optional')
    }

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Heading</SHeading>
          <p>
            <code>SHeading</code> defaults to using <code>h1-h6</code> tags, but can be overriden to
            be a <code>{'<div>'}</code> or <code>{'<span>'}</code> instead using the{' '}
            <code>tag</code> prop.
          </p>

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
  })
  .add('Usage: Headings', function UsageHeadings() {
    const level = select('level', headingLevels, '1', 'Required')
    const slotContent = text('Default', '{{ Slot content }}', 'Slots')
    const isSubtle = boolean('is-subtle', false, 'Optional')

    const props = {
      level,
      isSubtle
    }

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Usage: Heading</SHeading>
          <p>Headings help identify key sections and information within a document.</p>

          <SHeading level="2">Example</SHeading>
          <div>
            <SHeading {...{ props }}>
              <p>Heading Level {level}</p>
              <p>{slotContent}</p>
            </SHeading>
          </div>

          <PropList component={SHeading} />
        </StoryContainer>
      )
    }
  })
  .add('Usage: Display', function UsageDisplay() {
    const level = select('level', { '1': 1, '2': 2 }, '1', 'Required')
    const isDisplay = boolean('is-display', true, 'Required')
    const slotContent = text('Default', '{{ Slot content }}', 'Slots')
    const options = radios(
      'Pick one',
      ['Default', 'is-uppercase', 'is-subtle'],
      'Default',
      'Optional'
    )

    const props = {
      level,
      isDisplay,
      isUppercase: options === 'is-uppercase',
      isSubtle: options === 'is-subtle'
    }

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Usage: Display</SHeading>
          <p>
            Headings are key to structure, and displays are decorative. Displays should be used
            sparingly, typically once per document.
          </p>

          <SHeading level="2">Example</SHeading>
          <div>
            <SHeading {...{ props }}>
              <p>Display Level {level}</p>
              <p>{slotContent}</p>
            </SHeading>
          </div>

          <PropList component={SHeading} />
        </StoryContainer>
      )
    }
  })
