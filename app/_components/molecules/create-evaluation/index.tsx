'use client'

// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// components
import { InputText, TextArea, InputSelect } from '@/_components/atoms/inputs'
import { DialogTitle, Description } from '@headlessui/react'
import { Button } from '@/_components/atoms/button'

// types
import type { SelectOptionType } from '@/_components/atoms/inputs'
import type { UserDataType } from '~/app/_types/models/user'
import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'

type CreateEvaluationProps = {
  onClose: () => void
}

type Inputs = {
  score: number
  submit: string
  observation: string
  employee: SelectOptionType
}

export const CreateEvaluation: FC<CreateEvaluationProps> = ({ onClose }) => {
  const { register, handleSubmit, formState, setError } = useForm<Inputs>()
  const [employees, setEmployees] = useState<UserDataType[]>()

  /**
   * @description function to handle the submit of the form
   */
  const submitControl: SubmitHandler<Inputs> = async (data) => {
    const evaluation = await axiosInstance.post('/api/evaluations', {
      data: { ...data, user: data.employee.value },
    })

    if (evaluation.data._id) onClose()
    else {
      const [key, message] = evaluation?.data.error?.split(':') ?? []

      setError((key as keyof Inputs) ?? 'submit', {
        message: message ?? 'Error inesperado',
      })
    }
  }

  useEffect(() => {
    ;(async () => {
      const employees = await axiosInstance.get('/api/employees')

      employees.data.sort((a: UserDataType, b: UserDataType) =>
        a.name.localeCompare(b.name)
      )

      setEmployees(employees.data)
    })()

    return () => undefined
  }, [])

  return (
    <div>
      <DialogTitle className='text-xl text-center font-bold'>
        Evaluar usuario
      </DialogTitle>
      <Description className='text-center text-sm'>
        Evalua a tus empleados para mejorar su rendimiento
      </Description>

      <form
        onSubmit={handleSubmit(submitControl)}
        className='flex flex-col gap-5 my-8'
      >
        <InputSelect
          closeMenuOnSelect
          isError={!!formState.errors.employee}
          {...register('employee', { required: 'Este campo es requerido' })}
          options={
            employees?.map((employee) => ({
              value: employee._id,
              label: employee.name || 'Sin nombre',
            })) ?? []
          }
          inputWrapperProps={{
            label: 'Empleado',
            hintText: formState.errors.employee?.message,
          }}
        />
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
          <Button type='submit'>Guardar</Button>
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
