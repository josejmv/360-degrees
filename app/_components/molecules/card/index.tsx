// icons
import { PlusIcon, LinkIcon } from '@heroicons/react/24/solid'

// components
import { Button } from '@/_components/atoms/button'
import Link from 'next/link'

// types
import type { CardProps } from './types'
import type { FC } from 'react'

export const Card: FC<CardProps> = (props) => (
  <div className='rounded-lg bg-base-200 p-1 flex flex-col justify-between'>
    <div className='flex gap-2 p-4'>
      <props.Icon className='size-8 bg-base-300-shade-darken-8 rounded-md p-1' />
      <div className='w-4/5'>
        <p className='font-semibold text-lg'>{props.label}</p>
        <p className='text-sm text-secondary-content'>{props.description}</p>
      </div>
    </div>
    {(props.href || props.onClick) && (
      <div className='bg-white rounded-lg'>
        {props.href ? (
          <Link href={props.href}>
            <Button
              variant='GHOST'
              color='TERTIARY'
              className='w-full'
              value={props.type}
            >
              <LinkIcon className='size-5 me-2' /> {props.actionLabel}
            </Button>
          </Link>
        ) : (
          <Button
            variant='GHOST'
            color='TERTIARY'
            className='w-full'
            value={props.type}
            onClick={props.onClick}
          >
            <PlusIcon className='size-5 me-2' /> {props.actionLabel}
          </Button>
        )}
      </div>
    )}
  </div>
)
