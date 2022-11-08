import { ComponentProps, FC, memo } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

export const RadioButton: FC<Props> = memo(({ label, ...props }) => {
  return (
    <label className="flex gap-1">
      <input {...props} type="radio" />
      <span>{label}</span>
    </label>
  )
})
