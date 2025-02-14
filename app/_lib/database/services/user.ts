// main tools
import dbConnect from '@/_lib/database/db-connect'

// models
import UserModel from '@/_lib/database/models/user'

// types
import type { UpdateUserDataType, UserDataType } from '@/_types/models/user'

export const getUserById = async (id: string) => {
  await dbConnect()
  const userResponse = await UserModel.findById(id).catch((error) => error)

  if (userResponse.errors) return userResponse.errors
  else return JSON.parse(JSON.stringify(userResponse)) as UserDataType
}

export const getUsers = async () => {
  await dbConnect()
  const userResponse = await UserModel.find().catch((error) => error)

  if (userResponse.errors) return userResponse.errors
  else return JSON.parse(JSON.stringify(userResponse)) as UserDataType[]
}

export const createUser = async (user: UserDataType) => {
  await dbConnect()
  const userResponse = await UserModel.create(user).catch((error) => error)

  if (userResponse.errors) return userResponse.errors
  else return JSON.parse(JSON.stringify(userResponse)) as UserDataType
}

export const deleteUser = async (userId: string) => {
  await dbConnect()
  const userResponse = await UserModel.findByIdAndDelete(userId).catch(
    (error) => error
  )

  if (userResponse.errors) return userResponse.errors
  else return JSON.parse(JSON.stringify(userResponse)) as UserDataType[]
}

export const updateUser = async (body: {
  userId: string
  data: UpdateUserDataType
}) => {
  await dbConnect()
  const userResponse = await UserModel.findByIdAndUpdate(
    body.userId,
    body.data,
    { new: true }
  ).catch((error) => error)

  if (userResponse?.errors) return userResponse?.errors
  else return JSON.parse(JSON.stringify(userResponse)) as UserDataType[]
}
