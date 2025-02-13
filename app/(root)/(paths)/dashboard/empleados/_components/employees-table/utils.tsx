// main tools
import dynamic from 'next/dynamic'

const importCreateUserComponent = dynamic(
  () =>
    import('@/_components/molecules/create-user').then((mod) => mod.CreateUser),
  { loading: () => <p>CARGANDO</p> }
)
const importDeleteUserComponent = dynamic(
  () =>
    import('@/_components/molecules/confirm-delete-user').then(
      (mod) => mod.ConfirmDeleteUser
    ),
  { loading: () => <p>CARGANDO</p> }
)

export const userCrudCases = {
  CREATE: importCreateUserComponent,
  DELETE: importDeleteUserComponent,
}
