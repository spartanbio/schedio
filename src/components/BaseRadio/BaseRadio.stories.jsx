import BaseHeading from '@/components/BaseHeading'
import BaseRadio from '@/components/BaseRadio'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import StoryLink from '@/components/_docs/StoryLink'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseRadio', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const name = 'radio-group'

    const radios = Array.from({ length: 3 }, (v, i) => ({
      props: {
        ...withAttrsAsProps({
          identifier: `radio-${i + 1}`,
          id: `radio-${i + 1}`,
          name,
          label: `Base Radio ${i + 1}`
        }),
        isReversed: boolean(`radio-${i + 1} isReversed`, false, 'Optional Props')
      },
      attrs: withUnboundAttrs({ identifier: `radio-${i + 1}`, value: `radio-${i + 1}` })
    }))

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Radios</BaseHeading>
          <p>
            Radios provide the ability to make a single choice from a list of options. If the list
            is very long, consider using a <StoryLink to="Base Components/BaseSelect" />.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          {radios.map(({ props, attrs }) => (
            <BaseRadio {...{ props }} {...{ attrs }} />
          ))}

          <PropList component={BaseRadio} />
        </StoryContainer>
      )
    }
  })
