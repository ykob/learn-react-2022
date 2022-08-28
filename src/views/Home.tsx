import React, { useState, useMemo, useCallback } from 'react'
import { CheckBox } from '../components/form-element/Checkbox'

export function Home() {
  const [checked, setChecked] = useState(false)

  const onChange = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
  }, [])

  const onChangeParent = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  return (
    <div className='p-4'>
      <h2>Home</h2>
      <div>
        Checked: {String(checked)}
      </div>
      <button onClick={onChangeParent}>check</button>
      <CheckBox checked={checked} name="checkbox" onChange={onChange} />
    </div>
  )
}
