import { ComponentProps, FC, memo } from 'react'

export const InputText: FC<ComponentProps<'input'>> = memo(
  ({ type = 'text', ...props }) => {
    const classNameBase = 'border border-black p-1 rounded'

    return (
      <input
        className={[classNameBase, classNameBase].join(' ')}
        type={type}
        {...props}
      />
    )
  }
)
