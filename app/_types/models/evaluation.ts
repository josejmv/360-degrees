// types
import type { Schema } from 'mongoose'

export type EvaluationDataType = {
  _id: string
  leadership: number
  initiative: number
  workQuality: number
  observation: string
  adaptability: number
  productivity: number
  problemsSolving: number
  user: Schema.Types.ObjectId
}

export type UpdateEvaluationDataType = {
  leadership: number
  initiative: number
  workQuality: number
  observation: string
  adaptability: number
  productivity: number
  problemsSolving: number
}
