import {
  Popover as HeadlessDropdown,
  PopoverGroup as DropdownGroup,
  PopoverBackdrop as DropdownOverlay,
} from '@headlessui/react'
import { DropdownContent } from './dropdown-content'
import { DropdownTrigger } from './dropdown-trigger'

export const Dropdown = {
  Group: DropdownGroup,
  Content: DropdownContent,
  Trigger: DropdownTrigger,
  Wrapper: HeadlessDropdown,
  Backdrop: DropdownOverlay,
}
