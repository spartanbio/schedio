import { storiesOf } from '@storybook/vue'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { colors } from '@/components/base/BaseButton/options'
import BaseButton from '@/components/base/BaseButton'
import ButtonGroup from '@/components/ButtonGroup'

const colorOptions = ['', ...colors]

storiesOf('Components/ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Button Group', () => {
    const groupColor = select('Group color', colorOptions, '', 'Optional')
    const button1Text = text('Button 1 text', 'Button 1', 'Required')
    const button2Text = text('Button 2 text', 'Button 2', 'Required')
    const button3Text = text('Button 3 text', 'Button 3', 'Required')

    return {
      render: h => (
        <ButtonGroup groupColor={groupColor}>
          <BaseButton>{button1Text}</BaseButton>
          <BaseButton>{button2Text}</BaseButton>
          <BaseButton>{button3Text}</BaseButton>
        </ButtonGroup>
      )
    }
  })
