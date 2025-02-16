'use client'

// main tools
import { signOut } from 'next-auth/react'
import { useState } from 'react'

// components
import {
  HomeIcon,
  UserIcon,
  Bars3Icon,
  PowerIcon,
  ArrowRightIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/solid'
import { Button } from '~/app/_components/atoms/button'
import { Drawer } from '@/_components/atoms/drawer'
import Link from 'next/link'

// types
import type { FC } from 'react'

export const Header: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <div className='bg-white p-4 rounded-r-md drop-shadow-md flex md:hidden flex-col justify-between mb-3'>
        <Bars3Icon
          className='w-6 h-6 cursor-pointer'
          onClick={() => setShowDrawer(!showDrawer)}
        />
      </div>

      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className='px-4 py-8 flex flex-col justify-between h-[95%]'>
          <div>
            <Link title='Dashboard' href={`/dashboard`}>
              <Button
                color='SECONDARY'
                className='mb-4 flex gap-4 items-center w-full justify-start px-4'
              >
                <HomeIcon className='w-6 h-6' />
                <p className='font-bold text-lg'>Dashboard</p>
                <ArrowRightIcon className='w-6 h-6 ms-auto' />
              </Button>
            </Link>
            <Link title='Empleados' href={`/dashboard/empleados`}>
              <Button
                color='SECONDARY'
                className='mb-4 flex gap-4 items-center w-full justify-start px-4'
              >
                <UserIcon className='w-6 h-6' />
                <p className='font-bold text-lg'>Empleados</p>
                <ArrowRightIcon className='w-6 h-6 ms-auto' />
              </Button>
            </Link>
            <Link title='Evaluaciones' href={`/dashboard/evaluaciones`}>
              <Button
                color='SECONDARY'
                className='mb-4 flex gap-4 items-center w-full justify-start px-4'
              >
                <ClipboardDocumentListIcon className='w-6 h-6' />
                <p className='font-bold text-lg'>Evaluaciones</p>
                <ArrowRightIcon className='w-6 h-6 ms-auto' />
              </Button>
            </Link>
          </div>
          <Button
            color='SECONDARY'
            className='flex gap-4 items-center w-full justify-start px-4'
            onClick={() => signOut({ callbackUrl: '/iniciar-sesion' })}
          >
            <PowerIcon className='w-6 h-6' />
            <p className='font-bold text-lg'>Cerrar sesión</p>
          </Button>
        </div>
      </Drawer>
    </>
  )
}
