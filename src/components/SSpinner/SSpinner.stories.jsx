import { SSpinner } from '@/components/SSpinner'
import { colors, sizes } from '@/components/SSpinner/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Loading.SSpinner', module)
  .addParameters({ jest: 'SSpinner' })
  .add('SSpinner', () => {
    return {
      props: {
        props: {
          default: () => ({
            size: select('size', ['', ...sizes], '', 'Optional Props'),
            color: select('color', ['', ...colors], '', 'Optional Props')
          })
        }
      },
      render(h) {
        return (
          <div>
            <SHeading level="1">Spinner</SHeading>
            <p>
              Spinners indicate that an action is occuring, but its progress is difficult, or not
              practical to measure.
            </p>

            <SHeading level="2">Example</SHeading>
            <SSpinner {...{ props: this.props }} />

            {SSpinner.props && <PropList component={SSpinner} />}
          </div>
        )
      }
    }
  })
