// services
import { SignUpService } from '@/_lib/database/services/auth'

export async function POST(req: Request) {
  const body = await req.json()
  const response = await SignUpService(body)

  if (!response._id) {
    const [key, value] = Object.entries(response)[0]

    return Response.json({
      error: `${key}:${
        (value as { properties?: { message?: string } })?.properties?.message ||
        value
      }`,
    })
  }
  return Response.json(response)
}
