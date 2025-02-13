'use client'

// main tools
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

// components
import { InputLayout } from '@/_components/atoms/inputs/layout'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import ReactSelect from 'react-select'

// utils
import { InputSelectStyles } from './utils'

// types
import type { InputSelectProps } from './types'
import type { GroupBase } from 'react-select'
import type Select from 'react-select/base'
import type { FC, Ref } from 'react'

export const InputSelect: FC<InputSelectProps> = forwardRef(
  (
    {
      isError,
      disabled,
      inputWrapperProps,
      maxValuesToShow = 3,
      closeMenuOnSelect = false,
      hideSelectedOptions = true,
      ...inputProps
    },
    ref: Ref<Select<unknown, boolean, GroupBase<unknown>>>
  ) => (
    <InputLayout
      {...inputWrapperProps}
      isError={isError}
      disabled={disabled}
      required={inputProps.required}
      inputContentClassName={twMerge(
        'px-0 py-1 h-auto',
        inputWrapperProps?.inputContentClassName
      )}
    >
      <ReactSelect
        {...inputProps}
        ref={ref}
        isDisabled={disabled}
        id={inputProps.id ?? 'react-select'}
        closeMenuOnSelect={closeMenuOnSelect}
        hideSelectedOptions={hideSelectedOptions}
        instanceId={inputProps.id ?? 'react-select'}
        onChange={(value) =>
          inputProps.onChange?.({
            target: {
              value: value as { [k: string]: string },
              name: inputProps.name,
            },
          })
        }
        styles={InputSelectStyles({
          ...inputProps,
          inputWrapperProps,
          isError,
          disabled,
          maxValuesToShow,
        })}
        components={{
          ClearIndicator: (clearIndicatorProps) => (
            <>
              {maxValuesToShow &&
                clearIndicatorProps.getValue().length > maxValuesToShow && (
                  <div className='bg-base-200 hover:bg-base-200-shade-state-hover rounded text-xs font-semibold p-1'>
                    +{clearIndicatorProps.getValue().length - maxValuesToShow}
                  </div>
                )}
              <XMarkIcon
                onClick={clearIndicatorProps.clearValue}
                className='size-3 mr-1 cursor-pointer'
              />
            </>
          ),
        }}
        className={twMerge(
          '!bg-transparent border-0 p-0 w-full h-auto focus:outline-none text-base-content',
          disabled && 'cursor-not-allowed',
          inputProps.className
        )}
      />
    </InputLayout>
  )
)
InputSelect.displayName = 'InputSelect'
