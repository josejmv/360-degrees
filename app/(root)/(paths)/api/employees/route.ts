// services
import { getUsers } from '~/app/_lib/database/services/user'

export async function GET() {
  const users = await getUsers()

  if (!users) return Response.json({ error: 'Users not found' })
  return Response.json(users)
}
