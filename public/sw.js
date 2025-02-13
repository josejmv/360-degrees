/**
 * The event listener for the service worker installation
 */
self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      vibrate: [100, 50, 100],
      badge: '/logo/icon-192x192.png',
      icon: data.icon || '/logo/icon-192x192.png',
      data: { dateOfArrival: Date.now(), primaryKey: '2' },
    }
    event.waitUntil(
      self.registration.showNotification(data.title || 'QuickMenü', options)
    )
  }
})

/**
 * The event listener for the service worker installation
 */
self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  event.waitUntil(clients.openWindow('http://localhost:3000'))
})
