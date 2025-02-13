// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { Content } from '@radix-ui/react-tabs'

// types
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={twMerge(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = Content.displayName
