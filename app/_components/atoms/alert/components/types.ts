import type { HTMLAttributes, ReactNode } from 'react'

export interface AlertContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode
  variant: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS'
}

export interface AlertTitleProps
  extends Omit<HTMLAttributes<HTMLHeadElement>, 'children'> {
  children: ReactNode
}

export interface AlertDescriptionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode
}
