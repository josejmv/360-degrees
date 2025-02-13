'use server'

// main tools
import webpush from 'web-push'

/**
 * Set the VAPID keys
 */
webpush.setVapidDetails(
  'mailto:josejmvasquez@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

let subscription: webpush.PushSubscription | null = null

/**
 * Subscribe the user to push notifications
 */
export async function subscribeUser(sub: webpush.PushSubscription) {
  subscription = sub

  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true }
}

/**
 * Unsubscribe the user from push notifications
 */
export async function unsubscribeUser() {
  subscription = null

  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true }
}

/**
 * Send a push notification to the user,
 */
export async function sendNotification(message: string) {
  if (!subscription) throw new Error('No subscription available')

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        body: message,
        title: '360-degrees',
        icon: '/logo/icon-192x192.png',
      })
    )
    return { success: true }
  } catch (error) {
    console.error('Error sending push notification:', error)
    return { success: false, error: 'Failed to send notification' }
  }
}
