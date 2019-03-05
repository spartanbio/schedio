import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'
import { SHeading } from '@/components/SHeading'
import { storiesOf } from '@storybook/vue'

storiesOf('Utilities/Typography', module)
  .add('Alignment', () => ({
    render(h) {
      const alignments = ['center', 'left', 'right', 'justify']

      return (
        <div>
          <SHeading>Alignment</SHeading>
          <p>
            You can change text alignment witht the following classes:
            <ul>
              {alignments.map(alignment => (
                <li>
                  <code>{`.text--align-${alignment}`}</code>
                </li>
              ))}
            </ul>
          </p>
        </div>
      )
    }
  }))

  .add('Color', () => ({
    render(h) {
      const colors = Object.values(props)
        .filter(prop => prop.type === 'color')
        .map(color => color.name)
        .sort()

      return (
        <div>
          <SHeading>Color</SHeading>
          <p>
            The following classes exist to change the color of the text:
            <ul>
              {colors.map(color => (
                <li>
                  <code>{`.text--color-${color}`}</code>
                </li>
              ))}
            </ul>
          </p>
        </div>
      )
    }
  }))
  .add('Italic and Weight', () => ({
    render(h) {
      const weights = Object.values(props)
        .filter(prop => prop.name.includes('-weight-'))
        .map(weight => weight.name.split('-').pop())

      return (
        <div>
          <SHeading>Italic and Weight</SHeading>
          <p>
            <code>.text--italic</code> will make text italic and the following classes can change
            its weight:
            <ul>
              {weights.map(weight => (
                <li>
                  <code>{`.text--weight-${weight}`}</code>
                </li>
              ))}
            </ul>
          </p>
        </div>
      )
    }
  }))
  .add('Size', () => ({
    render(h) {
      const sizes = Array.from({ length: 7 })

      return (
        <div>
          <SHeading>Size</SHeading>
          <p>
            You can change text size witht the following classes:
            <ul>
              {sizes.map((v, idx) => (
                <li>
                  <code>{`.text--size-${idx + 1}`}</code>
                </li>
              ))}
            </ul>
          </p>
        </div>
      )
    }
  }))
