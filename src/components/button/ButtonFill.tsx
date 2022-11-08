import { ComponentProps, FC, memo } from 'react'

export const ButtonFill: FC<ComponentProps<'button'>> = memo((props) => {
  const className = 'bg-emerald-500 px-4 py-2 rounded text-white'
  return <button className={className} {...props}></button>
})
