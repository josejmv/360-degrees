// services
import { getEvaluationsByUserId } from '@/_lib/database/services/evaluation'

export async function GET(
  _: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params

  const evaluations = await getEvaluationsByUserId(id)

  if (!evaluations) return Response.json({ error: 'Evaluations not found' })
  return Response.json(evaluations)
}
