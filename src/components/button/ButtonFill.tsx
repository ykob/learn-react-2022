import { ComponentProps, FC, memo } from 'react'

export const ButtonFill: FC<ComponentProps<'button'>> = memo(
  ({ children, className, ...props }) => {
    const classNameBase = 'bg-emerald-500 px-4 py-2 rounded text-white'

    return (
      <button className={[className, classNameBase].join(' ')} {...props}>
        {children}
      </button>
    )
  }
)
