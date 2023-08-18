import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './presentation/Signup/Main.tsx'
import Login from './presentation/Login/Main.tsx'
import ForgotPassword from './presentation/ForgotPassword/Main.tsx'
import Update from './presentation/Update/Main.tsx'
import { servicesContext, defaultValue } from './context.ts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/update',
    element: <Update />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <servicesContext.Provider value={ defaultValue }>
      <RouterProvider router={router} />
    </servicesContext.Provider>
  </React.StrictMode>,
)
