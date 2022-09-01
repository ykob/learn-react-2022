import React from 'react'

interface Props extends React.ComponentProps<'input'> {
  label: string
}

export const CheckBox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <label className="flex gap-1">
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </label>
  )
}
