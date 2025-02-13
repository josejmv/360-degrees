import type { InputPresetProps } from '../types'

export interface InputCheckboxProps
  extends Omit<InputPresetProps<HTMLInputElement>, 'checked'> {
  className?: string
  checked?: boolean | null
}
