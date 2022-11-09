import { ComponentProps, ElementType, FC, memo } from 'react'

type Props = ComponentProps<'button'> & {
  as?: ElementType
}

export const ButtonFill: FC<Props> = memo(
  ({ as: Tag = 'button', children, className, ...props }) => {
    const classNameBase = 'bg-emerald-500 px-4 py-2 rounded text-white'

    return (
      <Tag className={[className, classNameBase].join(' ')} {...props}>
        {children}
      </Tag>
    )
  }
)
