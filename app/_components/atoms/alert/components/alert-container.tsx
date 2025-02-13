// main tools
import { twMerge } from 'tailwind-merge'

// utils
import { variants } from './utils'

// types
import type { AlertContainerProps } from './types'
import type { FC } from 'react'

export const AlertContainer: FC<AlertContainerProps> = ({
  variant,
  children,
  className,
  ...props
}) => (
  <div
    role='alert'
    className={twMerge(
      'relative w-full max-w-3xl break-all text-left rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg]:w-5 [&>svg]:h-5',
      variants[variant],
      className
    )}
    {...props}
  >
    {children}
  </div>
)
