import BaseHeading from '@/components/BaseHeading'
import BaseRadio from '@/components/BaseRadio'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import StoryLink from '@/components/_docs/StoryLink'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseRadio', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const name = text('Name', 'radio-group', 'Required props')

    const radios = [
      {
        id: text('Radio 1 ID', 'radio-1', 'Required props'),
        label: text('Radio 1 Label', 'Radio 1', 'Required props'),
        isReversed: boolean('isReversed', false, 'Optional props'),
        isDisabled: boolean('Radio 1 Disabled', false, '$attrs'),
        name,
        value: 'radio 1'
      },
      {
        id: text('Radio 2 ID', 'radio-2', 'Required props'),
        label: text('Radio 2 Label', 'Radio 2', 'Required props'),
        isReversed: boolean('isReversed', false, 'Optional props'),
        isDisabled: boolean('Radio 2 Disabled', false, '$attrs'),
        name,
        value: 'radio 2'
      },
      {
        id: text('Radio 3 ID', 'radio-3', 'Required props'),
        label: text('Radio 3 Label', 'Radio 3', 'Required props'),
        isReversed: boolean('isReversed', false, 'Optional props'),
        isDisabled: boolean('Radio 3 Disabled', false, '$attrs'),
        name,
        value: 'radio 3'
      }
    ]

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Radios</BaseHeading>
          <p>
            Radios provide the ability to make a single choice from a list of options. If the list
            is very long, consider using a <StoryLink to="Base Components/BaseSelect" />.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          {radios.map(radio => (
            <BaseRadio {...{ props: radio }} disabled={radio.isDisabled} value={radio.value} />
          ))}

          <PropList component={BaseRadio} />
        </StoryContainer>
      )
    }
  })
