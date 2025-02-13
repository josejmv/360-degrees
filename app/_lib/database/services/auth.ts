// models
import UserModel from '@/_lib/database/models/user'

// database
import dbConnect from '@/_lib/database/db-connect'

// types
import type { UserDataType } from '@/_types/models/user'

export const LoginService = async (username: string | undefined) => {
  await dbConnect()
  const user = await UserModel.findOne({ username: username })
  if (!user) return undefined
  else return JSON.parse(JSON.stringify(user)) as UserDataType
}

export const SignUpService = async (user: UserDataType) => {
  await dbConnect()
  const userResponse = await UserModel.create(user).catch((error) => error)

  if (userResponse.errors) return userResponse.errors
  return JSON.parse(JSON.stringify(userResponse)) as UserDataType
}
