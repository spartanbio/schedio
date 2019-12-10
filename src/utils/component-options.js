import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'

/** Enforce shade order */
const shadeOrder = (a, b) => {
  const shades = [
    'darkest',
    'darker',
    'dark',
    'light',
    'lighter',
    'lightest',
  ]

  return shades.indexOf(a) > shades.indexOf(b) ? 1 : -1
}

/** All colors in the design system with their available shades */
export const colors = Object.values(props).reduce((colorList, { category, name }) => {
  if (category === 'background-color') {
    // hue-value
    const [hue, value] = name.split('-')
    const shades = colorList[hue] || []

    if (value) shades.push(value)

    colorList[hue] = shades.sort(shadeOrder)
  }

  return colorList
}, {})

/** All possible shade options */
export const allShadeOptions = [...new Set(Object.values(colors).flat())]

/** Simple list of color names */
export const colorNames = [...new Set(Object.keys(colors))]
