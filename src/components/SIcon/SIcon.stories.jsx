import { colors, sizes } from '@/components/SIcon/options'
import { SHeading } from '@/components/SHeading'
import { SIcon } from '@/components/SIcon'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import icons from 'feather-icons/dist/icons.json'

const colorOptions = ['', ...colors]
const sizeOptions = ['', ...sizes]

storiesOf('Components/SIcon', module)
  .addDecorator(withKnobs)
  .add('SIcon', () => {
    const iconList = Object.keys(icons)

    const props = {
      icon: select('icon', iconList, iconList[0], 'Required Props'),
      iconColor: select('icon-color', colorOptions, '', 'Optional Props'),
      iconSize: select('icon-size', sizeOptions, '', 'Optional Props')
    }

    return {
      render: h => (
        <StoryContainer>
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
              {props.iconColor && (
                <div>
                  Icon color: <code>{props.iconColor}</code>
                </div>
              )}
              {props.iconSize && (
                <div>
                  Icon size: <code>{props.iconSize}</code>
                </div>
              )}
            </div>
          </div>

          {SIcon.props && <PropList component={SIcon} />}

          <SHeading level="2">All icons</SHeading>
          <div style="display: flex; flex-wrap: wrap;">
            {iconList.map(icon => {
              return (
                <div style="align-items: center; display: flex; flex-direction: column; padding: 1em; width: 25%">
                  <SIcon icon={icon} />
                  {icon}
                </div>
              )
            })}
          </div>
        </StoryContainer>
      )
    }
  })
