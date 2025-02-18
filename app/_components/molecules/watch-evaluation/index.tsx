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

// leadership: number
//   initiative: number
//   workQuality: number
//   observation: string
//   adaptability: number
//   productivity: number
//   problemsSolving: number

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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
          <div>
            <p className='font-semibold'>Liderazgo</p>
            <p>{evaluation?.leadership}</p>
          </div>
          <div>
            <p className='font-semibold'>Iniciativa</p>
            <p>{evaluation?.initiative}</p>
          </div>
          <div>
            <p className='font-semibold'>Calidad de trabajo</p>
            <p>{evaluation?.workQuality}</p>
          </div>
          <div>
            <p className='font-semibold'>Adaptabilidad</p>
            <p>{evaluation?.adaptability}</p>
          </div>
          <div>
            <p className='font-semibold'>Productividad</p>
            <p>{evaluation?.productivity}</p>
          </div>
          <div>
            <p className='font-semibold'>Resolución de problemas</p>
            <p>{evaluation?.problemsSolving}</p>
          </div>

          <div className='col-span-2'>
            <p className='font-semibold'>Oservación</p>
            <p>{evaluation?.observation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
