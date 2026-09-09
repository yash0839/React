import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import AllCourses from './pages/AllCourses'
import Kodex from './pages/Kodex'
import Koder from './pages/Koder'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'courses',
          element: <Courses />,
          children: [
            { index: true, element: <AllCourses /> },
            { path: 'kodex', element: <Kodex /> },
            { path: 'koder', element: <Koder /> }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
