// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// styles
import './styles.css'

// types
import type { InputCheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ checked = false, className, ...props }, ref) => (
    <input
      ref={ref}
      type='checkbox'
      checked={checked === null ? true : checked}
      aria-checked={checked === null ? 'mixed' : checked ? 'true' : 'false'}
      className={twMerge(
        'ds-checkbox flex justify-center items-center w-4 h-4 rounded cursor-pointer appearance-none bg-blend-normal bg-no-repeat bg-center border border-primary disabled:opacity-50 disabled:cursor-not-allowed',
        checked || checked === null
          ? 'bg-primary'
          : 'border-base-300-shade-darken-20 bg-base-100',
        className
      )}
      {...props}
    />
  )
)
Checkbox.displayName = 'Checkbox'
