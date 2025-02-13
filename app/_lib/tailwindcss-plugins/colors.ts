export const colorTokens = {
  dark: '#000000',
  light: '#FFFFFF',
  accent: '#C21A93',
  'accent-content': '#FFF700',
  primary: '#5EBCFC',
  'primary-content': '#FFFFFF',
  secondary: '#EFF2F6',
  'secondary-content': '#4B5563',
  neutral: '#1F2937',
  'neutral-content': '#FFFFFF',
  'base-100': '#FFFFFF',
  'base-200': '#F7F8FA',
  'base-300': '#EFF2F6',
  'base-content': '#4B5563',
  info: '#EFF6FF',
  'info-content': '#3B82F6',
  success: '#EFFEF3',
  'success-content': '#1DA443',
  warning: '#FFF6DF',
  'warning-content': '#FBBF24',
  error: '#FEF2F2',
  'error-content': '#EF4444',
}

export const colorsAsRgb = Object.keys(colorTokens).reduce(
  (val: { [key: string]: string }, key) => {
    val[key] = getRgb(colorTokens[key as keyof typeof colorTokens])
    return val
  },
  {}
)

export const colorVariables = Object.keys(colorTokens).reduce(
  (val: { [key: string]: string }, key) => {
    val[key] = `var(--quickmenu-${key})`
    return val
  },
  {}
)

/**
 * @description Get RGB value from HEX
 */
function getRgb(hex: string): string {
  if (!hex || hex.length !== 7) {
    return '0, 0, 0'
  }
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)

  return `${r}, ${g}, ${b}`
}
