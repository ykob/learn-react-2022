import React, { useId, useMemo, useRef, useState } from 'react'

export const CheckBox = ({ name }: { name: string }) => {
  const element = useRef<HTMLInputElement>(null)
  const id = useId()
  const [checked, setChecked] = useState(false)

  const handleClick = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
  }, [])

  return (
    <div className="flex gap-1">
      <input
        checked={checked}
        id={id}
        name={name}
        ref={element}
        type="checkbox"
        onChange={handleClick}
      />
      <label htmlFor={id}>{String(checked)}</label>
    </div>
  )
}
