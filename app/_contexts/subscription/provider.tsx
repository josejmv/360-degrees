'use client'

// main tools
import PusherClient from 'pusher-js'
import { useRef } from 'react'

// context
import { SubscriptionContext } from './context'

// types
import type { FC, ReactNode } from 'react'

type SubscriptionProviderProps = {
  children: ReactNode
}

export const SubscriptionProvider: FC<SubscriptionProviderProps> = ({
  children,
}) => {
  const pusherClient = useRef(
    new PusherClient(
      process.env.NEXT_PUBLIC_SUBSCRIPTION_PUBLIC_KEY as string,
      {
        cluster: 'us2',
        authTransport: 'ajax',
        authEndpoint: '/api/pusher-auth',
        auth: { headers: { 'Content-Type': 'application/json' } },
      }
    )
  )

  return (
    <SubscriptionContext.Provider
      value={{ subscriptionClient: pusherClient?.current }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}
