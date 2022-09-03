import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Form } from './views/Form'
import { ReactHookForm } from './views/ReactHookForm'

function App() {
  return (
    <div className="m-8">
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
