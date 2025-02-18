'use client'

// main tools
import {
  Legend,
  Tooltip,
  BarElement,
  ArcElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js'
import { useRef, useState, useEffect, useMemo } from 'react'
import { axiosInstance } from '@/_lib/axios-instance'
import { useReactToPrint } from 'react-to-print'
import { Pie, Bar } from 'react-chartjs-2'

// components
import { Button } from '@/_components/atoms/button'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'
import type { UserDataType } from '@/_types/models/user'
import type { FC } from 'react'

type ReportUserProps = {
  id: string
}

export const ReportUser: FC<ReportUserProps> = ({ id }) => {
  const contentRef = useRef<HTMLElement>(null)
  const [user, setUser] = useState<UserDataType>()
  const [evaluations, setEvaluations] = useState<EvaluationDataType[]>()
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: 'User report',
  })

  ChartJS.register(
    Legend,
    Tooltip,
    ArcElement,
    BarElement,
    LinearScale,
    CategoryScale
  )

  const scores = useMemo(() => {
    const categories = [
      { label: 'Liderazgo', key: 'leadership' },
      { label: 'Iniciativa', key: 'initiative' },
      { label: 'Adaptabilidad', key: 'adaptability' },
      { label: 'Productividad', key: 'productivity' },
      { label: 'Calidad del trabajo', key: 'workQuality' },
      { label: 'Resolución de problemas', key: 'problemsSolving' },
    ]

    return categories.map((category) => {
      const total =
        evaluations?.reduce((acc, evaluation) => {
          return (
            acc +
            (evaluation[category.key as keyof EvaluationDataType] as number)
          )
        }, 0) ?? 0

      const average = evaluations?.length ? total / evaluations.length : 0

      return { label: category.label, valor: average }
    })
  }, [evaluations])

  useEffect(() => {
    ;(async () => {
      const user = await axiosInstance.get(`/api/employee/${id}`)
      setUser(user.data)

      const evaluations = await axiosInstance.get(
        `/api/get-user-evaluations/${id}`
      )
      setEvaluations(evaluations.data)
    })()
  }, [id])

  return (
    <div>
      {evaluations ? (
        <>
          <article className='p-6' ref={contentRef}>
            <h1 className='text-xl text-center'>Reporte de usuario</h1>
            <p className='text-sm font-light text-center'>
              El reporte del usuario {user?.name} contiene información detallada
              sobre su desempeño en la empresa.
            </p>

            <ul className='mt-4 px-10'>
              <li className='flex justify-between'>
                <span className='font-bold text-primary'>Área evaluada</span>
                <span className='font-bold text-primary'>Puntuación media</span>
              </li>
              {scores.map((score, index) => (
                <li key={index} className='flex justify-between'>
                  <span>{score.label}</span>
                  <span>{score.valor.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className='flex justify-between items-center mt-4'>
              <div className='w-80 h-80'>
                <Pie
                  data={{
                    labels: scores.map((score) => score.label),
                    datasets: [
                      {
                        data: scores.map((score) => score.valor),
                        backgroundColor: [
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56',
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56',
                        ],
                      },
                    ],
                  }}
                />
              </div>
              <div className='h-48 w-96'>
                <Bar
                  options={{
                    indexAxis: 'y',
                    plugins: { legend: { display: false } },
                  }}
                  data={{
                    labels: scores.map((score) => score.label),
                    datasets: [
                      {
                        label: 'Puntuación media',
                        data: scores.map((score) => score.valor),
                        backgroundColor: [
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56',
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56',
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </article>
          <Button className='ms-auto' onClick={() => reactToPrintFn()}>
            Generar reporte
          </Button>
        </>
      ) : (
        <div className='skeleton w-full h-96' />
      )}
    </div>
  )
}
