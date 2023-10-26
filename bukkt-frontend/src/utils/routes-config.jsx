import Homepage from '../components/Homepage'
import Layout from '../components/Layout'
import Queue from '../components/Queue'
import Services from '../components/servicekpage/serviceslayout'

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
        element: <Services />,
      },
    ],
  },
]
