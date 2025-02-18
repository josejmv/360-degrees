'use client'

// main tools
import { useMemo, useState } from 'react'

// components
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@/_components/atoms/dialog'
import { Button } from '@/_components/atoms/button'

// utils
import { userCrudCases } from './utils'

// types
import type { EvaluationDataType } from '@/_types/models/evaluation'
import type { FC } from 'react'

type EvaluationsTableProps = {
  evaluations: EvaluationDataType[]
}

export const EvaluationsTable: FC<EvaluationsTableProps> = ({
  evaluations,
}) => {
  const [showModal, setShowModal] = useState('')

  const CrudComponent = useMemo(() => {
    const [useCase] = showModal.split('-')
    return userCrudCases[useCase as keyof typeof userCrudCases] ?? (() => null)
  }, [showModal])

  const evaluationId = useMemo(() => {
    const [_, id] = showModal.split('-')
    return id
  }, [showModal])

  return (
    <>
      <table className='w-full border-collapse table-fixed'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Liderazgo</th>
            <th className='border border-gray-300 p-2'>Iniciativa</th>
            <th className='border border-gray-300 p-2'>Adaptabilidad</th>
            <th className='border border-gray-300 p-2'>Productividad</th>
            <th className='border border-gray-300 p-2'>Calidad de trabajo</th>
            <th className='border border-gray-300 p-2'>
              Resolución de problemas
            </th>
            <th className='border border-gray-300 p-2'>Observación</th>
            <th className='border border-gray-300 p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.length > 0 ? (
            evaluations.map((evaluation) => (
              <tr
                key={evaluation._id}
                className='border-b border-gray-300 text-center'
              >
                <td className='border border-gray-300 p-2'>
                  {evaluation.adaptability}
                </td>
                <td className='border border-gray-300 p-2'>
                  {evaluation.initiative}
                </td>
                <td className='border border-gray-300 p-2'>
                  {evaluation.adaptability}
                </td>
                <td className='border border-gray-300 p-2'>
                  {evaluation.productivity}
                </td>
                <td className='border border-gray-300 p-2'>
                  {evaluation.workQuality}
                </td>
                <td className='border border-gray-300 p-2'>
                  {evaluation.problemsSolving}
                </td>
                <td
                  title={evaluation.observation}
                  className='border border-gray-300 p-2 truncate'
                >
                  {evaluation.observation}
                </td>
                <td className='border border-gray-300 p-2'>
                  <div className='flex justify-center gap-4'>
                    <EyeIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`WATCH-${evaluation._id}`)}
                    />
                    <PencilIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`UPDATE-${evaluation._id}`)}
                    />
                    <TrashIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`DELETE-${evaluation._id}`)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className='border border-gray-300 py-8 text-center'
              >
                No hay evaluaciones
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8} className='border border-gray-300 p-2'>
              <div className='flex justify-end'>
                <Button onClick={() => setShowModal('CREATE')}>
                  Agregar evaluación
                </Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <Dialog
        open={!!showModal}
        onClose={() => setShowModal('')}
        panelClassName='w-full max-w-screen-sm'
        className={showModal.includes('DELETE') ? '[&>div>div]:px-4' : ''}
      >
        <CrudComponent id={evaluationId} onClose={() => setShowModal('')} />
      </Dialog>
    </>
  )
}
