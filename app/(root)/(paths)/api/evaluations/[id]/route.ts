import { deleteEvaluation } from './delete'
import { updateEvaluation } from './put'
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

export async function PUT(
  req: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params
  const body = await req.json()

  return updateEvaluation(id, body)
}
