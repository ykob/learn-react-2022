import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Form } from './views/Form'
import { ReactHookForm } from './views/ReactHookForm'

function App() {
  return (
    <BrowserRouter>
      <div className="m-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
