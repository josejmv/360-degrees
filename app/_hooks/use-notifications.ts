// main tools
import { useContext } from 'react'

// context
import { PushNotificationContext } from '@/_contexts/notification/context'

export const useNotifications = () => useContext(PushNotificationContext)
