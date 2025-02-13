// types
import type { HTMLAttributes, ReactNode } from 'react'

export interface InputLayoutProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode
  isError?: boolean
  loading?: boolean
  required?: boolean
  disabled?: boolean
  caption?: ReactNode
  children: ReactNode
  hintText?: ReactNode
  infoText?: ReactNode
  leftAddon?: ReactNode
  rightAddon?: ReactNode
  labelClassName?: string
  captionClassName?: string
  infoTextClassName?: string
  hintTextClassName?: string
  containerClassName?: string
  leftAddonClassName?: string
  inputItemClassName?: string
  rightAddonClassName?: string
  inputContentClassName?: string
}
