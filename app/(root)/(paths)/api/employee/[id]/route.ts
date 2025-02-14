// utils
import { updateEmployeeById } from './put'
import { getEmployeeById } from './get'

export async function GET(
  _: Request,
  query: { params: Promise<{ id: string }> }
) {
  const { id } = await query.params
  return getEmployeeById(id)
}

export async function PUT(
  req: Request,
  query: { params: Promise<{ id: string }> }
) {
  const body = await req.json()
  const { id } = await query.params

  return updateEmployeeById(id, body)
}
