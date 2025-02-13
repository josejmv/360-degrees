// components
import { QuickActions } from './_components/quick-actions'

// types
import type { NextPage } from 'next'

const BusinessPage: NextPage = async () => {
  return (
    <main className='flex flex-col gap-5'>
      <QuickActions />
    </main>
  )
}

export default BusinessPage
