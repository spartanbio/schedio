import { SChip } from '@/components/SChip'
import { SChipGroup } from '@/components/SChipGroup'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { select } from '@storybook/addon-knobs'
import { colors } from '../SChip/options'

export default {
  title: 'Components|Chips/SChipGroup',
  component: SChipGroup,
  parameters: {
    jest: 'SChipGroup',
  },
}

export const ChipGroup = () => ({
  props: {
    props: {
      default: {
        color: select('color', ['', ...colors], '', 'Optional Props'),
      },
    },
  },
  render (h) {
    const { props } = this.$props

    return (
      <div>
        <SHeading>Chip Group</SHeading>
        <p>
          Chip groups display chips nicely. The chip group's color overrides an individual chip's
          color.
        </p>

        <SHeading level="2">Example</SHeading>
        <SChipGroup {...{ props }}>
          <SChip>Chip 1</SChip>
          <SChip>Chip 2</SChip>
          <SChip>Chip 3</SChip>
        </SChipGroup>

        {/* This doesn't work if props are only generated through a mixin */}
        {SChipGroup.props && <PropList component={SChipGroup} />}
      </div>
    )
  },
})

ChipGroup.story = {
  name: 'ChipGroup',
}
