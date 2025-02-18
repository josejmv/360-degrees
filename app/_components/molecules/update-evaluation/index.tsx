'use client'

// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// components
import { InputText, TextArea } from '@/_components/atoms/inputs'
import { DialogTitle, Description } from '@headlessui/react'
import { Button } from '@/_components/atoms/button'

// types
import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'

type UpdateEvaluationProps = {
  id: string
  onClose: () => void
}

type Inputs = {
  score: number
  submit: string
  observation: string
}

export const UpdateEvaluation: FC<UpdateEvaluationProps> = ({
  id,
  onClose,
}) => {
  const [loading, setLoading] = useState(true)
  const { register, handleSubmit, formState, setValue } = useForm<Inputs>()

  /**
   * @description function to handle the submit of the form
   */
  const submitControl: SubmitHandler<Inputs> = async (data) => {
    await axiosInstance.put(`/api/evaluations/${id}`, { ...data })
    onClose()
  }

  useEffect(() => {
    ;(async () => {
      const response = await axiosInstance.get(`/api/evaluations/${id}`)

      setValue('score', response.data.score)
      setValue('observation', response.data.observation)
      setLoading(false)
    })()
  }, [id, setValue])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <DialogTitle className='text-xl text-center font-bold'>
        Editar evaluación
      </DialogTitle>
      <Description className='text-center text-sm'>
        Actualiza la evaluación para agregar o modificar la calificación y las
        observaciones
      </Description>

      <form
        onSubmit={handleSubmit(submitControl)}
        className='flex flex-col gap-5 my-8'
      >
        <InputText
          min={1}
          max={100}
          type='number'
          isError={!!formState.errors.score}
          {...register('score', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Calificación',
            hintText: formState.errors.score?.message,
          }}
        />
        <TextArea
          rows={3}
          isError={!!formState.errors.observation}
          {...register('observation', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Notas y observaciones',
            hintText: formState.errors.observation?.message,
          }}
        />

        <div className='flex justify-end gap-4'>
          <Button type='submit'>Actualizar</Button>
          <Button variant='GHOST' color='TERTIARY' onClick={onClose}>
            Cancelar
          </Button>
        </div>
        {formState.errors.submit && (
          <div className='text-red-500 text-center mt-2'>
            {formState.errors.submit.message}
          </div>
        )}
      </form>
    </div>
  )
}
