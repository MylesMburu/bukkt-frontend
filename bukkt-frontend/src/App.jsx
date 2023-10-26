import { useRoutes } from "react-router-dom"
import { routesConfig } from "./utils/routes-config"

function App() {
  const routes = useRoutes(routesConfig)
  return (
    <>
     { routes}
    </>
  )
}

export default App
