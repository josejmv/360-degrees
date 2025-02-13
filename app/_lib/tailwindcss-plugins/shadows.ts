import { colorsAsRgb } from './colors'

/**
 * @description
 * To use these classes, follow the following structure: `shadow-[key]`
 * Example: `shadow-inner-top-left-100`
 */
export const boxShadowsObject = {
  'inner-top-left-100': `inset 2px 2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-left-200': `inset 4px 4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-left-300': `inset 8px 8px 8px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-left-400': `inset 12px 12px 12px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-100': `inset 0px 2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-200': `inset 0px 4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-300': `inset 0px 8px 8px -2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-400': `inset 0px 12px 12px -4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-right-100': `inset -2px 2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-right-200': `inset -4px 4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-right-300': `inset -8px 8px 8px -2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-top-right-400': `inset -12px 12px 12px -4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-left-100': `inset 2px -2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-left-200': `inset 4px -4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-left-300': `inset 8px -8px 8px -2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-left-400': `inset 12px -12px 12px -4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-100': `inset 0px -2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-200': `inset 0px -4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-300': `inset 0px -8px 8px -2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-400': `inset 0px -12px 12px -4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-right-100': `inset -2px -2px 2px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-right-200': `inset -4px -4px 4px 0px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-right-300': `inset -8px -8px 8px -2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'inner-bottom-right-400': `-12px -12px 12px -4px rgba(${colorsAsRgb.dark}, 0.12)`,
}

/**
 * @description
 * To use these classes, follow the following structure: `drop-shadow-dropShadowsObjectKey`
 * Example: `drop-shadow-soft-top-left-100`
 */
export const dropShadowsObject = {
  // Drop Shadow - Soft Edge
  'soft-top-left-100': `-2px -2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-left-200': `-4px -4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-left-300': `-8px -8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-left-400': `-12px -12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-100': `0px -2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-200': `0px -4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-300': `0px -8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-400': `0px -12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-right-100': `2px -2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-right-200': `4px -4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-right-300': `8px -8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-top-right-400': `12px -12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-left-100': `-2px 2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-left-200': `-4px 4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-left-300': `-8px 8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-left-400': `-12px 12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-100': `0px 2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-200': `0px 4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-300': `0px 8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-400': `0px 12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-right-100': `2px 2px 2px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-right-200': `4px 4px 4px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-right-300': `8px 8px 8px rgba(${colorsAsRgb.dark}, 0.12)`,
  'soft-bottom-right-400': `12px 12px 12px rgba(${colorsAsRgb.dark}, 0.12)`,
  // Drop Shadow - Hard Edge
  'hard-top-left-100': [
    `-2px -2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-left-200': [
    `-4px -4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-left-300': [
    `-8px -8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-left-400': [
    `-12px -12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-100': [
    `0px -2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-200': [
    `0px -4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-300': [
    `0px -8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-400': [
    `0px -12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-right-100': [
    `2px -2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-right-200': [
    `4px -4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-right-300': [
    `8px -8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-top-right-400': [
    `12px -12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-left-100': [
    `-2px 2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-left-200': [
    `-4px 4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-left-300': [
    `-8px 8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-left-400': [
    `-12px 12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-100': [
    `0px 2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-200': [
    `0px 4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-300': [
    `0px 8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-400': [
    `0px 12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-right-100': [
    `2px 2px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-right-200': [
    `4px 4px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-right-300': [
    `8px 8px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
  'hard-bottom-right-400': [
    `12px 12px 0px rgba(${colorsAsRgb.dark}, 0.20)`,
    `0px 0px 0px rgba(${colorsAsRgb.dark}, 0.08)`,
  ],
}
