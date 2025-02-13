'use client'

// main tools
import { useMemo, useState } from 'react'

// components
import { Dialog } from '@/_components/atoms/dialog'
import { Card } from '@/_components/molecules/card'

// utils
import { actions, createCases } from './utils'

// types
import type { FC } from 'react'

export const QuickActions: FC = () => {
  const [showModal, setShowModal] = useState('')

  const CreateComponent = useMemo(
    () => createCases[showModal as keyof typeof createCases] ?? (() => null),
    [showModal]
  )

  /**
   * Closes the modal
   */
  const handleCloseModal = () => setShowModal('')

  return (
    <>
      <section className='bg-white p-4 rounded-2xl drop-shadow-md'>
        <h2 className='text-2xl font-bold'>Acciones rápidas</h2>
        <p>
          Aquí podrás crear y gestionar rápidamente los elementos más comunes de
          tu negocio.
        </p>
        <br />
        <article className='grid grid-cols-4 gap-2'>
          {actions.map((action) => (
            <Card
              {...action}
              key={action.label}
              onClick={() => setShowModal(action.type as string)}
            />
          ))}
        </article>
      </section>

      <Dialog
        open={showModal !== ''}
        onClose={handleCloseModal}
        panelClassName='max-w-screen-sm'
      >
        <CreateComponent onClose={handleCloseModal} />
      </Dialog>
    </>
  )
}
