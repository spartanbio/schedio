import { SHeading } from '@/components/SHeading'
import { STable } from '@/components/STable'
import { STableCell } from '@/components/STableCell'
import { STableRow } from '@/components/STableRow'
import PropList from '@@/docs/components/PropList'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Components|Tables/STableRow',

  parameters: {
    jest: 'STableRow',
  },
}

export const tableRow = () => ({
  props: {
    slotContent: {
      default: text('default', 'Slot content', 'Slots'),
    },
  },
  render (h) {
    return (
      <div>
        <SHeading level="1">Table Row</SHeading>
        <p>
          Table rows are containers for <code>{'<STableCell />'}</code>. They do not have any
            props, but have a single default slot. <code>{'<STableCell />'}</code> is the only
          content that should go in this slot.
        </p>

        <SHeading level="2">Example</SHeading>
        <STable>
          <STableRow slot="header">
            <STableCell>Header</STableCell>
          </STableRow>

          <STableRow>{this.slotContent}</STableRow>
        </STable>

        {STableRow.props && <PropList component={STableRow} />}
      </div>
    )
  },
})

tableRow.story = {
  name: 'Table Row',
}
