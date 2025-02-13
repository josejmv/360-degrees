// main tools
import { twMerge } from 'tailwind-merge'

// components
import { PopoverPanel } from '@headlessui/react'

// types
import type { PopoverPanelProps } from '@headlessui/react'
import type { FC } from 'react'

export const DropdownContent: FC<PopoverPanelProps> = ({
  children,
  className,
  ...props
}) => (
  <PopoverPanel
    {...props}
    transition
    anchor={props.anchor ?? 'bottom'}
    className={twMerge(
      'z-10 m-2 py-2 bg-base-100 border border-base-300 rounded-lg transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0',
      className as string
    )}
  >
    {children}
  </PopoverPanel>
)
