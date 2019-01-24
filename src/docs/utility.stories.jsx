import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'
import { SHeading } from '@/components/SHeading'
import StoryContainer from '@/docs/StoryContainer'
import { storiesOf } from '@storybook/vue'

const colors = Object.values(props)
  .filter(prop => prop.type === 'color')
  .map(color => color.name)
  .sort()

storiesOf('Utilities/Text').add('Color', () => ({
  render(h) {
    return (
      <StoryContainer>
        <SHeading level="1">Text Utilities</SHeading>
        <p>These are CSS utility classes to enhance text presentation.</p>

        <SHeading level="2">Alignment</SHeading>
        <p>
          You can change text alignment witht the following classes:
          <ul>
            {['center', 'left', 'right', 'justify'].map(alignment => (
              <li>{`text--align-${alignment}`}</li>
            ))}
          </ul>
        </p>

        <SHeading level="2">Size</SHeading>
        <p>
          You can change text size witht the following classes:
          <ul>
            {Array.from({ length: 7 }).map((v, idx) => (
              <li>{`.text--size-${idx + 1}`}</li>
            ))}
          </ul>
        </p>

        <SHeading level="2">Color</SHeading>
        <p>
          The following classes exist to change the color of the text:
          <ul>
            {colors.map(color => (
              <li>{`.text--color-${color}`}</li>
            ))}
          </ul>
        </p>
      </StoryContainer>
    )
  }
}))
