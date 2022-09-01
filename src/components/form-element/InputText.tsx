import React from 'react'

export const InputText: React.FC<React.ComponentProps<'input'>> = (props) => {
  return <input {...props} type="text" />
}
