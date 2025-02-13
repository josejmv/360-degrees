// main tools
import { useContext } from 'react'

// context
import { SubscriptionContext } from '@/_contexts/subscription/context'

export const useSubscription = () => useContext(SubscriptionContext)
