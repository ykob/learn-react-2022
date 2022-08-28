import React, { ChangeEventHandler, memo, useId, useRef } from 'react'

export const CheckBox = memo(({
  checked,
  onChange,
  name,
}: {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  name: string
}) => {
  const element = useRef<HTMLInputElement>(null)
  const id = useId()

  return (
    <div className="flex gap-1">
      <input
        checked={checked}
        id={id}
        name={name}
        ref={element}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={id}>{String(checked)}</label>
    </div>
  )
})
