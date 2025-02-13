// main tools
import PusherServer from 'pusher'

export const pusherServer = new PusherServer({
  useTLS: true,
  cluster: 'us2',
  appId: process.env.SUBSCRIPTION_APP_ID as string,
  secret: process.env.SUBSCRIPTION_SECRET_KEY as string,
  key: process.env.NEXT_PUBLIC_SUBSCRIPTION_PUBLIC_KEY as string,
})
