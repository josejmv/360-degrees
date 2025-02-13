// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { PopoverButton } from '@headlessui/react'

// types
import type { PopoverButtonProps } from '@headlessui/react'

export const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  PopoverButtonProps
>(({ disabled, children, className, ...props }, ref) => (
  <PopoverButton
    as='div'
    ref={ref}
    {...props}
    disabled={disabled}
    className={twMerge('focus:outline-none w-fit', className as string)}
  >
    {children}
  </PopoverButton>
))
DropdownTrigger.displayName = 'DropdownTrigger'
