'use client'

// components
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from '@/_components/atoms/tabs'
import { DialogTitle, Description } from '@headlessui/react'
import { EvaluationStep } from './evaluations-step'
import { ProfileStep } from './profile-step'

// types
import type { FC } from 'react'

type UpdateUserProps = {
  id: string
}

export const UpdateUser: FC<UpdateUserProps> = ({ id }) => {
  return (
    <div>
      <DialogTitle className='text-xl text-center font-bold'>
        Editar usuario
      </DialogTitle>
      <Description className='text-center text-sm'>
        Actualiza la información del perfil o gestione las evaluaciones del
        usuario
      </Description>
      <br />

      <Tabs defaultValue='profile'>
        <TabsList className='mb-4'>
          <TabsTrigger value='profile'>Perfil</TabsTrigger>
          <TabsTrigger value='evaluations'>Evaluaciones</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <ProfileStep id={id} />
        </TabsContent>
        <TabsContent value='evaluations'>
          <EvaluationStep id={id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
