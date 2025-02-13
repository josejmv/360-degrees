// types
import type { Schema } from 'mongoose'

export type EvaluationDataType = {
  _id: string
  score: number
  totalScore: number
  observation: string
  user: Schema.Types.ObjectId
}
