import React from 'react'

export const ButtonFill: React.FC<React.ComponentProps<'button'>> = (props) => {
  const className = 'bg-emerald-500 px-4 py-2 rounded text-white'
  return (
    <button className={className} {...props}></button>
  )
}
