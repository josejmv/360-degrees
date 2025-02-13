// types
import type { InputLayoutProps } from '@/_components/atoms/inputs/layout/types'
import type { Props as ReactSelectProps } from 'react-select'

export interface InputSelectProps extends Omit<ReactSelectProps, 'onChange'> {
  isError?: boolean
  disabled?: boolean
  maxValuesToShow?: number
  options: SelectOptionType[]
  dropdownIndicatorVisible?: boolean
  indicatorSeparatorVisible?: boolean
  inputWrapperProps?: Omit<InputLayoutProps, 'children'>
  onChange?: (value: {
    target: { name?: string; value: { [k: string]: string } }
  }) => void
}

export type SelectOptionType = {
  id?: string
  label: string
  value?: string
  color?: string
  items?: SelectOptionType[]
}
