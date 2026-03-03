import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Submission from './components/Submission/Submission.jsx'
import AdminLogin from './components/AdminLogin/AdminLogin.jsx'
import View from './components/View/View.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} />
      <Route path='/submission' element={<Submission />} />
      <Route path='/login' element={<AdminLogin />} />
      <Route path='/read' element={<View />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
