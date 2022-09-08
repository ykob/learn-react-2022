import React, { memo, useEffect, useState } from 'react'

interface Props {
  count: number
}

export const EffectCounter: React.FC<Props> = memo((props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.count])

  return (
    <div>
      <div>This is count in the child component (depending on countA) : {count}</div>
    </div>
  )
})
