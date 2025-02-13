// main tools
import { twMerge } from 'tailwind-merge'

// types
import type { AlertDescriptionProps } from './types'
import type { FC } from 'react'

export const AlertDescription: FC<AlertDescriptionProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={twMerge(
      'text-sm [&_p]:leading-relaxed text-base-content',
      className
    )}
    {...props}
  >
    {children}
  </div>
)
