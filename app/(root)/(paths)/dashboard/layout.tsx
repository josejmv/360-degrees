// components
import { Sidebar } from './_components/sidebar'

// types
import type { FC, PropsWithChildren } from 'react'

const BusinessLayout: FC<PropsWithChildren> = async ({ children }) => (
  <div className='flex gap-4 min-h-screen'>
    <Sidebar />
    <div className='p-4 w-full'>{children}</div>
  </div>
)

export default BusinessLayout
