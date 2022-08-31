import React, { memo, useId, useRef } from 'react'

export const CheckBox = memo(
  ({ name, value }: { name: string; value: string }) => {
    const element = useRef<HTMLInputElement>(null)
    const id = useId()

    return (
      <div className="flex gap-1">
        <input
          id={id}
          name={name}
          ref={element}
          type="checkbox"
          value={value}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    )
  }
)
