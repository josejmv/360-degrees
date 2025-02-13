// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { Trigger } from '@radix-ui/react-tabs'

// types
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export const TabsTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={twMerge(
      'w-full flex gap-2 justify-center items-center py-2 px-3 border-b hover:bg-secondary hover:border-b-primary bg-transparent active:bg-shade-state-active transition-colors ease-in-out text-base text-base-content font-normal whitespace-nowrap md:whitespace-normal [&>svg]:w-5 [&>svg]:h-5 disabled:text-base-content disabled:opacity-50 disabled:cursor-not-allowed active:border-b-primary hover:border-b-2 aria-selected:text-primary aria-selected:border-b-primary aria-selected:hover:text-primary aria-selected:hover:border-b-primary aria-selected:active:primary aria-selected:active:text-primary aria-selected:border-b-2',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = Trigger.displayName
