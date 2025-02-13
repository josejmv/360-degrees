// main tools
import { twMerge } from 'tailwind-merge'

// types
import type { AlertTitleProps } from './types'
import type { FC } from 'react'

export const AlertTitle: FC<AlertTitleProps> = ({
  children,
  className,
  ...props
}) => (
  <h5
    className={twMerge(
      'mb-1 font-medium leading-none tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h5>
)
