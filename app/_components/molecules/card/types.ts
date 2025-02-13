import type { SVGIconProps } from '@/_types'

export type CardProps = {
  type?: string
  label: string
  href?: string
  Icon: SVGIconProps
  actionLabel: string
  description: string
  onClick?: () => void
  actionIcon?: SVGIconProps
}
