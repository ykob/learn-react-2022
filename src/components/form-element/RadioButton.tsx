import React from 'react'

interface Props extends React.ComponentProps<'input'> {
  label: string
}

export const RadioButton: React.FC<Props> = ({ label, ...props }) => {
  return (
    <label className="flex gap-1">
      <input {...props} type="radio" />
      <span>{label}</span>
    </label>
  )
}
