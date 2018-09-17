import { storiesOf } from '@storybook/vue'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { colors, sizes } from '@/components/base/BaseButton/options'
import BaseButton from '@/components/base/BaseButton'
import ButtonGroup from '@/components/ButtonGroup'

const colorOptions = ['', ...colors]
const sizeOptions = ['', ...sizes]

storiesOf('Components/BaseButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const buttonText = text('Button text', 'Sample text')
    const buttonColor = select('Button color', colorOptions)
    const buttonSize = select('Button size', sizeOptions, '')

    const props = {
      buttonColor,
      buttonSize
    }

    return {
      render: h => <BaseButton {...{ props }}>{buttonText}</BaseButton>
    }
  })
  .add('Button Group', () => {
    const groupColor = select('Group color', colorOptions)
    const button1Text = text('Button 1 text', 'Button 1')
    const button2Text = text('Button 2 text', 'Button 2')
    const button3Text = text('Button 3 text', 'Button 3')

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
