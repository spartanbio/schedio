import { colors, sizes } from '@/components/SIcon/options'
import { SHeading } from '@/components/SHeading'
import { SIcon } from '@/components/SIcon'
import PropList from '@@/docs/components/PropList'
import { select } from '@storybook/addon-knobs'
import icons from 'feather-icons/dist/icons.json'

const colorOptions = ['', ...colors]
const sizeOptions = ['', ...sizes]
const iconList = Object.keys(icons)

export default {
  title: 'Components/SIcon',

  parameters: {
    jest: 'SIcon',
  },
}

export const icon = () => ({
  props: {
    props: {
      default: () => ({
        icon: select('icon', iconList, iconList[0], 'Required Props'),
        color: select('color', colorOptions, '', 'Optional Props'),
        size: select('size', sizeOptions, '', 'Optional Props'),
      }),
    },
  },
  render (h) {
    const { props } = this.$props
    return (
      <div>
        <SHeading level="1">Icon</SHeading>
        <p>
          The icon component uses{' '}
          <a href="https://feathericons.com/" class="link link--external">
            feather-icons
          </a>{' '}
          to provide icons.
        </p>

        <SHeading level="2">Example</SHeading>
        <div style="align-items: center; display: flex; padding: 0.5em 0;">
          <SIcon {...{ props }} />
          <div style="padding-left: 0.5em;">
            <div>
              Icon name: <code>{props.icon}</code>
            </div>
            {props.color && (
              <div>
                Icon color: <code>{props.color}</code>
              </div>
            )}
            {props.size && (
              <div>
                Icon size: <code>{props.size}</code>
              </div>
            )}
          </div>
        </div>

        {SIcon.props && <PropList component={SIcon} />}
      </div>
    )
  },
})

icon.story = {
  name: 'Icon',
}

export const allIcons = () => ({
  render (h) {
    return (
      <div>
        <SHeading>All icons</SHeading>
        <p>Icons are available in all of Schédio's base colors</p>

        <div style="display: flex; flex-wrap: wrap;">
          {iconList.map((icon) => {
            return (
              <div style="align-items: center; display: flex; flex-direction: column; padding: 1em; width: 25%">
                <SIcon icon={icon} />
                {icon}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
})

allIcons.story = {
  name: 'All icons',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
