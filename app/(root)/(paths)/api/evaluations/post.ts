// services
import { sendEvaluation } from '@/_lib/database/services/evaluation'
import { EvaluationDataType } from '@/_types/models/evaluation'
import { updateUser } from '@/_lib/database/services/user'

export const createEvaluation = async (body: {
  evaluationId: string
  data: EvaluationDataType
}) => {
  const evaluation = await sendEvaluation(body)
  await updateUser({
    userId: body.data.user as unknown as string,
    data: { $push: { evaluations: evaluation._id } },
  })

  if (!evaluation) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluation)
}
