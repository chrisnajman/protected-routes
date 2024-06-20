import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <NavLink
            to="."
            aria-current="page"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            aria-current="page"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vans"
            aria-current="page"
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="host"
            aria-current="page"
          >
            Host
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
