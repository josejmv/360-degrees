// types
import type { InputPresetProps } from '@/_components/atoms/inputs/templates/types'

export interface InputTextAreaProps
  extends InputPresetProps<HTMLTextAreaElement> {
  isError?: boolean
  characterLimitLabel?: string
  resizeHandleVisible?: boolean
  rows?: HTMLTextAreaElement['rows']
}
