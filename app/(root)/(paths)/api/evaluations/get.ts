// services
import { getEvaluations } from '@/_lib/database/services/evaluation'

export const getAllEvaluations = async () => {
  const evaluations = await getEvaluations()

  if (!evaluations) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluations)
}
