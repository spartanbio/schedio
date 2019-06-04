import { SContainer } from '@/components/SContainer'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import rowOptions from '@/components/SContainerRow/row-options'
import { SHeading } from '@/components/SHeading'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import orderBy from 'lodash.orderby'
import PropList from '@/docs/PropList'
import kebabCase from 'lodash.kebabcase'

storiesOf('Components/Layout.SContainer', module)
  .addParameters({ jest: 'SContainerRow' })
  .add('Container Row', function SContainerRowDocs() {
    // get sorted row props from component
    const rowPropNames = orderBy(Object.keys(SContainerRow.props))

    // flexbox align items
    const alignProps = rowPropNames.reduce((p, name) => {
      return /^(align)/.test(name)
        ? { ...p, [name]: select(kebabCase(name), rowOptions, '', 'Alignment') }
        : p
    }, {})

    // flexbox justify content
    const justifyProps = rowPropNames.reduce((props, name) => {
      return /^(justify)/.test(name)
        ? { ...props, [name]: select(kebabCase(name), rowOptions, '', 'Justification') }
        : props
    }, {})

    return {
      props: {
        props: {
          default: () => ({
            ...alignProps,
            ...justifyProps,
            isReversed: boolean('is-reversed', false, 'Other')
          })
        }
      },
      render(h) {
        const { props } = this.$props

        return (
          <div>
            <SHeading level="1">Rows</SHeading>
            <p>
              The container hides the padding from its parent container, and provides a flexbox
              container for <code>SContainerColumn</code>. It has been styled for visibility, and is
              normally invisible.
            </p>
            <p>
              Vertical alignment of row children can be set with the <code>align</code> props, and
              horizontal justification can be set with the <code>justify</code> props. They can also
              be reversed by adding the <code>is-reversed</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>

            <SContainer style="border: 1px solid black;">
              The container
              <SContainerRow {...{ props }} style="background-color: silver;">
                <SContainerColumn>Some content</SContainerColumn>
                <SContainerColumn>Some more content</SContainerColumn>
              </SContainerRow>
            </SContainer>

            <PropList component={SContainerRow} />
          </div>
        )
      }
    }
  })
