import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'Mobiles', Component: Mobiles},
    ]
  },
  {
    path: '/about',
    element: <div>About for me</div>
  },
  {
    path: '/blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: '/app',
    Component: App,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
