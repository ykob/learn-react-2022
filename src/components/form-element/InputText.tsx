import { ComponentProps, FC, memo } from 'react'

export const InputText: FC<ComponentProps<'input'>> = memo((props) => {
  return (
    <input {...props} className="border border-black p-1 rounded" type="text" />
  )
})
