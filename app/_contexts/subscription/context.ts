// main tools
import { createContext } from 'react'
import PusherClient from 'pusher-js'

type CreateContextDataType = {
  subscriptionClient: PusherClient | undefined
}

export const SubscriptionContext = createContext<CreateContextDataType>({
  subscriptionClient: undefined,
})
