export const initialPosition = {
  top: 'top-0',
  bottom: 'bottom-0',
  left: 'left-0 lg:pr-10',
  right: 'right-0 lg:pl-10',
  center: 'min-h-full left-1/2 transform -translate-x-1/2 items-center',
}
export const openDirection = {
  top: 'data-[closed]:-translate-y-full',
  left: 'data-[closed]:-translate-x-full',
  right: 'data-[closed]:translate-x-full',
  bottom: 'data-[closed]:translate-y-full',
  center: 'data-[closed]:scale-75 data-[closed]:opacity-0 duration-300',
}
