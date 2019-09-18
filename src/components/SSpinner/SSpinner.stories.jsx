import { SSpinner } from '@/components/SSpinner'
import { colors, sizes } from '@/components/SSpinner/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { select } from '@storybook/addon-knobs'
import { generateHeading } from '@/utils/stories/render-functions'

export default {
  title: 'Components/Loading.SSpinner',

  parameters: {
    jest: 'SSpinner',
  },
}

export const spinner = () => ({
  props: {
    props: {
      default: () => ({
        size: select('size', ['', ...sizes], '', 'Optional Props'),
        color: select('color', ['', ...colors], '', 'Optional Props'),
      }),
    },
  },
  render (h) {
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
  },
})

spinner.story = {
  name: 'Spinner',
}

export const spinnerColors = () => ({
  render (h) {
    return h('div', [
      generateHeading(h, { content: 'Spinner Colors' }),
      colors.map(color => [
        generateHeading(h, { level: 2, content: color }),
        h(SSpinner, { props: { color } }),
      ]),
    ])
  },
})

spinnerColors.story = {
  name: 'Spinner Colors',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
