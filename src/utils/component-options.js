import * as color from '@spartanbio/schedio-tokens/dist/js/module-js/color.color-map.module'

export const colors = color

/** All possible shade options */
export const allShadeOptions = [
  ...new Set(Object.values(colors)
    .map(Object.keys)
    .flat(),
  ),
]

/** Simple list of color names */
export const colorNames = Object.keys(color)
