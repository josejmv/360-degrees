'use client'

// main tools
import { useState, useCallback, useEffect } from 'react'

// utils
import { subscribeUser, unsubscribeUser } from '@/actions'
import { sendNotification } from '@/actions'

// context
import { PushNotificationContext } from './context'

// types
import type { FC, ReactNode } from 'react'
import type webpush from 'web-push'

type AppContextProviderProps = {
  children: ReactNode
}

export const PushNotificationProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isSWSupported, setIsSWSupported] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  )

  /**
   * Convert a base64 string to a Uint8Array.
   */
  const urlBase64ToUint8Array = useCallback((base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }, [])

  /**
   * Register the service worker
   */
  const registerServiceWorker = useCallback(async () => {
    const registration =
      (await navigator.serviceWorker.getRegistration()) ??
      (await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      }))
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    })
    setSubscription(sub)

    if (!sub) console.log('Subscription is null')

    const subJson = sub.toJSON()
    if (!subJson.keys) console.log('Subscription keys are undefined')

    const convertedSub: webpush.PushSubscription = {
      endpoint: sub.endpoint,
      expirationTime: sub.expirationTime,
      keys: { auth: subJson.keys!.auth, p256dh: subJson.keys!.p256dh },
    }

    await subscribeUser(convertedSub)
  }, [urlBase64ToUint8Array])

  /**
   * Register the service worker on mount
   */
  useEffect(() => {
    const isSupported = 'serviceWorker' in navigator && 'PushManager' in window
    setIsSWSupported(isSupported)

    if (isSupported) registerServiceWorker()

    return () => {
      unsubscribeUser()
    }
  }, [registerServiceWorker])

  return (
    <PushNotificationContext.Provider
      value={{
        pushNotifications: subscription,
        sendNotification: sendNotification,
        pushNotificationsSupported: isSWSupported,
      }}
    >
      {children}
    </PushNotificationContext.Provider>
  )
}
