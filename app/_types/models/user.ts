// types
import type { Schema } from 'mongoose'

export type UserDataType = {
  _id: string
  name: string
  email: string
  picture: string
  username: string
  password: string
  evaluation: Schema.Types.ObjectId
  role: 'admin' | 'manager' | 'employee'
  status: 'active' | 'inactive' | 'pending' | 'deleted'
}

export type UpdateUserDataType = {
  name?: string
  picture?: string
  evaluation?: Schema.Types.ObjectId
  status?: 'active' | 'inactive' | 'pending' | 'deleted'
}
