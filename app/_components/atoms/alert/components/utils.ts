import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid'

export const variants = {
  INFO: 'bg-info border-info-content text-info-content [&>svg]:text-info-content',
  ERROR:
    'bg-error border-error-content text-error-content [&>svg]:text-error-content',
  WARNING:
    'bg-warning border-warning-content text-warning-content [&>svg]:text-warning-content',
  SUCCESS:
    'bg-success border-success-content text-success-content [&>svg]:text-success-content',
}

export const Icons = {
  SUCCESS: CheckCircleIcon,
  INFO: InformationCircleIcon,
  ERROR: ExclamationCircleIcon,
  WARNING: ExclamationTriangleIcon,
}
