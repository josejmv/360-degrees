export const shadeMixObject = {
  'shade-darken-4': '.04',
  'shade-darken-8': '.08',
  'shade-darken-12': '.12',
  'shade-darken-16': '.16',
  'shade-darken-20': '.20',
  'shade-lighten-4': '.04',
  'shade-lighten-8': '.08',
  'shade-lighten-12': '.12',
  'shade-lighten-16': '.16',
  'shade-lighten-20': '.20',
  'shade-lighten-40': '.40',
  'shade-state-hover': '.08',
  'shade-state-focus': '.12',
  'shade-state-active': '.16',
}

/**
 * @description
 * Combined shade with a color: To use these classes, use the following structure:
 * - For Background Color: `bg-[color]-[key]` --> Example: `bg-warning-shade-lighten-20`
 * - For Text Color: `text-[color]-[key]` --> Example: `text-success-shade-lighten-8`
 * - For Border Color: `border-[color]-[key]` --> Example: `border-info-shade-darken-20`
 */
export const generateShadesMix = (colorTokens: Record<string, string>) => {
  const shadesResult: { [key: string]: string } = {}
  for (const color in colorTokens) {
    for (const shadeMix in shadeMixObject) {
      const shadeColor = `color-mix(in srgb, ${colorTokens[color]}, ${
        shadeMix.includes('lighten') ? colorTokens.light : colorTokens.dark
      } ${
        Number.parseFloat(
          shadeMixObject[shadeMix as keyof typeof shadeMixObject]
        ) * 100
      }%)`
      shadesResult[`${color}-${shadeMix}`] = shadeColor
    }
  }
  return shadesResult
}
