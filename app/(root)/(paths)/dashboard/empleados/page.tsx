// main tools
import { axiosInstance } from '@/_lib/axios-instance'

// components
import { EmployeesTable } from './_components/employees-table'

// types
import type { NextPage } from 'next'

const EmployeesPage: NextPage = async () => {
  const employees = await axiosInstance.get('/api/employees')

  return (
    <main className='flex flex-col gap-5'>
      <section className='bg-white p-4 rounded-2xl drop-shadow-md'>
        <h2 className='text-2xl font-bold'>Empleados</h2>
        <p>
          En esta sección podrás ver y gestionar a los empleados de tu negocio.
        </p>

        <div className='mt-4'>
          <EmployeesTable employees={employees.data} />
        </div>
      </section>
    </main>
  )
}

export default EmployeesPage
