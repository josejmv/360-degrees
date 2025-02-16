// types
import type { HTMLAttributes, ReactNode } from 'react'
import type { DialogProps } from '@headlessui/react'

export interface DrawerProps
  extends Omit<DialogProps, 'className' | 'children' | 'onClose'> {
  children?: ReactNode
  modalClassName?: string
  dialogClassName?: string
  backdropVisible?: boolean
  closeButtonVisible?: boolean
  onClose?: (value: boolean) => void
  className?: HTMLAttributes<HTMLDivElement>['className']
  direction?: 'left' | 'right' | 'center' | 'top' | 'bottom'
  panelClassName?: HTMLAttributes<HTMLDivElement>['className']
  containerClassName?: HTMLAttributes<HTMLDivElement>['className']
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
}
