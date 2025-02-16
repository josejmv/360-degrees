// services
import { getEvaluationById } from '@/_lib/database/services/evaluation'

export const getEvaluation = async (id: string) => {
  const evaluations = await getEvaluationById(id)

  if (!evaluations) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluations)
}
