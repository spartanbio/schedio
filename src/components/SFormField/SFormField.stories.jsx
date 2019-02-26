import { SFormField } from '@/components/SFormField'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SFormField', module)
  .addDecorator(withKnobs)
  .add('SFormField', () => {
    return {
      render(h) {
        const submitHandler = e => {
          e.preventDefault()
          alert('You submitted the form')
        }

        return (
          <StoryContainer>
            <SHeading level="1">SFormField</SHeading>
            <p>This is a simple wrapper component to group and space form elements.</p>

            <SHeading level="2">Example</SHeading>
            <form onsubmit={submitHandler}>
              <SFormField>
                <SInput id="input" name="input" label="input" required={false} />
              </SFormField>

              <SFormField>
                <SInput id="input-two" name="input-two" label="input-two" required={false} />
              </SFormField>

              <SFormField>
                {['1', '2', '3'].map(r => (
                  <SRadio
                    name="radios"
                    id={`radio-${r}`}
                    label={`radio-${r}`}
                    required={false}
                    showOptional={false}
                    checked={r === '1'}
                  />
                ))}
              </SFormField>

              <SFormField>
                <SButton button-color="green">Submit</SButton>
              </SFormField>
            </form>

            {SFormField.props && <PropList component={SFormField} />}
          </StoryContainer>
        )
      }
    }
  })
