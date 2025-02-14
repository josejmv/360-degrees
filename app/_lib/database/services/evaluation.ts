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

export const getEvaluationsByUserId = async (id: string) => {
  await dbConnect()

  const evaluations = await EvaluationModel.find({ user: id }).catch(
    (error) => error
  )

  if (evaluations.errors) return evaluations.errors
  return JSON.parse(JSON.stringify(evaluations)) as EvaluationDataType[]
}

export const deleteEvaluationById = async (id: string) => {
  await dbConnect()

  const evaluation = await EvaluationModel.findByIdAndDelete({ _id: id }).catch(
    (error) => error
  )

  if (evaluation.errors) return evaluation.errors
  return JSON.parse(JSON.stringify(evaluation)) as EvaluationDataType
}
