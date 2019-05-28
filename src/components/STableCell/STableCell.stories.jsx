import { SHeading } from '@/components/SHeading'
import { STable } from '@/components/STable'
import { STableCell } from '@/components/STableCell'
import { STableRow } from '@/components/STableRow'
import PropList from '@/docs/PropList'
import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Tables.STableCell', module)
  .addParameters({ jest: 'STableCell' })
  .add('STableCell', function STableCellDocs() {
    return {
      props: {
        isNumeric: { default: boolean('is-numeric', true, 'Optional Props') },
        isHeader: { default: boolean('is-header', false, 'Optional Props') },
        headerCellSlotContent: { default: text('Header content', 'Header cell slot', 'Slots') },
        numericCellSlotContent: { default: number('Numeric content', 1200, {}, 'Slots') }
      },
      render(h) {
        return (
          <div>
            <SHeading level="1">Table Cell</SHeading>
            <p>
              Table cells contain the actual data values for the table. They should always be
              enclosed in <code>{'<STableRow />'}</code>.
            </p>
            <p>
              Cells placed within a <code>{'<thead />'}</code> will automatically use the{' '}
              <code>{'<th />'}</code> tag instead of <code>{'<td />'}</code>.
            </p>
            <p>
              If <code>isNumeric</code> is <code>true</code>, the cell will try to convert to its
              localized version with <code>Number.toLocaleString()</code>
            </p>

            <SHeading level="2">Example</SHeading>
            <STable>
              <STableRow slot="header">
                <STableCell>
                  Toggling <code style="text-transform: none;">isHeader</code> will change this one
                </STableCell>
                <STableCell>
                  Toggling <code style="text-transform: none;">isNumeric</code> will change this one
                </STableCell>
              </STableRow>

              <STableRow>
                <STableCell is-header={this.isHeader}>{this.headerCellSlotContent}</STableCell>
                <STableCell is-numeric={this.isNumeric}>{this.numericCellSlotContent}</STableCell>
              </STableRow>
            </STable>

            <PropList component={STableCell} />
          </div>
        )
      }
    }
  })
