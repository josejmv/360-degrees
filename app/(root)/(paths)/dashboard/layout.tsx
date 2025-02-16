// components
import { Sidebar } from './_components/sidebar'
import { Header } from './_components/header'

// types
import type { FC, PropsWithChildren } from 'react'

const BusinessLayout: FC<PropsWithChildren> = async ({ children }) => (
  <div className='md:flex gap-4 min-h-screen'>
    <Sidebar />
    <Header />
    <div className='p-4 w-full'>{children}</div>
  </div>
)

export default BusinessLayout
