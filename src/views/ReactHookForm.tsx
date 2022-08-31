import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  gender: string
}

export function ReactHookForm() {
  const { handleSubmit, register } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
          <input defaultValue="" placeholder="name" {...register('name')} />
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              {...register('gender')}
              id="gender-male"
              type="radio"
              value="Male"
            />
            <label htmlFor="gender-male">Male</label>
          </div>
          <div className="flex gap-2">
            <input
              {...register('gender')}
              id="gender-female"
              type="radio"
              value="Female"
            />
            <label htmlFor="gender-female">Female</label>
          </div>
          <div className="flex gap-2">
            <input
              {...register('gender')}
              id="gender-other"
              type="radio"
              value="Other"
            />
            <label htmlFor="gender-other">Other</label>
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
