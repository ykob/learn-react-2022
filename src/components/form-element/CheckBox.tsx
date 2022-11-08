import { ComponentProps, FC, memo } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

export const CheckBox: FC<Props> = memo(({ label, ...props }) => {
  return (
    <label className="flex gap-1">
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </label>
  )
})
