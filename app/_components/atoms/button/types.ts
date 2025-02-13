// utils
import { buttonDimensions, colors } from './utils'

// types
import type { ButtonHTMLAttributes } from 'react'

export type ColorsType = keyof typeof colors
export type SizeType = keyof typeof buttonDimensions

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType
  isError?: boolean
  loading?: boolean
  asChild?: boolean
  color?: ColorsType
  underlineVisible?: boolean
  variant?: 'BUTTON' | 'OUTLINE' | 'GHOST'
}
