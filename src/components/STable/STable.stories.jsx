import { SHeading } from '@/components/SHeading';
import { STable } from '@/components/STable';
import { STableCell } from '@/components/STableCell';
import { STableRow } from '@/components/STableRow';
import PropList from '@@/docs/components/PropList';
import { boolean, number, object, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Tables/STable',

  parameters: {
    jest: 'STable',
  },
};

export const table = () => {
  const makeOptionalBoolean = (prop, val = false) => boolean(prop, val, 'Optional Props');
  const makeDummySlotData = (prop, n = 3) => number(prop, n, { range: true }, 'Slots');
  const slotExampleProps = {
    hasCaptionTop: makeOptionalBoolean('has-caption-top'),
    headerInFooter: makeOptionalBoolean('header-in-footer'),
    hideHeader: makeOptionalBoolean('hide-header'),
    isBordered: makeOptionalBoolean('is-bordered'),
    isHoverable: makeOptionalBoolean('is-hoverable'),
    isStriped: makeOptionalBoolean('is-striped'),
    isFullwidth: makeOptionalBoolean('is-fullwidth'),
  };
  const tableData = [
    { col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
    { col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' },
  ];
  const propExampleProps = {
    ...slotExampleProps,
    caption: text('caption', 'This is a caption', 'Optional Props'),
    tableData: object('table-data', tableData, 'Optional Props'),
  };

  return {
    props: {
      props: {
        default: () => ({
          slotExampleProps,
          propExampleProps,
        }),
      },
      headerCells: { default: makeDummySlotData('header (cells)') },
      bodyRows: { default: makeDummySlotData('default (rows)') },
      footerRows: { default: makeDummySlotData('footer (rows)', 1) },
    },
    render (h) {
      const { props, headerCells, bodyRows, footerRows } = this.$props;

      return (
        <div>
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

          <SHeading level="3">Responsive Tables</SHeading>
          <p>
            Tables are automatically responsive and scroll when they are too wide for their parent.
            An overlay will be added to either side that has hidden content.
          </p>

          <STable>
            <template slot="header">
              <STableRow>
                <STableCell>Narrow</STableCell>
                <STableCell>Very wide</STableCell>
              </STableRow>
            </template>
            <STableRow>
              <STableCell>This is narrow.</STableCell>
              <STableCell style="min-width: 100vw; background-color: whitesmoke;">
                This is very wide.
              </STableCell>
            </STableRow>
          </STable>

          <PropList component={STable} />
        </div>
      );
    },
  };
};

table.story = {
  name: 'Table',
};
