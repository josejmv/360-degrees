// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { InputLayout } from '@/_components/atoms/inputs/layout'

// types
import type { InputPresetProps } from '@/_components/atoms/inputs/templates/types'

export type InputTextProps = InputPresetProps<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ inputWrapperProps, isError, ...inputProps }, ref) => (
    <InputLayout
      {...inputWrapperProps}
      isError={isError}
      required={inputProps.required}
      disabled={inputProps.disabled}
    >
      <input
        {...inputProps}
        ref={ref}
        className={twMerge(
          '!bg-transparent border-0 p-0 w-full h-auto focus:outline-none text-base-content',
          inputProps.disabled && 'cursor-not-allowed',
          inputProps.className
        )}
      />
    </InputLayout>
  )
)
InputText.displayName = 'InputText'
