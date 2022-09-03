import React from 'react'

export const GlobalHeader: React.FC = () => {
  return (
    <header className="flex gap-4 mb-8">
      <div className="font-bold">learn-react-2022</div>
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
