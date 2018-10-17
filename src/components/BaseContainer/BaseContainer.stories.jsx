import BaseContainer from '@/components/BaseContainer'
import BaseContainerColumn from '@/components/BaseContainer/BaseContainerColumn.vue'
import BaseContainerRow from '@/components/BaseContainer/BaseContainerRow.vue'
import BaseHeading from '@/components/BaseHeading'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import kebabCase from 'lodash.kebabcase'
import orderBy from 'lodash.orderby'
import mobileBreakpoints from './mobile-breakpoints'
import rowOptions from './row-options'

storiesOf('Base Components/BaseContainer', module)
  .addDecorator(withKnobs)
  .add('BaseContainer', function BaseContainer() {
    const props = {
      isFullwidth: boolean('isFullwidth', false)
    }

    const containerPropNames = orderBy(Object.keys(BaseContainer.props))

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Container</BaseHeading>
          <p>
            The container defaults to being narrower than the window, but it can be set to
            fullwidth. It has been styled for visibility, and is normally invisible.
          </p>
          <p>
            It has padding that is hidden when used with a <code>BaseContainerRow</code>.
          </p>

          <BaseHeading level="2">Example</BaseHeading>

          <BaseContainer {...{ props }} style="border: 1px solid black;">
            <BaseContainerRow>
              <BaseContainerColumn>Container content</BaseContainerColumn>
            </BaseContainerRow>
          </BaseContainer>

          <BaseHeading level="2">Prop list</BaseHeading>
          <ul>
            {containerPropNames.map(name => (
              <li>{kebabCase(name)}</li>
            ))}
          </ul>
        </StoryContainer>
      )
    }
  })
  .add('BaseContainerRow', function BaseContainerRow() {
    // get sorted row props from component
    const rowPropNames = orderBy(Object.keys(BaseContainerRow.props))

    // flexbox align items
    const alignProps = rowPropNames.reduce((p, name) => {
      return /^(align)/.test(name)
        ? { ...p, [name]: select(name, rowOptions, rowOptions[0], 'Alignment') }
        : p
    }, {})

    // flexbox justify content
    const justifyProps = rowPropNames.reduce((props, name) => {
      return /^(justify)/.test(name)
        ? { ...props, [name]: select(name, rowOptions, rowOptions[0], 'Justification') }
        : props
    }, {})

    const props = {
      ...alignProps,
      ...justifyProps,
      // `flex-direction: ${isReversed ? 'row' : 'row-reverse'}`
      isReversed: boolean('isReversed', false, 'Other')
    }

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Rows</BaseHeading>
          <p>
            The container hides the padding from its parent container, and provides a flexbox
            container for <code>BaseContainerColumn</code>. It has been styled for visibility, and
            is normally invisible.
          </p>
          <p>
            Vertical alignment of row children can be set with the <code>align</code> props, and
            horizontal justification can be set with the <code>justify</code> props. They can also
            be reversed by adding the <code>is-reversed</code> prop.
          </p>

          <BaseHeading level="2">Example</BaseHeading>

          <BaseContainer style="border: 1px solid black;">
            The container
            <BaseContainerRow {...{ props }} style="background-color: silver;">
              <BaseContainerColumn>Some content</BaseContainerColumn>
              <BaseContainerColumn>Some more content</BaseContainerColumn>
            </BaseContainerRow>
          </BaseContainer>

          <BaseHeading level="2">Prop list</BaseHeading>
          <ul>
            {rowPropNames.map(name => (
              <li>{kebabCase(name)}</li>
            ))}
          </ul>
        </StoryContainer>
      )
    }
  })
  .add('BaseContainerColumn', function BaseContainerColumn() {
    // get sorted column props from component
    const columnPropNames = orderBy(Object.keys(BaseContainerColumn.props))

    // Array of sizes => ['', 1, ..., 12]
    const colSizes = ['', ...Array.from({ length: 12 }, (val, idx) => String(idx + 1))]

    // convert props to storybook knobs
    const sizeProps = columnPropNames
      .filter(propName => mobileBreakpoints.includes(propName))
      .reduce((p, n) => ({ ...p, [n]: select(n, colSizes, '', 'Sizes') }), {})

    const offsetProps = columnPropNames
      .filter(propName => /^offset/.test(propName))
      .reduce((p, n) => ({ ...p, [n]: select(n, colSizes, '', 'Offsets') }), {})

    const orderProps = columnPropNames
      .filter(propName => /^order/.test(propName))
      .reduce((p, n) => ({ ...p, [n]: select(n, [...colSizes, 'first', 'last'], '', 'Order') }), {})

    const narrowBreakpoints = columnPropNames
      .filter(propName => /^narrow/.test(propName))
      .reduce((p, n) => ({ ...p, [n]: boolean(n, false, 'Narrow') }), {})

    const props = {
      size: number('Generic size', 0, { range: true, min: 0, max: 12, step: 1 }, 'Sizes'),
      ...sizeProps,
      ...offsetProps,
      ...orderProps,
      ...narrowBreakpoints
    }

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Columns</BaseHeading>
          <p>
            A single <code>BaseContainerColumn</code> width defaults to 100% of the row. If you have
            multiple columns, they will be equally sized. If you add the <code>narrow</code> prop,
            the column will automatically size to the content. They usually have no border, but have
            been styled for visibility.
          </p>

          <BaseHeading level="2">Fractional Columns</BaseHeading>
          <p>
            Columns can be set to a fraction of a 12-column grid with the <code>size</code> prop. By
            default, a column will wrap to the next line if the viewport is too narrow. For example:{' '}
            <code>{'<BaseContainerColumn size="3" />'}</code> will create a column that spans 3/12
            columns.
          </p>
          <p>
            When <code>size</code> is set, the column will be that size <em>regardless</em> of the
            viewport. This can cause content to overflow the column if it is too narrow. To avoid
            this, responsive breakpoints can be used.
          </p>

          <BaseHeading level="2">Column Offsets</BaseHeading>
          <p>
            A <code>{'<BaseContainerColumn />'}</code> can be offset a specified number of grid
            columns using the <code>offset</code> prop.
          </p>
          <p>
            <code>{'<BaseContainerColumn offset="2" />'}</code>
          </p>

          <BaseHeading level="2">Column Order</BaseHeading>
          <p>
            Columns can be re-ordered using the <code>order</code> prop. It accepts a number from
            1-12, as well as <code>first</code> and <code>last</code>.
          </p>
          <p>
            <code>{'<BaseContainerColumn order="8" />'}</code> will appear as the 8th column.
          </p>
          <p>
            <code>{'<BaseContainerColumn order="last" />'}</code> will always appear last.
          </p>

          <BaseHeading level="2">Responsive Breakpoints</BaseHeading>
          <p>
            Four breakpoints (<code>{mobileBreakpoints.join(', ')}</code>) have been defined, and
            can be used as props. They accept a <code>Boolean</code> to prevent wrapping or a
            <code>Number</code> to be a fraction, at that viewport and above.
          </p>
          <p>
            <code>{'<BaseContainerColumn md />'}</code> will not wrap except for on very narrow
            viewports.
          </p>
          <p>
            <code>{'<BaseContainerColumn sm="4" lg="6" />'}</code> will be four columns wide on
            small and medium viewports, and four columns wide on very wide viewports.
          </p>
          <p>
            Additionally, just about every column prop can be set for each breakpoint (
            {/* prettier-ignore */}
            <code>${'{prop}'}-${'{breakpoint}'}="${'value'}"</code>)
          </p>

          <BaseHeading level="3">Responsive Breakpoints and Narrow Columns</BaseHeading>
          <p>
            Narrow columns have some different responsive options. They can be set to be narrow
            until, or after certain breakpoints
          </p>
          <p>
            <code>{'<BaseContainerColumn narrow-until-md narrow-after-lg />'}</code> will be narrow
            until, <em>but not including</em> the medium breakpoint. It will also be narrow after,
            <em>and including</em> the large breakpoint.
          </p>

          {/* Demo columns */}
          <BaseHeading level="2">Example</BaseHeading>
          <p>The first column's props can be set using the knobs.</p>

          <BaseContainer style="border: 1px solid black;">
            The container
            <BaseContainerRow>
              <BaseContainerColumn {...{ props }} style="border: 2px solid red">
                Column 1 content
              </BaseContainerColumn>
              <BaseContainerColumn style="border: 2px solid red">
                Column 2 content
              </BaseContainerColumn>
            </BaseContainerRow>
          </BaseContainer>

          <BaseHeading level="2">Prop list</BaseHeading>
          <ul>
            {columnPropNames.map(name => (
              <li>{kebabCase(name)}</li>
            ))}
          </ul>
        </StoryContainer>
      )
    }
  })
