'use client'

// main tools
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

// components
import { InputText } from '@/_components/atoms/inputs'
import { Button } from '@/_components/atoms/button'
import Link from 'next/link'

// types
import type { SubmitHandler } from 'react-hook-form'
import type { FC } from 'react'

type Inputs = { username: string; password: string; submit: string }

export const LoginForm: FC = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState, setError } = useForm<Inputs>()

  /**
   * @description function to handle the submit of the form
   */
  const submitControl: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const response = await signIn('login', { ...data, redirect: false })

    if (!response?.ok) {
      const [key, message] = response?.error?.split(':') ?? []

      setError((key as keyof Inputs) ?? 'submit', {
        message: message ?? 'Error inesperado',
      })
    } else redirect('/dashboard')

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(submitControl)}
      className='bg-gray-500 bg-opacity-30 backdrop-blur-lg text-primary-content p-8 rounded-3xl'
    >
      <div className='text-center pt-3 font-[family-name:var(--font-geist-mono)]'>
        <h1 className='text-lg md:text-xl xl:text-2xl'>Inicia sesión</h1>
      </div>

      <div className='flex flex-col gap-5 my-8'>
        <InputText
          isError={!!formState.errors.username}
          {...register('username', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Nombre de usuario',
            labelClassName: 'text-primary-content',
            hintText: formState.errors.username?.message,
          }}
        />
        <InputText
          type='password'
          isError={!!formState.errors.password}
          {...register('password', { required: 'Este campo es requerido' })}
          inputWrapperProps={{
            label: 'Contraseña',
            labelClassName: 'text-primary-content',
            hintText: formState.errors.password?.message,
          }}
        />
      </div>

      <div className='text-center my-5 flex flex-col gap-2'>
        <span>
          ¿Nuevo en 360-degrees?{' '}
          <Link className='text-primary' href='/registro'>
            Registrate
          </Link>
        </span>
      </div>

      <Button
        type='submit'
        loading={loading}
        className='w-full font-bold'
        isError={!!formState.errors.username || !!formState.errors.password}
      >
        Iniciar sesión
      </Button>
      {formState.errors.submit && (
        <div className='text-red-500 text-center mt-2'>
          {formState.errors.submit.message}
        </div>
      )}
    </form>
  )
}
