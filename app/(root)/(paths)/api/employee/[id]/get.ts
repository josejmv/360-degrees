import { getUserById } from '@/_lib/database/services/user'

export const getEmployeeById = async (id: string) => {
  const user = await getUserById(id)

  if (!user) return Response.json({ error: 'User not found' })
  return Response.json(user)
}
