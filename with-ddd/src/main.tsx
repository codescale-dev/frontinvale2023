import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './presentation/Signup/Main.tsx'
import { servicesContext, defaultValue } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <servicesContext.Provider value={ defaultValue }>
      <Signup />
    </servicesContext.Provider>
  </React.StrictMode>,
)
