import Homepage from '../components/Homepage'
import Layout from '../components/Layout'
import Queue from '../components/Queue'

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Homepage /> },
      {
        path: '/queue',
        element: <Queue />,
      },
      {
        path: '/services',
        element: <Queue />,
      }
    ],
  },
]
