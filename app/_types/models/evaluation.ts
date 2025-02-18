// types
import type { Schema } from 'mongoose'

export type EvaluationDataType = {
  _id: string
  score: number
  observation: string
  user: Schema.Types.ObjectId
}

export type UpdateEvaluationDataType = {
  score: number
  observation: string
}
