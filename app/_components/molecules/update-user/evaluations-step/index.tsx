// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { useEffect, useState } from 'react'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'
import type { FC } from 'react'
import { EvaluationsTable } from './_components/evaluations-table'

type EvaluationStepProps = {
  id: string
}

export const EvaluationStep: FC<EvaluationStepProps> = ({ id }) => {
  const [evaluations, setEvaluations] = useState<EvaluationDataType[]>()

  useEffect(() => {
    ;(async () => {
      const response = await axiosInstance.get(
        `/api/get-user-evaluations/${id}`
      )

      setEvaluations(response.data ?? [])
    })()

    return () => undefined
  }, [id])

  if (!evaluations) return null

  return <EvaluationsTable evaluations={evaluations} />
}
