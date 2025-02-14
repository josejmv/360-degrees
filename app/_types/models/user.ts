// types
import type { Schema } from 'mongoose'

export type UserDataType = {
  _id: string
  name: string
  email: string
  username: string
  password: string
  evaluations: Schema.Types.ObjectId[]
  role: 'admin' | 'manager' | 'employee'
  status: 'active' | 'inactive' | 'pending' | 'deleted'
}

export type UpdateUserDataType = {
  name?: string
  email?: string
  picture?: string
  password?: string
  role?: 'admin' | 'manager' | 'employee'
  $push?: { evaluations: Schema.Types.ObjectId }
  $pull?: { evaluations: Schema.Types.ObjectId }
  status?: 'active' | 'inactive' | 'pending' | 'deleted'
}
