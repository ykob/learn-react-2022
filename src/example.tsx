import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './views/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="m-8">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
