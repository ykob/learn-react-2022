import React, { useState } from 'react'
import { EffectCounter } from './EffectCounter'

export function UseEffect() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  return (
    <div>
      <h1 className="text-5xl mb-4">useEffect</h1>
      <div className="mb-4">
        <div>countA : {countA}</div>
        <div>countB : {countB}</div>
      </div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setCountA(countA + 1)}>add countA</button>
        <button onClick={() => setCountB(countB + 1)}>add countB</button>
      </div>
      <EffectCounter count={countA} />
    </div>
  )
}
