// types
import type { GroupBase, OptionProps, StylesConfig } from 'react-select'
import type { InputSelectProps, SelectOptionType } from './types'

export const InputSelectStyles: (
  inputProps: InputSelectProps
) => StylesConfig = (inputProps) => ({
  menu: (currentStyles) => ({
    ...currentStyles,
    padding: '0 4px',
    gap: '0.25rem',
  }),
  control: (currentStyles) => ({
    ...currentStyles,
    padding: '0',
    borderWidth: '0',
    boxShadow: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    margin: 0,
    color:
      'color-mix(in srgb, var(--tradesorg-base-content), var(--tradesorg-light) 40%)',
  }),
  option: (currentStyles, itemProps) => {
    const typedItemProps = itemProps as OptionProps<
      SelectOptionType,
      boolean,
      GroupBase<SelectOptionType>
    >
    const { data } = typedItemProps

    const color =
      data.color ||
      (verifyActive(typedItemProps)
        ? 'var(--tradesorg-base-100)'
        : 'var(--tradesorg-base-content)')

    return {
      ...currentStyles,
      borderRadius: '0.25rem',
      color,
      backgroundColor: verifyActive(typedItemProps)
        ? 'var(--tradesorg-primary)'
        : 'var(--tradesorg-base-100)',
    }
  },
  multiValue: (currentStyles, multiValueProps) => {
    const data = multiValueProps.data as SelectOptionType
    const color = data?.color || 'var(--tradesorg-base-200)'
    const customColor = `color-mix(in srgb, ${color}`
    const backgroundColor = `${customColor}, white 90%)`
    const hoverBackgroundColor = `${customColor}, white 70%)`

    return {
      ...currentStyles,
      borderRadius: '0.25rem',
      backgroundColor,
      display:
        inputProps.maxValuesToShow &&
        multiValueProps.index < inputProps.maxValuesToShow
          ? 'flex'
          : 'none',
      ':hover': {
        backgroundColor: data?.color
          ? hoverBackgroundColor
          : 'color-mix(in srgb, var(--tradesorg-base-200), var(--tradesorg-dark) 8%)',
      },
    }
  },
  multiValueLabel: (currentStyles, multiValueProps) => {
    const data = multiValueProps.data as SelectOptionType
    const color = data?.color || 'var(--tradesorg-base-content)'

    return {
      ...currentStyles,
      color,
    }
  },
  multiValueRemove: (currentStyles) => ({
    ...currentStyles,
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    ':hover': { backgroundColor: 'transparent' },
  }),
  indicatorSeparator: (currentStyles) => ({
    ...currentStyles,
    display: inputProps.indicatorSeparatorVisible === false ? 'none' : 'block',
  }),
  dropdownIndicator: (currentStyles) => ({
    ...currentStyles,
    display: inputProps.dropdownIndicatorVisible === false ? 'none' : 'block',
  }),
})

function verifyActive(
  itemProps: OptionProps<SelectOptionType, boolean, GroupBase<SelectOptionType>>
) {
  return itemProps.isFocused || itemProps.isSelected
}
