// services
import { sendEvaluation } from '@/_lib/database/services/evaluation'
import { updateUser } from '@/_lib/database/services/user'

export async function POST(req: Request) {
  const body = await req.json()
  const evaluation = await sendEvaluation(body)
  await updateUser({
    userId: body.data.user,
    data: { $push: { evaluations: evaluation._id } },
  })

  if (!evaluation) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluation)
}
