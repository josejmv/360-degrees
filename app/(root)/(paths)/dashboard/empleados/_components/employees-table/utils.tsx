// main tools
import dynamic from 'next/dynamic'

const importCreateUserComponent = dynamic(
  () =>
    import('@/_components/molecules/create-user').then((mod) => mod.CreateUser),
  { loading: () => <p>CARGANDO</p> }
)
const importUpdateUserComponent = dynamic(
  () =>
    import('~/app/_components/molecules/update-user').then(
      (mod) => mod.UpdateUser
    ),
  { loading: () => <p>CARGANDO</p> }
)
const importDeleteUserComponent = dynamic(
  () =>
    import('@/_components/molecules/confirm-delete-user').then(
      (mod) => mod.ConfirmDeleteUser
    ),
  { loading: () => <p>CARGANDO</p> }
)
const importFeedbackUserComponent = dynamic(
  () =>
    import('@/_components/molecules/feedback-user').then(
      (mod) => mod.FeedbackUser
    ),
  { loading: () => <p>CARGANDO</p> }
)
const importReportUserComponent = dynamic(
  () =>
    import('@/_components/molecules/report-user').then((mod) => mod.ReportUser),
  { loading: () => <p>CARGANDO</p> }
)

export const userCrudCases = {
  UPDATE: importUpdateUserComponent,
  CREATE: importCreateUserComponent,
  DELETE: importDeleteUserComponent,
  REPORT: importReportUserComponent,
  FEEDBACK: importFeedbackUserComponent,
}
