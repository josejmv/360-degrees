// main tools
import plugin from 'tailwindcss/plugin'

// utils
import { boxShadowsObject, dropShadowsObject } from './shadows'
import { colorTokens, colorVariables } from './colors'
import { newComponents } from './components'
import { generateShadesMix } from './shades'
import { newBases } from './bases'

const quickmenuPlugin = () =>
  plugin(
    ({ addBase, addComponents, config }) => {
      const quickmenuConfig = config('quickmenu.colors', {})
      const colors = { ...colorTokens, ...quickmenuConfig }

      const utilities: { [key: string]: string } = {}
      /**
       * adding colors
       */
      for (const [key, value] of Object.entries(colors)) {
        /**
         * set value to css variables
         */
        utilities[`--quickmenu-${key}`] = value
      }
      /**
       * define css variables
       */
      addBase({
        ':root': utilities,
        ...newBases,
      })

      /**
       * adding components
       */
      addComponents(newComponents)
    },
    {
      theme: {
        extend: {
          boxShadow: boxShadowsObject,
          dropShadow: dropShadowsObject,
          colors: { ...colorVariables, ...generateShadesMix(colorVariables) },
        },
      },
    }
  )

export default quickmenuPlugin
