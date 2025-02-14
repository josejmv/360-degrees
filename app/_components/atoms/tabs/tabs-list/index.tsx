// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { List } from '@radix-ui/react-tabs'

// types
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export const TabsList = forwardRef<
  ElementRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={twMerge(
      'inline-flex items-center justify-center w-full md:min-w-[400px] overflow-auto',
      className
    )}
    {...props}
  />
))
TabsList.displayName = List.displayName
