'use client'

// main tools
import { SessionProvider } from 'next-auth/react'

// types
import type { FC, HTMLAttributes } from 'react'

export const SessionWrapper: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => <SessionProvider>{children}</SessionProvider>
