'use client'

// main tools
import { useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'

// components
import {
  TrashIcon,
  PencilIcon,
  ChatBubbleLeftIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import { Dialog } from '@/_components/atoms/dialog'
import { Button } from '@/_components/atoms/button'

// utils
import { userCrudCases } from './utils'

// types
import type { UserDataType } from '@/_types/models/user'
import type { FC } from 'react'

type EmployeesTableProps = {
  employees: UserDataType[]
}

export const EmployeesTable: FC<EmployeesTableProps> = ({ employees }) => {
  const [showModal, setShowModal] = useState('')

  const CrudComponent = useMemo(() => {
    const [useCase] = showModal.split('-')
    return userCrudCases[useCase as keyof typeof userCrudCases] ?? (() => null)
  }, [showModal])

  const employeeId = useMemo(() => {
    const [_, id] = showModal.split('-')
    return id
  }, [showModal])

  return (
    <>
      <table className='w-full border-collapse table-fixed'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Nombre</th>
            <th className='border border-gray-300 p-2'>Correo electrónico</th>
            <th className='border border-gray-300 p-2'>Estatus</th>
            <th className='border border-gray-300 p-2'>Rol</th>
            <th className='border border-gray-300 p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr
                key={employee._id}
                className='border-b border-gray-300 text-center'
              >
                <td className='border border-gray-300 p-2'>{employee.name}</td>
                <td
                  title={employee.email}
                  className='border border-gray-300 p-2 truncate'
                >
                  {employee.email}
                </td>
                <td className='border border-gray-300 p-2'>
                  {employee.status}
                </td>
                <td className='border border-gray-300 p-2'>{employee.role}</td>
                <td className='border border-gray-300 p-2'>
                  <div className='flex justify-center gap-4'>
                    <ChatBubbleLeftIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`FEEDBACK-${employee._id}`)}
                    />
                    <PencilIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`UPDATE-${employee._id}`)}
                    />
                    <DocumentMagnifyingGlassIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`REPORT-${employee._id}`)}
                    />
                    <TrashIcon
                      className='w-5 h-5 cursor-pointer'
                      onClick={() => setShowModal(`DELETE-${employee._id}`)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className='border border-gray-300 py-8 text-center'
              >
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className='border border-gray-300 p-2'>
              <div className='flex justify-end'>
                <Button onClick={() => setShowModal('CREATE')}>
                  Agregar empleado
                </Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <Dialog
        open={!!showModal}
        onClose={() => setShowModal('')}
        className={showModal.includes('DELETE') ? '[&>div>div]:px-4' : ''}
        panelClassName={twMerge(
          'w-full',
          showModal.includes('REPORT') || showModal.includes('UPDATE')
            ? 'max-w-screen-lg'
            : 'max-w-screen-sm'
        )}
      >
        <CrudComponent id={employeeId} onClose={() => setShowModal('')} />
      </Dialog>
    </>
  )
}
