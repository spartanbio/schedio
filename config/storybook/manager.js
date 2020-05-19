import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Schédio',
    brandImage: null,
  }),
  showPanel: true,
  showRoot: true,
})
