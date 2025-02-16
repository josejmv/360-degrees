// main tools
import dynamic from 'next/dynamic'

const importWatchEvaluationComponent = dynamic(
  () =>
    import('@/_components/molecules/watch-evaluation').then(
      (mod) => mod.WatchEvaluation
    ),
  { loading: () => <p>CARGANDO</p> }
)
const importCreateEvaluationComponent = dynamic(
  () =>
    import('@/_components/molecules/create-evaluation').then(
      (mod) => mod.CreateEvaluation
    ),
  { loading: () => <p>CARGANDO</p> }
)
const importDeleteEvaluationComponent = dynamic(
  () =>
    import('@/_components/molecules/confirm-delete-evaluation').then(
      (mod) => mod.ConfirmDeleteEvaluation
    ),
  { loading: () => <p>CARGANDO</p> }
)

export const userCrudCases = {
  WATCH: importWatchEvaluationComponent,
  CREATE: importCreateEvaluationComponent,
  DELETE: importDeleteEvaluationComponent,
}
