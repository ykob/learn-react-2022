import React, { useCallback, useState } from 'react'
import { ButtonFill } from '../../components/button'
import { EffectCounter } from './EffectCounter'

export function UseEffect() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const handleSetCountA = useCallback(() => {
    setCountA(countA + 1)
  }, [countA])
  const handleSetCountB = useCallback(() => {
    setCountB(countB + 1)
  }, [countB])

  return (
    <div>
      <h1 className="text-5xl mb-4">useEffect</h1>
      <div className="mb-4">
        <div>countA : {countA}</div>
        <div>countB : {countB}</div>
      </div>
      <div className="flex gap-4 mb-4">
        <ButtonFill onClick={handleSetCountA}>add countA</ButtonFill>
        <ButtonFill onClick={handleSetCountB}>add countB</ButtonFill>
      </div>
      <EffectCounter count={countA} />
    </div>
  )
}
