// main tools
import { createContext } from 'react'

type CreateContextDataType = {
  pushNotificationsSupported: boolean
  pushNotifications: PushSubscription | null
  sendNotification: (message: string) => void
}

export const PushNotificationContext = createContext<CreateContextDataType>({
  pushNotifications: null,
  sendNotification: () => {},
  pushNotificationsSupported: false,
})
