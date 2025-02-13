// main tools
import { twMerge } from 'tailwind-merge'

// styles
import './styles.css'

// types
import type { InputLayoutProps } from './types'
import type { FC } from 'react'

export const InputLayout: FC<InputLayoutProps> = ({
  id,
  label,
  isError,
  caption,
  disabled,
  infoText,
  children,
  hintText,
  required,
  leftAddon,
  rightAddon,
  labelClassName,
  captionClassName,
  infoTextClassName,
  hintTextClassName,
  inputItemClassName,
  containerClassName,
  leftAddonClassName,
  rightAddonClassName,
  inputContentClassName,
  ...props
}) => (
  <div
    {...props}
    data-testid='input-container'
    className={twMerge(
      'w-full',
      disabled && 'opacity-50 cursor-not-allowed',
      containerClassName
    )}
  >
    {/* Top side */}
    {label && (
      <div
        data-testid='input-label'
        className={twMerge(
          'mb-1',
          disabled && 'opacity-50 cursor-not-allowed',
          isError ? 'text-error-content' : 'text-base-content'
        )}
      >
        <label
          htmlFor={id}
          className={twMerge('text-base font-medium', labelClassName)}
        >
          {label}
          {required && '*'}
        </label>
      </div>
    )}
    {caption && (
      <p
        className={twMerge(
          'flex mb-1 text-sm font-normal text-base-content',
          captionClassName
        )}
      >
        {caption}
      </p>
    )}

    {/* Input */}
    <div
      className={twMerge(
        'flex group h-12 items-center border rounded-sm gap-2 bg-base-100',
        'focus-within:border-primary focus-within:outline focus-within:outline-1 focus-within:outline-primary',
        isError &&
          'border-error-content focus-within:border-error-content focus-within:outline-error-content',
        !leftAddon && 'pl-3',
        !rightAddon && 'pr-3',
        inputContentClassName
      )}
    >
      {/* TODO: add loading skeleton */}
      {leftAddon && (
        <div
          className={twMerge(
            'flex place-self-stretch rounded-sm bg-secondary items-center px-3',
            leftAddonClassName
          )}
        >
          {leftAddon}
        </div>
      )}
      <div className={twMerge('w-full', inputItemClassName)}>{children}</div>
      {rightAddon && (
        <div
          className={twMerge(
            'flex place-self-stretch items-center rounded-sm px-3 bg-secondary',
            rightAddonClassName
          )}
        >
          {rightAddon}
        </div>
      )}
    </div>

    {/* Bottom side */}
    {!!(hintText || infoText) && (
      <div className='mt-1 w-full flex justify-between text-base-content-shade-lighten-20'>
        {!!hintText && (
          <span
            data-testid='input-hint-text'
            className={twMerge(
              'text-sm font-normal leading-1 text-base-content text-shade-light-20',
              isError && 'text-error-content',
              hintTextClassName
            )}
          >
            {hintText}
          </span>
        )}
        {!!infoText && (
          <span
            data-testid='input-info-text'
            className={twMerge(
              'text-sm  font-normal leading-1 text-base-content text-shade-light-20 text-right',
              isError && 'text-error-content',
              infoTextClassName
            )}
          >
            {infoText}
          </span>
        )}
      </div>
    )}
  </div>
)
