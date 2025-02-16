import { deleteEvaluation } from './delete'
import { getEvaluation } from './get'

export async function DELETE(
  _: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params
  return deleteEvaluation(id)
}

export async function GET(
  _: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params
  return getEvaluation(id)
}
