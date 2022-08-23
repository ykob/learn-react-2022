import React, { useId, useMemo, useRef, useState } from 'react'

export const CheckBox = () => {
  const element = useRef<HTMLInputElement>(null)
  const id = useId();
  const [checked, setChecked] = useState(false)

  const handleClick = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
  }, [])

  return (
    <label htmlFor={id} className="flex">
      <input
        checked={checked}
        id={id}
        ref={element}
        type="checkbox"
        onChange={handleClick}
      />
      <div>
        {checked}
      </div>
    </label>
  )
}
