import { SContainer } from '@/components/SContainer'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import { SHeading } from '@/components/SHeading'
import { boolean, number, select } from '@storybook/addon-knobs'
import orderBy from 'lodash.orderby'
import mobileBreakpoints from '../SContainer/mobile-breakpoints'
import PropList from '@@/docs/components/PropList'

export default {
  title: 'Components/Layout.SContainerColumn',

  parameters: {
    jest: 'SContainerColumn',
  },
}

export const containerColumn = () => {
  // get sorted column props from component
  const columnPropNames = orderBy(Object.keys(SContainerColumn.props))

  // Object of sizes
  const colSizes = ['']
  for (let i = 1; i < 13; i++) colSizes[i] = String(i)

  // convert props to storybook knobs
  const sizeProps = columnPropNames
    .filter(propName => mobileBreakpoints.includes(propName))
    .reduce(
      (props, name) => ({
        ...props,
        [name]: select(name, [false, true, ...colSizes.filter(val => val)], false, 'Sizes'),
      }),
      {},
    )

  const offsetProps = columnPropNames
    .filter(propName => /^offset/.test(propName))
    .reduce((props, name) => ({ ...props, [name]: select(name, colSizes, '', 'Offsets') }), {})

  const orderProps = columnPropNames
    .filter(propName => /^order/.test(propName))
    .reduce(
      (props, name) => ({
        ...props,
        [name]: select(name, { ...colSizes, first: 'first', last: 'last' }, '', 'Order'),
      }),
      {},
    )

  const narrowBreakpoints = columnPropNames
    .filter(propName => /^narrow/.test(propName))
    .reduce((p, n) => ({ ...p, [n]: boolean(n, false, 'Narrow') }), {})

  return {
    props: {
      props: {
        default: () => ({
          size: number('Generic size', 0, { range: true, min: 0, max: 12, step: 1 }, 'Sizes'),
          ...sizeProps,
          ...offsetProps,
          ...orderProps,
          ...narrowBreakpoints,
        }),
      },
    },
    render (h) {
      const { props } = this.$props

      return (
        <div>
          <SHeading level="1">Columns</SHeading>
          <p>
            A single <code>SContainerColumn</code> width defaults to 100% of the row. If you have
            multiple columns, they will be equally sized. If you add the <code>narrow</code> prop,
            the column will automatically size to the content. They usually have no border, but have
            been styled for visibility.
          </p>

          <SHeading level="2">Fractional Columns</SHeading>
          <p>
            Columns can be set to a fraction of a 12-column grid with the <code>size</code> prop. By
            default, a column will wrap to the next line if the viewport is too narrow. For example:{' '}
            <code>{'<SContainerColumn size="3" />'}</code> will create a column that spans 3/12
            columns.
          </p>
          <p>
            When <code>size</code> is set, the column will be that size <em>regardless</em> of the
            viewport. This can cause content to overflow the column if it is too narrow. To avoid
            this, responsive breakpoints can be used.
          </p>

          <SHeading level="2">Column Offsets</SHeading>
          <p>
            A <code>{'<SContainerColumn />'}</code> can be offset a specified number of grid columns
            using the <code>offset</code> prop.
          </p>
          <p>
            <code>{'<SContainerColumn offset="2" />'}</code>
          </p>

          <SHeading level="2">Column Order</SHeading>
          <p>
            Columns can be re-ordered using the <code>order</code> prop. It accepts a number from
            1-12, as well as <code>first</code> and <code>last</code>.
          </p>
          <p>
            <code>{'<SContainerColumn order="8" />'}</code> will appear as the 8th column.
          </p>
          <p>
            <code>{'<SContainerColumn order="last" />'}</code> will always appear last.
          </p>

          <SHeading level="2">Responsive Breakpoints</SHeading>
          <p>
            Four breakpoints (<code>{mobileBreakpoints.join(', ')}</code>) have been defined, and
            can be used as props. They accept a <code>Boolean</code> to prevent wrapping or a
            <code>Number</code> to be a fraction, at that viewport and above.
          </p>
          <p>
            <code>{'<SContainerColumn md />'}</code> will not wrap except for on very narrow
            viewports.
          </p>
          <p>
            <code>{'<SContainerColumn sm="4" lg="6" />'}</code> will be four columns wide on small
            and medium viewports, and four columns wide on very wide viewports.
          </p>
          <p>
            Additionally, just about every column prop can be set for each breakpoint (
            <code>
              {'{$prop}'}-{'{$breakpoint}'}={'value'}"
            </code>
            )
          </p>

          <SHeading level="3">Responsive Breakpoints and Narrow Columns</SHeading>
          <p>
            Narrow columns have some different responsive options. They can be set to be narrow
            until, or after certain breakpoints
          </p>
          <p>
            <code>{'<SContainerColumn narrow-until-md narrow-after-lg />'}</code> will be narrow
            until, <em>but not including</em> the medium breakpoint. It will also be narrow after,
            <em>and including</em> the large breakpoint.
          </p>

          <SHeading level="2">Example</SHeading>
          <p>The first column's props can be set using the knobs.</p>

          <SContainer style="border: 1px solid black;">
            The container
            <SContainerRow>
              <SContainerColumn {...{ props }} style="border: 2px solid red">
                Column 1 content
              </SContainerColumn>

              <SContainerColumn style="border: 2px solid red">Column 2 content</SContainerColumn>
            </SContainerRow>
          </SContainer>

          <PropList component={SContainerColumn} />
        </div>
      )
    },
  }
}

containerColumn.story = {
  name: 'Container Column',
}
