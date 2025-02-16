'use client'

// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { useState, useEffect } from 'react'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'
import type { FC } from 'react'

type WatchEvaluationProps = {
  id: string
}

export const WatchEvaluation: FC<WatchEvaluationProps> = ({ id }) => {
  const [evaluation, setEvaluation] = useState<EvaluationDataType>()

  useEffect(() => {
    ;(async () => {
      const evaluation = await axiosInstance.get(`/api/evaluations/${id}`)
      setEvaluation(evaluation.data)
    })()

    return () => undefined
  }, [id])

  return (
    <div>
      <h4 className='text-center text-xl font-bold'>Detalles de evaluación</h4>

      {!evaluation ? (
        <div className='mt-4 w-full h-32 skeleton' />
      ) : (
        <div className='grid grid-cols-1 gap-4 mt-4'>
          <div>
            <p className='font-semibold'>Puntuación</p>
            <p>{evaluation?.score}</p>
          </div>

          <div>
            <p className='font-semibold'>Oservación</p>
            <p>{evaluation?.observation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
