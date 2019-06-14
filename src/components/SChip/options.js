import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'

export const colors = [
  ...Object.values(props).reduce((colorList, { category, name }) => {
    if (category === 'background-color') colorList.add(name.split('-')[0])

    return colorList
  }, new Set()),
].sort()
