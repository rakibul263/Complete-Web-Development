import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      }
    ]
  },{
    path: '/about',
    element: <div>About Me Here</div>,
  },
  {
    path: '/blog',
    element: <div>Blog Here</div>,
  },
  {
    path: '/app',
    // element: <App></App>
    Component: App,
  },
  {
    path: '/app2',
    element: <App></App>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
