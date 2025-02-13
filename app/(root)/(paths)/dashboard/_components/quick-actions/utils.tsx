// main tools
import dynamic from 'next/dynamic'

// icons
import { UserPlusIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'

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
  {
    type: 'EVALUATION',
    Icon: DocumentCheckIcon,
    label: 'Añadir evaluación',
    actionLabel: 'Evaluar empleado',
    description:
      'Agrega una nueva evaluación a tus empleados para mejorar su rendimiento',
  },
]

const importCreateUserComponent = dynamic(
  () =>
    import('@/_components/molecules/create-user').then((mod) => mod.CreateUser),
  { loading: () => <p>CARGANDO</p> }
)
const importEvaluateUserComponent = dynamic(
  () =>
    import('@/_components/molecules/create-evaluation').then(
      (mod) => mod.CreateEvaluation
    ),
  { loading: () => <p>CARGANDO</p> }
)

export const createCases = {
  USER: importCreateUserComponent,
  EVALUATION: importEvaluateUserComponent,
}
