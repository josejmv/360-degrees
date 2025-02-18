'use client'

// main tools
import { useMemo, useState } from 'react'

// components
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@/_components/atoms/dialog'
import { Button } from '@/_components/atoms/button'

// utils
import { evaluationCrudCases } from './utils'

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
    return (
      evaluationCrudCases[useCase as keyof typeof evaluationCrudCases] ??
      (() => null)
    )
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
            <th className='border border-gray-300 p-2'>Puntuación</th>
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
                  {evaluation.score}
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
                colSpan={3}
                className='border border-gray-300 py-8 text-center'
              >
                No hay evaluaciones registrados
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className='border border-gray-300 p-2'>
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
