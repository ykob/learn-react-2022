import React, { useRef } from 'react'
import { CheckBox } from '../components/form-element/Checkbox'

export function Form() {
  const ref = useRef<HTMLInputElement>(null)
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.checkbox)
  }
  return (
    <div>
      <h1 className="text-5xl mb-4">Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" ref={ref} />
        <div className='flex gap-4'>
          <CheckBox name="checkbox" value="checkbox1" />
          <CheckBox name="checkbox" value="checkbox2" />
          <CheckBox name="checkbox" value="checkbox3" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
