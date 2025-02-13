import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import type { ButtonProps, SizeType } from './types'
import { buttonDimensions, buttonVariants } from './utils'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isError,
      children,
      size = 'md',
      className = '',
      loading = false,
      color = 'PRIMARY',
      variant = 'BUTTON',
      underlineVisible = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={loading}
      className={twMerge(
        'border-none break-words rounded-lg flex justify-center items-center transition-colors ease-in p-2',
        buttonVariants[variant][color],
        buttonDimensions[size as SizeType],
        isError ? buttonVariants[variant].ERROR : '',
        underlineVisible ? 'underline' : '!no-underline',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'
