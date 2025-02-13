// main tools
import { forwardRef, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

// components
import { InputLayout } from '@/_components/atoms/inputs/layout'

// utils
import { infoTextVariants } from './utils'

// types
import type { InputTextAreaProps } from './types'

export const TextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  (
    {
      rows = 11,
      maxLength = 350,
      isError = false,
      inputWrapperProps,
      resizeHandleVisible = true,
      characterLimitLabel = 'characters left',
      ...props
    },
    ref
  ) => {
    const getInfoText = useCallback(() => {
      if (maxLength) {
        const charactersLeft =
          (maxLength || 0) - (props.value?.toString().length || 0)
        const variantKey =
          charactersLeft <= 15 && charactersLeft > 0
            ? 'warning'
            : charactersLeft <= 0
            ? 'error'
            : 'default'
        const Icon = infoTextVariants[variantKey].icon

        return (
          <div
            className={twMerge(
              'flex gap-1 text-sm',
              infoTextVariants[variantKey].color
            )}
          >
            {charactersLeft} {characterLimitLabel} <Icon className='w-5 h-5' />
          </div>
        )
      }
      return ''
    }, [maxLength, props.value, characterLimitLabel])

    return (
      <InputLayout
        {...inputWrapperProps}
        isError={isError}
        required={props.required}
        disabled={props.disabled}
        infoText={inputWrapperProps?.infoText ?? getInfoText()}
        infoTextClassName={twMerge(
          'ml-auto',
          inputWrapperProps?.infoTextClassName
        )}
        inputContentClassName={twMerge(
          'h-auto p-0',
          inputWrapperProps?.inputContentClassName
        )}
      >
        <textarea
          ref={ref}
          rows={rows}
          className={twMerge(
            'block !bg-transparent border-0 w-full focus:outline-none text-base-content p-4 disabled:cursor-not-allowed',
            isError && 'placeholder:text-error-content',
            resizeHandleVisible ? 'resize-y' : 'resize-none'
          )}
          {...props}
        />
      </InputLayout>
    )
  }
)
TextArea.displayName = 'TextArea'
