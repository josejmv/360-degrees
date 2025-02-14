'use client'

// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// components
import { InputText, Checkbox } from '@/_components/atoms/inputs'
import { Button } from '@/_components/atoms/button'

// types
import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'

type ProfileStepProps = {
  id: string
}

type Inputs = {
  name: string
  email: string
  submit: string
  username: string
  password: string
  confirmPassword: string
}

export const ProfileStep: FC<ProfileStepProps> = ({ id }) => {
  const [loading, setLoading] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const { register, handleSubmit, formState, getValues, setValue, resetField } =
    useForm<Inputs>()

  /**
   * @description function to handle the submit of the form
   */
  const submitControl: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    await axiosInstance.put(`/api/employee/${id}`, {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    setChangePassword(false)
    resetField('password')
    resetField('confirmPassword')

    setLoading(false)
  }

  useEffect(() => {
    ;(async () => {
      const response = await axiosInstance.get(`/api/employee/${id}`)

      setValue('name', response.data.name)
      setValue('email', response.data.email)
      setValue('username', response.data.username)
    })()

    return () => undefined
  }, [id, setValue])

  return (
    <form
      onSubmit={handleSubmit(submitControl)}
      className='bg-base-300 bg-opacity-30 backdrop-blur-lg text-base-content p-8 rounded-3xl'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <InputText
          isError={!!formState.errors.name}
          {...register('name', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Nombre y apellido',
            hintText: formState.errors.name?.message,
          }}
        />
        <InputText
          type='password'
          {...register('password')}
          disabled={!changePassword}
          isError={!!formState.errors.password}
          inputWrapperProps={{
            label: 'Contraseña',
            hintText: formState.errors.password?.message,
          }}
        />
        <InputText
          disabled
          isError={!!formState.errors.username}
          {...register('username', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Nombre de usuario',
            hintText: formState.errors.username?.message,
          }}
        />
        <InputText
          type='password'
          disabled={!changePassword}
          isError={!!formState.errors.confirmPassword}
          {...register('confirmPassword', {
            validate: (value) =>
              value === getValues().password || 'Las contraseñas no coinciden',
          })}
          inputWrapperProps={{
            label: 'Confirmar contraseña',
            hintText: formState.errors.confirmPassword?.message,
          }}
        />
        <InputText
          isError={!!formState.errors.email}
          {...register('email', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Correo electrónico',
            hintText: formState.errors.email?.message,
          }}
        />
      </div>
      <div className='flex flex-row-reverse items-center gap-3 mt-4'>
        <label>¿Desea cambiar contraseña?</label>
        <Checkbox
          checked={changePassword}
          onChange={() => setChangePassword(!changePassword)}
        />
      </div>

      <Button
        type='submit'
        loading={loading}
        className='font-bold mt-6 ms-auto'
        isError={!!formState.errors.username || !!formState.errors.password}
      >
        Guardar cambios
      </Button>
      {formState.errors.submit && (
        <div className='text-red-500 text-center mt-2'>
          {formState.errors.submit.message}
        </div>
      )}
    </form>
  )
}
