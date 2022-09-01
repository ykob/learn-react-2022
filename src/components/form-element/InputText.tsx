import React from 'react'

export const InputText: React.FC<React.ComponentProps<'input'>> = (props) => {
  return <input {...props} className="border border-black p-1 rounded" type="text" />
}
