// services
import { updateUser } from '@/_lib/database/services/user'

// types
import { UpdateUserDataType } from '~/app/_types/models/user'

export const updateEmployeeById = async (
  id: string,
  body: UpdateUserDataType
) => {
  const user = await updateUser({
    userId: id,
    data: body,
  })

  if (!user) return Response.json({ error: 'User not found' })
  return Response.json(user)
}
