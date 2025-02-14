// services
import { deleteEvaluationById } from '@/_lib/database/services/evaluation'
import { updateUser } from '@/_lib/database/services/user'

export async function DELETE(
  _: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params

  console.log(id)

  const evaluation = await deleteEvaluationById(id)
  await updateUser({
    userId: evaluation.user,
    data: { $pull: { evaluations: evaluation._id } },
  })

  if (!evaluation) return Response.json({ error: 'Unexpected error' })
  return Response.json(evaluation)
}
