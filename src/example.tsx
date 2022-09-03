import React from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalHeader } from './components/global/GlobalHeader'

function App() {
  return (
    <div className="m-8">
      <GlobalHeader />
      <Outlet />
    </div>
  )
}

export default App
