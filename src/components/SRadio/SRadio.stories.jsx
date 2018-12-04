import { SHeading } from '@/components/SHeading'
import { SRadio } from '@/components/SRadio'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SRadio', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const name = 'radio-group'

    return {
      props: {
        radios: {
          default: Array.from({ length: 3 }, (v, i) => ({
            props: {
              ...withAttrsAsProps({
                identifier: `radio-${i + 1}`,
                id: `radio-${i + 1}`,
                name,
                label: `Base Radio ${i + 1}`
              }),
              isReversed: boolean(`radio-${i + 1} isReversed`, false, 'Optional Props')
            },
            attrs: {
              ...withUnboundAttrs({ identifier: `radio-${i + 1}`, value: `radio-${i + 1}` }),
              'aria-labelledby': 'radio-example'
            }
          }))
        }
      },
      render(h) {
        return (
          <StoryContainer>
            <SHeading level="1">Radios</SHeading>
            <p>
              Radios provide the ability to make a single choice from a list of options. If the list
              is very long, consider using a <StoryLink to="Components/SSelect" />.
            </p>

            <SHeading level="2" id="radio-example">
              Example
            </SHeading>
            {this.radios.map(({ props, attrs }) => (
              <SRadio {...{ props }} {...{ attrs }} />
            ))}

            <PropList component={SRadio} />
          </StoryContainer>
        )
      }
    }
  })
