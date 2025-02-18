// main tools
import mongoose from 'mongoose'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'

const EvaluationSchema = new mongoose.Schema<EvaluationDataType>({
  observation: { type: String, default: '' },
  leadership: { type: Number, required: true },
  initiative: { type: Number, required: true },
  workQuality: { type: Number, required: true },
  adaptability: { type: Number, required: true },
  productivity: { type: Number, required: true },
  problemsSolving: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.models.Evaluation ||
  mongoose.model<EvaluationDataType>('Evaluation', EvaluationSchema)
