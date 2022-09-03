import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalHeader } from './components/global/GlobalHeader'
import { Home } from './views/Home'
import { Form } from './views/Form'
import { ReactHookForm } from './views/ReactHookForm'

function App() {
  return (
    <div className="m-8">
      <GlobalHeader />
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
