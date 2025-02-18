// services
import { updateEvaluationById } from '@/_lib/database/services/evaluation'

// types
import type { UpdateEvaluationDataType } from '@/_types/models/evaluation'

export const updateEvaluation = async (
  id: string,
  data: UpdateEvaluationDataType
) => {
  const evaluation = await updateEvaluationById({
    data,
    evaluationId: id,
  })

  if (!evaluation) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluation)
}
