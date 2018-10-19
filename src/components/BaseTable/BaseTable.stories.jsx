import BaseHeading from '@/components/BaseHeading'
import BaseTable from '@/components/BaseTable'
import BaseTableCell from '@/components/BaseTable/BaseTableCell.vue'
import BaseTableRow from '@/components/BaseTable/BaseTableRow.vue'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseTable', module)
  .addDecorator(withKnobs)
  .add('BaseTable', function BaseTableDocs() {
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
    const headerCells = makeDummySlotData('header (cells)')
    const bodyRows = makeDummySlotData('default (rows)')
    const footerRows = makeDummySlotData('footer (rows)', 1)
    const exampleCaption = text('caption', 'This is a caption', 'Optional Props')
    const defaultTableData = [
      { col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
      { col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' }
    ]
    const propExampleProps = {
      ...slotExampleProps,
      caption: exampleCaption,
      tableData: object('tableData', defaultTableData, 'Optional Props')
    }

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Table</BaseHeading>
          <p>Tables organize display data. They allow data to be viewed in detail.</p>

          <BaseHeading level="2">Examples</BaseHeading>
          <p>
            Tables can be implemented either with slots, or by passing an <code>{'<Array>'}</code>{' '}
            or <code>{'<Object>'}</code> to the <code>tableData</code> prop.
          </p>

          {/* Prop example */}
          <BaseHeading level="3">Using props</BaseHeading>
          <p>
            When the <code>tableData</code> prop is provided, <code>{'<BaseTable />'}</code> will
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
          <BaseTable {...{ props: propExampleProps }} />

          {/* Slot example */}
          <BaseHeading level="3">Using slots</BaseHeading>
          <p>
            When using slots, it is up to you to manually provide and configure{' '}
            <code>{'<BaseTableRow />'}</code> and <code>{'<BaseTableCell />'}</code>.
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

          <BaseTable {...{ props: slotExampleProps }}>
            <template slot="caption">{exampleCaption}</template>

            <BaseTableRow slot="header">
              {Array.from({ length: headerCells }, (cell, idx) => (
                <BaseTableCell key={`header-cell-${idx}`}>Cell {idx + 1}</BaseTableCell>
              ))}
            </BaseTableRow>

            {Array.from({ length: bodyRows }, (cell, idx) => (
              <BaseTableRow key={`row-${idx}`}>
                {Array.from({ length: headerCells }, (cell, idx) => (
                  <BaseTableCell key={`cell-${idx}`}>Cell {idx + 1}</BaseTableCell>
                ))}
              </BaseTableRow>
            ))}

            <template slot="footer">
              {Array.from({ length: footerRows }, (cell, idx) => (
                <BaseTableRow key={`footer-row-${idx}`}>
                  {Array.from({ length: headerCells }, (cell, idx) => (
                    <BaseTableCell key={`footer-cell-${idx}`}>Cell {idx + 1}</BaseTableCell>
                  ))}
                </BaseTableRow>
              ))}
            </template>
          </BaseTable>

          <PropList component={BaseTable} />
        </StoryContainer>
      )
    }
  })
  .add('BaseTableRow', function BaseTableRowDocs() {
    const slotContent = text('default', 'Slot content', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Table Row</BaseHeading>
          <p>
            Table rows are containers for <code>{'<BaseTableCell />'}</code>. They do not have any
            props, but have a single default slot. <code>{'<BaseTableCell />'}</code> is the only
            content that should go in this slot.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseTable>
            <BaseTableRow slot="header">
              <BaseTableCell>Header</BaseTableCell>
            </BaseTableRow>
            <BaseTableRow>{slotContent}</BaseTableRow>
          </BaseTable>

          {BaseTableRow.props && <PropList component={BaseTableRow} />}
        </StoryContainer>
      )
    }
  })
  .add('BaseTableCell', function BaseTableCellDocs() {
    const isNumeric = boolean('isNumeric', true, 'Optional Props')
    const isHeader = boolean('isHeader', false, 'Optional Props')
    const headerCellSlotContent = text('default', 'Header cell slot', 'Slots')
    const numericCellSlotContent = number('default', 1200, 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Table Cell</BaseHeading>
          <p>
            Table cells contain the actual data values for the table. They should always be enclosed
            in <code>{'<BaseTableRow />'}</code>.
          </p>
          <p>
            Cells placed within a <code>{'<thead />'}</code> will automatically use the{' '}
            <code>{'th'}</code> tag instead of <code>{'td'}</code>.
          </p>
          <p>
            If <code>isNumeric</code> is <code>true</code>, the cell will try to convert to its
            localized version with <code>Number.toLocaleString()</code>
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseTable>
            <BaseTableRow slot="header">
              <BaseTableCell>
                Toggling <code style="text-transform: none;">isHeader</code> will change this one
              </BaseTableCell>
              <BaseTableCell>
                Toggling <code style="text-transform: none;">isNumeric</code> will change this one
              </BaseTableCell>
            </BaseTableRow>
            <BaseTableRow>
              <BaseTableCell is-header={isHeader}>{headerCellSlotContent}</BaseTableCell>
              <BaseTableCell is-numeric={isNumeric}>{numericCellSlotContent}</BaseTableCell>
            </BaseTableRow>
          </BaseTable>

          <PropList component={BaseTableCell} />
        </StoryContainer>
      )
    }
  })
