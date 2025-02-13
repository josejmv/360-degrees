// services
import { deleteUser } from '~/app/_lib/database/services/user'

export async function POST(req: Request) {
  const { userId } = await req.json()
  const user = await deleteUser(userId)

  return Response.json(user)
}
