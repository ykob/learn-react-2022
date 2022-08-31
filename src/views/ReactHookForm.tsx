import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  example: string,
}

export function ReactHookForm() {
  const { handleSubmit, register } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <div>
      <h1 className="text-5xl mb-4">React Hook Form</h1>
      <ul className="mb-4">
        <li>
          <a
            href="https://react-hook-form.com/"
            rel="noreferrer"
            target="_blank"
          >
            https://react-hook-form.com/
          </a>
        </li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input defaultValue="test" {...register('example')} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
