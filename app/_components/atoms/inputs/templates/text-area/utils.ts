import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid'

export const infoTextVariants = {
  default: { color: 'shade-text-lighten-20', icon: () => null },
  warning: { color: 'text-warning-content', icon: ExclamationTriangleIcon },
  error: { color: 'text-error-content', icon: ExclamationCircleIcon },
}
