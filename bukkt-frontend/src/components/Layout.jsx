import Nav from "./Nav"
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links */}
          <Nav />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
