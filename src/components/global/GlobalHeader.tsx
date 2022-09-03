import React from 'react'
import { Link } from 'react-router-dom'

export const GlobalHeader: React.FC = () => {
  return (
    <header className="flex gap-4 mb-8">
      <div className="font-bold">
        <Link to="/">learn-react-2022</Link>
      </div>
      <div>
        <a
          href="https://github.com/ykob/learn-react-2022"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </header>
  )
}
