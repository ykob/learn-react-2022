import React, { useRef } from 'react'
import { CheckBox } from '../components/form-element/CheckBox'
import { InputText } from '../components/form-element/InputText'
import { RadioButton } from '../components/form-element/RadioButton'

export function Form() {
  const ref = useRef<HTMLFormElement>(null)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(ref.current?.text)
    console.log(ref.current?.radioButton)
    console.log(ref.current?.checkBox)
  }

  return (
    <div>
      <h1 className="text-5xl mb-4">Form</h1>
      <form onSubmit={onSubmit} ref={ref}>
        <div className="mb-2">
          <InputText type="text" name="text" />
        </div>
        <div className="flex gap-4 mb-2">
          <RadioButton
            name="radioButton"
            label="RadioButton 1"
            value="radioButton1"
          />
          <RadioButton
            name="radioButton"
            label="RadioButton 2"
            value="radioButton2"
          />
          <RadioButton
            name="radioButton"
            label="RadioButton 3"
            value="radioButton3"
          />
        </div>
        <div className="flex gap-4 mb-2">
          <CheckBox name="checkBox" label="CheckBox 1" value="checkBox1" />
          <CheckBox name="checkBox" label="CheckBox 2" value="checkBox2" />
          <CheckBox name="checkBox" label="CheckBox 3" value="checkBox3" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
