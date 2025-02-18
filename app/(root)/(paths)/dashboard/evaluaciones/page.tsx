// main tools
import { axiosInstance } from '@/_lib/axios-instance'
import { getServerSession } from 'next-auth'

// components
import { EvaluationsTable } from './_components/evaluations-table'

// utils
import { authOptions } from '@/(root)/(paths)/api/auth/[...nextauth]'

// types
import type { NextPage } from 'next'

const EvaluationsPage: NextPage = async () => {
  await getServerSession(authOptions)
  const evaluations = await axiosInstance.get('/api/evaluations')

  return (
    <main className='flex flex-col gap-5'>
      <section className='bg-white p-4 rounded-2xl drop-shadow-md'>
        <h2 className='text-2xl font-bold'>Evaluaciones</h2>
        <p>
          En esta sección podrás ver a detalle y gestionar las evaluaciones
          hechas a tus empleados.
        </p>

        <div className='mt-4'>
          <EvaluationsTable evaluations={evaluations.data} />
        </div>
      </section>
    </main>
  )
}

export default EvaluationsPage
