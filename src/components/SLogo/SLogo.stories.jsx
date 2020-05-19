import { SLogo } from '@/components/SLogo'
import { SHeading } from '@/components/SHeading'
import { text, select } from '@storybook/addon-knobs'
import PropList from '@@/docs/components/PropList'
import { colors } from './options'

export default {
  title: 'Components|SLogo',
  component: SLogo,
  parameters: {
    jest: 'SLogo',
  },
}

export const Logo = () => ({
  props: {
    props: {
      default: {
        color: select('color', colors, '', 'Optional Props'),
        maxWidth: text('max-width (accepts CSS units)', '', 'Optional Props'),
      },
    },
  },
  render (h) {
    const { props } = this.$props
    const isWhite = () => props.color === 'white'

    return (
      <div>
        <SHeading>Logo</SHeading>
        <p>Spartan's brand logo.</p>

        <SHeading level="2">Example</SHeading>
        <SLogo
          {...{ props }}
          style={{ backgroundColor: isWhite() ? '#212b36' : 'unset' }}
        />
        {isWhite() && <div><span class="caption">* Background added for contrast</span></div>}

        {/* This doesn't work if props are only generated through a mixin */}
        {SLogo.props && <PropList component={SLogo} />}
      </div>
    )
  },
})

Logo.story = {
  name: 'Logo',
}
