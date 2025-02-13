// types
import type { InputLayoutProps } from '../layout/types'

type InputProps<InputType> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<InputType>,
  InputType
>

export interface InputPresetProps<T> extends InputProps<T> {
  isError?: boolean
  inputWrapperProps?: Omit<InputLayoutProps, 'children' | 'key' | 'disabled'>
}
