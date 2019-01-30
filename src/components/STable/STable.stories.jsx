import { SHeading } from '@/components/SHeading'
import { STable } from '@/components/STable'
import { STableCell } from '@/components/STableCell'
import { STableRow } from '@/components/STableRow'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/STable', module)
  .addDecorator(withKnobs)
  .add('STable', function STableDocs() {
    const makeOptionalBoolean = (prop, val = false) => boolean(prop, val, 'Optional Props')
    const makeDummySlotData = (prop, n = 3) => number(prop, n, { range: true }, 'Slots')
    const slotExampleProps = {
      hasCaptionTop: makeOptionalBoolean('hasCaptionTop'),
      headerInFooter: makeOptionalBoolean('headerInFooter'),
      hideHeader: makeOptionalBoolean('hideHeader'),
      isBordered: makeOptionalBoolean('isBordered'),
      isHoverable: makeOptionalBoolean('isHoverable'),
      isStriped: makeOptionalBoolean('isStriped')
    }
    const tableData = [
      { col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
      { col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' }
    ]
    const propExampleProps = {
      ...slotExampleProps,
      caption: text('caption', 'This is a caption', 'Optional Props'),
      tableData: object('tableData', tableData, 'Optional Props')
    }

    return {
      props: {
        props: {
          default: {
            slotExampleProps,
            propExampleProps
          }
        },
        headerCells: { default: makeDummySlotData('header (cells)') },
        bodyRows: { default: makeDummySlotData('default (rows)') },
        footerRows: { default: makeDummySlotData('footer (rows)', 1) }
      },
      render(h) {
        const { props, headerCells, bodyRows, footerRows } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Table</SHeading>
            <p>Tables organize display data. They allow data to be viewed in detail.</p>

            <SHeading level="2">Examples</SHeading>
            <p>
              Tables can be implemented either with slots, or by passing an <code>{'<Array>'}</code>{' '}
              or <code>{'<Object>'}</code> to the <code>tableData</code> prop.
            </p>

            <SHeading level="3">Using props</SHeading>
            <p>
              When the <code>tableData</code> prop is provided, <code>{'<STable />'}</code> will
              automatically generate its content. If the items in <code>tableData</code> are not{' '}
              <code>{'<Array>'}</code>, the table's headers will be generated from those keys and
              automatically transformed to start case (e.g.: someHeader => 'Some Header'). You can
              hide the header with the <code>hideHeader</code> prop.
            </p>
            <p>You provide the following props to set manually their correspnding elements:</p>
            <ul>
              <li>
                <code>header</code>
              </li>
              <li>
                <code>footer</code>
              </li>
              <li>
                <code>caption</code>
              </li>
            </ul>
            <p>
              The header can be duplicated in the footer by setting <code>headerInFooter</code> to{' '}
              <code>true</code>. Note that <code>footer</code> will override this.
            </p>
            <p>
              In the table body, values of type <code>{'<Number>'}</code> will have{' '}
              <code>is-numeric</code> applied to their cell automatically.
            </p>
            <STable {...{ props: props.propExampleProps }} />

            <SHeading level="3">Using slots</SHeading>
            <p>
              When using slots, it is up to you to manually provide and configure{' '}
              <code>{'<STableRow />'}</code> and <code>{'<STableCell />'}</code>.
            </p>
            <p>Four slots are provided:</p>
            <ul>
              <li>
                <code>caption</code> &mdash; this will place content in <code>{'<caption />'}</code>
              </li>
              <li>
                <code>header</code> &mdash; this will place content in <code>{'<thead />'}</code>
              </li>
              <li>
                <code>default</code> &mdash; this will place content in <code>{'<tbody />'}</code>
              </li>
              <li>
                <code>footer</code> &mdash; this will place content in <code>{'<tfoot />'}</code>
              </li>
            </ul>

            <STable {...{ props: props.slotExampleProps }}>
              <template slot="caption">{props.propExampleProps.caption}</template>

              <STableRow slot="header">
                {Array.from({ length: headerCells }, (cell, idx) => (
                  <STableCell key={`header-cell-${idx}`}>Cell {idx + 1}</STableCell>
                ))}
              </STableRow>

              {Array.from({ length: bodyRows }, (cell, idx) => (
                <STableRow key={`row-${idx}`}>
                  {Array.from({ length: headerCells }, (cell, idx) => (
                    <STableCell key={`cell-${idx}`}>Cell {idx + 1}</STableCell>
                  ))}
                </STableRow>
              ))}

              <template slot="footer">
                {Array.from({ length: footerRows }, (cell, idx) => (
                  <STableRow key={`footer-row-${idx}`}>
                    {Array.from({ length: headerCells }, (cell, idx) => (
                      <STableCell key={`footer-cell-${idx}`}>Cell {idx + 1}</STableCell>
                    ))}
                  </STableRow>
                ))}
              </template>
            </STable>

            <PropList component={STable} />
          </StoryContainer>
        )
      }
    }
  })
  .add('STableRow', function STableRowDocs() {
    return {
      props: {
        slotContent: {
          default: text('default', 'Slot content', 'Slots')
        }
      },
      render(h) {
        return (
          <StoryContainer>
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
          </StoryContainer>
        )
      }
    }
  })
  .add('STableCell', function STableCellDocs() {
    return {
      props: {
        isNumeric: { default: boolean('isNumeric', true, 'Optional Props') },
        isHeader: { default: boolean('isHeader', false, 'Optional Props') },
        headerCellSlotContent: { default: text('default', 'Header cell slot', 'Slots') },
        numericCellSlotContent: { default: number('default', 1200, 'Slots') }
      },
      render(h) {
        return (
          <StoryContainer>
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
          </StoryContainer>
        )
      }
    }
  })
