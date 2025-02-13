// services
import { createUser } from '~/app/_lib/database/services/user'

export async function POST(req: Request) {
  const body = await req.json()
  const user = await createUser(body)

  if (!user._id) {
    const [key, value] = Object.entries(user)[0]

    return Response.json({
      error: `${key}:${
        (value as { properties?: { message?: string } })?.properties?.message ||
        value
      }`,
    })
  }

  return Response.json(user)
}
