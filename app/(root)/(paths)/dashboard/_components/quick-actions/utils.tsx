// main tools
import dynamic from 'next/dynamic'

// icons
import { UserPlusIcon } from '@heroicons/react/24/solid'

// types
import type { CardProps } from '@/_components/molecules/card/types'

export const actions: CardProps[] = [
  {
    type: 'USER',
    Icon: UserPlusIcon,
    label: 'Añadir usuario',
    actionLabel: 'Registrar usuario',
    description:
      'Agrega un nuevo usuario de forma rápida con solo unos simples pasos',
  },
]

const importCreateUserComponent = dynamic(
  () =>
    import('@/_components/molecules/create-user').then((mod) => mod.CreateUser),
  { loading: () => <p>CARGANDO</p> }
)

export const createCases = {
  USER: importCreateUserComponent,
}
