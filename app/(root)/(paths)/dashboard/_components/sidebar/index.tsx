'use client'

// main tools
import { signOut } from 'next-auth/react'

// components
import { Button } from '@/_components/atoms/button'
import Link from 'next/link'

// icons
import {
  HomeIcon,
  UserIcon,
  PowerIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/solid'

// types
import type { FC } from 'react'

export const Sidebar: FC = () => (
  <aside className='bg-white p-8 rounded-r-md drop-shadow-md hidden md:flex flex-col justify-between'>
    <div>
      <Link title='Dashboard' href={`/dashboard`}>
        <Button variant='GHOST' color='TERTIARY' className='mb-4'>
          <HomeIcon className='w-6 h-6' />
        </Button>
      </Link>
      <Link title='Empleados' href={`/dashboard/empleados`}>
        <Button variant='GHOST' color='TERTIARY' className='mb-4'>
          <UserIcon className='w-6 h-6' />
        </Button>
      </Link>
      <Link title='Evaluaciones' href={`/dashboard/evaluaciones`}>
        <Button variant='GHOST' color='TERTIARY' className='mb-4'>
          <ClipboardDocumentListIcon className='w-6 h-6' />
        </Button>
      </Link>
    </div>
    <div>
      <Button
        variant='GHOST'
        color='TERTIARY'
        className='mb-4'
        title='Cerrar sesión'
        onClick={() => signOut({ callbackUrl: '/iniciar-sesion' })}
      >
        <PowerIcon className='w-6 h-6' />
      </Button>
    </div>
  </aside>
)
