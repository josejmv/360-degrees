// types
import type { ForwardRefExoticComponent, SVGProps } from 'react'

export type SVGIconProps = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'>
>

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var mongoose: any
}
