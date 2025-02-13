// main tools
import { twMerge } from 'tailwind-merge'

// components
import {
  DialogPanel,
  DialogBackdrop,
  Dialog as HeadlessDialog,
} from '@headlessui/react'

// types
import type { DialogProps as HeadlessDialogProps } from '@headlessui/react'
import type { FC } from 'react'

interface DialogProps extends HeadlessDialogProps {
  panelClassName?: string
  backdropClassName?: string
}

export const Dialog: FC<DialogProps> = ({
  children,
  className,
  panelClassName,
  backdropClassName,
  ...props
}) => (
  <HeadlessDialog
    {...props}
    className={twMerge('relative z-50', className as string)}
  >
    <DialogBackdrop
      className={twMerge('fixed inset-0 bg-black/30', backdropClassName)}
    />
    <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
      <DialogPanel
        className={twMerge(
          'max-w-screen-md border bg-white rounded-xl py-6 px-10',
          panelClassName
        )}
      >
        {children}
      </DialogPanel>
    </div>
  </HeadlessDialog>
)
