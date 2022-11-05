import { FC } from 'react'
import css from 'styled-jsx/css'

const Child: FC = function () {
  return (
    <div>
      <p>Child</p>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  div {
    color: #fff;
    background-color: #333;
  }
`

export default Child
