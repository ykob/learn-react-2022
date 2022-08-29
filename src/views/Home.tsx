import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-4">Home</h1>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </div>
  )
}
