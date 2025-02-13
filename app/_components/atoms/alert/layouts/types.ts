// types
import type { AlertContainerProps } from '../components/types'
import type { ReactNode } from 'react'

export interface AlertProps extends Omit<AlertContainerProps, 'children'> {
  title: string
  icon?: ReactNode
  description?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}
