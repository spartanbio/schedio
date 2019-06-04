import { SHeading } from '@/components/SHeading'
import { SLabel } from '@/components/SLabel'
import PropList from '@@/docs/components/PropList'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Inputs.SLabel', module)
  .addParameters({ jest: 'SLabel' })
  .add('Label', () => {
    return {
      props: {
        props: {
          default: () => ({
            label: text('Label text', 'Label text', 'Required Props'),
            isFullwidth: boolean('isFullwidth', false, 'Optional Props'),
            isInline: boolean('isInline', false, 'Optional Props'),
            isReversed: boolean('isReversed', false, 'Optional Props'),
            isRequired: boolean('iRrequired', false, 'Optional Props'),
            hideOptional: boolean('hide-optional', false, 'Optional Props')
          })
        },

        defaultSlot: {
          default: text('Default', 'SomeInputComponent', 'Slots')
        }
      },
      render(h) {
        const { props, defaultSlot } = this.$props
        return (
          <div>
            <SHeading level="1">Label</SHeading>
            <p>
              <code>SLabel</code> provides labels for all form inputs. It is included automatically
              for all input components in this library, and is designed to wrap components.
            </p>
            <p>
              By default, if a label is for an optional field, it will append '- Optional' to the
              label. This text can be hidden with the <code>hide-optional</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>
            <SLabel {...{ props }}>
              <div style="text-transform: none; font-weight: 300;">
                <code>{'<' + defaultSlot + ' />'}</code>
              </div>
            </SLabel>

            <PropList component={SLabel} />
          </div>
        )
      }
    }
  })
