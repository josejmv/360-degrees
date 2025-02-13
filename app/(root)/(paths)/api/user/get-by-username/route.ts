// services
import { LoginService } from '@/_lib/database/services/auth'

export async function POST(req: Request) {
  const body = await req.json()
  const user = await LoginService(body.username)

  if (!user) return Response.json({ error: 'User not found' })
  return Response.json(user)
}
