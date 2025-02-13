// main tools
import dbConnect from '@/_lib/database/db-connect'

// models
import EvaluationModel from '@/_lib/database/models/evaluation'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'

export const sendEvaluation = async (body: {
  data: EvaluationDataType
  evaluationId: string | undefined
}) => {
  await dbConnect()

  if (body.evaluationId) {
    const evaluation = await EvaluationModel.findByIdAndUpdate(
      body.evaluationId,
      body.data,
      { new: true }
    ).catch((error) => error)

    if (evaluation.errors) return evaluation.errors
    return JSON.parse(JSON.stringify(evaluation)) as EvaluationDataType
  } else {
    const evaluation = await EvaluationModel.create(body.data).catch(
      (error) => error
    )

    if (evaluation.errors) return evaluation.errors
    return JSON.parse(JSON.stringify(evaluation)) as EvaluationDataType
  }
}
