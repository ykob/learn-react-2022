import React, { useRef } from 'react'
import { CheckBox } from '../components/form-element/Checkbox'

export function Form() {
  const ref = useRef<HTMLFormElement>(null)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(ref.current)
  }

  return (
    <div>
      <h1 className="text-5xl mb-4">Form</h1>
      <form onSubmit={onSubmit} ref={ref}>
        <input type="text" name="text" />
        <div className="flex gap-4">
          <CheckBox name="checkbox" label="Checkbox1" value="checkbox1" />
          <CheckBox name="checkbox" label="Checkbox2" value="checkbox2" />
          <CheckBox name="checkbox" label="Checkbox3" value="checkbox3" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
