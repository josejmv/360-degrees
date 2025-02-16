// main tools
import { twMerge } from 'tailwind-merge'

// components
import {
  DialogPanel,
  DialogBackdrop,
  Dialog as HeadlessDialog,
} from '@headlessui/react'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'

// utils
import { initialPosition, openDirection } from './utils'

// types
import type { DrawerProps } from './types'
import type { FC } from 'react'

export const Drawer: FC<DrawerProps> = ({
  children,
  className,
  size = 'sm',
  panelClassName,
  modalClassName,
  dialogClassName,
  direction = 'left',
  containerClassName,
  onClose = () => null,
  backdropVisible = true,
  closeButtonVisible = true,
  ...props
}) => (
  <HeadlessDialog
    {...props}
    onClose={onClose}
    className={twMerge('relative z-50 focus:outline-none', dialogClassName)}
  >
    {backdropVisible && (
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-base-300-shade-darken-20 opacity-40 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
      />
    )}

    <div className={twMerge('fixed inset-0 overflow-hidden', modalClassName)}>
      <div
        className={twMerge(
          'pointer-events-none fixed inset-y-0 flex max-w-full',
          initialPosition[direction],
          containerClassName
        )}
      >
        <DialogPanel
          transition
          className={twMerge(
            'pointer-events-auto w-screen transform transition duration-500 ease-in-out bg-base-100 border border-base-300',
            `max-w-${size}`,
            openDirection[direction],
            panelClassName
          )}
        >
          {closeButtonVisible && (
            <div className='flex justify-end pt-2 pr-2'>
              <button
                type='button'
                onClick={() => onClose(false)}
                className='rounded-md bg-transparent focus:outline-none'
              >
                <span className='sr-only'>Close panel</span>
                <XMarkIcon
                  aria-hidden='true'
                  className='h-6 w-6 text-base-content'
                />
              </button>
            </div>
          )}

          <div
            className={twMerge(
              'flex min-h-64 h-full flex-col overflow-y-auto',
              className
            )}
          >
            {children}
          </div>
        </DialogPanel>
      </div>
    </div>
  </HeadlessDialog>
)
