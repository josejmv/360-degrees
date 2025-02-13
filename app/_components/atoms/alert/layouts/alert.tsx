import { twMerge } from 'tailwind-merge'

// components
import { AlertDescription } from '@/_components/atoms/alert/components/alert-description'
import { AlertContainer } from '@/_components/atoms/alert/components/alert-container'
import { AlertTitle } from '@/_components/atoms/alert/components/alert-title'

// utils
import { Icons } from '@/_components/atoms/alert/components/utils'

// types
import type { AlertProps } from './types'
import type { FC } from 'react'

export const Alert: FC<AlertProps> = ({
  title,
  variant,
  description,
  iconClassName,
  titleClassName,
  descriptionClassName,
  ...props
}) => {
  const Icon = Icons[variant]

  return (
    <AlertContainer {...props} variant={variant}>
      {props.icon ? (
        props.icon
      ) : (
        <Icon className={twMerge('w-5 h-5', iconClassName)} />
      )}
      <AlertTitle className={titleClassName}>{title}</AlertTitle>
      {description && (
        <AlertDescription className={descriptionClassName}>
          {description}
        </AlertDescription>
      )}
    </AlertContainer>
  )
}
