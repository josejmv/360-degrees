// main tools
import mongoose from 'mongoose'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'

const EvaluationSchema = new mongoose.Schema<EvaluationDataType>({
  score: { type: Number, required: true },
  observation: { type: String, default: '' },
  totalScore: {
    type: Number,
    required: true,
    default: function () {
      return this.score
    },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export default mongoose.models.Evaluation ||
  mongoose.model<EvaluationDataType>('Evaluation', EvaluationSchema)
