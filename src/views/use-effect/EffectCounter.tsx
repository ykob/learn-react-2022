import React, { memo, useEffect, useRef, useState } from 'react'

interface Props {
  count: number
}

export const EffectCounter: React.FC<Props> = memo((props) => {
  const isMounted = useRef(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // prevent to run when the component is rendered at the first time.
    if (isMounted.current === false) {
      isMounted.current = true
      return
    }

    setCount(count + 2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.count])
  
  return (
    <div>
      <div>This is count in the child component (depending on countA) : {count}</div>
    </div>
  )
})
