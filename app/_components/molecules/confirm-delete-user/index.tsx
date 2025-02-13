'use client'

// main tools
import { axiosInstance } from '~/app/_lib/axios-instance'

// components
import { Button } from '@/_components/atoms/button'
import { Alert } from '@/_components/atoms/alert'

// types
import type { FC } from 'react'

type ConfirmDeleteUserProps = {
  id: string
  onClose: () => void
}

export const ConfirmDeleteUser: FC<ConfirmDeleteUserProps> = ({
  id,
  onClose,
}) => {
  const handleDeleteUser = async () => {
    const response = await axiosInstance.post('/api/user/delete', {
      userId: id,
    })

    if (response.data._id) onClose()
    else alert('Error al eliminar usuario')
  }

  return (
    <div>
      <Alert
        variant='ERROR'
        className='bg-transparent border-0'
        descriptionClassName='break-normal mt-3'
        title='¿Estás seguro de que deseas eliminar este usuario?'
        description='Esta acción no puede ser revertida así que acepta solo si estás completamente seguro'
      />
      <div className='flex justify-end gap-4 mt-4'>
        <Button variant='GHOST' color='TERTIARY' onClick={onClose}>
          Cancelar
        </Button>
        <Button color='ERROR' onClick={handleDeleteUser}>
          Eliminar
        </Button>
      </div>
    </div>
  )
}
